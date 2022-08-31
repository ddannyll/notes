/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/destyle.css/destyle.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/destyle.css/destyle.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! destyle.css v3.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */\n\n/* Reset box-model and set borders */\n/* ============================================ */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-style: solid;\n  border-width: 0;\n}\n\n/* Document */\n/* ============================================ */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n * 3. Remove gray overlay on links for iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -webkit-tap-highlight-color: transparent; /* 3*/\n}\n\n/* Sections */\n/* ============================================ */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/* Vertical rhythm */\n/* ============================================ */\n\np,\ntable,\nblockquote,\naddress,\npre,\niframe,\nform,\nfigure,\ndl {\n  margin: 0;\n}\n\n/* Headings */\n/* ============================================ */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n  margin: 0;\n}\n\n/* Lists (enumeration) */\n/* ============================================ */\n\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* Lists (definition) */\n/* ============================================ */\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n/* Grouping content */\n/* ============================================ */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n  border-top-width: 1px;\n  margin: 0;\n  clear: both;\n  color: inherit;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n\naddress {\n  font-style: inherit;\n}\n\n/* Text-level semantics */\n/* ============================================ */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n  text-decoration: none;\n  color: inherit;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Replaced content */\n/* ============================================ */\n\n/**\n * Prevent vertical alignment issues.\n */\n\nsvg,\nimg,\nembed,\nobject,\niframe {\n  vertical-align: bottom;\n}\n\n/* Forms */\n/* ============================================ */\n\n/**\n * Reset form fields to make them styleable.\n * 1. Make form elements stylable across systems iOS especially.\n * 2. Inherit text-transform from parent.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  -webkit-appearance: none; /* 1 */\n  appearance: none;\n  vertical-align: middle;\n  color: inherit;\n  font: inherit;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  text-align: inherit;\n  text-transform: inherit; /* 2 */\n}\n\n/**\n * Reset radio and checkbox appearance to preserve their look in iOS.\n */\n\n[type=\"checkbox\"] {\n  -webkit-appearance: checkbox;\n  appearance: checkbox;\n}\n\n[type=\"radio\"] {\n  -webkit-appearance: radio;\n  appearance: radio;\n}\n\n/**\n * Correct cursors for clickable elements.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  cursor: pointer;\n}\n\nbutton:disabled,\n[type=\"button\"]:disabled,\n[type=\"reset\"]:disabled,\n[type=\"submit\"]:disabled {\n  cursor: default;\n}\n\n/**\n * Improve outlines for Firefox and unify style with input elements & buttons.\n */\n\n:-moz-focusring {\n  outline: auto;\n}\n\nselect:disabled {\n  opacity: inherit;\n}\n\n/**\n * Remove padding\n */\n\noption {\n  padding: 0;\n}\n\n/**\n * Reset to invisible\n */\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  outline-offset: -2px; /* 1 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Fix font inheritance.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Clickable labels\n */\n\nlabel[for] {\n  cursor: pointer;\n}\n\n/* Interactive */\n/* ============================================ */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/*\n * Remove outline for editable content.\n */\n\n[contenteditable]:focus {\n  outline: auto;\n}\n\n/* Tables */\n/* ============================================ */\n\n/**\n1. Correct table border color inheritance in all Chrome and Safari.\n*/\n\ntable {\n  border-color: inherit; /* 1 */\n  border-collapse: collapse;\n}\n\ncaption {\n  text-align: left;\n}\n\ntd,\nth {\n  vertical-align: top;\n  padding: 0;\n}\n\nth {\n  text-align: left;\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/destyle.css/destyle.css"],"names":[],"mappings":"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","sourcesContent":["/*! destyle.css v3.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */\n\n/* Reset box-model and set borders */\n/* ============================================ */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-style: solid;\n  border-width: 0;\n}\n\n/* Document */\n/* ============================================ */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n * 3. Remove gray overlay on links for iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -webkit-tap-highlight-color: transparent; /* 3*/\n}\n\n/* Sections */\n/* ============================================ */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/* Vertical rhythm */\n/* ============================================ */\n\np,\ntable,\nblockquote,\naddress,\npre,\niframe,\nform,\nfigure,\ndl {\n  margin: 0;\n}\n\n/* Headings */\n/* ============================================ */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n  margin: 0;\n}\n\n/* Lists (enumeration) */\n/* ============================================ */\n\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n/* Lists (definition) */\n/* ============================================ */\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n/* Grouping content */\n/* ============================================ */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n  border-top-width: 1px;\n  margin: 0;\n  clear: both;\n  color: inherit;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n\naddress {\n  font-style: inherit;\n}\n\n/* Text-level semantics */\n/* ============================================ */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n  text-decoration: none;\n  color: inherit;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: inherit; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Replaced content */\n/* ============================================ */\n\n/**\n * Prevent vertical alignment issues.\n */\n\nsvg,\nimg,\nembed,\nobject,\niframe {\n  vertical-align: bottom;\n}\n\n/* Forms */\n/* ============================================ */\n\n/**\n * Reset form fields to make them styleable.\n * 1. Make form elements stylable across systems iOS especially.\n * 2. Inherit text-transform from parent.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  -webkit-appearance: none; /* 1 */\n  appearance: none;\n  vertical-align: middle;\n  color: inherit;\n  font: inherit;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  text-align: inherit;\n  text-transform: inherit; /* 2 */\n}\n\n/**\n * Reset radio and checkbox appearance to preserve their look in iOS.\n */\n\n[type=\"checkbox\"] {\n  -webkit-appearance: checkbox;\n  appearance: checkbox;\n}\n\n[type=\"radio\"] {\n  -webkit-appearance: radio;\n  appearance: radio;\n}\n\n/**\n * Correct cursors for clickable elements.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  cursor: pointer;\n}\n\nbutton:disabled,\n[type=\"button\"]:disabled,\n[type=\"reset\"]:disabled,\n[type=\"submit\"]:disabled {\n  cursor: default;\n}\n\n/**\n * Improve outlines for Firefox and unify style with input elements & buttons.\n */\n\n:-moz-focusring {\n  outline: auto;\n}\n\nselect:disabled {\n  opacity: inherit;\n}\n\n/**\n * Remove padding\n */\n\noption {\n  padding: 0;\n}\n\n/**\n * Reset to invisible\n */\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  outline-offset: -2px; /* 1 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Fix font inheritance.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Clickable labels\n */\n\nlabel[for] {\n  cursor: pointer;\n}\n\n/* Interactive */\n/* ============================================ */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/*\n * Remove outline for editable content.\n */\n\n[contenteditable]:focus {\n  outline: auto;\n}\n\n/* Tables */\n/* ============================================ */\n\n/**\n1. Correct table border color inheritance in all Chrome and Safari.\n*/\n\ntable {\n  border-color: inherit; /* 1 */\n  border-collapse: collapse;\n}\n\ncaption {\n  text-align: left;\n}\n\ntd,\nth {\n  vertical-align: top;\n  padding: 0;\n}\n\nth {\n  text-align: left;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&family=Source+Code+Pro:wght@300;400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Source Code Pro', monospace;\n    font-weight: 300;\n    background: linear-gradient(8deg, rgba(226, 130, 238, 0.3) 0%, rgba(0, 209, 255, 0.3) 100%);\n    height: 100%;\n}\n\nh1 {\n    font-family: 'Alumni Sans Pinstripe';\n    font-size: 3rem;\n    font-weight: 500;\n}\n\nh2 {\n    font-family: 'Alumni Sans Pinstripe';\n    font-size: 2rem;\n    font-weight: 700;\n}\n\n.container {\n    display: grid;\n    grid-template-areas: \n        \". head head\"\n        \"side main .\";\n    grid-template-columns: 200px 1fr;\n    column-gap: 5%;\n    padding: 2rem 10%;\n    row-gap: 2rem;\n}\n\n.header,\n.sidebar {\n    box-shadow: 0px 0px 10px -5px;\n    border-radius: 0.5rem;\n}\n\n.header {\n    grid-area: head;\n    text-align: center;\n}\n\n.sidebar {\n    grid-area: side;\n    padding: 1rem;\n}\n\n\n.main {\n    grid-area: main;\n    justify-self: center;\n    width: 100%;\n    max-width: 700px;\n}\n\n.cross {\n    text-decoration: line-through;\n}\n\n.note {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    column-gap: 20px;\n}\n\n.note p {\n    flex-grow: 1;\n    overflow-wrap: anywhere;\n}\n\n.note input[type=\"date\"] {\n    flex-shrink: 0;\n}\n\n\n.project-delete {\n    opacity: 0;\n    transition: 0.2s;\n}\n\n.project:hover .project-delete {\n    opacity: 0.8;\n}\n\n.project-delete:hover {\n    color: rgb(255, 40, 40);\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n#new-project {\n    width: 100%;\n}\n\n.popup input[type=\"submit\"] {\n    width: 100%;\n    text-align: center;\n    padding: 0.5rem;\n}\n\n.sidebar button {\n    transition: 0.2s ease-in-out\n}\n\n.sidebar button:hover {\n    background-color: rgba(255, 255, 255, .4);  \n}\n\n.sidebar > button {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    overflow-wrap: anywhere;\n}\n\n.sidebar > *:not(hr) {\n    padding: 0.5rem 0.7rem;\n    display: flex;\n    align-items: center;\n}\n\n\nhr {\n    margin: 1rem 0;\n}\n\ninput[type=\"text\"] {\n    height: 2rem;\n}\n\n.popup {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    transform: translate(50%, -50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 1rem;\n    padding: 1rem;\n    box-shadow: 0px 0px 10px -5px;\n    border-radius: 0.5rem;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.notes-div {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.notes-div button {\n    opacity: 0.5;\n}\n\n.notes-div button:hover {\n    opacity: 0.8;\n    color: red;\n}\n\n.note > span {\n    position: relative;\n}\n\n.note input[type=\"checkbox\"] {\n    height: 25px;\n    width: 25px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n    border: 1px solid #34495E;\n    border-radius: 4px;\n    outline: none;\n    transition-duration: 0.3s;\n    cursor: pointer;\n}\n\n.note input[type=\"checkbox\"] + i{\n    display: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n\n.note input[type=\"checkbox\"]:checked + i{\n    display: block;\n    pointer-events: none;\n}\n\n.notes-div > form > input[type=\"text\"] {\n    width: 100%;\n}\n\ninput[type=\"text\"]:focus {\n    outline-width: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yCAAyC;IACzC,gBAAgB;IAChB,2FAA2F;IAC3F,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb;;qBAEiB;IACjB,gCAAgC;IAChC,cAAc;IACd,iBAAiB;IACjB,aAAa;AACjB;;AAEA;;IAEI,6BAA6B;IAC7B,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;;AAGA;IACI,eAAe;IACf,oBAAoB;IACpB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;;AAGA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI;AACJ;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;;AAGA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,6BAA6B;IAC7B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,wBAAwB;IACxB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;;AAGA;IACI,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&family=Source+Code+Pro:wght@300;400&display=swap');\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    font-family: 'Source Code Pro', monospace;\n    font-weight: 300;\n    background: linear-gradient(8deg, rgba(226, 130, 238, 0.3) 0%, rgba(0, 209, 255, 0.3) 100%);\n    height: 100%;\n}\n\nh1 {\n    font-family: 'Alumni Sans Pinstripe';\n    font-size: 3rem;\n    font-weight: 500;\n}\n\nh2 {\n    font-family: 'Alumni Sans Pinstripe';\n    font-size: 2rem;\n    font-weight: 700;\n}\n\n.container {\n    display: grid;\n    grid-template-areas: \n        \". head head\"\n        \"side main .\";\n    grid-template-columns: 200px 1fr;\n    column-gap: 5%;\n    padding: 2rem 10%;\n    row-gap: 2rem;\n}\n\n.header,\n.sidebar {\n    box-shadow: 0px 0px 10px -5px;\n    border-radius: 0.5rem;\n}\n\n.header {\n    grid-area: head;\n    text-align: center;\n}\n\n.sidebar {\n    grid-area: side;\n    padding: 1rem;\n}\n\n\n.main {\n    grid-area: main;\n    justify-self: center;\n    width: 100%;\n    max-width: 700px;\n}\n\n.cross {\n    text-decoration: line-through;\n}\n\n.note {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    column-gap: 20px;\n}\n\n.note p {\n    flex-grow: 1;\n    overflow-wrap: anywhere;\n}\n\n.note input[type=\"date\"] {\n    flex-shrink: 0;\n}\n\n\n.project-delete {\n    opacity: 0;\n    transition: 0.2s;\n}\n\n.project:hover .project-delete {\n    opacity: 0.8;\n}\n\n.project-delete:hover {\n    color: rgb(255, 40, 40);\n}\n\n.project {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n#new-project {\n    width: 100%;\n}\n\n.popup input[type=\"submit\"] {\n    width: 100%;\n    text-align: center;\n    padding: 0.5rem;\n}\n\n.sidebar button {\n    transition: 0.2s ease-in-out\n}\n\n.sidebar button:hover {\n    background-color: rgba(255, 255, 255, .4);  \n}\n\n.sidebar > button {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    overflow-wrap: anywhere;\n}\n\n.sidebar > *:not(hr) {\n    padding: 0.5rem 0.7rem;\n    display: flex;\n    align-items: center;\n}\n\n\nhr {\n    margin: 1rem 0;\n}\n\ninput[type=\"text\"] {\n    height: 2rem;\n}\n\n.popup {\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    transform: translate(50%, -50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    row-gap: 1rem;\n    padding: 1rem;\n    box-shadow: 0px 0px 10px -5px;\n    border-radius: 0.5rem;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.notes-div {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.notes-div button {\n    opacity: 0.5;\n}\n\n.notes-div button:hover {\n    opacity: 0.8;\n    color: red;\n}\n\n.note > span {\n    position: relative;\n}\n\n.note input[type=\"checkbox\"] {\n    height: 25px;\n    width: 25px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n    border: 1px solid #34495E;\n    border-radius: 4px;\n    outline: none;\n    transition-duration: 0.3s;\n    cursor: pointer;\n}\n\n.note input[type=\"checkbox\"] + i{\n    display: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n\n.note input[type=\"checkbox\"]:checked + i{\n    display: block;\n    pointer-events: none;\n}\n\n.notes-div > form > input[type=\"text\"] {\n    width: 100%;\n}\n\ninput[type=\"text\"]:focus {\n    outline-width: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/destyle.css/destyle.css":
/*!**********************************************!*\
  !*** ./node_modules/destyle.css/destyle.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_destyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./destyle.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/destyle.css/destyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_destyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_destyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_destyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_destyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((module) => {

module.exports = {
    primaryTime: {
        name: 'Today',
        time: 24 // in hours
    },
    secondaryTime: {
        name: 'Week',
        time: 24 * 7
    },
    autoDeleteCompleteTime: -1 // in minutes, -1 denotes never
}

/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ "./src/modules/note.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);





let projects = []
const main = document.querySelector('div.main')
const sidebar = document.querySelector('div.sidebar')


function loadPage() {
    const home = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]('Home')
    projects = [home, new _project__WEBPACK_IMPORTED_MODULE_1__["default"]('test'), new _project__WEBPACK_IMPORTED_MODULE_1__["default"]('hello')]
    const newNote = new _note__WEBPACK_IMPORTED_MODULE_0__["default"]()
    newNote.setContent("newNote hello world")
    newNote.setDate(new Date(2022, 5, 20))
    home.appendNote(newNote)
    loadSidebar(home, projects.slice(1))
    loadProjectNotes(home)
}

function loadSidebar(home, customProjects) {    
    const homeElement = createProjectComponent(home)
    sidebar.prepend(homeElement)
    const newProjectBtn = document.createElement('button')
    newProjectBtn.innerText = "New Project"
    newProjectBtn.id = 'new-project'
    newProjectBtn.onclick = () => {
        const existingForm = document.querySelector('form.popup')
        if (existingForm != null) { existingForm.remove() }
        displayInputPopup("Project Name", (newProjectName) => { 
            const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](newProjectName)
            projects.push(newProject)
            appendProject(newProject)
            loadProjectNotes(newProject)
        })
    }
    sidebar.append(newProjectBtn)
    
    function appendProject(project) {
        const projectComponent = createProjectComponent(project, true)
        sidebar.insertBefore(projectComponent, newProjectBtn)
    }
    
    customProjects.forEach(appendProject);

    sidebar.querySelector('#primary-time').innerText = (_config__WEBPACK_IMPORTED_MODULE_2___default().primaryTime.name)
    sidebar.querySelector('#secondary-time').innerText = (_config__WEBPACK_IMPORTED_MODULE_2___default().secondaryTime.name)
}

function newDeleteElement(action, className) {
    const deleteIcon = document.createElement('button')
    deleteIcon.classList.add('fa-solid', 'fa-xmark', className)
    deleteIcon.onclick = (e) => { action(); e.stopPropagation(); }
    return deleteIcon
}

function newCheckboxIcon() {
    const check = document.createElement('i')
    check.classList.add('fa-solid', 'fa-check')
    return check
}

function displayInputPopup(labelText, onsubmitFunction) {
    const form = document.createElement('form')
    form.className = 'popup'
    form.onsubmit = (e) => { 
        e.preventDefault();
        onsubmitFunction(form.elements['popup-input'].value);
    }
    const label = document.createElement('label')
    label.for = "popup-input"
    label.innerText = labelText
    form.appendChild(label)
    
    const input = document.createElement('input')
    input.type = "text"
    input.id = "popup-input"
    input.required = true
    form.appendChild(input)
    
    const submit = document.createElement('input')
    submit.type = 'submit'
    submit.value = 'submit'
    form.appendChild(submit)
    document.body.appendChild(form)

    input.focus()
}

function createProjectComponent(project, deletable) {
    const id = project.getId()
    const name = project.getName()
    const btn = document.createElement('button')
    btn.className = 'project'
    btn.id = `project-${id}`
    btn.innerText = name
    btn.onclick = () => { loadProjectNotes(project) }
    if (deletable) {
        btn.append(newDeleteElement(() => { 
            projects.splice(projects.indexOf(project), 1);
            btn.remove()
        }, 'project-delete'))
    }
    return btn
}

function createNoteComponent(note) {
    const id = note.getId()
    const date = note.getDate()
    const div = document.createElement('div')
    div.className = 'note'
    div.id = `note-${id}`
    
    const checkboxSpan = document.createElement('span')
    const checkboxInput = document.createElement('input')
    checkboxInput.type = 'checkbox'
    checkboxInput.onclick = () => { handleChecked(checkboxInput) }
    checkboxSpan.appendChild(checkboxInput)
    const checkboxIcon = newCheckboxIcon()
    checkboxSpan.appendChild(checkboxIcon)
    div.appendChild(checkboxSpan)
    
    const p = document.createElement('p')
    p.innerText = note.getContent()
    div.appendChild(p)

    const deleteBtn = newDeleteElement(() => { removeNote(note) }, 'note-delete')
    div.appendChild(deleteBtn)

    const dateElement = document.createElement('input')
    dateElement.type = 'date'
    dateElement.value = date === null ? '' : date.toISOString().split('T')[0]
    div.appendChild(dateElement)

    if (note.isComplete()) { checkboxInput.click() }

    return div
}

function handleChecked(checkbox) {
    const outerDiv = checkbox.parentElement.parentElement
    const note = getNoteFromId(outerDiv.id.replace('note-', ''))
    const p = outerDiv.querySelector('p')
    if (checkbox.checked) {
        p.classList.add('cross')
        note.setCompleted(true)
    } else {
        p.classList.remove('cross')
        note.setCompleted(false)
    }
}

function loadProjectNotes(project) {
    removePopup()
    main.innerHTML = ""
    const projectName = document.createElement('h2')
    projectName.innerText = project.getName()
    main.appendChild(projectName)
    const notesDiv = document.createElement('div')
    notesDiv.className = 'notes-div'
    main.appendChild(notesDiv)
    for (const note of project.getNotes()) {
        notesDiv.appendChild(createNoteComponent(note))
    }
    const newNoteForm = document.createElement('form')
    newNoteForm.onsubmit = (e) => {
        e.preventDefault()
        const newNote = new _note__WEBPACK_IMPORTED_MODULE_0__["default"]()
        project.appendNote(newNote)
        newNote.setContent(newNoteInput.value)
        notesDiv.insertBefore(createNoteComponent(newNote), newNoteForm)
        newNoteForm.reset()
    }
    const newNoteInput = document.createElement('input')
    newNoteInput.type = 'text'
    newNoteInput.placeholder = 'New Note'
    newNoteForm.appendChild(newNoteInput)
    notesDiv.appendChild(newNoteForm)

}

function getNoteFromId(id) {
    for (const project of projects) {
        if (project.getNoteFromId(id) != null) {
            return project.getNoteFromId(id)
        }
    }
    return null
}

function removeNote(note) {
    for (const project of projects) {
        project.removeNote(note)
    }
    document.querySelectorAll(`#note-${note.getId()}`).forEach( (n) => { n.remove() })
}

function removePopup() {
    const popupList = document.querySelectorAll('.popup')
    popupList.forEach((popup) => { popup.remove() })
}




/***/ }),

