"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/Context.js":
/*!************************!*\
  !*** ./src/Context.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TokyoContext\": function() { return /* binding */ TokyoContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// Create Context\nconst TokyoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Type\nconst type = {\n    NAV: \"NAV\",\n    ANIMATION: \"ANIMATION\",\n    MODAL: \"MODAL\",\n    SERVICEMODAL: \"SERVICEMODAL\",\n    PORTFOLIODETAILSMODAL: \"PORTFOLIODETAILSMODAL\"\n};\nconst { NAV , ANIMATION , MODAL , SERVICEMODAL , PORTFOLIODETAILSMODAL  } = type;\n// Initial Value\nconst initialState = {\n    nav: \"home\",\n    animation: \"fadeInLeft\",\n    modal: false,\n    serviceModal: null,\n    portfolioDetailsModal: null,\n    menus: [\n        {\n            id: 1,\n            name: \"Home\",\n            href: \"home\"\n        },\n        {\n            id: 2,\n            name: \"about\",\n            href: \"about\"\n        },\n        {\n            id: 3,\n            name: \"What I Do\",\n            href: \"service\"\n        },\n        {\n            id: 4,\n            name: \"Projects\",\n            href: \"portfolio\"\n        },\n        {\n            id: 6,\n            name: \"contact\",\n            href: \"contact\"\n        }\n    ]\n};\n// Reducer\nconst reducer = (state, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case NAV:\n            return {\n                ...state,\n                nav: payload\n            };\n        case ANIMATION:\n            return {\n                ...state,\n                animation: payload\n            };\n        case MODAL:\n            return {\n                ...state,\n                modal: payload\n            };\n        case SERVICEMODAL:\n            return {\n                ...state,\n                serviceModal: payload\n            };\n        case PORTFOLIODETAILSMODAL:\n            return {\n                ...state,\n                portfolioDetailsModal: payload\n            };\n        default:\n            return state;\n    }\n};\n// Tokyo State\nconst TokyoState = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const navChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: NAV,\n            payload: value\n        });\n    }, []);\n    const animationChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: ANIMATION,\n            payload: value\n        });\n    }, []);\n    const modalToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: MODAL,\n            payload: value\n        });\n    }, []);\n    const setServiceModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: SERVICEMODAL,\n            payload: value\n        });\n    }, []);\n    const setPortfolioDetailsModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{\n        dispatch({\n            type: PORTFOLIODETAILSMODAL,\n            payload: value\n        });\n    }, []);\n    const { nav , animation , modal , serviceModal , portfolioDetailsModal , menus  } = state;\n    const updatedMenus = menus.map((menu)=>{\n        if (menu.name === \"service\") {\n            return {\n                ...menu,\n                name: \"What I Do\"\n            };\n        }\n        return menu;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TokyoContext.Provider, {\n        value: {\n            menus: updatedMenus,\n            nav,\n            navChange,\n            animation,\n            animationChange,\n            modal,\n            modalToggle,\n            serviceModal,\n            setServiceModal,\n            portfolioDetailsModal,\n            setPortfolioDetailsModal\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mamdouh/Documents/Web Projects/themeforest-j2nUMW98-tokyo-tailwind-css-personal-portfolio-react-next-js-template/tokyo/src/Context.js\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TokyoState, \"F+zFTQx6aoNAt5OK3jSMJh71oBI=\");\n_c = TokyoState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokyoState);\n\nvar _c;\n$RefreshReg$(_c, \"TokyoState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUEsS0FBS2pCLElBQUksS0FBSyxXQUFXO1lBQzNCLE9BQU87Z0JBQUUsR0FBR2lCLElBQUk7Z0JBQUVqQixNQUFNO1lBQVk7UUFDdEMsQ0FBQztRQUNELE9BQU9pQjtJQUNUO0lBRUEscUJBQ0UsOERBQUNoQyxhQUFhaUMsUUFBUTtRQUNwQlIsT0FBTztZQUNMWixPQUFPaUI7WUFDUHRCO1lBQ0FnQjtZQUNBZjtZQUNBaUI7WUFDQWhCO1lBQ0FpQjtZQUNBaEI7WUFDQWlCO1lBQ0FoQjtZQUNBaUI7UUFDRjtrQkFFQ1A7Ozs7OztBQUdQO0dBbkVNRDtLQUFBQTtBQXFFTiwrREFBZUEsVUFBVUEsRUFBQztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db250ZXh0LmpzP2ViNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIENyZWF0ZSBDb250ZXh0XHJcbmNvbnN0IFRva3lvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIFR5cGVcclxuY29uc3QgdHlwZSA9IHtcclxuICBOQVY6IFwiTkFWXCIsXHJcbiAgQU5JTUFUSU9OOiBcIkFOSU1BVElPTlwiLFxyXG4gIE1PREFMOiBcIk1PREFMXCIsXHJcbiAgU0VSVklDRU1PREFMOiBcIlNFUlZJQ0VNT0RBTFwiLFxyXG4gIFBPUlRGT0xJT0RFVEFJTFNNT0RBTDogXCJQT1JURk9MSU9ERVRBSUxTTU9EQUxcIixcclxufTtcclxuY29uc3QgeyBOQVYsIEFOSU1BVElPTiwgTU9EQUwsIFNFUlZJQ0VNT0RBTCwgUE9SVEZPTElPREVUQUlMU01PREFMIH0gPSB0eXBlO1xyXG5cclxuLy8gSW5pdGlhbCBWYWx1ZVxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbmF2OiBcImhvbWVcIixcclxuICBhbmltYXRpb246IFwiZmFkZUluTGVmdFwiLFxyXG4gIG1vZGFsOiBmYWxzZSxcclxuICBzZXJ2aWNlTW9kYWw6IG51bGwsXHJcbiAgcG9ydGZvbGlvRGV0YWlsc01vZGFsOiBudWxsLFxyXG4gIG1lbnVzOiBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIkhvbWVcIiwgaHJlZjogXCJob21lXCIgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiYWJvdXRcIiwgaHJlZjogXCJhYm91dFwiIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiBcIldoYXQgSSBEb1wiLCBocmVmOiBcInNlcnZpY2VcIiB9LFxyXG4gICAgeyBpZDogNCwgbmFtZTogXCJQcm9qZWN0c1wiLCBocmVmOiBcInBvcnRmb2xpb1wiIH0sXHJcbiAgICB7IGlkOiA2LCBuYW1lOiBcImNvbnRhY3RcIiwgaHJlZjogXCJjb250YWN0XCIgfSxcclxuICBdLFxyXG59O1xyXG5cclxuLy8gUmVkdWNlclxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgTkFWOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG5hdjogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQU5JTUFUSU9OOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFuaW1hdGlvbjogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgTU9EQUw6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kYWw6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNFUlZJQ0VNT0RBTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZXJ2aWNlTW9kYWw6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFBPUlRGT0xJT0RFVEFJTFNNT0RBTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwb3J0Zm9saW9EZXRhaWxzTW9kYWw6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gVG9reW8gU3RhdGVcclxuY29uc3QgVG9reW9TdGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgbmF2Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE5BVixcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGFuaW1hdGlvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBTklNQVRJT04sXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBtb2RhbFRvZ2dsZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBNT0RBTCxcclxuICAgICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNldFNlcnZpY2VNb2RhbCA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTRVJWSUNFTU9EQUwsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXRQb3J0Zm9saW9EZXRhaWxzTW9kYWwgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUE9SVEZPTElPREVUQUlMU01PREFMLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyBuYXYsIGFuaW1hdGlvbiwgbW9kYWwsIHNlcnZpY2VNb2RhbCwgcG9ydGZvbGlvRGV0YWlsc01vZGFsLCBtZW51cyB9ID1cclxuICAgIHN0YXRlO1xyXG5cclxuICBjb25zdCB1cGRhdGVkTWVudXMgPSBtZW51cy5tYXAoKG1lbnUpID0+IHtcclxuICAgIGlmIChtZW51Lm5hbWUgPT09IFwic2VydmljZVwiKSB7XHJcbiAgICAgIHJldHVybiB7IC4uLm1lbnUsIG5hbWU6IFwiV2hhdCBJIERvXCIgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBtZW51O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRva3lvQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIG1lbnVzOiB1cGRhdGVkTWVudXMsXHJcbiAgICAgICAgbmF2LFxyXG4gICAgICAgIG5hdkNoYW5nZSxcclxuICAgICAgICBhbmltYXRpb24sXHJcbiAgICAgICAgYW5pbWF0aW9uQ2hhbmdlLFxyXG4gICAgICAgIG1vZGFsLFxyXG4gICAgICAgIG1vZGFsVG9nZ2xlLFxyXG4gICAgICAgIHNlcnZpY2VNb2RhbCxcclxuICAgICAgICBzZXRTZXJ2aWNlTW9kYWwsXHJcbiAgICAgICAgcG9ydGZvbGlvRGV0YWlsc01vZGFsLFxyXG4gICAgICAgIHNldFBvcnRmb2xpb0RldGFpbHNNb2RhbCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Ub2t5b0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRva3lvU3RhdGU7XHJcbmV4cG9ydCB7IFRva3lvQ29udGV4dCB9O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlUmVkdWNlciIsIlRva3lvQ29udGV4dCIsInR5cGUiLCJOQVYiLCJBTklNQVRJT04iLCJNT0RBTCIsIlNFUlZJQ0VNT0RBTCIsIlBPUlRGT0xJT0RFVEFJTFNNT0RBTCIsImluaXRpYWxTdGF0ZSIsIm5hdiIsImFuaW1hdGlvbiIsIm1vZGFsIiwic2VydmljZU1vZGFsIiwicG9ydGZvbGlvRGV0YWlsc01vZGFsIiwibWVudXMiLCJpZCIsIm5hbWUiLCJocmVmIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsIlRva3lvU3RhdGUiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwibmF2Q2hhbmdlIiwidmFsdWUiLCJhbmltYXRpb25DaGFuZ2UiLCJtb2RhbFRvZ2dsZSIsInNldFNlcnZpY2VNb2RhbCIsInNldFBvcnRmb2xpb0RldGFpbHNNb2RhbCIsInVwZGF0ZWRNZW51cyIsIm1hcCIsIm1lbnUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Context.js\n"));

/***/ })

});