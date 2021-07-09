module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./assets/main.css":
/*!*************************!*\
  !*** ./assets/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./blocks/CollectionView/CollectionView.builder.ts":
/*!*********************************************************!*\
  !*** ./blocks/CollectionView/CollectionView.builder.ts ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductGrid_ProductGrid_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProductGrid/ProductGrid.builder */ "./blocks/ProductGrid/ProductGrid.builder.ts");
/* harmony import */ var _config_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/builder */ "./config/builder.ts");
/* harmony import */ var blocks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blocks/utils */ "./blocks/utils.ts");




const LazyCollectionView = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./CollectionView */ "./blocks/CollectionView/CollectionView.tsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./CollectionView */ "./blocks/CollectionView/CollectionView.tsx")],
    modules: [`./CollectionView`]
  }
});
const collectionBoxSchema = [{
  name: 'productGridOptions',
  type: 'object',
  subFields: _ProductGrid_ProductGrid_builder__WEBPACK_IMPORTED_MODULE_1__["productGridSchema"],
  defaultValue: {
    cardProps: {
      imgPriority: true,
      imgLayout: 'responsive',
      imgLoading: 'eager',
      imgWidth: 540,
      imgHeight: 540,
      layout: 'fixed'
    }
  }
}, {
  type: 'boolean',
  name: 'renderSeo',
  advanced: true,
  helperText: 'toggle to render seo info on page, only use for collection pages'
}];
Object(blocks_utils__WEBPACK_IMPORTED_MODULE_3__["restrictedRegister"])(LazyCollectionView, {
  name: 'CollectionBox',
  description: 'Pick a collection to display its details',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/collage.svg',
  inputs: collectionBoxSchema.concat([{
    name: 'collection',
    // ShopifyCollectionHandle is a custom type defined in @builder.io/plugin-shopify that let's the user pick a collection from a picker and resolves to it's handle
    type: `${_config_builder__WEBPACK_IMPORTED_MODULE_2__["default"].isDemo ? 'ShopifyStore' : 'Shopify'}CollectionHandle`
  }]).reverse()
}, ['page', 'product-page', 'theme']);
Object(blocks_utils__WEBPACK_IMPORTED_MODULE_3__["restrictedRegister"])(LazyCollectionView, {
  name: 'CollectionView',
  description: 'Dynamic collection detaills, autobinds to the collection in context, use only on collection pages',
  inputs: collectionBoxSchema,
  defaults: {
    bindings: {
      'component.options.collection': 'state.collection',
      'component.options.renderSeo': 'true'
    }
  }
}, ['collection-page', 'theme']);

/***/ }),

/***/ "./blocks/ProductGrid/ProductGrid.builder.ts":
/*!***************************************************!*\
  !*** ./blocks/ProductGrid/ProductGrid.builder.ts ***!
  \***************************************************/
/*! exports provided: productGridSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productGridSchema", function() { return productGridSchema; });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @builder.io/react */ "@builder.io/react");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_1__);


const LazyProductGrid = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(async () => {
  return (await __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./ProductGrid */ "./blocks/ProductGrid/ProductGrid.tsx"))).ProductGrid;
}, {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./ProductGrid */ "./blocks/ProductGrid/ProductGrid.tsx")],
    modules: ['./ProductGrid']
  }
});
const isDemo = Boolean(process.env.IS_DEMO);
const productCardFields = [{
  name: 'imgWidth',
  type: 'number',
  defaultValue: 540
}, {
  name: 'imgHeight',
  type: 'number',
  defaultValue: 540
}, {
  name: 'imgPriority',
  type: 'boolean',
  advanced: true,
  defaultValue: true
}, {
  name: 'imgLoading',
  type: 'enum',
  advanced: true,
  defaultValue: 'lazy',
  enum: ['eager', 'lazy']
}, {
  name: 'imgLayout',
  type: 'enum',
  enum: ['fixed', 'intrinsic', 'responsive', 'fill'],
  advanced: true,
  defaultValue: 'fill'
}];
const productGridSchema = [{
  name: 'cardProps',
  defaultValue: {
    imgPriority: true,
    imgLayout: 'responsive',
    imgLoading: 'eager',
    imgWidth: 540,
    imgHeight: 540,
    layout: 'fixed'
  },
  type: 'object',
  subFields: productCardFields
}, {
  name: 'offset',
  type: 'number',
  defaultValue: 0
}, {
  name: 'limit',
  type: 'number',
  defaultValue: 9
}];
_builder_io_react__WEBPACK_IMPORTED_MODULE_1__["Builder"].registerComponent(LazyProductGrid, {
  name: 'ProductGrid',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/play-list-add.svg',
  description: 'Pick products free form',
  inputs: [{
    name: 'productsList',
    type: 'list',
    subFields: [{
      name: 'product',
      type: `${isDemo ? 'ShopifyStore' : 'Shopify'}ProductHandle`
    }]
  }].concat(productGridSchema)
});
_builder_io_react__WEBPACK_IMPORTED_MODULE_1__["Builder"].registerComponent(LazyProductGrid, {
  name: 'ProductCollectionGrid',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/display-grid.svg',
  description: 'Choose a collection to show its products in a grid',
  inputs: [{
    name: 'collection',
    type: `${isDemo ? 'ShopifyStore' : 'Shopify'}CollectionHandle`
  }].concat(productGridSchema)
});

