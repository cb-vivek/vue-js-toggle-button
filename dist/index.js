(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["VueJsToggleButton"] = factory(require("vue"));
	else
		root["VueJsToggleButton"] = factory(root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(4)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(6),
  /* scopeId */
  "data-v-25adc6c0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//

var DEF_CHECKED_COLOR = '#75C791';
var DEF_UNCHEKED_COLOR = '#bfcbd9';

var DEF_CHECKED_LABEL = 'on';
var DEF_UNCHECKED_LABEL = 'off';

var CORE_SIZE = 20;
// 11/25 = -.44
var DEFAULT_HEIGHT = 22;
var DEFAULT_WIDTH = 50;

var objectHas = function objectHas(object, title) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.hasOwnProperty(title);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ToggleButton',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    sync: {
      type: Boolean,
      default: false
    },
    scale: {
      type: Number,
      default: 1
    },
    color: {
      type: [String, Object],
      validator: function validator(value) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          return value.checked || value.unchecked;
        }

        return typeof value === 'string';
      }
    },
    labels: {
      type: [Boolean, Object],
      default: false,
      validator: function validator(value) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          return value.checked || value.unchecked;
        }

        return typeof value === 'boolean';
      }
    },
    width: {
      type: Number,
      default: 50
    }
  },
  computed: {
    colorChecked: function colorChecked() {
      if (_typeof(this.color) !== 'object') {
        return this.color || DEF_CHECKED_COLOR;
      }

      return objectHas(this.color, 'checked') ? this.color.checked : DEF_CHECKED_COLOR;
    },
    colorUnchecked: function colorUnchecked() {
      return objectHas(this.color, 'unchecked') ? this.color.unchecked : DEF_UNCHEKED_COLOR;
    },
    colorCurrent: function colorCurrent() {
      return this.toggled ? this.colorChecked : this.colorUnchecked;
    },
    labelChecked: function labelChecked() {
      return objectHas(this.labels, 'checked') ? this.labels.checked : DEF_CHECKED_LABEL;
    },
    labelUnchecked: function labelUnchecked() {
      return objectHas(this.labels, 'unchecked') ? this.labels.unchecked : DEF_UNCHECKED_LABEL;
    },
    coreStyle: function coreStyle() {
      return {
        'background-color': this.colorCurrent,
        'border-color': this.colorCurrent,
        '--toggle-width': this.width + 'px',
        '--toggle-transform-distance': this.width - CORE_SIZE + 'px'
      };
    }
  },
  watch: {
    value: function value(_value) {
      if (this.sync) {
        this.toggled = _value;
      }
    }
  },
  data: function data() {
    return {
      toggled: this.value
    };
  },

  methods: {
    toggle: function toggle(event) {
      this.toggled = !this.toggled;
      this.$emit('change', { value: this.toggled, srcEvent: event });
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Button_vue__);



var plugin = {
  install: function install(Vue, options) {
    Vue.component('ToggleButton', __WEBPACK_IMPORTED_MODULE_1__Button_vue___default.a);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (plugin);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "vue-js-switch",
    class: {
      toggled: _vm.toggled, disabled: _vm.disabled
    }
  }, [_c('input', {
    staticClass: "v-switch-input",
    attrs: {
      "type": "checkbox"
    },
    on: {
      "change": function($event) {
        $event.stopPropagation();
        _vm.toggle($event)
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "v-switch-core",
    style: (_vm.coreStyle)
  }), _vm._v(" "), (_vm.labels) ? _c('div', [(_vm.toggled) ? _c('span', {
    staticClass: "v-switch-label v-left"
  }, [_vm._v(_vm._s(_vm.labelChecked))]) : _c('span', {
    staticClass: "v-switch-label v-right"
  }, [_vm._v(_vm._s(_vm.labelUnchecked))])]) : _vm._e()])
},staticRenderFns: []}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map