/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_helper_scroll_down_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/helper/scroll-down.css */ \"./styles/helper/scroll-down.css\");\n/* harmony import */ var _styles_helper_scroll_down_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_helper_scroll_down_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst { provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.configureChains)(wagmi__WEBPACK_IMPORTED_MODULE_1__.defaultChains, [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__.publicProvider)()\n]);\nconst client = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    provider,\n    webSocketProvider,\n    autoConnect: true\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Crypto-Society\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielpapenberg/Documents/Privat/cs-homepage/pages/_app.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        content: \"width=device-width, initial-scale=1\",\n                        name: \"viewport\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielpapenberg/Documents/Privat/cs-homepage/pages/_app.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielpapenberg/Documents/Privat/cs-homepage/pages/_app.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danielpapenberg/Documents/Privat/cs-homepage/pages/_app.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danielpapenberg/Documents/Privat/cs-homepage/pages/_app.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_1__.WagmiConfig, {\n                client: client,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n                    session: pageProps.session,\n                    refetchInterval: 0,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/danielpapenberg/Documents/Privat/cs-homepage/pages/_app.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/danielpapenberg/Documents/Privat/cs-homepage/pages/_app.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/danielpapenberg/Documents/Privat/cs-homepage/pages/_app.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtGO0FBQzFCO0FBQ047QUFDdEI7QUFDRztBQUNZO0FBRTNDLE1BQU0sRUFBRU8sU0FBUSxFQUFFQyxrQkFBaUIsRUFBRSxHQUFHUCxzREFBZUEsQ0FBQ0MsZ0RBQWFBLEVBQUU7SUFBQ0Usc0VBQWNBO0NBQUc7QUFFekYsTUFBTUssU0FBU1QsbURBQVlBLENBQUM7SUFDeEJPO0lBQ0FDO0lBQ0FFLGFBQWEsSUFBSTtBQUNyQjtBQUVBLFNBQVNDLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNyQyxxQkFDSTs7MEJBQ0ksOERBQUNQLGtEQUFJQTs7a0NBQ0QsOERBQUNRO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxTQUFRO3dCQUFzQ0MsTUFBSzs7Ozs7O2tDQUN6RCw4REFBQ0Y7d0JBQUtFLE1BQUs7d0JBQWNELFNBQVE7Ozs7OztrQ0FDakMsOERBQUNFO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRzFCLDhEQUFDakIsOENBQVdBO2dCQUFDTSxRQUFRQTswQkFDakIsNEVBQUNKLDREQUFlQTtvQkFBQ2dCLFNBQVNSLFVBQVVRLE9BQU87b0JBQUVDLGlCQUFpQjs4QkFDMUQsNEVBQUNWO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX21vcmFsaXNfYXV0aC8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50LCBjb25maWd1cmVDaGFpbnMsIGRlZmF1bHRDaGFpbnMsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9wdWJsaWMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCAnLi8uLi9zdHlsZXMvZ2xvYmFsLmNzcydcclxuaW1wb3J0ICcuLy4uL3N0eWxlcy9oZWxwZXIvc2Nyb2xsLWRvd24uY3NzJ1xyXG5cclxuY29uc3QgeyBwcm92aWRlciwgd2ViU29ja2V0UHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhkZWZhdWx0Q2hhaW5zLCBbcHVibGljUHJvdmlkZXIoKV0pO1xyXG5cclxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICAgIHByb3ZpZGVyLFxyXG4gICAgd2ViU29ja2V0UHJvdmlkZXIsXHJcbiAgICBhdXRvQ29ubmVjdDogdHJ1ZSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3J5cHRvLVNvY2lldHk8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgbmFtZT1cInZpZXdwb3J0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPFdhZ21pQ29uZmlnIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgICAgICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259IHJlZmV0Y2hJbnRlcnZhbD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvV2FnbWlDb25maWc+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNvbmZpZ3VyZUNoYWlucyIsImRlZmF1bHRDaGFpbnMiLCJXYWdtaUNvbmZpZyIsInB1YmxpY1Byb3ZpZGVyIiwiU2Vzc2lvblByb3ZpZGVyIiwiSGVhZCIsInByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJjbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsIm5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNlc3Npb24iLCJyZWZldGNoSW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/helper/scroll-down.css":
/*!***************************************!*\
  !*** ./styles/helper/scroll-down.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();