/***/ }),

/***/ "./blocks/ProductView/ProductView.builder.ts":
/*!***************************************************!*\
  !*** ./blocks/ProductView/ProductView.builder.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blocks_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blocks/utils */ "./blocks/utils.ts");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);


const isDemo = Boolean(process.env.IS_DEMO);
const LazyProductView = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => isDemo ? __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! blocks/ProductView/ProductViewDemo */ "./blocks/ProductView/ProductViewDemo.tsx")) : __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! blocks/ProductView/ProductView */ "./blocks/ProductView/ProductView.tsx")), {
  ssr: true,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! blocks/ProductView/ProductViewDemo */ "./blocks/ProductView/ProductViewDemo.tsx"), /*require.resolve*/(/*! blocks/ProductView/ProductView */ "./blocks/ProductView/ProductView.tsx")],
    modules: [`blocks/ProductView/ProductViewDemo`, `blocks/ProductView/ProductView`]
  }
});
Object(blocks_utils__WEBPACK_IMPORTED_MODULE_0__["restrictedRegister"])(LazyProductView, {
  name: 'ProductView',
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/inpicture.svg',
  description: 'Product details, should only be used in product page template, dynamically bind to product in context.',
  defaults: {
    bindings: {
      'component.options.product': 'state.product',
      'component.options.title': 'state.product.title',
      'component.options.description': 'state.product.descriptionHtml'
    }
  }
}, ['product-page', 'theme']);
Object(blocks_utils__WEBPACK_IMPORTED_MODULE_0__["restrictedRegister"])(LazyProductView, {
  name: 'ProductBox',
  inputs: [{
    name: 'product',
    type: `${isDemo ? 'ShopifyStore' : 'Shopify'}ProductHandle`
  }, {
    name: 'description',
    richText: true,
    type: 'html',
    helperText: 'Override product description from shopify'
  }, {
    name: 'title',
    type: 'text',
    helperText: 'Override product title from shopify'
  }],
  image: 'https://unpkg.com/css.gg@2.0.0/icons/svg/ereader.svg',
  description: 'Choose a product to show its details on page'
}, ['page', 'collection-page', 'theme']);

/***/ }),

/***/ "./blocks/utils.ts":
/*!*************************!*\
  !*** ./blocks/utils.ts ***!
  \*************************/
/*! exports provided: restrictedRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restrictedRegister", function() { return restrictedRegister; });
/* harmony import */ var _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @builder.io/sdk */ "@builder.io/sdk");
/* harmony import */ var _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__);

function restrictedRegister(component, options, models) {
  if (!_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__["Builder"].isEditing || models.includes(_builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__["builder"].editingModel)) {
    return _builder_io_sdk__WEBPACK_IMPORTED_MODULE_0__["Builder"].registerComponent(component, options);
  }
}

/***/ }),

