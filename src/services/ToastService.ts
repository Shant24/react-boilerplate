/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { toast, ToastOptions } from 'react-toastify';

export enum TOAST_TYPES {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  DEFAULT = 'default',
}

class ToastService {
  readonly initialOptions: ToastOptions = {
    position: 'top-right',
    theme: 'dark',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  success(message: string, options?: ToastOptions) {
    toast(message, { ...this.initialOptions, ...options, type: TOAST_TYPES.SUCCESS });
  }

  warning(message: string, options?: ToastOptions) {
    toast(message, { ...this.initialOptions, ...options, type: TOAST_TYPES.WARNING });
  }

  error(message: string, options?: ToastOptions) {
    toast(message, { ...this.initialOptions, ...options, type: TOAST_TYPES.ERROR });
  }

  info(message: string, options?: ToastOptions) {
    toast(message, { ...this.initialOptions, ...options, type: TOAST_TYPES.INFO });
  }

  default(message: string, options?: ToastOptions) {
    toast(message, { ...this.initialOptions, ...options, type: TOAST_TYPES.DEFAULT });
  }
}

export default new ToastService();
