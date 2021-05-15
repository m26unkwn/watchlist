export default function debounce(fnx, delay) {
  let timeout;
  return function () {
    let context = this,
      arg = arguments;
    clearInterval(timeout);
    timeout = setTimeout(() => {
      fnx.apply(context, arg);
    }, delay);
  };
}
