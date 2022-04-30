/* eslint-disable @typescript-eslint/no-explicit-any */

export const StorageManager = {
  local: {
    setItem: (key: Required<string>, data: any, needStringify: boolean = true) => {
      if (typeof window !== 'undefined') {
        try {
          const serializedState = needStringify ? JSON.stringify(data) : data;

          localStorage.setItem(key, serializedState);
        } catch {
          // ignore write errors
        }
      }
    },
    getItem: (key: Required<string>): any | undefined => {
      if (typeof window !== 'undefined') {
        try {
          const serializedState = localStorage.getItem(key);

          if (serializedState === null) {
            return;
          }

          return JSON.parse(serializedState);
        } catch {
          // ignore write errors
        }
      }
    },
    removeItem: (key: Required<string>) => {
      if (typeof window !== 'undefined') {
        try {
          localStorage.removeItem(key);
        } catch {
          // ignore write errors
        }
      }
    },
    clear: () => {
      if (typeof window !== 'undefined') {
        try {
          localStorage.clear();
        } catch {
          // ignore write errors
        }
      }
    },
  },
  session: {
    setItem: (key: Required<string>, data: any, needStringify: boolean = true) => {
      if (typeof window !== 'undefined') {
        try {
          const serializedState = needStringify ? JSON.stringify(data) : data;

          sessionStorage.setItem(key, serializedState);
        } catch {
          // ignore write errors
        }
      }
    },
    getItem: (key: Required<string>): any | undefined => {
      if (typeof window !== 'undefined') {
        try {
          const serializedState = sessionStorage.getItem(key);

          if (serializedState === null) {
            return;
          }

          return JSON.parse(serializedState);
        } catch {
          // ignore write errors
        }
      }
    },
    removeItem: (key: Required<string>) => {
      if (typeof window !== 'undefined') {
        try {
          sessionStorage.removeItem(key);
        } catch {
          // ignore write errors
        }
      }
    },
    clear: () => {
      if (typeof window !== 'undefined') {
        try {
          sessionStorage.clear();
        } catch {
          // ignore write errors
        }
      }
    },
  },
};
