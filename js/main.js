!function(e){var n={};function c(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=n,c.d=function(e,n,r){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)c.d(r,t,function(n){return e[n]}.bind(null,t));return r},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function() {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst addGlass = document.querySelector('.add-glass');\r\nconst removeGlass = document.querySelector('.remove-glass');\r\nconst reset = document.querySelector('.reset');\r\nconst glassCounter = document.querySelector('.glass__counter');\r\nconst key = new Date().toISOString().slice(0, 10);\r\n\r\nif (!localStorage.getItem(key)) {\r\n  localStorage.setItem(key, 0);\r\n  glassCounter.innerHTML = '0';\r\n}\r\nelse {\r\n  glassCounter.innerHTML = localStorage.getItem(key);\r\n}\r\n\r\n// ROZWIĄZANIE Z KURSU:\r\naddGlass.addEventListener('click', (e) => {\r\n  const currentValue = parseInt(localStorage.getItem(key));\r\n  if (currentValue <= 12) {\r\n    localStorage.setItem(key, parseInt(localStorage.getItem(key)) +1);\r\n    glassCounter.innerHTML = parseInt(localStorage.getItem(key));\r\n  }\r\n});\r\nremoveGlass.addEventListener('click', (e) => {\r\n  const currentValue = parseInt(localStorage.getItem(key));\r\n  if (currentValue > 0) {\r\n    localStorage.setItem(key, parseInt(localStorage.getItem(key)) -1);\r\n    glassCounter.innerHTML = localStorage.getItem(key);\r\n  };\r\n});\r\n\r\n\r\n\r\n\r\n// MOJE ROZWIĄZANIE Z PĘTLĄ FOR:\r\n// addGlass.addEventListener('click', (e) => {\r\n//   for (let i = glassCounter.textContent; i < 10; i) {\r\n//     glassCounter.innerHTML = ++i;\r\n//     localStorage.setItem(key, parseInt(glassCounter.textContent));\r\n//     break;\r\n//   }\r\n// });\r\n\r\n// removeGlass.addEventListener('click', (e) => {\r\n//   for (let i = glassCounter.textContent; i > 0; i) {\r\n//     glassCounter.innerHTML = --i;\r\n//     localStorage.setItem(key, parseInt(glassCounter.textContent));\r\n//     break;\r\n//   }\r\n// });\r\n\r\nreset.addEventListener('click', (e) => {\r\n  glassCounter.innerHTML = 0;\r\n  localStorage.setItem(key, 0);\r\n})\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7OztBQUtEO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSwyQ0FBMkMsT0FBTztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG5cclxuY29uc3QgYWRkR2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdsYXNzJyk7XHJcbmNvbnN0IHJlbW92ZUdsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZS1nbGFzcycpO1xyXG5jb25zdCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpO1xyXG5jb25zdCBnbGFzc0NvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xhc3NfX2NvdW50ZXInKTtcclxuY29uc3Qga2V5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcclxuXHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgMCk7XHJcbiAgZ2xhc3NDb3VudGVyLmlubmVySFRNTCA9ICcwJztcclxufVxyXG5lbHNlIHtcclxuICBnbGFzc0NvdW50ZXIuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxufVxyXG5cclxuLy8gUk9aV0nEhFpBTklFIFogS1VSU1U6XHJcbmFkZEdsYXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBjb25zdCBjdXJyZW50VmFsdWUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICBpZiAoY3VycmVudFZhbHVlIDw9IDEyKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICsxKTtcclxuICAgIGdsYXNzQ291bnRlci5pbm5lckhUTUwgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICB9XHJcbn0pO1xyXG5yZW1vdmVHbGFzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XHJcbiAgaWYgKGN1cnJlbnRWYWx1ZSA+IDApIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgLTEpO1xyXG4gICAgZ2xhc3NDb3VudGVyLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgfTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBNT0pFIFJPWldJxIRaQU5JRSBaIFDEmFRMxIQgRk9SOlxyXG4vLyBhZGRHbGFzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbi8vICAgZm9yIChsZXQgaSA9IGdsYXNzQ291bnRlci50ZXh0Q29udGVudDsgaSA8IDEwOyBpKSB7XHJcbi8vICAgICBnbGFzc0NvdW50ZXIuaW5uZXJIVE1MID0gKytpO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBwYXJzZUludChnbGFzc0NvdW50ZXIudGV4dENvbnRlbnQpKTtcclxuLy8gICAgIGJyZWFrO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcblxyXG4vLyByZW1vdmVHbGFzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbi8vICAgZm9yIChsZXQgaSA9IGdsYXNzQ291bnRlci50ZXh0Q29udGVudDsgaSA+IDA7IGkpIHtcclxuLy8gICAgIGdsYXNzQ291bnRlci5pbm5lckhUTUwgPSAtLWk7XHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHBhcnNlSW50KGdsYXNzQ291bnRlci50ZXh0Q29udGVudCkpO1xyXG4vLyAgICAgYnJlYWs7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuXHJcbnJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBnbGFzc0NvdW50ZXIuaW5uZXJIVE1MID0gMDtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIDApO1xyXG59KVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);