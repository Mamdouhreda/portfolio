"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/popup/DetailsModal.js":
/*!**********************************************!*\
  !*** ./src/components/popup/DetailsModal.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/Context */ \"./src/Context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ModalContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalContainer */ \"./src/components/popup/ModalContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DetailsModal = ()=>{\n    var _project_projects_headImage, _project_projects_headImage_node;\n    _s();\n    const { portfolioDetailsModal , setPortfolioDetailsModal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_src_Context__WEBPACK_IMPORTED_MODULE_1__.TokyoContext);\n    if (!portfolioDetailsModal) {\n        return null;\n    }\n    const project = portfolioDetailsModal;\n    const { title , content , headImage , projects  } = project;\n    const { category , client , date , social , social2 , social3  } = projects || {};\n    // Aggregate social links\n    const socialLinks = [];\n    if (social) socialLinks.push(social);\n    if (social2) socialLinks.push(social2);\n    if (social3) socialLinks.push(social3);\n    const mainImageUrl = ((_project_projects_headImage = project.projects.headImage) === null || _project_projects_headImage === void 0 ? void 0 : (_project_projects_headImage_node = _project_projects_headImage.node) === null || _project_projects_headImage_node === void 0 ? void 0 : _project_projects_headImage_node.sourceUrl) || \"assets/img/thumbs/4-2.jpg\";\n    //format the date\n    const formattedDate = date ? date.substring(0, 10) : \"\";\n    console.log(mainImageUrl);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        nullValue: setPortfolioDetailsModal,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"popup_details\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"top_image\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/img/thumbs/4-2.jpg\",\n                            alt: \"image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"main\",\n                            \"data-img-url\": mainImageUrl,\n                            style: {\n                                backgroundImage: \"url(\".concat(mainImageUrl, \")\")\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"portfolio_main_title\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: category\n                        }, void 0, false, {\n                            fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"main_details w-full h-auto clear-both flex mb-[90px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"textbox w-[70%] pr-[40px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: content\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"detailbox w-[30%] pl-[40px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-none\",\n                                children: [\n                                    client && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mb-[8px] w-full float-left\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"first font-bold block text-black mb-[3px]\",\n                                                children: \"Client\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: client\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    category && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mb-[8px] w-full float-left\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"first font-bold block text-black mb-[3px]\",\n                                                children: \"Category\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: \"text-[#767676] transition-all duration-300 hover:text-black\",\n                                                    href: \"#\",\n                                                    children: category\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    formattedDate && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mb-[8px] w-full float-left\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"first font-bold block text-black mb-[3px]\",\n                                                children: \"Date\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: formattedDate\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    socialLinks.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"w-full float-left\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"first font-bold block text-black mb-[3px]\",\n                                                children: \"Links\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"share list-none relative top-[7px] \",\n                                                children: socialLinks.map((socialItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"mr-[10px] inline-block\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            className: \"text-black text-[18px]\",\n                                                            href: socialItem.url,\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                className: socialItem.title\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                                lineNumber: 95,\n                                                                columnNumber: 27\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    }, index, false, {\n                                                        fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 23\n                                                    }, undefined))\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mamdouh.elsheshtawy/Documents/Sites/portfolio/src/components/popup/DetailsModal.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DetailsModal, \"wqYbVhuLd0+qMJ1jrvJhkiClysM=\");\n_c = DetailsModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsModal);\nvar _c;\n$RefreshReg$(_c, \"DetailsModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWUMsc0JBQzVCLDhEQUFDTjt3REFBR1osV0FBVTtrRUFDWiw0RUFBQ2E7NERBQ0NiLFdBQVU7NERBQ1ZjLE1BQU1HLFdBQVdFLEdBQUc7c0VBRXBCLDRFQUFDQztnRUFBRXBCLFdBQVdpQixXQUFXdEMsS0FBSzs7Ozs7Ozs7Ozs7dURBTFV1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmxFO0dBdkdNM0M7S0FBQUE7QUF5R04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9wdXAvRGV0YWlsc01vZGFsLmpzPzRiNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9reW9Db250ZXh0IH0gZnJvbSBcIkAvc3JjL0NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWxDb250YWluZXIgZnJvbSBcIi4vTW9kYWxDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IERldGFpbHNNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCB7IHBvcnRmb2xpb0RldGFpbHNNb2RhbCwgc2V0UG9ydGZvbGlvRGV0YWlsc01vZGFsIH0gPVxyXG4gICAgdXNlQ29udGV4dChUb2t5b0NvbnRleHQpO1xyXG5cclxuICBpZiAoIXBvcnRmb2xpb0RldGFpbHNNb2RhbCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGNvbnN0IHByb2plY3QgPSBwb3J0Zm9saW9EZXRhaWxzTW9kYWw7XHJcbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgaGVhZEltYWdlLCBwcm9qZWN0cyB9ID0gcHJvamVjdDtcclxuICBjb25zdCB7IGNhdGVnb3J5LCBjbGllbnQsIGRhdGUsIHNvY2lhbCwgc29jaWFsMiwgc29jaWFsMyB9ID0gcHJvamVjdHMgfHwge307XHJcblxyXG4gIC8vIEFnZ3JlZ2F0ZSBzb2NpYWwgbGlua3NcclxuICBjb25zdCBzb2NpYWxMaW5rcyA9IFtdO1xyXG4gIGlmIChzb2NpYWwpIHNvY2lhbExpbmtzLnB1c2goc29jaWFsKTtcclxuICBpZiAoc29jaWFsMikgc29jaWFsTGlua3MucHVzaChzb2NpYWwyKTtcclxuICBpZiAoc29jaWFsMykgc29jaWFsTGlua3MucHVzaChzb2NpYWwzKTtcclxuXHJcbiAgY29uc3QgbWFpbkltYWdlVXJsID1cclxuICAgIHByb2plY3QucHJvamVjdHMuaGVhZEltYWdlPy5ub2RlPy5zb3VyY2VVcmwgfHwgXCJhc3NldHMvaW1nL3RodW1icy80LTIuanBnXCI7XHJcbiAgLy9mb3JtYXQgdGhlIGRhdGVcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF0ZSA/IGRhdGUuc3Vic3RyaW5nKDAsIDEwKSA6IFwiXCI7XHJcbiAgY29uc29sZS5sb2cobWFpbkltYWdlVXJsKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbENvbnRhaW5lciBudWxsVmFsdWU9e3NldFBvcnRmb2xpb0RldGFpbHNNb2RhbH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBfZGV0YWlsc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wX2ltYWdlXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvdGh1bWJzLzQtMi5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxyXG4gICAgICAgICAgICBkYXRhLWltZy11cmw9e21haW5JbWFnZVVybH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHttYWluSW1hZ2VVcmx9KWAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxzcGFuPntjYXRlZ29yeX08L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX2RldGFpbHMgdy1mdWxsIGgtYXV0byBjbGVhci1ib3RoIGZsZXggbWItWzkwcHhdXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRib3ggdy1bNzAlXSBwci1bNDBweF1cIj5cclxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQgfX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxib3ggdy1bMzAlXSBwbC1bNDBweF1cIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZVwiPlxyXG4gICAgICAgICAgICAgIHtjbGllbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLVs4cHhdIHctZnVsbCBmbG9hdC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpcnN0IGZvbnQtYm9sZCBibG9jayB0ZXh0LWJsYWNrIG1iLVszcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xpZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2NsaWVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2NhdGVnb3J5ICYmIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi1bOHB4XSB3LWZ1bGwgZmxvYXQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaXJzdCBmb250LWJvbGQgYmxvY2sgdGV4dC1ibGFjayBtYi1bM3B4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWyM3Njc2NzZdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlcjp0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2Zvcm1hdHRlZERhdGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLVs4cHhdIHctZnVsbCBmbG9hdC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpcnN0IGZvbnQtYm9sZCBibG9jayB0ZXh0LWJsYWNrIG1iLVszcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0ZVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntmb3JtYXR0ZWREYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7c29jaWFsTGlua3MubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidy1mdWxsIGZsb2F0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlyc3QgZm9udC1ib2xkIGJsb2NrIHRleHQtYmxhY2sgbWItWzNweF1cIj5cclxuICAgICAgICAgICAgICAgICAgICBMaW5rc1xyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaGFyZSBsaXN0LW5vbmUgcmVsYXRpdmUgdG9wLVs3cHhdIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzb2NpYWxMaW5rcy5tYXAoKHNvY2lhbEl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItWzEwcHhdIGlubGluZS1ibG9ja1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdGV4dC1bMThweF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3NvY2lhbEl0ZW0udXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtzb2NpYWxJdGVtLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RhbENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc01vZGFsO1xyXG4iXSwibmFtZXMiOlsiVG9reW9Db250ZXh0IiwidXNlQ29udGV4dCIsIk1vZGFsQ29udGFpbmVyIiwiRGV0YWlsc01vZGFsIiwicHJvamVjdCIsInBvcnRmb2xpb0RldGFpbHNNb2RhbCIsInNldFBvcnRmb2xpb0RldGFpbHNNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImhlYWRJbWFnZSIsInByb2plY3RzIiwiY2F0ZWdvcnkiLCJjbGllbnQiLCJkYXRlIiwic29jaWFsIiwic29jaWFsMiIsInNvY2lhbDMiLCJzb2NpYWxMaW5rcyIsInB1c2giLCJtYWluSW1hZ2VVcmwiLCJub2RlIiwic291cmNlVXJsIiwiZm9ybWF0dGVkRGF0ZSIsInN1YnN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJudWxsVmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJkYXRhLWltZy11cmwiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImgzIiwic3BhbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidWwiLCJsaSIsImEiLCJocmVmIiwibGVuZ3RoIiwibWFwIiwic29jaWFsSXRlbSIsImluZGV4IiwidXJsIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/popup/DetailsModal.js\n"));

/***/ })

});