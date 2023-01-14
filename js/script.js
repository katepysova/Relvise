/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst navBtn = document.querySelector(\".nav__btn\");\nconst navElem = document.querySelector(\".nav\");\nconst htmlEl = document.querySelector(\"html\");\n\nconst allLinks = document.querySelectorAll(\"a:link\");\n\nallLinks.forEach((link) => {\n  link.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    const href = link.getAttribute(\"href\");\n    if (href === \"#\") {\n      window.scrollTo({\n        top: 0,\n        behavior: \"smooth\",\n      });\n    } else if (href !== \"#\" && href.startsWith(\"#\")) {\n      const target = document.querySelector(href);\n      target.scrollIntoView({\n        behavior: \"smooth\",\n      });\n    }\n\n    if (navBtn.classList.contains(\"open\")) {\n      navBtn.classList.remove(\"open\");\n    }\n    if (navElem.classList.contains(\"open\")) {\n      navElem.classList.remove(\"open\");\n    }\n    if (htmlEl.classList.contains(\"u-static\")) {\n      htmlEl.classList.remove(\"u-static\");\n    }\n  });\n});\n\nnavBtn.addEventListener(\"click\", () => {\n  navBtn.classList.toggle(\"open\");\n  navElem.classList.toggle(\"open\");\n  htmlEl.classList.toggle(\"u-static\");\n});\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;