/* eslint-disable prefer-arrow/prefer-arrow-functions, no-console, @typescript-eslint/no-explicit-any */
import Axios, { AxiosInstance, AxiosResponse } from 'axios';

import type {
  CustomAxiosErrorType,
  IApiClient,
  IAxiosRequestConfig,
  IResponseDataWithMeta,
  IResponseMeta,
} from '@appTypes/requestTypes';

import { API_CONFIG, REFRESH_TOKEN_URL } from '@utils/constants';
import { store } from '../store';
import { handleServiceError } from '@utils/helpers/request';
import { ToastService } from '@services';
import { getAccessToken } from '@utils/tokens';
import { setLocaleStorageAuthData } from '@utils/helpers';

const signOutRequestAction = () => ({ type: '' });

const updateTokensRequest = (): { data: any } => ({ data: {} });

class RequestService implements IApiClient {
  private client: AxiosInstance;

  private static handleSuccess = (response: AxiosResponse) => response;

  private async handleError(error: CustomAxiosErrorType) {
    if (error.config.url?.includes(REFRESH_TOKEN_URL)) {
      throw error;
    }

    if (process.env.NODE_ENV === 'development') {
      console.group('interceptor error');
      console.log('error.config', error.config);
      console.error('error.response: ', error.response);
      console.error('error.message: ', error.message);
      console.groupEnd();
    }

    if (typeof window === 'undefined') {
      throw error;
    }

    const handleServiceErrorData = handleServiceError(error);

    const { message, showToast, signOut, showThrowError, updateToken, changeMessage } = handleServiceErrorData;

    error.showThrowError = showThrowError;

    if (changeMessage) {
      error.message = message;
    }

    if (showToast) {
      ToastService.error(message);
    }

    if (updateToken) {
      const { data: tokenData } = await updateTokensRequest();

      setLocaleStorageAuthData(tokenData);
      this.updateAuthorizationHeader();
      if (error.config.headers) {
        error.config.headers.Authorization = (this.client.defaults.headers as any).Authorization;
      }

      return await this.client.request(error.config);
    }

    if (signOut) {
      store.dispatch(signOutRequestAction());
    }

    throw error;
  }

  private static createAxiosClient(): AxiosInstance {
    return Axios.create({
      baseURL: API_CONFIG.BASE_URL,
      responseType: 'json' as const,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });
  }

  private updateAuthorizationHeader(withoutAuth: boolean = false) {
    const token = getAccessToken();

    if (token && !withoutAuth) {
      (this.client.defaults.headers as any).Authorization = `Bearer ${token}`;
    } else {
      delete (this.client.defaults.headers as any).Authorization;
    }
  }

  constructor() {
    this.client = RequestService.createAxiosClient();
    this.updateAuthorizationHeader();

    this.client.interceptors.response.use(RequestService.handleSuccess, (error) => this.handleError(error));
  }

  isOkStatus = (status: number) => {
    return [200, 201, 204, 300].includes(status);
  };

  async get<TResponse, TMeta extends IResponseMeta = IResponseMeta>(path: string, config?: IAxiosRequestConfig) {
    const { isWithoutAuth, ...restConfig } = config || {};

    this.updateAuthorizationHeader(isWithoutAuth);

    return await this.client.get<IResponseDataWithMeta<TResponse, TMeta>>(path, restConfig);
  }

  async post<TRequest, TResponse, TMeta extends IResponseMeta = IResponseMeta>(
    path: string,
    data?: TRequest,
    config?: IAxiosRequestConfig,
  ) {
    const { isWithoutAuth, ...restConfig } = config || {};

    this.updateAuthorizationHeader(isWithoutAuth);

    return await this.client.post<IResponseDataWithMeta<TResponse, TMeta>>(path, data, restConfig);
  }

  async put<TRequest, TResponse, TMeta extends IResponseMeta = IResponseMeta>(
    path: string,
    data?: TRequest,
    config?: IAxiosRequestConfig,
  ) {
    const { isWithoutAuth, ...restConfig } = config || {};

    this.updateAuthorizationHeader(isWithoutAuth);

    return await this.client.put<IResponseDataWithMeta<TResponse, TMeta>>(path, data, restConfig);
  }

  async delete<TResponse, TMeta extends IResponseMeta = IResponseMeta>(path: string, config?: IAxiosRequestConfig) {
    const { isWithoutAuth, ...restConfig } = config || {};

    this.updateAuthorizationHeader(isWithoutAuth);

    return await this.client.delete<IResponseDataWithMeta<TResponse, TMeta>>(path, restConfig);
  }
}

export default new RequestService();
