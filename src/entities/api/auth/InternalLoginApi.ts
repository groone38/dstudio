import { AxiosResponse } from "axios";
import api from "entities/config/instance";
import { IInternalLoginResponse } from "./InternalLoginTypes";

class InternalLoginApi {
  internalLogin(
    username: string,
    password: string
  ): Promise<AxiosResponse<IInternalLoginResponse>> {
    return api.post<IInternalLoginResponse>("InternalLogin", {
      state: "Internal",
      username,
      password,
    });
  }
}

export default InternalLoginApi;