/***/ "./config/builder.ts":
/*!***************************!*\
  !*** ./config/builder.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = ({
  apiKey: "043c08cc2d9a4333b78c197801c1adc9",
  productsModel: 'shopify-product',
  collectionsModel: 'shopify-collection',
  isDemo: Boolean(process.env.IS_DEMO)
});

/***/ }),

/***/ "./node_modules/keen-slider/keen-slider.min.css":
/*!******************************************************!*\
  !*** ./node_modules/keen-slider/keen-slider.min.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/main.css */ "./assets/main.css");
/* harmony import */ var _assets_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ "./node_modules/keen-slider/keen-slider.min.css");
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @builder.io/react */ "@builder.io/react");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @config/builder */ "./config/builder.ts");
/* harmony import */ var _blocks_ProductGrid_ProductGrid_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/ProductGrid/ProductGrid.builder */ "./blocks/ProductGrid/ProductGrid.builder.ts");
/* harmony import */ var _blocks_CollectionView_CollectionView_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/CollectionView/CollectionView.builder */ "./blocks/CollectionView/CollectionView.builder.ts");
/* harmony import */ var _blocks_ProductView_ProductView_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/ProductView/ProductView.builder */ "./blocks/ProductView/ProductView.builder.ts");


var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["builder"].init(_config_builder__WEBPACK_IMPORTED_MODULE_4__["default"].apiKey);



_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["Builder"].register('insertMenu', {
  name: 'Shopify Collections Components',
  items: [{
    name: 'CollectionBox',
    label: 'Collection stuff'
  }, {
    name: 'ProductCollectionGrid'
  }, {
    name: 'CollectionView'
  }]
});
_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["Builder"].register('insertMenu', {
  name: 'Shopify Products Components',
  items: [{
    name: 'ProductGrid'
  }, {
    name: 'ProductBox'
  }, {
    name: 'ProductView'
  }]
});

const Noop = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  children: children
}, void 0, false);

function MyApp({
  Component,
  pageProps
}) {
  const Layout = Component.Layout || Noop;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
      pageProps: pageProps,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@builder.io/react":
/*!************************************!*\
  !*** external "@builder.io/react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@builder.io/react");

/***/ }),

/***/ "@builder.io/sdk":
/*!**********************************!*\
  !*** external "@builder.io/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@builder.io/sdk");

/***/ }),

/***/ "@builder.io/widgets":
/*!**************************************!*\
  !*** external "@builder.io/widgets" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@builder.io/widgets");

/***/ }),

/***/ "@theme-ui/components":
/*!***************************************!*\
  !*** external "@theme-ui/components" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@theme-ui/components");

/***/ }),

/***/ "@theme-ui/match-media":
/*!****************************************!*\
  !*** external "@theme-ui/match-media" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@theme-ui/match-media");

/***/ }),

