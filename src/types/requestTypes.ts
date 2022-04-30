import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface CustomAxiosErrorType extends AxiosError {
  showThrowError: boolean;
}

export interface CustomErrorType extends Error {
  showThrowError?: boolean;
  showToast?: boolean;
}

export interface IApiClient {
  get<TResponse, TMeta extends IResponseMeta = IResponseMeta>(
    path: string,
    config?: IAxiosRequestConfig,
  ): Promise<AxiosResponse<IResponseDataWithMeta<TResponse, TMeta>>>;

  post<TRequest, TResponse, TMeta extends IResponseMeta = IResponseMeta>(
    path: string,
    data?: TRequest,
    config?: IAxiosRequestConfig,
  ): Promise<AxiosResponse<IResponseDataWithMeta<TResponse, TMeta>>>;

  put<TRequest, TResponse, TMeta extends IResponseMeta = IResponseMeta>(
    path: string,
    data: TRequest,
    config?: IAxiosRequestConfig,
  ): Promise<AxiosResponse<IResponseDataWithMeta<TResponse, TMeta>>>;

  delete<TResponse, TMeta extends IResponseMeta = IResponseMeta>(
    path: string,
    config?: IAxiosRequestConfig,
  ): Promise<AxiosResponse<IResponseDataWithMeta<TResponse, TMeta>>>;
}

export interface IAxiosRequestConfig extends AxiosRequestConfig {
  isWithoutAuth?: boolean;
}

export type OrderingType = 'ASC' | 'DESC';

export interface IPagination extends Object {
  limit: number;
  offset: number;
  total: number;
}

export interface IPaginationWithSearchParams {
  limit: number;
  offset: number;
  searchKey?: string;
}

export interface IPaginationParams extends Object {
  offset: number;
  limit: number;
}

export interface IResponseMeta {
  pagination: IPagination;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IResponseDataWithMeta<T = any, U extends IResponseMeta = IResponseMeta> {
  data: T;
  meta: U;
}

export interface IBackend400Error {
  field?: string;
  message: string;
  type?: string;
}

export interface ISanitized400Errors {
  [field: string]: string | ISanitized400Errors;
}

export type InterceptorErrorType = {
  message: string;
  showToast: boolean;
  showThrowError: boolean;
  signOut?: boolean;
  updateToken?: boolean;
  changeMessage?: boolean;
};

export enum ERROR_STATUSES {
  BAD_REQUEST = 400,
  AUTHENTICATION_ERROR = 401,
  RESOURCE_NOT_FOUND_ERROR = 404,
  ACCESS_DENIED_ERROR = 403,
  METHOD_NOT_ALLOWED = 405,
  REQUEST_TIMEOUT = 408,
  SOMETHING_WENT_WRONG = 409,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
}

export enum BASE_ERROR_MESSAGES {
  SOMETHING_WENT_WRONG = 'Something went wrong.',
  BAD_REQUEST = 'Bad request.',
  INVALID_REQUEST = 'Invalid request.',
  CHECK_CONNECTION = 'Please check Your connection and try again.',
  PERMISSION_DENIED = 'No access.',
  CAN_NOT_UPLOAD_FILE = 'Can not upload file',
  RESOURCE_NOT_FOUND = 'Resource not found.',
}

export enum AUTH_ERRORS_STATUSES {
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  EMAIL_IS_NOT_VERIFIED = 'EMAIL_IS_NOT_VERIFIED',
  VERIFICATION_TOKEN_DOES_NOT_EXIST = 'VERIFICATION_TOKEN_DOES_NOT_EXIST',
  VERIFICATION_TOKEN_DOES_NOT_VALID = 'VERIFICATION_TOKEN_DOES_NOT_VALID',
  TOKEN_DOES_NOT_VALID = 'TOKEN_DOES_NOT_VALID',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  EMAIL_ALREADY_EXISTS = 'EMAIL_ALREADY_EXISTS',
}

export enum AUTH_ERROR_MESSAGES {
  UNAUTHORIZED = 'Please, log in.',
  EMAIL_IS_NOT_VERIFIED = 'Your Email not verified.',
  TOKEN_VERIFICATION = 'Your credentials are invalid. Please try again.',
  LOGIN_AGAIN = 'Please, login again.',
  EMAIL_ALREADY_EXISTS = 'E-mail already exists.',
}
