import axios from "axios";
import { toast } from "react-toastify";

let refreshTokenFunction = null;

export const setRefreshTokenCallbackForAxios = (refreshToken) => {
  refreshTokenFunction = refreshToken;
};

// Shared promise for the active refresh call
let refreshPromise = null;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000, // 60 seconds for file uploads
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;

    // For FormData, let axios handle Content-Type automatically
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
      console.log("🔧 FormData detected, letting axios handle Content-Type");
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    console.log("📡 Request config:", {
      url: config.url,
      method: config.method,
      headers: config.headers,
      isFormData: config.data instanceof FormData,
    });

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log("❌ Axios error response:", error);
    console.log("❌ Error code:", error.code);
    console.log("❌ Error message:", error.message);
    console.log("❌ Request URL:", originalRequest?.url);

    // Handle network errors
    if (
      error.code === "ERR_NETWORK" ||
      error.code === "NETWORK_ERROR" ||
      error.code === "ECONNABORTED" ||
      error.message === "Network Error" ||
      !error.response
    ) {
      console.log("🌐 Network error detected - checking connectivity...");
      console.log("Request method:", originalRequest?.method);
      console.log(
        "Request data type:",
        originalRequest?.data?.constructor?.name
      );

      let networkMessage =
        "Không thể kết nối tới server. Vui lòng kiểm tra kết nối mạng.";

      if (error.code === "ECONNABORTED") {
        networkMessage = "Yêu cầu quá lâu. File có thể quá lớn hoặc mạng chậm.";
      }

      try {
        toast.error(networkMessage);
      } catch (toastError) {
        console.error("Toast error:", toastError);
      }
      return Promise.reject({
        code: error.code || "NETWORK_ERROR",
        message: networkMessage,
        isNetworkError: true,
        originalError: error.message,
      });
    }

    // Handle validation errors (400)
    if (error.response && error.response.status === 400) {
      const errorData = error.response.data;
      console.log("400 Error data:", errorData);

      if (errorData.error && typeof errorData.error === "object") {
        const errorMessage = errorData.error.message || "Validation error";
        console.log("🚨 About to show Toast:", errorMessage);
        try {
          toast.error(errorMessage);
        } catch (toastError) {
          console.error("Toast error:", toastError);
        }
        console.log("🚨 Toast.error called successfully");
        return Promise.reject(new Error(errorMessage));
      }

      if (errorData.errors && Array.isArray(errorData.errors)) {
        const errorMessages = errorData.errors
          .map((err) => {
            if (typeof err === "object" && err.message) {
              return err.message;
            }
            return typeof err === "string" ? err : "Validation error";
          })
          .join(", ");
        try {
          toast.error(errorMessages);
        } catch (toastError) {
          console.error("Toast error:", toastError);
        }
        return Promise.reject(new Error(errorMessages));
      }

      const errorMessage =
        errorData.message || errorData.error || "Validation failed";
      try {
        toast.error(errorMessage);
      } catch (toastError) {
        console.error("Toast error:", toastError);
      }
      return Promise.reject(new Error(errorMessage));
    }

    // Handle forbidden errors (403)
    if (error.response && error.response.status === 403) {
      const errorData = error.response.data;
      const errorMessage =
        errorData?.error?.message ||
        "Bạn không có quyền truy cập tài nguyên này.";
      try {
        toast.error(errorMessage);
      } catch (toastError) {
        console.error("Toast error:", toastError);
      }
      return Promise.reject(new Error(errorMessage));
    }

    // Handle unauthorized errors (401) - Token refresh logic
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      console.log("🔐 Got 401 error, attempting token refresh...");

      if (typeof refreshTokenFunction !== "function") {
        console.error(
          "❌ No refreshTokenFunction registered - cannot refresh token."
        );
        try {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        } catch (e) {
          console.error("Error clearing tokens:", e);
        }
        try {
          toast.error("Session expired. Vui lòng đăng nhập lại.");
        } catch (toastError) {
          console.error("Toast error:", toastError);
        }
        return Promise.reject(
          new Error("Session expired, please log in again.")
        );
      }

      if (!refreshPromise) {
        console.log("🔄 Starting token refresh and creating shared promise...");
        refreshPromise = (async () => {
          try {
            const newAccessToken = await refreshTokenFunction();
            if (!newAccessToken)
              throw new Error("No token returned from refresh");
            try {
              localStorage.setItem("accessToken", newAccessToken);
            } catch (e) {
              console.error("Failed to persist refreshed access token:", e);
            }
            return newAccessToken;
          } finally {
            refreshPromise = null;
          }
        })();
      } else {
        console.log("⏳ Waiting for ongoing token refresh to finish...");
      }

      try {
        const freshToken = await refreshPromise;
        console.log("✅ Refresh succeeded, retrying original request...");
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${freshToken}`;
        originalRequest._retry = true;
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("❌ Token refresh failed (shared):", err);
        try {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        } catch (e) {
          console.error("Error clearing tokens:", e);
        }
        try {
          toast.error("Session expired, please log in again.");
        } catch (toastError) {
          console.error("Toast error:", toastError);
        }
        return Promise.reject(
          new Error("Session expired, please log in again.")
        );
      }
    }

    // Other errors
    if (error.response) {
      const backendMessage =
        error.response.data?.message ||
        error.response.data?.error ||
        "Unknown server error";
      try {
        toast.error(backendMessage);
      } catch (toastError) {
        console.error("Toast error:", toastError);
      }
      return Promise.reject(new Error(backendMessage));
    } else if (error.request) {
      const noResponseMessage = "No response from server";
      try {
        toast.error(noResponseMessage);
      } catch (toastError) {
        console.error("Toast error:", toastError);
      }
      return Promise.reject(new Error(noResponseMessage));
    } else {
      try {
        toast.error(error.message);
      } catch (toastError) {
        console.error("Toast error:", toastError);
      }
      return Promise.reject(new Error(error.message));
    }
  }
);

export class AxiosApiService {
  axios = axiosInstance;

  async call(axiosRequestConfig) {
    return await this.axios.request(axiosRequestConfig);
  }
}

export default axiosInstance;
