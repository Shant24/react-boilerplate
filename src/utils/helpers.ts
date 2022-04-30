export const initDebuggerForTesting = () => {
  window.onkeydown = (e) => {
    if (e.key === '∂') {
      // eslint-disable-next-line no-debugger
      debugger;
    }
  };
};
