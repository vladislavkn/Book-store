const debounced = (fn, delay = 300) => {
  let timeout;

  return (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => fn(...args), delay);
  };
};

export default debounced;
