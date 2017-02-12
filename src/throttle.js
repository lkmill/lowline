export default function throttle(fnc, time) {
  let timeout;
  let lastCall;
  let lastValue;

  function call(...args) {
    lastCall = Date.now();
    clearTimeout(timeout);
    return fnc(...args);
  }

  return (...args) => {
    if (!timeout && !lastCall || lastCall + time < Date.now()) {
      return lastValue = call(...args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => call(...args), time - (Date.now() - lastCall));
    return lastValue;
  };
}
