const debounced = (fn, delay = 300) => {
  let timeout;

  return (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    return new Promise((resolve, reject) => {
      timeout = setTimeout(() => {
        try {
          const result = fn(...args);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      }, delay);
    });
  };
};

export default debounced;
