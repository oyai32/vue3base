import axios from 'axios';
// AxiosRequestConfig 更偏向于公共和默认的配置，InternalAxiosRequestConfig 更偏向于单个请求的定制配置
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import _ from 'lodash';
import HttpError from './http-error';


const defaultConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 6000,
};

function defaultRequestSuccess(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig  {
  const token = localStorage.getItem('token');

  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}

function defaultResponseSuccess(response: AxiosResponse): any{
  const { data } = response;
  if (data.error) {
    const httpError = new Error(data?.error?.message || '未知错误');
    return Promise.reject(httpError);
  }
  return data;
}

function responseError(response: AxiosResponse): Promise<Error>{
  const { status, data } = response;
  const httpError = new Error(data?.message || HttpError[status] || '未知错误');
  return Promise.reject(httpError);
}

export function createClient({
  config = {} as AxiosRequestConfig,
  requestSuccess = defaultRequestSuccess,
  responseSuccess = defaultResponseSuccess,
}): AxiosInstance {
  const newCOnfig = _.merge(defaultConfig, config);
  const client = axios.create(newCOnfig);

  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => requestSuccess(config),
    (error) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (response) => responseSuccess(response),
    (error) => responseError(error.response)
  );

  return client;
}