/***/ "@theme-ui/presets":
/*!************************************!*\
  !*** external "@theme-ui/presets" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@theme-ui/presets");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "pure-react-carousel":
/*!**************************************!*\
  !*** external "pure-react-carousel" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pure-react-carousel");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-spring-modal":
/*!*************************************!*\
  !*** external "react-spring-modal" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring-modal");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "shopify-buy":
/*!******************************!*\
  !*** external "shopify-buy" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shopify-buy");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2Jsb2Nrcy9Db2xsZWN0aW9uVmlldy9Db2xsZWN0aW9uVmlldy5idWlsZGVyLnRzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9Qcm9kdWN0R3JpZC9Qcm9kdWN0R3JpZC5idWlsZGVyLnRzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9Qcm9kdWN0Vmlldy9Qcm9kdWN0Vmlldy5idWlsZGVyLnRzIiwid2VicGFjazovLy8uL2Jsb2Nrcy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYnVpbGRlci5pby9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBidWlsZGVyLmlvL3Nka1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBidWlsZGVyLmlvL3dpZGdldHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGhlbWUtdWkvY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0aGVtZS11aS9tYXRjaC1tZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0aGVtZS11aS9wcmVzZXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1cmUtcmVhY3QtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmctbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9waWZ5LWJ1eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsiTGF6eUNvbGxlY3Rpb25WaWV3IiwiZHluYW1pYyIsImNvbGxlY3Rpb25Cb3hTY2hlbWEiLCJuYW1lIiwidHlwZSIsInN1YkZpZWxkcyIsInByb2R1Y3RHcmlkU2NoZW1hIiwiZGVmYXVsdFZhbHVlIiwiY2FyZFByb3BzIiwiaW1nUHJpb3JpdHkiLCJpbWdMYXlvdXQiLCJpbWdMb2FkaW5nIiwiaW1nV2lkdGgiLCJpbWdIZWlnaHQiLCJsYXlvdXQiLCJhZHZhbmNlZCIsImhlbHBlclRleHQiLCJyZXN0cmljdGVkUmVnaXN0ZXIiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaW5wdXRzIiwiY29uY2F0IiwiYnVpbGRlckNvbmZpZyIsImlzRGVtbyIsInJldmVyc2UiLCJkZWZhdWx0cyIsImJpbmRpbmdzIiwiTGF6eVByb2R1Y3RHcmlkIiwiUHJvZHVjdEdyaWQiLCJCb29sZWFuIiwicHJvY2VzcyIsImVudiIsIklTX0RFTU8iLCJwcm9kdWN0Q2FyZEZpZWxkcyIsImVudW0iLCJCdWlsZGVyIiwicmVnaXN0ZXJDb21wb25lbnQiLCJMYXp5UHJvZHVjdFZpZXciLCJzc3IiLCJyaWNoVGV4dCIsImNvbXBvbmVudCIsIm9wdGlvbnMiLCJtb2RlbHMiLCJpc0VkaXRpbmciLCJpbmNsdWRlcyIsImJ1aWxkZXIiLCJlZGl0aW5nTW9kZWwiLCJhcGlLZXkiLCJwcm9kdWN0c01vZGVsIiwiY29sbGVjdGlvbnNNb2RlbCIsImluaXQiLCJyZWdpc3RlciIsIml0ZW1zIiwibGFiZWwiLCJOb29wIiwiY2hpbGRyZW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkxheW91dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxtQ0FBbUM7UUFDbkM7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5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SUFBNUM7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLE1BQUQ7QUFBUSxlQUFTLEVBQUVJLFNBQW5CO0FBQUEsNkJBQ0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0QsOEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL19hcHBcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICdAYnVpbGRlci5pby9yZWFjdCdcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGJ1aWxkZXIuaW8vc2RrJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgcHJvZHVjdEdyaWRTY2hlbWEgfSBmcm9tICcuLi9Qcm9kdWN0R3JpZC9Qcm9kdWN0R3JpZC5idWlsZGVyJ1xuaW1wb3J0IGJ1aWxkZXJDb25maWcgZnJvbSAnQGNvbmZpZy9idWlsZGVyJ1xuaW1wb3J0IHsgcmVzdHJpY3RlZFJlZ2lzdGVyIH0gZnJvbSAnYmxvY2tzL3V0aWxzJ1xuY29uc3QgTGF6eUNvbGxlY3Rpb25WaWV3ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoYC4vQ29sbGVjdGlvblZpZXdgKSlcblxuY29uc3QgY29sbGVjdGlvbkJveFNjaGVtYTogSW5wdXRbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdwcm9kdWN0R3JpZE9wdGlvbnMnLFxuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHN1YkZpZWxkczogcHJvZHVjdEdyaWRTY2hlbWEsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICBjYXJkUHJvcHM6IHtcbiAgICAgICAgaW1nUHJpb3JpdHk6IHRydWUsXG4gICAgICAgIGltZ0xheW91dDogJ3Jlc3BvbnNpdmUnLFxuICAgICAgICBpbWdMb2FkaW5nOiAnZWFnZXInLFxuICAgICAgICBpbWdXaWR0aDogNTQwLFxuICAgICAgICBpbWdIZWlnaHQ6IDU0MCxcbiAgICAgICAgbGF5b3V0OiAnZml4ZWQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIG5hbWU6ICdyZW5kZXJTZW8nLFxuICAgIGFkdmFuY2VkOiB0cnVlLFxuICAgIGhlbHBlclRleHQ6XG4gICAgICAndG9nZ2xlIHRvIHJlbmRlciBzZW8gaW5mbyBvbiBwYWdlLCBvbmx5IHVzZSBmb3IgY29sbGVjdGlvbiBwYWdlcycsXG4gIH0sXG5dXG5cbnJlc3RyaWN0ZWRSZWdpc3RlcihcbiAgTGF6eUNvbGxlY3Rpb25WaWV3LFxuICB7XG4gICAgbmFtZTogJ0NvbGxlY3Rpb25Cb3gnLFxuICAgIGRlc2NyaXB0aW9uOiAnUGljayBhIGNvbGxlY3Rpb24gdG8gZGlzcGxheSBpdHMgZGV0YWlscycsXG4gICAgaW1hZ2U6ICdodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvc3ZnL2NvbGxhZ2Uuc3ZnJyxcbiAgICBpbnB1dHM6IGNvbGxlY3Rpb25Cb3hTY2hlbWFcbiAgICAgIC5jb25jYXQoW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NvbGxlY3Rpb24nLFxuICAgICAgICAgIC8vIFNob3BpZnlDb2xsZWN0aW9uSGFuZGxlIGlzIGEgY3VzdG9tIHR5cGUgZGVmaW5lZCBpbiBAYnVpbGRlci5pby9wbHVnaW4tc2hvcGlmeSB0aGF0IGxldCdzIHRoZSB1c2VyIHBpY2sgYSBjb2xsZWN0aW9uIGZyb20gYSBwaWNrZXIgYW5kIHJlc29sdmVzIHRvIGl0J3MgaGFuZGxlXG4gICAgICAgICAgdHlwZTogYCR7XG4gICAgICAgICAgICBidWlsZGVyQ29uZmlnLmlzRGVtbyA/ICdTaG9waWZ5U3RvcmUnIDogJ1Nob3BpZnknXG4gICAgICAgICAgfUNvbGxlY3Rpb25IYW5kbGVgLFxuICAgICAgICB9LFxuICAgICAgXSlcbiAgICAgIC5yZXZlcnNlKCksXG4gIH0sXG4gIFsncGFnZScsICdwcm9kdWN0LXBhZ2UnLCAndGhlbWUnXVxuKVxuXG5yZXN0cmljdGVkUmVnaXN0ZXIoXG4gIExhenlDb2xsZWN0aW9uVmlldyxcbiAge1xuICAgIG5hbWU6ICdDb2xsZWN0aW9uVmlldycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRHluYW1pYyBjb2xsZWN0aW9uIGRldGFpbGxzLCBhdXRvYmluZHMgdG8gdGhlIGNvbGxlY3Rpb24gaW4gY29udGV4dCwgdXNlIG9ubHkgb24gY29sbGVjdGlvbiBwYWdlcycsXG4gICAgaW5wdXRzOiBjb2xsZWN0aW9uQm94U2NoZW1hLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICBiaW5kaW5nczoge1xuICAgICAgICAnY29tcG9uZW50Lm9wdGlvbnMuY29sbGVjdGlvbic6ICdzdGF0ZS5jb2xsZWN0aW9uJyxcbiAgICAgICAgJ2NvbXBvbmVudC5vcHRpb25zLnJlbmRlclNlbyc6ICd0cnVlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgWydjb2xsZWN0aW9uLXBhZ2UnLCAndGhlbWUnXVxuKVxuIiwiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgQnVpbGRlciB9IGZyb20gJ0BidWlsZGVyLmlvL3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYnVpbGRlci5pby9zZGsnXG5jb25zdCBMYXp5UHJvZHVjdEdyaWQgPSBkeW5hbWljKGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIChhd2FpdCBpbXBvcnQoJy4vUHJvZHVjdEdyaWQnKSkuUHJvZHVjdEdyaWRcbn0pXG5jb25zdCBpc0RlbW8gPSBCb29sZWFuKHByb2Nlc3MuZW52LklTX0RFTU8pXG5cbmNvbnN0IHByb2R1Y3RDYXJkRmllbGRzOiBJbnB1dFtdID0gW1xuICB7XG4gICAgbmFtZTogJ2ltZ1dpZHRoJyxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDU0MCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpbWdIZWlnaHQnLFxuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogNTQwLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2ltZ1ByaW9yaXR5JyxcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgYWR2YW5jZWQ6IHRydWUsXG4gICAgZGVmYXVsdFZhbHVlOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2ltZ0xvYWRpbmcnLFxuICAgIHR5cGU6ICdlbnVtJyxcbiAgICBhZHZhbmNlZDogdHJ1ZSxcbiAgICBkZWZhdWx0VmFsdWU6ICdsYXp5JyxcbiAgICBlbnVtOiBbJ2VhZ2VyJywgJ2xhenknXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpbWdMYXlvdXQnLFxuICAgIHR5cGU6ICdlbnVtJyxcbiAgICBlbnVtOiBbJ2ZpeGVkJywgJ2ludHJpbnNpYycsICdyZXNwb25zaXZlJywgJ2ZpbGwnXSxcbiAgICBhZHZhbmNlZDogdHJ1ZSxcbiAgICBkZWZhdWx0VmFsdWU6ICdmaWxsJyxcbiAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RHcmlkU2NoZW1hOiBJbnB1dFtdID0gW1xuICB7XG4gICAgbmFtZTogJ2NhcmRQcm9wcycsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICBpbWdQcmlvcml0eTogdHJ1ZSxcbiAgICAgIGltZ0xheW91dDogJ3Jlc3BvbnNpdmUnLFxuICAgICAgaW1nTG9hZGluZzogJ2VhZ2VyJyxcbiAgICAgIGltZ1dpZHRoOiA1NDAsXG4gICAgICBpbWdIZWlnaHQ6IDU0MCxcbiAgICAgIGxheW91dDogJ2ZpeGVkJyxcbiAgICB9LFxuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHN1YkZpZWxkczogcHJvZHVjdENhcmRGaWVsZHMsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGltaXQnLFxuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogOSxcbiAgfSxcbl1cblxuQnVpbGRlci5yZWdpc3RlckNvbXBvbmVudChMYXp5UHJvZHVjdEdyaWQsIHtcbiAgbmFtZTogJ1Byb2R1Y3RHcmlkJyxcbiAgaW1hZ2U6ICdodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvc3ZnL3BsYXktbGlzdC1hZGQuc3ZnJyxcbiAgZGVzY3JpcHRpb246ICdQaWNrIHByb2R1Y3RzIGZyZWUgZm9ybScsXG4gIGlucHV0czogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdwcm9kdWN0c0xpc3QnLFxuICAgICAgdHlwZTogJ2xpc3QnLFxuICAgICAgc3ViRmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJvZHVjdCcsXG4gICAgICAgICAgdHlwZTogYCR7aXNEZW1vID8gJ1Nob3BpZnlTdG9yZScgOiAnU2hvcGlmeSd9UHJvZHVjdEhhbmRsZWAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0uY29uY2F0KHByb2R1Y3RHcmlkU2NoZW1hIGFzIGFueSksXG59KVxuXG5CdWlsZGVyLnJlZ2lzdGVyQ29tcG9uZW50KExhenlQcm9kdWN0R3JpZCwge1xuICBuYW1lOiAnUHJvZHVjdENvbGxlY3Rpb25HcmlkJyxcbiAgaW1hZ2U6ICdodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvc3ZnL2Rpc3BsYXktZ3JpZC5zdmcnLFxuICBkZXNjcmlwdGlvbjogJ0Nob29zZSBhIGNvbGxlY3Rpb24gdG8gc2hvdyBpdHMgcHJvZHVjdHMgaW4gYSBncmlkJyxcbiAgaW5wdXRzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2NvbGxlY3Rpb24nLFxuICAgICAgdHlwZTogYCR7aXNEZW1vID8gJ1Nob3BpZnlTdG9yZScgOiAnU2hvcGlmeSd9Q29sbGVjdGlvbkhhbmRsZWAsXG4gICAgfSxcbiAgXS5jb25jYXQocHJvZHVjdEdyaWRTY2hlbWEpLFxufSlcbiIsImltcG9ydCB7IEJ1aWxkZXIsIGJ1aWxkZXIgfSBmcm9tICdAYnVpbGRlci5pby9yZWFjdCdcbmltcG9ydCB7IHJlc3RyaWN0ZWRSZWdpc3RlciB9IGZyb20gJ2Jsb2Nrcy91dGlscydcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcblxuY29uc3QgaXNEZW1vID0gQm9vbGVhbihwcm9jZXNzLmVudi5JU19ERU1PKVxuY29uc3QgTGF6eVByb2R1Y3RWaWV3ID0gZHluYW1pYyhcbiAgKCkgPT5cbiAgICBpc0RlbW9cbiAgICAgID8gaW1wb3J0KGBibG9ja3MvUHJvZHVjdFZpZXcvUHJvZHVjdFZpZXdEZW1vYClcbiAgICAgIDogaW1wb3J0KGBibG9ja3MvUHJvZHVjdFZpZXcvUHJvZHVjdFZpZXdgKSxcbiAgeyBzc3I6IHRydWUgfVxuKVxuXG5yZXN0cmljdGVkUmVnaXN0ZXIoXG4gIExhenlQcm9kdWN0VmlldyxcbiAge1xuICAgIG5hbWU6ICdQcm9kdWN0VmlldycsXG4gICAgaW1hZ2U6ICdodHRwczovL3VucGtnLmNvbS9jc3MuZ2dAMi4wLjAvaWNvbnMvc3ZnL2lucGljdHVyZS5zdmcnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1Byb2R1Y3QgZGV0YWlscywgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBwcm9kdWN0IHBhZ2UgdGVtcGxhdGUsIGR5bmFtaWNhbGx5IGJpbmQgdG8gcHJvZHVjdCBpbiBjb250ZXh0LicsXG4gICAgZGVmYXVsdHM6IHtcbiAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgICdjb21wb25lbnQub3B0aW9ucy5wcm9kdWN0JzogJ3N0YXRlLnByb2R1Y3QnLFxuICAgICAgICAnY29tcG9uZW50Lm9wdGlvbnMudGl0bGUnOiAnc3RhdGUucHJvZHVjdC50aXRsZScsXG4gICAgICAgICdjb21wb25lbnQub3B0aW9ucy5kZXNjcmlwdGlvbic6ICdzdGF0ZS5wcm9kdWN0LmRlc2NyaXB0aW9uSHRtbCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIFsncHJvZHVjdC1wYWdlJywgJ3RoZW1lJ11cbilcblxucmVzdHJpY3RlZFJlZ2lzdGVyKFxuICBMYXp5UHJvZHVjdFZpZXcsXG4gIHtcbiAgICBuYW1lOiAnUHJvZHVjdEJveCcsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdwcm9kdWN0JyxcbiAgICAgICAgdHlwZTogYCR7aXNEZW1vID8gJ1Nob3BpZnlTdG9yZScgOiAnU2hvcGlmeSd9UHJvZHVjdEhhbmRsZWAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICByaWNoVGV4dDogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ2h0bWwnLFxuICAgICAgICBoZWxwZXJUZXh0OiAnT3ZlcnJpZGUgcHJvZHVjdCBkZXNjcmlwdGlvbiBmcm9tIHNob3BpZnknLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RpdGxlJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBoZWxwZXJUZXh0OiAnT3ZlcnJpZGUgcHJvZHVjdCB0aXRsZSBmcm9tIHNob3BpZnknLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGltYWdlOiAnaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL3N2Zy9lcmVhZGVyLnN2ZycsXG4gICAgZGVzY3JpcHRpb246ICdDaG9vc2UgYSBwcm9kdWN0IHRvIHNob3cgaXRzIGRldGFpbHMgb24gcGFnZScsXG4gIH0sXG4gIFsncGFnZScsICdjb2xsZWN0aW9uLXBhZ2UnLCAndGhlbWUnXVxuKVxuIiwiaW1wb3J0IHsgQnVpbGRlciwgQ29tcG9uZW50LCBidWlsZGVyIH0gZnJvbSAnQGJ1aWxkZXIuaW8vc2RrJ1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzdHJpY3RlZFJlZ2lzdGVyKFxuICBjb21wb25lbnQ6IGFueSxcbiAgb3B0aW9uczogQ29tcG9uZW50LFxuICBtb2RlbHM6IHN0cmluZ1tdXG4pIHtcbiAgaWYgKCFCdWlsZGVyLmlzRWRpdGluZyB8fCBtb2RlbHMuaW5jbHVkZXMoYnVpbGRlci5lZGl0aW5nTW9kZWwhKSkge1xuICAgIHJldHVybiBCdWlsZGVyLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucylcbiAgfVxufVxuIiwiaWYgKCFwcm9jZXNzLmVudi5CVUlMREVSX1BVQkxJQ19LRVkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVudiB2YXJpYWxiZSBCVUlMREVSX1BVQkxJQ19LRVknKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuQlVJTERFUl9QVUJMSUNfS0VZLFxuICBwcm9kdWN0c01vZGVsOiAnc2hvcGlmeS1wcm9kdWN0JyxcbiAgY29sbGVjdGlvbnNNb2RlbDogJ3Nob3BpZnktY29sbGVjdGlvbicsXG4gIGlzRGVtbzogQm9vbGVhbihwcm9jZXNzLmVudi5JU19ERU1PKSxcbn1cbiIsImltcG9ydCAnQGFzc2V0cy9tYWluLmNzcydcbmltcG9ydCAna2Vlbi1zbGlkZXIva2Vlbi1zbGlkZXIubWluLmNzcydcblxuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcblxuaW1wb3J0IHsgYnVpbGRlciwgQnVpbGRlciB9IGZyb20gJ0BidWlsZGVyLmlvL3JlYWN0J1xuaW1wb3J0IGJ1aWxkZXJDb25maWcgZnJvbSAnQGNvbmZpZy9idWlsZGVyJ1xuYnVpbGRlci5pbml0KGJ1aWxkZXJDb25maWcuYXBpS2V5KVxuXG5pbXBvcnQgJy4uL2Jsb2Nrcy9Qcm9kdWN0R3JpZC9Qcm9kdWN0R3JpZC5idWlsZGVyJ1xuaW1wb3J0ICcuLi9ibG9ja3MvQ29sbGVjdGlvblZpZXcvQ29sbGVjdGlvblZpZXcuYnVpbGRlcidcbmltcG9ydCAnLi4vYmxvY2tzL1Byb2R1Y3RWaWV3L1Byb2R1Y3RWaWV3LmJ1aWxkZXInXG5cbkJ1aWxkZXIucmVnaXN0ZXIoJ2luc2VydE1lbnUnLCB7XG4gIG5hbWU6ICdTaG9waWZ5IENvbGxlY3Rpb25zIENvbXBvbmVudHMnLFxuICBpdGVtczogW1xuICAgIHsgbmFtZTogJ0NvbGxlY3Rpb25Cb3gnLCBsYWJlbDogJ0NvbGxlY3Rpb24gc3R1ZmYnIH0sXG4gICAgeyBuYW1lOiAnUHJvZHVjdENvbGxlY3Rpb25HcmlkJyB9LFxuICAgIHsgbmFtZTogJ0NvbGxlY3Rpb25WaWV3JyB9LFxuICBdLFxufSlcblxuQnVpbGRlci5yZWdpc3RlcignaW5zZXJ0TWVudScsIHtcbiAgbmFtZTogJ1Nob3BpZnkgUHJvZHVjdHMgQ29tcG9uZW50cycsXG4gIGl0ZW1zOiBbXG4gICAgeyBuYW1lOiAnUHJvZHVjdEdyaWQnIH0sXG4gICAgeyBuYW1lOiAnUHJvZHVjdEJveCcgfSxcbiAgICB7IG5hbWU6ICdQcm9kdWN0VmlldycgfSxcbiAgXSxcbn0pXG5cbmNvbnN0IE5vb3A6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4gPD57Y2hpbGRyZW59PC8+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgTGF5b3V0ID0gKENvbXBvbmVudCBhcyBhbnkpLkxheW91dCB8fCBOb29wXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCBwYWdlUHJvcHM9e3BhZ2VQcm9wc30+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYnVpbGRlci5pby9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYnVpbGRlci5pby9zZGtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJ1aWxkZXIuaW8vd2lkZ2V0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGhlbWUtdWkvY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGhlbWUtdWkvbWF0Y2gtbWVkaWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL3ByZXNldHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1cmUtcmVhY3QtY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ByaW5nLW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9waWZ5LWJ1eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9