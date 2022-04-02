/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/js/modules/header.js\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_header__WEBPACK_IMPORTED_MODULE_0__.default)({\n    headerBody: 'header__body',\n    headerSearchPanel: 'header__search-panel',\n    headerInputField: 'search-panel__field',\n    headerLogo: 'header__logo',\n    searchResBlock: 'search-result__row',\n    trendBlock: 'trending__row'\n  });\n});\n\n//# sourceURL=webpack://giphy/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/js/modules/request.js\");\n\n\nfunction header({\n  headerBody,\n  headerSearchPanel,\n  headerInputField,\n  headerLogo,\n  searchResBlock,\n  trendBlock\n}) {\n  const header = document.querySelector(`.${headerBody}`),\n        searchPanel = document.querySelector(`.${headerSearchPanel}`),\n        inputField = document.querySelector(`.${headerInputField}`),\n        logo = document.querySelector(`.${headerLogo}`),\n        searchResultsBlock = document.querySelector(`.${searchResBlock}`),\n        trendingBlock = document.querySelector(`.${trendBlock}`);\n\n  if (document.documentElement.clientWidth < 550) {\n    const promise = new Promise(function (resolve, reject) {\n      inputField.classList.add(`${headerInputField}--no-transition`);\n      resolve();\n    });\n    promise.then(() => {\n      inputField.classList.add(`${headerInputField}--hidden`);\n    }).then(() => setTimeout(() => inputField.classList.remove(`${headerInputField}--no-transition`)), 1);\n  }\n\n  searchPanel.style.flexBasis = `${header.offsetWidth - logo.offsetWidth - getComputedStyle(searchPanel).marginLeft.match(/\\d/g).join('')}px`;\n  window.addEventListener('resize', () => {\n    searchPanel.style.flexBasis = `${header.offsetWidth - logo.offsetWidth - getComputedStyle(searchPanel).marginLeft.match(/\\d/g).join('')}px`;\n\n    if (document.documentElement.clientWidth < 550 && !logo.classList.contains(`${headerLogo}--hidden`)) {\n      inputField.classList.add(`${headerInputField}--hidden`);\n    }\n\n    if (document.documentElement.clientWidth >= 550 && logo.classList.contains(`${headerLogo}--hidden`)) {\n      new Promise((resolve, reject) => {\n        searchPanel.classList.remove(`${headerSearchPanel}--full-width`);\n        resolve();\n      }).then(() => {\n        searchPanel.style.flexBasis = `${header.offsetWidth - 180}px`;\n      }).then(() => {\n        setTimeout(() => {\n          logo.classList.remove(`${headerLogo}--hidden`);\n        }, 1100);\n      });\n    }\n\n    if (document.documentElement.clientWidth >= 550 && inputField.classList.contains(`${headerInputField}--hidden`)) {\n      inputField.classList.remove(`${headerInputField}--hidden`);\n    }\n  });\n  (0,_request__WEBPACK_IMPORTED_MODULE_0__.default)({\n    resultsBlock: trendingBlock,\n    key: 'nioAXMr2JLhzIQzEJiaabzA1R07XOx8a'\n  });\n  searchPanel.addEventListener('submit', e => {\n    e.preventDefault();\n\n    if (inputField.classList.contains(`${headerInputField}--hidden`)) {\n      new Promise((resolve, reject) => {\n        logo.classList.add(`${headerLogo}--hidden`);\n        resolve();\n      }).then(() => {\n        searchPanel.classList.add(`${headerSearchPanel}--full-width`);\n      }).then(() => {\n        inputField.classList.remove(`${headerInputField}--hidden`);\n      });\n    }\n\n    if (inputField.value !== '' && inputField.value !== null && !inputField.classList.contains(`${headerInputField}--hidden`)) {\n      if (document.documentElement.clientWidth < 550) {\n        new Promise((resolve, reject) => {\n          searchPanel.classList.remove(`${headerSearchPanel}--full-width`);\n          resolve();\n        }).then(() => {\n          inputField.classList.add(`${headerInputField}--hidden`);\n        }).then(() => {\n          setTimeout(() => {\n            logo.classList.remove(`${headerLogo}--hidden`);\n          }, 500);\n        });\n      }\n\n      document.querySelector('.trending__row').textContent = '';\n      document.querySelector('.trending').style.display = 'none';\n      document.querySelector('.search-result').classList.remove('search-result--hidden');\n      (0,_request__WEBPACK_IMPORTED_MODULE_0__.default)({\n        term: inputField.value,\n        resultsBlock: searchResultsBlock,\n        key: 'nioAXMr2JLhzIQzEJiaabzA1R07XOx8a'\n      });\n    }\n  });\n  window.addEventListener('click', e => {\n    if (!e.target.closest(`.${headerSearchPanel}`) && searchPanel.classList.contains(`${headerSearchPanel}--full-width`)) {\n      new Promise((resolve, reject) => {\n        searchPanel.classList.remove(`${headerSearchPanel}--full-width`);\n        resolve();\n      }).then(() => {\n        inputField.classList.add(`${headerInputField}--hidden`);\n      }).then(() => {\n        setTimeout(() => {\n          logo.classList.remove(`${headerLogo}--hidden`);\n        }, 500);\n      });\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (header);\n\n//# sourceURL=webpack://giphy/./src/js/modules/header.js?");

/***/ }),

/***/ "./src/js/modules/request.js":
/*!***********************************!*\
  !*** ./src/js/modules/request.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ \"./src/js/services/services.js\");\n\n\nfunction request({\n  term = null,\n  key,\n  resultsBlock\n}) {\n  resultsBlock.textContent = '';\n  let url;\n\n  if (term === null) {\n    url = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=21&rating=g`;\n  } else {\n    url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${term}=&limit=21&offset=0&rating=g&lang=en`;\n  }\n\n  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)(url).then(data => {\n    data.data.forEach(elem => {\n      const gif = document.createElement('img'),\n            gifUrl = elem.images.fixed_height.url;\n      gif.src = gifUrl;\n      gif.classList.add('gifs-section__gif');\n      resultsBlock.append(gif);\n    });\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (request);\n\n//# sourceURL=webpack://giphy/./src/js/modules/request.js?");

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getResource\": function() { return /* binding */ getResource; }\n/* harmony export */ });\nasync function getResource(url) {\n  let res = await fetch(url);\n\n  if (!res.ok) {\n    throw new Error(`Could not fetch ${url}, status: ${res.status}`);\n  }\n\n  return await res.json();\n}\n\n\n\n//# sourceURL=webpack://giphy/./src/js/services/services.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://giphy/./src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;