/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #f0f0f0;\n}\nbody #header {\n  background-color: #3498db;\n  color: #fff;\n  text-align: center;\n  font-size: 2rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\nbody #content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n  flex-wrap: wrap;\n}\nbody #content #left-panel,\nbody #content #right-panel {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  background-color: #f0f0f0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  justify-content: center;\n  align-items: center;\n  aspect-ratio: 1/1;\n  min-width: 500px;\n  border: 5px solid;\n  max-height: 700px;\n  max-width: 700px;\n}\nbody #content .row {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 10%;\n}\nbody #footer {\n  display: flex;\n  flex-direction: row;\n  background-color: #333;\n  align-items: center;\n  justify-content: center;\n  color: #ddd;\n  padding: 5px;\n  text-align: center;\n  flex-shrink: 0;\n  bottom: 0;\n}\n\n#left-panel .cell.ship {\n  background-color: gray;\n}\n\n.cell.shoot span {\n  background-color: black;\n}\n\n.cell.shoot.ship span {\n  background-color: red;\n}\n\n.cell.ship.shoot.sunk span {\n  background-color: #79789a;\n}\n\n.cell {\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(138, 184, 222);\n  border-style: solid;\n  border-width: 1px;\n  height: 97%;\n  padding: 0px;\n  margin: 0px;\n  aspect-ratio: 1/1;\n}\n\nspan {\n  height: 70%;\n  width: 70%;\n  border-radius: 50%;\n}\n\n#menuBar {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 20%;\n  gap: 20px;\n  padding: 20px;\n}\n#menuBar div {\n  flex-direction: row;\n}\n\n#menuBar .cell.ship {\n  background-color: gray;\n  height: 5vh;\n  aspect-ratio: 1/1;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((module) => {