/***/ "./src/modules/note.js":
/*!*****************************!*\
  !*** ./src/modules/note.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Note {
    static #count = 0
    #id
    #content
    #date
    #isComplete
    constructor() {
        this.#content = ""
        this.#date = null
        this.#id = Note.#count.toString()
        Note.#count++
    }
    getContent() { return this.#content }
    getDate() { return this.#date }
    getId() { return this.#id }
    isComplete() { return this.#isComplete }
    setContent(content) { this.#content = content }
    setDate(date) { this.#date = date }
    setCompleted(isComplete) { this.#isComplete = isComplete }

    toString() {
        return `[${this.constructor.name}] {content: ${this.#content}, date: ${this.date}}`
    }

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ "./src/modules/note.js");


class Project {
    static #count = 0
    #id
    #name
    #notes
    #date
    
    constructor(name) {
        this.#name = name
        this.#date = null
        this.#notes = []
        this.#id = Project.#count.toString()
        Project.#count++
    }

    getName() { return this.#name }
    getDate() { return this.#date }
    getNotes() { return this.#notes }
    getId() { return this.#id }
    setName(name) { this.#name = name }
    setDate(date) { this.#date = date }
    getNoteFromId(id) { 
        const matches = this.#notes.filter((note) =>  note.getId() === id )
        if (matches.length != 0) {
            return matches[0]
        }
        return null
    }
    appendNote(note) {
        this.#notes.push(note)
    }
    removeNote(note) {
        if (this.#notes.indexOf(note) == -1) { return }
        this.#notes.splice(this.#notes.indexOf(note), 1)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var destyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! destyle.css */ "./node_modules/destyle.css/destyle.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/controller */ "./src/modules/controller.js");




