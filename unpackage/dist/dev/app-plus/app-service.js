(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 13));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 14));\nvar _until = _interopRequireDefault(__webpack_require__(/*! ./utils/until.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\n_vue.default.prototype.$Utils = _until.default;\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwicHJvdG90eXBlIiwiJFV0aWxzIiwiVXRpbHMiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLHFGO0FBQ0FBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUFKLGFBQUlLLFNBQUosQ0FBY0MsTUFBZCxHQUF1QkMsY0FBdkI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlSLFlBQUo7QUFDUkcsWUFEUSxFQUFaOztBQUdBSyxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzL3VudGlsLmpzXCJcclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuVnVlLnByb3RvdHlwZS4kVXRpbHMgPSBVdGlsc1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcblx0Li4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages.json ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!***************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/index.vue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2lMO0FBQ2pMLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmJlODRhM2NcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: _vm._$s(0, "sc", "content"),
      style: _vm._$s(0, "s", {
        width: _vm.windowWidth + "px",
        height: _vm.windowHeight + "px"
      }),
      attrs: { _i: 0 }
    },
    [
      _c("view", [
        _c(
          "radio-group",
          { attrs: { _i: 2 }, on: { change: _vm.radioChange } },
          _vm._l(_vm._$s(3, "f", { forItems: _vm.scenarioLits }), function(
            item,
            index,
            $20,
            $30
          ) {
            return _c(
              "label",
              {
                key: _vm._$s(3, "f", { forIndex: $20, key: item.value }),
                staticClass: _vm._$s(
                  "3-" + $30,
                  "sc",
                  "uni-list-cell uni-list-cell-pd"
                ),
                attrs: { _i: "3-" + $30 }
              },
              [
                _c("radio", {
                  attrs: {
                    value: _vm._$s("4-" + $30, "a-value", item.value),
                    checked: _vm._$s(
                      "4-" + $30,
                      "a-checked",
                      index === _vm.scenario
                    ),
                    _i: "4-" + $30
                  }
                }),
                _c("text", [
                  _vm._v(_vm._$s("5-" + $30, "t0-0", _vm._s(item.name)))
                ])
              ]
            )
          }),
          0
        ),
        _c("view", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.channel,
                expression: "channel"
              }
            ],
            staticClass: _vm._$s(7, "sc", "channel"),
            attrs: { _i: 7 },
            domProps: { value: _vm._$s(7, "v-model", _vm.channel) },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.channel = $event.target.value
              }
            }
          })
        ]),
        _vm._$s(8, "i", _vm.scenario === 1)
          ? _c(
              "view",
              { staticClass: _vm._$s(8, "sc", "streaming"), attrs: { _i: 8 } },
              [
                _c("button", {
                  attrs: {
                    type: _vm._$s(
                      9,
                      "a-type",
                      _vm.roleChoices === 1 ? "primary" : "default"
                    ),
                    _i: 9
                  },
                  on: {
                    click: function($event) {
                      _vm.roleChoices = 1
                    }
                  }
                }),
                _c("button", {
                  attrs: {
                    type: _vm._$s(
                      10,
                      "a-type",
                      _vm.roleChoices === 2 ? "primary" : "default"
                    ),
                    _i: 10
                  },
                  on: {
                    click: function($event) {
                      _vm.roleChoices = 2
                    }
                  }
                })
              ]
            )
          : _vm._e(),
        _c("view", [
          _c("button", { attrs: { _i: 12 }, on: { click: _vm.goBack } })
        ])
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***************************************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9tQixDQUFnQixza0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _config = _interopRequireDefault(__webpack_require__(/*! ../../utils/config.js */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  data: function data() {\n    return {\n      // 输入的频道\n      channel: \"\",\n      // 场景选择\n      scenarioLits: [{\n        value: 0,\n        name: '通信场景' },\n\n      {\n        value: 1,\n        name: '直播场景' }],\n\n\n      scenario: 0,\n      // 直播场景下 角色选择 1 (主播) 2 (游客)\n      roleChoices: 1,\n\n      windowWidth: 200,\n      windowHeight: 200 };\n\n  },\n  created: function created() {\n    // 默认频道\n    this.channel = _config.default.channel;\n    this.init();\n  },\n  methods: {\n    init: function init() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oInfo;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n                  _this.$Utils.getWidthHeight());case 2:oInfo = _context.sent;\n                _this.windowWidth = oInfo.windowWidth;\n                _this.windowHeight = oInfo.windowHeight;case 5:case \"end\":return _context.stop();}}}, _callee);}))();\n    },\n    goBack: function goBack() {\n      // 没有填写 appid\n      if (!_config.default.appid) {\n        uni.showToast({\n          title: '请前往 utils 文件夹的 config.js 文件中配置 appid',\n          icon: 'none',\n          duration: 3000 });\n\n        return;\n      }\n      // 没有填写频道\n      if (!this.channel) {\n        uni.showToast({\n          title: '请输入频道',\n          icon: 'none',\n          duration: 3000 });\n\n        return;\n      }\n      // 传递数据\n      var oInfo = JSON.stringify({\n        appid: _config.default.appid,\n        // anyRTC 实现通话的频道\n        channel: this.channel + '',\n        token: _config.default.token,\n        // 默认 uid 标识或随机生成 uid 标识\n        uid: _config.default.uid ? _config.default.uid : this.$Utils.randomFn(6),\n        scenario: this.scenario, // 通信场景\n        roleChoices: this.roleChoices, // 直播场景下 角色选择 1 (主播) 2 (游客)\n        // 旁路推流\n        liveUrl: _config.default.liveUrl });\n\n      uni.reLaunch({\n        url: 'rtcPage?info=' + oInfo,\n        success: function success(res) {\n          __f__(\"log\", \"成功\", res, \" at pages/index/index.vue:97\");\n        },\n        fail: function fail(res) {\n          __f__(\"log\", \"失败\", res, \" at pages/index/index.vue:100\");\n        } });\n\n\n    },\n    // 场景选择\n    radioChange: function radioChange(evt) {\n      for (var i = 0; i < this.scenarioLits.length; i++) {\n        if (this.scenarioLits[i].value === evt.detail.value) {\n          this.scenario = i;\n          break;\n        }\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBLDJGO0FBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUZBO0FBR0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsb0JBRkE7O0FBSUE7QUFDQSxnQkFEQTtBQUVBLG9CQUZBLEVBSkEsQ0FKQTs7O0FBYUEsaUJBYkE7QUFjQTtBQUNBLG9CQWZBOztBQWlCQSxzQkFqQkE7QUFrQkEsdUJBbEJBOztBQW9CQSxHQXRCQTtBQXVCQSxTQXZCQSxxQkF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTNCQTtBQTRCQTtBQUNBLFFBREEsa0JBQ0E7QUFDQSwrQ0FEQSxTQUNBLEtBREE7QUFFQTtBQUNBLHdEQUhBO0FBSUEsS0FMQTtBQU1BLFVBTkEsb0JBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFEQTtBQUVBLHNCQUZBO0FBR0Esd0JBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsc0JBRkE7QUFHQSx3QkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUE7QUFDQSxrQ0FIQTtBQUlBLG9DQUpBO0FBS0E7QUFDQSxnRkFOQTtBQU9BLCtCQVBBLEVBT0E7QUFDQSxxQ0FSQSxFQVFBO0FBQ0E7QUFDQSx3Q0FWQTs7QUFZQTtBQUNBLG9DQURBO0FBRUEsZUFGQSxtQkFFQSxHQUZBLEVBRUE7QUFDQTtBQUNBLFNBSkE7QUFLQSxZQUxBLGdCQUtBLEdBTEEsRUFLQTtBQUNBO0FBQ0EsU0FQQTs7O0FBVUEsS0FoREE7QUFpREE7QUFDQSxlQWxEQSx1QkFrREEsR0FsREEsRUFrREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpEQSxFQTVCQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCIgOnN0eWxlPVwie3dpZHRoOiB3aW5kb3dXaWR0aCArICdweCcsaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKyAncHgnfVwiPlxyXG5cdFx0PHZpZXcgc3R5bGU9XCJwYWRkaW5nOiAxMjBweCAyMHB4O1wiPlxyXG5cdFx0XHQ8IS0tIOWcuuaZr+mAieaLqSAtLT5cclxuXHRcdFx0PHJhZGlvLWdyb3VwIEBjaGFuZ2U9XCJyYWRpb0NoYW5nZVwiIHN0eWxlPVwiZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtwYWRkaW5nOiAzMHB4IDA7XCI+XHJcblx0XHRcdFx0PGxhYmVsIGNsYXNzPVwidW5pLWxpc3QtY2VsbCB1bmktbGlzdC1jZWxsLXBkXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHNjZW5hcmlvTGl0c1wiIDprZXk9XCJpdGVtLnZhbHVlXCI+XHJcblx0XHRcdFx0XHQ8cmFkaW8gOnZhbHVlPVwiaXRlbS52YWx1ZVwiIDpjaGVja2VkPVwiaW5kZXggPT09IHNjZW5hcmlvXCIgLz5cclxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6ICNGRkZGRkY7XCI+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHQ8L3JhZGlvLWdyb3VwPlxyXG5cdFx0XHQ8IS0tIOmikemBk+i+k+WFpSAtLT5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMzBweDtcIj5cclxuXHRcdFx0XHQ8aW5wdXQgdi1tb2RlbD1cImNoYW5uZWxcIiBjbGFzcz1cImNoYW5uZWxcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXpopHpgZPlj7dcIiA6bWF4bGVuZ3RoPVwiNjRcIiBmb2N1cyAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic3RyZWFtaW5nXCIgdi1pZj1cInNjZW5hcmlvID09PSAxXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiA6dHlwZT1cInJvbGVDaG9pY2VzID09PSAxID8gJ3ByaW1hcnknIDogJ2RlZmF1bHQnXCIgQGNsaWNrPVwicm9sZUNob2ljZXMgPSAxXCI+5oiR5piv5Li75pKtPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiA6dHlwZT1cInJvbGVDaG9pY2VzID09PSAyID8gJ3ByaW1hcnknIDogJ2RlZmF1bHQnXCIgQGNsaWNrPVwicm9sZUNob2ljZXMgPSAyXCI+5oiR5piv5ri45a6iPC9idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJwYWRkaW5nOiAzMHB4IDA7XCI+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIEBjbGljaz1cImdvQmFja1wiPuWKoOWFpemikemBkzwvYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgQ29uZmlnIGZyb20gXCIuLi8uLi91dGlscy9jb25maWcuanNcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIOi+k+WFpeeahOmikemBk1xyXG5cdFx0XHRcdGNoYW5uZWw6IFwiXCIsXHJcblx0XHRcdFx0Ly8g5Zy65pmv6YCJ5oupXHJcblx0XHRcdFx0c2NlbmFyaW9MaXRzOiBbe1xyXG5cdFx0XHRcdFx0XHR2YWx1ZTogMCxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+mAmuS/oeWcuuaZrycsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YWx1ZTogMSxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+ebtOaSreWcuuaZrycsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0c2NlbmFyaW86IDAsXHJcblx0XHRcdFx0Ly8g55u05pKt5Zy65pmv5LiLIOinkuiJsumAieaLqSAxICjkuLvmkq0pIDIgKOa4uOWuoilcclxuXHRcdFx0XHRyb2xlQ2hvaWNlczogMSxcclxuXHJcblx0XHRcdFx0d2luZG93V2lkdGg6IDIwMCxcclxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IDIwMCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdC8vIOm7mOiupOmikemBk1xyXG5cdFx0XHR0aGlzLmNoYW5uZWwgPSBDb25maWcuY2hhbm5lbDtcclxuXHRcdFx0dGhpcy5pbml0KCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRhc3luYyBpbml0KCkge1xyXG5cdFx0XHRcdGNvbnN0IG9JbmZvID0gYXdhaXQgdGhpcy4kVXRpbHMuZ2V0V2lkdGhIZWlnaHQoKTtcclxuXHRcdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gb0luZm8ud2luZG93V2lkdGg7XHJcblx0XHRcdFx0dGhpcy53aW5kb3dIZWlnaHQgPSBvSW5mby53aW5kb3dIZWlnaHQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdvQmFjaygpIHtcclxuXHRcdFx0XHQvLyDmsqHmnInloavlhpkgYXBwaWRcclxuXHRcdFx0XHRpZiAoIUNvbmZpZy5hcHBpZCkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6K+35YmN5b6AIHV0aWxzIOaWh+S7tuWkueeahCBjb25maWcuanMg5paH5Lu25Lit6YWN572uIGFwcGlkJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5rKh5pyJ5aGr5YaZ6aKR6YGTXHJcblx0XHRcdFx0aWYgKCF0aGlzLmNoYW5uZWwpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+i+k+WFpemikemBkycsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOS8oOmAkuaVsOaNrlxyXG5cdFx0XHRcdGNvbnN0IG9JbmZvID0gSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdFx0YXBwaWQ6IENvbmZpZy5hcHBpZCxcclxuXHRcdFx0XHRcdC8vIGFueVJUQyDlrp7njrDpgJror53nmoTpopHpgZNcclxuXHRcdFx0XHRcdGNoYW5uZWw6IHRoaXMuY2hhbm5lbCArICcnLFxyXG5cdFx0XHRcdFx0dG9rZW46IENvbmZpZy50b2tlbixcclxuXHRcdFx0XHRcdC8vIOm7mOiupCB1aWQg5qCH6K+G5oiW6ZqP5py655Sf5oiQIHVpZCDmoIfor4ZcclxuXHRcdFx0XHRcdHVpZDogQ29uZmlnLnVpZCA/ICBDb25maWcudWlkIDogdGhpcy4kVXRpbHMucmFuZG9tRm4oNiksXHJcblx0XHRcdFx0XHRzY2VuYXJpbzogdGhpcy5zY2VuYXJpbywgLy8g6YCa5L+h5Zy65pmvXHJcblx0XHRcdFx0XHRyb2xlQ2hvaWNlczogdGhpcy5yb2xlQ2hvaWNlcywgLy8g55u05pKt5Zy65pmv5LiLIOinkuiJsumAieaLqSAxICjkuLvmkq0pIDIgKOa4uOWuoilcclxuXHRcdFx0XHRcdC8vIOaXgei3r+aOqOa1gVxyXG5cdFx0XHRcdFx0bGl2ZVVybDogQ29uZmlnLmxpdmVVcmwsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR1bmkucmVMYXVuY2goe1xyXG5cdFx0XHRcdFx0dXJsOiAncnRjUGFnZT9pbmZvPScgKyBvSW5mbyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5oiQ5YqfXCIsIHJlcyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbChyZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLlpLHotKVcIiwgcmVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWcuuaZr+mAieaLqVxyXG5cdFx0XHRyYWRpb0NoYW5nZShldnQpIHtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NlbmFyaW9MaXRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zY2VuYXJpb0xpdHNbaV0udmFsdWUgPT09IGV2dC5kZXRhaWwudmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zY2VuYXJpbyA9IGk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzBBMTYyMTtcclxuXHR9XHJcblxyXG5cdC5jaGFubmVsIHtcclxuXHRcdGhlaWdodDogMTEwcnB4O1xyXG5cdFx0cGFkZGluZzogMCAyNnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzJGMzA0MTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0Lyog55u05pKt5Zy65pmvICovXHJcblx0LnN0cmVhbWluZyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 9);

/***/ }),
/* 9 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 10);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 10 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

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
  runtime.wrap = wrap;

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
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
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
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
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
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

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
        if (delegate.iterator.return) {
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

    if (! info) {
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

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
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

  runtime.keys = function(object) {
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
        var i = -1, next = function next() {
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
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
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

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
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

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
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

    complete: function(record, afterLoc) {
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

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 11 */
/*!*********************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/utils/config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; // \tRTC 基本设置\nvar config = {\n  // 必填 anyRTC 为 App 开发者签发的 App ID。每个项目都应该有一个独一无二的 App ID。\n  // 如果你的开发包里没有 App ID，请从anyRTC官网(https://www.anyrtc.io)申请一个新的 App ID\n  appid: \"\",\n  // anyRTC 实现通话的频道(必须是字符串)\n  channel: \"\",\n  // anyRTC 标识当前用户(必须是字符串)\n  uid: \"\",\n  //（项目测试阶段可不填写）项目启用 token 后请添加相关回调逻辑\n  // 请参考 https://docs.anyrtc.io/cn/Video/api-ref/rtc_uniapp/uni_rtc_event#ontokenprivilegewillexpire\n  token: \"\",\n\n  //（直播场景下） 如果旁路推流服务，使用请确保当前使用的 appid 开通旁路推流服务，否则将推流失败\n  // 推流地址\n  liveUrl: \"\" };var _default =\n\nconfig;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvY29uZmlnLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwcGlkIiwiY2hhbm5lbCIsInVpZCIsInRva2VuIiwibGl2ZVVybCJdLCJtYXBwaW5ncyI6IndGQUFBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHO0FBQ2Q7QUFDQTtBQUNBQyxPQUFLLEVBQUUsRUFITztBQUlkO0FBQ0FDLFNBQU8sRUFBRSxFQUxLO0FBTWQ7QUFDQUMsS0FBRyxFQUFFLEVBUFM7QUFRZDtBQUNBO0FBQ0FDLE9BQUssRUFBRSxFQVZPOztBQVlkO0FBQ0E7QUFDQUMsU0FBTyxFQUFFLEVBZEssRUFBZixDOztBQWdCZUwsTSIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFx0UlRDIOWfuuacrOiuvue9rlxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0Ly8g5b+F5aGrIGFueVJUQyDkuLogQXBwIOW8gOWPkeiAheetvuWPkeeahCBBcHAgSUTjgILmr4/kuKrpobnnm67pg73lupTor6XmnInkuIDkuKrni6zkuIDml6DkuoznmoQgQXBwIElE44CCXHJcblx0Ly8g5aaC5p6c5L2g55qE5byA5Y+R5YyF6YeM5rKh5pyJIEFwcCBJRO+8jOivt+S7jmFueVJUQ+WumOe9kShodHRwczovL3d3dy5hbnlydGMuaW8p55Sz6K+35LiA5Liq5paw55qEIEFwcCBJRFxyXG5cdGFwcGlkOiBcIlwiLFxyXG5cdC8vIGFueVJUQyDlrp7njrDpgJror53nmoTpopHpgZMo5b+F6aG75piv5a2X56ym5LiyKVxyXG5cdGNoYW5uZWw6IFwiXCIsXHJcblx0Ly8gYW55UlRDIOagh+ivhuW9k+WJjeeUqOaItyjlv4XpobvmmK/lrZfnrKbkuLIpXHJcblx0dWlkOiBcIlwiLFxyXG5cdC8v77yI6aG555uu5rWL6K+V6Zi25q615Y+v5LiN5aGr5YaZ77yJ6aG555uu5ZCv55SoIHRva2VuIOWQjuivt+a3u+WKoOebuOWFs+Wbnuiwg+mAu+i+kVxyXG5cdC8vIOivt+WPguiAgyBodHRwczovL2RvY3MuYW55cnRjLmlvL2NuL1ZpZGVvL2FwaS1yZWYvcnRjX3VuaWFwcC91bmlfcnRjX2V2ZW50I29udG9rZW5wcml2aWxlZ2V3aWxsZXhwaXJlXHJcblx0dG9rZW46IFwiXCIsXHJcblx0XHJcblx0Ly/vvIjnm7Tmkq3lnLrmma/kuIvvvIkg5aaC5p6c5peB6Lev5o6o5rWB5pyN5Yqh77yM5L2/55So6K+356Gu5L+d5b2T5YmN5L2/55So55qEIGFwcGlkIOW8gOmAmuaXgei3r+aOqOa1geacjeWKoe+8jOWQpuWImeWwhuaOqOa1geWksei0pVxyXG5cdC8vIOaOqOa1geWcsOWdgFxyXG5cdGxpdmVVcmw6IFwiXCIsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
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
/* 13 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 14 */
/*!*************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/App.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDMks7QUFDM0ssZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../代码工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStqQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4v5Luj56CB5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL+S7o+eggeW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi/ku6PnoIHlt6XlhbcvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    // 锁定竖屏\n    plus.screen.lockOrientation('portrait-primary');\n    // 相机、麦克风权限\n    this.$Utils.equipment();\n    __f__(\"log\", 'App Launch', \" at App.vue:8\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:11\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:14\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVBBO0FBUUE7QUFDQTtBQUNBLEdBVkE7QUFXQTtBQUNBO0FBQ0EsR0FiQSxFIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIOmUgeWumuerluWxj1xyXG5cdFx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oJ3BvcnRyYWl0LXByaW1hcnknKTtcclxuXHRcdFx0Ly8g55u45py644CB6bqm5YWL6aOO5p2D6ZmQXHJcblx0XHRcdHRoaXMuJFV0aWxzLmVxdWlwbWVudCgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpO1xyXG5cdFx0fSxcclxuXHRcdG9uU2hvdzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXHJcblx0XHR9LFxyXG5cdFx0b25IaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC8q5q+P5Liq6aG16Z2i5YWs5YWxY3NzICovXHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!********************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/utils/until.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));var _permission = _interopRequireDefault(__webpack_require__(/*! ../js_sdk/wa-permission/permission.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\nvar Utils = {\n  // 平台分类查询权限\n  equipment: function equipment() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var oa, ob, _oa, _ob;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(\n\n              uni.getSystemInfoSync().platform == 'ios')) {_context.next = 11;break;}_context.next = 3;return (\n\n                Utils.requestAndroidPermission(\"camera\", 'ios', '相机'));case 3:oa = _context.sent;_context.next = 6;return (\n\n                Utils.requestAndroidPermission(\"record\", 'ios', '录音'));case 6:ob = _context.sent;_context.next = 9;return (\n                uni.showToast({\n                  title: oa + \";\" + ob,\n                  icon: \"none\",\n                  duration: 2000 }));case 9:_context.next = 20;break;case 11:if (!(\n\n              uni.getSystemInfoSync().platform === 'android')) {_context.next = 20;break;}_context.next = 14;return (\n\n                Utils.requestAndroidPermission(\"android.permission.CAMERA\", 'android', '相机'));case 14:_oa = _context.sent;_context.next = 17;return (\n\n                Utils.requestAndroidPermission(\"android.permission.RECORD_AUDIO\", 'android', '录音'));case 17:_ob = _context.sent;_context.next = 20;return (\n                uni.showToast({\n                  title: _oa + \";\" + _ob,\n                  icon: \"none\",\n                  duration: 2000 }));case 20:case \"end\":return _context.stop();}}}, _callee);}))();\n\n\n  },\n  // 查询权限封装\n  requestAndroidPermission: function requestAndroidPermission(permisionID, type, libe) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var result, strStatus;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n              result = 0;\n              strStatus = \"\";if (!(\n              type == 'ios')) {_context2.next = 8;break;}_context2.next = 5;return _permission.default.judgeIosPermission(permisionID);case 5:result = _context2.sent;_context2.next = 11;break;case 8:_context2.next = 10;return _permission.default.\n              requestAndroidPermission(\n              permisionID);case 10:result = _context2.sent;case 11:\n              if (result == 1) {\n                strStatus = \"已获得授权,可正常使用\";\n              } else if (result == 0) {\n                strStatus = \"未获得授权,无法使用\";\n              } else {\n                strStatus = \"被永久拒绝权限,无法使用\";\n              };return _context2.abrupt(\"return\",\n              libe + strStatus);case 14:case \"end\":return _context2.stop();}}}, _callee2);}))();\n  },\n  // 获取高度宽度\n  getWidthHeight: function getWidthHeight() {\n    var obj = {\n      windowWidth: 0,\n      windowHeight: 0 };\n\n    uni.getSystemInfo({\n      success: function success(res) {\n        obj = Object.assign(obj, res);\n      } });\n\n    return obj;\n  },\n  // 生成随机字符串（支持自定义字符长度和特征字符集合）\n  randomFn: function randomFn(len, charSet) {\n    charSet = charSet || 'abcdefghijklmnopqrstuvwxyz0123456789';\n    var randomString = '';\n    for (var i = 0; i < len; i++) {\n      var randomPoz = Math.floor(Math.random() * charSet.length);\n      randomString += charSet.substring(randomPoz, randomPoz + 1);\n    }\n    return randomString;\n  } };var _default =\n\nUtils;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdW50aWwuanMiXSwibmFtZXMiOlsiVXRpbHMiLCJlcXVpcG1lbnQiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwib2EiLCJvYiIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwicGVybWlzaW9uSUQiLCJ0eXBlIiwibGliZSIsInJlc3VsdCIsInN0clN0YXR1cyIsInBlcm1pc2lvbiIsImp1ZGdlSW9zUGVybWlzc2lvbiIsImdldFdpZHRoSGVpZ2h0Iiwib2JqIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIk9iamVjdCIsImFzc2lnbiIsInJhbmRvbUZuIiwibGVuIiwiY2hhclNldCIsInJhbmRvbVN0cmluZyIsImkiLCJyYW5kb21Qb3oiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiIwTUFBQSwrRztBQUNBLElBQU1BLEtBQUssR0FBRztBQUNiO0FBQ01DLFdBRk8sdUJBRUs7O0FBRWJDLGlCQUFHLENBQUNDLGlCQUFKLEdBQXdCQyxRQUF4QixJQUFvQyxLQUZ2Qjs7QUFJREoscUJBQUssQ0FBQ0ssd0JBQU4sQ0FBK0IsUUFBL0IsRUFBeUMsS0FBekMsRUFBZ0QsSUFBaEQsQ0FKQyxTQUlaQyxFQUpZOztBQU1ETixxQkFBSyxDQUFDSyx3QkFBTixDQUErQixRQUEvQixFQUF5QyxLQUF6QyxFQUFnRCxJQUFoRCxDQU5DLFNBTVpFLEVBTlk7QUFPVkwsbUJBQUcsQ0FBQ00sU0FBSixDQUFjO0FBQ25CQyx1QkFBSyxFQUFFSCxFQUFFLEdBQUcsR0FBTCxHQUFXQyxFQURDO0FBRW5CRyxzQkFBSSxFQUFFLE1BRmE7QUFHbkJDLDBCQUFRLEVBQUUsSUFIUyxFQUFkLENBUFU7O0FBWU5ULGlCQUFHLENBQUNDLGlCQUFKLEdBQXdCQyxRQUF4QixLQUFxQyxTQVovQjs7QUFjREoscUJBQUssQ0FBQ0ssd0JBQU4sQ0FBK0IsMkJBQS9CLEVBQTRELFNBQTVELEVBQXVFLElBQXZFLENBZEMsVUFjWkMsR0FkWTs7QUFnQkROLHFCQUFLLENBQUNLLHdCQUFOLENBQStCLGlDQUEvQixFQUFrRSxTQUFsRSxFQUE2RSxJQUE3RSxDQWhCQyxVQWdCWkUsR0FoQlk7QUFpQlZMLG1CQUFHLENBQUNNLFNBQUosQ0FBYztBQUNuQkMsdUJBQUssRUFBRUgsR0FBRSxHQUFHLEdBQUwsR0FBV0MsR0FEQztBQUVuQkcsc0JBQUksRUFBRSxNQUZhO0FBR25CQywwQkFBUSxFQUFFLElBSFMsRUFBZCxDQWpCVTs7O0FBdUJqQixHQXpCWTtBQTBCYjtBQUNNTiwwQkEzQk8sb0NBMkJrQk8sV0EzQmxCLEVBMkIrQkMsSUEzQi9CLEVBMkJxQ0MsSUEzQnJDLEVBMkIyQztBQUNuREMsb0JBRG1ELEdBQzFDLENBRDBDO0FBRW5EQyx1QkFGbUQsR0FFdkMsRUFGdUM7QUFHdkRILGtCQUFJLElBQUksS0FIK0Msd0RBR3hCSSxvQkFBVUMsa0JBQVYsQ0FBNkJOLFdBQTdCLENBSHdCLFFBR3ZDRyxNQUh1Qyw4RUFHbUNFO0FBQ3hGWixzQ0FEd0Y7QUFFeEZPLHlCQUZ3RixDQUhuQyxTQUdvQkcsTUFIcEI7QUFNdkQsa0JBQUlBLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2hCQyx5QkFBUyxHQUFHLGFBQVo7QUFDQSxlQUZELE1BRU8sSUFBSUQsTUFBTSxJQUFJLENBQWQsRUFBaUI7QUFDdkJDLHlCQUFTLEdBQUcsWUFBWjtBQUNBLGVBRk0sTUFFQTtBQUNOQSx5QkFBUyxHQUFHLGNBQVo7QUFDQSxnQkFac0Q7QUFhaERGLGtCQUFJLEdBQUdFLFNBYnlDO0FBY3ZELEdBekNZO0FBMENiO0FBQ0FHLGdCQTNDYSw0QkEyQ0k7QUFDaEIsUUFBSUMsR0FBRyxHQUFHO0FBQ1RDLGlCQUFXLEVBQUUsQ0FESjtBQUVUQyxrQkFBWSxFQUFFLENBRkwsRUFBVjs7QUFJQXBCLE9BQUcsQ0FBQ3FCLGFBQUosQ0FBa0I7QUFDakJDLGFBQU8sRUFBRSxpQkFBU0MsR0FBVCxFQUFjO0FBQ3RCTCxXQUFHLEdBQUdNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUCxHQUFkLEVBQW1CSyxHQUFuQixDQUFOO0FBQ0EsT0FIZ0IsRUFBbEI7O0FBS0EsV0FBT0wsR0FBUDtBQUNBLEdBdERZO0FBdURiO0FBQ0FRLFVBeERhLG9CQXdESkMsR0F4REksRUF3RENDLE9BeERELEVBd0RVO0FBQ3RCQSxXQUFPLEdBQUdBLE9BQU8sSUFBSSxzQ0FBckI7QUFDQSxRQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEdBQXBCLEVBQXlCRyxDQUFDLEVBQTFCLEVBQThCO0FBQzdCLFVBQUlDLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQk4sT0FBTyxDQUFDTyxNQUFuQyxDQUFoQjtBQUNBTixrQkFBWSxJQUFJRCxPQUFPLENBQUNRLFNBQVIsQ0FBa0JMLFNBQWxCLEVBQTZCQSxTQUFTLEdBQUcsQ0FBekMsQ0FBaEI7QUFDQTtBQUNELFdBQU9GLFlBQVA7QUFDQSxHQWhFWSxFQUFkLEM7O0FBa0VlL0IsSyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwZXJtaXNpb24gZnJvbSBcIi4uL2pzX3Nkay93YS1wZXJtaXNzaW9uL3Blcm1pc3Npb24uanNcIlxyXG5jb25zdCBVdGlscyA9IHtcclxuXHQvLyDlubPlj7DliIbnsbvmn6Xor6LmnYPpmZBcclxuXHRhc3luYyBlcXVpcG1lbnQoKSB7XHJcblx0XHQvLyDmn6XnnIvmnYPpmZBcclxuXHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykge1xyXG5cdFx0XHQvL+afpeeci+ebuOacuuadg+mZkFxyXG5cdFx0XHRsZXQgb2EgPSBhd2FpdCBVdGlscy5yZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24oXCJjYW1lcmFcIiwgJ2lvcycsICfnm7jmnLonKTtcclxuXHRcdFx0Ly/mn6XnnIvlvZXpn7PmnYPpmZBcclxuXHRcdFx0bGV0IG9iID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwicmVjb3JkXCIsICdpb3MnLCAn5b2V6Z+zJyk7XHJcblx0XHRcdGF3YWl0IHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdHRpdGxlOiBvYSArIFwiO1wiICsgb2IsXHJcblx0XHRcdFx0aWNvbjogXCJub25lXCIsXHJcblx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0Ly/mn6XnnIvnm7jmnLrmnYPpmZBcclxuXHRcdFx0bGV0IG9hID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQVwiLCAnYW5kcm9pZCcsICfnm7jmnLonKTtcclxuXHRcdFx0Ly/mn6XnnIvlvZXpn7PmnYPpmZBcclxuXHRcdFx0bGV0IG9iID0gYXdhaXQgVXRpbHMucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFwiYW5kcm9pZC5wZXJtaXNzaW9uLlJFQ09SRF9BVURJT1wiLCAnYW5kcm9pZCcsICflvZXpn7MnKTtcclxuXHRcdFx0YXdhaXQgdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6IG9hICsgXCI7XCIgKyBvYixcclxuXHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIOafpeivouadg+mZkOWwgeijhVxyXG5cdGFzeW5jIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNpb25JRCwgdHlwZSwgbGliZSkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IDA7XHJcblx0XHRsZXQgc3RyU3RhdHVzID0gXCJcIjtcclxuXHRcdHR5cGUgPT0gJ2lvcycgPyByZXN1bHQgPSBhd2FpdCBwZXJtaXNpb24uanVkZ2VJb3NQZXJtaXNzaW9uKHBlcm1pc2lvbklEKSA6IHJlc3VsdCA9IGF3YWl0IHBlcm1pc2lvblxyXG5cdFx0XHQucmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uKFxyXG5cdFx0XHRcdHBlcm1pc2lvbklEKTtcclxuXHRcdGlmIChyZXN1bHQgPT0gMSkge1xyXG5cdFx0XHRzdHJTdGF0dXMgPSBcIuW3suiOt+W+l+aOiOadgyzlj6/mraPluLjkvb/nlKhcIlxyXG5cdFx0fSBlbHNlIGlmIChyZXN1bHQgPT0gMCkge1xyXG5cdFx0XHRzdHJTdGF0dXMgPSBcIuacquiOt+W+l+aOiOadgyzml6Dms5Xkvb/nlKhcIlxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RyU3RhdHVzID0gXCLooqvmsLjkuYXmi5Lnu53mnYPpmZAs5peg5rOV5L2/55SoXCJcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gbGliZSArIHN0clN0YXR1c1xyXG5cdH0sXHJcblx0Ly8g6I635Y+W6auY5bqm5a695bqmXHJcblx0Z2V0V2lkdGhIZWlnaHQoKSB7XHJcblx0XHRsZXQgb2JqID0ge1xyXG5cdFx0XHR3aW5kb3dXaWR0aDogMCxcclxuXHRcdFx0d2luZG93SGVpZ2h0OiAwLFxyXG5cdFx0fVxyXG5cdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRvYmogPSBPYmplY3QuYXNzaWduKG9iaiwgcmVzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBvYmpcclxuXHR9LFxyXG5cdC8vIOeUn+aIkOmaj+acuuWtl+espuS4su+8iOaUr+aMgeiHquWumuS5ieWtl+espumVv+W6puWSjOeJueW+geWtl+espumbhuWQiO+8iVxyXG5cdHJhbmRvbUZuKGxlbiwgY2hhclNldCkge1xyXG5cdFx0Y2hhclNldCA9IGNoYXJTZXQgfHwgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcblx0XHRsZXQgcmFuZG9tU3RyaW5nID0gJyc7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdGxldCByYW5kb21Qb3ogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyU2V0Lmxlbmd0aCk7XHJcblx0XHRcdHJhbmRvbVN0cmluZyArPSBjaGFyU2V0LnN1YnN0cmluZyhyYW5kb21Qb3osIHJhbmRvbVBveiArIDEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJhbmRvbVN0cmluZztcclxuXHR9LFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!****************************************************************************!*\
  !*** D:/代码/工作/HB项目/工作/anyRTC音视频SDK插件示例/js_sdk/wa-permission/permission.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {/**\r\n * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启\r\n */\n\nvar isIos;\n\nisIos = plus.os.name == \"iOS\";\n\n\n// 判断推送权限是否开启\nfunction judgeIosPermissionPush() {\n  var result = false;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    __f__(\"log\", \"enabledTypes1:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:19\");\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启\", \" at js_sdk/wa-permission/permission.js:21\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:24\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启!\", \" at js_sdk/wa-permission/permission.js:30\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:33\");\n    }\n    __f__(\"log\", \"enabledTypes2:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:35\");\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\n// 判断定位权限是否开启\nfunction judgeIosPermissionLocation() {\n  var result = false;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var status = cllocationManger.authorizationStatus();\n  result = status != 2;\n  __f__(\"log\", \"定位权限开启：\" + result, \" at js_sdk/wa-permission/permission.js:48\");\n  // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation\n  /* var enable = cllocationManger.locationServicesEnabled();\r\n  var status = cllocationManger.authorizationStatus();\r\n  console.log(\"enable:\" + enable);\r\n  console.log(\"status:\" + status);\r\n  if (enable && status != 2) {\r\n  \tresult = true;\r\n  \tconsole.log(\"手机定位服务已开启且已授予定位权限\");\r\n  } else {\r\n  \tconsole.log(\"手机系统的定位没有打开或未给予定位权限\");\r\n  } */\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\n// 判断麦克风权限是否开启\nfunction judgeIosPermissionRecord() {\n  var result = false;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var permissionStatus = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + permissionStatus, \" at js_sdk/wa-permission/permission.js:70\");\n  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {\n    __f__(\"log\", \"麦克风权限没有开启\", \" at js_sdk/wa-permission/permission.js:72\");\n  } else {\n    result = true;\n    __f__(\"log\", \"麦克风权限已经开启\", \" at js_sdk/wa-permission/permission.js:75\");\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\n// 判断相机权限是否开启\nfunction judgeIosPermissionCamera() {\n  var result = false;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:86\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相机权限已经开启\", \" at js_sdk/wa-permission/permission.js:89\");\n  } else {\n    __f__(\"log\", \"相机权限没有开启\", \" at js_sdk/wa-permission/permission.js:91\");\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\n// 判断相册权限是否开启\nfunction judgeIosPermissionPhotoLibrary() {\n  var result = false;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:102\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相册权限已经开启\", \" at js_sdk/wa-permission/permission.js:105\");\n  } else {\n    __f__(\"log\", \"相册权限没有开启\", \" at js_sdk/wa-permission/permission.js:107\");\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\n// 判断通讯录权限是否开启\nfunction judgeIosPermissionContact() {\n  var result = false;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"通讯录权限已经开启\", \" at js_sdk/wa-permission/permission.js:120\");\n  } else {\n    __f__(\"log\", \"通讯录权限没有开启\", \" at js_sdk/wa-permission/permission.js:122\");\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\n// 判断日历权限是否开启\nfunction judgeIosPermissionCalendar() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"日历权限已经开启\", \" at js_sdk/wa-permission/permission.js:135\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at js_sdk/wa-permission/permission.js:137\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// 判断备忘录权限是否开启\nfunction judgeIosPermissionMemo() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at js_sdk/wa-permission/permission.js:150\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at js_sdk/wa-permission/permission.js:152\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// Android权限查询\nfunction requestAndroidPermission(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions(\n    [permissionID], // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at js_sdk/wa-permission/permission.js:167\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at js_sdk/wa-permission/permission.js:172\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at js_sdk/wa-permission/permission.js:177\");\n        result = -1;\n      }\n      resolve(result);\n      // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限\n      // if (result != 1) {\n      // gotoAppPermissionSetting()\n      // }\n    },\n    function (error) {\n      __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at js_sdk/wa-permission/permission.js:187\");\n      resolve({\n        code: error.code,\n        message: error.message });\n\n    });\n\n  });\n}\n\n// 使用一个方法，根据参数判断权限\nfunction judgeIosPermission(permissionID) {\n  if (permissionID == \"location\") {\n    return judgeIosPermissionLocation();\n  } else if (permissionID == \"camera\") {\n    return judgeIosPermissionCamera();\n  } else if (permissionID == \"photoLibrary\") {\n    return judgeIosPermissionPhotoLibrary();\n  } else if (permissionID == \"record\") {\n    return judgeIosPermissionRecord();\n  } else if (permissionID == \"push\") {\n    return judgeIosPermissionPush();\n  } else if (permissionID == \"contact\") {\n    return judgeIosPermissionContact();\n  } else if (permissionID == \"calendar\") {\n    return judgeIosPermissionCalendar();\n  } else if (permissionID == \"memo\") {\n    return judgeIosPermissionMemo();\n  }\n  return false;\n}\n\n// 跳转到**应用**的权限页面\nfunction gotoAppPermissionSetting() {\n  if (isIos) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    // var setting2 = NSURL2.URLWithString(\"prefs:root=LOCATION_SERVICES\");\t\t\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    // console.log(plus.device.vendor);\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\n// 检查系统的设备服务是否开启\n// var checkSystemEnableLocation = async function () {\nfunction checkSystemEnableLocation() {\n  if (isIos) {\n    var result = false;\n    var cllocationManger = plus.ios.import(\"CLLocationManager\");\n    var result = cllocationManger.locationServicesEnabled();\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:253\");\n    plus.ios.deleteObject(cllocationManger);\n    return result;\n  } else {\n    var context = plus.android.importClass(\"android.content.Context\");\n    var locationManager = plus.android.importClass(\"android.location.LocationManager\");\n    var main = plus.android.runtimeMainActivity();\n    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);\n    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:262\");\n    return result;\n  }\n}\n\nmodule.exports = {\n  judgeIosPermission: judgeIosPermission,\n  requestAndroidPermission: requestAndroidPermission,\n  checkSystemEnableLocation: checkSystemEnableLocation,\n  gotoAppPermissionSetting: gotoAppPermissionSetting };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3dhLXBlcm1pc3Npb24vcGVybWlzc2lvbi5qcyJdLCJuYW1lcyI6WyJpc0lvcyIsInBsdXMiLCJvcyIsIm5hbWUiLCJqdWRnZUlvc1Blcm1pc3Npb25QdXNoIiwicmVzdWx0IiwiVUlBcHBsaWNhdGlvbiIsImlvcyIsImltcG9ydCIsImFwcCIsInNoYXJlZEFwcGxpY2F0aW9uIiwiZW5hYmxlZFR5cGVzIiwiY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNldHRpbmdzIiwicGx1c0dldEF0dHJpYnV0ZSIsImRlbGV0ZU9iamVjdCIsImVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcyIsImp1ZGdlSW9zUGVybWlzc2lvbkxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsInN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQiLCJhdmF1ZGlvc2Vzc2lvbiIsImF2YXVkaW8iLCJzaGFyZWRJbnN0YW5jZSIsInBlcm1pc3Npb25TdGF0dXMiLCJyZWNvcmRQZXJtaXNzaW9uIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JNZWRpYVR5cGUiLCJqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkiLCJQSFBob3RvTGlicmFyeSIsImp1ZGdlSW9zUGVybWlzc2lvbkNvbnRhY3QiLCJDTkNvbnRhY3RTdG9yZSIsImNuQXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIiLCJFS0V2ZW50U3RvcmUiLCJla0F1dGhTdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25NZW1vIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwicGVybWlzc2lvbklEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbmRyb2lkIiwicmVxdWVzdFBlcm1pc3Npb25zIiwicmVzdWx0T2JqIiwiaSIsImdyYW50ZWQiLCJsZW5ndGgiLCJncmFudGVkUGVybWlzc2lvbiIsImRlbmllZFByZXNlbnQiLCJkZW5pZWRQcmVzZW50UGVybWlzc2lvbiIsImRlbmllZEFsd2F5cyIsImRlbmllZEFsd2F5c1Blcm1pc3Npb24iLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwianVkZ2VJb3NQZXJtaXNzaW9uIiwiZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nIiwiYXBwbGljYXRpb24yIiwiTlNVUkwyIiwic2V0dGluZzIiLCJVUkxXaXRoU3RyaW5nIiwib3BlblVSTCIsIkludGVudCIsImltcG9ydENsYXNzIiwiU2V0dGluZ3MiLCJVcmkiLCJtYWluQWN0aXZpdHkiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiaW50ZW50Iiwic2V0QWN0aW9uIiwiQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MiLCJ1cmkiLCJmcm9tUGFydHMiLCJnZXRQYWNrYWdlTmFtZSIsInNldERhdGEiLCJzdGFydEFjdGl2aXR5IiwiY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwiY29udGV4dCIsImxvY2F0aW9uTWFuYWdlciIsIm1haW4iLCJtYWluU3ZyIiwiZ2V0U3lzdGVtU2VydmljZSIsIkxPQ0FUSU9OX1NFUlZJQ0UiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsIkdQU19QUk9WSURFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUEsSUFBSUEsS0FBSjs7QUFFQUEsS0FBSyxHQUFJQyxJQUFJLENBQUNDLEVBQUwsQ0FBUUMsSUFBUixJQUFnQixLQUF6Qjs7O0FBR0E7QUFDQSxTQUFTQyxzQkFBVCxHQUFrQztBQUNqQyxNQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLE1BQUlDLGFBQWEsR0FBR0wsSUFBSSxDQUFDTSxHQUFMLENBQVNDLE1BQVQsQ0FB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QVk3RSxNQUF4QjtBQUNBSixRQUFJLENBQUNNLEdBQUwsQ0FBU1EsWUFBVCxDQUFzQkcsZ0JBQXRCO0FBQ0EsV0FBT2IsTUFBUDtBQUNBLEdBUEQsTUFPTztBQUNOLFFBQUk4RSxPQUFPLEdBQUdsRixJQUFJLENBQUM2QyxPQUFMLENBQWFzQixXQUFiLENBQXlCLHlCQUF6QixDQUFkO0FBQ0EsUUFBSWdCLGVBQWUsR0FBR25GLElBQUksQ0FBQzZDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsa0NBQXpCLENBQXRCO0FBQ0EsUUFBSWlCLElBQUksR0FBR3BGLElBQUksQ0FBQzZDLE9BQUwsQ0FBYTBCLG1CQUFiLEVBQVg7QUFDQSxRQUFJYyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0JKLE9BQU8sQ0FBQ0ssZ0JBQTlCLENBQWQ7QUFDQSxRQUFJbkYsTUFBTSxHQUFHaUYsT0FBTyxDQUFDRyxpQkFBUixDQUEwQkwsZUFBZSxDQUFDTSxZQUExQyxDQUFiO0FBQ0EsaUJBQVksWUFBWXJGLE1BQXhCO0FBQ0EsV0FBT0EsTUFBUDtBQUNBO0FBQ0Q7O0FBRURzRixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJoQyxvQkFBa0IsRUFBRUEsa0JBREo7QUFFaEJuQiwwQkFBd0IsRUFBRUEsd0JBRlY7QUFHaEJ3QywyQkFBeUIsRUFBRUEseUJBSFg7QUFJaEJwQiwwQkFBd0IsRUFBRUEsd0JBSlYsRUFBakIsQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmnKzmqKHlnZflsIHoo4XkuoZBbmRyb2lk44CBaU9T55qE5bqU55So5p2D6ZmQ5Yik5pat44CB5omT5byA5bqU55So5p2D6ZmQ6K6+572u55WM6Z2i44CB5Lul5Y+K5L2N572u57O757uf5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbiAqL1xyXG5cclxudmFyIGlzSW9zXHJcblxyXG5pc0lvcyA9IChwbHVzLm9zLm5hbWUgPT0gXCJpT1NcIilcclxuXHJcblxyXG4vLyDliKTmlq3mjqjpgIHmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFVJQXBwbGljYXRpb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJVSUFwcGxpY2F0aW9uXCIpO1xyXG5cdHZhciBhcHAgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0dmFyIGVuYWJsZWRUeXBlcyA9IDA7XHJcblx0aWYgKGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKSB7XHJcblx0XHR2YXIgc2V0dGluZ3MgPSBhcHAuY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncygpO1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gc2V0dGluZ3MucGx1c0dldEF0dHJpYnV0ZShcInR5cGVzXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMxOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHRcdGlmIChlbmFibGVkVHlwZXMgPT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuaOqOmAgeadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KHNldHRpbmdzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZW5hYmxlZFR5cGVzID0gYXBwLmVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcygpO1xyXG5cdFx0aWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5o6o6YCB5p2D6ZmQ5rKh5pyJ5byA5ZCvIVwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5bey57uP5byA5ZCv5o6o6YCB5Yqf6IO9IVwiKVxyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJlbmFibGVkVHlwZXMyOlwiICsgZW5hYmxlZFR5cGVzKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KGFwcCk7XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFVJQXBwbGljYXRpb24pO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWumuS9jeadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25Mb2NhdGlvbigpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0cmVzdWx0ID0gKHN0YXR1cyAhPSAyKVxyXG5cdGNvbnNvbGUubG9nKFwi5a6a5L2N5p2D6ZmQ5byA5ZCv77yaXCIgKyByZXN1bHQpO1xyXG5cdC8vIOS7peS4i+S7o+eggeWIpOaWreS6huaJi+acuuiuvuWkh+eahOWumuS9jeaYr+WQpuWFs+mXre+8jOaOqOiNkOWPpuihjOS9v+eUqOaWueazlSBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uXHJcblx0LyogdmFyIGVuYWJsZSA9IGNsbG9jYXRpb25NYW5nZXIubG9jYXRpb25TZXJ2aWNlc0VuYWJsZWQoKTtcclxuXHR2YXIgc3RhdHVzID0gY2xsb2NhdGlvbk1hbmdlci5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJlbmFibGU6XCIgKyBlbmFibGUpO1xyXG5cdGNvbnNvbGUubG9nKFwic3RhdHVzOlwiICsgc3RhdHVzKTtcclxuXHRpZiAoZW5hYmxlICYmIHN0YXR1cyAhPSAyKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLmiYvmnLrlrprkvY3mnI3liqHlt7LlvIDlkK/kuJTlt7LmjojkuojlrprkvY3mnYPpmZBcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5omL5py657O757uf55qE5a6a5L2N5rKh5pyJ5omT5byA5oiW5pyq57uZ5LqI5a6a5L2N5p2D6ZmQXCIpO1xyXG5cdH0gKi9cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat6bqm5YWL6aOO5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblJlY29yZCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIGF2YXVkaW9zZXNzaW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiQVZBdWRpb1Nlc3Npb25cIik7XHJcblx0dmFyIGF2YXVkaW8gPSBhdmF1ZGlvc2Vzc2lvbi5zaGFyZWRJbnN0YW5jZSgpO1xyXG5cdHZhciBwZXJtaXNzaW9uU3RhdHVzID0gYXZhdWRpby5yZWNvcmRQZXJtaXNzaW9uKCk7XHJcblx0Y29uc29sZS5sb2coXCJwZXJtaXNzaW9uU3RhdHVzOlwiICsgcGVybWlzc2lvblN0YXR1cyk7XHJcblx0aWYgKHBlcm1pc3Npb25TdGF0dXMgPT0gMTY4NDM2OTAxNyB8fCBwZXJtaXNzaW9uU3RhdHVzID09IDE5NzAxNjg5NDgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi6bqm5YWL6aOO5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLpuqblhYvpo47mnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhdmF1ZGlvc2Vzc2lvbik7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45py65p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvbkNhbWVyYSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIEFWQ2FwdHVyZURldmljZSA9IHBsdXMuaW9zLmltcG9ydChcIkFWQ2FwdHVyZURldmljZVwiKTtcclxuXHR2YXIgYXV0aFN0YXR1cyA9IEFWQ2FwdHVyZURldmljZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yTWVkaWFUeXBlKCd2aWRlJyk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45py65p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOacuuadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KEFWQ2FwdHVyZURldmljZSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat55u45YaM5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblBob3RvTGlicmFyeSgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIFBIUGhvdG9MaWJyYXJ5ID0gcGx1cy5pb3MuaW1wb3J0KFwiUEhQaG90b0xpYnJhcnlcIik7XHJcblx0dmFyIGF1dGhTdGF0dXMgPSBQSFBob3RvTGlicmFyeS5hdXRob3JpemF0aW9uU3RhdHVzKCk7XHJcblx0Y29uc29sZS5sb2coXCJhdXRoU3RhdHVzOlwiICsgYXV0aFN0YXR1cyk7XHJcblx0aWYgKGF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi55u45YaM5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOWGjOadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KFBIUGhvdG9MaWJyYXJ5KTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3pgJrorq/lvZXmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ29udGFjdCgpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIENOQ29udGFjdFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiQ05Db250YWN0U3RvcmVcIik7XHJcblx0dmFyIGNuQXV0aFN0YXR1cyA9IENOQ29udGFjdFN0b3JlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlKDApO1xyXG5cdGlmIChjbkF1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi6YCa6K6v5b2V5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIumAmuiur+W9leadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KENOQ29udGFjdFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3ml6XljobmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBFS0V2ZW50U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJFS0V2ZW50U3RvcmVcIik7XHJcblx0dmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcclxuXHRpZiAoZWtBdXRoU3RhdHVzID09IDMpIHtcclxuXHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIuaXpeWOhuadg+mZkOW3sue7j+W8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCLml6XljobmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChFS0V2ZW50U3RvcmUpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreWkh+W/mOW9leadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKCkge1xyXG5cdHZhciByZXN1bHQgPSBmYWxzZTtcclxuXHR2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xyXG5cdHZhciBla0F1dGhTdGF0dXMgPSBFS0V2ZW50U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMSk7XHJcblx0aWYgKGVrQXV0aFN0YXR1cyA9PSAzKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLlpIflv5jlvZXmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5aSH5b+Y5b2V5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH1cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoRUtFdmVudFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBBbmRyb2lk5p2D6ZmQ5p+l6K+iXHJcbmZ1bmN0aW9uIHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbihwZXJtaXNzaW9uSUQpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0cGx1cy5hbmRyb2lkLnJlcXVlc3RQZXJtaXNzaW9ucyhcclxuXHRcdFx0W3Blcm1pc3Npb25JRF0sIC8vIOeQhuiuuuS4iuaUr+aMgeWkmuS4quadg+mZkOWQjOaXtuafpeivou+8jOS9huWunumZheS4iuacrOWHveaVsOWwgeijheWPquWkhOeQhuS6huS4gOS4quadg+mZkOeahOaDheWGteOAguaciemcgOimgeeahOWPr+iHquihjOaJqeWxleWwgeijhVxyXG5cdFx0XHRmdW5jdGlvbihyZXN1bHRPYmopIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gMDtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5ncmFudGVkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZ3JhbnRlZFBlcm1pc3Npb24gPSByZXN1bHRPYmouZ3JhbnRlZFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRQcmVzZW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24gPSByZXN1bHRPYmouZGVuaWVkUHJlc2VudFtpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdE9iai5kZW5pZWRBbHdheXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHZhciBkZW5pZWRBbHdheXNQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZEFsd2F5c1tpXTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmsLjkuYXmi5Lnu53nlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkQWx3YXlzUGVybWlzc2lvbik7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSAtMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XHJcblx0XHRcdFx0Ly8g6Iul5omA6ZyA5p2D6ZmQ6KKr5ouS57udLOWImeaJk+W8gEFQUOiuvue9rueVjOmdoizlj6/ku6XlnKhBUFDorr7nva7nlYzpnaLmiZPlvIDnm7jlupTmnYPpmZBcclxuXHRcdFx0XHQvLyBpZiAocmVzdWx0ICE9IDEpIHtcclxuXHRcdFx0XHQvLyBnb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKVxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn55Sz6K+35p2D6ZmQ6ZSZ6K+v77yaJyArIGVycm9yLmNvZGUgKyBcIiA9IFwiICsgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdFx0cmVzb2x2ZSh7XHJcblx0XHRcdFx0XHRjb2RlOiBlcnJvci5jb2RlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDkvb/nlKjkuIDkuKrmlrnms5XvvIzmoLnmja7lj4LmlbDliKTmlq3mnYPpmZBcclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uKHBlcm1pc3Npb25JRCkge1xyXG5cdGlmIChwZXJtaXNzaW9uSUQgPT0gXCJsb2NhdGlvblwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uTG9jYXRpb24oKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwiY2FtZXJhXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYW1lcmEoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicGhvdG9MaWJyYXJ5XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicmVjb3JkXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwicHVzaFwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uUHVzaCgpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJjb250YWN0XCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25Db250YWN0KClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcImNhbGVuZGFyXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25DYWxlbmRhcigpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJtZW1vXCIpIHtcclxuXHRcdHJldHVybiBqdWRnZUlvc1Blcm1pc3Npb25NZW1vKClcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyDot7PovazliLAqKuW6lOeUqCoq55qE5p2D6ZmQ6aG16Z2iXHJcbmZ1bmN0aW9uIGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpIHtcclxuXHRpZiAoaXNJb3MpIHtcclxuXHRcdHZhciBVSUFwcGxpY2F0aW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlBcHBsaWNhdGlvblwiKTtcclxuXHRcdHZhciBhcHBsaWNhdGlvbjIgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XHJcblx0XHR2YXIgTlNVUkwyID0gcGx1cy5pb3MuaW1wb3J0KFwiTlNVUkxcIik7XHJcblx0XHQvLyB2YXIgc2V0dGluZzIgPSBOU1VSTDIuVVJMV2l0aFN0cmluZyhcInByZWZzOnJvb3Q9TE9DQVRJT05fU0VSVklDRVNcIik7XHRcdFxyXG5cdFx0dmFyIHNldHRpbmcyID0gTlNVUkwyLlVSTFdpdGhTdHJpbmcoXCJhcHAtc2V0dGluZ3M6XCIpO1xyXG5cdFx0YXBwbGljYXRpb24yLm9wZW5VUkwoc2V0dGluZzIpO1xyXG5cclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5nMik7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoTlNVUkwyKTtcclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhcHBsaWNhdGlvbjIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhwbHVzLmRldmljZS52ZW5kb3IpO1xyXG5cdFx0dmFyIEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5JbnRlbnRcIik7XHJcblx0XHR2YXIgU2V0dGluZ3MgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLnByb3ZpZGVyLlNldHRpbmdzXCIpO1xyXG5cdFx0dmFyIFVyaSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubmV0LlVyaVwiKTtcclxuXHRcdHZhciBtYWluQWN0aXZpdHkgPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIGludGVudCA9IG5ldyBJbnRlbnQoKTtcclxuXHRcdGludGVudC5zZXRBY3Rpb24oU2V0dGluZ3MuQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MpO1xyXG5cdFx0dmFyIHVyaSA9IFVyaS5mcm9tUGFydHMoXCJwYWNrYWdlXCIsIG1haW5BY3Rpdml0eS5nZXRQYWNrYWdlTmFtZSgpLCBudWxsKTtcclxuXHRcdGludGVudC5zZXREYXRhKHVyaSk7XHJcblx0XHRtYWluQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xyXG5cdH1cclxufVxyXG5cclxuLy8g5qOA5p+l57O757uf55qE6K6+5aSH5pyN5Yqh5piv5ZCm5byA5ZCvXHJcbi8vIHZhciBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5mdW5jdGlvbiBjaGVja1N5c3RlbUVuYWJsZUxvY2F0aW9uKCkge1xyXG5cdGlmIChpc0lvcykge1xyXG5cdFx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdFx0dmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcclxuXHRcdHZhciByZXN1bHQgPSBjbGxvY2F0aW9uTWFuZ2VyLmxvY2F0aW9uU2VydmljZXNFbmFibGVkKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIuezu+e7n+WumuS9jeW8gOWQrzpcIiArIHJlc3VsdCk7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoY2xsb2NhdGlvbk1hbmdlcik7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY29udGV4dCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQuY29udGVudC5Db250ZXh0XCIpO1xyXG5cdFx0dmFyIGxvY2F0aW9uTWFuYWdlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubG9jYXRpb24uTG9jYXRpb25NYW5hZ2VyXCIpO1xyXG5cdFx0dmFyIG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0dmFyIG1haW5TdnIgPSBtYWluLmdldFN5c3RlbVNlcnZpY2UoY29udGV4dC5MT0NBVElPTl9TRVJWSUNFKTtcclxuXHRcdHZhciByZXN1bHQgPSBtYWluU3ZyLmlzUHJvdmlkZXJFbmFibGVkKGxvY2F0aW9uTWFuYWdlci5HUFNfUFJPVklERVIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLns7vnu5/lrprkvY3lvIDlkK86XCIgKyByZXN1bHQpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdFxyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0anVkZ2VJb3NQZXJtaXNzaW9uOiBqdWRnZUlvc1Blcm1pc3Npb24sXHJcblx0cmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uOiByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24sXHJcblx0Y2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbjogY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbixcclxuXHRnb3RvQXBwUGVybWlzc2lvblNldHRpbmc6IGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZ1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ })
],[[0,"app-config"]]]);