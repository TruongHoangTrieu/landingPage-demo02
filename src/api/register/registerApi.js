import { apiUrl } from "../../constants/apiUrl";
import { apiClient } from "../config/apiInstance";

export function registerApi(data) {
  return apiClient.post({ url: apiUrl.auth.register, data });
}

export function verifyEmailApi(data) {
  return apiClient.post({ url: apiUrl.auth.verifyEmail, data });
}
