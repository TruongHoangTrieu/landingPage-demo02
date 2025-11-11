import { AxiosApiService } from "./apiConfig";

export default class ApiClient {
  service = new AxiosApiService();

  async get(requestConfig) {
    return await this.service.call({
      ...requestConfig,
      method: "GET",
    });
  }

  async post(requestConfig) {
    return await this.service.call({
      ...requestConfig,
      method: "POST",
    });
  }

  async put(requestConfig) {
    return await this.service.call({
      ...requestConfig,
      method: "PUT",
    });
  }

  async patch(requestConfig) {
    return await this.service.call({
      ...requestConfig,
      method: "PATCH",
    });
  }

  async delete(requestConfig) {
    return await this.service.call({
      ...requestConfig,
      method: "DELETE",
    });
  }
}
