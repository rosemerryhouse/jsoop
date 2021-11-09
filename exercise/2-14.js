function f(x) {
  'use strict';
  var a = 12;
  b = a + x; // Uncaught ReferenceError: b is not defined
}
f(5);
