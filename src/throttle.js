export default function throttle(fnc, time) {
  let timeout;
  let lastCall;

  function call(...args) {
    lastCall = Date.now();
    clearTimeout(timeout);
    fnc(...args);
  }

  return (...args) => {
    if (!timeout && lastCall + time < Date.now()) {
      call(...args);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => call(...args), time - (Date.now() - lastCall));
    }
  };
}
