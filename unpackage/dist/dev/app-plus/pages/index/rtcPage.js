"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/main.js?{"page":"pages%2Findex%2FrtcPage"} ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/rtcPage.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_index_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/rtcPage'\n        _pages_index_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_rtcPage_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsNkVBQUc7QUFDWCxRQUFRLDZFQUFHO0FBQ1gsUUFBUSw2RUFBRztBQUNYLGdCQUFnQiw2RUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9pbmRleC9ydGNQYWdlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvaW5kZXgvcnRjUGFnZSdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/main.js?{"type":"appStyle"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/App.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!******************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/rtcPage.nvue?mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rtcPage_nvue_vue_type_template_id_19a14084_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rtcPage.nvue?vue&type=template&id=19a14084&scoped=true&mpType=page */ 5);\n/* harmony import */ var _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtcPage.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./rtcPage.nvue?vue&type=style&index=0&id=19a14084&scoped=true&lang=css&mpType=page */ 16).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./rtcPage.nvue?vue&type=style&index=0&id=19a14084&scoped=true&lang=css&mpType=page */ 16).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _rtcPage_nvue_vue_type_template_id_19a14084_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _rtcPage_nvue_vue_type_template_id_19a14084_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"19a14084\",\n  \"501a3588\",\n  false,\n  _rtcPage_nvue_vue_type_template_id_19a14084_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/rtcPage.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDRGQUFvRjtBQUN4SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNEZBQW9GO0FBQzdJOztBQUVBOztBQUVBO0FBQ2lMO0FBQ2pMLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9ydGNQYWdlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTlhMTQwODQmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3J0Y1BhZ2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9ydGNQYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3J0Y1BhZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5YTE0MDg0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3J0Y1BhZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5YTE0MDg0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE5YTE0MDg0XCIsXG4gIFwiNTAxYTM1ODhcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvcnRjUGFnZS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!************************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/rtcPage.nvue?vue&type=template&id=19a14084&scoped=true&mpType=page ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_19a14084_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtcPage.nvue?vue&type=template&id=19a14084&scoped=true&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_19a14084_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_19a14084_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_19a14084_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_template_id_19a14084_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/rtcPage.nvue?vue&type=template&id=19a14084&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        {
          staticClass: ["content"],
          style: {
            width: _vm.windowWidth + "px",
            height: _vm.windowHeight + "px"
          }
        },
        [
          _vm.info.roleChoices == 2 && _vm.peeridInfo.length == 0
            ? _c(
                "view",
                {
                  staticClass: ["hint"],
                  style: {
                    top: _vm.windowHeight / 2 - 60 + "px",
                    width: _vm.windowWidth + "px"
                  }
                },
                [
                  _c("myLoading"),
                  _c(
                    "u-text",
                    {
                      staticClass: ["text"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v("暂无主播,请耐心等候主播加入")]
                  )
                ],
                1
              )
            : _vm._e(),
          _c(
            "scroll-view",
            {
              staticClass: ["CanvasView"],
              style: {
                width: _vm.windowWidth + "px",
                height: _vm.windowHeight + "px",
                paddingTop: _vm.peeridInfo.length == 0 ? "0px" : "20px"
              },
              attrs: { scrollY: "true" }
            },
            [
              _vm.info.roleChoices != 2
                ? _c(
                    "view",
                    {
                      class: _vm.peeridInfoStyle,
                      staticStyle: { position: "relative" }
                    },
                    [
                      _c(
                        "view",
                        { staticStyle: { flex: "1" } },
                        [
                          _c("AR-CanvasView", {
                            ref: "location",
                            staticStyle: { flex: "1" }
                          })
                        ],
                        1
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["location-none"],
                          style: {
                            left: _vm.video ? "-800px" : "0px",
                            backgroundColor: _vm.video ? "" : "#0A1621",
                            opacity: _vm.video ? "0" : "1"
                          }
                        },
                        [
                          _c("u-image", {
                            staticStyle: { width: "60px", height: "80px" },
                            attrs: {
                              src: "../../static/icon_launch_logo.png",
                              mode: ""
                            }
                          })
                        ],
                        1
                      ),
                      _c("view", { staticClass: ["user-hint"] }, [
                        _c(
                          "u-text",
                          {
                            staticClass: ["hint-text"],
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [_vm._v(_vm._s(_vm.info.uid))]
                        )
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._l(_vm.peeridInfo, function(peerid) {
                return _c(
                  "view",
                  { key: peerid.uid, class: _vm.peeridInfoStyle },
                  [
                    _c(
                      "view",
                      { staticStyle: { flex: "1" } },
                      [
                        _c("AR-CanvasView", {
                          ref: "remote" + peerid.uid,
                          refInFor: true,
                          staticStyle: { flex: "1" }
                        })
                      ],
                      1
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["location-none"],
                        style: {
                          left: peerid.videoStatus ? "-800px" : "0px",
                          backgroundColor: peerid.videoStatus ? "" : "#0A1621",
                          opacity: peerid.videoStatus ? "0" : "1"
                        }
                      },
                      [
                        _c("u-image", {
                          staticStyle: { width: "60px", height: "80px" },
                          attrs: {
                            src: "../../static/icon_launch_logo.png",
                            mode: ""
                          }
                        })
                      ],
                      1
                    ),
                    _c("view", { staticClass: ["user-hint"] }, [
                      _c(
                        "u-text",
                        {
                          staticClass: ["hint-text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v(_vm._s(peerid.uid))]
                      )
                    ])
                  ]
                )
              })
            ],
            2
          ),
          _c(
            "view",
            {
              staticClass: ["options"],
              style: { width: _vm.windowWidth + "px" }
            },
            [
              _vm.info.roleChoices != 2
                ? _c(
                    "view",
                    {
                      staticStyle: {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: "20px"
                      }
                    },
                    [
                      _c(
                        "view",
                        { staticClass: ["icon"], on: { click: _vm.videoFn } },
                        [
                          _vm.video
                            ? _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: { src: "../../static/vi_on.png" }
                              })
                            : _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: { src: "../../static/vi_in.png" }
                              }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("视频")]
                          )
                        ],
                        1
                      ),
                      _vm.info.scenario == 1
                        ? _c(
                            "view",
                            {
                              staticClass: ["icon"],
                              on: { click: _vm.pullFn }
                            },
                            [
                              _c("u-image", {
                                staticStyle: { width: "70px", height: "70px" },
                                attrs: {
                                  src: "../../static/save-fill.png",
                                  mode: ""
                                }
                              }),
                              _c(
                                "u-text",
                                {
                                  staticClass: ["icon_text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v("推流")]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _c(
                        "view",
                        { staticClass: ["icon"], on: { click: _vm.cameraFn } },
                        [
                          _c("u-image", {
                            staticClass: ["icon_img"],
                            attrs: { src: "../../static/camera.png", mode: "" }
                          }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("摄像" + _vm._s(_vm.camera ? "前" : "后"))]
                          )
                        ],
                        1
                      )
                    ]
                  )
                : _vm._e(),
              _c(
                "view",
                {
                  style: {
                    flexDirection: "row",
                    justifyContent:
                      _vm.info.roleChoices != 2 ? "space-between" : "center"
                  }
                },
                [
                  _vm.info.roleChoices != 2
                    ? _c(
                        "view",
                        { staticClass: ["icon"], on: { click: _vm.audioFn } },
                        [
                          _vm.audio
                            ? _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: { src: "../../static/au_in.png" }
                              })
                            : _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: { src: "../../static/au_on.png" }
                              }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("静音")]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _c(
                    "view",
                    { staticClass: ["icon"], on: { click: _vm.closeFn } },
                    [
                      _c("u-image", {
                        staticClass: ["icon_img"],
                        attrs: { src: "../../static/over.png" }
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("挂断")]
                      )
                    ],
                    1
                  ),
                  _vm.info.roleChoices != 2
                    ? _c(
                        "view",
                        {
                          staticClass: ["icon"],
                          on: { click: _vm.speakerphoneFn }
                        },
                        [
                          _vm.Speakerphone
                            ? _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: { src: "../../static/icon_speakers.png" }
                              })
                            : _c("u-image", {
                                staticClass: ["icon_img"],
                                attrs: { src: "../../static/icon_speaker.png" }
                              }),
                          _c(
                            "u-text",
                            {
                              staticClass: ["icon_text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("扬声器")]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            ]
          ),
          _vm.liveShow
            ? _c(
                "view",
                {
                  staticClass: ["live"],
                  style: {
                    width: _vm.windowWidth + "px",
                    height: _vm.windowHeight + "px"
                  },
                  on: {
                    click: function($event) {
                      _vm.penetrateFn($event)
                    }
                  }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["live-options"],
                      style: { width: _vm.windowWidth + "px" }
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["icon_text"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [
                          _vm._v(
                            "注意：请确保当前使用的 appid 开通旁路推流服务，否则将推流失败"
                          )
                        ]
                      ),
                      _c("u-input", {
                        staticClass: ["live-input"],
                        attrs: {
                          type: "text",
                          placeholder: "请输入推流地址",
                          value: _vm.info.liveUrl
                        },
                        on: {
                          input: function($event) {
                            _vm.$set(_vm.info, "liveUrl", $event.detail.value)
                          }
                        }
                      }),
                      _c(
                        "view",
                        {
                          staticStyle: {
                            justifyContent: "space-around",
                            flexDirection: "row",
                            marginTop: "60px"
                          }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticStyle: { width: "80px" },
                              attrs: { type: "default" },
                              on: {
                                click: function($event) {
                                  _vm.liveShow = false
                                }
                              }
                            },
                            [_vm._v("取消")]
                          ),
                          _c(
                            "button",
                            {
                              staticStyle: { width: "80px" },
                              attrs: { type: "primary" },
                              on: { click: _vm.liveTranscoFn }
                            },
                            [_vm._v("确定")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!******************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/rtcPage.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtcPage.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRkLENBQWdCLHVkQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ydGNQYWdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3J0Y1BhZ2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/rtcPage.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 10));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _until = _interopRequireDefault(__webpack_require__(/*! ../../utils/until.js */ 18));\nvar _rtc = _interopRequireDefault(__webpack_require__(/*! ../../utils/rtc.js */ 12));\nvar _myLoading = _interopRequireDefault(__webpack_require__(/*! @/components/my-loading/my-loading.nvue */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  components: {\n    myLoading: _myLoading.default },\n\n  data: function data() {\n    return {\n      // RTC 所需信息\n      info: {},\n      // 生成远端视频容器\n      peeridInfo: [],\n      // 远端视频容器样式\n      peeridInfoStyle: \"video_local\",\n\n      windowWidth: 400,\n      windowHeight: 800,\n\n      // 相关操作\n      audio: true, // 音频开关\n      Speakerphone: true, // 免提\n      video: true, // 视频开关\n      camera: true, // 摄像头前后\n\n      // 旁路推流相关\n      liveShow: false,\n      // 开始旁路推流\n      liveState: false };\n\n  },\n  watch: {\n    peeridInfo: function peeridInfo(newName) {\n      // 根据用户数量控制样式\n      var oLength = this.info.roleChoices == 2 ? newName.length : newName.length + 1;\n      if (oLength > 1) {\n        this.peeridInfoStyle = \"video_local_1\";\n      } else {\n        this.peeridInfoStyle = \"video_local\";\n      }\n    } },\n\n  created: function created() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oInfo;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                _until.default.getWidthHeight());case 2:oInfo = _context.sent;\n              _this2.windowWidth = oInfo.windowWidth;\n              _this2.windowHeight = oInfo.windowHeight;\n              // 监测远端用户加入(创建容器)\n              uni.$on(\"peeridJoinChannel\", function (data) {\n                if (data) {\n                  var oa = _this2.peeridInfo.filter(function (item) {\n                    return item.uid == data;\n                  });\n                  if (oa.length == 0) {\n                    _this2.peeridInfo.push({\n                      uid: data,\n                      videoStatus: true });\n\n                    _this2.$nextTick(function () {\n                      uni.$emit(\"CanvasView\", {\n                        remote: _this2.$refs['remote' + data],\n                        peerid: data });\n\n                    });\n                  }\n                }\n              });\n              // 监测远端用户离开(删除容器)\n              uni.$on(\"UserOffline\", function (data) {\n                __f__(\"log\", \"监测远端用户离开\", data, \" at pages/index/rtcPage.nvue:168\");\n                if (data) {\n                  _this2.peeridInfo.splice(_this2.peeridInfo.findIndex(function (item) {return item.uid === data.uid;}), 1);\n                  // 如果推流，需要重新推流\n                  if (_this2.liveState) {\n                    _this2.liveTranscoFn();\n                  }\n                }\n              });\n              // 监测远端用户视频状态\n              uni.$on(\"VideoStateChanged\", function (data) {\n                if (data) {\n                  _this2.peeridInfo.map(function (item) {\n                    if (item.uid == data.uid) {\n                      // 远端用户关闭视频\n                      if (data.reason == 5 && data.state == 0) {\n                        item.videoStatus = false;\n                        // 远端用户开启视频\n                      } else if (data.state == 2 && data.reason == 0) {\n                        item.videoStatus = true;\n                      }\n                    }\n                  });\n                }\n              });case 8:case \"end\":return _context.stop();}}}, _callee);}))();\n  },\n  onLoad: function onLoad(options) {\n    if (options.info) {\n      uni.showLoading({\n        title: '加载中,请稍后' });\n\n      var oInfo = JSON.parse(options.info);\n      this.info = Object.assign(this.info, oInfo);\n      // 初始化\n      this.init();\n    }\n  },\n  mounted: function mounted() {\n    if (this.info.roleChoices != 2) {\n      // 传入本地视频容器\n      uni.$emit(\"CanvasView\", {\n        location: this.$refs.location });\n\n    }\n  },\n  beforeDestroy: function beforeDestroy() {\n    // 移除App级别的所有事件监听器\n    uni.$off();\n  },\n  methods: {\n    // 推流(在直播场景下)\n    pullFn: function pullFn() {\n      var _this = this;\n      uni.showActionSheet({\n        itemList: ['推流', '停止推流'],\n        success: function success(res) {\n          // 推流\n          if (res.tapIndex + 1 == 1) {\n            _this.liveShow = true;\n          } else {\n            _this.removePublishStreamUrl();\n          }\n          __f__(\"log\", '选中了第' + (res.tapIndex + 1) + '个按钮', \" at pages/index/rtcPage.nvue:230\");\n        },\n        fail: function fail(res) {\n          __f__(\"log\", res.errMsg, \" at pages/index/rtcPage.nvue:233\");\n        } });\n\n    },\n    // 停止旁路推流\n    removePublishStreamUrl: function removePublishStreamUrl() {\n      if (this.liveState) {\n        this.liveState = false;\n        _rtc.default.removePublishStreamUrl(this.info.liveUrl);\n      } else {\n        uni.showToast({\n          title: \"请先推流\",\n          icon: \"none\",\n          duration: 2000 });\n\n      }\n    },\n    // 添加旁路推流\n    liveTranscoFn: function liveTranscoFn() {\n      if (this.info.liveUrl) {\n        this.liveShow = false;\n        this.liveState = true;\n        _rtc.default.LiveTransco(this.info.liveUrl);\n      } else {\n        uni.showToast({\n          title: \"请输入推流地址\",\n          icon: \"none\",\n          duration: 2000 });\n\n      }\n    },\n    // 挂断\n    closeFn: function closeFn() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n\n                  _rtc.default.destroyRtc());case 2:\n                // 返回首页\n                uni.redirectTo({\n                  url: 'index' });case 3:case \"end\":return _context2.stop();}}}, _callee2);}))();\n\n    },\n    // 视频开关\n    videoFn: function videoFn() {\n      this.video = !this.video;\n      _rtc.default.enableLocalVideo(this.video);\n    },\n    // 摄像头前后\n    cameraFn: function cameraFn() {\n      this.camera = !this.camera;\n      _rtc.default.switchCamera();\n    },\n    // 音频开关\n    audioFn: function audioFn() {\n      this.audio = !this.audio;\n      _rtc.default.enableLocalAudio(this.audio);\n    },\n    // 免提\n    speakerphoneFn: function speakerphoneFn() {\n      this.Speakerphone = !this.Speakerphone;\n      _rtc.default.setEnableSpeakerphone(this.Speakerphone);\n    },\n    init: function init() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var oRole;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (\n\n                  _rtc.default.init(_this3.info));case 2:if (!(\n\n                _this3.info.scenario == 1)) {_context3.next = 7;break;}_context3.next = 5;return (\n\n                  _rtc.default.setChannelProfile());case 5:oRole = _context3.sent;\n                __f__(\"log\", '直播场景下设置频道角色', oRole == 0 ? '成功' : '失败', \" at pages/index/rtcPage.nvue:300\");case 7:_context3.next = 9;return (\n\n\n                  _rtc.default.enableVideo());case 9:if (!(\n\n                _this3.info.roleChoices == 2)) {_context3.next = 12;break;}_context3.next = 12;return (\n                  _rtc.default.enableLocalVideo(false));case 12:_context3.next = 14;return (\n\n\n                  _rtc.default.joinChannel());case 14:\n                uni.hideLoading();case 15:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n    // 禁止穿透\n    penetrateFn: function penetrateFn(e) {\n      e.stopPropagation();\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvcnRjUGFnZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1HQTtBQUNBO0FBQ0EsZ0g7QUFDQTtBQUNBO0FBQ0EsaUNBREEsRUFEQTs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQTtBQUNBLGNBRkE7QUFHQTtBQUNBLG9CQUpBO0FBS0E7QUFDQSxvQ0FOQTs7QUFRQSxzQkFSQTtBQVNBLHVCQVRBOztBQVdBO0FBQ0EsaUJBWkEsRUFZQTtBQUNBLHdCQWJBLEVBYUE7QUFDQSxpQkFkQSxFQWNBO0FBQ0Esa0JBZkEsRUFlQTs7QUFFQTtBQUNBLHFCQWxCQTtBQW1CQTtBQUNBLHNCQXBCQTs7QUFzQkEsR0EzQkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBVEEsRUE1QkE7O0FBdUNBLFNBdkNBLHFCQXVDQTtBQUNBLCtDQURBLFNBQ0EsS0FEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBRkE7QUFHQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSx1Q0FGQTs7QUFJQTtBQUNBO0FBQ0EsNkRBREE7QUFFQSxvQ0FGQTs7QUFJQSxxQkFMQTtBQU1BO0FBQ0E7QUFDQSxlQWxCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBVkE7QUFXQTtBQUNBLGVBZEEsRUFwQ0E7QUFtREEsR0ExRkE7QUEyRkEsUUEzRkEsa0JBMkZBLE9BM0ZBLEVBMkZBO0FBQ0E7QUFDQTtBQUNBLHdCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXJHQTtBQXNHQSxTQXRHQSxxQkFzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQTs7QUFHQTtBQUNBLEdBN0dBO0FBOEdBLGVBOUdBLDJCQThHQTtBQUNBO0FBQ0E7QUFDQSxHQWpIQTtBQWtIQTtBQUNBO0FBQ0EsVUFGQSxvQkFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FWQTtBQVdBO0FBQ0E7QUFDQSxTQWJBOztBQWVBLEtBbkJBO0FBb0JBO0FBQ0EsMEJBckJBLG9DQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxzQkFGQTtBQUdBLHdCQUhBOztBQUtBO0FBQ0EsS0FoQ0E7QUFpQ0E7QUFDQSxpQkFsQ0EsMkJBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBLDBCQURBO0FBRUEsc0JBRkE7QUFHQSx3QkFIQTs7QUFLQTtBQUNBLEtBOUNBO0FBK0NBO0FBQ0EsV0FoREEscUJBZ0RBOztBQUVBLDJDQUZBO0FBR0E7QUFDQTtBQUNBLDhCQURBLElBSkE7O0FBT0EsS0F2REE7QUF3REE7QUFDQSxXQXpEQSxxQkF5REE7QUFDQTtBQUNBO0FBQ0EsS0E1REE7QUE2REE7QUFDQSxZQTlEQSxzQkE4REE7QUFDQTtBQUNBO0FBQ0EsS0FqRUE7QUFrRUE7QUFDQSxXQW5FQSxxQkFtRUE7QUFDQTtBQUNBO0FBQ0EsS0F0RUE7QUF1RUE7QUFDQSxrQkF4RUEsNEJBd0VBO0FBQ0E7QUFDQTtBQUNBLEtBM0VBO0FBNEVBLFFBNUVBLGtCQTRFQTs7QUFFQSxnREFGQTs7QUFJQSx5Q0FKQTs7QUFNQSxrREFOQSxTQU1BLEtBTkE7QUFPQSwwR0FQQTs7O0FBVUEsNENBVkE7O0FBWUEsNENBWkE7QUFhQSxzREFiQTs7O0FBZ0JBLDRDQWhCQTtBQWlCQSxrQ0FqQkE7QUFrQkEsS0E5RkE7QUErRkE7QUFDQSxlQWhHQSx1QkFnR0EsQ0FoR0EsRUFnR0E7QUFDQTtBQUNBLEtBbEdBLEVBbEhBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIiA6c3R5bGU9XCJ7d2lkdGg6IHdpbmRvd1dpZHRoICsgJ3B4JyxoZWlnaHQ6IHdpbmRvd0hlaWdodCArICdweCd9XCI+XHJcblx0XHQ8IS0tIOinguS8l+WKoOWFpeaIv+mXtOWQjiDmmoLml6DkuLvmkq3vvIjmj5DnpLrvvIkgLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwiaW5mby5yb2xlQ2hvaWNlcyA9PSAyICYmIHBlZXJpZEluZm8ubGVuZ3RoID09IDBcIiBjbGFzcz1cImhpbnRcIlxyXG5cdFx0XHQ6c3R5bGU9XCJ7dG9wOih3aW5kb3dIZWlnaHQvMi02MCkgKyAncHgnLHdpZHRoOiB3aW5kb3dXaWR0aCArICdweCd9XCI+XHJcblx0XHRcdDxteUxvYWRpbmcgLz5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0XCI+5pqC5peg5Li75pKtLOivt+iAkOW/g+etieWAmeS4u+aSreWKoOWFpTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g6KeG6aKR5riy5p+TKOWkmuS6uikgLS0+XHJcblx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXk9XCJ0cnVlXCIgY2xhc3M9XCJDYW52YXNWaWV3XCJcclxuXHRcdFx0OnN0eWxlPVwie3dpZHRoOiB3aW5kb3dXaWR0aCArICdweCcsaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKyAncHgnLHBhZGRpbmdUb3A6IHBlZXJpZEluZm8ubGVuZ3RoID09IDAgPyAnMHB4JyA6ICcyMHB4J31cIj5cclxuXHRcdFx0PCEtLSDmnKzlnLDop4bpopHmuLLmn5MgLS0+XHJcblx0XHRcdDx2aWV3IDpjbGFzcz1cInBlZXJpZEluZm9TdHlsZVwiIHYtaWY9XCJpbmZvLnJvbGVDaG9pY2VzICE9IDJcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cImZsZXg6IDE7XCI+XHJcblx0XHRcdFx0XHQ8QVItQ2FudmFzVmlldyByZWY9XCJsb2NhdGlvblwiIHN0eWxlPVwiZmxleDogMTtcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOWFs+mXreinhumikeWQjuaYvuekuiAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxvY2F0aW9uLW5vbmVcIlxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2xlZnQ6IHZpZGVvID8gJy04MDBweCcgOiAnMHB4JyxiYWNrZ3JvdW5kQ29sb3I6ICB2aWRlbyA/ICcnOicjMEExNjIxJyxvcGFjaXR5OiB2aWRlbyA/ICcwJzonMSd9XCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogNjBweDtoZWlnaHQ6IDgwcHg7XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25fbGF1bmNoX2xvZ28ucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlci1oaW50XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImhpbnQtdGV4dFwiPnt7aW5mby51aWR9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDov5znq6/nlKjmiLfop4bpopHmuLLmn5MgLS0+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwicGVlcmlkIGluIHBlZXJpZEluZm9cIiA6a2V5PVwicGVlcmlkLnVpZFwiIDpjbGFzcz1cInBlZXJpZEluZm9TdHlsZVwiPlxyXG5cdFx0XHRcdDx2aWV3IHN0eWxlPVwiZmxleDogMTtcIj5cclxuXHRcdFx0XHRcdDxBUi1DYW52YXNWaWV3IDpyZWY9XCIncmVtb3RlJytwZWVyaWQudWlkXCIgc3R5bGU9XCJmbGV4OiAxO1wiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g6L+c56uv5YWz6Zet6KeG6aKR5ZCO5pi+56S6IC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibG9jYXRpb24tbm9uZVwiXHJcblx0XHRcdFx0XHQ6c3R5bGU9XCJ7bGVmdDogcGVlcmlkLnZpZGVvU3RhdHVzID8gJy04MDBweCcgOiAnMHB4JyxiYWNrZ3JvdW5kQ29sb3I6ICBwZWVyaWQudmlkZW9TdGF0dXMgPyAnJzonIzBBMTYyMScsb3BhY2l0eTogcGVlcmlkLnZpZGVvU3RhdHVzID8gJzAnOicxJ31cIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOiA2MHB4O2hlaWdodDogODBweDtcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaWNvbl9sYXVuY2hfbG9nby5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyLWhpbnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGludC10ZXh0XCI+e3twZWVyaWQudWlkfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PCEtLSDnm7jlhbPmk43kvZwgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm9wdGlvbnNcIiA6c3R5bGU9XCJ7d2lkdGg6IHdpbmRvd1dpZHRoICsgJ3B4J31cIj5cclxuXHRcdFx0PCEtLSDop4bpopHnm7jlhbPmk43kvZwo6Z2e5ri45a6i5pi+56S6KSAtLT5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjttYXJnaW4tYm90dG9tOiAyMHB4O1wiXHJcblx0XHRcdFx0di1pZj1cImluZm8ucm9sZUNob2ljZXMgIT0gMlwiPlxyXG5cdFx0XHRcdDwhLS0g6KeG6aKR5byA5YWzIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblwiIEBjbGljaz1cInZpZGVvRm5cIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL3ZpX29uLnBuZ1wiIHYtaWY9XCJ2aWRlb1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy92aV9pbi5wbmdcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+6KeG6aKRPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0t55u05pKt5qih5byPIOa3u+WKoOaXgei3r+aOqOa1gSAgQGNsaWNrPVwibGl2ZVRyYW5zY29GblwiLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwicHVsbEZuXCIgdi1pZj1cImluZm8uc2NlbmFyaW8gPT0gMVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIHN0eWxlPVwid2lkdGg6IDcwcHg7aGVpZ2h0OiA3MHB4O1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9zYXZlLWZpbGwucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25fdGV4dFwiPuaOqOa1gTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDliY3lkI7mkYTlg4/lpLTovazmjaIgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwiY2FtZXJhRm5cIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2NhbWVyYS5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+5pGE5YOPe3tjYW1lcmE/J+WJjSc6J+WQjid9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PCEtLSDpn7PpopHnm7jlhbPmk43kvZwgLS0+XHJcblx0XHRcdDx2aWV3IDpzdHlsZT1cIntmbGV4RGlyZWN0aW9uOiAncm93JyxqdXN0aWZ5Q29udGVudDogaW5mby5yb2xlQ2hvaWNlcyAhPSAyID8gJ3NwYWNlLWJldHdlZW4nOidjZW50ZXInfVwiPlxyXG5cdFx0XHRcdDwhLS0g6Z+z6aKR5byA5YWzKOmdnua4uOWuouaYvuekuikgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwiYXVkaW9GblwiIHYtaWY9XCJpbmZvLnJvbGVDaG9pY2VzICE9IDJcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2F1X2luLnBuZ1wiIHYtaWY9XCJhdWRpb1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9hdV9vbi5wbmdcIiB2LWVsc2U+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbl90ZXh0XCI+6Z2Z6Z+zPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOaMguaWrSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJjbG9zZUZuXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9vdmVyLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25fdGV4dFwiPuaMguaWrTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDmiazlo7DlmajlvIDlhbMo6Z2e5ri45a6i5pi+56S6KSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25cIiBAY2xpY2s9XCJzcGVha2VycGhvbmVGblwiIHYtaWY9XCJpbmZvLnJvbGVDaG9pY2VzICE9IDJcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb25faW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ljb25fc3BlYWtlcnMucG5nXCIgdi1pZj1cIlNwZWFrZXJwaG9uZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpY29uX2ltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pY29uX3NwZWFrZXIucG5nXCIgdi1lbHNlPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25fdGV4dFwiPuaJrOWjsOWZqDwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5peB6Lev5o6o5rWB55u45YWzIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cImxpdmVTaG93XCIgY2xhc3M9XCJsaXZlXCIgOnN0eWxlPVwie3dpZHRoOiB3aW5kb3dXaWR0aCArICdweCcsaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKyAncHgnfVwiXHJcblx0XHRcdEBjbGljaz1cInBlbmV0cmF0ZUZuKCRldmVudClcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsaXZlLW9wdGlvbnNcIiA6c3R5bGU9XCJ7d2lkdGg6IHdpbmRvd1dpZHRoICsgJ3B4J31cIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25fdGV4dFwiPuazqOaEj++8muivt+ehruS/neW9k+WJjeS9v+eUqOeahCBhcHBpZCDlvIDpgJrml4Hot6/mjqjmtYHmnI3liqHvvIzlkKbliJnlsIbmjqjmtYHlpLHotKU8L3RleHQ+XHJcblx0XHRcdFx0PGlucHV0IHYtbW9kZWw9XCJpbmZvLmxpdmVVcmxcIiBjbGFzcz1cImxpdmUtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5o6o5rWB5Zyw5Z2AXCIgLz5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cImp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO2ZsZXgtZGlyZWN0aW9uOiByb3c7bWFyZ2luLXRvcDogNjBweDtcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gc3R5bGU9XCJ3aWR0aDogODBweDtcIiB0eXBlPVwiZGVmYXVsdFwiIEBjbGljaz1cImxpdmVTaG93ID0gZmFsc2VcIj7lj5bmtog8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gc3R5bGU9XCJ3aWR0aDogODBweDtcIiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImxpdmVUcmFuc2NvRm5cIj7noa7lrpo8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvdW50aWwuanNcIjtcclxuXHRpbXBvcnQgUlRDIGZyb20gXCIuLi8uLi91dGlscy9ydGMuanNcIjtcclxuXHRpbXBvcnQgbXlMb2FkaW5nIGZyb20gJ0AvY29tcG9uZW50cy9teS1sb2FkaW5nL215LWxvYWRpbmcubnZ1ZSdcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdG15TG9hZGluZ1xyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8gUlRDIOaJgOmcgOS/oeaBr1xyXG5cdFx0XHRcdGluZm86IHt9LFxyXG5cdFx0XHRcdC8vIOeUn+aIkOi/nOerr+inhumikeWuueWZqFxyXG5cdFx0XHRcdHBlZXJpZEluZm86IFtdLFxyXG5cdFx0XHRcdC8vIOi/nOerr+inhumikeWuueWZqOagt+W8j1xyXG5cdFx0XHRcdHBlZXJpZEluZm9TdHlsZTogXCJ2aWRlb19sb2NhbFwiLFxyXG5cclxuXHRcdFx0XHR3aW5kb3dXaWR0aDogNDAwLFxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogODAwLFxyXG5cclxuXHRcdFx0XHQvLyDnm7jlhbPmk43kvZxcclxuXHRcdFx0XHRhdWRpbzogdHJ1ZSwgLy8g6Z+z6aKR5byA5YWzXHJcblx0XHRcdFx0U3BlYWtlcnBob25lOiB0cnVlLCAvLyDlhY3mj5BcclxuXHRcdFx0XHR2aWRlbzogdHJ1ZSwgLy8g6KeG6aKR5byA5YWzXHJcblx0XHRcdFx0Y2FtZXJhOiB0cnVlLCAvLyDmkYTlg4/lpLTliY3lkI5cclxuXHJcblx0XHRcdFx0Ly8g5peB6Lev5o6o5rWB55u45YWzXHJcblx0XHRcdFx0bGl2ZVNob3c6IGZhbHNlLFxyXG5cdFx0XHRcdC8vIOW8gOWni+aXgei3r+aOqOa1gVxyXG5cdFx0XHRcdGxpdmVTdGF0ZTogZmFsc2UsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRwZWVyaWRJbmZvOiBmdW5jdGlvbihuZXdOYW1lKSB7XHJcblx0XHRcdFx0Ly8g5qC55o2u55So5oi35pWw6YeP5o6n5Yi25qC35byPXHJcblx0XHRcdFx0Y29uc3Qgb0xlbmd0aCA9IHRoaXMuaW5mby5yb2xlQ2hvaWNlcyA9PSAyID8gbmV3TmFtZS5sZW5ndGggOiAobmV3TmFtZS5sZW5ndGggKyAxKTtcclxuXHRcdFx0XHRpZiAob0xlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdHRoaXMucGVlcmlkSW5mb1N0eWxlID0gXCJ2aWRlb19sb2NhbF8xXCI7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMucGVlcmlkSW5mb1N0eWxlID0gXCJ2aWRlb19sb2NhbFwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGFzeW5jIGNyZWF0ZWQoKSB7XHJcblx0XHRcdGNvbnN0IG9JbmZvID0gYXdhaXQgVXRpbHMuZ2V0V2lkdGhIZWlnaHQoKTtcclxuXHRcdFx0dGhpcy53aW5kb3dXaWR0aCA9IG9JbmZvLndpbmRvd1dpZHRoO1xyXG5cdFx0XHR0aGlzLndpbmRvd0hlaWdodCA9IG9JbmZvLndpbmRvd0hlaWdodDtcclxuXHRcdFx0Ly8g55uR5rWL6L+c56uv55So5oi35Yqg5YWlKOWIm+W7uuWuueWZqClcclxuXHRcdFx0dW5pLiRvbihcInBlZXJpZEpvaW5DaGFubmVsXCIsIGRhdGEgPT4ge1xyXG5cdFx0XHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdFx0XHRjb25zdCBvYSA9IHRoaXMucGVlcmlkSW5mby5maWx0ZXIoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0udWlkID09IGRhdGFcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRpZiAob2EubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wZWVyaWRJbmZvLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdHVpZDogZGF0YSxcclxuXHRcdFx0XHRcdFx0XHR2aWRlb1N0YXR1czogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuJGVtaXQoXCJDYW52YXNWaWV3XCIsIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlbW90ZTogdGhpcy4kcmVmc1sncmVtb3RlJyArIGRhdGFdLFxyXG5cdFx0XHRcdFx0XHRcdFx0cGVlcmlkOiBkYXRhLFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8g55uR5rWL6L+c56uv55So5oi356a75byAKOWIoOmZpOWuueWZqClcclxuXHRcdFx0dW5pLiRvbihcIlVzZXJPZmZsaW5lXCIsIGRhdGEgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi55uR5rWL6L+c56uv55So5oi356a75byAXCIsIGRhdGEpO1xyXG5cdFx0XHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdFx0XHR0aGlzLnBlZXJpZEluZm8uc3BsaWNlKHRoaXMucGVlcmlkSW5mby5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnVpZCA9PT0gZGF0YS51aWQpLCAxKTtcclxuXHRcdFx0XHRcdC8vIOWmguaenOaOqOa1ge+8jOmcgOimgemHjeaWsOaOqOa1gVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMubGl2ZVN0YXRlKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubGl2ZVRyYW5zY29GbigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIOebkea1i+i/nOerr+eUqOaIt+inhumikeeKtuaAgVxyXG5cdFx0XHR1bmkuJG9uKFwiVmlkZW9TdGF0ZUNoYW5nZWRcIiwgZGF0YSA9PiB7XHJcblx0XHRcdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0XHRcdHRoaXMucGVlcmlkSW5mby5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtLnVpZCA9PSBkYXRhLnVpZCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOi/nOerr+eUqOaIt+WFs+mXreinhumikVxyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhLnJlYXNvbiA9PSA1ICYmIGRhdGEuc3RhdGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS52aWRlb1N0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8g6L+c56uv55So5oi35byA5ZCv6KeG6aKRXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLnN0YXRlID09IDIgJiYgZGF0YS5yZWFzb24gPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS52aWRlb1N0YXR1cyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9ucykge1xyXG5cdFx0XHRpZiAob3B0aW9ucy5pbmZvKSB7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5Yqg6L295LitLOivt+eojeWQjidcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjb25zdCBvSW5mbyA9IEpTT04ucGFyc2Uob3B0aW9ucy5pbmZvKTtcclxuXHRcdFx0XHR0aGlzLmluZm8gPSBPYmplY3QuYXNzaWduKHRoaXMuaW5mbywgb0luZm8pO1xyXG5cdFx0XHRcdC8vIOWIneWni+WMllxyXG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0aWYgKHRoaXMuaW5mby5yb2xlQ2hvaWNlcyAhPSAyKSB7XHJcblx0XHRcdFx0Ly8g5Lyg5YWl5pys5Zyw6KeG6aKR5a655ZmoXHJcblx0XHRcdFx0dW5pLiRlbWl0KFwiQ2FudmFzVmlld1wiLCB7XHJcblx0XHRcdFx0XHRsb2NhdGlvbjogdGhpcy4kcmVmcy5sb2NhdGlvblxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlRGVzdHJveSgpIHtcclxuXHRcdFx0Ly8g56e76ZmkQXBw57qn5Yir55qE5omA5pyJ5LqL5Lu255uR5ZCs5ZmoXHJcblx0XHRcdHVuaS4kb2ZmKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDmjqjmtYEo5Zyo55u05pKt5Zy65pmv5LiLKVxyXG5cdFx0XHRwdWxsRm4oKSB7XHJcblx0XHRcdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHRcdHVuaS5zaG93QWN0aW9uU2hlZXQoe1xyXG5cdFx0XHRcdFx0aXRlbUxpc3Q6IFsn5o6o5rWBJywgJ+WBnOatouaOqOa1gSddLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdC8vIOaOqOa1gVxyXG5cdFx0XHRcdFx0XHRpZiAoKHJlcy50YXBJbmRleCArIDEpID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5saXZlU2hvdyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMucmVtb3ZlUHVibGlzaFN0cmVhbVVybCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfpgInkuK3kuobnrKwnICsgKHJlcy50YXBJbmRleCArIDEpICsgJ+S4quaMiemSricpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YGc5q2i5peB6Lev5o6o5rWBXHJcblx0XHRcdHJlbW92ZVB1Ymxpc2hTdHJlYW1VcmwoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubGl2ZVN0YXRlKSB7XHJcblx0XHRcdFx0XHR0aGlzLmxpdmVTdGF0ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0UlRDLnJlbW92ZVB1Ymxpc2hTdHJlYW1VcmwodGhpcy5pbmZvLmxpdmVVcmwpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+35YWI5o6o5rWBXCIsXHJcblx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOa3u+WKoOaXgei3r+aOqOa1gVxyXG5cdFx0XHRsaXZlVHJhbnNjb0ZuKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmluZm8ubGl2ZVVybCkge1xyXG5cdFx0XHRcdFx0dGhpcy5saXZlU2hvdyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5saXZlU3RhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0UlRDLkxpdmVUcmFuc2NvKHRoaXMuaW5mby5saXZlVXJsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+i+k+WFpeaOqOa1geWcsOWdgFwiLFxyXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmjILmlq1cclxuXHRcdFx0YXN5bmMgY2xvc2VGbigpIHtcclxuXHRcdFx0XHQvLyDplIDmr4Hlrp7kvotcclxuXHRcdFx0XHRhd2FpdCBSVEMuZGVzdHJveVJ0YygpO1xyXG5cdFx0XHRcdC8vIOi/lOWbnummlumhtVxyXG5cdFx0XHRcdHVuaS5yZWRpcmVjdFRvKHtcclxuXHRcdFx0XHRcdHVybDogJ2luZGV4J1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDop4bpopHlvIDlhbNcclxuXHRcdFx0dmlkZW9GbigpIHtcclxuXHRcdFx0XHR0aGlzLnZpZGVvID0gIXRoaXMudmlkZW87XHJcblx0XHRcdFx0UlRDLmVuYWJsZUxvY2FsVmlkZW8odGhpcy52aWRlbyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaRhOWDj+WktOWJjeWQjlxyXG5cdFx0XHRjYW1lcmFGbigpIHtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYSA9ICF0aGlzLmNhbWVyYTtcclxuXHRcdFx0XHRSVEMuc3dpdGNoQ2FtZXJhKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmfs+mikeW8gOWFs1xyXG5cdFx0XHRhdWRpb0ZuKCkge1xyXG5cdFx0XHRcdHRoaXMuYXVkaW8gPSAhdGhpcy5hdWRpbztcclxuXHRcdFx0XHRSVEMuZW5hYmxlTG9jYWxBdWRpbyh0aGlzLmF1ZGlvKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YWN5o+QXHJcblx0XHRcdHNwZWFrZXJwaG9uZUZuKCkge1xyXG5cdFx0XHRcdHRoaXMuU3BlYWtlcnBob25lID0gIXRoaXMuU3BlYWtlcnBob25lO1xyXG5cdFx0XHRcdFJUQy5zZXRFbmFibGVTcGVha2VycGhvbmUodGhpcy5TcGVha2VycGhvbmUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBpbml0KCkge1xyXG5cdFx0XHRcdC8vIOWIneWni+WMliBSVEMg5a6e5L6LXHJcblx0XHRcdFx0YXdhaXQgUlRDLmluaXQodGhpcy5pbmZvKTtcclxuXHRcdFx0XHQvLyDpopHpgZPlnLrmma/ku6Xlj4rpopHpgZPop5LoibIo6buY6K6k6YCa5L+h5Zy65pmvKVxyXG5cdFx0XHRcdGlmICh0aGlzLmluZm8uc2NlbmFyaW8gPT0gMSkge1xyXG5cdFx0XHRcdFx0Ly8g55u05pKt5Zy65pmv5LiL6K6+572u6aKR6YGT6KeS6ImyXHJcblx0XHRcdFx0XHRjb25zdCBvUm9sZSA9IGF3YWl0IFJUQy5zZXRDaGFubmVsUHJvZmlsZSgpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+ebtOaSreWcuuaZr+S4i+iuvue9rumikemBk+inkuiJsicsIG9Sb2xlID09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5ZCv55So6KeG6aKR5qih5Z2XXHJcblx0XHRcdFx0YXdhaXQgUlRDLmVuYWJsZVZpZGVvKCk7XHJcblx0XHRcdFx0Ly8g6KeS6Imy5Li66KeC5LyX5pe2IOWBnOatouacrOWcsOinhumikemHh+mbhlxyXG5cdFx0XHRcdGlmICh0aGlzLmluZm8ucm9sZUNob2ljZXMgPT0gMikge1xyXG5cdFx0XHRcdFx0YXdhaXQgUlRDLmVuYWJsZUxvY2FsVmlkZW8oZmFsc2UpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOWKoOWFpemikemBk1xyXG5cdFx0XHRcdGF3YWl0IFJUQy5qb2luQ2hhbm5lbCgpO1xyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnpoHmraLnqb/pgI9cclxuXHRcdFx0cGVuZXRyYXRlRm4oZSkge1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzJGMzA0MTtcclxuXHR9XHJcblxyXG5cdC50ZXh0IHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHR9XHJcblxyXG5cdC8qIOaPkOekuiAqL1xyXG5cdC5oaW50IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubG9jYXRpb24tbm9uZSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQvKiDnlKjmiLfmoIfor4YgKi9cclxuXHQudXNlci1oaW50IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkYzMDQxO1xyXG5cdFx0b3BhY2l0eTogMC41O1xyXG5cdFx0cGFkZGluZzogNHB4IDEwcHg7XHJcblx0fVxyXG4gICAgXHJcblx0LmhpbnQtdGV4dCB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cdFxyXG5cdC5DYW52YXNWaWV3IHtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRwYWRkaW5nOiA2MHB4IDAgMDtcclxuXHR9XHJcblxyXG5cdC8qIDHkuKrop4bpopEgKi9cclxuXHQudmlkZW9fbG9jYWwge1xyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblxyXG5cdC8qIDTkuKrop4bpopEgKi9cclxuXHQudmlkZW9fbG9jYWxfMSB7XHJcblx0XHR3aWR0aDogMzc1cnB4O1xyXG5cdFx0aGVpZ2h0OiA0MjBycHg7XHJcblx0fVxyXG5cclxuXHQvKiDnm7jlhbPmk43kvZwgKi9cclxuXHQub3B0aW9ucyB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRib3R0b206IDIwcHg7XHJcblx0XHRwYWRkaW5nOiAwIDIwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQuaWNvbiB7XHJcblx0XHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGOyAqL1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Lmljb25faW1nIHtcclxuXHRcdHdpZHRoOiA2MHB4O1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdH1cclxuXHJcblx0Lmljb25fdGV4dCB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdG1hcmdpbjogMTBweDtcclxuXHR9XHJcblxyXG5cdC8qIOaXgei3r+aOqOa1gSAqL1xyXG5cdC5saXZlIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubGl2ZS1pbnB1dCB7XHJcblx0XHRoZWlnaHQ6IDExMHJweDtcclxuXHRcdHBhZGRpbmc6IDAgMjZweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyRjMwNDE7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubGl2ZS1vcHRpb25zIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nOiAwIDIwcHg7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 11);

/***/ }),
/* 11 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 12 */
/*!******************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/utils/rtc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 10));\nvar _classes = __webpack_require__(/*! ./classes.js */ 27);\n\n\n\n\n\n\nvar _code = _interopRequireDefault(__webpack_require__(/*! ./code.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} // rtc 音视频引入\nvar rtcModule = __webpack_provided_uni_dot_requireNativePlugin('AR-RtcModule'); // 错误码\n// 本地暂存\nvar Store = { // 本地视频容器\n  location: null,\n  // 远端食品容器（多人）\n  remoteLits: [] };\n\n\n// rtc 实时音频通话\nvar RTC = {\n  // 初始化\n  init: function () {var _init = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(info) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n              Store = Object.assign(Store, info);\n              // 初始化回调 \n              _context.next = 3;return rtcModule.setCallBack(function (res) {\n                RTC.callBack(res);\n              });case 3:_context.next = 5;return (\n\n                rtcModule.create({\n                  \"appId\": Store.appid },\n                function (res) {\n                  __f__(\"log\", '初始化实例 rtc', res, \" at utils/rtc.js:31\");\n                }));case 5:_context.next = 7;return (\n\n                rtcModule.setParameters({\n                  Cmd: 'SetAudioAiNoise',\n                  Enable: 1 },\n                function (res) {\n                  __f__(\"log\", '私人定制', res, \" at utils/rtc.js:38\");\n                }));case 7:case \"end\":return _context.stop();}}}, _callee);}));function init(_x) {return _init.apply(this, arguments);}return init;}(),\n\n  // 相关回调(仅列举常用回调)\n  callBack: function callBack(res) {\n    switch (res.engineEvent) {\n      // 发生警告回调\n      case \"onWarning\":\n        uni.showToast({\n          title: _code.default.warning[res.warningCode] || \"未知警告\",\n          icon: 'none',\n          duration: 2000 });\n\n        break;\n      // 发生错误回调\n      case \"onError\":\n        uni.showToast({\n          title: _code.default.errore[res.errorCode] || \"未知错误\",\n          icon: 'none',\n          duration: 2000 });\n\n        break;\n      // 加入频道成功回调\n      case \"onJoinChannelSuccess\":\n        // 角色为观众时 停止本地视频渲染\n        if (Store.roleChoices != 2) {\n          // 本地渲染\n          RTC.localVideo({\n            \"channel\": Store.channelId + '',\n            \"uid\": Store.uid + '' });\n\n        }\n        break;\n      // 远端用户加入当前频道回调\n      case \"onUserJoined\":\n        uni.showToast({\n          title: '用户' + res.uid + '加入频道',\n          icon: 'none',\n          duration: 2000 });\n\n\n        break;\n      // 远端用户离开当前频道回调\n      case \"onUserOffline\":\n        uni.showToast({\n          title: '远端用户' + res.uid + '离开频道',\n          icon: 'none',\n          duration: 2000 });\n\n        uni.$emit(\"UserOffline\", res);\n        // 清除对应的本地存放\n        Store.remoteLits.splice(Store.remoteLits.findIndex(function (item) {return item.peerid == res.uid;}), 1);\n        break;\n      // 已显示远端视频首帧回调\n      case \"onFirstRemoteVideoDecoded\":\n        __f__(\"log\", \"已显示远端视频首帧回调\", res, \" at utils/rtc.js:93\");\n        uni.$emit(\"peeridJoinChannel\", res.uid);\n        break;\n      // 远端用户视频状态发生已变化回调(当频道内的用户超过 17 时，该回调可能不准确)\n      case \"onRemoteVideoStateChanged\":\n        __f__(\"log\", \"远端用户视频状态发生已变化回调\", res, \" at utils/rtc.js:98\");\n        uni.$emit(\"VideoStateChanged\", res);\n        break;\n      // 旁路推流状态\n      case \"onRtmpStreamingStateChanged\":\n        uni.showToast({\n          title: _code.default.live.state[res.state] + _code.default.live.error[res.errorCode],\n          icon: 'none',\n          duration: 2000 });\n\n        __f__(\"log\", \"旁路推流状态\", res, \" at utils/rtc.js:108\");\n        break;\n      // \t// 网络连接状态已改变回调\n      // case \"onConnectionStateChanged\":\n      // \tbreak;\n      // \t// 已显示远端视频首帧回调\n      // case \"onFirstRemoteVideoFrame\":\n      // \tbreak;\n      // \t// 本地网络类型发生改变回调\n      // case \"onNetworkTypeChanged\":\n      // \tbreak;\n      // \t// 网络连接中断\n      // case \"onConnectionLost\":\n      // \tbreak;\n      // \t// 远端音频状态发生改变回调\n      // case \"onRemoteAudioStateChanged\":\n      // \tbreak;\n      // \t// 本地音频状态发生改变回调\n      // case \"onLocalAudioStateChanged\":\n      // \tbreak;\n      // \t// 本地视频状态发生改变回调\n      // case \"onLocalVideoStateChanged\":\n      // \tbreak;\n      // \t// 重新加入频道回调\n      // case \"onRejoinChannelSuccess\":\n      // \tbreak;\n      // \t// 离开频道回调\n      // case \"onLeaveChannel\":\n      // \tbreak;\n      // 已发送本地音频首帧回调\n      // case \"onFirstLocalAudioFrame\":\n      // \tbreak;\n      // \t// 已显示本地视频首帧回调\n      // case \"onFirstLocalVideoFrame\":\n      // \tbreak;\n      // \t// Token 服务即将过期回调\n      // case \"onTokenPrivilegeWillExpire\":\n      // \tbreak;\n      // \t// Token 过期回调\n      // case \"onRequestToken\":\n      // \tbreak;\n      // \t// 用户角色已切换回调(直播场景下)\n      // case \"onClientRoleChanged\":\n      // \tbreak;\n      // \t// 本地或远端视频大小或旋转信息发生改变回调\n      // case \"onVideoSizeChanged\":\n      // \tbreak;\n      // \t// 通话中远端音频流的统计信息回调\n      // case \"onRemoteAudioStats\":\n      // \tbreak;\n      // \t// 当前通话统计回调。 该回调在通话中每两秒触发一次\n      // case \"onRtcStats\":\n      // \tbreak;\n      // \t// 通话中每个用户的网络上下行 last mile 质量报告回调\n      // case \"onNetworkQuality\":\n      // \tbreak;\n      // \t// 通话中本地视频流的统计信息回调\n      // case \"onLocalVideoStats\":\n      // \tbreak;\n      // \t// 通话中本地音频流的统计信息回调\n      // case \"onLocalAudioStats\":\n      // \tbreak;\n      // \t// 通话中远端视频流的统计信息回调\n      // case \"onRemoteVideoStats\":\n      // \tbreak;\n    }\n  },\n  // 设置频道场景以及频道角色\n  setChannelProfile: function () {var _setChannelProfile = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n                new Promise(function (resolve, reject) {\n                  __f__(\"log\", \"设置频道场景以及频道角色\", Store, \" at utils/rtc.js:178\");\n                  // 设置频道场景\n                  rtcModule.setChannelProfile({\n                    \"profile\": Number(Store.scenario) },\n                  function (res) {\n                    if (res.code == 0) {\n                      // 设置频道角色\n                      rtcModule.setClientRole({\n                        \"role\": Number(Store.roleChoices) },\n                      function (res) {\n                        resolve(res.code);\n                      });\n                    }\n                  });\n                }));case 2:return _context2.abrupt(\"return\", _context2.sent);case 3:case \"end\":return _context2.stop();}}}, _callee2);}));function setChannelProfile() {return _setChannelProfile.apply(this, arguments);}return setChannelProfile;}(),\n\n\n  // 启用视频（加入房间后自动发布）\n  enableVideo: function () {var _enableVideo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                rtcModule.enableVideo(function (res) {\n                  __f__(\"log\", 'RTC 启用视频 enableVideo 方法调用', (res.code === 0 ? '成功' : '失败：') +\n                  res, \" at utils/rtc.js:213\");\n                }));case 2:case \"end\":return _context3.stop();}}}, _callee3);}));function enableVideo() {return _enableVideo.apply(this, arguments);}return enableVideo;}(),\n\n  // 加入频道\n  joinChannel: function () {var _joinChannel = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (\n\n                RTC.setEnableSpeakerphone(true));case 2:_context4.next = 4;return (\n\n                rtcModule.joinChannel({\n                  \"token\": Store.token,\n                  \"channelId\": Store.channel,\n                  \"uid\": Store.uid },\n                function (res) {\n                  __f__(\"log\", 'RTC joinChannel 方法调用', (res.code === 0 ? '成功' : '失败：') + res, \" at utils/rtc.js:227\");\n                }));case 4:case \"end\":return _context4.stop();}}}, _callee4);}));function joinChannel() {return _joinChannel.apply(this, arguments);}return joinChannel;}(),\n\n  // 音频是否免提\n  setEnableSpeakerphone: function setEnableSpeakerphone(fase) {\n    // 默认扬声器播放\n    rtcModule.setEnableSpeakerphone({\n      \"enabled\": fase },\n    function (res) {\n      __f__(\"log\", 'RTC 远端加入房间后设置' + (fase ? '开启' : '关闭') + '扬声器播放', res.code === 0 ? '成功' :\n      '失败：' +\n      res, \" at utils/rtc.js:236\");\n    });\n  },\n  // 音频是否关闭\n  enableLocalAudio: function enableLocalAudio(checked) {\n    rtcModule.enableLocalAudio({\n      \"enabled\": checked },\n    function (res) {\n      __f__(\"log\", 'RTC 音频' + (checked ? '开启' : '关闭'), (res.code === 0 ? '成功' : '失败：') + res, \" at utils/rtc.js:246\");\n    });\n  },\n  // 本地视频是否采集\n  enableLocalVideo: function enableLocalVideo(checked) {\n    rtcModule.enableLocalVideo({\n      \"enabled\": checked },\n    function (res) {\n      __f__(\"log\", 'RTC 视频' + (checked ? '开启' : '关闭'), (res.code === 0 ? '成功' : '失败：') + res, \" at utils/rtc.js:254\");\n    });\n  },\n  // 摄像头（前后）\n  switchCamera: function switchCamera() {\n    rtcModule.switchCamera(function (res) {\n      __f__(\"log\", 'RTC 摄像头前后 switchCamera 方法调用', res.code === 0 ? '成功' : '失败：' +\n      res, \" at utils/rtc.js:260\");\n    });\n  },\n  // 转语音\n  toSpeech: function toSpeech() {\n    // 关闭视频模块\n    rtcModule.disableVideo(function (res) {\n      __f__(\"log\", 'RTC 关闭视频模块 disableVideo 方法调用', res.code === 0 ? '成功' : '失败：' +\n      res, \" at utils/rtc.js:268\");\n    });\n  },\n  // 本地启用视频后\n  localVideo: function () {var _localVideo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n              __f__(\"log\", \"本地启用视频后\", Store, \" at utils/rtc.js:274\");\n              // // 渲染视频\n              _context5.next = 3;return Store.location.setupLocalVideo({\n                \"renderMode\": 1,\n                \"channelId\": Store.channel,\n                \"uid\": Store.uid,\n                \"mirrorMode\": 0 },\n              function (res) {\n                __f__(\"log\", '渲染视频', res, \" at utils/rtc.js:282\");\n              });case 3:_context5.next = 5;return (\n\n                Store.location.startPreview(function (res) {\n                  __f__(\"log\", '本地预览', res, \" at utils/rtc.js:286\");\n                }));case 5:case \"end\":return _context5.stop();}}}, _callee5);}));function localVideo() {return _localVideo.apply(this, arguments);}return localVideo;}(),\n\n  // 远端加入房间后进行 (多人)\n  remotenableVideo: function remotenableVideo(data) {\n    __f__(\"log\", \"远端加入房间后进行\", Store.remoteLits, \" at utils/rtc.js:291\");\n    __f__(\"log\", \"远端加入房间后进行\", data, \" at utils/rtc.js:292\");\n    Store.remoteLits.map( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(item) {return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:if (!(\n                item.peerid == data.uid)) {_context6.next = 6;break;}\n                __f__(\"log\", \"频道\", Store.channel, \" at utils/rtc.js:295\");_context6.next = 4;return (\n                  item.remote[0].setupRemoteVideo({\n                    \"uid\": item.peerid,\n                    \"channelId\": Store.channel,\n                    \"renderMode\": 0,\n                    \"mirrorMode\": 0 },\n                  function (res) {\n                    __f__(\"log\", '渲染远端视频', res, \" at utils/rtc.js:302\");\n                  }));case 4:_context6.next = 6;return (\n\n                  item.remote[0].startPreview(function (res) {\n                    __f__(\"log\", '远端本地预览', res, \" at utils/rtc.js:306\");\n                  }));case 6:case \"end\":return _context6.stop();}}}, _callee6);}));return function (_x2) {return _ref.apply(this, arguments);};}());\n\n\n  },\n  /**\r\n      * 如果你只在一个页面写 可以直接调 destory \r\n     \t如果你是用的单例 离开页面引擎不销毁 就用 leaveChannel\r\n      */\n  // 挂断\n  leave: function leave() {\n    // 离开频道\n    rtcModule.leaveChannel(function (res) {\n      __f__(\"log\", \"调用离开频道 leaveChannel\", res, \" at utils/rtc.js:319\");\n    });\n  },\n  // 销毁实例\n  destroyRtc: function destroyRtc() {\n    // 销毁实例\n    rtcModule.destroyRtc(function (res) {\n      __f__(\"log\", \"销毁实例\", res, \" at utils/rtc.js:326\");\n      // if (res.code === 0) {\n      // \tRTCUtils.destroyRtc();\n      // }\n    });\n  },\n  /**\r\n      * 旁路推流 \r\n      */\n  LiveTransco: function () {var _LiveTransco = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(urlLive) {var Enabled,oAlls,_args7 = arguments;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:Enabled = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : true;\n              // 默认当前频道所有成员推流\n              // 获取所有成员视频样式\n              oAlls = [];\n              __f__(\"log\", Store, \" at utils/rtc.js:339\");\n              // 角色非观众\n              if (Store.roleChoices != 2) {\n                // 添加本地成员\n                oAlls.push(new _classes.TranscodingUser(Store.uid, {\n                  width: 280,\n                  height: 210,\n                  x: 0,\n                  y: 0 }));\n\n              }\n              // 添加远端成员\n              Store.remoteLits.map(function (item, index) {\n                var oIndex = oAlls.length > 0 ? index + 1 : index;\n                oAlls.push(new _classes.TranscodingUser(item.peerid, {\n                  width: 280,\n                  height: 210,\n                  x: oIndex % 3 * 280,\n                  y: Math.floor(oIndex / 3) * 210 }));\n\n              });\n              __f__(\"log\", oAlls, \" at utils/rtc.js:360\");\n              // 设置旁路推流的视频样式(三列)\n              _context7.next = 8;return rtcModule.setLiveTranscoding({\n                \"transcoding\": new _classes.LiveTranscoding(oAlls, {\n                  width: 840,\n                  height: Math.ceil(oAlls.length / 3) * 210 }) },\n\n              function (ret) {\n                __f__(\"log\", ret, \" at utils/rtc.js:368\");\n              });case 8:_context7.next = 10;return (\n\n                rtcModule.addPublishStreamUrl({\n                  url: urlLive,\n                  transcodingEnabled: Enabled },\n                function (res) {\n                  __f__(\"log\", \"添加旁路推流\", res, \" at utils/rtc.js:375\");\n                }));case 10:case \"end\":return _context7.stop();}}}, _callee7);}));function LiveTransco(_x3) {return _LiveTransco.apply(this, arguments);}return LiveTransco;}(),\n\n  // 取消推流\n  removePublishStreamUrl: function removePublishStreamUrl(urlLive) {\n    // 添加旁路推流\n    rtcModule.removePublishStreamUrl({\n      url: urlLive },\n    function (res) {\n      __f__(\"log\", \"取消旁路推流\", res, \" at utils/rtc.js:384\");\n    });\n  } };\n\n\n// 监测视频容器\nuni.$on(\"CanvasView\", function (data) {\n  // 本地视频容器\n  if (data.location) {\n    Store = Object.assign(Store, {\n      location: data.location });\n\n    // 远端视频容器\n  } else if (data.peerid && data.remote) {\n    var oa = Store.remoteLits.filter(function (item) {\n      return item.peerid == data.peerid;\n    });\n    if (oa.length == 0) {\n      Store.remoteLits.push(data);\n      setTimeout(function () {\n        RTC.remotenableVideo({\n          uid: data.peerid });\n\n      }, 500);\n    }\n  }\n});var _default =\n\nRTC;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 13)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvcnRjLmpzIl0sIm5hbWVzIjpbInJ0Y01vZHVsZSIsInVuaSIsIlN0b3JlIiwibG9jYXRpb24iLCJyZW1vdGVMaXRzIiwiUlRDIiwiaW5pdCIsImluZm8iLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRDYWxsQmFjayIsInJlcyIsImNhbGxCYWNrIiwiY3JlYXRlIiwiYXBwaWQiLCJzZXRQYXJhbWV0ZXJzIiwiQ21kIiwiRW5hYmxlIiwiZW5naW5lRXZlbnQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsIkNvZGUiLCJ3YXJuaW5nIiwid2FybmluZ0NvZGUiLCJpY29uIiwiZHVyYXRpb24iLCJlcnJvcmUiLCJlcnJvckNvZGUiLCJyb2xlQ2hvaWNlcyIsImxvY2FsVmlkZW8iLCJjaGFubmVsSWQiLCJ1aWQiLCIkZW1pdCIsInNwbGljZSIsImZpbmRJbmRleCIsIml0ZW0iLCJwZWVyaWQiLCJsaXZlIiwic3RhdGUiLCJlcnJvciIsInNldENoYW5uZWxQcm9maWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJOdW1iZXIiLCJzY2VuYXJpbyIsImNvZGUiLCJzZXRDbGllbnRSb2xlIiwiZW5hYmxlVmlkZW8iLCJqb2luQ2hhbm5lbCIsInNldEVuYWJsZVNwZWFrZXJwaG9uZSIsInRva2VuIiwiY2hhbm5lbCIsImZhc2UiLCJlbmFibGVMb2NhbEF1ZGlvIiwiY2hlY2tlZCIsImVuYWJsZUxvY2FsVmlkZW8iLCJzd2l0Y2hDYW1lcmEiLCJ0b1NwZWVjaCIsImRpc2FibGVWaWRlbyIsInNldHVwTG9jYWxWaWRlbyIsInN0YXJ0UHJldmlldyIsInJlbW90ZW5hYmxlVmlkZW8iLCJkYXRhIiwibWFwIiwicmVtb3RlIiwic2V0dXBSZW1vdGVWaWRlbyIsImxlYXZlIiwibGVhdmVDaGFubmVsIiwiZGVzdHJveVJ0YyIsIkxpdmVUcmFuc2NvIiwidXJsTGl2ZSIsIkVuYWJsZWQiLCJvQWxscyIsInB1c2giLCJUcmFuc2NvZGluZ1VzZXIiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwiaW5kZXgiLCJvSW5kZXgiLCJsZW5ndGgiLCJNYXRoIiwiZmxvb3IiLCJzZXRMaXZlVHJhbnNjb2RpbmciLCJMaXZlVHJhbnNjb2RpbmciLCJjZWlsIiwicmV0IiwiYWRkUHVibGlzaFN0cmVhbVVybCIsInVybCIsInRyYW5zY29kaW5nRW5hYmxlZCIsInJlbW92ZVB1Ymxpc2hTdHJlYW1VcmwiLCIkb24iLCJvYSIsImZpbHRlciIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7OztBQU9BLDZFLGd0QkFIQTtBQUNBLElBQU1BLFNBQVMsR0FBR0MsOENBQUEsQ0FBd0IsY0FBeEIsQ0FBbEIsQyxDQUNBO0FBRUE7QUFDQSxJQUFJQyxLQUFLLEdBQUcsRUFDWDtBQUNBQyxVQUFRLEVBQUUsSUFGQztBQUdYO0FBQ0FDLFlBQVUsRUFBRSxFQUpELEVBQVo7OztBQU9BO0FBQ0EsSUFBTUMsR0FBRyxHQUFHO0FBQ1g7QUFDQUMsTUFBSSxxRkFBRSxpQkFBZUMsSUFBZjtBQUNMTCxtQkFBSyxHQUFHTSxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsS0FBZCxFQUFxQkssSUFBckIsQ0FBUjtBQUNBO0FBRkssdUNBR0NQLFNBQVMsQ0FBQ1UsV0FBVixDQUFzQixVQUFBQyxHQUFHLEVBQUk7QUFDbENOLG1CQUFHLENBQUNPLFFBQUosQ0FBYUQsR0FBYjtBQUNBLGVBRkssQ0FIRDs7QUFPQ1gseUJBQVMsQ0FBQ2EsTUFBVixDQUFpQjtBQUN0QiwyQkFBU1gsS0FBSyxDQUFDWSxLQURPLEVBQWpCO0FBRUgsMEJBQUFILEdBQUcsRUFBSTtBQUNULCtCQUFZLFdBQVosRUFBeUJBLEdBQXpCO0FBQ0EsaUJBSkssQ0FQRDs7QUFhQ1gseUJBQVMsQ0FBQ2UsYUFBVixDQUF3QjtBQUM3QkMscUJBQUcsRUFBRSxpQkFEd0I7QUFFN0JDLHdCQUFNLEVBQUUsQ0FGcUIsRUFBeEI7QUFHSCwwQkFBQ04sR0FBRCxFQUFTO0FBQ1gsK0JBQVksTUFBWixFQUFvQkEsR0FBcEI7QUFD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QztBQUN0QyxRQUFNNkIsRUFBRSxHQUFHNUYsS0FBSyxDQUFDRSxVQUFOLENBQWlCMkYsTUFBakIsQ0FBd0IsVUFBQTVELElBQUksRUFBSTtBQUMxQyxhQUFPQSxJQUFJLENBQUNDLE1BQUwsSUFBZTJCLElBQUksQ0FBQzNCLE1BQTNCO0FBQ0EsS0FGVSxDQUFYO0FBR0EsUUFBSTBELEVBQUUsQ0FBQ1osTUFBSCxJQUFhLENBQWpCLEVBQW9CO0FBQ25CaEYsV0FBSyxDQUFDRSxVQUFOLENBQWlCc0UsSUFBakIsQ0FBc0JYLElBQXRCO0FBQ0FpQyxnQkFBVSxDQUFDLFlBQU07QUFDaEIzRixXQUFHLENBQUN5RCxnQkFBSixDQUFxQjtBQUNwQi9CLGFBQUcsRUFBRWdDLElBQUksQ0FBQzNCLE1BRFUsRUFBckI7O0FBR0EsT0FKUyxFQUlQLEdBSk8sQ0FBVjtBQUtBO0FBQ0Q7QUFDRCxDQXBCRCxFOztBQXNCZS9CLEciLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDml4Hot6/mjqjmtYFcclxuaW1wb3J0IHtcclxuXHRMaXZlVHJhbnNjb2RpbmcsXHJcblx0VHJhbnNjb2RpbmdVc2VyXHJcbn0gZnJvbSBcIi4vY2xhc3Nlcy5qc1wiXHJcbi8vIHJ0YyDpn7Pop4bpopHlvJXlhaVcclxuY29uc3QgcnRjTW9kdWxlID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oJ0FSLVJ0Y01vZHVsZScpO1xyXG4vLyDplJnor6/noIFcclxuaW1wb3J0IENvZGUgZnJvbSBcIi4vY29kZS5qc1wiO1xyXG4vLyDmnKzlnLDmmoLlrZhcclxubGV0IFN0b3JlID0ge1xyXG5cdC8vIOacrOWcsOinhumikeWuueWZqFxyXG5cdGxvY2F0aW9uOiBudWxsLFxyXG5cdC8vIOi/nOerr+mjn+WTgeWuueWZqO+8iOWkmuS6uu+8iVxyXG5cdHJlbW90ZUxpdHM6IFtdXHJcbn07XHJcblxyXG4vLyBydGMg5a6e5pe26Z+z6aKR6YCa6K+dXHJcbmNvbnN0IFJUQyA9IHtcclxuXHQvLyDliJ3lp4vljJZcclxuXHRpbml0OiBhc3luYyBmdW5jdGlvbihpbmZvKSB7XHJcblx0XHRTdG9yZSA9IE9iamVjdC5hc3NpZ24oU3RvcmUsIGluZm8pO1xyXG5cdFx0Ly8g5Yid5aeL5YyW5Zue6LCDIFxyXG5cdFx0YXdhaXQgcnRjTW9kdWxlLnNldENhbGxCYWNrKHJlcyA9PiB7XHJcblx0XHRcdFJUQy5jYWxsQmFjayhyZXMpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyDliJ3lp4vljJblrp7kvosgUlRDX0FQUElEXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuY3JlYXRlKHtcclxuXHRcdFx0XCJhcHBJZFwiOiBTdG9yZS5hcHBpZFxyXG5cdFx0fSwgcmVzID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+WIneWni+WMluWunuS+iyBydGMnLCByZXMpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyDnp4HkurrlrprliLYgKOacrOmhueebruWumuWItu+8muaZuuiDvemZjeWZqiApXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuc2V0UGFyYW1ldGVycyh7XHJcblx0XHRcdENtZDogJ1NldEF1ZGlvQWlOb2lzZScsXHJcblx0XHRcdEVuYWJsZTogMVxyXG5cdFx0fSwgKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn56eB5Lq65a6a5Yi2JywgcmVzKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8g55u45YWz5Zue6LCDKOS7heWIl+S4vuW4uOeUqOWbnuiwgylcclxuXHRjYWxsQmFjazogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRzd2l0Y2ggKHJlcy5lbmdpbmVFdmVudCkge1xyXG5cdFx0XHQvLyDlj5HnlJ/orablkYrlm57osINcclxuXHRcdFx0Y2FzZSBcIm9uV2FybmluZ1wiOlxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IENvZGUud2FybmluZ1tyZXMud2FybmluZ0NvZGVdIHx8IFwi5pyq55+l6K2m5ZGKXCIsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOWPkeeUn+mUmeivr+Wbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25FcnJvclwiOlxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IENvZGUuZXJyb3JlW3Jlcy5lcnJvckNvZGVdIHx8IFwi5pyq55+l6ZSZ6K+vXCIsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOWKoOWFpemikemBk+aIkOWKn+Wbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25Kb2luQ2hhbm5lbFN1Y2Nlc3NcIjpcclxuXHRcdFx0XHQvLyDop5LoibLkuLrop4LkvJfml7Yg5YGc5q2i5pys5Zyw6KeG6aKR5riy5p+TXHJcblx0XHRcdFx0aWYgKFN0b3JlLnJvbGVDaG9pY2VzICE9IDIpIHtcclxuXHRcdFx0XHRcdC8vIOacrOWcsOa4suafk1xyXG5cdFx0XHRcdFx0UlRDLmxvY2FsVmlkZW8oe1xyXG5cdFx0XHRcdFx0XHRcImNoYW5uZWxcIjogU3RvcmUuY2hhbm5lbElkICsgJycsXHJcblx0XHRcdFx0XHRcdFwidWlkXCI6IFN0b3JlLnVpZCArICcnLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/nOerr+eUqOaIt+WKoOWFpeW9k+WJjemikemBk+Wbnuiwg1xyXG5cdFx0XHRjYXNlIFwib25Vc2VySm9pbmVkXCI6XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+eUqOaItycgKyByZXMudWlkICsgJ+WKoOWFpemikemBkycsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDov5znq6/nlKjmiLfnprvlvIDlvZPliY3popHpgZPlm57osINcclxuXHRcdFx0Y2FzZSBcIm9uVXNlck9mZmxpbmVcIjpcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn6L+c56uv55So5oi3JyArIHJlcy51aWQgKyAn56a75byA6aKR6YGTJyxcclxuXHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dW5pLiRlbWl0KFwiVXNlck9mZmxpbmVcIiwgcmVzKTtcclxuXHRcdFx0XHQvLyDmuIXpmaTlr7nlupTnmoTmnKzlnLDlrZjmlL5cclxuXHRcdFx0XHRTdG9yZS5yZW1vdGVMaXRzLnNwbGljZShTdG9yZS5yZW1vdGVMaXRzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ucGVlcmlkID09IHJlcy51aWQpLCAxKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHQvLyDlt7LmmL7npLrov5znq6/op4bpopHpppbluKflm57osINcclxuXHRcdFx0Y2FzZSBcIm9uRmlyc3RSZW1vdGVWaWRlb0RlY29kZWRcIjpcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuW3suaYvuekuui/nOerr+inhumikemmluW4p+Wbnuiwg1wiLCByZXMpO1xyXG5cdFx0XHRcdHVuaS4kZW1pdChcInBlZXJpZEpvaW5DaGFubmVsXCIsIHJlcy51aWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOi/nOerr+eUqOaIt+inhumikeeKtuaAgeWPkeeUn+W3suWPmOWMluWbnuiwgyjlvZPpopHpgZPlhoXnmoTnlKjmiLfotoXov4cgMTcg5pe277yM6K+l5Zue6LCD5Y+v6IO95LiN5YeG56GuKVxyXG5cdFx0XHRjYXNlIFwib25SZW1vdGVWaWRlb1N0YXRlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi6L+c56uv55So5oi36KeG6aKR54q25oCB5Y+R55Sf5bey5Y+Y5YyW5Zue6LCDXCIsIHJlcyk7XHJcblx0XHRcdFx0dW5pLiRlbWl0KFwiVmlkZW9TdGF0ZUNoYW5nZWRcIixyZXMpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIOaXgei3r+aOqOa1geeKtuaAgVxyXG5cdFx0XHRjYXNlIFwib25SdG1wU3RyZWFtaW5nU3RhdGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogQ29kZS5saXZlLnN0YXRlW3Jlcy5zdGF0ZV0gKyBDb2RlLmxpdmUuZXJyb3JbcmVzLmVycm9yQ29kZV0sXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi5peB6Lev5o6o5rWB54q25oCBXCIsIHJlcyk7XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHQvLyBcdC8vIOe9kee7nOi/nuaOpeeKtuaAgeW3suaUueWPmOWbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkNvbm5lY3Rpb25TdGF0ZUNoYW5nZWRcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5bey5pi+56S66L+c56uv6KeG6aKR6aaW5bin5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uRmlyc3RSZW1vdGVWaWRlb0ZyYW1lXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOacrOWcsOe9kee7nOexu+Wei+WPkeeUn+aUueWPmOWbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbk5ldHdvcmtUeXBlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDnvZHnu5zov57mjqXkuK3mlq1cclxuXHRcdFx0XHQvLyBjYXNlIFwib25Db25uZWN0aW9uTG9zdFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDov5znq6/pn7PpopHnirbmgIHlj5HnlJ/mlLnlj5jlm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25SZW1vdGVBdWRpb1N0YXRlQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDmnKzlnLDpn7PpopHnirbmgIHlj5HnlJ/mlLnlj5jlm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25Mb2NhbEF1ZGlvU3RhdGVDaGFuZ2VkXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOacrOWcsOinhumikeeKtuaAgeWPkeeUn+aUueWPmOWbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkxvY2FsVmlkZW9TdGF0ZUNoYW5nZWRcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g6YeN5paw5Yqg5YWl6aKR6YGT5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uUmVqb2luQ2hhbm5lbFN1Y2Nlc3NcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g56a75byA6aKR6YGT5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uTGVhdmVDaGFubmVsXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyDlt7Llj5HpgIHmnKzlnLDpn7PpopHpppbluKflm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25GaXJzdExvY2FsQXVkaW9GcmFtZVwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDlt7LmmL7npLrmnKzlnLDop4bpopHpppbluKflm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25GaXJzdExvY2FsVmlkZW9GcmFtZVwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyBUb2tlbiDmnI3liqHljbPlsIbov4fmnJ/lm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25Ub2tlblByaXZpbGVnZVdpbGxFeHBpcmVcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8gVG9rZW4g6L+H5pyf5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uUmVxdWVzdFRva2VuXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOeUqOaIt+inkuiJsuW3suWIh+aNouWbnuiwgyjnm7Tmkq3lnLrmma/kuIspXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uQ2xpZW50Um9sZUNoYW5nZWRcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g5pys5Zyw5oiW6L+c56uv6KeG6aKR5aSn5bCP5oiW5peL6L2s5L+h5oGv5Y+R55Sf5pS55Y+Y5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uVmlkZW9TaXplQ2hhbmdlZFwiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDpgJror53kuK3ov5znq6/pn7PpopHmtYHnmoTnu5/orqHkv6Hmga/lm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25SZW1vdGVBdWRpb1N0YXRzXCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOW9k+WJjemAmuivnee7n+iuoeWbnuiwg+OAgiDor6Xlm57osIPlnKjpgJror53kuK3mr4/kuKTnp5Lop6blj5HkuIDmrKFcclxuXHRcdFx0XHQvLyBjYXNlIFwib25SdGNTdGF0c1wiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDpgJror53kuK3mr4/kuKrnlKjmiLfnmoTnvZHnu5zkuIrkuIvooYwgbGFzdCBtaWxlIOi0qOmHj+aKpeWRiuWbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbk5ldHdvcmtRdWFsaXR5XCI6XHJcblx0XHRcdFx0Ly8gXHRicmVhaztcclxuXHRcdFx0XHQvLyBcdC8vIOmAmuivneS4reacrOWcsOinhumikea1geeahOe7n+iuoeS/oeaBr+Wbnuiwg1xyXG5cdFx0XHRcdC8vIGNhc2UgXCJvbkxvY2FsVmlkZW9TdGF0c1wiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHRcdFx0Ly8gXHQvLyDpgJror53kuK3mnKzlnLDpn7PpopHmtYHnmoTnu5/orqHkv6Hmga/lm57osINcclxuXHRcdFx0XHQvLyBjYXNlIFwib25Mb2NhbEF1ZGlvU3RhdHNcIjpcclxuXHRcdFx0XHQvLyBcdGJyZWFrO1xyXG5cdFx0XHRcdC8vIFx0Ly8g6YCa6K+d5Lit6L+c56uv6KeG6aKR5rWB55qE57uf6K6h5L+h5oGv5Zue6LCDXHJcblx0XHRcdFx0Ly8gY2FzZSBcIm9uUmVtb3RlVmlkZW9TdGF0c1wiOlxyXG5cdFx0XHRcdC8vIFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvLyDorr7nva7popHpgZPlnLrmma/ku6Xlj4rpopHpgZPop5LoibJcclxuXHRzZXRDaGFubmVsUHJvZmlsZTogYXN5bmMgZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuiuvue9rumikemBk+WcuuaZr+S7peWPiumikemBk+inkuiJslwiLCBTdG9yZSk7XHJcblx0XHRcdC8vIOiuvue9rumikemBk+WcuuaZr1xyXG5cdFx0XHRydGNNb2R1bGUuc2V0Q2hhbm5lbFByb2ZpbGUoe1xyXG5cdFx0XHRcdFwicHJvZmlsZVwiOiBOdW1iZXIoU3RvcmUuc2NlbmFyaW8pXHJcblx0XHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0Ly8g6K6+572u6aKR6YGT6KeS6ImyXHJcblx0XHRcdFx0XHRydGNNb2R1bGUuc2V0Q2xpZW50Um9sZSh7XHJcblx0XHRcdFx0XHRcdFwicm9sZVwiOiBOdW1iZXIoU3RvcmUucm9sZUNob2ljZXMpXHJcblx0XHRcdFx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzLmNvZGUpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cclxuXHR9LFxyXG5cdC8vIOWQr+eUqOinhumike+8iOWKoOWFpeaIv+mXtOWQjuiHquWKqOWPkeW4g++8iVxyXG5cdGVuYWJsZVZpZGVvOiBhc3luYyBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOiuvue9ruinhumikee8lueggeWxnuaApyjlj6/oh6rlrprkuYkpIFxyXG5cdFx0Ly8g6K+m5oOFIGh0dHBzOi8vZG9jcy5hbnlydGMuaW8vY24vVmlkZW8vYXBpLXJlZi9ydGNfdW5pYXBwL3VuaV9ydGNfZW5naW5lI3NldHZpZGVvZW5jb2RlcmNvbmZpZ3VyYXRpb25cclxuXHRcdC8vIGF3YWl0IHJ0Y01vZHVsZS5zZXRWaWRlb0VuY29kZXJDb25maWd1cmF0aW9uKHtcclxuXHRcdC8vIFx0XCJ3aWR0aFwiOiAyNDAsXHJcblx0XHQvLyBcdFwiaGVpZ2h0XCI6IDMyMCxcclxuXHRcdC8vIFx0XCJiaXRyYXRlXCI6IDAsXHJcblx0XHQvLyBcdFwiZnJhbWVSYXRlXCI6IDE1LFxyXG5cdFx0Ly8gXHRcIm9yaWVudGF0aW9uTW9kZVwiOiAwXHJcblx0XHQvLyB9LCAocmVzKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdSVEMg6K6+572u6KeG6aKR57yW56CB5bGe5oCnIHNldFZpZGVvRW5jb2RlckNvbmZpZ3VyYXRpb24g5pa55rOV6LCD55SoJywgcmVzXHJcblx0XHQvLyBcdFx0LmNvZGUgPT09XHJcblx0XHQvLyBcdFx0MCA/ICfmiJDlip8nIDpcclxuXHRcdC8vIFx0XHQn5aSx6LSl77yaJyArIHJlcyk7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIOWQr+eUqOinhumikVxyXG5cdFx0YXdhaXQgcnRjTW9kdWxlLmVuYWJsZVZpZGVvKChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JUQyDlkK/nlKjop4bpopEgZW5hYmxlVmlkZW8g5pa55rOV6LCD55SoJywgKHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJykgK1xyXG5cdFx0XHRcdHJlcyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIOWKoOWFpemikemBk1xyXG5cdGpvaW5DaGFubmVsOiBhc3luYyBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOW8gOWQr+WFjeaPkFxyXG5cdFx0YXdhaXQgUlRDLnNldEVuYWJsZVNwZWFrZXJwaG9uZSh0cnVlKTtcclxuXHRcdC8vIOWKoOWFpSBydGMg6aKR6YGTXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuam9pbkNoYW5uZWwoe1xyXG5cdFx0XHRcInRva2VuXCI6IFN0b3JlLnRva2VuLFxyXG5cdFx0XHRcImNoYW5uZWxJZFwiOiBTdG9yZS5jaGFubmVsLFxyXG5cdFx0XHRcInVpZFwiOiBTdG9yZS51aWQsXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdSVEMgam9pbkNoYW5uZWwg5pa55rOV6LCD55SoJywgKHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJykgKyByZXMpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDpn7PpopHmmK/lkKblhY3mj5BcclxuXHRzZXRFbmFibGVTcGVha2VycGhvbmU6IGZ1bmN0aW9uKGZhc2UpIHtcclxuXHRcdC8vIOm7mOiupOaJrOWjsOWZqOaSreaUvlxyXG5cdFx0cnRjTW9kdWxlLnNldEVuYWJsZVNwZWFrZXJwaG9uZSh7XHJcblx0XHRcdFwiZW5hYmxlZFwiOiBmYXNlXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdSVEMg6L+c56uv5Yqg5YWl5oi/6Ze05ZCO6K6+572uJyArIChmYXNlID8gJ+W8gOWQrycgOiAn5YWz6ZetJykgKyAn5oms5aOw5Zmo5pKt5pS+JywgcmVzLmNvZGUgPT09IDAgPyAn5oiQ5YqfJyA6XHJcblx0XHRcdFx0J+Wksei0pe+8micgK1xyXG5cdFx0XHRcdHJlcyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIOmfs+mikeaYr+WQpuWFs+mXrVxyXG5cdGVuYWJsZUxvY2FsQXVkaW86IGZ1bmN0aW9uKGNoZWNrZWQpIHtcclxuXHRcdHJ0Y01vZHVsZS5lbmFibGVMb2NhbEF1ZGlvKHtcclxuXHRcdFx0XCJlbmFibGVkXCI6IGNoZWNrZWRcclxuXHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JUQyDpn7PpopEnICsgKGNoZWNrZWQgPyAn5byA5ZCvJyA6ICflhbPpl60nKSwgKHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJykgKyByZXMpO1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8vIOacrOWcsOinhumikeaYr+WQpumHh+mbhlxyXG5cdGVuYWJsZUxvY2FsVmlkZW86IGZ1bmN0aW9uKGNoZWNrZWQpIHtcclxuXHRcdHJ0Y01vZHVsZS5lbmFibGVMb2NhbFZpZGVvKHtcclxuXHRcdFx0XCJlbmFibGVkXCI6IGNoZWNrZWRcclxuXHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JUQyDop4bpopEnICsgKGNoZWNrZWQgPyAn5byA5ZCvJyA6ICflhbPpl60nKSwgKHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJykgKyByZXMpO1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8vIOaRhOWDj+WktO+8iOWJjeWQju+8iVxyXG5cdHN3aXRjaENhbWVyYTogZnVuY3Rpb24oKSB7XHJcblx0XHRydGNNb2R1bGUuc3dpdGNoQ2FtZXJhKChyZXMpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1JUQyDmkYTlg4/lpLTliY3lkI4gc3dpdGNoQ2FtZXJhIOaWueazleiwg+eUqCcsIHJlcy5jb2RlID09PSAwID8gJ+aIkOWKnycgOiAn5aSx6LSl77yaJyArXHJcblx0XHRcdFx0cmVzKTtcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyDovazor63pn7NcclxuXHR0b1NwZWVjaDogZnVuY3Rpb24oKSB7XHJcblx0XHQvLyDlhbPpl63op4bpopHmqKHlnZdcclxuXHRcdHJ0Y01vZHVsZS5kaXNhYmxlVmlkZW8oKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUlRDIOWFs+mXreinhumikeaooeWdlyBkaXNhYmxlVmlkZW8g5pa55rOV6LCD55SoJywgcmVzLmNvZGUgPT09IDAgPyAn5oiQ5YqfJyA6ICflpLHotKXvvJonICtcclxuXHRcdFx0XHRyZXMpO1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8vIOacrOWcsOWQr+eUqOinhumikeWQjlxyXG5cdGxvY2FsVmlkZW86IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCLmnKzlnLDlkK/nlKjop4bpopHlkI5cIiwgU3RvcmUpO1xyXG5cdFx0Ly8gLy8g5riy5p+T6KeG6aKRXHJcblx0XHRhd2FpdCBTdG9yZS5sb2NhdGlvbi5zZXR1cExvY2FsVmlkZW8oe1xyXG5cdFx0XHRcInJlbmRlck1vZGVcIjogMSxcclxuXHRcdFx0XCJjaGFubmVsSWRcIjogU3RvcmUuY2hhbm5lbCxcclxuXHRcdFx0XCJ1aWRcIjogU3RvcmUudWlkLFxyXG5cdFx0XHRcIm1pcnJvck1vZGVcIjogMFxyXG5cdFx0fSwgKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5riy5p+T6KeG6aKRJywgcmVzKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8g5pys5Zyw6aKE6KeIXHJcblx0XHRhd2FpdCBTdG9yZS5sb2NhdGlvbi5zdGFydFByZXZpZXcoKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5pys5Zyw6aKE6KeIJywgcmVzKTtcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyDov5znq6/liqDlhaXmiL/pl7TlkI7ov5vooYwgKOWkmuS6uilcclxuXHRyZW1vdGVuYWJsZVZpZGVvOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIui/nOerr+WKoOWFpeaIv+mXtOWQjui/m+ihjFwiLCBTdG9yZS5yZW1vdGVMaXRzKTtcclxuXHRcdGNvbnNvbGUubG9nKFwi6L+c56uv5Yqg5YWl5oi/6Ze05ZCO6L+b6KGMXCIsIGRhdGEpO1xyXG5cdFx0U3RvcmUucmVtb3RlTGl0cy5tYXAoYXN5bmMgaXRlbSA9PiB7XHJcblx0XHRcdGlmIChpdGVtLnBlZXJpZCA9PSBkYXRhLnVpZCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi6aKR6YGTXCIsIFN0b3JlLmNoYW5uZWwpO1xyXG5cdFx0XHRcdGF3YWl0IGl0ZW0ucmVtb3RlWzBdLnNldHVwUmVtb3RlVmlkZW8oe1xyXG5cdFx0XHRcdFx0XCJ1aWRcIjogaXRlbS5wZWVyaWQsXHJcblx0XHRcdFx0XHRcImNoYW5uZWxJZFwiOiBTdG9yZS5jaGFubmVsLFxyXG5cdFx0XHRcdFx0XCJyZW5kZXJNb2RlXCI6IDAsXHJcblx0XHRcdFx0XHRcIm1pcnJvck1vZGVcIjogMFxyXG5cdFx0XHRcdH0sIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmuLLmn5Pov5znq6/op4bpopEnLCByZXMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIOacrOWcsOmihOiniFxyXG5cdFx0XHRcdGF3YWl0IGl0ZW0ucmVtb3RlWzBdLnN0YXJ0UHJldmlldygocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6L+c56uv5pys5Zyw6aKE6KeIJywgcmVzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOWmguaenOS9oOWPquWcqOS4gOS4qumhtemdouWGmSDlj6/ku6Xnm7TmjqXosIMgZGVzdG9yeSBcclxuXHRcdOWmguaenOS9oOaYr+eUqOeahOWNleS+iyDnprvlvIDpobXpnaLlvJXmk47kuI3plIDmr4Eg5bCx55SoIGxlYXZlQ2hhbm5lbFxyXG5cdCAqL1xyXG5cdC8vIOaMguaWrVxyXG5cdGxlYXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOemu+W8gOmikemBk1xyXG5cdFx0cnRjTW9kdWxlLmxlYXZlQ2hhbm5lbCgocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi6LCD55So56a75byA6aKR6YGTIGxlYXZlQ2hhbm5lbFwiLCByZXMpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyDplIDmr4Hlrp7kvotcclxuXHRkZXN0cm95UnRjOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vIOmUgOavgeWunuS+i1xyXG5cdFx0cnRjTW9kdWxlLmRlc3Ryb3lSdGMoKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIumUgOavgeWunuS+i1wiLCByZXMpO1xyXG5cdFx0XHQvLyBpZiAocmVzLmNvZGUgPT09IDApIHtcclxuXHRcdFx0Ly8gXHRSVENVdGlscy5kZXN0cm95UnRjKCk7XHJcblx0XHRcdC8vIH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5peB6Lev5o6o5rWBIFxyXG5cdCAqL1xyXG5cdExpdmVUcmFuc2NvOiBhc3luYyBmdW5jdGlvbih1cmxMaXZlLCBFbmFibGVkID0gdHJ1ZSkge1xyXG5cdFx0Ly8g6buY6K6k5b2T5YmN6aKR6YGT5omA5pyJ5oiQ5ZGY5o6o5rWBXHJcblx0XHQvLyDojrflj5bmiYDmnInmiJDlkZjop4bpopHmoLflvI9cclxuXHRcdGxldCBvQWxscyA9IFtdO1xyXG5cdFx0Y29uc29sZS5sb2coU3RvcmUpO1xyXG5cdFx0Ly8g6KeS6Imy6Z2e6KeC5LyXXHJcblx0XHRpZiAoU3RvcmUucm9sZUNob2ljZXMgIT0gMikge1xyXG5cdFx0XHQvLyDmt7vliqDmnKzlnLDmiJDlkZhcclxuXHRcdFx0b0FsbHMucHVzaChuZXcgVHJhbnNjb2RpbmdVc2VyKFN0b3JlLnVpZCwge1xyXG5cdFx0XHRcdHdpZHRoOiAyODAsXHJcblx0XHRcdFx0aGVpZ2h0OiAyMTAsXHJcblx0XHRcdFx0eDogMCxcclxuXHRcdFx0XHR5OiAwXHJcblx0XHRcdH0pKTtcclxuXHRcdH1cclxuXHRcdC8vIOa3u+WKoOi/nOerr+aIkOWRmFxyXG5cdFx0U3RvcmUucmVtb3RlTGl0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdGxldCBvSW5kZXggPSBvQWxscy5sZW5ndGggPiAwID8gKGluZGV4ICsgMSkgOiBpbmRleDtcclxuXHRcdFx0b0FsbHMucHVzaChuZXcgVHJhbnNjb2RpbmdVc2VyKGl0ZW0ucGVlcmlkLCB7XHJcblx0XHRcdFx0d2lkdGg6IDI4MCxcclxuXHRcdFx0XHRoZWlnaHQ6IDIxMCxcclxuXHRcdFx0XHR4OiAob0luZGV4ICUgMykgKiAyODAsXHJcblx0XHRcdFx0eTogTWF0aC5mbG9vcihvSW5kZXggLyAzKSAqIDIxMCxcclxuXHRcdFx0fSkpXHJcblx0XHR9KTtcclxuXHRcdGNvbnNvbGUubG9nKG9BbGxzKTtcclxuXHRcdC8vIOiuvue9ruaXgei3r+aOqOa1geeahOinhumikeagt+W8jyjkuInliJcpXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuc2V0TGl2ZVRyYW5zY29kaW5nKHtcclxuXHRcdFx0XCJ0cmFuc2NvZGluZ1wiOiBuZXcgTGl2ZVRyYW5zY29kaW5nKG9BbGxzLCB7XHJcblx0XHRcdFx0d2lkdGg6IDg0MCxcclxuXHRcdFx0XHRoZWlnaHQ6IE1hdGguY2VpbChvQWxscy5sZW5ndGggLyAzKSAqIDIxMCxcclxuXHRcdFx0fSlcclxuXHRcdH0sIChyZXQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmV0KTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8g5re75Yqg5peB6Lev5o6o5rWBXHJcblx0XHRhd2FpdCBydGNNb2R1bGUuYWRkUHVibGlzaFN0cmVhbVVybCh7XHJcblx0XHRcdHVybDogdXJsTGl2ZSxcclxuXHRcdFx0dHJhbnNjb2RpbmdFbmFibGVkOiBFbmFibGVkXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5re75Yqg5peB6Lev5o6o5rWBXCIsIHJlcyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIOWPlua2iOaOqOa1gVxyXG5cdHJlbW92ZVB1Ymxpc2hTdHJlYW1Vcmw6IGZ1bmN0aW9uKHVybExpdmUpIHtcclxuXHRcdC8vIOa3u+WKoOaXgei3r+aOqOa1gVxyXG5cdFx0cnRjTW9kdWxlLnJlbW92ZVB1Ymxpc2hTdHJlYW1Vcmwoe1xyXG5cdFx0XHR1cmw6IHVybExpdmUsXHJcblx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5Y+W5raI5peB6Lev5o6o5rWBXCIsIHJlcyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIOebkea1i+inhumikeWuueWZqFxyXG51bmkuJG9uKFwiQ2FudmFzVmlld1wiLCBkYXRhID0+IHtcclxuXHQvLyDmnKzlnLDop4bpopHlrrnlmahcclxuXHRpZiAoZGF0YS5sb2NhdGlvbikge1xyXG5cdFx0U3RvcmUgPSBPYmplY3QuYXNzaWduKFN0b3JlLCB7XHJcblx0XHRcdGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uXHJcblx0XHR9KTtcclxuXHRcdC8vIOi/nOerr+inhumikeWuueWZqFxyXG5cdH0gZWxzZSBpZiAoZGF0YS5wZWVyaWQgJiYgZGF0YS5yZW1vdGUpIHtcclxuXHRcdGNvbnN0IG9hID0gU3RvcmUucmVtb3RlTGl0cy5maWx0ZXIoaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiBpdGVtLnBlZXJpZCA9PSBkYXRhLnBlZXJpZFxyXG5cdFx0fSk7XHJcblx0XHRpZiAob2EubGVuZ3RoID09IDApIHtcclxuXHRcdFx0U3RvcmUucmVtb3RlTGl0cy5wdXNoKGRhdGEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRSVEMucmVtb3RlbmFibGVWaWRlbyh7XHJcblx0XHRcdFx0XHR1aWQ6IGRhdGEucGVlcmlkXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sIDUwMCk7XHJcblx0XHR9XHJcblx0fVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUlRDO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 14 */
/*!*******************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/utils/code.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; // RTC 相关状态码\nvar code = {\n  // 警告状态码\n  warning: {\n    8: \"指定的 View 无效，使用视频功能时需要指定 view\",\n    16: \"初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信\",\n    20: \"请求处于待定状态。一般是由于某个模块还没准备好，请求被延迟处理\",\n    103: \"没有可用的频道资源。可能是因为服务端没法分配频道资源\",\n    104: \"查找频道超时。在加入频道时 SDK 先要查找指定的频道，出现该警告一般是因为网络太差，连接不到服务器\",\n    106: \"打开频道超时。查找到指定频道后，SDK 接着打开该频道，超时一般是因为网络太差，连接不到服务器\",\n    107: \"打开频道请求被服务器拒绝。服务器可能没有办法处理该请求或该请求是非法的\",\n    121: \"TICKET 非法，打开频道失败\",\n    122: \"尝试打开另一个服务器\",\n    701: \"打开伴奏出错\",\n    1014: \"音频设备模块：运行时播放设备出现警告\",\n    1016: \"音频设备模块：运行时录音设备出现警告\",\n    1019: \"音频设备模块：没有采集到有效的声音数据\",\n    1025: \"音频播放或采集被系统事件（如来电）打扰\",\n    1033: \"音频设备模块：录制设备被占用\",\n    1051: \"音频设备模块：录音声音检查到啸叫\" },\n\n  // 错误状态码\n  errore: {\n    0: \"没有错误\",\n    1: \"一般性的错误（没有明确归类的错误原因）\",\n    2: \"API 调用了无效的参数。例如指定的频道名含有非法字符\",\n    3: \"SDK 初始化失败\",\n    4: \"SDK 当前状态不支持此操作\",\n    5: \"调用被拒绝\",\n    6: \"传入的缓冲区大小不足以存放返回的数据\",\n    7: \"SDK 尚未初始化，就调用其 API。请确认在调用 API 之前已创建 RtcEngine 对象并完成初始化\",\n    8: \"指定的 View 无效，使用视频功能时需要指定 View\",\n    9: \"没有操作权限。请检查用户是否授予 app 音视频设备使用权限\",\n    10: \"API 调用超时。有些 API 调用需要 SDK 返回结果，如果 SDK 处理时间过长，超过 10 秒没有返回，会出现此错误\",\n    11: \"请求被取消\",\n    12: \"调用频率太高\",\n    13: \"SDK 内部绑定到网络 Socket 失败\",\n    14: \"网络不可用\",\n    15: \"没有网络缓冲区可用\",\n    16: \"初始化视频功能失败。有可能是因视频资源被占用导致的。用户无法看到视频画面，但不影响语音通信\",\n    17: \"加入频道被拒绝\",\n    18: \"离开频道失败\",\n    19: \"资源已被占用，不能重复使用\",\n    101: \"不是有效的 APP ID。请更换有效的 APP ID 重新加入频道\",\n    102: \"不是有效的频道名。请更换有效的频道名重新加入频道\",\n    110: \"开启了 token 校验但没有输入 token\",\n    111: \"网络连接中断\",\n    112: \"网络连接丢失\",\n    113: \"在调用 sendStreamMessage 时，用户不在频道内\",\n    114: \"在调用 sendStreamMessage 时，发送的数据长度大于 1024 个字节\",\n    115: \"在调用 sendStreamMessage 时，发送的数据码率超过限制（6KB/s）\",\n    116: \"在调用 createDataStream 时，创建的数据通道过多（超过 5 个通道）\",\n    120: \"解密失败，可能是用户加入频道用了不同的密码。请检查加入频道时的设置，或尝试重新加入频道\",\n    123: \"此用户被服务器禁止\",\n    125: \"水印文件路径错误\",\n    134: \"无效的 User account\",\n    1001: \"加载媒体引擎失败\",\n    1002: \"启动媒体引擎开始通话失败。请尝试重新进入频道\",\n    1004: \"启动视频渲染模块失败\",\n    1005: \"音频设备模块：音频设备出现错误（未明确指明为何种错误）。请检查音频设备是否被其他应用占用，或者尝试重新进入频道\",\n    1006: \"音频设备模块：使用 java 资源出现错误\",\n    1007: \"音频设备模块：设置的采样频率出现错误\",\n    1008: \"音频设备模块：初始化播放设备出现错误。请检查播放设备是否被其他应用占用，或者尝试重新进入频道\",\n    1009: \"音频设备模块：启动播放设备出现错误。请检查播放设备是否正常，或者尝试重新进入频道\",\n    1010: \"音频设备模块：停止播放设备出现错误\",\n    1011: \"音频设备模块：初始化录音设备时出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1012: \"音频设备模块：启动录音设备出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1013: \"音频设备模块：停止录音设备出现错误\",\n    1015: \"音频设备模块：运行时播放出现错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1017: \"音频设备模块：运行时录音错误。请检查录音设备是否正常，或者尝试重新进入频道\",\n    1018: \"音频设备模块：录音失败\",\n    1022: \"音频设备模块：初始化 Loopback 设备错误\",\n    1023: \"音频设备模块：启动 Loopback 设备错误\",\n    1030: \"音频路由：连接蓝牙通话失败，默认路由会被启用\",\n    1359: \"音频设备模块：无录制设备。请检查是否有可用的录放音设备或者录放音设备是否已经被其他应用占用\",\n    1501: \"视频设备模块：没有摄像头使用权限。请检查是否已经打开摄像头权限\",\n    1600: \"视频设备模块：未知错误\",\n    1601: \"视频设备模块：视频编码器初始化错误。该错误为严重错误，请尝试重新加入频道\",\n    1602: \"视频设备模块：视频编码器错误。该错误为严重错误，请尝试重新加入频道\" },\n\n  // 旁路推流相关状态码\n  live: {\n    // 状态码\n    state: {\n      0: \"推流未开始或已结束\",\n      1: \"正在连接 AR 推流服务器和 RTMP 服务器\",\n      2: \"推流正在进行,成功推流后\",\n      3: \"正在恢复推流\",\n      4: \"推流失败\" },\n\n    // 错误码\n    error: {\n      0: \"推流成功\",\n      1: \"参数无效，请检查输入参数是否正确。请确保调用 setLiveTranscoding \",\n      2: \"推流已加密，不能推流\",\n      3: \"推流超时未成功，可重新推流\",\n      4: \"推流服务器出现错误\",\n      5: \"RTMP 服务器出现错误\",\n      6: \"推流请求过于频繁\",\n      7: \"单个主播的推流地址数目达到上线 10\",\n      8: \"主播操作不属于自己的流，请检查 App 逻辑\",\n      9: \"服务器未找到这个流\",\n      10: \"推流地址格式有错误，请检查推流地址格式是否正确\" } } };var _default =\n\n\n\n\n\ncode;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvY29kZS5qcyJdLCJuYW1lcyI6WyJjb2RlIiwid2FybmluZyIsImVycm9yZSIsImxpdmUiLCJzdGF0ZSIsImVycm9yIl0sIm1hcHBpbmdzIjoid0ZBQUE7QUFDQSxJQUFNQSxJQUFJLEdBQUc7QUFDWjtBQUNBQyxTQUFPLEVBQUU7QUFDUixPQUFHLDhCQURLO0FBRVIsUUFBSSwrQ0FGSTtBQUdSLFFBQUksaUNBSEk7QUFJUixTQUFLLDRCQUpHO0FBS1IsU0FBSyxvREFMRztBQU1SLFNBQUssaURBTkc7QUFPUixTQUFLLHFDQVBHO0FBUVIsU0FBSyxrQkFSRztBQVNSLFNBQUssWUFURztBQVVSLFNBQUssUUFWRztBQVdSLFVBQU0sb0JBWEU7QUFZUixVQUFNLG9CQVpFO0FBYVIsVUFBTSxxQkFiRTtBQWNSLFVBQU0scUJBZEU7QUFlUixVQUFNLGdCQWZFO0FBZ0JSLFVBQU0sa0JBaEJFLEVBRkc7O0FBb0JaO0FBQ0FDLFFBQU0sRUFBRTtBQUNQLE9BQUcsTUFESTtBQUVQLE9BQUcscUJBRkk7QUFHUCxPQUFHLDZCQUhJO0FBSVAsT0FBRyxXQUpJO0FBS1AsT0FBRyxnQkFMSTtBQU1QLE9BQUcsT0FOSTtBQU9QLE9BQUcsb0JBUEk7QUFRUCxPQUFHLHdEQVJJO0FBU1AsT0FBRyw4QkFUSTtBQVVQLE9BQUcsZ0NBVkk7QUFXUCxRQUFJLGdFQVhHO0FBWVAsUUFBSSxPQVpHO0FBYVAsUUFBSSxRQWJHO0FBY1AsUUFBSSx1QkFkRztBQWVQLFFBQUksT0FmRztBQWdCUCxRQUFJLFdBaEJHO0FBaUJQLFFBQUksK0NBakJHO0FBa0JQLFFBQUksU0FsQkc7QUFtQlAsUUFBSSxRQW5CRztBQW9CUCxRQUFJLGVBcEJHO0FBcUJQLFNBQUssbUNBckJFO0FBc0JQLFNBQUssMEJBdEJFO0FBdUJQLFNBQUsseUJBdkJFO0FBd0JQLFNBQUssUUF4QkU7QUF5QlAsU0FBSyxRQXpCRTtBQTBCUCxTQUFLLGlDQTFCRTtBQTJCUCxTQUFLLDRDQTNCRTtBQTRCUCxTQUFLLDRDQTVCRTtBQTZCUCxTQUFLLDRDQTdCRTtBQThCUCxTQUFLLDZDQTlCRTtBQStCUCxTQUFLLFdBL0JFO0FBZ0NQLFNBQUssVUFoQ0U7QUFpQ1AsU0FBSyxrQkFqQ0U7QUFrQ1AsVUFBTSxVQWxDQztBQW1DUCxVQUFNLHdCQW5DQztBQW9DUCxVQUFNLFlBcENDO0FBcUNQLFVBQU0seURBckNDO0FBc0NQLFVBQU0sdUJBdENDO0FBdUNQLFVBQU0sb0JBdkNDO0FBd0NQLFVBQU0sZ0RBeENDO0FBeUNQLFVBQU0sMENBekNDO0FBMENQLFVBQU0sbUJBMUNDO0FBMkNQLFVBQU0sNENBM0NDO0FBNENQLFVBQU0sMENBNUNDO0FBNkNQLFVBQU0sbUJBN0NDO0FBOENQLFVBQU0seUNBOUNDO0FBK0NQLFVBQU0sdUNBL0NDO0FBZ0RQLFVBQU0sYUFoREM7QUFpRFAsVUFBTSwwQkFqREM7QUFrRFAsVUFBTSx5QkFsREM7QUFtRFAsVUFBTSx3QkFuREM7QUFvRFAsVUFBTSwrQ0FwREM7QUFxRFAsVUFBTSxpQ0FyREM7QUFzRFAsVUFBTSxhQXREQztBQXVEUCxVQUFNLHNDQXZEQztBQXdEUCxVQUFNLG1DQXhEQyxFQXJCSTs7QUErRVo7QUFDQUMsTUFBSSxFQUFFO0FBQ0w7QUFDQUMsU0FBSyxFQUFFO0FBQ04sU0FBRyxXQURHO0FBRU4sU0FBRyx5QkFGRztBQUdOLFNBQUcsY0FIRztBQUlOLFNBQUcsUUFKRztBQUtOLFNBQUcsTUFMRyxFQUZGOztBQVNMO0FBQ0FDLFNBQUssRUFBRTtBQUNOLFNBQUcsTUFERztBQUVOLFNBQUcsNENBRkc7QUFHTixTQUFHLFlBSEc7QUFJTixTQUFHLGVBSkc7QUFLTixTQUFHLFdBTEc7QUFNTixTQUFHLGNBTkc7QUFPTixTQUFHLFVBUEc7QUFRTixTQUFHLG9CQVJHO0FBU04sU0FBRyx3QkFURztBQVVOLFNBQUcsV0FWRztBQVdOLFVBQUkseUJBWEUsRUFWRixFQWhGTSxFQUFiLEM7Ozs7OztBQTJHZUwsSSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFJUQyDnm7jlhbPnirbmgIHnoIFcclxuY29uc3QgY29kZSA9IHtcclxuXHQvLyDorablkYrnirbmgIHnoIFcclxuXHR3YXJuaW5nOiB7XHJcblx0XHQ4OiBcIuaMh+WumueahCBWaWV3IOaXoOaViO+8jOS9v+eUqOinhumikeWKn+iDveaXtumcgOimgeaMh+WumiB2aWV3XCIsXHJcblx0XHQxNjogXCLliJ3lp4vljJbop4bpopHlip/og73lpLHotKXjgILmnInlj6/og73mmK/lm6Dop4bpopHotYTmupDooqvljaDnlKjlr7zoh7TnmoTjgILnlKjmiLfml6Dms5XnnIvliLDop4bpopHnlLvpnaLvvIzkvYbkuI3lvbHlk43or63pn7PpgJrkv6FcIixcclxuXHRcdDIwOiBcIuivt+axguWkhOS6juW+heWumueKtuaAgeOAguS4gOiIrOaYr+eUseS6juafkOS4quaooeWdl+i/mOayoeWHhuWkh+Wlve+8jOivt+axguiiq+W7tui/n+WkhOeQhlwiLFxyXG5cdFx0MTAzOiBcIuayoeacieWPr+eUqOeahOmikemBk+i1hOa6kOOAguWPr+iDveaYr+WboOS4uuacjeWKoeerr+ayoeazleWIhumFjemikemBk+i1hOa6kFwiLFxyXG5cdFx0MTA0OiBcIuafpeaJvumikemBk+i2heaXtuOAguWcqOWKoOWFpemikemBk+aXtiBTREsg5YWI6KaB5p+l5om+5oyH5a6a55qE6aKR6YGT77yM5Ye6546w6K+l6K2m5ZGK5LiA6Iis5piv5Zug5Li6572R57uc5aSq5beu77yM6L+e5o6l5LiN5Yiw5pyN5Yqh5ZmoXCIsXHJcblx0XHQxMDY6IFwi5omT5byA6aKR6YGT6LaF5pe244CC5p+l5om+5Yiw5oyH5a6a6aKR6YGT5ZCO77yMU0RLIOaOpeedgOaJk+W8gOivpemikemBk++8jOi2heaXtuS4gOiIrOaYr+WboOS4uue9kee7nOWkquW3ru+8jOi/nuaOpeS4jeWIsOacjeWKoeWZqFwiLFxyXG5cdFx0MTA3OiBcIuaJk+W8gOmikemBk+ivt+axguiiq+acjeWKoeWZqOaLkue7neOAguacjeWKoeWZqOWPr+iDveayoeacieWKnuazleWkhOeQhuivpeivt+axguaIluivpeivt+axguaYr+mdnuazleeahFwiLFxyXG5cdFx0MTIxOiBcIlRJQ0tFVCDpnZ7ms5XvvIzmiZPlvIDpopHpgZPlpLHotKVcIixcclxuXHRcdDEyMjogXCLlsJ3or5XmiZPlvIDlj6bkuIDkuKrmnI3liqHlmahcIixcclxuXHRcdDcwMTogXCLmiZPlvIDkvLTlpY/lh7rplJlcIixcclxuXHRcdDEwMTQ6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya6L+Q6KGM5pe25pKt5pS+6K6+5aSH5Ye6546w6K2m5ZGKXCIsXHJcblx0XHQxMDE2OiBcIumfs+mikeiuvuWkh+aooeWdl++8mui/kOihjOaXtuW9lemfs+iuvuWkh+WHuueOsOitpuWRilwiLFxyXG5cdFx0MTAxOTogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrmsqHmnInph4fpm4bliLDmnInmlYjnmoTlo7Dpn7PmlbDmja5cIixcclxuXHRcdDEwMjU6IFwi6Z+z6aKR5pKt5pS+5oiW6YeH6ZuG6KKr57O757uf5LqL5Lu277yI5aaC5p2l55S177yJ5omT5omwXCIsXHJcblx0XHQxMDMzOiBcIumfs+mikeiuvuWkh+aooeWdl++8muW9leWItuiuvuWkh+iiq+WNoOeUqFwiLFxyXG5cdFx0MTA1MTogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlvZXpn7Plo7Dpn7Pmo4Dmn6XliLDllbjlj6tcIixcclxuXHR9LFxyXG5cdC8vIOmUmeivr+eKtuaAgeeggVxyXG5cdGVycm9yZToge1xyXG5cdFx0MDogXCLmsqHmnInplJnor69cIixcclxuXHRcdDE6IFwi5LiA6Iis5oCn55qE6ZSZ6K+v77yI5rKh5pyJ5piO56Gu5b2S57G755qE6ZSZ6K+v5Y6f5Zug77yJXCIsXHJcblx0XHQyOiBcIkFQSSDosIPnlKjkuobml6DmlYjnmoTlj4LmlbDjgILkvovlpoLmjIflrprnmoTpopHpgZPlkI3lkKvmnInpnZ7ms5XlrZfnrKZcIixcclxuXHRcdDM6IFwiU0RLIOWIneWni+WMluWksei0pVwiLFxyXG5cdFx0NDogXCJTREsg5b2T5YmN54q25oCB5LiN5pSv5oyB5q2k5pON5L2cXCIsXHJcblx0XHQ1OiBcIuiwg+eUqOiiq+aLkue7nVwiLFxyXG5cdFx0NjogXCLkvKDlhaXnmoTnvJPlhrLljLrlpKflsI/kuI3otrPku6XlrZjmlL7ov5Tlm57nmoTmlbDmja5cIixcclxuXHRcdDc6IFwiU0RLIOWwmuacquWIneWni+WMlu+8jOWwseiwg+eUqOWFtiBBUEnjgILor7fnoa7orqTlnKjosIPnlKggQVBJIOS5i+WJjeW3suWIm+W7uiBSdGNFbmdpbmUg5a+56LGh5bm25a6M5oiQ5Yid5aeL5YyWXCIsXHJcblx0XHQ4OiBcIuaMh+WumueahCBWaWV3IOaXoOaViO+8jOS9v+eUqOinhumikeWKn+iDveaXtumcgOimgeaMh+WumiBWaWV3XCIsXHJcblx0XHQ5OiBcIuayoeacieaTjeS9nOadg+mZkOOAguivt+ajgOafpeeUqOaIt+aYr+WQpuaOiOS6iCBhcHAg6Z+z6KeG6aKR6K6+5aSH5L2/55So5p2D6ZmQXCIsXHJcblx0XHQxMDogXCJBUEkg6LCD55So6LaF5pe244CC5pyJ5LqbIEFQSSDosIPnlKjpnIDopoEgU0RLIOi/lOWbnue7k+aenO+8jOWmguaenCBTREsg5aSE55CG5pe26Ze06L+H6ZW/77yM6LaF6L+HIDEwIOenkuayoeaciei/lOWbnu+8jOS8muWHuueOsOatpOmUmeivr1wiLFxyXG5cdFx0MTE6IFwi6K+35rGC6KKr5Y+W5raIXCIsXHJcblx0XHQxMjogXCLosIPnlKjpopHnjoflpKrpq5hcIixcclxuXHRcdDEzOiBcIlNESyDlhoXpg6jnu5HlrprliLDnvZHnu5wgU29ja2V0IOWksei0pVwiLFxyXG5cdFx0MTQ6IFwi572R57uc5LiN5Y+v55SoXCIsXHJcblx0XHQxNTogXCLmsqHmnInnvZHnu5znvJPlhrLljLrlj6/nlKhcIixcclxuXHRcdDE2OiBcIuWIneWni+WMluinhumikeWKn+iDveWksei0peOAguacieWPr+iDveaYr+WboOinhumikei1hOa6kOiiq+WNoOeUqOWvvOiHtOeahOOAgueUqOaIt+aXoOazleeci+WIsOinhumikeeUu+mdou+8jOS9huS4jeW9seWTjeivremfs+mAmuS/oVwiLFxyXG5cdFx0MTc6IFwi5Yqg5YWl6aKR6YGT6KKr5ouS57udXCIsXHJcblx0XHQxODogXCLnprvlvIDpopHpgZPlpLHotKVcIixcclxuXHRcdDE5OiBcIui1hOa6kOW3suiiq+WNoOeUqO+8jOS4jeiDvemHjeWkjeS9v+eUqFwiLFxyXG5cdFx0MTAxOiBcIuS4jeaYr+acieaViOeahCBBUFAgSUTjgILor7fmm7TmjaLmnInmlYjnmoQgQVBQIElEIOmHjeaWsOWKoOWFpemikemBk1wiLFxyXG5cdFx0MTAyOiBcIuS4jeaYr+acieaViOeahOmikemBk+WQjeOAguivt+abtOaNouacieaViOeahOmikemBk+WQjemHjeaWsOWKoOWFpemikemBk1wiLFxyXG5cdFx0MTEwOiBcIuW8gOWQr+S6hiB0b2tlbiDmoKHpqozkvYbmsqHmnInovpPlhaUgdG9rZW5cIixcclxuXHRcdDExMTogXCLnvZHnu5zov57mjqXkuK3mlq1cIixcclxuXHRcdDExMjogXCLnvZHnu5zov57mjqXkuKLlpLFcIixcclxuXHRcdDExMzogXCLlnKjosIPnlKggc2VuZFN0cmVhbU1lc3NhZ2Ug5pe277yM55So5oi35LiN5Zyo6aKR6YGT5YaFXCIsXHJcblx0XHQxMTQ6IFwi5Zyo6LCD55SoIHNlbmRTdHJlYW1NZXNzYWdlIOaXtu+8jOWPkemAgeeahOaVsOaNrumVv+W6puWkp+S6jiAxMDI0IOS4quWtl+iKglwiLFxyXG5cdFx0MTE1OiBcIuWcqOiwg+eUqCBzZW5kU3RyZWFtTWVzc2FnZSDml7bvvIzlj5HpgIHnmoTmlbDmja7noIHnjofotoXov4fpmZDliLbvvIg2S0Ivc++8iVwiLFxyXG5cdFx0MTE2OiBcIuWcqOiwg+eUqCBjcmVhdGVEYXRhU3RyZWFtIOaXtu+8jOWIm+W7uueahOaVsOaNrumAmumBk+i/h+Wkmu+8iOi2hei/hyA1IOS4qumAmumBk++8iVwiLFxyXG5cdFx0MTIwOiBcIuino+WvhuWksei0pe+8jOWPr+iDveaYr+eUqOaIt+WKoOWFpemikemBk+eUqOS6huS4jeWQjOeahOWvhueggeOAguivt+ajgOafpeWKoOWFpemikemBk+aXtueahOiuvue9ru+8jOaIluWwneivlemHjeaWsOWKoOWFpemikemBk1wiLFxyXG5cdFx0MTIzOiBcIuatpOeUqOaIt+iiq+acjeWKoeWZqOemgeatolwiLFxyXG5cdFx0MTI1OiBcIuawtOWNsOaWh+S7tui3r+W+hOmUmeivr1wiLFxyXG5cdFx0MTM0OiBcIuaXoOaViOeahCBVc2VyIGFjY291bnRcIixcclxuXHRcdDEwMDE6IFwi5Yqg6L295aqS5L2T5byV5pOO5aSx6LSlXCIsXHJcblx0XHQxMDAyOiBcIuWQr+WKqOWqkuS9k+W8leaTjuW8gOWni+mAmuivneWksei0peOAguivt+WwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAwNDogXCLlkK/liqjop4bpopHmuLLmn5PmqKHlnZflpLHotKVcIixcclxuXHRcdDEwMDU6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya6Z+z6aKR6K6+5aSH5Ye6546w6ZSZ6K+v77yI5pyq5piO56Gu5oyH5piO5Li65L2V56eN6ZSZ6K+v77yJ44CC6K+35qOA5p+l6Z+z6aKR6K6+5aSH5piv5ZCm6KKr5YW25LuW5bqU55So5Y2g55So77yM5oiW6ICF5bCd6K+V6YeN5paw6L+b5YWl6aKR6YGTXCIsXHJcblx0XHQxMDA2OiBcIumfs+mikeiuvuWkh+aooeWdl++8muS9v+eUqCBqYXZhIOi1hOa6kOWHuueOsOmUmeivr1wiLFxyXG5cdFx0MTAwNzogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrorr7nva7nmoTph4fmoLfpopHnjoflh7rnjrDplJnor69cIixcclxuXHRcdDEwMDg6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5Yid5aeL5YyW5pKt5pS+6K6+5aSH5Ye6546w6ZSZ6K+v44CC6K+35qOA5p+l5pKt5pS+6K6+5aSH5piv5ZCm6KKr5YW25LuW5bqU55So5Y2g55So77yM5oiW6ICF5bCd6K+V6YeN5paw6L+b5YWl6aKR6YGTXCIsXHJcblx0XHQxMDA5OiBcIumfs+mikeiuvuWkh+aooeWdl++8muWQr+WKqOaSreaUvuiuvuWkh+WHuueOsOmUmeivr+OAguivt+ajgOafpeaSreaUvuiuvuWkh+aYr+WQpuato+W4uO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAxMDogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlgZzmraLmkq3mlL7orr7lpIflh7rnjrDplJnor69cIixcclxuXHRcdDEwMTE6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5Yid5aeL5YyW5b2V6Z+z6K6+5aSH5pe25Ye6546w6ZSZ6K+v44CC6K+35qOA5p+l5b2V6Z+z6K6+5aSH5piv5ZCm5q2j5bi477yM5oiW6ICF5bCd6K+V6YeN5paw6L+b5YWl6aKR6YGTXCIsXHJcblx0XHQxMDEyOiBcIumfs+mikeiuvuWkh+aooeWdl++8muWQr+WKqOW9lemfs+iuvuWkh+WHuueOsOmUmeivr+OAguivt+ajgOafpeW9lemfs+iuvuWkh+aYr+WQpuato+W4uO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAxMzogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlgZzmraLlvZXpn7Porr7lpIflh7rnjrDplJnor69cIixcclxuXHRcdDEwMTU6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya6L+Q6KGM5pe25pKt5pS+5Ye6546w6ZSZ6K+v44CC6K+35qOA5p+l5b2V6Z+z6K6+5aSH5piv5ZCm5q2j5bi477yM5oiW6ICF5bCd6K+V6YeN5paw6L+b5YWl6aKR6YGTXCIsXHJcblx0XHQxMDE3OiBcIumfs+mikeiuvuWkh+aooeWdl++8mui/kOihjOaXtuW9lemfs+mUmeivr+OAguivt+ajgOafpeW9lemfs+iuvuWkh+aYr+WQpuato+W4uO+8jOaIluiAheWwneivlemHjeaWsOi/m+WFpemikemBk1wiLFxyXG5cdFx0MTAxODogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlvZXpn7PlpLHotKVcIixcclxuXHRcdDEwMjI6IFwi6Z+z6aKR6K6+5aSH5qih5Z2X77ya5Yid5aeL5YyWIExvb3BiYWNrIOiuvuWkh+mUmeivr1wiLFxyXG5cdFx0MTAyMzogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrlkK/liqggTG9vcGJhY2sg6K6+5aSH6ZSZ6K+vXCIsXHJcblx0XHQxMDMwOiBcIumfs+mikei3r+eUse+8mui/nuaOpeiTneeJmemAmuivneWksei0pe+8jOm7mOiupOi3r+eUseS8muiiq+WQr+eUqFwiLFxyXG5cdFx0MTM1OTogXCLpn7PpopHorr7lpIfmqKHlnZfvvJrml6DlvZXliLborr7lpIfjgILor7fmo4Dmn6XmmK/lkKbmnInlj6/nlKjnmoTlvZXmlL7pn7Porr7lpIfmiJbogIXlvZXmlL7pn7Porr7lpIfmmK/lkKblt7Lnu4/ooqvlhbbku5blupTnlKjljaDnlKhcIixcclxuXHRcdDE1MDE6IFwi6KeG6aKR6K6+5aSH5qih5Z2X77ya5rKh5pyJ5pGE5YOP5aS05L2/55So5p2D6ZmQ44CC6K+35qOA5p+l5piv5ZCm5bey57uP5omT5byA5pGE5YOP5aS05p2D6ZmQXCIsXHJcblx0XHQxNjAwOiBcIuinhumikeiuvuWkh+aooeWdl++8muacquefpemUmeivr1wiLFxyXG5cdFx0MTYwMTogXCLop4bpopHorr7lpIfmqKHlnZfvvJrop4bpopHnvJbnoIHlmajliJ3lp4vljJbplJnor6/jgILor6XplJnor6/kuLrkuKXph43plJnor6/vvIzor7flsJ3or5Xph43mlrDliqDlhaXpopHpgZNcIixcclxuXHRcdDE2MDI6IFwi6KeG6aKR6K6+5aSH5qih5Z2X77ya6KeG6aKR57yW56CB5Zmo6ZSZ6K+v44CC6K+l6ZSZ6K+v5Li65Lil6YeN6ZSZ6K+v77yM6K+35bCd6K+V6YeN5paw5Yqg5YWl6aKR6YGTXCIsXHJcblx0fSxcclxuXHQvLyDml4Hot6/mjqjmtYHnm7jlhbPnirbmgIHnoIFcclxuXHRsaXZlOiB7XHJcblx0XHQvLyDnirbmgIHnoIFcclxuXHRcdHN0YXRlOiB7XHJcblx0XHRcdDA6IFwi5o6o5rWB5pyq5byA5aeL5oiW5bey57uT5p2fXCIsXHJcblx0XHRcdDE6IFwi5q2j5Zyo6L+e5o6lIEFSIOaOqOa1geacjeWKoeWZqOWSjCBSVE1QIOacjeWKoeWZqFwiLFxyXG5cdFx0XHQyOiBcIuaOqOa1geato+WcqOi/m+ihjCzmiJDlip/mjqjmtYHlkI5cIixcclxuXHRcdFx0MzogXCLmraPlnKjmgaLlpI3mjqjmtYFcIixcclxuXHRcdFx0NDogXCLmjqjmtYHlpLHotKVcIlxyXG5cdFx0fSxcclxuXHRcdC8vIOmUmeivr+eggVxyXG5cdFx0ZXJyb3I6IHtcclxuXHRcdFx0MDogXCLmjqjmtYHmiJDlip9cIixcclxuXHRcdFx0MTogXCLlj4LmlbDml6DmlYjvvIzor7fmo4Dmn6XovpPlhaXlj4LmlbDmmK/lkKbmraPnoa7jgILor7fnoa7kv53osIPnlKggc2V0TGl2ZVRyYW5zY29kaW5nIFwiLFxyXG5cdFx0XHQyOiBcIuaOqOa1geW3suWKoOWvhu+8jOS4jeiDveaOqOa1gVwiLFxyXG5cdFx0XHQzOiBcIuaOqOa1gei2heaXtuacquaIkOWKn++8jOWPr+mHjeaWsOaOqOa1gVwiLFxyXG5cdFx0XHQ0OiBcIuaOqOa1geacjeWKoeWZqOWHuueOsOmUmeivr1wiLFxyXG5cdFx0XHQ1OiBcIlJUTVAg5pyN5Yqh5Zmo5Ye6546w6ZSZ6K+vXCIsXHJcblx0XHRcdDY6IFwi5o6o5rWB6K+35rGC6L+H5LqO6aKR57mBXCIsXHJcblx0XHRcdDc6IFwi5Y2V5Liq5Li75pKt55qE5o6o5rWB5Zyw5Z2A5pWw55uu6L6+5Yiw5LiK57q/IDEwXCIsXHJcblx0XHRcdDg6IFwi5Li75pKt5pON5L2c5LiN5bGe5LqO6Ieq5bex55qE5rWB77yM6K+35qOA5p+lIEFwcCDpgLvovpFcIixcclxuXHRcdFx0OTogXCLmnI3liqHlmajmnKrmib7liLDov5nkuKrmtYFcIixcclxuXHRcdFx0MTA6IFwi5o6o5rWB5Zyw5Z2A5qC85byP5pyJ6ZSZ6K+v77yM6K+35qOA5p+l5o6o5rWB5Zyw5Z2A5qC85byP5piv5ZCm5q2j56GuXCIsXHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29kZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/*!**************************************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/rtcPage.nvue?vue&type=style&index=0&id=19a14084&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_19a14084_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./rtcPage.nvue?vue&type=style&index=0&id=19a14084&scoped=true&lang=css&mpType=page */ 17);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_19a14084_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_19a14084_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_19a14084_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_19a14084_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_rtcPage_nvue_vue_type_style_index_0_id_19a14084_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/rtcPage.nvue?vue&type=style&index=0&id=19a14084&scoped=true&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": {
    "backgroundColor": "#2F3041"
  },
  "text": {
    "color": "#FFFFFF",
    "marginTop": "20"
  },
  "hint": {
    "position": "fixed",
    "alignItems": "center"
  },
  "location-none": {
    "flex": 1,
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "right": 0,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "user-hint": {
    "position": "absolute",
    "bottom": 0,
    "left": 0,
    "backgroundColor": "#2F3041",
    "opacity": 0.5,
    "paddingTop": "4",
    "paddingRight": "10",
    "paddingBottom": "4",
    "paddingLeft": "10"
  },
  "hint-text": {
    "color": "#FFFFFF",
    "opacity": 1
  },
  "CanvasView": {
    "flexWrap": "wrap",
    "flexDirection": "row",
    "paddingTop": "60",
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "video_local": {
    "flex": 1
  },
  "video_local_1": {
    "width": "375rpx",
    "height": "420rpx"
  },
  "options": {
    "position": "fixed",
    "bottom": "20",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "width": 100,
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  "icon": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "icon_img": {
    "width": "60",
    "height": "60"
  },
  "icon_text": {
    "color": "#FFFFFF",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "live": {
    "position": "fixed",
    "backgroundColor": "#000000",
    "opacity": 0.8,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "live-input": {
    "height": "110rpx",
    "paddingTop": 0,
    "paddingRight": "26",
    "paddingBottom": 0,
    "paddingLeft": "26",
    "backgroundColor": "#2F3041",
    "borderRadius": "6",
    "color": "#FFFFFF",
    "opacity": 1,
    "textAlign": "center"
  },
  "live-options": {
    "flexDirection": "column",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20"
  },
  "@VERSION": 2
}

/***/ }),
/* 18 */
/*!********************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/utils/until.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 10));var _permission = _interopRequireDefault(__webpack_require__(/*! ../js_sdk/wa-permission/permission.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\nvar Utils = {\n  // 平台分类查询权限\n  equipment: function equipment() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oa, ob, _oa, _ob;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(\n\n              uni.getSystemInfoSync().platform == 'ios')) {_context.next = 11;break;}_context.next = 3;return (\n\n                Utils.requestAndroidPermission(\"camera\", 'ios', '相机'));case 3:oa = _context.sent;_context.next = 6;return (\n\n                Utils.requestAndroidPermission(\"record\", 'ios', '录音'));case 6:ob = _context.sent;_context.next = 9;return (\n                uni.showToast({\n                  title: oa + \";\" + ob,\n                  icon: \"none\",\n                  duration: 2000 }));case 9:_context.next = 20;break;case 11:if (!(\n\n              uni.getSystemInfoSync().platform === 'android')) {_context.next = 20;break;}_context.next = 14;return (\n\n                Utils.requestAndroidPermission(\"android.permission.CAMERA\", 'android', '相机'));case 14:_oa = _context.sent;_context.next = 17;return (\n\n                Utils.requestAndroidPermission(\"android.permission.RECORD_AUDIO\", 'android', '录音'));case 17:_ob = _context.sent;_context.next = 20;return (\n                uni.showToast({\n                  title: _oa + \";\" + _ob,\n                  icon: \"none\",\n                  duration: 2000 }));case 20:case \"end\":return _context.stop();}}}, _callee);}))();\n\n\n  },\n  // 查询权限封装\n  requestAndroidPermission: function requestAndroidPermission(permisionID, type, libe) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var result, strStatus;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n              result = 0;\n              strStatus = \"\";if (!(\n              type == 'ios')) {_context2.next = 8;break;}_context2.next = 5;return _permission.default.judgeIosPermission(permisionID);case 5:result = _context2.sent;_context2.next = 11;break;case 8:_context2.next = 10;return _permission.default.\n              requestAndroidPermission(\n              permisionID);case 10:result = _context2.sent;case 11:\n              if (result == 1) {\n                strStatus = \"已获得授权,可正常使用\";\n              } else if (result == 0) {\n                strStatus = \"未获得授权,无法使用\";\n              } else {\n                strStatus = \"被永久拒绝权限,无法使用\";\n              };return _context2.abrupt(\"return\",\n              libe + strStatus);case 14:case \"end\":return _context2.stop();}}}, _callee2);}))();\n  },\n  // 获取高度宽度\n  getWidthHeight: function getWidthHeight() {\n    var obj = {\n      windowWidth: 0,\n      windowHeight: 0 };\n\n    uni.getSystemInfo({\n      success: function success(res) {\n        obj = Object.assign(obj, res);\n      } });\n\n    return obj;\n  },\n  // 生成随机字符串（支持自定义字符长度和特征字符集合）\n  randomFn: function randomFn(len, charSet) {\n    charSet = charSet || 'abcdefghijklmnopqrstuvwxyz0123456789';\n    var randomString = '';\n    for (var i = 0; i < len; i++) {\n      var randomPoz = Math.floor(Math.random() * charSet.length);\n      randomString += charSet.substring(randomPoz, randomPoz + 1);\n    }\n    return randomString;\n  } };var _default =\n\nUtils;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdW50aWwuanMiXSwibmFtZXMiOlsiVXRpbHMiLCJlcXVpcG1lbnQiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwib2EiLCJvYiIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicGVybWlzaW9uSUQiLCJ0eXBlIiwibGliZSIsInJlc3VsdCIsInN0clN0YXR1cyIsInBlcm1pc2lvbiIsImp1ZGdlSW9zUGVybWlzc2lvbiIsImdldFdpZHRoSGVpZ2h0Iiwib2JqIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIk9iamVjdCIsImFzc2lnbiIsInJhbmRvbUZuIiwibGVuIiwiY2hhclNldCIsInJhbmRvbVN0cmluZyIsImkiLCJyYW5kb21Qb3oiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiIyTUFBQSwrRztBQUNBLElBQU1BLEtBQUssR0FBRztBQUNiO0FBQ01DLFdBRk8sdUJBRUs7O0FBRWJDLGlCQUFHLENBQUNDLGlCQUFKLEdBQXdCQyxRQUF4QixJQUFvQyxLQUZ2Qjs7QUFJREoscUJBQUssQ0FBQ0ssd0JBQU4sQ0FBK0IsUUFBL0IsRUFBeUMsS0FBekMsRUFBZ0QsSUFBaEQsQ0FKQyxTQUlaQyxFQUpZOztBQU1ETixxQkFBSyxDQUFDSyx3QkFBTixDQUErQixRQUEvQixFQUF5QyxLQUF6QyxFQUFnRCxJQUFoRCxDQU5DLFNBTVpFLEVBTlk7QUFPVkwsbUJBQUcsQ0FBQ00sU0FBSixDQUFjO0FBQ25CQyx1QkFBSyxFQUFFSCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQURDO0FBRW5CRyxzQkFBSSxFQUFFLE1BRmE7QUFHbkJDLDBCQUFRLEVBQUUsSUFIUyxFQUFkLENBUFU7O0FBWU5ULGlCQUFHLENBQUNDLGlCQUFKLEdBQXdCQyxRQUF4QixLQUFxQyxTQVovQjs7QUFjREoscUJBQUssQ0FBQ0ssd0JBQU4sQ0FBK0IsMkJBQS9CLEVBQTRELFNBQTVELEVBQXVFLElBQXZFLENBZEMsVUFjWkMsR0FkWTs7QUFnQkROLHFCQUFLLENBQUNLLHdCQUFOLENBQStCLGlDQUEvQixFQUFrRSxTQUFsRSxFQUE2RSxJQUE3RSxDQWhCQyxVQWdCWkUsR0FoQlk7QUFpQlZMLG1CQUFHLENBQUNNLFNBQUosQ0FBYztBQUNuQkMsdUJBQUssRUFBRUgsR0FBRSxHQUFHLEdBQUwsR0FBV0MsR0FEQztBQUVuQkcsc0JBQUksRUFBRSxNQUZhO0FBR25CQywwQkFBUSxFQUFFLElBSFMsRUFBZCxDQWpCVTs7O0FBdUJqQixHQXpCWTtBQTBCYjtBQUNNTiwwQkEzQk8sb0NBMkJrQk8sV0EzQmxCLEVBMkIrQkMsSUEzQi9CLEVBMkJxQ0MsSUEzQnJDLEVBMkIyQztBQUNuREMsb0JBRG1ELEdBQzFDLENBRDBDO0FBRW5EQyx1QkFGbUQsR0FFdkMsRUFGdUM7QUFHdkRILGtCQUFJLElBQUksS0FIK0Msd0RBR3hCSSxvQkFBVUMsa0JBQVYsQ0FBNkJOLFdBQTdCLENBSHdCLFFBR3ZDRyxNQUh1Qyw4RUFHbUNFO0FBQ3hGWixzQ0FEd0Y7QUFFeEZPLHlCQUZ3RixDQUhuQyxTQUdvQkcsTUFIcEI7QUFNdkQsa0JBQUlBLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2hCQyx5QkFBUyxHQUFHLGFBQVo7QUFDQSxlQUZELE1BRU8sSUFBSUQsTUFBTSxJQUFJLENBQWQsRUFBaUI7QUFDdkJDLHlCQUFTLEdBQUcsWUFBWjtBQUNBLGVBRk0sTUFFQTtBQUNOQSx5QkFBUyxHQUFHLGNBQVo7QUFDQSxnQkFac0Q7QUFhaERGLGtCQUFJLEdBQUdFLFNBYnlDO0FBY3ZELEdBekNZO0FBMENiO0FBQ0FHLGdCQTNDYSw0QkEyQ0k7QUFDaEIsUUFBSUMsR0FBRyxHQUFHO0FBQ1RDLGlCQUFXLEVBQUUsQ0FESjtBQUVUQyxrQkFBWSxFQUFFLENBRkwsRUFBVjs7QUFJQXBCLE9BQUcsQ0FBQ3FCLGFBQUosQ0FBa0I7QUFDakJDLGFBQU8sRUFBRSxpQkFBU0MsR0FBVCxFQUFjO0FBQ3RCTCxXQUFHLEdBQUdNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxHQUFkLEVBQW1CSyxHQUFuQixDQUFOO0FBQ0EsT0FIZ0IsRUFBbEI7O0FBS0EsV0FBT0wsR0FBUDtBQUNBLEdBdERZO0FBdURiO0FBQ0FRLFVBeERhLG9CQXdESkMsR0F4REksRUF3RENDLE9BeERELEVBd0RVO0FBQ3RCQSxXQUFPLEdBQUdBLE9BQU8sSUFBSSxzQ0FBckI7QUFDQSxRQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEdBQXBCLEVBQXlCRyxDQUFDLEVBQTFCLEVBQThCO0FBQzdCLFVBQUlDLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQk4sT0FBTyxDQUFDTyxNQUFuQyxDQUFoQjtBQUNBTixrQkFBWSxJQUFJRCxPQUFPLENBQUNRLFNBQVIsQ0FBa0JMLFNBQWxCLEVBQTZCQSxTQUFTLEdBQUcsQ0FBekMsQ0FBaEI7QUFDQTtBQUNELFdBQU9GLFlBQVA7QUFDQSxHQWhFWSxFQUFkLEM7O0FBa0VlL0IsSyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwZXJtaXNpb24gZnJvbSBcIi4uL2pzX3Nkay93YS1wZXJtaXNzaW9uL3Blcm1pc3Npb24uanNcIlxyXG5jb25zdCBVdGlscyA9IHtcclxuXHQvLyDlubPlj7DliIbnsbvmn6Xor6LmnYPpmZBcclxuXHRhc3luYyBlcXVpcG1lbnQoKSB7XHJcblx0XHQvLyDmn6XnnIvmnYPpmZBcclxuXHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykge1xyXG5cdFx0XHQvL+afpeeci+ebuOacuuadg+mZkFxyXG5cdFx0XHRsZXQgb2EgPSBhd2FpdCBVdGlscy5yZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24oXCJjYW1lcmFcIiwgJ2lvcycsICfnm7jmnLonKTtcclxuXHRcdFx0Ly/mn6XnnIvlvZXpn7PmnYPpmZBcclxuXHRcdFx0bGV0IG9iID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwicmVjb3JkXCIsICdpb3MnLCAn5b2V6Z+zJyk7XHJcblx0XHRcdGF3YWl0IHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdHRpdGxlOiBvYSArIFwiO1wiICsgb2IsXHJcblx0XHRcdFx0aWNvbjogXCJub25lXCIsXHJcblx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0Ly/mn6XnnIvnm7jmnLrmnYPpmZBcclxuXHRcdFx0bGV0IG9hID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQVwiLCAnYW5kcm9pZCcsICfnm7jmnLonKTtcclxuXHRcdFx0Ly/mn6XnnIvlvZXpn7PmnYPpmZBcclxuXHRcdFx0bGV0IG9iID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ09SRF9BVURJT1wiLCAnYW5kcm9pZCcsICflvZXpn7MnKTtcclxuXHRcdFx0YXdhaXQgdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6IG9hICsgXCI7XCIgKyBvYixcclxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIOafpeivouadg+mZkOWwgeijhVxyXG5cdGFzeW5jIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNpb25JRCwgdHlwZSwgbGliZSkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IDA7XHJcblx0XHRsZXQgc3RyU3RhdHVzID0gXCJcIjtcclxuXHRcdHR5cGUgPT0gJ2lvcycgPyByZXN1bHQgPSBhd2FpdCBwZXJtaXNpb24uanVkZ2VJb3NQZXJtaXNzaW9uKHBlcm1pc2lvbklEKSA6IHJlc3VsdCA9IGF3YWl0IHBlcm1pc2lvblxyXG5cdFx0XHQucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFxyXG5cdFx0XHRcdHBlcm1pc2lvbklEKTtcclxuXHRcdGlmIChyZXN1bHQgPT0gMSkge1xyXG5cdFx0XHRzdHJTdGF0dXMgPSBcIuW3suiOt+W+l+aOiOadgyzlj6/mraPluLjkvb/nlKhcIlxyXG5cdFx0fSBlbHNlIGlmIChyZXN1bHQgPT0gMCkge1xyXG5cdFx0XHRzdHJTdGF0dXMgPSBcIuacquiOt+W+l+aOiOadgyzml6Dms5Xkvb/nlKhcIlxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RyU3RhdHVzID0gXCLooqvmsLjkuYXmi5Lnu53mnYPpmZAs5peg5rOV5L2/55SoXCJcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gbGliZSArIHN0clN0YXR1c1xyXG5cdH0sXHJcblx0Ly8g6I635Y+W6auY5bqm5a695bqmXHJcblx0Z2V0V2lkdGhIZWlnaHQoKSB7XHJcblx0XHRsZXQgb2JqID0ge1xyXG5cdFx0XHR3aW5kb3dXaWR0aDogMCxcclxuXHRcdFx0d2luZG93SGVpZ2h0OiAwLFxyXG5cdFx0fVxyXG5cdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRvYmogPSBPYmplY3QuYXNzaWduKG9iaiwgcmVzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBvYmpcclxuXHR9LFxyXG5cdC8vIOeUn+aIkOmaj+acuuWtl+espuS4su+8iOaUr+aMgeiHquWumuS5ieWtl+espumVv+W6puWSjOeJueW+geWtl+espumbhuWQiO+8iVxyXG5cdHJhbmRvbUZuKGxlbiwgY2hhclNldCkge1xyXG5cdFx0Y2hhclNldCA9IGNoYXJTZXQgfHwgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcblx0XHRsZXQgcmFuZG9tU3RyaW5nID0gJyc7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdGxldCByYW5kb21Qb3ogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyU2V0Lmxlbmd0aCk7XHJcblx0XHRcdHJhbmRvbVN0cmluZyArPSBjaGFyU2V0LnN1YnN0cmluZyhyYW5kb21Qb3osIHJhbmRvbVBveiArIDEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJhbmRvbVN0cmluZztcclxuXHR9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!****************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/js_sdk/wa-permission/permission.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {/**\r\n * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启\r\n */\n\nvar isIos;\n\nisIos = plus.os.name == \"iOS\";\n\n\n// 判断推送权限是否开启\nfunction judgeIosPermissionPush() {\n  var result = false;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    __f__(\"log\", \"enabledTypes1:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:19\");\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启\", \" at js_sdk/wa-permission/permission.js:21\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:24\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启!\", \" at js_sdk/wa-permission/permission.js:30\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:33\");\n    }\n    __f__(\"log\", \"enabledTypes2:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:35\");\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\n// 判断定位权限是否开启\nfunction judgeIosPermissionLocation() {\n  var result = false;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var status = cllocationManger.authorizationStatus();\n  result = status != 2;\n  __f__(\"log\", \"定位权限开启：\" + result, \" at js_sdk/wa-permission/permission.js:48\");\n  // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation\n  /* var enable = cllocationManger.locationServicesEnabled();\r\n  var status = cllocationManger.authorizationStatus();\r\n  console.log(\"enable:\" + enable);\r\n  console.log(\"status:\" + status);\r\n  if (enable && status != 2) {\r\n  \tresult = true;\r\n  \tconsole.log(\"手机定位服务已开启且已授予定位权限\");\r\n  } else {\r\n  \tconsole.log(\"手机系统的定位没有打开或未给予定位权限\");\r\n  } */\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\n// 判断麦克风权限是否开启\nfunction judgeIosPermissionRecord() {\n  var result = false;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var permissionStatus = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + permissionStatus, \" at js_sdk/wa-permission/permission.js:70\");\n  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {\n    __f__(\"log\", \"麦克风权限没有开启\", \" at js_sdk/wa-permission/permission.js:72\");\n  } else {\n    result = true;\n    __f__(\"log\", \"麦克风权限已经开启\", \" at js_sdk/wa-permission/permission.js:75\");\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\n// 判断相机权限是否开启\nfunction judgeIosPermissionCamera() {\n  var result = false;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:86\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相机权限已经开启\", \" at js_sdk/wa-permission/permission.js:89\");\n  } else {\n    __f__(\"log\", \"相机权限没有开启\", \" at js_sdk/wa-permission/permission.js:91\");\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\n// 判断相册权限是否开启\nfunction judgeIosPermissionPhotoLibrary() {\n  var result = false;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:102\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相册权限已经开启\", \" at js_sdk/wa-permission/permission.js:105\");\n  } else {\n    __f__(\"log\", \"相册权限没有开启\", \" at js_sdk/wa-permission/permission.js:107\");\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\n// 判断通讯录权限是否开启\nfunction judgeIosPermissionContact() {\n  var result = false;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"通讯录权限已经开启\", \" at js_sdk/wa-permission/permission.js:120\");\n  } else {\n    __f__(\"log\", \"通讯录权限没有开启\", \" at js_sdk/wa-permission/permission.js:122\");\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\n// 判断日历权限是否开启\nfunction judgeIosPermissionCalendar() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"日历权限已经开启\", \" at js_sdk/wa-permission/permission.js:135\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at js_sdk/wa-permission/permission.js:137\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// 判断备忘录权限是否开启\nfunction judgeIosPermissionMemo() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at js_sdk/wa-permission/permission.js:150\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at js_sdk/wa-permission/permission.js:152\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// Android权限查询\nfunction requestAndroidPermission(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions(\n    [permissionID], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at js_sdk/wa-permission/permission.js:167\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at js_sdk/wa-permission/permission.js:172\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at js_sdk/wa-permission/permission.js:177\");\n        result = -1;\n      }\n      resolve(result);\n      // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限\n      // if (result != 1) {\n      // gotoAppPermissionSetting()\n      // }\n    },\n    function (error) {\n      __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at js_sdk/wa-permission/permission.js:187\");\n      resolve({\n        code: error.code,\n        message: error.message });\n\n    });\n\n  });\n}\n\n// 使用一个方法，根据参数判断权限\nfunction judgeIosPermission(permissionID) {\n  if (permissionID == \"location\") {\n    return judgeIosPermissionLocation();\n  } else if (permissionID == \"camera\") {\n    return judgeIosPermissionCamera();\n  } else if (permissionID == \"photoLibrary\") {\n    return judgeIosPermissionPhotoLibrary();\n  } else if (permissionID == \"record\") {\n    return judgeIosPermissionRecord();\n  } else if (permissionID == \"push\") {\n    return judgeIosPermissionPush();\n  } else if (permissionID == \"contact\") {\n    return judgeIosPermissionContact();\n  } else if (permissionID == \"calendar\") {\n    return judgeIosPermissionCalendar();\n  } else if (permissionID == \"memo\") {\n    return judgeIosPermissionMemo();\n  }\n  return false;\n}\n\n// 跳转到**应用**的权限页面\nfunction gotoAppPermissionSetting() {\n  if (isIos) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    // var setting2 = NSURL2.URLWithString(\"prefs:root=LOCATION_SERVICES\");\t\t\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    // console.log(plus.device.vendor);\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\n// 检查系统的设备服务是否开启\n// var checkSystemEnableLocation = async function () {\nfunction checkSystemEnableLocation() {\n  if (isIos) {\n    var result = false;\n    var cllocationManger = plus.ios.import(\"CLLocationManager\");\n    var result = cllocationManger.locationServicesEnabled();\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:253\");\n    plus.ios.deleteObject(cllocationManger);\n    return result;\n  } else {\n    var context = plus.android.importClass(\"android.content.Context\");\n    var locationManager = plus.android.importClass(\"android.location.LocationManager\");\n    var main = plus.android.runtimeMainActivity();\n    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);\n    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:262\");\n    return result;\n  }\n}\n\nmodule.exports = {\n  judgeIosPermission: judgeIosPermission,\n  requestAndroidPermission: requestAndroidPermission,\n  checkSystemEnableLocation: checkSystemEnableLocation,\n  gotoAppPermissionSetting: gotoAppPermissionSetting };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3dhLXBlcm1pc3Npb24vcGVybWlzc2lvbi5qcyJdLCJuYW1lcyI6WyJpc0lvcyIsInBsdXMiLCJvcyIsIm5hbWUiLCJqdWRnZUlvc1Blcm1pc3Npb25QdXNoIiwicmVzdWx0IiwiVUlBcHBsaWNhdGlvbiIsImlvcyIsImltcG9ydCIsImFwcCIsInNoYXJlZEFwcGxpY2F0aW9uIiwiZW5hYmxlZFR5cGVzIiwiY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNldHRpbmdzIiwicGx1c0dldEF0dHJpYnV0ZSIsImRlbGV0ZU9iamVjdCIsImVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcyIsImp1ZGdlSW9zUGVybWlzc2lvbkxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsInN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQiLCJhdmF1ZGlvc2Vzc2lvbiIsImF2YXVkaW8iLCJzaGFyZWRJbnN0YW5jZSIsInBlcm1pc3Npb25TdGF0dXMiLCJyZWNvcmRQZXJtaXNzaW9uIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JNZWRpYVR5cGUiLCJqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkiLCJQSFBob3RvTGlicmFyeSIsImp1ZGdlSW9zUGVybWlzc2lvbkNvbnRhY3QiLCJDTkNvbnRhY3RTdG9yZSIsImNuQXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIiLCJFS0V2ZW50U3RvcmUiLCJla0F1dGhTdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25NZW1vIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwicGVybWlzc2lvbklEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbmRyb2lkIiwicmVxdWVzdFBlcm1pc3Npb25zIiwicmVzdWx0T2JqIiwiaSIsImdyYW50ZWQiLCJsZW5ndGgiLCJncmFudGVkUGVybWlzc2lvbiIsImRlbmllZFByZXNlbnQiLCJkZW5pZWRQcmVzZW50UGVybWlzc2lvbiIsImRlbmllZEFsd2F5cyIsImRlbmllZEFsd2F5c1Blcm1pc3Npb24iLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwianVkZ2VJb3NQZXJtaXNzaW9uIiwiZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nIiwiYXBwbGljYXRpb24yIiwiTlNVUkwyIiwic2V0dGluZzIiLCJVUkxXaXRoU3RyaW5nIiwib3BlblVSTCIsIkludGVudCIsImltcG9ydENsYXNzIiwiU2V0dGluZ3MiLCJVcmkiLCJtYWluQWN0aXZpdHkiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiaW50ZW50Iiwic2V0QWN0aW9uIiwiQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MiLCJ1cmkiLCJmcm9tUGFydHMiLCJnZXRQYWNrYWdlTmFtZSIsInNldERhdGEiLCJzdGFydEFjdGl2aXR5IiwiY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwiY29udGV4dCIsImxvY2F0aW9uTWFuYWdlciIsIm1haW4iLCJtYWluU3ZyIiwiZ2V0U3lzdGVtU2VydmljZSIsIkxPQ0FUSU9OX1NFUlZJQ0UiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsIkdQU19QUk9WSURFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUEsSUFBSUEsS0FBSjs7QUFFQUEsS0FBSyxHQUFJQyxJQUFJLENBQUNDLEVBQUwsQ0FBUUMsSUFBUixJQUFnQixLQUF6Qjs7O0FBR0E7QUFDQSxTQUFTQyxzQkFBVCxHQUFrQztBQUNqQyxNQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUlDLGFBQWEsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVNDLE1BQVQsQ0FB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QVk3RSxNQUF4QjtBQUNBSixRQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQkcsZ0JBQXRCO0FBQ0EsV0FBT2IsTUFBUDtBQUNBLEdBUEQsTUFPTztBQUNOLFFBQUk4RSxPQUFPLEdBQUdsRixJQUFJLENBQUM2QyxPQUFMLENBQWFzQixXQUFiLENBQXlCLHlCQUF6QixDQUFkO0FBQ0EsUUFBSWdCLGVBQWUsR0FBR25GLElBQUksQ0FBQzZDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsa0NBQXpCLENBQXRCO0FBQ0EsUUFBSWlCLElBQUksR0FBR3BGLElBQUksQ0FBQzZDLE9BQUwsQ0FBYTBCLG1CQUFiLEVBQVg7QUFDQSxRQUFJYyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0JKLE9BQU8sQ0FBQ0ssZ0JBQTlCLENBQWQ7QUFDQSxRQUFJbkYsTUFBTSxHQUFHaUYsT0FBTyxDQUFDRyxpQkFBUixDQUEwQkwsZUFBZSxDQUFDTSxZQUExQyxDQUFiO0FBQ0EsaUJBQVksWUFBWXJGLE1BQXhCO0FBQ0EsV0FBT0EsTUFBUDtBQUNBO0FBQ0Q7O0FBRURzRixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJoQyxvQkFBa0IsRUFBRUEsa0JBREo7QUFFaEJuQiwwQkFBd0IsRUFBRUEsd0JBRlY7QUFHaEJ3QywyQkFBeUIsRUFBRUEseUJBSFg7QUFJaEJwQiwwQkFBd0IsRUFBRUEsd0JBSlYsRUFBakIsQyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmnKzmqKHlnZflsIHoo4XkuoZBbmRyb2lk44CBaU9T55qE5bqU55So5p2D6ZmQ5Yik5pat44CB5omT5byA5bqU55So5p2D6ZmQ6K6+572u55WM6Z2i44CB5Lul5Y+K5L2N572u57O757uf5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbiAqL1xyXG5cclxudmFyIGlzSW9zXHJcblxyXG5pc0lvcyA9IChwbHVzLm9zLm5hbWUgPT0gXCJpT1NcIilcclxuXHJcblxyXG4vLyDliKTmlq3mjqjpgIHmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFVJQXBwbGljYXRpb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJVSUFwcGxpY2F0aW9uXCIpO1xyXG5cdHZhciBhcHAgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0dmFyIGVuYWJsZWRUeXBlcyA9IDA7XHJcblx0aWYgKGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKSB7XHJcblx0XHR2YXIgc2V0dGluZ3MgPSBhcHAuY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncygpO1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gc2V0dGluZ3MucGx1c0dldEF0dHJpYnV0ZShcInR5cGVzXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMxOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHRcdGlmIChlbmFibGVkVHlwZXMgPT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuaOqOmAgeadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KHNldHRpbmdzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gYXBwLmVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcygpO1xyXG5cdFx0aWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5o6o6YCB5p2D6ZmQ5rKh5pyJ5byA5ZCvIVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMyOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KGFwcCk7XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFVJQXBwbGljYXRpb24pO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWumuS9jeadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25Mb2NhdGlvbigpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0cmVzdWx0ID0gKHN0YXR1cyAhPSAyKVxyXG5cdGNvbnNvbGUubG9nKFwi5a6a5L2N5p2D6ZmQ5byA5ZCv77yaXCIgKyByZXN1bHQpO1xyXG5cdC8vIOS7peS4i+S7o+eggeWIpOaWreS6huaJi+acuuiuvuWkh+eahOWumuS9jeaYr+WQpuWFs+mXre+8jOaOqOiNkOWPpuihjOS9v+eUqOaWueazlSBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uXHJcblx0LyogdmFyIGVuYWJsZSA9IGNsbG9jYXRpb25NYW5nZXIubG9jYXRpb25TZXJ2aWNlc0VuYWJsZWQoKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJlbmFibGU6XCIgKyBlbmFibGUpO1xyXG5cdGNvbnNvbGUubG9nKFwic3RhdHVzOlwiICsgc3RhdHVzKTtcclxuXHRpZiAoZW5hYmxlICYmIHN0YXR1cyAhPSAyKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLmiYvmnLrlrprkvY3mnI3liqHlt7LlvIDlkK/kuJTlt7LmjojkuojlrprkvY3mnYPpmZBcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5omL5py657O757uf55qE5a6a5L2N5rKh5pyJ5omT5byA5oiW5pyq57uZ5LqI5a6a5L2N5p2D6ZmQXCIpO1xyXG5cdH0gKi9cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat6bqm5YWL6aOO5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblJlY29yZCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGF2YXVkaW9zZXNzaW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiQVZBdWRpb1Nlc3Npb25cIik7XHJcblx0dmFyIGF2YXVkaW8gPSBhdmF1ZGlvc2Vzc2lvbi5zaGFyZWRJbnN0YW5jZSgpO1xyXG5cdHZhciBwZXJtaXNzaW9uU3RhdHVzID0gYXZhdWRpby5yZWNvcmRQZXJtaXNzaW9uKCk7XHJcblx0Y29uc29sZS5sb2coXCJwZXJtaXNzaW9uU3RhdHVzOlwiICsgcGVybWlzc2lvblN0YXR1cyk7XHJcblx0aWYgKHBlcm1pc3Npb25TdGF0dXMgPT0gMTY4NDM2OTAxNyB8fCBwZXJtaXNzaW9uU3RhdHVzID09IDE5NzAxNjg5NDgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi6bqm5YWL6aOO5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLpuqblhYvpo47mnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhdmF1ZGlvc2Vzc2lvbik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45py65p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvbkNhbWVyYSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIEFWQ2FwdHVyZURldmljZSA9IHBsdXMuaW9zLmltcG9ydChcIkFWQ2FwdHVyZURldmljZVwiKTtcclxuXHR2YXIgYXV0aFN0YXR1cyA9IEFWQ2FwdHVyZURldmljZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yTWVkaWFUeXBlKCd2aWRlJyk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45py65p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOacuuadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KEFWQ2FwdHVyZURldmljZSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45YaM5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblBob3RvTGlicmFyeSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFBIUGhvdG9MaWJyYXJ5ID0gcGx1cy5pb3MuaW1wb3J0KFwiUEhQaG90b0xpYnJhcnlcIik7XHJcblx0dmFyIGF1dGhTdGF0dXMgPSBQSFBob3RvTGlicmFyeS5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45YaM5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOWGjOadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFBIUGhvdG9MaWJyYXJ5KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3pgJrorq/lvZXmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ29udGFjdCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIENOQ29udGFjdFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiQ05Db250YWN0U3RvcmVcIik7XHJcblx0dmFyIGNuQXV0aFN0YXR1cyA9IENOQ29udGFjdFN0b3JlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlKDApO1xyXG5cdGlmIChjbkF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi6YCa6K6v5b2V5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIumAmuiur+W9leadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KENOQ29udGFjdFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3ml6XljobmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBFS0V2ZW50U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJFS0V2ZW50U3RvcmVcIik7XHJcblx0dmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcclxuXHRpZiAoZWtBdXRoU3RhdHVzID09IDMpIHtcclxuXHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIuaXpeWOhuadg+mZkOW3sue7j+W8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCLml6XljobmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChFS0V2ZW50U3RvcmUpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWkh+W/mOW9leadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKCkge1xyXG5cdHZhciByZXN1bHQgPSBmYWxzZTtcclxuXHR2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xyXG5cdHZhciBla0F1dGhTdGF0dXMgPSBFS0V2ZW50U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMSk7XHJcblx0aWYgKGVrQXV0aFN0YXR1cyA9PSAzKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLlpIflv5jlvZXmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5aSH5b+Y5b2V5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH1cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoRUtFdmVudFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBBbmRyb2lk5p2D6ZmQ5p+l6K+iXHJcbmZ1bmN0aW9uIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNzaW9uSUQpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0cGx1cy5hbmRyb2lkLnJlcXVlc3RQZXJtaXNzaW9ucyhcclxuXHRcdFx0W3Blcm1pc3Npb25JRF0sIC8vIOeQhuiuuuS4iuaUr+aMgeWkmuS4quadg+mZkOWQjOaXtuafpeivou+8jOS9huWunumZheS4iuacrOWHveaVsOWwgeijheWPquWkhOeQhuS6huS4gOS4quadg+mZkOeahOaDheWGteOAguaciemcgOimgeeahOWPr+iHquihjOaJqeWxleWwgeijhVxyXG5cdFx0XHRmdW5jdGlvbihyZXN1bHRPYmopIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gMDtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5ncmFudGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZ3JhbnRlZFBlcm1pc3Npb24gPSByZXN1bHRPYmouZ3JhbnRlZFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRQcmVzZW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24gPSByZXN1bHRPYmouZGVuaWVkUHJlc2VudFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRBbHdheXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBkZW5pZWRBbHdheXNQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZEFsd2F5c1tpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmsLjkuYXmi5Lnu53nlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkQWx3YXlzUGVybWlzc2lvbik7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSAtMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XHJcblx0XHRcdFx0Ly8g6Iul5omA6ZyA5p2D6ZmQ6KKr5ouS57udLOWImeaJk+W8gEFQUOiuvue9rueVjOmdoizlj6/ku6XlnKhBUFDorr7nva7nlYzpnaLmiZPlvIDnm7jlupTmnYPpmZBcclxuXHRcdFx0XHQvLyBpZiAocmVzdWx0ICE9IDEpIHtcclxuXHRcdFx0XHQvLyBnb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKVxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn55Sz6K+35p2D6ZmQ6ZSZ6K+v77yaJyArIGVycm9yLmNvZGUgKyBcIiA9IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdFx0cmVzb2x2ZSh7XHJcblx0XHRcdFx0XHRjb2RlOiBlcnJvci5jb2RlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDkvb/nlKjkuIDkuKrmlrnms5XvvIzmoLnmja7lj4LmlbDliKTmlq3mnYPpmZBcclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uKHBlcm1pc3Npb25JRCkge1xyXG5cdGlmIChwZXJtaXNzaW9uSUQgPT0gXCJsb2NhdGlvblwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uTG9jYXRpb24oKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwiY2FtZXJhXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYW1lcmEoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicGhvdG9MaWJyYXJ5XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicmVjb3JkXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicHVzaFwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25Db250YWN0KClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcImNhbGVuZGFyXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYWxlbmRhcigpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJtZW1vXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKClcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyDot7PovazliLAqKuW6lOeUqCoq55qE5p2D6ZmQ6aG16Z2iXHJcbmZ1bmN0aW9uIGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpIHtcclxuXHRpZiAoaXNJb3MpIHtcclxuXHRcdHZhciBVSUFwcGxpY2F0aW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlBcHBsaWNhdGlvblwiKTtcclxuXHRcdHZhciBhcHBsaWNhdGlvbjIgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0XHR2YXIgTlNVUkwyID0gcGx1cy5pb3MuaW1wb3J0KFwiTlNVUkxcIik7XHJcblx0XHQvLyB2YXIgc2V0dGluZzIgPSBOU1VSTDIuVVJMV2l0aFN0cmluZyhcInByZWZzOnJvb3Q9TE9DQVRJT05fU0VSVklDRVNcIik7XHRcdFxyXG5cdFx0dmFyIHNldHRpbmcyID0gTlNVUkwyLlVSTFdpdGhTdHJpbmcoXCJhcHAtc2V0dGluZ3M6XCIpO1xyXG5cdFx0YXBwbGljYXRpb24yLm9wZW5VUkwoc2V0dGluZzIpO1xyXG5cclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5nMik7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoTlNVUkwyKTtcclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhcHBsaWNhdGlvbjIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhwbHVzLmRldmljZS52ZW5kb3IpO1xyXG5cdFx0dmFyIEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5JbnRlbnRcIik7XHJcblx0XHR2YXIgU2V0dGluZ3MgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnByb3ZpZGVyLlNldHRpbmdzXCIpO1xyXG5cdFx0dmFyIFVyaSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubmV0LlVyaVwiKTtcclxuXHRcdHZhciBtYWluQWN0aXZpdHkgPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIGludGVudCA9IG5ldyBJbnRlbnQoKTtcclxuXHRcdGludGVudC5zZXRBY3Rpb24oU2V0dGluZ3MuQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MpO1xyXG5cdFx0dmFyIHVyaSA9IFVyaS5mcm9tUGFydHMoXCJwYWNrYWdlXCIsIG1haW5BY3Rpdml0eS5nZXRQYWNrYWdlTmFtZSgpLCBudWxsKTtcclxuXHRcdGludGVudC5zZXREYXRhKHVyaSk7XHJcblx0XHRtYWluQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xyXG5cdH1cclxufVxyXG5cclxuLy8g5qOA5p+l57O757uf55qE6K6+5aSH5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbi8vIHZhciBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5mdW5jdGlvbiBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uKCkge1xyXG5cdGlmIChpc0lvcykge1xyXG5cdFx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHRcdHZhciByZXN1bHQgPSBjbGxvY2F0aW9uTWFuZ2VyLmxvY2F0aW9uU2VydmljZXNFbmFibGVkKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIuezu+e7n+WumuS9jeW8gOWQrzpcIiArIHJlc3VsdCk7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5Db250ZXh0XCIpO1xyXG5cdFx0dmFyIGxvY2F0aW9uTWFuYWdlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubG9jYXRpb24uTG9jYXRpb25NYW5hZ2VyXCIpO1xyXG5cdFx0dmFyIG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIG1haW5TdnIgPSBtYWluLmdldFN5c3RlbVNlcnZpY2UoY29udGV4dC5MT0NBVElPTl9TRVJWSUNFKTtcclxuXHRcdHZhciByZXN1bHQgPSBtYWluU3ZyLmlzUHJvdmlkZXJFbmFibGVkKGxvY2F0aW9uTWFuYWdlci5HUFNfUFJPVklERVIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLns7vnu5/lrprkvY3lvIDlkK86XCIgKyByZXN1bHQpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdFxyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0anVkZ2VJb3NQZXJtaXNzaW9uOiBqdWRnZUlvc1Blcm1pc3Npb24sXHJcblx0cmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uOiByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24sXHJcblx0Y2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbjogY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbixcclxuXHRnb3RvQXBwUGVybWlzc2lvblNldHRpbmc6IGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZ1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*******************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/components/my-loading/my-loading.nvue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-loading.nvue?vue&type=template&id=0e75eaba& */ 21);\n/* harmony import */ var _my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-loading.nvue?vue&type=script&lang=js& */ 23);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./my-loading.nvue?vue&type=style&index=0&lang=scss& */ 25).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./my-loading.nvue?vue&type=style&index=0&lang=scss& */ 25).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"dee40f08\",\n  false,\n  _my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/my-loading/my-loading.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0g7QUFDeEg7QUFDK0Q7QUFDTDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDZEQUFxRDtBQUN6RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNkRBQXFEO0FBQzlHOztBQUVBOztBQUVBO0FBQ2lMO0FBQ2pMLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbXktbG9hZGluZy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlNzVlYWJhJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbXktbG9hZGluZy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9teS1sb2FkaW5nLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9teS1sb2FkaW5nLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL215LWxvYWRpbmcubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZGVlNDBmMDhcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9teS1sb2FkaW5nL215LWxvYWRpbmcubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!**************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/components/my-loading/my-loading.nvue?vue&type=template&id=0e75eaba& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-loading.nvue?vue&type=template&id=0e75eaba& */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_template_id_0e75eaba___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/components/my-loading/my-loading.nvue?vue&type=template&id=0e75eaba& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["loading"], style: "margin-top: " + _vm.mt + "rpx;" },
    [
      _c("view", {
        ref: "obj1",
        staticClass: ["obj"],
        style: "background-color: " + _vm.color + ";"
      }),
      _c("view", {
        ref: "obj2",
        staticClass: ["obj"],
        style:
          "margin-left: 12rpx; margin-right: 12rpx; background-color: " +
          _vm.color +
          ";"
      }),
      _c("view", {
        ref: "obj3",
        staticClass: ["obj"],
        style: "background-color: " + _vm.color + ";"
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!********************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/components/my-loading/my-loading.nvue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-loading.nvue?vue&type=script&lang=js& */ 24);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9kLENBQWdCLCtjQUFHLEVBQUMiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbXktbG9hZGluZy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbXktbG9hZGluZy5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/components/my-loading/my-loading.nvue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //\n//\n//\n//\n//\n//\n//\n//\n\nvar animation = weex.requireModule('animation');var _default =\n\n{\n  name: 'my-loading',\n  props: {\n    // 小球颜色\n    color: {\n      type: String,\n      default: '#0081FF' },\n\n    // 距离顶部高度\n    mt: {\n      type: [String, Number],\n      default: 40 } },\n\n\n  created: function created() {var _this = this;\n    // 定时器执行前，先执行一次，让整个动画过程更流畅\n    setTimeout(function () {\n      _this.createAnimation();\n    }, 50);\n    // 执行定时器\n    setInterval(function () {\n      _this.createAnimation();\n    }, 1100);\n  },\n  methods: {\n    createAnimation: function createAnimation() {var _this2 = this;\n      this.run(this.$refs.obj1);\n      setTimeout(function () {\n        _this2.run(_this2.$refs.obj2);\n      }, 300);\n      setTimeout(function () {\n        _this2.run(_this2.$refs.obj3);\n      }, 600);\n    },\n    transition: function transition(el, options, duration) {var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n      return new Promise(function (resolve) {\n        animation.transition(el, _objectSpread({\n          duration: duration,\n          delay: delay,\n          timingFunction: 'linear',\n          needLayout: false },\n        options),\n        resolve);\n      });\n    },\n    run: function run(el) {var _this3 = this;\n      this.transition(el, {\n        styles: {\n          transform: 'scale(0.5)' } },\n\n      500, 0).then(function () {\n        _this3.transition(el, {\n          styles: {\n            transform: 'scale(1)' } },\n\n        500, 0);\n      });\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9teS1sb2FkaW5nL215LWxvYWRpbmcubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFTQSxnRDs7QUFFQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQUZBOztBQU1BO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLGlCQUZBLEVBUEEsRUFGQTs7O0FBY0EsU0FkQSxxQkFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsRUFFQSxFQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxFQUVBLElBRkE7QUFHQSxHQXZCQTtBQXdCQTtBQUNBLG1CQURBLDZCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQVRBO0FBVUEsY0FWQSxzQkFVQSxFQVZBLEVBVUEsT0FWQSxFQVVBLFFBVkEsRUFVQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLHNCQUZBO0FBR0Esa0NBSEE7QUFJQSwyQkFKQTtBQUtBLGVBTEE7QUFNQSxlQU5BO0FBT0EsT0FSQTtBQVNBLEtBcEJBO0FBcUJBLE9BckJBLGVBcUJBLEVBckJBLEVBcUJBO0FBQ0E7QUFDQTtBQUNBLGlDQURBLEVBREE7O0FBSUEsU0FKQSxFQUlBLENBSkEsRUFJQSxJQUpBLENBSUE7QUFDQTtBQUNBO0FBQ0EsaUNBREEsRUFEQTs7QUFJQSxXQUpBLEVBSUEsQ0FKQTtBQUtBLE9BVkE7QUFXQSxLQWpDQSxFQXhCQSxFIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibG9hZGluZ1wiIDpzdHlsZT1cImBtYXJnaW4tdG9wOiAke210fXJweDtgXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm9ialwiIDpzdHlsZT1cImBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtgXCIgcmVmPVwib2JqMVwiPjwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwib2JqXCIgOnN0eWxlPVwiYG1hcmdpbi1sZWZ0OiAxMnJweDsgbWFyZ2luLXJpZ2h0OiAxMnJweDsgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn07YFwiIHJlZj1cIm9iajJcIj48L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm9ialwiIDpzdHlsZT1cImBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtgXCIgcmVmPVwib2JqM1wiPjwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHdlZXgucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJylcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ215LWxvYWRpbmcnLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Ly8g5bCP55CD6aKc6ImyXHJcblx0XHRcdGNvbG9yOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcjMDA4MUZGJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDot53nprvpobbpg6jpq5jluqZcclxuXHRcdFx0bXQ6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDQwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyDlrprml7blmajmiafooYzliY3vvIzlhYjmiafooYzkuIDmrKHvvIzorqnmlbTkuKrliqjnlLvov4fnqIvmm7TmtYHnlYVcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jcmVhdGVBbmltYXRpb24oKVxyXG5cdFx0XHR9LCA1MClcclxuXHRcdFx0Ly8g5omn6KGM5a6a5pe25ZmoXHJcblx0XHRcdHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZUFuaW1hdGlvbigpXHJcblx0XHRcdH0sIDExMDApXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjcmVhdGVBbmltYXRpb24oKSB7XHJcblx0XHRcdFx0dGhpcy5ydW4odGhpcy4kcmVmcy5vYmoxKVxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ydW4odGhpcy4kcmVmcy5vYmoyKVxyXG5cdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucnVuKHRoaXMuJHJlZnMub2JqMylcclxuXHRcdFx0XHR9LCA2MDApXHJcblx0XHRcdH0sXHJcblx0XHRcdHRyYW5zaXRpb24oZWwsIG9wdGlvbnMsIGR1cmF0aW9uLCBkZWxheSA9IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLCB7XHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uLFxyXG5cdFx0XHRcdFx0XHRkZWxheSxcclxuXHRcdFx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxyXG5cdFx0XHRcdFx0XHRuZWVkTGF5b3V0OiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0Li4ub3B0aW9ucyxcclxuXHRcdFx0XHRcdH0sIHJlc29sdmUpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0cnVuKGVsKSB7XHJcblx0XHRcdFx0dGhpcy50cmFuc2l0aW9uKGVsLCB7XHJcblx0XHRcdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiAnc2NhbGUoMC41KSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCA1MDAsIDApLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50cmFuc2l0aW9uKGVsLCB7XHJcblx0XHRcdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCA1MDAsIDApXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQubG9hZGluZyB7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQub2JqIHtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*****************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/components/my-loading/my-loading.nvue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-loading.nvue?vue&type=style&index=0&lang=scss& */ 26);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_loading_nvue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/components/my-loading/my-loading.nvue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "loading": {
    "width": "750rpx",
    "height": "30rpx",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "obj": {
    "width": "30rpx",
    "height": "30rpx",
    "borderRadius": "100rpx"
  },
  "@VERSION": 2
}

/***/ }),
/* 27 */
/*!**********************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/utils/classes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 推流封装\nfunction _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}\nObject.defineProperty(exports, \"__esModule\", {\n  value: true });\n\n\nexports.LiveTranscoding = exports.Color = exports.TranscodingUser = exports.RtcImage = void 0;\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true });\n\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}var\n\nLiveTranscoding =\n\nfunction LiveTranscoding(transcodingUsers, params) {_classCallCheck(this, LiveTranscoding);\n  _defineProperty(this, \"width\", void 0);\n\n  _defineProperty(this, \"height\", void 0);\n\n  _defineProperty(this, \"videoBitrate\", void 0);\n\n  _defineProperty(this, \"videoFramerate\", void 0);\n\n  _defineProperty(this, \"lowLatency\", void 0);\n\n  _defineProperty(this, \"videoGop\", void 0);\n\n  _defineProperty(this, \"watermark\", void 0);\n\n  _defineProperty(this, \"backgroundImage\", void 0);\n\n  _defineProperty(this, \"audioSampleRate\", void 0);\n\n  _defineProperty(this, \"audioBitrate\", void 0);\n\n  _defineProperty(this, \"audioChannels\", void 0);\n\n  _defineProperty(this, \"audioCodecProfile\", void 0);\n\n  _defineProperty(this, \"videoCodecProfile\", void 0);\n\n  _defineProperty(this, \"backgroundColor\", void 0);\n\n  _defineProperty(this, \"userConfigExtraInfo\", void 0);\n\n  _defineProperty(this, \"transcodingUsers\", void 0);\n\n  if (params) {\n    this.width = params.width;\n    this.height = params.height;\n    this.videoBitrate = params.videoBitrate;\n    this.videoFramerate = params.videoFramerate;\n    this.lowLatency = params.lowLatency;\n    this.videoGop = params.videoGop;\n    this.watermark = params.watermark;\n    this.backgroundImage = params.backgroundImage;\n    this.audioSampleRate = params.audioSampleRate;\n    this.audioBitrate = params.audioBitrate;\n    this.audioChannels = params.audioChannels;\n    this.audioCodecProfile = params.audioCodecProfile;\n    this.videoCodecProfile = params.videoCodecProfile;\n    this.backgroundColor = params.backgroundColor;\n    this.userConfigExtraInfo = params.userConfigExtraInfo;\n  }\n\n  this.transcodingUsers = transcodingUsers;\n};\n\n\nexports.LiveTranscoding = LiveTranscoding;var\n\nTranscodingUser =\n\nfunction TranscodingUser(uid, params) {_classCallCheck(this, TranscodingUser);\n  _defineProperty(this, \"uid\", void 0);\n\n  _defineProperty(this, \"x\", void 0);\n\n  _defineProperty(this, \"y\", void 0);\n\n  _defineProperty(this, \"width\", void 0);\n\n  _defineProperty(this, \"height\", void 0);\n\n  _defineProperty(this, \"zOrder\", void 0);\n\n  _defineProperty(this, \"alpha\", void 0);\n\n  _defineProperty(this, \"audioChannel\", void 0);\n\n  this.uid = uid;\n\n  if (params) {\n    this.x = params.x;\n    this.y = params.y;\n    this.width = params.width;\n    this.height = params.height;\n    this.zOrder = params.zOrder;\n    this.alpha = params.alpha;\n    this.audioChannel = params.audioChannel;\n  }\n};\n\n\nexports.TranscodingUser = TranscodingUser;var\n\nColor =\n\nfunction Color(red, green, blue) {_classCallCheck(this, Color);\n  _defineProperty(this, \"red\", void 0);\n\n  _defineProperty(this, \"green\", void 0);\n\n  _defineProperty(this, \"blue\", void 0);\n\n  this.red = red;\n  this.green = green;\n  this.blue = blue;\n};\n\n\nexports.Color = Color;var\n\nRtcImage =\n\nfunction RtcImage(url, params) {_classCallCheck(this, RtcImage);\n  _defineProperty(this, \"url\", void 0);\n\n  _defineProperty(this, \"x\", void 0);\n\n  _defineProperty(this, \"y\", void 0);\n\n  _defineProperty(this, \"width\", void 0);\n\n  _defineProperty(this, \"height\", void 0);\n\n  this.url = url;\n\n  if (params) {\n    this.x = params.x;\n    this.y = params.y;\n    this.width = params.width;\n    this.height = params.height;\n  }\n};\n\n\nexports.RtcImage = RtcImage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvY2xhc3Nlcy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkxpdmVUcmFuc2NvZGluZyIsIkNvbG9yIiwiVHJhbnNjb2RpbmdVc2VyIiwiUnRjSW1hZ2UiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ0cmFuc2NvZGluZ1VzZXJzIiwicGFyYW1zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWRlb0JpdHJhdGUiLCJ2aWRlb0ZyYW1lcmF0ZSIsImxvd0xhdGVuY3kiLCJ2aWRlb0dvcCIsIndhdGVybWFyayIsImJhY2tncm91bmRJbWFnZSIsImF1ZGlvU2FtcGxlUmF0ZSIsImF1ZGlvQml0cmF0ZSIsImF1ZGlvQ2hhbm5lbHMiLCJhdWRpb0NvZGVjUHJvZmlsZSIsInZpZGVvQ29kZWNQcm9maWxlIiwiYmFja2dyb3VuZENvbG9yIiwidXNlckNvbmZpZ0V4dHJhSW5mbyIsInVpZCIsIngiLCJ5Iiwiek9yZGVyIiwiYWxwaGEiLCJhdWRpb0NoYW5uZWwiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJ1cmwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzVDQyxPQUFLLEVBQUUsSUFEcUMsRUFBN0M7OztBQUlBRCxPQUFPLENBQUNFLGVBQVIsR0FBMEJGLE9BQU8sQ0FBQ0csS0FBUixHQUFnQkgsT0FBTyxDQUFDSSxlQUFSLEdBQTBCSixPQUFPLENBQUNLLFFBQVIsR0FBbUIsS0FBSyxDQUE1Rjs7QUFFQSxTQUFTQyxlQUFULENBQXlCQyxHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNQLEtBQW5DLEVBQTBDO0FBQ3pDLE1BQUlPLEdBQUcsSUFBSUQsR0FBWCxFQUFnQjtBQUNmVCxVQUFNLENBQUNDLGNBQVAsQ0FBc0JRLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUMvQlAsV0FBSyxFQUFFQSxLQUR3QjtBQUUvQlEsZ0JBQVUsRUFBRSxJQUZtQjtBQUcvQkMsa0JBQVksRUFBRSxJQUhpQjtBQUkvQkMsY0FBUSxFQUFFLElBSnFCLEVBQWhDOztBQU1BLEdBUEQsTUFPTztBQUNOSixPQUFHLENBQUNDLEdBQUQsQ0FBSCxHQUFXUCxLQUFYO0FBQ0E7QUFDRCxTQUFPTSxHQUFQO0FBQ0EsQzs7QUFFS0wsZTs7QUFFTCx5QkFBWVUsZ0JBQVosRUFBOEJDLE1BQTlCLEVBQXNDO0FBQ3JDUCxpQkFBZSxDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLEtBQUssQ0FBckIsQ0FBZjs7QUFFQUEsaUJBQWUsQ0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixLQUFLLENBQXRCLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLGNBQVAsRUFBdUIsS0FBSyxDQUE1QixDQUFmOztBQUVBQSxpQkFBZSxDQUFDLElBQUQsRUFBTyxnQkFBUCxFQUF5QixLQUFLLENBQTlCLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLFlBQVAsRUFBcUIsS0FBSyxDQUExQixDQUFmOztBQUVBQSxpQkFBZSxDQUFDLElBQUQsRUFBTyxVQUFQLEVBQW1CLEtBQUssQ0FBeEIsQ0FBZjs7QUFFQUEsaUJBQWUsQ0FBQyxJQUFELEVBQU8sV0FBUCxFQUFvQixLQUFLLENBQXpCLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLGlCQUFQLEVBQTBCLEtBQUssQ0FBL0IsQ0FBZjs7QUFFQUEsaUJBQWUsQ0FBQyxJQUFELEVBQU8saUJBQVAsRUFBMEIsS0FBSyxDQUEvQixDQUFmOztBQUVBQSxpQkFBZSxDQUFDLElBQUQsRUFBTyxjQUFQLEVBQXVCLEtBQUssQ0FBNUIsQ0FBZjs7QUFFQUEsaUJBQWUsQ0FBQyxJQUFELEVBQU8sZUFBUCxFQUF3QixLQUFLLENBQTdCLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLG1CQUFQLEVBQTRCLEtBQUssQ0FBakMsQ0FBZjs7QUFFQUEsaUJBQWUsQ0FBQyxJQUFELEVBQU8sbUJBQVAsRUFBNEIsS0FBSyxDQUFqQyxDQUFmOztBQUVBQSxpQkFBZSxDQUFDLElBQUQsRUFBTyxpQkFBUCxFQUEwQixLQUFLLENBQS9CLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLHFCQUFQLEVBQThCLEtBQUssQ0FBbkMsQ0FBZjs7QUFFQUEsaUJBQWUsQ0FBQyxJQUFELEVBQU8sa0JBQVAsRUFBMkIsS0FBSyxDQUFoQyxDQUFmOztBQUVBLE1BQUlPLE1BQUosRUFBWTtBQUNYLFNBQUtDLEtBQUwsR0FBYUQsTUFBTSxDQUFDQyxLQUFwQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0YsTUFBTSxDQUFDRSxNQUFyQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JILE1BQU0sQ0FBQ0csWUFBM0I7QUFDQSxTQUFLQyxjQUFMLEdBQXNCSixNQUFNLENBQUNJLGNBQTdCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkwsTUFBTSxDQUFDSyxVQUF6QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JOLE1BQU0sQ0FBQ00sUUFBdkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCUCxNQUFNLENBQUNPLFNBQXhCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QlIsTUFBTSxDQUFDUSxlQUE5QjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJULE1BQU0sQ0FBQ1MsZUFBOUI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CVixNQUFNLENBQUNVLFlBQTNCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQlgsTUFBTSxDQUFDVyxhQUE1QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCWixNQUFNLENBQUNZLGlCQUFoQztBQUNBLFNBQUtDLGlCQUFMLEdBQXlCYixNQUFNLENBQUNhLGlCQUFoQztBQUNBLFNBQUtDLGVBQUwsR0FBdUJkLE1BQU0sQ0FBQ2MsZUFBOUI7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQmYsTUFBTSxDQUFDZSxtQkFBbEM7QUFDQTs7QUFFRCxPQUFLaEIsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLEM7OztBQUdGWixPQUFPLENBQUNFLGVBQVIsR0FBMEJBLGVBQTFCLEM7O0FBRU1FLGU7O0FBRUwseUJBQVl5QixHQUFaLEVBQWlCaEIsTUFBakIsRUFBeUI7QUFDeEJQLGlCQUFlLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxLQUFLLENBQW5CLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxLQUFLLENBQWpCLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxLQUFLLENBQWpCLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsS0FBSyxDQUFyQixDQUFmOztBQUVBQSxpQkFBZSxDQUFDLElBQUQsRUFBTyxRQUFQLEVBQWlCLEtBQUssQ0FBdEIsQ0FBZjs7QUFFQUEsaUJBQWUsQ0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixLQUFLLENBQXRCLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsS0FBSyxDQUFyQixDQUFmOztBQUVBQSxpQkFBZSxDQUFDLElBQUQsRUFBTyxjQUFQLEVBQXVCLEtBQUssQ0FBNUIsQ0FBZjs7QUFFQSxPQUFLdUIsR0FBTCxHQUFXQSxHQUFYOztBQUVBLE1BQUloQixNQUFKLEVBQVk7QUFDWCxTQUFLaUIsQ0FBTCxHQUFTakIsTUFBTSxDQUFDaUIsQ0FBaEI7QUFDQSxTQUFLQyxDQUFMLEdBQVNsQixNQUFNLENBQUNrQixDQUFoQjtBQUNBLFNBQUtqQixLQUFMLEdBQWFELE1BQU0sQ0FBQ0MsS0FBcEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNGLE1BQU0sQ0FBQ0UsTUFBckI7QUFDQSxTQUFLaUIsTUFBTCxHQUFjbkIsTUFBTSxDQUFDbUIsTUFBckI7QUFDQSxTQUFLQyxLQUFMLEdBQWFwQixNQUFNLENBQUNvQixLQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JyQixNQUFNLENBQUNxQixZQUEzQjtBQUNBO0FBQ0QsQzs7O0FBR0ZsQyxPQUFPLENBQUNJLGVBQVIsR0FBMEJBLGVBQTFCLEM7O0FBRU1ELEs7O0FBRUwsZUFBWWdDLEdBQVosRUFBaUJDLEtBQWpCLEVBQXdCQyxJQUF4QixFQUE4QjtBQUM3Qi9CLGlCQUFlLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxLQUFLLENBQW5CLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsS0FBSyxDQUFyQixDQUFmOztBQUVBQSxpQkFBZSxDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsS0FBSyxDQUFwQixDQUFmOztBQUVBLE9BQUs2QixHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxDOzs7QUFHRnJDLE9BQU8sQ0FBQ0csS0FBUixHQUFnQkEsS0FBaEIsQzs7QUFFTUUsUTs7QUFFTCxrQkFBWWlDLEdBQVosRUFBaUJ6QixNQUFqQixFQUF5QjtBQUN4QlAsaUJBQWUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQUssQ0FBbkIsQ0FBZjs7QUFFQUEsaUJBQWUsQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLEtBQUssQ0FBakIsQ0FBZjs7QUFFQUEsaUJBQWUsQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLEtBQUssQ0FBakIsQ0FBZjs7QUFFQUEsaUJBQWUsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixLQUFLLENBQXJCLENBQWY7O0FBRUFBLGlCQUFlLENBQUMsSUFBRCxFQUFPLFFBQVAsRUFBaUIsS0FBSyxDQUF0QixDQUFmOztBQUVBLE9BQUtnQyxHQUFMLEdBQVdBLEdBQVg7O0FBRUEsTUFBSXpCLE1BQUosRUFBWTtBQUNYLFNBQUtpQixDQUFMLEdBQVNqQixNQUFNLENBQUNpQixDQUFoQjtBQUNBLFNBQUtDLENBQUwsR0FBU2xCLE1BQU0sQ0FBQ2tCLENBQWhCO0FBQ0EsU0FBS2pCLEtBQUwsR0FBYUQsTUFBTSxDQUFDQyxLQUFwQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0YsTUFBTSxDQUFDRSxNQUFyQjtBQUNBO0FBQ0QsQzs7O0FBR0ZmLE9BQU8sQ0FBQ0ssUUFBUixHQUFtQkEsUUFBbkIiLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDmjqjmtYHlsIHoo4VcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG5cdHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5cclxuZXhwb3J0cy5MaXZlVHJhbnNjb2RpbmcgPSBleHBvcnRzLkNvbG9yID0gZXhwb3J0cy5UcmFuc2NvZGluZ1VzZXIgPSBleHBvcnRzLlJ0Y0ltYWdlID0gdm9pZCAwO1xyXG5cclxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xyXG5cdGlmIChrZXkgaW4gb2JqKSB7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuXHRcdFx0dmFsdWU6IHZhbHVlLFxyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXHJcblx0XHRcdHdyaXRhYmxlOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0b2JqW2tleV0gPSB2YWx1ZTtcclxuXHR9XHJcblx0cmV0dXJuIG9iajtcclxufVxyXG5cclxuY2xhc3MgTGl2ZVRyYW5zY29kaW5nIHtcclxuXHJcblx0Y29uc3RydWN0b3IodHJhbnNjb2RpbmdVc2VycywgcGFyYW1zKSB7XHJcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3aWR0aFwiLCB2b2lkIDApO1xyXG5cclxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhlaWdodFwiLCB2b2lkIDApO1xyXG5cclxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInZpZGVvQml0cmF0ZVwiLCB2b2lkIDApO1xyXG5cclxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInZpZGVvRnJhbWVyYXRlXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwibG93TGF0ZW5jeVwiLCB2b2lkIDApO1xyXG5cclxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInZpZGVvR29wXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwid2F0ZXJtYXJrXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYmFja2dyb3VuZEltYWdlXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXVkaW9TYW1wbGVSYXRlXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXVkaW9CaXRyYXRlXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXVkaW9DaGFubmVsc1wiLCB2b2lkIDApO1xyXG5cclxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImF1ZGlvQ29kZWNQcm9maWxlXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwidmlkZW9Db2RlY1Byb2ZpbGVcIiwgdm9pZCAwKTtcclxuXHJcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgdm9pZCAwKTtcclxuXHJcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1c2VyQ29uZmlnRXh0cmFJbmZvXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwidHJhbnNjb2RpbmdVc2Vyc1wiLCB2b2lkIDApO1xyXG5cclxuXHRcdGlmIChwYXJhbXMpIHtcclxuXHRcdFx0dGhpcy53aWR0aCA9IHBhcmFtcy53aWR0aDtcclxuXHRcdFx0dGhpcy5oZWlnaHQgPSBwYXJhbXMuaGVpZ2h0O1xyXG5cdFx0XHR0aGlzLnZpZGVvQml0cmF0ZSA9IHBhcmFtcy52aWRlb0JpdHJhdGU7XHJcblx0XHRcdHRoaXMudmlkZW9GcmFtZXJhdGUgPSBwYXJhbXMudmlkZW9GcmFtZXJhdGU7XHJcblx0XHRcdHRoaXMubG93TGF0ZW5jeSA9IHBhcmFtcy5sb3dMYXRlbmN5O1xyXG5cdFx0XHR0aGlzLnZpZGVvR29wID0gcGFyYW1zLnZpZGVvR29wO1xyXG5cdFx0XHR0aGlzLndhdGVybWFyayA9IHBhcmFtcy53YXRlcm1hcms7XHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZEltYWdlID0gcGFyYW1zLmJhY2tncm91bmRJbWFnZTtcclxuXHRcdFx0dGhpcy5hdWRpb1NhbXBsZVJhdGUgPSBwYXJhbXMuYXVkaW9TYW1wbGVSYXRlO1xyXG5cdFx0XHR0aGlzLmF1ZGlvQml0cmF0ZSA9IHBhcmFtcy5hdWRpb0JpdHJhdGU7XHJcblx0XHRcdHRoaXMuYXVkaW9DaGFubmVscyA9IHBhcmFtcy5hdWRpb0NoYW5uZWxzO1xyXG5cdFx0XHR0aGlzLmF1ZGlvQ29kZWNQcm9maWxlID0gcGFyYW1zLmF1ZGlvQ29kZWNQcm9maWxlO1xyXG5cdFx0XHR0aGlzLnZpZGVvQ29kZWNQcm9maWxlID0gcGFyYW1zLnZpZGVvQ29kZWNQcm9maWxlO1xyXG5cdFx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5iYWNrZ3JvdW5kQ29sb3I7XHJcblx0XHRcdHRoaXMudXNlckNvbmZpZ0V4dHJhSW5mbyA9IHBhcmFtcy51c2VyQ29uZmlnRXh0cmFJbmZvO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudHJhbnNjb2RpbmdVc2VycyA9IHRyYW5zY29kaW5nVXNlcnM7XHJcblx0fVxyXG5cclxufVxyXG5leHBvcnRzLkxpdmVUcmFuc2NvZGluZyA9IExpdmVUcmFuc2NvZGluZztcclxuXHJcbmNsYXNzIFRyYW5zY29kaW5nVXNlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHVpZCwgcGFyYW1zKSB7XHJcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1aWRcIiwgdm9pZCAwKTtcclxuXHJcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ4XCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwieVwiLCB2b2lkIDApO1xyXG5cclxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpZHRoXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGVpZ2h0XCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiek9yZGVyXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWxwaGFcIiwgdm9pZCAwKTtcclxuXHJcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdWRpb0NoYW5uZWxcIiwgdm9pZCAwKTtcclxuXHJcblx0XHR0aGlzLnVpZCA9IHVpZDtcclxuXHJcblx0XHRpZiAocGFyYW1zKSB7XHJcblx0XHRcdHRoaXMueCA9IHBhcmFtcy54O1xyXG5cdFx0XHR0aGlzLnkgPSBwYXJhbXMueTtcclxuXHRcdFx0dGhpcy53aWR0aCA9IHBhcmFtcy53aWR0aDtcclxuXHRcdFx0dGhpcy5oZWlnaHQgPSBwYXJhbXMuaGVpZ2h0O1xyXG5cdFx0XHR0aGlzLnpPcmRlciA9IHBhcmFtcy56T3JkZXI7XHJcblx0XHRcdHRoaXMuYWxwaGEgPSBwYXJhbXMuYWxwaGE7XHJcblx0XHRcdHRoaXMuYXVkaW9DaGFubmVsID0gcGFyYW1zLmF1ZGlvQ2hhbm5lbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydHMuVHJhbnNjb2RpbmdVc2VyID0gVHJhbnNjb2RpbmdVc2VyO1xyXG5cclxuY2xhc3MgQ29sb3Ige1xyXG5cclxuXHRjb25zdHJ1Y3RvcihyZWQsIGdyZWVuLCBibHVlKSB7XHJcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyZWRcIiwgdm9pZCAwKTtcclxuXHJcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJncmVlblwiLCB2b2lkIDApO1xyXG5cclxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImJsdWVcIiwgdm9pZCAwKTtcclxuXHJcblx0XHR0aGlzLnJlZCA9IHJlZDtcclxuXHRcdHRoaXMuZ3JlZW4gPSBncmVlbjtcclxuXHRcdHRoaXMuYmx1ZSA9IGJsdWU7XHJcblx0fVxyXG5cclxufVxyXG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XHJcblxyXG5jbGFzcyBSdGNJbWFnZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHVybCwgcGFyYW1zKSB7XHJcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cmxcIiwgdm9pZCAwKTtcclxuXHJcblx0XHRfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ4XCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwieVwiLCB2b2lkIDApO1xyXG5cclxuXHRcdF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpZHRoXCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0X2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGVpZ2h0XCIsIHZvaWQgMCk7XHJcblxyXG5cdFx0dGhpcy51cmwgPSB1cmw7XHJcblxyXG5cdFx0aWYgKHBhcmFtcykge1xyXG5cdFx0XHR0aGlzLnggPSBwYXJhbXMueDtcclxuXHRcdFx0dGhpcy55ID0gcGFyYW1zLnk7XHJcblx0XHRcdHRoaXMud2lkdGggPSBwYXJhbXMud2lkdGg7XHJcblx0XHRcdHRoaXMuaGVpZ2h0ID0gcGFyYW1zLmhlaWdodDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydHMuUnRjSW1hZ2UgPSBSdGNJbWFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ })
/******/ ]);