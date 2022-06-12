/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import axios from "axios";
import { AUTH_URL } from "./constants";

interface login_params {
  user_id: string;
  password: string;
  remember_me: boolean;
}
interface signup_params {
  user_id: string;
  password: string;
  name: string;
  otp: string;
  roll_no: string;
}

interface Response {
  Payload: any;
  Status: any;
  Message: any;
  Token?: any;
}

const login = async (data: login_params): Promise<Response> => {
  console.log(data);
  let payload;
  let status;
  let message;
  await axios
    .post(`${AUTH_URL}/login`, data)
    .then((res) => {
      payload = res.data;
      status = res?.status;
      message = res?.data?.status;
    })
    .catch((err) => {
      payload = err?.response?.data?.error;
      status = err?.response?.status;
      message = err?.response?.status;
    });

  const response: Response = {
    Payload: payload,
    Status: status,
    Message: message,
  };

  return response;
};

const signup = async (data: signup_params): Promise<Response> => {
  let payload;
  let status;
  let message;
  await axios
    .post(`${AUTH_URL}/signup`, data)
    .then((res) => {
      payload = res.data;
      status = res?.status;
      message = res?.data?.status;
    })
    .catch((err) => {
      payload = err?.response?.data?.error;
      status = err?.response?.status;
      message = err?.response?.status;
    });

  const response: Response = {
    Payload: payload,
    Status: status,
    Message: message,
  };

  return response;
};

const otp = async (user_id: string): Promise<Response> => {
  let payload;
  let status;
  let message;
  await axios
    .post(`${AUTH_URL}/otp`, { user_id })
    .then((res) => {
      payload = res.data;
      status = res?.status;
      message = res?.data?.status;
    })
    .catch((err) => {
      payload = err?.response?.data?.error;
      status = err?.response?.status;
      message = err?.response?.status;
    });

  const response: Response = {
    Payload: payload,
    Status: status,
    Message: message,
  };

  return response;
};

export { login, signup, otp };
export type { login_params, signup_params, Response };