(0,_modules_controller__WEBPACK_IMPORTED_MODULE_2__.loadPage)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3MiLCJ3ZWJwYWNrOi8vbm90ZXMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25vdGVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3Rlcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdGVzLy4vbm9kZV9tb2R1bGVzL2Rlc3R5bGUuY3NzL2Rlc3R5bGUuY3NzP2U3MjgiLCJ3ZWJwYWNrOi8vbm90ZXMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbm90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25vdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25vdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25vdGVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbm90ZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ub3Rlcy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vbm90ZXMvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL25vdGVzLy4vc3JjL21vZHVsZXMvbm90ZS5qcyIsIndlYnBhY2s6Ly9ub3Rlcy8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vbm90ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm90ZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm90ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25vdGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm90ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ub3Rlcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbm90ZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIGRlc3R5bGUuY3NzIHYzLjAuMiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL25pY29sYXMtY3VzYW4vZGVzdHlsZS5jc3MgKi9cXG5cXG4vKiBSZXNldCBib3gtbW9kZWwgYW5kIHNldCBib3JkZXJzICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDA7XFxufVxcblxcbi8qIERvY3VtZW50ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICogMy4gUmVtb3ZlIGdyYXkgb3ZlcmxheSBvbiBsaW5rcyBmb3IgaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMyovXFxufVxcblxcbi8qIFNlY3Rpb25zICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFZlcnRpY2FsIHJoeXRobSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxucCxcXG50YWJsZSxcXG5ibG9ja3F1b3RlLFxcbmFkZHJlc3MsXFxucHJlLFxcbmlmcmFtZSxcXG5mb3JtLFxcbmZpZ3VyZSxcXG5kbCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRpbmdzICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogTGlzdHMgKGVudW1lcmF0aW9uKSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxudWwsXFxub2wge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIExpc3RzIChkZWZpbml0aW9uKSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuZHQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRkIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxuICBtYXJnaW46IDA7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuYWRkcmVzcyB7XFxuICBmb250LXN0eWxlOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljcyAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogUmVwbGFjZWQgY29udGVudCAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUHJldmVudCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaXNzdWVzLlxcbiAqL1xcblxcbnN2ZyxcXG5pbWcsXFxuZW1iZWQsXFxub2JqZWN0LFxcbmlmcmFtZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG4vKiBGb3JtcyAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVzZXQgZm9ybSBmaWVsZHMgdG8gbWFrZSB0aGVtIHN0eWxlYWJsZS5cXG4gKiAxLiBNYWtlIGZvcm0gZWxlbWVudHMgc3R5bGFibGUgYWNyb3NzIHN5c3RlbXMgaU9TIGVzcGVjaWFsbHkuXFxuICogMi4gSW5oZXJpdCB0ZXh0LXRyYW5zZm9ybSBmcm9tIHBhcmVudC5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogMSAqL1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IHJhZGlvIGFuZCBjaGVja2JveCBhcHBlYXJhbmNlIHRvIHByZXNlcnZlIHRoZWlyIGxvb2sgaW4gaU9TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogY2hlY2tib3g7XFxuICBhcHBlYXJhbmNlOiBjaGVja2JveDtcXG59XFxuXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiByYWRpbztcXG4gIGFwcGVhcmFuY2U6IHJhZGlvO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGN1cnNvcnMgZm9yIGNsaWNrYWJsZSBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06ZGlzYWJsZWQsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06ZGlzYWJsZWQsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSBvdXRsaW5lcyBmb3IgRmlyZWZveCBhbmQgdW5pZnkgc3R5bGUgd2l0aCBpbnB1dCBlbGVtZW50cyAmIGJ1dHRvbnMuXFxuICovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbnNlbGVjdDpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgcGFkZGluZ1xcbiAqL1xcblxcbm9wdGlvbiB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCB0byBpbnZpc2libGVcXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBGaXggZm9udCBpbmhlcml0YW5jZS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENsaWNrYWJsZSBsYWJlbHNcXG4gKi9cXG5cXG5sYWJlbFtmb3JdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogSW50ZXJhY3RpdmUgKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgb3V0bGluZSBmb3IgZWRpdGFibGUgY29udGVudC5cXG4gKi9cXG5cXG5bY29udGVudGVkaXRhYmxlXTpmb2N1cyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKiBUYWJsZXMgKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbjEuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuY2FwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG50ZCxcXG50aCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGgge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvZGVzdHlsZS5jc3MvZGVzdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUZBQXFGOztBQUVyRixvQ0FBb0M7QUFDcEMsaURBQWlEOztBQUVqRDs7O0VBR0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtF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Qjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLGdCQUFnQjtBQUNoQixpREFBaUQ7O0FBRWpEOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQSxXQUFXO0FBQ1gsaURBQWlEOztBQUVqRDs7Q0FFQzs7QUFFRDtFQUNFLHFCQUFxQixFQUFFLE1BQU07RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBkZXN0eWxlLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNvbGFzLWN1c2FuL2Rlc3R5bGUuY3NzICovXFxuXFxuLyogUmVzZXQgYm94LW1vZGVsIGFuZCBzZXQgYm9yZGVycyAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbn1cXG5cXG4vKiBEb2N1bWVudCAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqIDMuIFJlbW92ZSBncmF5IG92ZXJsYXkgb24gbGlua3MgZm9yIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDMqL1xcbn1cXG5cXG4vKiBTZWN0aW9ucyAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBWZXJ0aWNhbCByaHl0aG0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbnAsXFxudGFibGUsXFxuYmxvY2txdW90ZSxcXG5hZGRyZXNzLFxcbnByZSxcXG5pZnJhbWUsXFxuZm9ybSxcXG5maWd1cmUsXFxuZGwge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIZWFkaW5ncyAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIExpc3RzIChlbnVtZXJhdGlvbikgKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbnVsLFxcbm9sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBMaXN0cyAoZGVmaW5pdGlvbikgKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbmR0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kZCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudCAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbmFkZHJlc3Mge1xcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3MgKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIFJlcGxhY2VkIGNvbnRlbnQgKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFByZXZlbnQgdmVydGljYWwgYWxpZ25tZW50IGlzc3Vlcy5cXG4gKi9cXG5cXG5zdmcsXFxuaW1nLFxcbmVtYmVkLFxcbm9iamVjdCxcXG5pZnJhbWUge1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuLyogRm9ybXMgKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlc2V0IGZvcm0gZmllbGRzIHRvIG1ha2UgdGhlbSBzdHlsZWFibGUuXFxuICogMS4gTWFrZSBmb3JtIGVsZW1lbnRzIHN0eWxhYmxlIGFjcm9zcyBzeXN0ZW1zIGlPUyBlc3BlY2lhbGx5LlxcbiAqIDIuIEluaGVyaXQgdGV4dC10cmFuc2Zvcm0gZnJvbSBwYXJlbnQuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIDEgKi9cXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCByYWRpbyBhbmQgY2hlY2tib3ggYXBwZWFyYW5jZSB0byBwcmVzZXJ2ZSB0aGVpciBsb29rIGluIGlPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGNoZWNrYm94O1xcbiAgYXBwZWFyYW5jZTogY2hlY2tib3g7XFxufVxcblxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogcmFkaW87XFxuICBhcHBlYXJhbmNlOiByYWRpbztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBjdXJzb3JzIGZvciBjbGlja2FibGUgZWxlbWVudHMuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOmRpc2FibGVkLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOmRpc2FibGVkLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgb3V0bGluZXMgZm9yIEZpcmVmb3ggYW5kIHVuaWZ5IHN0eWxlIHdpdGggaW5wdXQgZWxlbWVudHMgJiBidXR0b25zLlxcbiAqL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG5zZWxlY3Q6ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHBhZGRpbmdcXG4gKi9cXG5cXG5vcHRpb24ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgdG8gaW52aXNpYmxlXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gRml4IGZvbnQgaW5oZXJpdGFuY2UuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDbGlja2FibGUgbGFiZWxzXFxuICovXFxuXFxubGFiZWxbZm9yXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEludGVyYWN0aXZlICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuICogUmVtb3ZlIG91dGxpbmUgZm9yIGVkaXRhYmxlIGNvbnRlbnQuXFxuICovXFxuXFxuW2NvbnRlbnRlZGl0YWJsZV06Zm9jdXMge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLyogVGFibGVzICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbmNhcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxudGQsXFxudGgge1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnRoIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWx1bW5pK1NhbnMrUGluc3RyaXBlJmZhbWlseT1Tb3VyY2UrQ29kZStQcm86d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDhkZWcsIHJnYmEoMjI2LCAxMzAsIDIzOCwgMC4zKSAwJSwgcmdiYSgwLCAyMDksIDI1NSwgMC4zKSAxMDAlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWx1bW5pIFNhbnMgUGluc3RyaXBlJztcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWx1bW5pIFNhbnMgUGluc3RyaXBlJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiLiBoZWFkIGhlYWRcXFwiXFxuICAgICAgICBcXFwic2lkZSBtYWluIC5cXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgY29sdW1uLWdhcDogNSU7XFxuICAgIHBhZGRpbmc6IDJyZW0gMTAlO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5zaWRlYmFyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IC01cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG59XFxuXFxuLmNyb3NzIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5ub3RlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubm90ZSBwIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLm5vdGUgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcblxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDQwLCA0MCk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucG9wdXAgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXRcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNCk7ICBcXG59XFxuXFxuLnNpZGViYXIgPiBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLnNpZGViYXIgPiAqOm5vdChocikge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5ociB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHJpZ2h0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAtNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm90ZXMtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm90ZXMtZGl2IGJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm5vdGVzLWRpdiBidXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5ub3RlID4gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5vdGUgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ0OTVFO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdGUgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGl7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbi5ub3RlIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGl7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm5vdGVzLWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLDJGQUEyRjtJQUMzRixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYjs7cUJBRWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOzs7QUFHQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWx1bW5pK1NhbnMrUGluc3RyaXBlJmZhbWlseT1Tb3VyY2UrQ29kZStQcm86d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDhkZWcsIHJnYmEoMjI2LCAxMzAsIDIzOCwgMC4zKSAwJSwgcmdiYSgwLCAyMDksIDI1NSwgMC4zKSAxMDAlKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWx1bW5pIFNhbnMgUGluc3RyaXBlJztcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWx1bW5pIFNhbnMgUGluc3RyaXBlJztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiLiBoZWFkIGhlYWRcXFwiXFxuICAgICAgICBcXFwic2lkZSBtYWluIC5cXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAgY29sdW1uLWdhcDogNSU7XFxuICAgIHBhZGRpbmc6IDJyZW0gMTAlO1xcbiAgICByb3ctZ2FwOiAycmVtO1xcbn1cXG5cXG4uaGVhZGVyLFxcbi5zaWRlYmFyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IC01cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG59XFxuXFxuLmNyb3NzIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5ub3RlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubm90ZSBwIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLm5vdGUgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcblxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDQwLCA0MCk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucG9wdXAgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXRcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNCk7ICBcXG59XFxuXFxuLnNpZGViYXIgPiBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLnNpZGViYXIgPiAqOm5vdChocikge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5ociB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHJpZ2h0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAtNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm90ZXMtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubm90ZXMtZGl2IGJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm5vdGVzLWRpdiBidXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5ub3RlID4gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5vdGUgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ0OTVFO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdGUgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGl7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbi5ub3RlIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGl7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm5vdGVzLWRpdiA+IGZvcm0gPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHByaW1hcnlUaW1lOiB7XG4gICAgICAgIG5hbWU6ICdUb2RheScsXG4gICAgICAgIHRpbWU6IDI0IC8vIGluIGhvdXJzXG4gICAgfSxcbiAgICBzZWNvbmRhcnlUaW1lOiB7XG4gICAgICAgIG5hbWU6ICdXZWVrJyxcbiAgICAgICAgdGltZTogMjQgKiA3XG4gICAgfSxcbiAgICBhdXRvRGVsZXRlQ29tcGxldGVUaW1lOiAtMSAvLyBpbiBtaW51dGVzLCAtMSBkZW5vdGVzIG5ldmVyXG59IiwiaW1wb3J0IHsgZnJvbVVuaXhUaW1lIH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcblxubGV0IHByb2plY3RzID0gW11cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubWFpbicpXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnNpZGViYXInKVxuXG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGNvbnN0IGhvbWUgPSBuZXcgUHJvamVjdCgnSG9tZScpXG4gICAgcHJvamVjdHMgPSBbaG9tZSwgbmV3IFByb2plY3QoJ3Rlc3QnKSwgbmV3IFByb2plY3QoJ2hlbGxvJyldXG4gICAgY29uc3QgbmV3Tm90ZSA9IG5ldyBOb3RlKClcbiAgICBuZXdOb3RlLnNldENvbnRlbnQoXCJuZXdOb3RlIGhlbGxvIHdvcmxkXCIpXG4gICAgbmV3Tm90ZS5zZXREYXRlKG5ldyBEYXRlKDIwMjIsIDUsIDIwKSlcbiAgICBob21lLmFwcGVuZE5vdGUobmV3Tm90ZSlcbiAgICBsb2FkU2lkZWJhcihob21lLCBwcm9qZWN0cy5zbGljZSgxKSlcbiAgICBsb2FkUHJvamVjdE5vdGVzKGhvbWUpXG59XG5cbmZ1bmN0aW9uIGxvYWRTaWRlYmFyKGhvbWUsIGN1c3RvbVByb2plY3RzKSB7ICAgIFxuICAgIGNvbnN0IGhvbWVFbGVtZW50ID0gY3JlYXRlUHJvamVjdENvbXBvbmVudChob21lKVxuICAgIHNpZGViYXIucHJlcGVuZChob21lRWxlbWVudClcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBuZXdQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiTmV3IFByb2plY3RcIlxuICAgIG5ld1Byb2plY3RCdG4uaWQgPSAnbmV3LXByb2plY3QnXG4gICAgbmV3UHJvamVjdEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBleGlzdGluZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnBvcHVwJylcbiAgICAgICAgaWYgKGV4aXN0aW5nRm9ybSAhPSBudWxsKSB7IGV4aXN0aW5nRm9ybS5yZW1vdmUoKSB9XG4gICAgICAgIGRpc3BsYXlJbnB1dFBvcHVwKFwiUHJvamVjdCBOYW1lXCIsIChuZXdQcm9qZWN0TmFtZSkgPT4geyBcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdClcbiAgICAgICAgICAgIGFwcGVuZFByb2plY3QobmV3UHJvamVjdClcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0Tm90ZXMobmV3UHJvamVjdClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc2lkZWJhci5hcHBlbmQobmV3UHJvamVjdEJ0bilcbiAgICBcbiAgICBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbXBvbmVudCA9IGNyZWF0ZVByb2plY3RDb21wb25lbnQocHJvamVjdCwgdHJ1ZSlcbiAgICAgICAgc2lkZWJhci5pbnNlcnRCZWZvcmUocHJvamVjdENvbXBvbmVudCwgbmV3UHJvamVjdEJ0bilcbiAgICB9XG4gICAgXG4gICAgY3VzdG9tUHJvamVjdHMuZm9yRWFjaChhcHBlbmRQcm9qZWN0KTtcblxuICAgIHNpZGViYXIucXVlcnlTZWxlY3RvcignI3ByaW1hcnktdGltZScpLmlubmVyVGV4dCA9IGNvbmZpZy5wcmltYXJ5VGltZS5uYW1lXG4gICAgc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcjc2Vjb25kYXJ5LXRpbWUnKS5pbm5lclRleHQgPSBjb25maWcuc2Vjb25kYXJ5VGltZS5uYW1lXG59XG5cbmZ1bmN0aW9uIG5ld0RlbGV0ZUVsZW1lbnQoYWN0aW9uLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXhtYXJrJywgY2xhc3NOYW1lKVxuICAgIGRlbGV0ZUljb24ub25jbGljayA9IChlKSA9PiB7IGFjdGlvbigpOyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9XG4gICAgcmV0dXJuIGRlbGV0ZUljb25cbn1cblxuZnVuY3Rpb24gbmV3Q2hlY2tib3hJY29uKCkge1xuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2hlY2snKVxuICAgIHJldHVybiBjaGVja1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW5wdXRQb3B1cChsYWJlbFRleHQsIG9uc3VibWl0RnVuY3Rpb24pIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc05hbWUgPSAncG9wdXAnXG4gICAgZm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7IFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uc3VibWl0RnVuY3Rpb24oZm9ybS5lbGVtZW50c1sncG9wdXAtaW5wdXQnXS52YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmZvciA9IFwicG9wdXAtaW5wdXRcIlxuICAgIGxhYmVsLmlubmVyVGV4dCA9IGxhYmVsVGV4dFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiXG4gICAgaW5wdXQuaWQgPSBcInBvcHVwLWlucHV0XCJcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWVcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIFxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnXG4gICAgc3VibWl0LnZhbHVlID0gJ3N1Ym1pdCdcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBpbnB1dC5mb2N1cygpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb21wb25lbnQocHJvamVjdCwgZGVsZXRhYmxlKSB7XG4gICAgY29uc3QgaWQgPSBwcm9qZWN0LmdldElkKClcbiAgICBjb25zdCBuYW1lID0gcHJvamVjdC5nZXROYW1lKClcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ0bi5jbGFzc05hbWUgPSAncHJvamVjdCdcbiAgICBidG4uaWQgPSBgcHJvamVjdC0ke2lkfWBcbiAgICBidG4uaW5uZXJUZXh0ID0gbmFtZVxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4geyBsb2FkUHJvamVjdE5vdGVzKHByb2plY3QpIH1cbiAgICBpZiAoZGVsZXRhYmxlKSB7XG4gICAgICAgIGJ0bi5hcHBlbmQobmV3RGVsZXRlRWxlbWVudCgoKSA9PiB7IFxuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICAgICAgYnRuLnJlbW92ZSgpXG4gICAgICAgIH0sICdwcm9qZWN0LWRlbGV0ZScpKVxuICAgIH1cbiAgICByZXR1cm4gYnRuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGVDb21wb25lbnQobm90ZSkge1xuICAgIGNvbnN0IGlkID0gbm90ZS5nZXRJZCgpXG4gICAgY29uc3QgZGF0ZSA9IG5vdGUuZ2V0RGF0ZSgpXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NOYW1lID0gJ25vdGUnXG4gICAgZGl2LmlkID0gYG5vdGUtJHtpZH1gXG4gICAgXG4gICAgY29uc3QgY2hlY2tib3hTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgY29uc3QgY2hlY2tib3hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgY2hlY2tib3hJbnB1dC5vbmNsaWNrID0gKCkgPT4geyBoYW5kbGVDaGVja2VkKGNoZWNrYm94SW5wdXQpIH1cbiAgICBjaGVja2JveFNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tib3hJbnB1dClcbiAgICBjb25zdCBjaGVja2JveEljb24gPSBuZXdDaGVja2JveEljb24oKVxuICAgIGNoZWNrYm94U3Bhbi5hcHBlbmRDaGlsZChjaGVja2JveEljb24pXG4gICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrYm94U3BhbilcbiAgICBcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcC5pbm5lclRleHQgPSBub3RlLmdldENvbnRlbnQoKVxuICAgIGRpdi5hcHBlbmRDaGlsZChwKVxuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gbmV3RGVsZXRlRWxlbWVudCgoKSA9PiB7IHJlbW92ZU5vdGUobm90ZSkgfSwgJ25vdGUtZGVsZXRlJylcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxuXG4gICAgY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZGF0ZUVsZW1lbnQudHlwZSA9ICdkYXRlJ1xuICAgIGRhdGVFbGVtZW50LnZhbHVlID0gZGF0ZSA9PT0gbnVsbCA/ICcnIDogZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpXG5cbiAgICBpZiAobm90ZS5pc0NvbXBsZXRlKCkpIHsgY2hlY2tib3hJbnB1dC5jbGljaygpIH1cblxuICAgIHJldHVybiBkaXZcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hlY2tlZChjaGVja2JveCkge1xuICAgIGNvbnN0IG91dGVyRGl2ID0gY2hlY2tib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgY29uc3Qgbm90ZSA9IGdldE5vdGVGcm9tSWQob3V0ZXJEaXYuaWQucmVwbGFjZSgnbm90ZS0nLCAnJykpXG4gICAgY29uc3QgcCA9IG91dGVyRGl2LnF1ZXJ5U2VsZWN0b3IoJ3AnKVxuICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnY3Jvc3MnKVxuICAgICAgICBub3RlLnNldENvbXBsZXRlZCh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHAuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3MnKVxuICAgICAgICBub3RlLnNldENvbXBsZXRlZChmYWxzZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0Tm90ZXMocHJvamVjdCkge1xuICAgIHJlbW92ZVBvcHVwKClcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBwcm9qZWN0LmdldE5hbWUoKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG4gICAgY29uc3Qgbm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5vdGVzRGl2LmNsYXNzTmFtZSA9ICdub3Rlcy1kaXYnXG4gICAgbWFpbi5hcHBlbmRDaGlsZChub3Rlc0RpdilcbiAgICBmb3IgKGNvbnN0IG5vdGUgb2YgcHJvamVjdC5nZXROb3RlcygpKSB7XG4gICAgICAgIG5vdGVzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5vdGVDb21wb25lbnQobm90ZSkpXG4gICAgfVxuICAgIGNvbnN0IG5ld05vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgbmV3Tm90ZUZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbmV3Tm90ZSA9IG5ldyBOb3RlKClcbiAgICAgICAgcHJvamVjdC5hcHBlbmROb3RlKG5ld05vdGUpXG4gICAgICAgIG5ld05vdGUuc2V0Q29udGVudChuZXdOb3RlSW5wdXQudmFsdWUpXG4gICAgICAgIG5vdGVzRGl2Lmluc2VydEJlZm9yZShjcmVhdGVOb3RlQ29tcG9uZW50KG5ld05vdGUpLCBuZXdOb3RlRm9ybSlcbiAgICAgICAgbmV3Tm90ZUZvcm0ucmVzZXQoKVxuICAgIH1cbiAgICBjb25zdCBuZXdOb3RlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmV3Tm90ZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBuZXdOb3RlSW5wdXQucGxhY2Vob2xkZXIgPSAnTmV3IE5vdGUnXG4gICAgbmV3Tm90ZUZvcm0uYXBwZW5kQ2hpbGQobmV3Tm90ZUlucHV0KVxuICAgIG5vdGVzRGl2LmFwcGVuZENoaWxkKG5ld05vdGVGb3JtKVxuXG59XG5cbmZ1bmN0aW9uIGdldE5vdGVGcm9tSWQoaWQpIHtcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgaWYgKHByb2plY3QuZ2V0Tm90ZUZyb21JZChpZCkgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3QuZ2V0Tm90ZUZyb21JZChpZClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiByZW1vdmVOb3RlKG5vdGUpIHtcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgICAgcHJvamVjdC5yZW1vdmVOb3RlKG5vdGUpXG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCNub3RlLSR7bm90ZS5nZXRJZCgpfWApLmZvckVhY2goIChuKSA9PiB7IG4ucmVtb3ZlKCkgfSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUG9wdXAoKSB7XG4gICAgY29uc3QgcG9wdXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJylcbiAgICBwb3B1cExpc3QuZm9yRWFjaCgocG9wdXApID0+IHsgcG9wdXAucmVtb3ZlKCkgfSlcbn1cblxuXG5leHBvcnQgeyBsb2FkUGFnZSB9IiwiY2xhc3MgTm90ZSB7XG4gICAgc3RhdGljICNjb3VudCA9IDBcbiAgICAjaWRcbiAgICAjY29udGVudFxuICAgICNkYXRlXG4gICAgI2lzQ29tcGxldGVcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jY29udGVudCA9IFwiXCJcbiAgICAgICAgdGhpcy4jZGF0ZSA9IG51bGxcbiAgICAgICAgdGhpcy4jaWQgPSBOb3RlLiNjb3VudC50b1N0cmluZygpXG4gICAgICAgIE5vdGUuI2NvdW50KytcbiAgICB9XG4gICAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuI2NvbnRlbnQgfVxuICAgIGdldERhdGUoKSB7IHJldHVybiB0aGlzLiNkYXRlIH1cbiAgICBnZXRJZCgpIHsgcmV0dXJuIHRoaXMuI2lkIH1cbiAgICBpc0NvbXBsZXRlKCkgeyByZXR1cm4gdGhpcy4jaXNDb21wbGV0ZSB9XG4gICAgc2V0Q29udGVudChjb250ZW50KSB7IHRoaXMuI2NvbnRlbnQgPSBjb250ZW50IH1cbiAgICBzZXREYXRlKGRhdGUpIHsgdGhpcy4jZGF0ZSA9IGRhdGUgfVxuICAgIHNldENvbXBsZXRlZChpc0NvbXBsZXRlKSB7IHRoaXMuI2lzQ29tcGxldGUgPSBpc0NvbXBsZXRlIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFske3RoaXMuY29uc3RydWN0b3IubmFtZX1dIHtjb250ZW50OiAke3RoaXMuI2NvbnRlbnR9LCBkYXRlOiAke3RoaXMuZGF0ZX19YFxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE5vdGUiLCJpbXBvcnQgTm90ZSBmcm9tIFwiLi9ub3RlXCJcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgc3RhdGljICNjb3VudCA9IDBcbiAgICAjaWRcbiAgICAjbmFtZVxuICAgICNub3Rlc1xuICAgICNkYXRlXG4gICAgXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLiNuYW1lID0gbmFtZVxuICAgICAgICB0aGlzLiNkYXRlID0gbnVsbFxuICAgICAgICB0aGlzLiNub3RlcyA9IFtdXG4gICAgICAgIHRoaXMuI2lkID0gUHJvamVjdC4jY291bnQudG9TdHJpbmcoKVxuICAgICAgICBQcm9qZWN0LiNjb3VudCsrXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMuI25hbWUgfVxuICAgIGdldERhdGUoKSB7IHJldHVybiB0aGlzLiNkYXRlIH1cbiAgICBnZXROb3RlcygpIHsgcmV0dXJuIHRoaXMuI25vdGVzIH1cbiAgICBnZXRJZCgpIHsgcmV0dXJuIHRoaXMuI2lkIH1cbiAgICBzZXROYW1lKG5hbWUpIHsgdGhpcy4jbmFtZSA9IG5hbWUgfVxuICAgIHNldERhdGUoZGF0ZSkgeyB0aGlzLiNkYXRlID0gZGF0ZSB9XG4gICAgZ2V0Tm90ZUZyb21JZChpZCkgeyBcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuI25vdGVzLmZpbHRlcigobm90ZSkgPT4gIG5vdGUuZ2V0SWQoKSA9PT0gaWQgKVxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBhcHBlbmROb3RlKG5vdGUpIHtcbiAgICAgICAgdGhpcy4jbm90ZXMucHVzaChub3RlKVxuICAgIH1cbiAgICByZW1vdmVOb3RlKG5vdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuI25vdGVzLmluZGV4T2Yobm90ZSkgPT0gLTEpIHsgcmV0dXJuIH1cbiAgICAgICAgdGhpcy4jbm90ZXMuc3BsaWNlKHRoaXMuI25vdGVzLmluZGV4T2Yobm90ZSksIDEpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICdkZXN0eWxlLmNzcydcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gJy4vbW9kdWxlcy9jb250cm9sbGVyJ1xuXG5sb2FkUGFnZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9