eval("function Display(_container, player, mode, otherDisplay) {\r\n  const container = document.getElementById(_container);\r\n\r\n  for (let i = 0; i < player.gameboard.boardSize; i++) {\r\n    const row = document.createElement(\"div\");\r\n    row.classList.add(`row`);\r\n\r\n    for (let j = 0; j < player.gameboard.boardSize; j++) {\r\n      const cell = document.createElement(\"div\");\r\n      cell.classList.add(\"cell\");\r\n      cell.x = i;\r\n      cell.y = j;\r\n      if (mode === \"AI\") cell.addEventListener(\"click\", attack(player));\r\n      const dot = document.createElement(\"span\");\r\n      cell.appendChild(dot);\r\n      row.appendChild(cell);\r\n    }\r\n    container.appendChild(row);\r\n  }\r\n  refresh();\r\n\r\n  function attack(player) {\r\n    return function (event) {\r\n      if (\r\n        player\r\n          .getEnemy()\r\n          .shoot(event.currentTarget.x, event.currentTarget.y) ===\r\n        \"All ships sunk!\"\r\n      ) {\r\n        refresh();\r\n\r\n        setTimeout(() => {\r\n          player.shoot();\r\n          refresh(alert(player.getEnemy() + \" won!\"));\r\n        }, 100);\r\n\r\n        return;\r\n      }\r\n      refresh();\r\n      setTimeout(() => {\r\n        player.shoot();\r\n        refresh(otherDisplay.refresh());\r\n      }, 500);\r\n      console.log(\r\n        `${player.getEnemy()} shot at ${event.currentTarget.x}, ${\r\n          event.currentTarget.y\r\n        }`\r\n      );\r\n    };\r\n  }\r\n  function refresh() {\r\n    let i = 0,\r\n      j = 0;\r\n    for (const row of container.children) {\r\n      for (const cell of row.children) {\r\n        if (player.gameboard.board[i][j].wasShoot) {\r\n          cell.classList.add(\"shoot\");\r\n        }\r\n        if (player.gameboard.board[i][j].ship) {\r\n          cell.classList.add(\"ship\");\r\n          if (player.gameboard.board[i][j].ship.isSunk())\r\n            cell.classList.add(\"sunk\");\r\n        }\r\n\r\n        j++;\r\n      }\r\n      i++;\r\n      j = 0;\r\n    }\r\n  }\r\n  function reset() {\r\n    for (const row of container.children) {\r\n      for (const cell of row.children) {\r\n        cell.classList.remove(\"ship\");\r\n      }\r\n    }\r\n  }\r\n  return { refresh };\r\n}\r\n\r\nfunction drag(event) {\r\n  console.log(\"put me down!\");\r\n}\r\n\r\nmodule.exports = { Display, drag };\r\n\n\n//# sourceURL=webpack://todo/./src/display.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Ship } = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\r\n\r\nfunction Gameboard() {\r\n  const boardSize = 10;\r\n  const board = [];\r\n  console.log(\"generating board\");\r\n  let remainingShips = { value: 0 };\r\n  for (let i = 0; i < boardSize; i++) {\r\n    const row = [];\r\n    for (let j = 0; j < boardSize; j++) {\r\n      row.push({\r\n        canBePlaced: true,\r\n        wasShoot: false,\r\n        ship: null,\r\n      });\r\n    }\r\n    board.push(row);\r\n  }\r\n  function addShipToBoard(row, column, size, orientation) {\r\n    const ship = Ship(size);\r\n    if (checkPlaceValidity(row, column, size, orientation) === false) {\r\n      return false;\r\n    }\r\n    if (orientation === \"vertical\") {\r\n      for (let i = 0; i < size; i++) {\r\n        board[row][column + i].ship = ship;\r\n        forbidPlaces(row, column + i);\r\n      }\r\n    }\r\n    if (orientation === \"horizontal\") {\r\n      for (let i = 0; i < size; i++) {\r\n        board[row + i][column].ship = ship;\r\n        forbidPlaces(row + i, column);\r\n      }\r\n    }\r\n    remainingShips.value++;\r\n    return true;\r\n  }\r\n  function forbidPlaces(x, y) {\r\n    for (let i = -1; i <= 1; i++) {\r\n      for (let j = -1; j <= 1; j++) {\r\n        if (checkBounds(x + i, y + j)) {\r\n          if (board[x + i][y + j].canBePlaced === true) {\r\n            board[x + i][y + j].canBePlaced = false;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  function checkPlaceValidity(row, column, size, orientation) {\r\n    if (orientation === \"horizontal\") {\r\n      for (let i = 0; i < size; i++) {\r\n        if (!checkBounds(row + i, column)) return false;\r\n        if (board[row + i][column].canBePlaced === false) return false;\r\n      }\r\n    }\r\n    if (orientation === \"vertical\") {\r\n      for (let i = 0; i < size; i++) {\r\n        if (!checkBounds(row, column + i)) return false;\r\n        if (board[row][column + i].canBePlaced === false) return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n  function checkBounds(x, y) {\r\n    let result = null;\r\n    if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) result = true;\r\n    else {\r\n      result = false;\r\n    }\r\n    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;\r\n  }\r\n  function reciveAttack(x, y) {\r\n    if (board[x][y].wasShoot) {\r\n      return false;\r\n    }\r\n    board[x][y].wasShoot = true;\r\n    if (board[x][y].ship) {\r\n      board[x][y].ship.hit();\r\n      if (board[x][y].ship.isSunk()) {\r\n        remainingShips.value--;\r\n        console.log(\r\n          \"attack \" + x + y + \"remaining ships \" + remainingShips.value\r\n        );\r\n        return checkRemainingShips();\r\n      }\r\n      return true;\r\n    }\r\n    return true;\r\n  }\r\n  function checkRemainingShips() {\r\n    if (remainingShips.value === 0) {\r\n      return \"All ships sunk!\";\r\n    }\r\n    return true;\r\n  }\r\n  return {\r\n    board,\r\n    addShipToBoard,\r\n    reciveAttack,\r\n    boardSize,\r\n    remainingShips,\r\n  };\r\n}\r\n\r\nmodule.exports = { Ship, Gameboard };\r\n\n\n//# sourceURL=webpack://todo/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\r\nconst { Player, simulateGame } = __webpack_require__(/*! ../src/player */ \"./src/player.js\");\r\nconst { Display, drag } = __webpack_require__(/*! ../src/display */ \"./src/display.js\");\r\n\r\nconst player1 = Player();\r\nconst player2 = Player();\r\nplayer1.addEnemy(player2);\r\nplayer2.addEnemy(player1);\r\nplayer2.addEnemy(player1);\r\nplayer1.autoAddShips();\r\nplayer2.autoAddShips();\r\nconst displayLeft = Display(\"left-panel\", player1);\r\nconst displayRight = Display(\"right-panel\", player2, \"AI\", displayLeft);\r\n\r\nconst refresh = document.querySelector(\"#regenerate\");\r\nrefresh.addEventListener(\"click\", () => {\r\n  player1.reset();\r\n  displayLeft.refresh();\r\n});\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Gameboard } = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\r\nfunction Player() {\r\n  let gameboard = Gameboard();\r\n  let enemy = null;\r\n  function shoot(row, column = null) {\r\n    if (column === null) {\r\n      row = Math.floor(Math.random() * gameboard.boardSize);\r\n      column = Math.floor(Math.random() * gameboard.boardSize);\r\n    }\r\n    let doIContinue = true;\r\n    while (doIContinue) {\r\n      const result = enemy.gameboard.reciveAttack(row, column);\r\n      row = Math.floor(Math.random() * gameboard.boardSize);\r\n      column = Math.floor(Math.random() * gameboard.boardSize);\r\n      if (result === true) {\r\n        return true;\r\n      } else if (result === \"All ships sunk!\") {\r\n        return result;\r\n      }\r\n    }\r\n  }\r\n  function addShipToBoard(row, column, size, orientation) {\r\n    return gameboard.addShipToBoard(row, column, size, orientation);\r\n  }\r\n  function autoAddShips() {\r\n    let row = null;\r\n    let column = null;\r\n    let ret = null;\r\n    let doubled3 = { value: false };\r\n    for (let i = 2; i <= 5; i++) {\r\n      row = Math.floor(Math.random() * gameboard.boardSize);\r\n      column = Math.floor(Math.random() * gameboard.boardSize);\r\n      ret = addShipToBoard(\r\n        row,\r\n        column,\r\n        i,\r\n        Math.random() < 0.5 ? \"horizontal\" : \"vertical\"\r\n      );\r\n      if (ret == false) i--;\r\n      if (i === 3 && doubled3.value === false) {\r\n        doubled3.value = true;\r\n        i--;\r\n      }\r\n    }\r\n    console.log(\"generating ships\");\r\n  }\r\n  function addEnemy(_enemy) {\r\n    enemy = _enemy;\r\n  }\r\n  function getEnemy() {\r\n    return enemy;\r\n  }\r\n  function reset() {\r\n    gameboard = null;\r\n    gameboard = Gameboard();\r\n    console.log(\"im here\");\r\n  }\r\n  return {\r\n    gameboard,\r\n    shoot,\r\n    addShipToBoard,\r\n    addEnemy,\r\n    autoAddShips,\r\n    getEnemy,\r\n    reset,\r\n  };\r\n}\r\n\r\nfunction simulateGame() {\r\n  let player1 = Player();\r\n  let player2 = Player();\r\n  player1.addEnemy(player2);\r\n  player2.addEnemy(player1);\r\n  player1.autoAddShips();\r\n  player2.autoAddShips();\r\n  while (\r\n    player1.shoot() !== \"All ships sunk!\" &&\r\n    player2.shoot() !== \"All ships sunk!\"\r\n  ) {\r\n    let test = 1;\r\n  }\r\n  return true;\r\n}\r\nmodule.exports = { Player, simulateGame };\r\n\n\n//# sourceURL=webpack://todo/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("function Ship(length) {\r\n  return {\r\n    length: length,\r\n    hits: 0,\r\n    hit() {\r\n      if (this.isSunk()) {\r\n        return \"you monster, it is a warcrime\";\r\n      }\r\n      this.hits++;\r\n    },\r\n    isSunk() {\r\n      return this.hits === this.length;\r\n    },\r\n  };\r\n}\r\n\r\nmodule.exports = { Ship };\r\n\n\n//# sourceURL=webpack://todo/./src/ship.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;