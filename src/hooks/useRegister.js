import { useState } from "react";
import { registerApi, verifyEmailApi } from "../api/register/registerApi";

export function useRegister() {
  const [loading, setLoading] = useState(false);

  const register = async (data) => {
    setLoading(true);
    try {
      const response = await registerApi(data);
      return response;
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (data) => {
    setLoading(true);
    try {
      const response = await verifyEmailApi(data);
      return response;
    } finally {
      setLoading(false);
    }
  };

  return { register, verifyEmail, loading };
}
