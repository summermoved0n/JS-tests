"use strict";

function debounce(func, wait, immediate = false) {
  if (immediate) {
    return func;
  }

  setTimeout(() => {}, wait);

  return function debounced(...args) {
    debounced.cancele = () => {};
    debounced.flush = () => {};
  };
}

const log = (x) => console.log(x);
const d = debounce(log, 100);

d(1);
d(2);
d(3);
// Через ~100ms в консоль виведе: 3

const d2 = debounce(log, 100, true);
d2('a'); // відразу виведе 'a'
d2('b'); // ігнорується