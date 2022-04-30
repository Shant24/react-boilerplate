/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';

import {
  AUTH_ERROR_MESSAGES,
  AUTH_ERRORS_STATUSES,
  BASE_ERROR_MESSAGES,
  ERROR_STATUSES,
  IBackend400Error,
  InterceptorErrorType,
  ISanitized400Errors,
} from '@appTypes/requestTypes';

import { recursiveSetInObject, uppercaseFirstLetter } from '@utils/helpers';

const handleAuthError = (err: AxiosError): InterceptorErrorType => {
  const error: InterceptorErrorType = {
    message: '',
    showToast: true,
    showThrowError: false,
    signOut: true,
  };

  switch ((err.response!.data as any).error.details?.[0]?.message) {
    case AUTH_ERRORS_STATUSES.UNAUTHORIZED:
      error.message = AUTH_ERROR_MESSAGES.UNAUTHORIZED;
      break;

    case AUTH_ERRORS_STATUSES.PERMISSION_DENIED:
    case AUTH_ERRORS_STATUSES.FORBIDDEN:
      error.message = BASE_ERROR_MESSAGES.PERMISSION_DENIED;
      error.signOut = false;
      break;

    case AUTH_ERRORS_STATUSES.EMAIL_IS_NOT_VERIFIED:
      error.message = AUTH_ERROR_MESSAGES.EMAIL_IS_NOT_VERIFIED;
      break;

    case AUTH_ERRORS_STATUSES.VERIFICATION_TOKEN_DOES_NOT_EXIST:
    case AUTH_ERRORS_STATUSES.VERIFICATION_TOKEN_DOES_NOT_VALID:
      error.message = uppercaseFirstLetter((err.response!.data as any).error.details?.[0]?.message);
      break;

    case AUTH_ERRORS_STATUSES.TOKEN_DOES_NOT_VALID:
      error.message = AUTH_ERROR_MESSAGES.TOKEN_VERIFICATION;
      break;

    case AUTH_ERRORS_STATUSES.TOKEN_EXPIRED:
      error.showToast = false;
      error.showThrowError = false;
      error.updateToken = true;
      error.signOut = false;
      break;

    default:
      error.message = AUTH_ERROR_MESSAGES.LOGIN_AGAIN;
  }

  return error;
};

export const handleServiceError = (err: AxiosError): InterceptorErrorType => {
  let error: InterceptorErrorType = { message: '', showToast: true, showThrowError: false };

  if (!err.response || (err.response.status || 0) >= 500) {
    error.message = BASE_ERROR_MESSAGES.CHECK_CONNECTION;
  } else if (err.config.url?.includes('' /* file upload url */)) {
    error.message = BASE_ERROR_MESSAGES.CAN_NOT_UPLOAD_FILE;
    error.showThrowError = true;
  } else {
    switch (err.response.status) {
      case ERROR_STATUSES.AUTHENTICATION_ERROR:
        error = handleAuthError(err);
        break;

      case ERROR_STATUSES.ACCESS_DENIED_ERROR:
        error.message = BASE_ERROR_MESSAGES.PERMISSION_DENIED;
        error.signOut = true;
        break;

      case ERROR_STATUSES.RESOURCE_NOT_FOUND_ERROR:
      case ERROR_STATUSES.METHOD_NOT_ALLOWED:
      case ERROR_STATUSES.UNAVAILABLE_FOR_LEGAL_REASONS:
        error.message = BASE_ERROR_MESSAGES.INVALID_REQUEST;
        break;

      case ERROR_STATUSES.REQUEST_TIMEOUT:
      case ERROR_STATUSES.SOMETHING_WENT_WRONG:
        error.message = BASE_ERROR_MESSAGES.CHECK_CONNECTION;
        break;

      case ERROR_STATUSES.BAD_REQUEST:
      default:
        error.showToast = false;
        error.showThrowError = true;
        error.changeMessage = false;
    }
  }

  return error;
};

export const sanitize400Errors = (backendErrors: IBackend400Error[]) => {
  const errors: ISanitized400Errors = {};

  backendErrors.forEach(({ field, message }) => {
    if (field) {
      recursiveSetInObject(errors, field.split('.'), message);
    } else {
      switch (message) {
        case AUTH_ERRORS_STATUSES.EMAIL_ALREADY_EXISTS:
          errors.email = AUTH_ERROR_MESSAGES.EMAIL_ALREADY_EXISTS;
          break;

        default:
          errors.message = message;
      }
    }
  });

  return errors;
};
