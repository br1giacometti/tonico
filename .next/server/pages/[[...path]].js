module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/[[...path]]": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[[...path]].tsx");
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

/***/ "./blocks/ProductGrid/ProductGrid.tsx":
/*!********************************************!*\
  !*** ./blocks/ProductGrid/ProductGrid.tsx ***!
  \********************************************/
/*! exports provided: ProductGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGrid", function() { return ProductGrid; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ui */ "./components/ui/index.ts");
/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme-ui/components */ "@theme-ui/components");
/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/common */ "./components/common/index.ts");
/* harmony import */ var _lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks/src/api/operations-builder */ "./lib/shopify/storefront-data-hooks/src/api/operations-builder.ts");
/* harmony import */ var _config_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/builder */ "./config/builder.ts");
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\blocks\\ProductGrid\\ProductGrid.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxRuntime classic */

/** @jsx jsx */







const ProductGrid = ({
  products: initialProducts,
  collection,
  productsList,
  offset = 0,
  limit = 10,
  cardProps,
  highlightCard
}) => {
  const {
    0: products,
    1: setProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialProducts || []);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const getProducts = async () => {
      setLoading(true);
      const promises = productsList.map(entry => entry.product).filter(handle => typeof handle === 'string').map(async handle => await Object(_lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_5__["getProduct"])(_config_builder__WEBPACK_IMPORTED_MODULE_6__["default"], {
        handle
      }));
      setProducts(await Promise.all(promises));
      setLoading(false);
    };

    if (productsList && !initialProducts) {
      getProducts();
    }
  }, [productsList, initialProducts]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const fetchCollection = async () => {
      setLoading(true);
      const result = await Object(_lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_5__["getCollection"])(_config_builder__WEBPACK_IMPORTED_MODULE_6__["default"], {
        handle: collection
      });
      setProducts(result.products);
      setLoading(false);
    };

    if (typeof collection === 'string' && !initialProducts) {
      fetchCollection();
    }
  }, [collection]);

  if (loading) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_ui__WEBPACK_IMPORTED_MODULE_2__["LoadingDots"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 12
      }
    });
  }

  const ProductComponent = process.env.IS_DEMO ? _components_common__WEBPACK_IMPORTED_MODULE_4__["ProductCardDemo"] : _components_common__WEBPACK_IMPORTED_MODULE_4__["ProductCard"];
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_components__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    gap: 2,
    width: ['100%', '40%', '24%'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, products.slice(offset, limit).map((product, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ProductComponent, _objectSpread(_objectSpread({
    key: String(product.id) + i
  }, (highlightCard === null || highlightCard === void 0 ? void 0 : highlightCard.index) === i ? highlightCard : cardProps), {}, {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }))));
};

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

/***/ "./components/cart/CartItem/CartItem.tsx":
/*!***********************************************!*\
  !*** ./components/cart/CartItem/CartItem.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/icons */ "./components/icons/index.ts");
/* harmony import */ var _lib_shopify_storefront_data_hooks_src_utils_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks/src/utils/product */ "./lib/shopify/storefront-data-hooks/src/utils/product.ts");
/* harmony import */ var _lib_shopify_storefront_data_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks */ "./lib/shopify/storefront-data-hooks/index.ts");
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\cart\\CartItem\\CartItem.tsx";

/** @jsxRuntime classic */

/** @jsx jsx */








const CartItem = ({
  item,
  currencyCode
}) => {
  const updateItem = Object(_lib_shopify_storefront_data_hooks__WEBPACK_IMPORTED_MODULE_6__["useUpdateItemQuantity"])();
  const removeItem = Object(_lib_shopify_storefront_data_hooks__WEBPACK_IMPORTED_MODULE_6__["useRemoveItemFromCart"])();
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(item.quantity);
  const {
    0: removing,
    1: setRemoving
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const updateQuantity = async quantity => {
    await updateItem(item.variant.id, quantity);
  };

  const handleQuantity = e => {
    const val = Number(e.target.value);

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val);
    }
  };

  const handleBlur = () => {
    const val = Number(quantity);

    if (val !== item.quantity) {
      updateQuantity(val);
    }
  };

  const increaseQuantity = (n = 1) => {
    const val = Number(quantity) + n;

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val);
      updateQuantity(val);
    }
  };

  const handleRemove = async () => {
    setRemoving(true);

    try {
      // If this action succeeds then there's no need to do `setRemoving(true)`
      // because the component will be removed from the view
      await removeItem(item.variant.id);
    } catch (error) {
      console.error(error);
      setRemoving(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Reset the quantity state if the item quantity changes
    if (item.quantity !== Number(quantity)) {
      setQuantity(item.quantity);
    }
  }, [item.quantity]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    gap: 2,
    sx: {
      width: '100%',
      m: 12
    },
    columns: [2],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      padding: 1,
      border: '1px solid gray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
    height: 130,
    width: 130,
    unoptimized: true,
    alt: item.variant.image.altText,
    src: item.variant.image.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Themed"].div, {
    as: next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
    href: `/product/${item.variant.product.handle}/`,
    sx: {
      fontSize: 3,
      m: 0,
      fontWeight: 700
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, item.title, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: {
      fontSize: 4,
      fontWeight: 700,
      display: 'block',
      marginLeft: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, Object(_lib_shopify_storefront_data_hooks_src_utils_product__WEBPACK_IMPORTED_MODULE_5__["getPrice"])(item.variant.priceV2.amount, item.variant.priceV2.currencyCode || 'USD')))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Themed"].ul, {
    sx: {
      mt: 2,
      mb: 0,
      padding: 0,
      listStyle: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      display: 'flex',
      justifyItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    onClick: () => increaseQuantity(-1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_icons__WEBPACK_IMPORTED_MODULE_4__["Minus"], {
    width: 18,
    height: 18,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    sx: {
      height: '100%',
      textAlign: 'center'
    },
    type: "number",
    max: 99,
    min: 0,
    value: quantity,
    onChange: handleQuantity,
    onBlur: handleBlur,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    onClick: () => increaseQuantity(1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_icons__WEBPACK_IMPORTED_MODULE_4__["Plus"], {
    width: 18,
    height: 18,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  })))), item.variant.selectedOptions.map(option => Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
    key: option.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, option.name, ":", option.value)))));
};
/**
 *         

 */


/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "./components/cart/CartItem/index.ts":
/*!*******************************************!*\
  !*** ./components/cart/CartItem/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartItem */ "./components/cart/CartItem/CartItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CartItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/cart/CartSidebarView/CartSidebarView.tsx":
/*!*************************************************************!*\
  !*** ./components/cart/CartSidebarView/CartSidebarView.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/icons */ "./components/icons/index.ts");
/* harmony import */ var _lib_shopify_storefront_data_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks */ "./lib/shopify/storefront-data-hooks/index.ts");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CartItem */ "./components/cart/CartItem/index.ts");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @builder.io/react */ "@builder.io/react");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/env */ "./config/env.ts");
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\cart\\CartSidebarView\\CartSidebarView.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxRuntime classic */

/** @jsx jsx */









const CartSidebarView = () => {
  var _cart$lineItems;

  const checkoutUrl = Object(_lib_shopify_storefront_data_hooks__WEBPACK_IMPORTED_MODULE_3__["useCheckoutUrl"])();
  const cart = Object(_lib_shopify_storefront_data_hooks__WEBPACK_IMPORTED_MODULE_3__["useCart"])();
  const subTotal = cart === null || cart === void 0 ? void 0 : cart.subtotalPrice;
  const total = ' - ';
  const items = (_cart$lineItems = cart === null || cart === void 0 ? void 0 : cart.lineItems) !== null && _cart$lineItems !== void 0 ? _cart$lineItems : [];
  const isEmpty = items.length === 0;
  const {
    0: cartUpsell,
    1: setCartUpsell
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchContent() {
      const items = (cart === null || cart === void 0 ? void 0 : cart.lineItems) || [];
      const cartUpsellContent = await _builder_io_react__WEBPACK_IMPORTED_MODULE_5__["builder"].get('cart-upsell-sidebar', {
        cachebust: _config_env__WEBPACK_IMPORTED_MODULE_6__["default"].isDev,
        userAttributes: {
          itemInCart: items.map(item => item.variant.product.handle)
        }
      }).toPromise();
      setCartUpsell(cartUpsellContent);
    }

    fetchContent();
  }, [cart === null || cart === void 0 ? void 0 : cart.lineItems]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Themed"].div, {
    sx: _objectSpread({
      height: '100%',
      overflow: 'auto',
      paddingBottom: 5,
      bg: 'text',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      px: 2,
      color: 'background'
    }, isEmpty && {
      justifyContent: 'center'
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, isEmpty ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_icons__WEBPACK_IMPORTED_MODULE_2__["Bag"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), "Your cart is empty", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.")) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, items.map(item => {
    var _item$variant, _item$variant$priceV;

    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_CartItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: item.id,
      item: item // todo update types
      ,
      currencyCode: ((_item$variant = item.variant) === null || _item$variant === void 0 ? void 0 : (_item$variant$priceV = _item$variant.priceV2) === null || _item$variant$priceV === void 0 ? void 0 : _item$variant$priceV.currencyCode) || 'USD',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    });
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sx: {
      marginLeft: 'auto',
      minWidth: '10rem',
      paddingLeft: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    gap: 1,
    columns: 2,
    sx: {
      my: 3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "Subtotal:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: {
      marginLeft: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, subTotal), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Shipping:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: {
      marginLeft: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, " - "), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "Tax: "), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: {
      marginLeft: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, " - ")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    gap: 1,
    columns: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "Estimated Total:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "bold",
    sx: {
      marginLeft: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, total))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_builder_io_react__WEBPACK_IMPORTED_MODULE_5__["BuilderComponent"], {
    content: cartUpsell,
    model: "cart-upsell-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), checkoutUrl && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    variant: "nav",
    sx: {
      width: '100%',
      m: 2,
      p: 12,
      textAlign: 'center'
    },
    href: checkoutUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Proceed to Checkout")));
};

/* harmony default export */ __webpack_exports__["default"] = (CartSidebarView);

/***/ }),

/***/ "./components/cart/CartSidebarView/index.ts":
/*!**************************************************!*\
  !*** ./components/cart/CartSidebarView/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartSidebarView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartSidebarView */ "./components/cart/CartSidebarView/CartSidebarView.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CartSidebarView__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/cart/index.ts":
/*!**********************************!*\
  !*** ./components/cart/index.ts ***!
  \**********************************/
/*! exports provided: CartSidebarView, CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartSidebarView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartSidebarView */ "./components/cart/CartSidebarView/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartSidebarView", function() { return _CartSidebarView__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem */ "./components/cart/CartItem/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return _CartItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/common/FeatureBar.tsx":
/*!******************************************!*\
  !*** ./components/common/FeatureBar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring-modal */ "react-spring-modal");
/* harmony import */ var react_spring_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring_modal__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\common\\FeatureBar.tsx";

/** @jsxRuntime classic */

/** @jsx jsx */




const FeatureBar = ({
  title,
  description,
  action,
  hide,
  delay
}) => {
  const {
    0: delayPassed,
    1: setDelayPassed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const timeout = setTimeout(() => setDelayPassed(true), delay || 6000);
    return () => clearTimeout(timeout);
  });
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_spring_modal__WEBPACK_IMPORTED_MODULE_2__["CenterModal"], {
    isOpen: delayPassed && !hide,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_spring_modal__WEBPACK_IMPORTED_MODULE_2__["ModalTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, title), description, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Themed"].div, {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      p: [1, 2]
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, action && action));
};

/* harmony default export */ __webpack_exports__["default"] = (FeatureBar);

/***/ }),

/***/ "./components/common/Head.tsx":
/*!************************************!*\
  !*** ./components/common/Head.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\common\\Head.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Head = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_2__["DefaultSeo"], _objectSpread({}, props.seoInfo), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "manifest",
        href: "/site.webmanifest"
      }, "site-manifest", false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        href: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F2d86a5bb30f44d2db3564aa2962bb093"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/common/Layout.tsx":
/*!**************************************!*\
  !*** ./components/common/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ui/context */ "./components/ui/context.tsx");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/common */ "./components/common/index.ts");
/* harmony import */ var _lib_hooks_useAcceptCookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/hooks/useAcceptCookies */ "./lib/hooks/useAcceptCookies.ts");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/ui */ "./components/ui/index.ts");
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/cart */ "./components/cart/index.ts");
/* harmony import */ var _lib_shopify_storefront_data_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks */ "./lib/shopify/storefront-data-hooks/index.ts");
/* harmony import */ var _config_shopify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @config/shopify */ "./config/shopify.ts");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @builder.io/react */ "@builder.io/react");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @config/theme */ "./config/theme.ts");
/* harmony import */ var _builder_io_widgets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @builder.io/widgets */ "@builder.io/widgets");
/* harmony import */ var _builder_io_widgets__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_builder_io_widgets__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_spring_modal_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-spring-modal/styles.css */ "./node_modules/react-spring-modal/styles.css");
/* harmony import */ var react_spring_modal_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_spring_modal_styles_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _config_seo_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @config/seo.json */ "./config/seo.json");
var _config_seo_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! @config/seo.json */ "./config/seo.json", 1);
/* harmony import */ var _NoSSR__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NoSSR */ "./components/common/NoSSR.tsx");
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\common\\Layout.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsxRuntime classic */

/** @jsx jsx */

















const FeatureBar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @components/common/FeatureBar */ "./components/common/FeatureBar.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! @components/common/FeatureBar */ "./components/common/FeatureBar.tsx")],
    modules: ['@components/common/FeatureBar']
  }
});

const Layout = ({
  children,
  pageProps
}) => {
  const builderTheme = pageProps.theme;
  const isLive = !_builder_io_react__WEBPACK_IMPORTED_MODULE_10__["Builder"].isEditing && !_builder_io_react__WEBPACK_IMPORTED_MODULE_10__["Builder"].isPreviewing;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lib_shopify_storefront_data_hooks__WEBPACK_IMPORTED_MODULE_8__["CommerceProvider"], _objectSpread(_objectSpread({}, _config_shopify__WEBPACK_IMPORTED_MODULE_9__["default"]), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_builder_io_react__WEBPACK_IMPORTED_MODULE_10__["BuilderContent"], _objectSpread(_objectSpread({
    isStatic: true
  }, isLive && {
    content: builderTheme
  }), {}, {
    modelName: "theme",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), (data, loading) => {
    if (loading && !builderTheme) {
      return 'loading ...';
    }

    const siteSettings = data === null || data === void 0 ? void 0 : data.siteSettings;
    const colorOverrides = data === null || data === void 0 ? void 0 : data.colorOverrides;
    const siteSeoInfo = data === null || data === void 0 ? void 0 : data.siteInformation;
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_ui_context__WEBPACK_IMPORTED_MODULE_3__["ManagedUIContext"], {
      key: data === null || data === void 0 ? void 0 : data.id,
      siteSettings: siteSettings,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_common__WEBPACK_IMPORTED_MODULE_4__["Head"], {
      seoInfo: siteSeoInfo || _config_seo_json__WEBPACK_IMPORTED_MODULE_14__,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(InnerLayout, {
      themeName: (data === null || data === void 0 ? void 0 : data.theme) || 'base',
      colorOverrides: colorOverrides,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, children));
  }));
};

const InnerLayout = ({
  themeName,
  children,
  colorOverrides
}) => {
  const theme = _objectSpread(_objectSpread({}, _config_theme__WEBPACK_IMPORTED_MODULE_11__["default"][themeName]), {}, {
    colors: _objectSpread(_objectSpread({}, _config_theme__WEBPACK_IMPORTED_MODULE_11__["default"][themeName].colors), colorOverrides)
  });

  const {
    displaySidebar,
    closeSidebar
  } = Object(_components_ui_context__WEBPACK_IMPORTED_MODULE_3__["useUI"])();
  const {
    acceptedCookies,
    onAcceptCookies
  } = Object(_lib_hooks_useAcceptCookies__WEBPACK_IMPORTED_MODULE_5__["useAcceptCookies"])();
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_common__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    sx: {
      margin: `0 auto`,
      px: 20,
      maxWidth: 1920,
      minWidth: '60vw',
      minHeight: 800
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, children)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_ui__WEBPACK_IMPORTED_MODULE_6__["Sidebar"], {
    open: displaySidebar || (_builder_io_react__WEBPACK_IMPORTED_MODULE_10__["builder"].editingModel || _builder_io_react__WEBPACK_IMPORTED_MODULE_10__["Builder"].previewingModel) === 'cart-upsell-sidebar',
    onClose: closeSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_cart__WEBPACK_IMPORTED_MODULE_7__["CartSidebarView"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_NoSSR__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(FeatureBar, {
    title: "This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy.",
    hide: _builder_io_react__WEBPACK_IMPORTED_MODULE_10__["Builder"].isEditing ? true : acceptedCookies,
    action: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => onAcceptCookies(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, "Accept cookies"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/common/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/common/Navbar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common */ "./components/common/index.ts");
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/env */ "./config/env.ts");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @builder.io/react */ "@builder.io/react");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_shopify_storefront_data_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks */ "./lib/shopify/storefront-data-hooks/index.ts");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/ui/context */ "./components/ui/context.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Searchbar */ "./components/common/Searchbar.tsx");
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\common\\Navbar.tsx";

/** @jsxRuntime classic */

/** @jsx jsx */











const Navbar = () => {
  const {
    0: announcement,
    1: setAnnouncement
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    theme
  } = Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["useThemeUI"])();
  const {
    navigationLinks,
    logo
  } = Object(_components_ui_context__WEBPACK_IMPORTED_MODULE_7__["useUI"])();
  const cart = Object(_lib_shopify_storefront_data_hooks__WEBPACK_IMPORTED_MODULE_5__["useCart"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchContent() {
      const items = (cart === null || cart === void 0 ? void 0 : cart.lineItems) || [];
      const anouncementContent = await _builder_io_react__WEBPACK_IMPORTED_MODULE_4__["builder"].get('announcement-bar', {
        cachebust: _config_env__WEBPACK_IMPORTED_MODULE_3__["default"].isDev,
        userAttributes: {
          itemInCart: items.map(item => item.variant.product.handle)
        }
      }).toPromise();
      setAnnouncement(anouncementContent);
    }

    fetchContent();
  }, [cart === null || cart === void 0 ? void 0 : cart.lineItems]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_builder_io_react__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"], {
    content: announcement,
    data: {
      theme
    },
    model: "announcement-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__["Themed"].div, {
    as: "header",
    sx: {
      margin: `0 auto`,
      maxWidth: 1920,
      py: 2,
      px: 2,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__["Themed"].div, {
    sx: {
      display: ['none', 'none', 'flex'],
      flexBasis: 0,
      minWidth: 240,
      justifyContent: 'space-evenly'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, navigationLinks === null || navigationLinks === void 0 ? void 0 : navigationLinks.map((link, index) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__["Themed"].a, {
    key: index,
    sx: {
      padding: 10,
      minWidth: 90
    },
    as: next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
    href: link.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, link.title))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__["Themed"].div, {
    sx: {
      transform: 'translateX(-50%)',
      left: '50%',
      position: 'absolute'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__["Themed"].h1, {
    sx: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, logo && logo.image && Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__["Themed"].a, {
    as: next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
    href: "/",
    sx: {
      letterSpacing: -1,
      textDecoration: `none`,
      paddingLeft: '5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
    layout: "fixed",
    width: logo.width,
    height: logo.height,
    src: logo.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  })), logo && logo.text && !logo.image && Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__["Themed"].a, {
    as: next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
    href: "/",
    sx: {
      letterSpacing: -1,
      textDecoration: `none`,
      paddingLeft: '5px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, logo.text))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__["Themed"].div, {
    sx: {
      display: 'flex',
      minWidth: 140,
      width: '100%',
      justifyContent: ['space-between', 'flex-end']
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Searchbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_common__WEBPACK_IMPORTED_MODULE_2__["UserNav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/common/NoSSR.tsx":
/*!*************************************!*\
  !*** ./components/common/NoSSR.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const NoSSR = ({
  children,
  skeleton
}) => {
  const {
    0: render,
    1: setRender
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => setRender(true), []);

  if (render) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: children
    }, void 0, false);
  }

  if (skeleton) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: skeleton
    }, void 0, false);
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (NoSSR);

/***/ }),

/***/ "./components/common/OptionPicker.tsx":
/*!********************************************!*\
  !*** ./components/common/OptionPicker.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/components */ "@theme-ui/components");
/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\common\\OptionPicker.tsx";

/** @jsxRuntime classic */

/** @jsx jsx */



const OptionPicker = ({
  name,
  options,
  onChange,
  selected
}) => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    htmlFor: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    id: name,
    onChange: onChange,
    value: selected,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, options === null || options === void 0 ? void 0 : options.map(option => Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
    value: option,
    key: option,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, option))));
};

/* harmony default export */ __webpack_exports__["default"] = (OptionPicker);

/***/ }),

/***/ "./components/common/ProductCard.tsx":
/*!*******************************************!*\
  !*** ./components/common/ProductCard.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/components */ "@theme-ui/components");
/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ui */ "./components/ui/index.ts");
/* harmony import */ var _lib_shopify_storefront_data_hooks_src_utils_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks/src/utils/product */ "./lib/shopify/storefront-data-hooks/src/utils/product.ts");
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\common\\ProductCard.tsx";

/** @jsxRuntime classic */

/** @jsx jsx */





const ProductCard = ({
  product,
  imgWidth,
  imgHeight,
  imgPriority,
  imgLoading,
  imgSizes,
  imgLayout = 'responsive'
}) => {
  const handle = product.handle;
  const productVariant = product.variants[0];
  const price = Object(_lib_shopify_storefront_data_hooks_src_utils_product__WEBPACK_IMPORTED_MODULE_3__["getPrice"])(productVariant.priceV2.amount, productVariant.priceV2.currencyCode);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sx: {
      maxWidth: [700, imgWidth || 540],
      p: 3,
      display: 'flex',
      flexDirection: 'column'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_ui__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: `/product/${handle}/`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      flexGrow: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_ui__WEBPACK_IMPORTED_MODULE_2__["ImageCarousel"], {
    currentSlide: product.images ? product.images.length - 1 : 0,
    width: imgWidth,
    height: imgHeight,
    priority: imgPriority,
    loading: imgLoading,
    layout: imgLayout,
    sizes: imgSizes,
    alt: product.title,
    images: product.images.length ? product.images : [{
      src: `https://via.placeholder.com/${imgWidth}x${imgHeight}`
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Themed"].h2, {
    sx: {
      mt: 4,
      mb: 0,
      fontSize: 14
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, product.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: {
      fontSize: 12,
      mb: 2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, price))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "./components/common/ProductCardDemo.tsx":
/*!***********************************************!*\
  !*** ./components/common/ProductCardDemo.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme-ui/components */ "@theme-ui/components");
/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ui */ "./components/ui/index.ts");
/* harmony import */ var _lib_shopify_storefront_data_hooks_src_utils_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks/src/utils/product */ "./lib/shopify/storefront-data-hooks/src/utils/product.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NoSSR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NoSSR */ "./components/common/NoSSR.tsx");
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\common\\ProductCardDemo.tsx";

/** @jsxRuntime classic */

/** @jsx jsx */








const ProductCardDemo = ({
  product,
  imgWidth,
  imgHeight,
  imgPriority,
  imgLoading,
  imgSizes,
  imgLayout = 'responsive'
}) => {
  var _product$images$;

  const {
    0: showAlternate,
    1: setShowAlternate
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const {
    0: canToggle,
    1: setCanToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false);
  const src = product.images[0].src;
  const handle = product.handle;
  const productVariant = product.variants[0];
  const price = Object(_lib_shopify_storefront_data_hooks_src_utils_product__WEBPACK_IMPORTED_MODULE_4__["getPrice"])(productVariant.compare_at_price || productVariant.price, 'USD');
  const alternateImage = (_product$images$ = product.images[1]) === null || _product$images$ === void 0 ? void 0 : _product$images$.src;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_components__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    sx: {
      maxWidth: [700, 500],
      p: 3,
      display: 'flex',
      flexDirection: 'column'
    },
    onMouseOut: () => setShowAlternate(false),
    onMouseOver: () => setShowAlternate(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_ui__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: `/product/${handle}/`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      flexGrow: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, alternateImage && Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      display: showAlternate && canToggle ? 'block' : 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_NoSSR__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    quality: "85",
    src: alternateImage,
    alt: product.title,
    width: imgWidth || 540,
    sizes: imgSizes,
    height: imgHeight || 540,
    layout: imgLayout,
    onLoad: () => setCanToggle(true),
    loading: "eager",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      display: canToggle && showAlternate && alternateImage ? 'none' : 'block'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    quality: "85",
    src: src,
    alt: product.title,
    width: imgWidth || 540,
    sizes: imgSizes,
    height: imgHeight || 540,
    layout: imgLayout,
    loading: imgLoading,
    priority: imgPriority,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Themed"].h2, {
    sx: {
      mt: 4,
      mb: 0,
      fontSize: 14
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, product.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    sx: {
      fontSize: 12,
      mb: 2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, price))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCardDemo);

/***/ }),

/***/ "./components/common/Searchbar.tsx":
/*!*****************************************!*\
  !*** ./components/common/Searchbar.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ui */ "./components/ui/index.ts");
/* harmony import */ var _config_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @config/builder */ "./config/builder.ts");
/* harmony import */ var blocks_ProductGrid_ProductGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blocks/ProductGrid/ProductGrid */ "./blocks/ProductGrid/ProductGrid.tsx");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks/src/api/operations-builder */ "./lib/shopify/storefront-data-hooks/src/api/operations-builder.ts");
/* harmony import */ var react_spring_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spring-modal */ "react-spring-modal");
/* harmony import */ var react_spring_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spring_modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_spring_modal_styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spring-modal/styles.css */ "./node_modules/react-spring-modal/styles.css");
/* harmony import */ var react_spring_modal_styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_spring_modal_styles_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/icons */ "./components/icons/index.ts");
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\common\\Searchbar.tsx";

/** @jsxRuntime classic */

/** @jsx jsx */












const Searchbar = () => {
  var _buttonRef$current;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    q
  } = router.query;
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsOpen(false);
  }, [router.asPath.split('?')[0]]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_spring_modal__WEBPACK_IMPORTED_MODULE_7__["ExpandModal"], {
    transitionConfig: {},
    contentTransition: {},
    overlayProps: {
      style: {
        maxWidth: 1920,
        left: '50%',
        transform: 'translateX(-50%)',
        overflow: 'auto',
        top: (((_buttonRef$current = buttonRef.current) === null || _buttonRef$current === void 0 ? void 0 : _buttonRef$current.getBoundingClientRect().bottom) || 0) + 15
      }
    },
    isOpen: isOpen,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(SearchModalContent, {
    initialSearch: q && String(q),
    onSearch: term => {
      const op = q ? 'replace' : 'push';
      router[op]({
        pathname: router.asPath.split('?')[0],
        query: {
          q: term
        }
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Themed"].div, {
    ref: buttonRef,
    as: theme_ui__WEBPACK_IMPORTED_MODULE_5__["Button"],
    mx: 2,
    onClick: () => setIsOpen(!isOpen),
    "aria-label": "Search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, isOpen ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_icons__WEBPACK_IMPORTED_MODULE_10__["Cross"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("svg", {
    width: "20",
    height: "22",
    viewBox: "0 0 20 22",
    fill: "none",
    stroke: "currentColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }))));
};

const SearchModalContent = props => {
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.initialSearch && String(props.initialSearch));
  const {
    0: products,
    1: setProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const getProducts = async searchTerm => {
    setLoading(true);
    const results = await Object(_lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_6__["searchProducts"])(_config_builder__WEBPACK_IMPORTED_MODULE_3__["default"], String(searchTerm), // TODO: pagination
    20, 0);
    setSearch(searchTerm);
    setProducts(results);
    setLoading(false);

    if (searchTerm) {
      props.onSearch(searchTerm);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (search) {
      getProducts(search);
    }
  }, []);
  const throttleSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_8__["throttle"])(getProducts), []);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Themed"].div, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      p: [1, 2],
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "search",
    sx: {
      marginBottom: 15
    },
    defaultValue: props.initialSearch,
    placeholder: "Search for products...",
    onChange: event => throttleSearch(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }), loading ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_ui__WEBPACK_IMPORTED_MODULE_2__["LoadingDots"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }) : products.length ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, "Search Results for \"", Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }, search), "\""), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(blocks_ProductGrid_ProductGrid__WEBPACK_IMPORTED_MODULE_4__["ProductGrid"], {
    cardProps: {
      imgHeight: 540,
      imgWidth: 540,
      imgPriority: false
    },
    products: products,
    offset: 0,
    limit: products.length,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  })) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, search ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "There are no products that match \"", Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 49
    }
  }, search), "\"") : Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Searchbar);

/***/ }),

/***/ "./components/common/UntilInteraction.tsx":
/*!************************************************!*\
  !*** ./components/common/UntilInteraction.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\common\\UntilInteraction.tsx";


const UntilInteraction = ({
  children,
  skeleton
}) => {
  const {
    0: render,
    1: setRender
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  if (render) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: children
    }, void 0, false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onMouseOver: () => setRender(true),
    onClick: () => setRender(true),
    onTouchStart: () => setRender(true),
    children: skeleton
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UntilInteraction);

/***/ }),

/***/ "./components/common/UserNav.tsx":
/*!***************************************!*\
  !*** ./components/common/UserNav.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/icons */ "./components/icons/index.ts");
/* harmony import */ var _components_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ui/context */ "./components/ui/context.tsx");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\common\\UserNav.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsxRuntime classic */

/** @jsx jsx */




const UserNav = (_ref) => {
  let {
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  const {
    toggleSidebar
  } = Object(_components_ui_context__WEBPACK_IMPORTED_MODULE_1__["useUI"])();
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: toggleSidebar,
    "aria-label": "Cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_icons__WEBPACK_IMPORTED_MODULE_0__["Bag"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserNav);

/***/ }),

/***/ "./components/common/index.ts":
/*!************************************!*\
  !*** ./components/common/index.ts ***!
  \************************************/
/*! exports provided: FeatureBar, Layout, Navbar, Searchbar, UserNav, Head, OptionPicker, ProductCard, ProductCardDemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeatureBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureBar */ "./components/common/FeatureBar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureBar", function() { return _FeatureBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./components/common/Layout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/common/Navbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Searchbar */ "./components/common/Searchbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Searchbar", function() { return _Searchbar__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _UserNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserNav */ "./components/common/UserNav.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserNav", function() { return _UserNav__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Head */ "./components/common/Head.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return _Head__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _OptionPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OptionPicker */ "./components/common/OptionPicker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionPicker", function() { return _OptionPicker__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductCard */ "./components/common/ProductCard.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductCard", function() { return _ProductCard__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ProductCardDemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductCardDemo */ "./components/common/ProductCardDemo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductCardDemo", function() { return _ProductCardDemo__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./components/icons/ArrowLeft.tsx":
/*!****************************************!*\
  !*** ./components/icons/ArrowLeft.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\ArrowLeft.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ArrowLeft = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M19 12H5",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M12 19L5 12L12 5",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ArrowLeft);

/***/ }),

/***/ "./components/icons/Bag.tsx":
/*!**********************************!*\
  !*** ./components/icons/Bag.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Bag.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Bag = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: "20",
    height: "22",
    viewBox: "0 0 20 22",
    fill: "none",
    stroke: "currentColor"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1 5H19",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Bag);

/***/ }),

/***/ "./components/icons/Check.tsx":
/*!************************************!*\
  !*** ./components/icons/Check.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Check.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Check = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M20 6L9 17L4 12",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Check);

/***/ }),

/***/ "./components/icons/ChevronUp.tsx":
/*!****************************************!*\
  !*** ./components/icons/ChevronUp.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\ChevronUp.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ChevronUp = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M18 15l-6-6-6 6"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ChevronUp);

/***/ }),

/***/ "./components/icons/Cross.tsx":
/*!************************************!*\
  !*** ./components/icons/Cross.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Cross.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Cross = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M18 6L6 18"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M6 6l12 12"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Cross);

/***/ }),

/***/ "./components/icons/DoubleChevron.tsx":
/*!********************************************!*\
  !*** ./components/icons/DoubleChevron.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\DoubleChevron.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DoubleChevron = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M16 8.90482L12 4L8 8.90482M8 15.0952L12 20L16 15.0952",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DoubleChevron);

/***/ }),

/***/ "./components/icons/Github.tsx":
/*!*************************************!*\
  !*** ./components/icons/Github.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Github.tsx";

const Github = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21227 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21227 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Github);

/***/ }),

/***/ "./components/icons/Heart.tsx":
/*!************************************!*\
  !*** ./components/icons/Heart.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Heart.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Heart = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "20",
    viewBox: "0 0 24 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M20.84 2.61C20.3292 2.099 19.7228 1.69365 19.0554 1.41708C18.3879 1.14052 17.6725 0.998175 16.95 0.998175C16.2275 0.998175 15.5121 1.14052 14.8446 1.41708C14.1772 1.69365 13.5708 2.099 13.06 2.61L12 3.67L10.94 2.61C9.9083 1.57831 8.50903 0.998709 7.05 0.998709C5.59096 0.998709 4.19169 1.57831 3.16 2.61C2.1283 3.64169 1.54871 5.04097 1.54871 6.5C1.54871 7.95903 2.1283 9.35831 3.16 10.39L4.22 11.45L12 19.23L19.78 11.45L20.84 10.39C21.351 9.87924 21.7563 9.27281 22.0329 8.60536C22.3095 7.9379 22.4518 7.22249 22.4518 6.5C22.4518 5.77751 22.3095 5.0621 22.0329 4.39464C21.7563 3.72719 21.351 3.12076 20.84 2.61V2.61Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Heart);

/***/ }),

/***/ "./components/icons/Info.tsx":
/*!***********************************!*\
  !*** ./components/icons/Info.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Info.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Info = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "transparent"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M12 8v4",
      stroke: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M12 16h.01",
      stroke: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./components/icons/Minus.tsx":
/*!************************************!*\
  !*** ./components/icons/Minus.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Minus.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Minus = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M5 12H19",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Minus);

/***/ }),

/***/ "./components/icons/Moon.tsx":
/*!***********************************!*\
  !*** ./components/icons/Moon.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Moon.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Moon = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Moon);

/***/ }),

/***/ "./components/icons/Plus.tsx":
/*!***********************************!*\
  !*** ./components/icons/Plus.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Plus.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Plus = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M12 5V19",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M5 12H19",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Plus);

/***/ }),

/***/ "./components/icons/RightArrow.tsx":
/*!*****************************************!*\
  !*** ./components/icons/RightArrow.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\RightArrow.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const RightArrow = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M5 12H19",
      stroke: "white",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M12 5L19 12L12 19",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RightArrow);

/***/ }),

/***/ "./components/icons/Sun.tsx":
/*!**********************************!*\
  !*** ./components/icons/Sun.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Sun.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Sun = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    shapeRendering: "geometricPrecision"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
      cx: "12",
      cy: "12",
      r: "5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M12 1v2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M12 21v2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M4.22 4.22l1.42 1.42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M18.36 18.36l1.42 1.42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1 12h2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M21 12h2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M4.22 19.78l1.42-1.42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M18.36 5.64l1.42-1.42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Sun);

/***/ }),

/***/ "./components/icons/Trash.tsx":
/*!************************************!*\
  !*** ./components/icons/Trash.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Trash.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Trash = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M3 6H21",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M10 11V17",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M14 11V17",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Trash);

/***/ }),

/***/ "./components/icons/Vercel.tsx":
/*!*************************************!*\
  !*** ./components/icons/Vercel.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\icons\\Vercel.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Vercel = (_ref) => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    width: "89",
    height: "20",
    viewBox: "0 0 89 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M11.5625 0L23.125 20H0L11.5625 0Z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M49.875 10.625C49.875 7.40625 47.5 5.15625 44.0937 5.15625C40.6875 5.15625 38.3125 7.40625 38.3125 10.625C38.3125 13.7812 40.875 16.0937 44.4062 16.0937C46.3438 16.0937 48.0938 15.375 49.2188 14.0625L47.0938 12.8437C46.4375 13.5 45.4688 13.9062 44.4062 13.9062C42.8438 13.9062 41.5 13.0625 41.0312 11.7812L40.9375 11.5625H49.7812C49.8438 11.25 49.875 10.9375 49.875 10.625ZM40.9062 9.6875L40.9688 9.5C41.375 8.15625 42.5625 7.34375 44.0625 7.34375C45.5938 7.34375 46.75 8.15625 47.1562 9.5L47.2188 9.6875H40.9062Z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M83.5313 10.625C83.5313 7.40625 81.1563 5.15625 77.75 5.15625C74.3438 5.15625 71.9688 7.40625 71.9688 10.625C71.9688 13.7812 74.5313 16.0937 78.0625 16.0937C80 16.0937 81.75 15.375 82.875 14.0625L80.75 12.8437C80.0938 13.5 79.125 13.9062 78.0625 13.9062C76.5 13.9062 75.1563 13.0625 74.6875 11.7812L74.5938 11.5625H83.4375C83.5 11.25 83.5313 10.9375 83.5313 10.625ZM74.5625 9.6875L74.625 9.5C75.0313 8.15625 76.2188 7.34375 77.7188 7.34375C79.25 7.34375 80.4063 8.15625 80.8125 9.5L80.875 9.6875H74.5625Z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M68.5313 8.84374L70.6563 7.62499C69.6563 6.06249 67.875 5.18749 65.7188 5.18749C62.3125 5.18749 59.9375 7.43749 59.9375 10.6562C59.9375 13.875 62.3125 16.125 65.7188 16.125C67.875 16.125 69.6563 15.25 70.6563 13.6875L68.5313 12.4687C67.9688 13.4062 66.9688 13.9375 65.7188 13.9375C63.75 13.9375 62.4375 12.625 62.4375 10.6562C62.4375 8.68749 63.75 7.37499 65.7188 7.37499C66.9375 7.37499 67.9688 7.90624 68.5313 8.84374Z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M88.2188 1.75H85.7188V15.8125H88.2188V1.75Z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M40.1563 1.75H37.2813L31.7813 11.25L26.2813 1.75H23.375L31.7813 16.25L40.1563 1.75Z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M57.8438 8.0625C58.125 8.0625 58.4062 8.09375 58.6875 8.15625V5.5C56.5625 5.5625 54.5625 6.75 54.5625 8.21875V5.5H52.0625V15.8125H54.5625V11.3437C54.5625 9.40625 55.9062 8.0625 57.8438 8.0625Z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Vercel);

/***/ }),

/***/ "./components/icons/index.ts":
/*!***********************************!*\
  !*** ./components/icons/index.ts ***!
  \***********************************/
/*! exports provided: Bag, Heart, Trash, Cross, ArrowLeft, Plus, Minus, Check, Sun, Moon, Github, DoubleChevron, RightArrow, Info, ChevronUp, Vercel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bag */ "./components/icons/Bag.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bag", function() { return _Bag__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Heart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heart */ "./components/icons/Heart.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heart", function() { return _Heart__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Trash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trash */ "./components/icons/Trash.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trash", function() { return _Trash__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cross */ "./components/icons/Cross.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cross", function() { return _Cross__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ArrowLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArrowLeft */ "./components/icons/ArrowLeft.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowLeft", function() { return _ArrowLeft__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Plus */ "./components/icons/Plus.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return _Plus__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Minus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Minus */ "./components/icons/Minus.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Minus", function() { return _Minus__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Check */ "./components/icons/Check.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Check", function() { return _Check__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Sun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sun */ "./components/icons/Sun.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sun", function() { return _Sun__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Moon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Moon */ "./components/icons/Moon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Moon", function() { return _Moon__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Github__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Github */ "./components/icons/Github.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Github", function() { return _Github__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _DoubleChevron__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DoubleChevron */ "./components/icons/DoubleChevron.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DoubleChevron", function() { return _DoubleChevron__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _RightArrow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RightArrow */ "./components/icons/RightArrow.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightArrow", function() { return _RightArrow__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Info */ "./components/icons/Info.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _Info__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _ChevronUp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ChevronUp */ "./components/icons/ChevronUp.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChevronUp", function() { return _ChevronUp__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _Vercel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Vercel */ "./components/icons/Vercel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vercel", function() { return _Vercel__WEBPACK_IMPORTED_MODULE_15__["default"]; });


















/***/ }),

/***/ "./components/ui/ImageCarousel.tsx":
/*!*****************************************!*\
  !*** ./components/ui/ImageCarousel.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_UntilInteraction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/common/UntilInteraction */ "./components/common/UntilInteraction.tsx");
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\ui\\ImageCarousel.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsxRuntime classic */

/** @jsx jsx */





const LazyCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./LazyImageCarousel */ "./components/ui/LazyImageCarousel.tsx")), {
  loading: () => Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Themed"].div, {
    sx: {
      height: '100%',
      bg: 'muted'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 18
    }
  }),
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./LazyImageCarousel */ "./components/ui/LazyImageCarousel.tsx")],
    modules: ['./LazyImageCarousel']
  }
});

const ImageCarousel = (_ref) => {
  let {
    images,
    onThumbnailClick,
    showZoom,
    currentSlide
  } = _ref,
      imageProps = _objectWithoutProperties(_ref, ["images", "onThumbnailClick", "showZoom", "currentSlide"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["AspectRatio"], {
    ratio: Number(imageProps.height) / Number(imageProps.width),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_common_UntilInteraction__WEBPACK_IMPORTED_MODULE_4__["default"], {
    skeleton: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
      src: images[0].src
    }, imageProps), {}, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(LazyCarousel, _objectSpread(_objectSpread({
    images: images,
    showZoom: showZoom,
    currentSlide: currentSlide,
    onThumbnailClick: onThumbnailClick
  }, imageProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageCarousel);

/***/ }),

/***/ "./components/ui/Link/Link.tsx":
/*!*************************************!*\
  !*** ./components/ui/Link/Link.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\ui\\Link\\Link.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Link = (_ref) => {
  let {
    href,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./components/ui/Link/index.ts":
/*!*************************************!*\
  !*** ./components/ui/Link/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link */ "./components/ui/Link/Link.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Link__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/ui/LoadingDots/LoadingDots.module.css":
/*!**********************************************************!*\
  !*** ./components/ui/LoadingDots/LoadingDots.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"root": "LoadingDots_root__jXGQk",
	"blink": "LoadingDots_blink__2xsJ2"
};


/***/ }),

/***/ "./components/ui/LoadingDots/LoadingDots.tsx":
/*!***************************************************!*\
  !*** ./components/ui/LoadingDots/LoadingDots.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingDots.module.css */ "./components/ui/LoadingDots/LoadingDots.module.css");
/* harmony import */ var _LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\ui\\LoadingDots\\LoadingDots.tsx";


const LoadingDots = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: _LoadingDots_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingDots);

/***/ }),

/***/ "./components/ui/LoadingDots/index.ts":
/*!********************************************!*\
  !*** ./components/ui/LoadingDots/index.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingDots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingDots */ "./components/ui/LoadingDots/LoadingDots.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LoadingDots__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/ui/Sidebar/Sidebar.tsx":
/*!*******************************************!*\
  !*** ./components/ui/Sidebar/Sidebar.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ui_match_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/match-media */ "@theme-ui/match-media");
/* harmony import */ var _theme_ui_match_media__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_match_media__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring-modal */ "react-spring-modal");
/* harmony import */ var react_spring_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring_modal__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\ui\\Sidebar\\Sidebar.tsx";

/** @jsxRuntime classic */

/** @jsx jsx */




const Sidebar = ({
  children,
  open = false,
  onClose
}) => {
  const width = Object(_theme_ui_match_media__WEBPACK_IMPORTED_MODULE_1__["useResponsiveValue"])(['100%', 500]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_spring_modal__WEBPACK_IMPORTED_MODULE_2__["BaseModal"], {
    isOpen: open,
    onDismiss: onClose,
    contentProps: {
      style: {
        width,
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%'
      }
    },
    contentTransition: {
      from: {
        transform: 'translateX(100%)'
      },
      enter: {
        transform: 'translateX(0)'
      },
      leave: {
        transform: 'translateX(100%)'
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_spring_modal__WEBPACK_IMPORTED_MODULE_2__["ModalCloseTarget"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Themed"].div, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      py: 1,
      bg: 'text',
      color: 'background'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Close"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }))), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/ui/Sidebar/index.ts":
/*!****************************************!*\
  !*** ./components/ui/Sidebar/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./components/ui/Sidebar/Sidebar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/ui/context.tsx":
/*!***********************************!*\
  !*** ./components/ui/context.tsx ***!
  \***********************************/
/*! exports provided: UIContext, UIProvider, useUI, ManagedUIContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIContext", function() { return UIContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIProvider", function() { return UIProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUI", function() { return useUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagedUIContext", function() { return ManagedUIContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\ui\\context.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  displaySidebar: false
};
const UIContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(initialState);
UIContext.displayName = 'UIContext';
const UIProvider = ({
  siteSettings,
  children
}) => {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(_objectSpread(_objectSpread({}, initialState), siteSettings));

  const openSidebar = () => setState(() => ({
    displaySidebar: true
  }));

  const closeSidebar = () => setState(() => ({
    displaySidebar: false
  }));

  const toggleSidebar = () => setState(prev => ({
    displaySidebar: !prev.displaySidebar
  }));

  const value = _objectSpread(_objectSpread(_objectSpread({}, state), siteSettings), {}, {
    openSidebar,
    closeSidebar,
    toggleSidebar
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UIContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 10
  }, undefined);
};
const useUI = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(UIContext);

  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }

  return context;
};
const ManagedUIContext = ({
  children,
  siteSettings
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UIProvider, {
  siteSettings: siteSettings,
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 64,
  columnNumber: 7
}, undefined);

/***/ }),

/***/ "./components/ui/index.ts":
/*!********************************!*\
  !*** ./components/ui/index.ts ***!
  \********************************/
/*! exports provided: Sidebar, LoadingDots, Link, ImageCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./components/ui/Sidebar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LoadingDots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingDots */ "./components/ui/LoadingDots/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingDots", function() { return _LoadingDots__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/ui/Link/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ImageCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageCarousel */ "./components/ui/ImageCarousel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCarousel", function() { return _ImageCarousel__WEBPACK_IMPORTED_MODULE_3__["default"]; });






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

/***/ "./config/env.ts":
/*!***********************!*\
  !*** ./config/env.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  isDev: true
});

/***/ }),

/***/ "./config/seo.json":
/*!*************************!*\
  !*** ./config/seo.json ***!
  \*************************/
/*! exports provided: title, titleTemplate, description, openGraph, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Builder.io + Shopify + Next.js\",\"titleTemplate\":\"%s - Headless Demo\",\"description\":\"A starter kit demo store for using headless shopify with Builder.io ->  https://github.com/BuilderIO/nextjs-shopify\",\"openGraph\":{\"type\":\"website\",\"locale\":\"en_IE\",\"url\":\"https://github.com/BuilderIO/nextjs-shopify\",\"site_name\":\"Builder.io + Shopify + Next.js\"}}");

/***/ }),

/***/ "./config/shopify.ts":
/*!***************************!*\
  !*** ./config/shopify.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
if (false) {}

if (false) {}

/* harmony default export */ __webpack_exports__["default"] = ({
  domain: "tonico-surf-shop.myshopify.com",
  storefrontAccessToken: "c4c16e13356d102d43bbbf9fad740ad9"
});

/***/ }),

/***/ "./config/theme.ts":
/*!*************************!*\
  !*** ./config/theme.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/presets */ "@theme-ui/presets");
/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./lib/get-layout-props.ts":
/*!*********************************!*\
  !*** ./lib/get-layout-props.ts ***!
  \*********************************/
/*! exports provided: getLayoutProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayoutProps", function() { return getLayoutProps; });
/* harmony import */ var _resolve_builder_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve-builder-content */ "./lib/resolve-builder-content.ts");

async function getLayoutProps(targetingAttributes) {
  const theme = await Object(_resolve_builder_content__WEBPACK_IMPORTED_MODULE_0__["resolveBuilderContent"])('theme', targetingAttributes);
  return {
    theme: theme || null
  };
}

/***/ }),

/***/ "./lib/hooks/useAcceptCookies.ts":
/*!***************************************!*\
  !*** ./lib/hooks/useAcceptCookies.ts ***!
  \***************************************/
/*! exports provided: useAcceptCookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAcceptCookies", function() { return useAcceptCookies; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const COOKIE_NAME = 'accept_cookies';
const useAcceptCookies = () => {
  const {
    0: acceptedCookies,
    1: setAcceptedCookies
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(COOKIE_NAME)) {
      setAcceptedCookies(false);
    }
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(COOKIE_NAME, 'accepted', {
      expires: 365
    });
  };

  return {
    acceptedCookies,
    onAcceptCookies: acceptCookies
  };
};

/***/ }),

/***/ "./lib/resolve-builder-content.ts":
/*!****************************************!*\
  !*** ./lib/resolve-builder-content.ts ***!
  \****************************************/
/*! exports provided: resolveBuilderContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveBuilderContent", function() { return resolveBuilderContent; });
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @builder.io/react */ "@builder.io/react");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _builder_io_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @builder.io/utils */ "@builder.io/utils");
/* harmony import */ var _builder_io_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_builder_io_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/builder */ "./config/builder.ts");
/* harmony import */ var _shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopify/storefront-data-hooks/src/api/operations-builder */ "./lib/shopify/storefront-data-hooks/src/api/operations-builder.ts");




_builder_io_react__WEBPACK_IMPORTED_MODULE_0__["builder"].init(_config_builder__WEBPACK_IMPORTED_MODULE_2__["default"].apiKey);
_builder_io_react__WEBPACK_IMPORTED_MODULE_0__["Builder"].isStatic = true;
async function resolveBuilderContent(modelName, targetingAttributes) {
  let page = await _builder_io_react__WEBPACK_IMPORTED_MODULE_0__["builder"].get(modelName, {
    userAttributes: targetingAttributes,
    includeRefs: true,
    preview: modelName,
    cachebust: true
  }).toPromise();

  if (page) {
    return await Object(_builder_io_utils__WEBPACK_IMPORTED_MODULE_1__["getAsyncProps"])(page, {
      async ProductGrid(props) {
        let products = [];

        if (props.productsList) {
          const promises = props.productsList.map(entry => entry.product).filter(handle => typeof handle === 'string').map(async (handle) => await Object(_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_3__["getProduct"])(_config_builder__WEBPACK_IMPORTED_MODULE_2__["default"], {
            handle
          }));
          products = await Promise.all(promises);
        }

        return {
          // resolve the query as `products` for ssr
          // used for example in ProductGrid.tsx as initialProducts
          products
        };
      },

      async CollectionBox(props) {
        let collection = props.collection;

        if (collection && typeof collection === 'string') {
          collection = await Object(_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_3__["getCollection"])(_config_builder__WEBPACK_IMPORTED_MODULE_2__["default"], {
            handle: collection
          });
        }

        return {
          collection
        };
      },

      async ProductBox(props) {
        let product = props.product;

        if (product && typeof product === 'string') {
          product = await Object(_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_3__["getProduct"])(_config_builder__WEBPACK_IMPORTED_MODULE_2__["default"], {
            handle: product
          });
        }

        return {
          product
        };
      },

      async ProductCollectionGrid({
        collection
      }) {
        if (collection && typeof collection === 'string') {
          const {
            products
          } = await Object(_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_3__["getCollection"])(_config_builder__WEBPACK_IMPORTED_MODULE_2__["default"], {
            handle: collection
          });
          return {
            products
          };
        }
      }

    });
  }

  return null;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/index.ts":
/*!****************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/index.ts ***!
  \****************************************************/
/*! exports provided: CommerceProvider, useClientUnsafe, useSetCartUnsafe, useCart, useCartCount, useAddItemToCart, useAddItemsToCart, useRemoveItemFromCart, useRemoveItemsFromCart, useCartItems, useCheckoutUrl, useGetLineItem, useUpdateItemQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_CommerceProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/CommerceProvider */ "./lib/shopify/storefront-data-hooks/src/CommerceProvider.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommerceProvider", function() { return _src_CommerceProvider__WEBPACK_IMPORTED_MODULE_0__["CommerceProvider"]; });

/* harmony import */ var _src_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/hooks */ "./lib/shopify/storefront-data-hooks/src/hooks/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useClientUnsafe", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useClientUnsafe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetCartUnsafe", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useSetCartUnsafe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCartCount", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useCartCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAddItemToCart", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useAddItemToCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAddItemsToCart", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useAddItemsToCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRemoveItemFromCart", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useRemoveItemFromCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRemoveItemsFromCart", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useRemoveItemsFromCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCartItems", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useCartItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCheckoutUrl", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useCheckoutUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetLineItem", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useGetLineItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateItemQuantity", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_1__["useUpdateItemQuantity"]; });




/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/CommerceProvider.tsx":
/*!********************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/CommerceProvider.tsx ***!
  \********************************************************************/
/*! exports provided: CommerceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommerceProvider", function() { return CommerceProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shopify-buy */ "shopify-buy");
/* harmony import */ var shopify_buy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shopify_buy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context */ "./lib/shopify/storefront-data-hooks/src/Context.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./lib/shopify/storefront-data-hooks/src/utils/index.ts");

var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\lib\\shopify\\storefront-data-hooks\\src\\CommerceProvider.tsx";




function CommerceProvider({
  storefrontAccessToken,
  domain,
  children
}) {
  if (domain == null || storefrontAccessToken == null) {
    throw new Error('Unable to build shopify-buy client object. Please make sure that your access token and domain are correct.');
  }

  const initialCart = _utils__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"].getInitialCart();
  const {
    0: cart,
    1: setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialCart);
  const isCustomDomain = domain.includes('.');
  const client = shopify_buy__WEBPACK_IMPORTED_MODULE_2___default.a.buildClient({
    storefrontAccessToken,
    domain: isCustomDomain ? domain : `${domain}.myshopify.com`
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function getNewCart() {
      const newCart = await client.checkout.create();
      setCart(newCart);
    }

    async function refreshExistingCart(cartId) {
      try {
        const refreshedCart = await client.checkout.fetch(cartId);

        if (refreshedCart == null) {
          return getNewCart();
        }

        const cartHasBeenPurchased = Boolean(refreshedCart.completedAt);

        if (cartHasBeenPurchased) {
          getNewCart();
        } else {
          setCart(refreshedCart);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (cart == null) {
      getNewCart();
    } else {
      refreshExistingCart(String(cart.id));
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _utils__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"].set(_utils__WEBPACK_IMPORTED_MODULE_4__["LocalStorageKeys"].CART, JSON.stringify(cart));
  }, [cart]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Context__WEBPACK_IMPORTED_MODULE_3__["Context"].Provider, {
    value: {
      client,
      cart,
      setCart,
      domain,
      storefrontAccessToken
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/Context.tsx":
/*!***********************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/Context.tsx ***!
  \***********************************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  client: null,
  cart: null,
  domain: '',
  storefrontAccessToken: '',
  setCart: () => {
    throw Error('You forgot to wrap this in a Provider object');
  }
});

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/api/operations-builder.ts":
/*!*************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/api/operations-builder.ts ***!
  \*************************************************************************/
/*! exports provided: getAllProducts, searchProducts, getAllProductPaths, getProduct, getAllCollections, searchCollections, getAllCollectionPaths, getCollection, getCollectionProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProducts", function() { return getAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProducts", function() { return searchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProductPaths", function() { return getAllProductPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCollections", function() { return getAllCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCollections", function() { return searchCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCollectionPaths", function() { return getAllCollectionPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return getCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionProducts", function() { return getCollectionProducts; });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function getAllProducts(config, limit = 100, offset = 0) {
  const productsContent = (await fetch(`https://cdn.builder.io/api/v2/content/${config.productsModel}?apiKey=${config.apiKey}&limit=${limit}&offset=${offset}&cachebust=true`).then(res => res.json())).results;
  return productsContent.map(pr => pr.data);
}
async function searchProducts(config, searchString, limit = 100, offset = 0) {
  const query = qs__WEBPACK_IMPORTED_MODULE_0__["stringify"]({
    fields: ['data'],
    limit,
    offset,
    apiKey: config.apiKey
  }, {
    allowDots: true
  });
  const productsContent = (await fetch(`https://cdn.builder.io/api/v2/content/${config.productsModel}?${query}&query.data.title=${JSON.stringify({
    $regex: `${searchString}`,
    $options: 'i'
  })}`).then(res => res.json())).results;
  return (productsContent === null || productsContent === void 0 ? void 0 : productsContent.map(product => product.data)) || [];
}
async function getAllProductPaths(config, limit) {
  const products = await getAllProducts(config, limit);
  return (products === null || products === void 0 ? void 0 : products.map(entry => entry.handle)) || [];
}
async function getProduct(config, options) {
  var _productsContent$;

  if (Boolean(options.id) === Boolean(options.handle)) {
    throw new Error('Either a handle or id is required');
  }

  const query = qs__WEBPACK_IMPORTED_MODULE_0__["stringify"]({
    limit: 1,
    apiKey: config.apiKey,
    query: {
      data: options.id ? {
        id: {
          $eq: options.id
        }
      } : {
        handle: {
          $eq: options.handle
        }
      }
    }
  });
  const productsContent = (await fetch(`https://cdn.builder.io/api/v2/content/${config.productsModel}?${query}`).then(res => res.json())).results;

  if (options.withContent) {
    return productsContent[0];
  }

  return (_productsContent$ = productsContent[0]) === null || _productsContent$ === void 0 ? void 0 : _productsContent$.data;
}
/**
 * Collections
 */

async function getAllCollections(config, limit = 20, offset = 0, fields) {
  const query = qs__WEBPACK_IMPORTED_MODULE_0__["stringify"]({
    fields: fields || 'data',
    limit,
    offset,
    apiKey: config.apiKey,
    cachebust: true
  }, {
    allowDots: true
  });
  const collectionsContent = (await fetch(`https://cdn.builder.io/api/v2/content/${config.collectionsModel}?${query}`).then(res => res.json())).results;
  return (collectionsContent === null || collectionsContent === void 0 ? void 0 : collectionsContent.map(entry => entry.data)) || [];
}
async function searchCollections(config, searchString, limit = 100, offset = 0) {
  const query = qs__WEBPACK_IMPORTED_MODULE_0__["stringify"]({
    fields: ['data'],
    limit,
    offset,
    apiKey: config.apiKey
  }, {
    allowDots: true
  });
  const collectionsContent = (await fetch(`https://cdn.builder.io/api/v2/content/${config.collectionsModel}?${query}&query.$or=${JSON.stringify([{
    'data.description': {
      $regex: `${searchString}`
    }
  }, {
    'data.title': {
      $regex: `${searchString}`
    }
  }])}`).then(res => res.json())).results;
  return (collectionsContent === null || collectionsContent === void 0 ? void 0 : collectionsContent.map(entry => entry.data)) || [];
}
async function getAllCollectionPaths(config, limit) {
  const collections = await getAllCollections(config, limit);
  return (collections === null || collections === void 0 ? void 0 : collections.map(entry => entry.handle)) || [];
}
async function getCollection(config, options) {
  var _collectionsContent$;

  if (Boolean(options.id) === Boolean(options.handle)) {
    throw new Error('Either a handle or id is required');
  }

  const query = qs__WEBPACK_IMPORTED_MODULE_0__["stringify"]({
    limit: 1,
    apiKey: config.apiKey,
    cachebust: true,
    query: {
      data: options.id ? {
        id: {
          $eq: options.id
        }
      } : {
        handle: {
          $eq: options.handle
        }
      }
    }
  });
  const collectionsContent = (await fetch(`https://cdn.builder.io/api/v2/content/${config.collectionsModel}?${query}`).then(res => res.json())).results;
  const collection = (_collectionsContent$ = collectionsContent[0]) === null || _collectionsContent$ === void 0 ? void 0 : _collectionsContent$.data;

  if (config.isDemo) {
    return collection;
  }

  const productsQuery = _objectSpread(_objectSpread({
    limit: 20,
    handle: collection === null || collection === void 0 ? void 0 : collection.handle
  }, options.productsQuery), {}, {
    apiKey: config.apiKey
  });

  const {
    products,
    nextPageCursor,
    hasNextPage
  } = await getCollectionProducts(productsQuery);
  return _objectSpread(_objectSpread({}, collection), {}, {
    products,
    nextPageCursor,
    hasNextPage
  });
}
const getCollectionProducts = productsQuery => {
  const search = qs__WEBPACK_IMPORTED_MODULE_0__["stringify"](productsQuery);
  return fetch(`https://cdn.builder.io/api/v1/shopify-sync/collection-products?${search}`).then(res => res.json());
};

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/index.ts":
/*!**************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/index.ts ***!
  \**************************************************************/
/*! exports provided: useClientUnsafe, useSetCartUnsafe, useCart, useCartCount, useAddItemToCart, useAddItemsToCart, useRemoveItemFromCart, useRemoveItemsFromCart, useCartItems, useCheckoutUrl, useGetLineItem, useUpdateItemQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useClientUnsafe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useClientUnsafe */ "./lib/shopify/storefront-data-hooks/src/hooks/useClientUnsafe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useClientUnsafe", function() { return _useClientUnsafe__WEBPACK_IMPORTED_MODULE_0__["useClientUnsafe"]; });

/* harmony import */ var _useSetCartUnsafe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSetCartUnsafe */ "./lib/shopify/storefront-data-hooks/src/hooks/useSetCartUnsafe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetCartUnsafe", function() { return _useSetCartUnsafe__WEBPACK_IMPORTED_MODULE_1__["useSetCartUnsafe"]; });

/* harmony import */ var _useCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCart */ "./lib/shopify/storefront-data-hooks/src/hooks/useCart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return _useCart__WEBPACK_IMPORTED_MODULE_2__["useCart"]; });

/* harmony import */ var _useCartCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useCartCount */ "./lib/shopify/storefront-data-hooks/src/hooks/useCartCount.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCartCount", function() { return _useCartCount__WEBPACK_IMPORTED_MODULE_3__["useCartCount"]; });

/* harmony import */ var _useAddItemToCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useAddItemToCart */ "./lib/shopify/storefront-data-hooks/src/hooks/useAddItemToCart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAddItemToCart", function() { return _useAddItemToCart__WEBPACK_IMPORTED_MODULE_4__["useAddItemToCart"]; });

/* harmony import */ var _useAddItemsToCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useAddItemsToCart */ "./lib/shopify/storefront-data-hooks/src/hooks/useAddItemsToCart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAddItemsToCart", function() { return _useAddItemsToCart__WEBPACK_IMPORTED_MODULE_5__["useAddItemsToCart"]; });

/* harmony import */ var _useRemoveItemFromCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useRemoveItemFromCart */ "./lib/shopify/storefront-data-hooks/src/hooks/useRemoveItemFromCart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRemoveItemFromCart", function() { return _useRemoveItemFromCart__WEBPACK_IMPORTED_MODULE_6__["useRemoveItemFromCart"]; });

/* harmony import */ var _useRemoveItemsFromCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useRemoveItemsFromCart */ "./lib/shopify/storefront-data-hooks/src/hooks/useRemoveItemsFromCart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRemoveItemsFromCart", function() { return _useRemoveItemsFromCart__WEBPACK_IMPORTED_MODULE_7__["useRemoveItemsFromCart"]; });

/* harmony import */ var _useCartItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useCartItems */ "./lib/shopify/storefront-data-hooks/src/hooks/useCartItems.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCartItems", function() { return _useCartItems__WEBPACK_IMPORTED_MODULE_8__["useCartItems"]; });

/* harmony import */ var _useCheckoutUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useCheckoutUrl */ "./lib/shopify/storefront-data-hooks/src/hooks/useCheckoutUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCheckoutUrl", function() { return _useCheckoutUrl__WEBPACK_IMPORTED_MODULE_9__["useCheckoutUrl"]; });

/* harmony import */ var _useGetLineItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useGetLineItem */ "./lib/shopify/storefront-data-hooks/src/hooks/useGetLineItem.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetLineItem", function() { return _useGetLineItem__WEBPACK_IMPORTED_MODULE_10__["useGetLineItem"]; });

/* harmony import */ var _useUpdateItemQuantity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useUpdateItemQuantity */ "./lib/shopify/storefront-data-hooks/src/hooks/useUpdateItemQuantity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateItemQuantity", function() { return _useUpdateItemQuantity__WEBPACK_IMPORTED_MODULE_11__["useUpdateItemQuantity"]; });














/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useAddItemToCart.ts":
/*!*************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useAddItemToCart.ts ***!
  \*************************************************************************/
/*! exports provided: useAddItemToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddItemToCart", function() { return useAddItemToCart; });
/* harmony import */ var _useAddItemsToCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAddItemsToCart */ "./lib/shopify/storefront-data-hooks/src/hooks/useAddItemsToCart.ts");

function useAddItemToCart() {
  const addItemsToCart = Object(_useAddItemsToCart__WEBPACK_IMPORTED_MODULE_0__["useAddItemsToCart"])();

  async function addItemToCart(variantId, quantity, customAttributes) {
    const item = [{
      variantId,
      quantity,
      customAttributes
    }];
    return addItemsToCart(item);
  }

  return addItemToCart;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useAddItemsToCart.ts":
/*!**************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useAddItemsToCart.ts ***!
  \**************************************************************************/
/*! exports provided: useAddItemsToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddItemsToCart", function() { return useAddItemsToCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ "./lib/shopify/storefront-data-hooks/src/Context.tsx");


function useAddItemsToCart() {
  const {
    client,
    cart,
    setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["Context"]);

  async function addItemsToCart(items) {
    if (cart == null || client == null) {
      throw new Error('Called addItemsToCart too soon');
    }

    if (items.length < 1) {
      throw new Error('Must include at least one line item, empty line items found');
    }

    items.forEach(item => {
      if (item.variantId == null) {
        throw new Error(`Missing variantId in item`);
      }

      if (item.quantity == null) {
        throw new Error(`Missing quantity in item with variant id: ${item.variantId}`);
      } else if (typeof item.quantity != 'number') {
        throw new Error(`Quantity is not a number in item with variant id: ${item.variantId}`);
      } else if (item.quantity < 1) {
        throw new Error(`Quantity must not be less than one in item with variant id: ${item.variantId}`);
      }
    });
    const newCart = await client.checkout.addLineItems(cart.id, // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    items);
    setCart(newCart);
  }

  return addItemsToCart;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useCart.ts":
/*!****************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useCart.ts ***!
  \****************************************************************/
/*! exports provided: useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ "./lib/shopify/storefront-data-hooks/src/Context.tsx");


function useCart() {
  const {
    cart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["Context"]);
  return cart;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useCartCount.ts":
/*!*********************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useCartCount.ts ***!
  \*********************************************************************/
/*! exports provided: useCartCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartCount", function() { return useCartCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ "./lib/shopify/storefront-data-hooks/src/Context.tsx");


function useCartCount() {
  const {
    cart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["Context"]);

  if (cart == null || cart.lineItems.length < 1) {
    return 0;
  }

  const count = cart.lineItems.reduce((totalCount, lineItem) => {
    return totalCount + lineItem.quantity;
  }, 0);
  return count;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useCartItems.ts":
/*!*********************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useCartItems.ts ***!
  \*********************************************************************/
/*! exports provided: useCartItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartItems", function() { return useCartItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ "./lib/shopify/storefront-data-hooks/src/Context.tsx");


function useCartItems() {
  const {
    cart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["Context"]);

  if (!cart || !Array.isArray(cart.lineItems)) {
    return [];
  }

  return cart.lineItems;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useCheckoutUrl.ts":
/*!***********************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useCheckoutUrl.ts ***!
  \***********************************************************************/
/*! exports provided: useCheckoutUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCheckoutUrl", function() { return useCheckoutUrl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ "./lib/shopify/storefront-data-hooks/src/Context.tsx");


function useCheckoutUrl() {
  const {
    cart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["Context"]);

  if (cart == null) {
    return null;
  } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore


  return cart.webUrl;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useClientUnsafe.ts":
/*!************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useClientUnsafe.ts ***!
  \************************************************************************/
/*! exports provided: useClientUnsafe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClientUnsafe", function() { return useClientUnsafe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ "./lib/shopify/storefront-data-hooks/src/Context.tsx");


function useClientUnsafe() {
  const {
    client
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["Context"]);

  if (true) {
    console.warn('Using client directly will hit shopify API and counts towards your storefront rate limit');
  }

  return client;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useGetLineItem.ts":
/*!***********************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useGetLineItem.ts ***!
  \***********************************************************************/
/*! exports provided: useGetLineItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetLineItem", function() { return useGetLineItem; });
/* harmony import */ var _useCartItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCartItems */ "./lib/shopify/storefront-data-hooks/src/hooks/useCartItems.ts");

function useGetLineItem() {
  const cartItems = Object(_useCartItems__WEBPACK_IMPORTED_MODULE_0__["useCartItems"])();

  function getLineItem(variantId) {
    if (cartItems.length < 1) {
      return null;
    }

    const item = cartItems.find(cartItem => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      return cartItem.variant.id === variantId;
    });

    if (item == null) {
      return null;
    }

    return item;
  }

  return getLineItem;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useRemoveItemFromCart.ts":
/*!******************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useRemoveItemFromCart.ts ***!
  \******************************************************************************/
/*! exports provided: useRemoveItemFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRemoveItemFromCart", function() { return useRemoveItemFromCart; });
/* harmony import */ var _useRemoveItemsFromCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRemoveItemsFromCart */ "./lib/shopify/storefront-data-hooks/src/hooks/useRemoveItemsFromCart.ts");

function useRemoveItemFromCart() {
  const removeItemsFromCart = Object(_useRemoveItemsFromCart__WEBPACK_IMPORTED_MODULE_0__["useRemoveItemsFromCart"])();

  async function removeItemFromCart(variantId) {
    if (variantId === '' || variantId == null) {
      throw new Error('VariantId must not be blank or null');
    }

    return removeItemsFromCart([String(variantId)]);
  }

  return removeItemFromCart;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useRemoveItemsFromCart.ts":
/*!*******************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useRemoveItemsFromCart.ts ***!
  \*******************************************************************************/
/*! exports provided: useRemoveItemsFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRemoveItemsFromCart", function() { return useRemoveItemsFromCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ "./lib/shopify/storefront-data-hooks/src/Context.tsx");
/* harmony import */ var _useGetLineItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useGetLineItem */ "./lib/shopify/storefront-data-hooks/src/hooks/useGetLineItem.ts");



function useRemoveItemsFromCart() {
  const {
    client,
    cart,
    setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["Context"]);
  const getLineItem = Object(_useGetLineItem__WEBPACK_IMPORTED_MODULE_2__["useGetLineItem"])();

  async function removeItemsFromCart(variantIds) {
    if (cart == null || client == null) {
      throw new Error('Called removeItemsFromCart too soon');
    }

    if (variantIds.length < 1) {
      throw new Error('Must include at least one item to remove');
    }

    const lineItemIds = variantIds.map(variantId => {
      const lineItem = getLineItem(variantId);

      if (lineItem === null) {
        throw new Error(`Could not find line item in cart with variant id: ${variantId}`);
      }

      return String(lineItem.id);
    });
    const newCart = await client.checkout.removeLineItems(cart.id, lineItemIds);
    setCart(newCart);
  }

  return removeItemsFromCart;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useSetCartUnsafe.ts":
/*!*************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useSetCartUnsafe.ts ***!
  \*************************************************************************/
/*! exports provided: useSetCartUnsafe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetCartUnsafe", function() { return useSetCartUnsafe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ "./lib/shopify/storefront-data-hooks/src/Context.tsx");


function useSetCartUnsafe() {
  const {
    setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["Context"]);
  return setCart;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/hooks/useUpdateItemQuantity.ts":
/*!******************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/hooks/useUpdateItemQuantity.ts ***!
  \******************************************************************************/
/*! exports provided: useUpdateItemQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateItemQuantity", function() { return useUpdateItemQuantity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context */ "./lib/shopify/storefront-data-hooks/src/Context.tsx");
/* harmony import */ var _useGetLineItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useGetLineItem */ "./lib/shopify/storefront-data-hooks/src/hooks/useGetLineItem.ts");



function useUpdateItemQuantity() {
  const {
    client,
    cart,
    setCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context__WEBPACK_IMPORTED_MODULE_1__["Context"]);
  const getLineItem = Object(_useGetLineItem__WEBPACK_IMPORTED_MODULE_2__["useGetLineItem"])();

  async function updateItemQuantity(variantId, quantity) {
    if (variantId == null) {
      throw new Error('Must provide a variant id');
    }

    if (quantity == null || Number(quantity) < 0) {
      throw new Error('Quantity must be greater than 0');
    }

    const lineItem = getLineItem(variantId);

    if (lineItem == null) {
      throw new Error(`Item with variantId ${variantId} not in cart`);
    } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore


    const newCart = await client.checkout.updateLineItems(cart.id, [{
      id: lineItem.id,
      quantity
    }]);
    setCart(newCart);
  }

  return updateItemQuantity;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/utils/LocalStorage/LocalStorage.ts":
/*!**********************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/utils/LocalStorage/LocalStorage.ts ***!
  \**********************************************************************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ "./lib/shopify/storefront-data-hooks/src/utils/LocalStorage/keys.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./lib/shopify/storefront-data-hooks/src/utils/index.ts");



function set(key, value) {
  const isBrowser = false;

  if (isBrowser) {
    window.localStorage.setItem(key, value);
  }
}

function get(key) {
  const isBrowser = false;

  if (!isBrowser) {
    return null;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item;
  } catch {
    return null;
  }
}

function getInitialCart() {
  const existingCartString = get(_keys__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].CART);

  if (existingCartString == null) {
    return null;
  }

  try {
    const existingCart = JSON.parse(existingCartString);

    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isCart"])(existingCart)) {
      return null;
    }

    return existingCart;
  } catch {
    return null;
  }
}

const LocalStorage = {
  get,
  set,
  getInitialCart
};

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/utils/LocalStorage/index.ts":
/*!***************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/utils/LocalStorage/index.ts ***!
  \***************************************************************************/
/*! exports provided: LocalStorage, LocalStorageKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage */ "./lib/shopify/storefront-data-hooks/src/utils/LocalStorage/LocalStorage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"]; });

/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./lib/shopify/storefront-data-hooks/src/utils/LocalStorage/keys.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageKeys", function() { return _keys__WEBPACK_IMPORTED_MODULE_1__["LocalStorageKeys"]; });





/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/utils/LocalStorage/keys.ts":
/*!**************************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/utils/LocalStorage/keys.ts ***!
  \**************************************************************************/
/*! exports provided: LocalStorageKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageKeys", function() { return LocalStorageKeys; });
const CART = 'shopify_local_store__cart';
const CHECKOUT_ID = 'shopify_local_store__checkout_id';
const LocalStorageKeys = {
  CART,
  CHECKOUT_ID
};

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/utils/index.ts":
/*!**************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/utils/index.ts ***!
  \**************************************************************/
/*! exports provided: LocalStorage, LocalStorageKeys, isCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage */ "./lib/shopify/storefront-data-hooks/src/utils/LocalStorage/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageKeys", function() { return _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./lib/shopify/storefront-data-hooks/src/utils/types/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCart", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["isCart"]; });





/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/utils/product.ts":
/*!****************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/utils/product.ts ***!
  \****************************************************************/
/*! exports provided: prepareVariantsWithOptions, getPrice, prepareVariantsImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareVariantsWithOptions", function() { return prepareVariantsWithOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrice", function() { return getPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareVariantsImages", function() { return prepareVariantsImages; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* 
  prepareVariantsWithOptions()

  This function changes the structure of the variants to
  more easily get at their options. The original data 
  structure looks like this:

  {
    "shopifyId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc4NDQ4MTAzMDE4OA==",
    "selectedOptions": [
      {
        "name": "Color",
        "value": "Red"
      },
      {
        "name": "Size",
        "value": "Small"
      }
    ]
  },

  This function accepts that and outputs a data structure that looks like this:

  {
    "shopifyId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc4NDQ4MTAzMDE4OA==",
    "color": "Red",
    "size": "Small"
  },
*/
function prepareVariantsWithOptions(variants) // variants: Readonly<ShopifyBuy.ProductVariant[]>
{
  return variants.map(variant => {
    var _variant$selectedOpti;

    // TODO: look into types, prob need update in @types/shopify-buy
    // convert the options to a dictionary instead of an array
    const optionsDictionary = (_variant$selectedOpti = variant.selectedOptions) === null || _variant$selectedOpti === void 0 ? void 0 : _variant$selectedOpti.reduce((options, option) => {
      var _option$name;

      options[`${option === null || option === void 0 ? void 0 : (_option$name = option.name) === null || _option$name === void 0 ? void 0 : _option$name.toLowerCase()}`] = option === null || option === void 0 ? void 0 : option.value;
      return options;
    }, {}); // return an object with all of the variant properties + the options at the top level

    return _objectSpread(_objectSpread({}, optionsDictionary), variant);
  });
}
const getPrice = (price, currency) => Intl.NumberFormat(undefined, {
  currency,
  minimumFractionDigits: 2,
  style: 'currency'
}).format(parseFloat(price ? price : '0'));
/*
  prepareVariantsImages()

  This function distills the variants images into a non-redundant
  group that includes an option 'key' (most likely color). The
  datastructure coming into this function looks like this:

  {
    "shopifyId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTc4NDQ4MTAzMDE4OA==",
    "image": image1,
    "color": "Red",
    "size": "Small"
  },
  {
    "shopifyId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaW1l2C8zMTc4NDQ4MTAzMDE4OA==",
    "image": image1,
    "color": "Red",
    "size": "Medium"
  },

  And condenses them so that there is only one unique
  image per key value:

  {
    "image": image1,
    "color": "Red",
  },
*/

function prepareVariantsImages(variants, // variants: Readonly<GatsbyTypes.ShopifyProductVariant[]>,
optionKey) {
  // Go through the variants and reduce them into non-redundant
  // images by optionKey. Output looks like this:
  // {
  //   [optionKey]: image
  // }
  const imageDictionary = variants.reduce((images, variant) => {
    if (variant[optionKey]) {
      images[variant[optionKey]] = variant.image;
    }

    return images;
  }, {}); // prepare an array of image objects that include both the image
  // and the optionkey value.

  const images = Object.keys(imageDictionary).map(key => {
    return {
      [optionKey]: key,
      src: imageDictionary[key]
    };
  });
  return images;
}

/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/utils/types/index.ts":
/*!********************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/utils/types/index.ts ***!
  \********************************************************************/
/*! exports provided: isCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isCart */ "./lib/shopify/storefront-data-hooks/src/utils/types/isCart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCart", function() { return _isCart__WEBPACK_IMPORTED_MODULE_0__["isCart"]; });



/***/ }),

/***/ "./lib/shopify/storefront-data-hooks/src/utils/types/isCart.ts":
/*!*********************************************************************!*\
  !*** ./lib/shopify/storefront-data-hooks/src/utils/types/isCart.ts ***!
  \*********************************************************************/
/*! exports provided: isCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCart", function() { return isCart; });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCart(potentialCart) {
  return potentialCart != null && potentialCart.id != null && potentialCart.webUrl != null && potentialCart.lineItems != null && potentialCart.type != null && potentialCart.type.name === 'Checkout' && potentialCart.type.kind === 'OBJECT';
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["cdn.shopify.com","cdn.builder.io","via.placeholder.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.detectDomainLocale = detectDomainLocale;

function detectDomainLocale(domainItems, hostname, detectedLocale) {
  let domainItem;

  if (domainItems) {
    if (detectedLocale) {
      detectedLocale = detectedLocale.toLowerCase();
    }

    for (const item of domainItems) {
      var _item$domain, _item$locales; // remove port if present


      const domainHostname = (_item$domain = item.domain) == null ? void 0 : _item$domain.split(':')[0].toLowerCase();

      if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || (_item$locales = item.locales) != null && _item$locales.some(locale => locale.toLowerCase() === detectedLocale)) {
        domainItem = item;
        break;
      }
    }
  }

  return domainItem;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (true) {
  detectDomainLocale = __webpack_require__(/*! ../i18n/detect-domain-locale */ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js").detectDomainLocale;
}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (true) {
    locale = locale || (0, _normalizeLocalePath.normalizeLocalePath)(path, locales).detectedLocale;
    const detectedDomain = detectDomainLocale(domainLocales, undefined, locale);

    if (detectedDomain) {
      return `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${basePath || ''}${locale === detectedDomain.defaultLocale ? '' : `/${locale}`}${path}`;
    }

    return false;
  }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (true) {
    return locale && locale !== defaultLocale && !path.startsWith('/' + locale + '/') && path !== '/' + locale ? addPathPrefix(path, '/' + locale) : path;
  }

  return path;
}

function delLocale(path, locale) {
  if (true) {
    return locale && (path.startsWith('/' + locale + '/') || path === '/' + locale) ? path.substr(locale.length + 1) || '/' : path;
  }

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
      this.domainLocales = domainLocales;
      this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
    }

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (true) {
      this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }

      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
      const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        parsedAs.pathname = addBasePath(parsedAs.pathname);
        as = (0, _utils.formatWithValidation)(parsedAs);
        url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
      }

      let didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        var _this$locales; // if the locale isn't configured hard navigate to show 404 page


        if (!((_this$locales = this.locales) != null && _this$locales.includes(this.locale))) {
          parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
          window.location.href = (0, _utils.formatWithValidation)(parsedAs); // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      const detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        // if we are navigating to a domain locale ensure we redirect to the
        // correct domain
        if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
          const asNoBasePath = delBasePath(as);
          window.location.href = `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${addBasePath(`${this.locale === detectedDomain.defaultLocale ? '' : `/${this.locale}`}${asNoBasePath === '/' ? '' : asNoBasePath}` || '/')}`; // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      if (didNavigate) {
        return new Promise(() => {});
      }
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (true) {
      if (options.locale === false) {
        pathname = (0, _normalizeLocalePath.normalizeLocalePath)(pathname, this.locales).pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
        let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
        const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || this.defaultLocale;
        asPath = (0, _utils.formatWithValidation)(parsedAs);
      }
    }

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-spring-modal/styles.css":
/*!****************************************************!*\
  !*** ./node_modules/react-spring-modal/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/[[...path]].tsx":
/*!*******************************!*\
  !*** ./pages/[[...path]].tsx ***!
  \*******************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common */ "./components/common/index.ts");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @builder.io/react */ "@builder.io/react");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @config/builder */ "./config/builder.ts");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_resolve_builder_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lib/resolve-builder-content */ "./lib/resolve-builder-content.ts");
/* harmony import */ var _blocks_ProductGrid_ProductGrid_builder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/ProductGrid/ProductGrid.builder */ "./blocks/ProductGrid/ProductGrid.builder.ts");
/* harmony import */ var _blocks_CollectionView_CollectionView_builder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blocks/CollectionView/CollectionView.builder */ "./blocks/CollectionView/CollectionView.builder.ts");
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @theme-ui/core */ "@theme-ui/core");
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/ui */ "./components/ui/index.ts");
/* harmony import */ var _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @theme-ui/mdx */ "@theme-ui/mdx");
/* harmony import */ var _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_mdx__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_get_layout_props__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @lib/get-layout-props */ "./lib/get-layout-props.ts");


var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\pages\\[[...path]].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









_builder_io_react__WEBPACK_IMPORTED_MODULE_4__["builder"].init(_config_builder__WEBPACK_IMPORTED_MODULE_5__["default"].apiKey);






const isProduction = false;
async function getStaticProps({
  params,
  locale
}) {
  var _params$path;

  const page = await Object(_lib_resolve_builder_content__WEBPACK_IMPORTED_MODULE_8__["resolveBuilderContent"])('page', {
    locale,
    urlPath: '/' + ((params === null || params === void 0 ? void 0 : (_params$path = params.path) === null || _params$path === void 0 ? void 0 : _params$path.join('/')) || '')
  });
  return {
    props: _objectSpread({
      page,
      locale
    }, await Object(_lib_get_layout_props__WEBPACK_IMPORTED_MODULE_14__["getLayoutProps"])()),
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 seconds
    revalidate: 30
  };
}
async function getStaticPaths({
  locales
}) {
  const pages = await _builder_io_react__WEBPACK_IMPORTED_MODULE_4__["builder"].getAll('page', {
    options: {
      noTargeting: true
    },
    apiKey: _config_builder__WEBPACK_IMPORTED_MODULE_5__["default"].apiKey
  });
  return {
    paths: pages.map(page => {
      var _page$data;

      return `${(_page$data = page.data) === null || _page$data === void 0 ? void 0 : _page$data.url}`;
    }),
    fallback: true
  };
}
function Path({
  page,
  locale
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    theme
  } = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_11__["useThemeUI"])();

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 12
    }, this);
  } // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed


  if (!page && !_builder_io_react__WEBPACK_IMPORTED_MODULE_4__["Builder"].isEditing && !_builder_io_react__WEBPACK_IMPORTED_MODULE_4__["Builder"].isPreviewing) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "robots",
          content: "noindex"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), _builder_io_react__WEBPACK_IMPORTED_MODULE_4__["Builder"].isBrowser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_6___default.a, {
        statusCode: 404
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 31
      }, this)]
    }, void 0, true);
  }

  const {
    title,
    description,
    image
  } = (page === null || page === void 0 ? void 0 : page.data) || {};
  _builder_io_react__WEBPACK_IMPORTED_MODULE_4__["Builder"].isStatic = true;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
      title: title,
      description: description,
      openGraph: _objectSpread({
        type: 'website',
        title,
        description,
        locale
      }, image && {
        images: [{
          url: image,
          width: 800,
          height: 600,
          alt: title
        }]
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_builder_io_react__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"], _objectSpread({
      options: {
        includeRefs: true
      },
      model: "page",
      data: {
        theme
      },
      renderLink: props => {
        if (props.target === '_blank') {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_theme_ui_mdx__WEBPACK_IMPORTED_MODULE_13__["Themed"].a, _objectSpread({}, props), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 20
          }, this);
        }

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_theme_ui_mdx__WEBPACK_IMPORTED_MODULE_13__["Themed"].a, _objectSpread(_objectSpread({}, props), {}, {
          as: _components_ui__WEBPACK_IMPORTED_MODULE_12__["Link"]
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 18
        }, this);
      }
    }, page && {
      content: page
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
Path.Layout = _components_common__WEBPACK_IMPORTED_MODULE_3__["Layout"];

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

/***/ "@builder.io/utils":
/*!************************************!*\
  !*** external "@builder.io/utils" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@builder.io/utils");

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

/***/ "@theme-ui/core":
/*!*********************************!*\
  !*** external "@theme-ui/core" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@theme-ui/core");

/***/ }),

/***/ "@theme-ui/match-media":
/*!****************************************!*\
  !*** external "@theme-ui/match-media" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@theme-ui/match-media");

/***/ }),

/***/ "@theme-ui/mdx":
/*!********************************!*\
  !*** external "@theme-ui/mdx" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@theme-ui/mdx");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2Jsb2Nrcy9Db2xsZWN0aW9uVmlldy9Db2xsZWN0aW9uVmlldy5idWlsZGVyLnRzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9Qcm9kdWN0R3JpZC9Qcm9kdWN0R3JpZC5idWlsZGVyLnRzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9Qcm9kdWN0R3JpZC9Qcm9kdWN0R3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9DYXJ0SXRlbS9DYXJ0SXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L0NhcnRJdGVtL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9DYXJ0U2lkZWJhclZpZXcvQ2FydFNpZGViYXJWaWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQvQ2FydFNpZGViYXJWaWV3L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9GZWF0dXJlQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9IZWFkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vTm9TU1IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL09wdGlvblBpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vUHJvZHVjdENhcmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1Byb2R1Y3RDYXJkRGVtby50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vU2VhcmNoYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9VbnRpbEludGVyYWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9Vc2VyTmF2LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0Fycm93TGVmdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9CYWcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQ2hlY2sudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQ2hldnJvblVwLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0Nyb3NzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0RvdWJsZUNoZXZyb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvR2l0aHViLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0hlYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0luZm8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvTWludXMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvTW9vbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9QbHVzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1JpZ2h0QXJyb3cudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvU3VuLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1RyYXNoLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1ZlcmNlbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0ltYWdlQ2Fyb3VzZWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTGluay9MaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0xpbmsvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9Mb2FkaW5nRG90cy9Mb2FkaW5nRG90cy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTG9hZGluZ0RvdHMvTG9hZGluZ0RvdHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTG9hZGluZ0RvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvU2lkZWJhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL2NvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvc2hvcGlmeS50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2dldC1sYXlvdXQtcHJvcHMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hvb2tzL3VzZUFjY2VwdENvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Jlc29sdmUtYnVpbGRlci1jb250ZW50LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL0NvbW1lcmNlUHJvdmlkZXIudHN4Iiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9hcGkvb3BlcmF0aW9ucy1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VBZGRJdGVtVG9DYXJ0LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlQWRkSXRlbXNUb0NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VDYXJ0LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlQ2FydENvdW50LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlQ2FydEl0ZW1zLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlQ2hlY2tvdXRVcmwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VDbGllbnRVbnNhZmUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VHZXRMaW5lSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZVJlbW92ZUl0ZW1Gcm9tQ2FydC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZVJlbW92ZUl0ZW1zRnJvbUNhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VTZXRDYXJ0VW5zYWZlLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlVXBkYXRlSXRlbVF1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL0xvY2FsU3RvcmFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL0xvY2FsU3RvcmFnZS9rZXlzLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy90eXBlcy9pc0NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZXJyb3IudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Vycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW1suLi5wYXRoXV0udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBidWlsZGVyLmlvL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJ1aWxkZXIuaW8vc2RrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJ1aWxkZXIuaW8vdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYnVpbGRlci5pby93aWRnZXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRoZW1lLXVpL2NvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGhlbWUtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0aGVtZS11aS9tYXRjaC1tZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0aGVtZS11aS9tZHhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGhlbWUtdWkvcHJlc2V0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXJlLXJlYWN0LWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3ByaW5nLW1vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcGlmeS1idXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sIm5hbWVzIjpbIkxhenlDb2xsZWN0aW9uVmlldyIsImR5bmFtaWMiLCJjb2xsZWN0aW9uQm94U2NoZW1hIiwibmFtZSIsInR5cGUiLCJzdWJGaWVsZHMiLCJwcm9kdWN0R3JpZFNjaGVtYSIsImRlZmF1bHRWYWx1ZSIsImNhcmRQcm9wcyIsImltZ1ByaW9yaXR5IiwiaW1nTGF5b3V0IiwiaW1nTG9hZGluZyIsImltZ1dpZHRoIiwiaW1nSGVpZ2h0IiwibGF5b3V0IiwiYWR2YW5jZWQiLCJoZWxwZXJUZXh0IiwicmVzdHJpY3RlZFJlZ2lzdGVyIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImlucHV0cyIsImNvbmNhdCIsImJ1aWxkZXJDb25maWciLCJpc0RlbW8iLCJyZXZlcnNlIiwiZGVmYXVsdHMiLCJiaW5kaW5ncyIsIkxhenlQcm9kdWN0R3JpZCIsIlByb2R1Y3RHcmlkIiwiQm9vbGVhbiIsInByb2Nlc3MiLCJlbnYiLCJJU19ERU1PIiwicHJvZHVjdENhcmRGaWVsZHMiLCJlbnVtIiwiQnVpbGRlciIsInJlZ2lzdGVyQ29tcG9uZW50IiwicHJvZHVjdHMiLCJpbml0aWFsUHJvZHVjdHMiLCJjb2xsZWN0aW9uIiwicHJvZHVjdHNMaXN0Iiwib2Zmc2V0IiwibGltaXQiLCJoaWdobGlnaHRDYXJkIiwic2V0UHJvZHVjdHMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0UHJvZHVjdHMiLCJwcm9taXNlcyIsIm1hcCIsImVudHJ5IiwicHJvZHVjdCIsImZpbHRlciIsImhhbmRsZSIsImdldFByb2R1Y3QiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2hDb2xsZWN0aW9uIiwicmVzdWx0IiwiZ2V0Q29sbGVjdGlvbiIsIlByb2R1Y3RDb21wb25lbnQiLCJQcm9kdWN0Q2FyZERlbW8iLCJQcm9kdWN0Q2FyZCIsInNsaWNlIiwiaSIsIlN0cmluZyIsImlkIiwiaW5kZXgiLCJjb21wb25lbnQiLCJvcHRpb25zIiwibW9kZWxzIiwiaXNFZGl0aW5nIiwiaW5jbHVkZXMiLCJidWlsZGVyIiwiZWRpdGluZ01vZGVsIiwiQ2FydEl0ZW0iLCJpdGVtIiwiY3VycmVuY3lDb2RlIiwidXBkYXRlSXRlbSIsInVzZVVwZGF0ZUl0ZW1RdWFudGl0eSIsInJlbW92ZUl0ZW0iLCJ1c2VSZW1vdmVJdGVtRnJvbUNhcnQiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwicmVtb3ZpbmciLCJzZXRSZW1vdmluZyIsInVwZGF0ZVF1YW50aXR5IiwidmFyaWFudCIsImhhbmRsZVF1YW50aXR5IiwiZSIsInZhbCIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIiwiaXNJbnRlZ2VyIiwiaGFuZGxlQmx1ciIsImluY3JlYXNlUXVhbnRpdHkiLCJuIiwiaGFuZGxlUmVtb3ZlIiwiZXJyb3IiLCJjb25zb2xlIiwid2lkdGgiLCJtIiwicGFkZGluZyIsImJvcmRlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJhbHRUZXh0Iiwic3JjIiwiTGluayIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRpdGxlIiwibWFyZ2luTGVmdCIsImdldFByaWNlIiwicHJpY2VWMiIsImFtb3VudCIsIm10IiwibWIiLCJsaXN0U3R5bGUiLCJqdXN0aWZ5SXRlbXMiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJzZWxlY3RlZE9wdGlvbnMiLCJvcHRpb24iLCJDYXJ0U2lkZWJhclZpZXciLCJjaGVja291dFVybCIsInVzZUNoZWNrb3V0VXJsIiwiY2FydCIsInVzZUNhcnQiLCJzdWJUb3RhbCIsInN1YnRvdGFsUHJpY2UiLCJ0b3RhbCIsIml0ZW1zIiwibGluZUl0ZW1zIiwiaXNFbXB0eSIsImxlbmd0aCIsImNhcnRVcHNlbGwiLCJzZXRDYXJ0VXBzZWxsIiwiZmV0Y2hDb250ZW50IiwiY2FydFVwc2VsbENvbnRlbnQiLCJnZXQiLCJjYWNoZWJ1c3QiLCJpc0RldiIsInVzZXJBdHRyaWJ1dGVzIiwiaXRlbUluQ2FydCIsInRvUHJvbWlzZSIsIm92ZXJmbG93IiwicGFkZGluZ0JvdHRvbSIsImJnIiwiZmxleERpcmVjdGlvbiIsInB4IiwiY29sb3IiLCJtaW5XaWR0aCIsInBhZGRpbmdMZWZ0IiwibXkiLCJwIiwiRmVhdHVyZUJhciIsImFjdGlvbiIsImhpZGUiLCJkZWxheSIsImRlbGF5UGFzc2VkIiwic2V0RGVsYXlQYXNzZWQiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkhlYWQiLCJwcm9wcyIsInNlb0luZm8iLCJzc3IiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInBhZ2VQcm9wcyIsImJ1aWxkZXJUaGVtZSIsInRoZW1lIiwiaXNMaXZlIiwiaXNQcmV2aWV3aW5nIiwic2hvcGlmeUNvbmZpZyIsImNvbnRlbnQiLCJkYXRhIiwic2l0ZVNldHRpbmdzIiwiY29sb3JPdmVycmlkZXMiLCJzaXRlU2VvSW5mbyIsInNpdGVJbmZvcm1hdGlvbiIsInNlb0NvbmZpZyIsIklubmVyTGF5b3V0IiwidGhlbWVOYW1lIiwidGhlbWVzTWFwIiwiY29sb3JzIiwiZGlzcGxheVNpZGViYXIiLCJjbG9zZVNpZGViYXIiLCJ1c2VVSSIsImFjY2VwdGVkQ29va2llcyIsIm9uQWNjZXB0Q29va2llcyIsInVzZUFjY2VwdENvb2tpZXMiLCJtYXJnaW4iLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsInByZXZpZXdpbmdNb2RlbCIsIk5hdmJhciIsImFubm91bmNlbWVudCIsInNldEFubm91bmNlbWVudCIsInVzZVRoZW1lVUkiLCJuYXZpZ2F0aW9uTGlua3MiLCJsb2dvIiwiYW5vdW5jZW1lbnRDb250ZW50IiwicHkiLCJwb3NpdGlvbiIsImZsZXhCYXNpcyIsImxpbmsiLCJ0cmFuc2Zvcm0iLCJsZWZ0IiwibGV0dGVyU3BhY2luZyIsInRleHREZWNvcmF0aW9uIiwidGV4dCIsIk5vU1NSIiwic2tlbGV0b24iLCJyZW5kZXIiLCJzZXRSZW5kZXIiLCJPcHRpb25QaWNrZXIiLCJvbkNoYW5nZSIsInNlbGVjdGVkIiwiaW1nU2l6ZXMiLCJwcm9kdWN0VmFyaWFudCIsInZhcmlhbnRzIiwicHJpY2UiLCJmbGV4R3JvdyIsImltYWdlcyIsInNob3dBbHRlcm5hdGUiLCJzZXRTaG93QWx0ZXJuYXRlIiwiY2FuVG9nZ2xlIiwic2V0Q2FuVG9nZ2xlIiwiY29tcGFyZV9hdF9wcmljZSIsImFsdGVybmF0ZUltYWdlIiwiU2VhcmNoYmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwicSIsInF1ZXJ5IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiYnV0dG9uUmVmIiwidXNlUmVmIiwiYXNQYXRoIiwic3BsaXQiLCJzdHlsZSIsInRvcCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJ0ZXJtIiwib3AiLCJwYXRobmFtZSIsIkJ1dHRvbiIsIlNlYXJjaE1vZGFsQ29udGVudCIsInNlYXJjaCIsInNldFNlYXJjaCIsImluaXRpYWxTZWFyY2giLCJzZWFyY2hUZXJtIiwicmVzdWx0cyIsInNlYXJjaFByb2R1Y3RzIiwib25TZWFyY2giLCJ0aHJvdHRsZVNlYXJjaCIsInVzZUNhbGxiYWNrIiwidGhyb3R0bGUiLCJtYXJnaW5Cb3R0b20iLCJldmVudCIsIlVudGlsSW50ZXJhY3Rpb24iLCJVc2VyTmF2IiwiY2xhc3NOYW1lIiwidG9nZ2xlU2lkZWJhciIsIkFycm93TGVmdCIsIkJhZyIsIkNoZWNrIiwiQ2hldnJvblVwIiwiQ3Jvc3MiLCJEb3VibGVDaGV2cm9uIiwiR2l0aHViIiwiSGVhcnQiLCJJbmZvIiwiTWludXMiLCJNb29uIiwiUGx1cyIsIlJpZ2h0QXJyb3ciLCJTdW4iLCJUcmFzaCIsIlZlcmNlbCIsIkxhenlDYXJvdXNlbCIsIkltYWdlQ2Fyb3VzZWwiLCJvblRodW1ibmFpbENsaWNrIiwic2hvd1pvb20iLCJjdXJyZW50U2xpZGUiLCJpbWFnZVByb3BzIiwiaHJlZiIsIkxvYWRpbmdEb3RzIiwicyIsInJvb3QiLCJTaWRlYmFyIiwib3BlbiIsIm9uQ2xvc2UiLCJ1c2VSZXNwb25zaXZlVmFsdWUiLCJyaWdodCIsImZyb20iLCJlbnRlciIsImxlYXZlIiwiaW5pdGlhbFN0YXRlIiwiVUlDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJVSVByb3ZpZGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9wZW5TaWRlYmFyIiwicHJldiIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidW5kZWZpbmVkIiwiRXJyb3IiLCJNYW5hZ2VkVUlDb250ZXh0IiwiYXBpS2V5IiwicHJvZHVjdHNNb2RlbCIsImNvbGxlY3Rpb25zTW9kZWwiLCJkb21haW4iLCJzdG9yZWZyb250QWNjZXNzVG9rZW4iLCJTSE9QSUZZX1NUT1JFRlJPTlRfQVBJX1RPS0VOIiwidGhlbWVzIiwiZ2V0TGF5b3V0UHJvcHMiLCJ0YXJnZXRpbmdBdHRyaWJ1dGVzIiwicmVzb2x2ZUJ1aWxkZXJDb250ZW50IiwiQ09PS0lFX05BTUUiLCJzZXRBY2NlcHRlZENvb2tpZXMiLCJDb29raWVzIiwiYWNjZXB0Q29va2llcyIsInNldCIsImV4cGlyZXMiLCJpbml0IiwiaXNTdGF0aWMiLCJtb2RlbE5hbWUiLCJwYWdlIiwiaW5jbHVkZVJlZnMiLCJwcmV2aWV3IiwiZ2V0QXN5bmNQcm9wcyIsIkNvbGxlY3Rpb25Cb3giLCJQcm9kdWN0Qm94IiwiUHJvZHVjdENvbGxlY3Rpb25HcmlkIiwiQ29tbWVyY2VQcm92aWRlciIsImluaXRpYWxDYXJ0IiwiTG9jYWxTdG9yYWdlIiwiZ2V0SW5pdGlhbENhcnQiLCJzZXRDYXJ0IiwiaXNDdXN0b21Eb21haW4iLCJjbGllbnQiLCJTaG9waWZ5QnV5IiwiYnVpbGRDbGllbnQiLCJnZXROZXdDYXJ0IiwibmV3Q2FydCIsImNoZWNrb3V0IiwiY3JlYXRlIiwicmVmcmVzaEV4aXN0aW5nQ2FydCIsImNhcnRJZCIsInJlZnJlc2hlZENhcnQiLCJmZXRjaCIsImNhcnRIYXNCZWVuUHVyY2hhc2VkIiwiY29tcGxldGVkQXQiLCJMb2NhbFN0b3JhZ2VLZXlzIiwiQ0FSVCIsIkpTT04iLCJzdHJpbmdpZnkiLCJDb250ZXh0IiwiZ2V0QWxsUHJvZHVjdHMiLCJjb25maWciLCJwcm9kdWN0c0NvbnRlbnQiLCJ0aGVuIiwicmVzIiwianNvbiIsInByIiwic2VhcmNoU3RyaW5nIiwicXMiLCJmaWVsZHMiLCJhbGxvd0RvdHMiLCIkcmVnZXgiLCIkb3B0aW9ucyIsImdldEFsbFByb2R1Y3RQYXRocyIsIiRlcSIsIndpdGhDb250ZW50IiwiZ2V0QWxsQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9uc0NvbnRlbnQiLCJzZWFyY2hDb2xsZWN0aW9ucyIsImdldEFsbENvbGxlY3Rpb25QYXRocyIsImNvbGxlY3Rpb25zIiwicHJvZHVjdHNRdWVyeSIsIm5leHRQYWdlQ3Vyc29yIiwiaGFzTmV4dFBhZ2UiLCJnZXRDb2xsZWN0aW9uUHJvZHVjdHMiLCJ1c2VBZGRJdGVtVG9DYXJ0IiwiYWRkSXRlbXNUb0NhcnQiLCJ1c2VBZGRJdGVtc1RvQ2FydCIsImFkZEl0ZW1Ub0NhcnQiLCJ2YXJpYW50SWQiLCJjdXN0b21BdHRyaWJ1dGVzIiwiZm9yRWFjaCIsImFkZExpbmVJdGVtcyIsInVzZUNhcnRDb3VudCIsImNvdW50IiwicmVkdWNlIiwidG90YWxDb3VudCIsImxpbmVJdGVtIiwidXNlQ2FydEl0ZW1zIiwiQXJyYXkiLCJpc0FycmF5Iiwid2ViVXJsIiwidXNlQ2xpZW50VW5zYWZlIiwid2FybiIsInVzZUdldExpbmVJdGVtIiwiY2FydEl0ZW1zIiwiZ2V0TGluZUl0ZW0iLCJmaW5kIiwiY2FydEl0ZW0iLCJyZW1vdmVJdGVtc0Zyb21DYXJ0IiwidXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsInZhcmlhbnRJZHMiLCJsaW5lSXRlbUlkcyIsInJlbW92ZUxpbmVJdGVtcyIsInVzZVNldENhcnRVbnNhZmUiLCJ1cGRhdGVJdGVtUXVhbnRpdHkiLCJ1cGRhdGVMaW5lSXRlbXMiLCJrZXkiLCJpc0Jyb3dzZXIiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImV4aXN0aW5nQ2FydFN0cmluZyIsImV4aXN0aW5nQ2FydCIsInBhcnNlIiwiaXNDYXJ0IiwiQ0hFQ0tPVVRfSUQiLCJwcmVwYXJlVmFyaWFudHNXaXRoT3B0aW9ucyIsIm9wdGlvbnNEaWN0aW9uYXJ5IiwidG9Mb3dlckNhc2UiLCJjdXJyZW5jeSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXQiLCJwYXJzZUZsb2F0IiwicHJlcGFyZVZhcmlhbnRzSW1hZ2VzIiwib3B0aW9uS2V5IiwiaW1hZ2VEaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsInBvdGVudGlhbENhcnQiLCJraW5kIiwiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImEiLCJzaXplcyIsInBlcmNlbnRTaXplcyIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJ3Iiwic3JjU2V0IiwiZ2V0V2lkdGhzIiwibGFzdCIsImxvYWQiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsInJlc3QiLCJ1bnNpemVkIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJib3hTaXppbmciLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJsb2NhbGVEb21haW4iLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsImRvY3VtZW50IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJkZXRlY3RlZExvY2FsZSIsImRvbWFpbkhvc3RuYW1lIiwiZG9tYWluSXRlbSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImRldGVjdERvbWFpbkxvY2FsZSIsInJlcXVpcmUiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsImRldGVjdGVkRG9tYWluIiwiYWRkUGF0aFByZWZpeCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZmlsdGVyZWRRdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsInBhcnNlZEFzIiwiZGVsQmFzZVBhdGgiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhZGRMb2NhbGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwicXVlcnlzdHJpbmciLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwic3RhdHVzQ29kZXMiLCJzdGF0dXNDb2RlIiwic3R5bGVzIiwiX19odG1sIiwiX2dldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJiYWNrZ3JvdW5kIiwiZm9udEZhbWlseSIsImRlc2MiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImgxIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW5SaWdodCIsImgyIiwiaXNQcm9kdWN0aW9uIiwiZ2V0U3RhdGljUHJvcHMiLCJ1cmxQYXRoIiwiam9pbiIsInJldmFsaWRhdGUiLCJnZXRTdGF0aWNQYXRocyIsImdldEFsbCIsIm5vVGFyZ2V0aW5nIiwicGF0aHMiLCJmYWxsYmFjayIsIlBhdGgiLCJhbHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBO1FBQ0EsbUNBQW1DO1FBQ25DO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxjQUFjO1FBQ2QsSUFBSTtRQUNK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b3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9bWy4uLnBhdGhdXVwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9bWy4uLnBhdGhdXS50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJpbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcmVhY3QnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BidWlsZGVyLmlvL3NkaydcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IHByb2R1Y3RHcmlkU2NoZW1hIH0gZnJvbSAnLi4vUHJvZHVjdEdyaWQvUHJvZHVjdEdyaWQuYnVpbGRlcidcbmltcG9ydCBidWlsZGVyQ29uZmlnIGZyb20gJ0Bjb25maWcvYnVpbGRlcidcbmltcG9ydCB7IHJlc3RyaWN0ZWRSZWdpc3RlciB9IGZyb20gJ2Jsb2Nrcy91dGlscydcbmNvbnN0IExhenlDb2xsZWN0aW9uVmlldyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KGAuL0NvbGxlY3Rpb25WaWV3YCkpXG5cbmNvbnN0IGNvbGxlY3Rpb25Cb3hTY2hlbWE6IElucHV0W10gPSBbXG4gIHtcbiAgICBuYW1lOiAncHJvZHVjdEdyaWRPcHRpb25zJyxcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICBzdWJGaWVsZHM6IHByb2R1Y3RHcmlkU2NoZW1hLFxuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAgY2FyZFByb3BzOiB7XG4gICAgICAgIGltZ1ByaW9yaXR5OiB0cnVlLFxuICAgICAgICBpbWdMYXlvdXQ6ICdyZXNwb25zaXZlJyxcbiAgICAgICAgaW1nTG9hZGluZzogJ2VhZ2VyJyxcbiAgICAgICAgaW1nV2lkdGg6IDU0MCxcbiAgICAgICAgaW1nSGVpZ2h0OiA1NDAsXG4gICAgICAgIGxheW91dDogJ2ZpeGVkJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBuYW1lOiAncmVuZGVyU2VvJyxcbiAgICBhZHZhbmNlZDogdHJ1ZSxcbiAgICBoZWxwZXJUZXh0OlxuICAgICAgJ3RvZ2dsZSB0byByZW5kZXIgc2VvIGluZm8gb24gcGFnZSwgb25seSB1c2UgZm9yIGNvbGxlY3Rpb24gcGFnZXMnLFxuICB9LFxuXVxuXG5yZXN0cmljdGVkUmVnaXN0ZXIoXG4gIExhenlDb2xsZWN0aW9uVmlldyxcbiAge1xuICAgIG5hbWU6ICdDb2xsZWN0aW9uQm94JyxcbiAgICBkZXNjcmlwdGlvbjogJ1BpY2sgYSBjb2xsZWN0aW9uIHRvIGRpc3BsYXkgaXRzIGRldGFpbHMnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL3N2Zy9jb2xsYWdlLnN2ZycsXG4gICAgaW5wdXRzOiBjb2xsZWN0aW9uQm94U2NoZW1hXG4gICAgICAuY29uY2F0KFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgICAvLyBTaG9waWZ5Q29sbGVjdGlvbkhhbmRsZSBpcyBhIGN1c3RvbSB0eXBlIGRlZmluZWQgaW4gQGJ1aWxkZXIuaW8vcGx1Z2luLXNob3BpZnkgdGhhdCBsZXQncyB0aGUgdXNlciBwaWNrIGEgY29sbGVjdGlvbiBmcm9tIGEgcGlja2VyIGFuZCByZXNvbHZlcyB0byBpdCdzIGhhbmRsZVxuICAgICAgICAgIHR5cGU6IGAke1xuICAgICAgICAgICAgYnVpbGRlckNvbmZpZy5pc0RlbW8gPyAnU2hvcGlmeVN0b3JlJyA6ICdTaG9waWZ5J1xuICAgICAgICAgIH1Db2xsZWN0aW9uSGFuZGxlYCxcbiAgICAgICAgfSxcbiAgICAgIF0pXG4gICAgICAucmV2ZXJzZSgpLFxuICB9LFxuICBbJ3BhZ2UnLCAncHJvZHVjdC1wYWdlJywgJ3RoZW1lJ11cbilcblxucmVzdHJpY3RlZFJlZ2lzdGVyKFxuICBMYXp5Q29sbGVjdGlvblZpZXcsXG4gIHtcbiAgICBuYW1lOiAnQ29sbGVjdGlvblZpZXcnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0R5bmFtaWMgY29sbGVjdGlvbiBkZXRhaWxscywgYXV0b2JpbmRzIHRvIHRoZSBjb2xsZWN0aW9uIGluIGNvbnRleHQsIHVzZSBvbmx5IG9uIGNvbGxlY3Rpb24gcGFnZXMnLFxuICAgIGlucHV0czogY29sbGVjdGlvbkJveFNjaGVtYSxcbiAgICBkZWZhdWx0czoge1xuICAgICAgYmluZGluZ3M6IHtcbiAgICAgICAgJ2NvbXBvbmVudC5vcHRpb25zLmNvbGxlY3Rpb24nOiAnc3RhdGUuY29sbGVjdGlvbicsXG4gICAgICAgICdjb21wb25lbnQub3B0aW9ucy5yZW5kZXJTZW8nOiAndHJ1ZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIFsnY29sbGVjdGlvbi1wYWdlJywgJ3RoZW1lJ11cbilcbiIsImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IEJ1aWxkZXIgfSBmcm9tICdAYnVpbGRlci5pby9yZWFjdCdcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGJ1aWxkZXIuaW8vc2RrJ1xuY29uc3QgTGF6eVByb2R1Y3RHcmlkID0gZHluYW1pYyhhc3luYyAoKSA9PiB7XG4gIHJldHVybiAoYXdhaXQgaW1wb3J0KCcuL1Byb2R1Y3RHcmlkJykpLlByb2R1Y3RHcmlkXG59KVxuY29uc3QgaXNEZW1vID0gQm9vbGVhbihwcm9jZXNzLmVudi5JU19ERU1PKVxuXG5jb25zdCBwcm9kdWN0Q2FyZEZpZWxkczogSW5wdXRbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdpbWdXaWR0aCcsXG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgZGVmYXVsdFZhbHVlOiA1NDAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnaW1nSGVpZ2h0JyxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDU0MCxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpbWdQcmlvcml0eScsXG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGFkdmFuY2VkOiB0cnVlLFxuICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpbWdMb2FkaW5nJyxcbiAgICB0eXBlOiAnZW51bScsXG4gICAgYWR2YW5jZWQ6IHRydWUsXG4gICAgZGVmYXVsdFZhbHVlOiAnbGF6eScsXG4gICAgZW51bTogWydlYWdlcicsICdsYXp5J10sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnaW1nTGF5b3V0JyxcbiAgICB0eXBlOiAnZW51bScsXG4gICAgZW51bTogWydmaXhlZCcsICdpbnRyaW5zaWMnLCAncmVzcG9uc2l2ZScsICdmaWxsJ10sXG4gICAgYWR2YW5jZWQ6IHRydWUsXG4gICAgZGVmYXVsdFZhbHVlOiAnZmlsbCcsXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0R3JpZFNjaGVtYTogSW5wdXRbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdjYXJkUHJvcHMnLFxuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAgaW1nUHJpb3JpdHk6IHRydWUsXG4gICAgICBpbWdMYXlvdXQ6ICdyZXNwb25zaXZlJyxcbiAgICAgIGltZ0xvYWRpbmc6ICdlYWdlcicsXG4gICAgICBpbWdXaWR0aDogNTQwLFxuICAgICAgaW1nSGVpZ2h0OiA1NDAsXG4gICAgICBsYXlvdXQ6ICdmaXhlZCcsXG4gICAgfSxcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICBzdWJGaWVsZHM6IHByb2R1Y3RDYXJkRmllbGRzLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ29mZnNldCcsXG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgZGVmYXVsdFZhbHVlOiAwLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xpbWl0JyxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDksXG4gIH0sXG5dXG5cbkJ1aWxkZXIucmVnaXN0ZXJDb21wb25lbnQoTGF6eVByb2R1Y3RHcmlkLCB7XG4gIG5hbWU6ICdQcm9kdWN0R3JpZCcsXG4gIGltYWdlOiAnaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL3N2Zy9wbGF5LWxpc3QtYWRkLnN2ZycsXG4gIGRlc2NyaXB0aW9uOiAnUGljayBwcm9kdWN0cyBmcmVlIGZvcm0nLFxuICBpbnB1dHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAncHJvZHVjdHNMaXN0JyxcbiAgICAgIHR5cGU6ICdsaXN0JyxcbiAgICAgIHN1YkZpZWxkczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3Byb2R1Y3QnLFxuICAgICAgICAgIHR5cGU6IGAke2lzRGVtbyA/ICdTaG9waWZ5U3RvcmUnIDogJ1Nob3BpZnknfVByb2R1Y3RIYW5kbGVgLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLmNvbmNhdChwcm9kdWN0R3JpZFNjaGVtYSBhcyBhbnkpLFxufSlcblxuQnVpbGRlci5yZWdpc3RlckNvbXBvbmVudChMYXp5UHJvZHVjdEdyaWQsIHtcbiAgbmFtZTogJ1Byb2R1Y3RDb2xsZWN0aW9uR3JpZCcsXG4gIGltYWdlOiAnaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL3N2Zy9kaXNwbGF5LWdyaWQuc3ZnJyxcbiAgZGVzY3JpcHRpb246ICdDaG9vc2UgYSBjb2xsZWN0aW9uIHRvIHNob3cgaXRzIHByb2R1Y3RzIGluIGEgZ3JpZCcsXG4gIGlucHV0czogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdjb2xsZWN0aW9uJyxcbiAgICAgIHR5cGU6IGAke2lzRGVtbyA/ICdTaG9waWZ5U3RvcmUnIDogJ1Nob3BpZnknfUNvbGxlY3Rpb25IYW5kbGVgLFxuICAgIH0sXG4gIF0uY29uY2F0KHByb2R1Y3RHcmlkU2NoZW1hKSxcbn0pXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMb2FkaW5nRG90cyB9IGZyb20gJ0Bjb21wb25lbnRzL3VpJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0B0aGVtZS11aS9jb21wb25lbnRzJ1xuaW1wb3J0IHsgUHJvZHVjdENhcmRQcm9wcyB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbi9Qcm9kdWN0Q2FyZCdcbmltcG9ydCB7IFByb2R1Y3RDYXJkRGVtbywgUHJvZHVjdENhcmQgfSBmcm9tICdAY29tcG9uZW50cy9jb21tb24nXG5cbmltcG9ydCB7XG4gIGdldENvbGxlY3Rpb24sXG4gIGdldFByb2R1Y3QsXG59IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2FwaS9vcGVyYXRpb25zLWJ1aWxkZXInXG5pbXBvcnQgYnVpbGRlckNvbmZpZyBmcm9tICdAY29uZmlnL2J1aWxkZXInXG5pbnRlcmZhY2UgSGlnaGxpZ2h0ZWRDYXJkUHJvcHMgZXh0ZW5kcyBPbWl0PFByb2R1Y3RDYXJkUHJvcHMsICdwcm9kdWN0Jz4ge1xuICBpbmRleDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEdyaWRQcm9wcyB7XG4gIHByb2R1Y3RzPzogU2hvcGlmeUJ1eS5Qcm9kdWN0W11cbiAgcHJvZHVjdHNMaXN0PzogQXJyYXk8eyBwcm9kdWN0OiBzdHJpbmcgfT5cbiAgY29sbGVjdGlvbj86IHN0cmluZyB8IGFueSAvLyBTaG9waWZ5QnV5LkNvbGxlY3Rpb25cbiAgb2Zmc2V0OiBudW1iZXJcbiAgbGltaXQ6IG51bWJlclxuICBjYXJkUHJvcHM6IE9taXQ8UHJvZHVjdENhcmRQcm9wcywgJ3Byb2R1Y3QnPlxuICBoaWdobGlnaHRDYXJkPzogSGlnaGxpZ2h0ZWRDYXJkUHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RHcmlkOiBGQzxQcm9kdWN0R3JpZFByb3BzPiA9ICh7XG4gIHByb2R1Y3RzOiBpbml0aWFsUHJvZHVjdHMsXG4gIGNvbGxlY3Rpb24sXG4gIHByb2R1Y3RzTGlzdCxcbiAgb2Zmc2V0ID0gMCxcbiAgbGltaXQgPSAxMCxcbiAgY2FyZFByb3BzLFxuICBoaWdobGlnaHRDYXJkLFxufSkgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKGluaXRpYWxQcm9kdWN0cyB8fCBbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHByb21pc2VzID0gcHJvZHVjdHNMaXN0IVxuICAgICAgICAubWFwKChlbnRyeSkgPT4gZW50cnkucHJvZHVjdClcbiAgICAgICAgLmZpbHRlcigoaGFuZGxlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHR5cGVvZiBoYW5kbGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAubWFwKFxuICAgICAgICAgIGFzeW5jIChoYW5kbGU6IHN0cmluZykgPT4gYXdhaXQgZ2V0UHJvZHVjdChidWlsZGVyQ29uZmlnLCB7IGhhbmRsZSB9KVxuICAgICAgICApXG4gICAgICBzZXRQcm9kdWN0cyhhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcykpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgICBpZiAocHJvZHVjdHNMaXN0ICYmICFpbml0aWFsUHJvZHVjdHMpIHtcbiAgICAgIGdldFByb2R1Y3RzKClcbiAgICB9XG4gIH0sIFtwcm9kdWN0c0xpc3QsIGluaXRpYWxQcm9kdWN0c10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENvbGxlY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRDb2xsZWN0aW9uKGJ1aWxkZXJDb25maWcsIHtcbiAgICAgICAgaGFuZGxlOiBjb2xsZWN0aW9uLFxuICAgICAgfSlcbiAgICAgIHNldFByb2R1Y3RzKHJlc3VsdC5wcm9kdWN0cylcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29sbGVjdGlvbiA9PT0gJ3N0cmluZycgJiYgIWluaXRpYWxQcm9kdWN0cykge1xuICAgICAgZmV0Y2hDb2xsZWN0aW9uKClcbiAgICB9XG4gIH0sIFtjb2xsZWN0aW9uXSlcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZ0RvdHMgLz5cbiAgfVxuICBjb25zdCBQcm9kdWN0Q29tcG9uZW50OiBhbnkgPSBwcm9jZXNzLmVudi5JU19ERU1PXG4gICAgPyBQcm9kdWN0Q2FyZERlbW9cbiAgICA6IFByb2R1Y3RDYXJkXG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBnYXA9ezJ9IHdpZHRoPXtbJzEwMCUnLCAnNDAlJywgJzI0JSddfT5cbiAgICAgIHtwcm9kdWN0cy5zbGljZShvZmZzZXQsIGxpbWl0KS5tYXAoKHByb2R1Y3QsIGkpID0+IChcbiAgICAgICAgPFByb2R1Y3RDb21wb25lbnRcbiAgICAgICAgICBrZXk9e1N0cmluZyhwcm9kdWN0LmlkKSArIGl9XG4gICAgICAgICAgey4uLihoaWdobGlnaHRDYXJkPy5pbmRleCA9PT0gaSA/IGhpZ2hsaWdodENhcmQgOiBjYXJkUHJvcHMpfVxuICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L0dyaWQ+XG4gIClcbn1cbiIsImltcG9ydCB7IEJ1aWxkZXIsIENvbXBvbmVudCwgYnVpbGRlciB9IGZyb20gJ0BidWlsZGVyLmlvL3NkaydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RyaWN0ZWRSZWdpc3RlcihcbiAgY29tcG9uZW50OiBhbnksXG4gIG9wdGlvbnM6IENvbXBvbmVudCxcbiAgbW9kZWxzOiBzdHJpbmdbXVxuKSB7XG4gIGlmICghQnVpbGRlci5pc0VkaXRpbmcgfHwgbW9kZWxzLmluY2x1ZGVzKGJ1aWxkZXIuZWRpdGluZ01vZGVsISkpIHtcbiAgICByZXR1cm4gQnVpbGRlci5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMpXG4gIH1cbn1cbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFRoZW1lZCwganN4LCBHcmlkLCBCdXR0b24sIElucHV0LCBUZXh0LCBJY29uQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgUGx1cywgTWludXMgfSBmcm9tICdAY29tcG9uZW50cy9pY29ucydcbmltcG9ydCB7IGdldFByaWNlIH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvcHJvZHVjdCdcbmltcG9ydCB7XG4gIHVzZVVwZGF0ZUl0ZW1RdWFudGl0eSxcbiAgdXNlUmVtb3ZlSXRlbUZyb21DYXJ0LFxufSBmcm9tICdAbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzJ1xuXG5jb25zdCBDYXJ0SXRlbSA9ICh7XG4gIGl0ZW0sXG4gIGN1cnJlbmN5Q29kZSxcbn06IHtcbiAgaXRlbTogLypTaG9waWZ5QnV5LkxpbmVJdGVtIHRvZG86IGNoZWNrIGlmIHVwZGF0ZWQgdHlwZXMqLyBhbnlcbiAgY3VycmVuY3lDb2RlOiBzdHJpbmdcbn0pID0+IHtcbiAgY29uc3QgdXBkYXRlSXRlbSA9IHVzZVVwZGF0ZUl0ZW1RdWFudGl0eSgpXG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSB1c2VSZW1vdmVJdGVtRnJvbUNhcnQoKVxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKGl0ZW0ucXVhbnRpdHkpXG4gIGNvbnN0IFtyZW1vdmluZywgc2V0UmVtb3ZpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHVwZGF0ZVF1YW50aXR5ID0gYXN5bmMgKHF1YW50aXR5OiBudW1iZXIpID0+IHtcbiAgICBhd2FpdCB1cGRhdGVJdGVtKGl0ZW0udmFyaWFudC5pZCwgcXVhbnRpdHkpXG4gIH1cbiAgY29uc3QgaGFuZGxlUXVhbnRpdHkgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWwgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpXG5cbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2YWwpICYmIHZhbCA+PSAwKSB7XG4gICAgICBzZXRRdWFudGl0eSh2YWwpXG4gICAgfVxuICB9XG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsID0gTnVtYmVyKHF1YW50aXR5KVxuXG4gICAgaWYgKHZhbCAhPT0gaXRlbS5xdWFudGl0eSkge1xuICAgICAgdXBkYXRlUXVhbnRpdHkodmFsKVxuICAgIH1cbiAgfVxuICBjb25zdCBpbmNyZWFzZVF1YW50aXR5ID0gKG4gPSAxKSA9PiB7XG4gICAgY29uc3QgdmFsID0gTnVtYmVyKHF1YW50aXR5KSArIG5cblxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbCkgJiYgdmFsID49IDApIHtcbiAgICAgIHNldFF1YW50aXR5KHZhbClcbiAgICAgIHVwZGF0ZVF1YW50aXR5KHZhbClcbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFJlbW92aW5nKHRydWUpXG5cbiAgICB0cnkge1xuICAgICAgLy8gSWYgdGhpcyBhY3Rpb24gc3VjY2VlZHMgdGhlbiB0aGVyZSdzIG5vIG5lZWQgdG8gZG8gYHNldFJlbW92aW5nKHRydWUpYFxuICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSB2aWV3XG4gICAgICBhd2FpdCByZW1vdmVJdGVtKGl0ZW0udmFyaWFudC5pZClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIHNldFJlbW92aW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVzZXQgdGhlIHF1YW50aXR5IHN0YXRlIGlmIHRoZSBpdGVtIHF1YW50aXR5IGNoYW5nZXNcbiAgICBpZiAoaXRlbS5xdWFudGl0eSAhPT0gTnVtYmVyKHF1YW50aXR5KSkge1xuICAgICAgc2V0UXVhbnRpdHkoaXRlbS5xdWFudGl0eSlcbiAgICB9XG4gIH0sIFtpdGVtLnF1YW50aXR5XSlcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGdhcD17Mn0gc3g9e3sgd2lkdGg6ICcxMDAlJywgbTogMTIgfX0gY29sdW1ucz17WzJdfT5cbiAgICAgIDxkaXZcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBwYWRkaW5nOiAxLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBoZWlnaHQ9ezEzMH1cbiAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgIHVub3B0aW1pemVkXG4gICAgICAgICAgYWx0PXtpdGVtLnZhcmlhbnQuaW1hZ2UuYWx0VGV4dH1cbiAgICAgICAgICBzcmM9e2l0ZW0udmFyaWFudC5pbWFnZS5zcmN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgaHJlZj17YC9wcm9kdWN0LyR7aXRlbS52YXJpYW50LnByb2R1Y3QuaGFuZGxlfS9gfVxuICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAzLCBtOiAwLCBmb250V2VpZ2h0OiA3MDAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDQsXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2V0UHJpY2UoXG4gICAgICAgICAgICAgICAgaXRlbS52YXJpYW50LnByaWNlVjIuYW1vdW50LFxuICAgICAgICAgICAgICAgIGl0ZW0udmFyaWFudC5wcmljZVYyLmN1cnJlbmN5Q29kZSB8fCAnVVNEJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvPlxuICAgICAgICA8L1RoZW1lZC5kaXY+XG4gICAgICAgIDxUaGVtZWQudWwgc3g9e3sgbXQ6IDIsIG1iOiAwLCBwYWRkaW5nOiAwLCBsaXN0U3R5bGU6ICdub25lJyB9fT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaW5jcmVhc2VRdWFudGl0eSgtMSl9PlxuICAgICAgICAgICAgICAgIDxNaW51cyB3aWR0aD17MTh9IGhlaWdodD17MTh9IC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG1heD17OTl9XG4gICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaW5jcmVhc2VRdWFudGl0eSgxKX0+XG4gICAgICAgICAgICAgICAgPFBsdXMgd2lkdGg9ezE4fSBoZWlnaHQ9ezE4fSAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHtpdGVtLnZhcmlhbnQuc2VsZWN0ZWRPcHRpb25zLm1hcCgob3B0aW9uOiBhbnkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAgICAgIHtvcHRpb24ubmFtZX06e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVGhlbWVkLnVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9HcmlkPlxuICApXG59XG5cbi8qKlxuICogICAgICAgICBcblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IENhcnRJdGVtXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJ0SXRlbSdcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lZCwganN4LCBUZXh0LCBDYXJkLCBHcmlkLCBEaXZpZGVyLCBOYXZMaW5rIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFnIH0gZnJvbSAnQGNvbXBvbmVudHMvaWNvbnMnXG5pbXBvcnQgeyB1c2VDYXJ0LCB1c2VDaGVja291dFVybCB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3MnXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi4vQ2FydEl0ZW0nXG5pbXBvcnQgeyBCdWlsZGVyQ29tcG9uZW50LCBidWlsZGVyIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcmVhY3QnXG5pbXBvcnQgZW52IGZyb20gJ0Bjb25maWcvZW52J1xuXG5jb25zdCBDYXJ0U2lkZWJhclZpZXc6IEZDID0gKCkgPT4ge1xuICBjb25zdCBjaGVja291dFVybCA9IHVzZUNoZWNrb3V0VXJsKClcbiAgY29uc3QgY2FydCA9IHVzZUNhcnQoKVxuICBjb25zdCBzdWJUb3RhbCA9IGNhcnQ/LnN1YnRvdGFsUHJpY2VcbiAgY29uc3QgdG90YWwgPSAnIC0gJ1xuXG4gIGNvbnN0IGl0ZW1zID0gY2FydD8ubGluZUl0ZW1zID8/IFtdXG4gIGNvbnN0IGlzRW1wdHkgPSBpdGVtcy5sZW5ndGggPT09IDBcbiAgY29uc3QgW2NhcnRVcHNlbGwsIHNldENhcnRVcHNlbGxdID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250ZW50KCkge1xuICAgICAgY29uc3QgaXRlbXMgPSBjYXJ0Py5saW5lSXRlbXMgfHwgW11cbiAgICAgIGNvbnN0IGNhcnRVcHNlbGxDb250ZW50ID0gYXdhaXQgYnVpbGRlclxuICAgICAgICAuZ2V0KCdjYXJ0LXVwc2VsbC1zaWRlYmFyJywge1xuICAgICAgICAgIGNhY2hlYnVzdDogZW52LmlzRGV2LFxuICAgICAgICAgIHVzZXJBdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBpdGVtSW5DYXJ0OiBpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS52YXJpYW50LnByb2R1Y3QuaGFuZGxlKSxcbiAgICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICBzZXRDYXJ0VXBzZWxsKGNhcnRVcHNlbGxDb250ZW50KVxuICAgIH1cbiAgICBmZXRjaENvbnRlbnQoKVxuICB9LCBbY2FydD8ubGluZUl0ZW1zXSlcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZWQuZGl2XG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogNSxcbiAgICAgICAgYmc6ICd0ZXh0JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIHB4OiAyLFxuICAgICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgICAuLi4oaXNFbXB0eSAmJiB7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9KSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2lzRW1wdHkgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEJhZyAvPlxuICAgICAgICAgIFlvdXIgY2FydCBpcyBlbXB0eVxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgQmlzY3VpdCBvYXQgY2FrZSB3YWZlciBpY2luZyBpY2UgY3JlYW0gdGlyYW1pc3UgcHVkZGluZyBjdXBjYWtlLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gKFxuICAgICAgICAgICAgPENhcnRJdGVtXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgLy8gdG9kbyB1cGRhdGUgdHlwZXNcbiAgICAgICAgICAgICAgY3VycmVuY3lDb2RlPXtpdGVtLnZhcmlhbnQ/LnByaWNlVjI/LmN1cnJlbmN5Q29kZSB8fCAnVVNEJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPENhcmQgc3g9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtaW5XaWR0aDogJzEwcmVtJywgcGFkZGluZ0xlZnQ6IDUgfX0+XG4gICAgICAgICAgICA8R3JpZCBnYXA9ezF9IGNvbHVtbnM9ezJ9IHN4PXt7IG15OiAzIH19PlxuICAgICAgICAgICAgICA8VGV4dD5TdWJ0b3RhbDo8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT57c3ViVG90YWx9PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dD5TaGlwcGluZzo8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT4gLSA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0PlRheDogPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBzeD17eyBtYXJnaW5MZWZ0OiAnYXV0bycgfX0+IC0gPC9UZXh0PlxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgPEdyaWQgZ2FwPXsxfSBjb2x1bW5zPXsyfT5cbiAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cImJvbGRcIj5Fc3RpbWF0ZWQgVG90YWw6PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9sZFwiIHN4PXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICB7dG90YWx9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPEJ1aWxkZXJDb21wb25lbnQgY29udGVudD17Y2FydFVwc2VsbH0gbW9kZWw9XCJjYXJ0LXVwc2VsbC1zaWRlYmFyXCIgLz5cbiAgICAgICAgICB7Y2hlY2tvdXRVcmwgJiYgKFxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm5hdlwiXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIG06IDIsIHA6IDEyLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIGhyZWY9e2NoZWNrb3V0VXJsIX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJvY2VlZCB0byBDaGVja291dFxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L1RoZW1lZC5kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydFNpZGViYXJWaWV3XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJ0U2lkZWJhclZpZXcnXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENhcnRTaWRlYmFyVmlldyB9IGZyb20gJy4vQ2FydFNpZGViYXJWaWV3J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJ0SXRlbSB9IGZyb20gJy4vQ2FydEl0ZW0nXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVkLCBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IENlbnRlck1vZGFsLCBNb2RhbFRpdGxlLCBNb2RhbENsb3NlVGFyZ2V0IH0gZnJvbSAncmVhY3Qtc3ByaW5nLW1vZGFsJ1xuXG5pbnRlcmZhY2UgRmVhdHVyZUJhclByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgaGlkZT86IGJvb2xlYW5cbiAgYWN0aW9uPzogUmVhY3QuUmVhY3ROb2RlXG4gIGRlbGF5PzogbnVtYmVyXG59XG5cbmNvbnN0IEZlYXR1cmVCYXI6IFJlYWN0LkZDPEZlYXR1cmVCYXJQcm9wcz4gPSAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGFjdGlvbixcbiAgaGlkZSxcbiAgZGVsYXksXG59KSA9PiB7XG4gIGNvbnN0IFtkZWxheVBhc3NlZCwgc2V0RGVsYXlQYXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0RGVsYXlQYXNzZWQodHJ1ZSksIGRlbGF5IHx8IDYwMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICB9KVxuICByZXR1cm4gKFxuICAgIDxDZW50ZXJNb2RhbCBpc09wZW49e2RlbGF5UGFzc2VkICYmICFoaWRlfT5cbiAgICAgIDxNb2RhbFRpdGxlPnt0aXRsZX08L01vZGFsVGl0bGU+XG4gICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8VGhlbWVkLmRpdiBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcDogWzEsIDJdIH19PlxuICAgICAgICB7YWN0aW9uICYmIGFjdGlvbn1cbiAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICA8L0NlbnRlck1vZGFsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVCYXJcbiIsImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgRGVmYXVsdFNlbyB9IGZyb20gJ25leHQtc2VvJ1xuXG5jb25zdCBIZWFkOiBGQzx7IHNlb0luZm86IGFueSB9PiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RGVmYXVsdFNlbyB7Li4ucHJvcHMuc2VvSW5mb30gLz5cbiAgICAgIDxOZXh0SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiBrZXk9XCJzaXRlLW1hbmlmZXN0XCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjEvaW1hZ2UvYXNzZXRzJTJGWUpJR2I0aTAxanZ3MFNSZEw1QnQlMkYyZDg2YTViYjMwZjQ0ZDJkYjM1NjRhYTI5NjJiYjA5M1wiXG4gICAgICAgIC8+XG4gICAgICA8L05leHRIZWFkPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgTWFuYWdlZFVJQ29udGV4dCwgdXNlVUkgfSBmcm9tICdAY29tcG9uZW50cy91aS9jb250ZXh0J1xuaW1wb3J0IHsgSGVhZCwgTmF2YmFyIH0gZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uJ1xuaW1wb3J0IHsgdXNlQWNjZXB0Q29va2llcyB9IGZyb20gJ0BsaWIvaG9va3MvdXNlQWNjZXB0Q29va2llcydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJ0Bjb21wb25lbnRzL3VpJ1xuaW1wb3J0IHsgQ2FydFNpZGViYXJWaWV3IH0gZnJvbSAnQGNvbXBvbmVudHMvY2FydCdcbmltcG9ydCB7IENvbW1lcmNlUHJvdmlkZXIgfSBmcm9tICdAbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzJ1xuaW1wb3J0IHNob3BpZnlDb25maWcgZnJvbSAnQGNvbmZpZy9zaG9waWZ5J1xuaW1wb3J0IHsgYnVpbGRlciwgQnVpbGRlckNvbnRlbnQsIEJ1aWxkZXIgfSBmcm9tICdAYnVpbGRlci5pby9yZWFjdCdcbmltcG9ydCB0aGVtZXNNYXAgZnJvbSAnQGNvbmZpZy90aGVtZSdcbmltcG9ydCAnQGJ1aWxkZXIuaW8vd2lkZ2V0cydcbmltcG9ydCAncmVhY3Qtc3ByaW5nLW1vZGFsL3N0eWxlcy5jc3MnXG5pbXBvcnQgc2VvQ29uZmlnIGZyb20gJ0Bjb25maWcvc2VvLmpzb24nXG5pbXBvcnQgTm9TU1IgZnJvbSAnLi9Ob1NTUidcblxuY29uc3QgRmVhdHVyZUJhciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdAY29tcG9uZW50cy9jb21tb24vRmVhdHVyZUJhcicpLCB7XG4gIHNzcjogZmFsc2UsXG59KVxuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPHsgcGFnZVByb3BzOiBhbnkgfT4gPSAoeyBjaGlsZHJlbiwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgYnVpbGRlclRoZW1lID0gcGFnZVByb3BzLnRoZW1lXG4gIGNvbnN0IGlzTGl2ZSA9ICFCdWlsZGVyLmlzRWRpdGluZyAmJiAhQnVpbGRlci5pc1ByZXZpZXdpbmdcbiAgcmV0dXJuIChcbiAgICA8Q29tbWVyY2VQcm92aWRlciB7Li4uc2hvcGlmeUNvbmZpZ30+XG4gICAgICA8QnVpbGRlckNvbnRlbnRcbiAgICAgICAgaXNTdGF0aWNcbiAgICAgICAgey4uLihpc0xpdmUgJiYgeyBjb250ZW50OiBidWlsZGVyVGhlbWUgfSl9XG4gICAgICAgIG1vZGVsTmFtZT1cInRoZW1lXCJcbiAgICAgID5cbiAgICAgICAgeyhkYXRhLCBsb2FkaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKGxvYWRpbmcgJiYgIWJ1aWxkZXJUaGVtZSkge1xuICAgICAgICAgICAgcmV0dXJuICdsb2FkaW5nIC4uLidcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2l0ZVNldHRpbmdzID0gZGF0YT8uc2l0ZVNldHRpbmdzXG4gICAgICAgICAgY29uc3QgY29sb3JPdmVycmlkZXMgPSBkYXRhPy5jb2xvck92ZXJyaWRlc1xuICAgICAgICAgIGNvbnN0IHNpdGVTZW9JbmZvID0gZGF0YT8uc2l0ZUluZm9ybWF0aW9uXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYW5hZ2VkVUlDb250ZXh0IGtleT17ZGF0YT8uaWR9IHNpdGVTZXR0aW5ncz17c2l0ZVNldHRpbmdzfT5cbiAgICAgICAgICAgICAgPEhlYWQgc2VvSW5mbz17c2l0ZVNlb0luZm8gfHwgc2VvQ29uZmlnfSAvPlxuICAgICAgICAgICAgICA8SW5uZXJMYXlvdXRcbiAgICAgICAgICAgICAgICB0aGVtZU5hbWU9e2RhdGE/LnRoZW1lIHx8ICdiYXNlJ31cbiAgICAgICAgICAgICAgICBjb2xvck92ZXJyaWRlcz17Y29sb3JPdmVycmlkZXN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvSW5uZXJMYXlvdXQ+XG4gICAgICAgICAgICA8L01hbmFnZWRVSUNvbnRleHQ+XG4gICAgICAgICAgKVxuICAgICAgICB9fVxuICAgICAgPC9CdWlsZGVyQ29udGVudD5cbiAgICA8L0NvbW1lcmNlUHJvdmlkZXI+XG4gIClcbn1cblxuY29uc3QgSW5uZXJMYXlvdXQ6IFJlYWN0LkZDPHtcbiAgdGhlbWVOYW1lOiBzdHJpbmdcbiAgY29sb3JPdmVycmlkZXM/OiB7XG4gICAgdGV4dD86IHN0cmluZ1xuICAgIGJhY2tncm91bmQ/OiBzdHJpbmdcbiAgICBwcmltYXJ5Pzogc3RyaW5nXG4gICAgc2Vjb25kYXJ5Pzogc3RyaW5nXG4gICAgbXV0ZWQ/OiBzdHJpbmdcbiAgfVxufT4gPSAoeyB0aGVtZU5hbWUsIGNoaWxkcmVuLCBjb2xvck92ZXJyaWRlcyB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0ge1xuICAgIC4uLnRoZW1lc01hcFt0aGVtZU5hbWVdLFxuICAgIGNvbG9yczoge1xuICAgICAgLi4udGhlbWVzTWFwW3RoZW1lTmFtZV0uY29sb3JzLFxuICAgICAgLi4uY29sb3JPdmVycmlkZXMsXG4gICAgfSxcbiAgfVxuICBjb25zdCB7IGRpc3BsYXlTaWRlYmFyLCBjbG9zZVNpZGViYXIgfSA9IHVzZVVJKClcbiAgY29uc3QgeyBhY2NlcHRlZENvb2tpZXMsIG9uQWNjZXB0Q29va2llcyB9ID0gdXNlQWNjZXB0Q29va2llcygpXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXJnaW46IGAwIGF1dG9gLFxuICAgICAgICAgIHB4OiAyMCxcbiAgICAgICAgICBtYXhXaWR0aDogMTkyMCxcbiAgICAgICAgICBtaW5XaWR0aDogJzYwdncnLFxuICAgICAgICAgIG1pbkhlaWdodDogODAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIG9wZW49e1xuICAgICAgICAgIGRpc3BsYXlTaWRlYmFyIHx8XG4gICAgICAgICAgKGJ1aWxkZXIuZWRpdGluZ01vZGVsIHx8IEJ1aWxkZXIucHJldmlld2luZ01vZGVsKSA9PT1cbiAgICAgICAgICAgICdjYXJ0LXVwc2VsbC1zaWRlYmFyJ1xuICAgICAgICB9XG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlU2lkZWJhcn1cbiAgICAgID5cbiAgICAgICAgPENhcnRTaWRlYmFyVmlldyAvPlxuICAgICAgPC9TaWRlYmFyPlxuICAgICAgPE5vU1NSPlxuICAgICAgICA8RmVhdHVyZUJhclxuICAgICAgICAgIHRpdGxlPVwiVGhpcyBzaXRlIHVzZXMgY29va2llcyB0byBpbXByb3ZlIHlvdXIgZXhwZXJpZW5jZS4gQnkgY2xpY2tpbmcsIHlvdSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3kuXCJcbiAgICAgICAgICBoaWRlPXtCdWlsZGVyLmlzRWRpdGluZyA/IHRydWUgOiBhY2NlcHRlZENvb2tpZXN9XG4gICAgICAgICAgYWN0aW9uPXtcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25BY2NlcHRDb29raWVzKCl9PkFjY2VwdCBjb29raWVzPC9CdXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9Ob1NTUj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IFVzZXJOYXYgfSBmcm9tICdAY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgZW52IGZyb20gJ0Bjb25maWcvZW52J1xuaW1wb3J0IHsgQnVpbGRlckNvbXBvbmVudCwgYnVpbGRlciB9IGZyb20gJ0BidWlsZGVyLmlvL3JlYWN0J1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3MnXG5pbXBvcnQgeyBqc3gsIFRoZW1lZCwgdXNlVGhlbWVVSSB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgdXNlVUkgfSBmcm9tICdAY29tcG9uZW50cy91aS9jb250ZXh0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJy4vU2VhcmNoYmFyJ1xuXG5jb25zdCBOYXZiYXI6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbYW5ub3VuY2VtZW50LCBzZXRBbm5vdW5jZW1lbnRdID0gdXNlU3RhdGUoKVxuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZVVJKClcbiAgY29uc3QgeyBuYXZpZ2F0aW9uTGlua3MsIGxvZ28gfSA9IHVzZVVJKClcbiAgY29uc3QgY2FydCA9IHVzZUNhcnQoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250ZW50KCkge1xuICAgICAgY29uc3QgaXRlbXMgPSBjYXJ0Py5saW5lSXRlbXMgfHwgW11cbiAgICAgIGNvbnN0IGFub3VuY2VtZW50Q29udGVudCA9IGF3YWl0IGJ1aWxkZXJcbiAgICAgICAgLmdldCgnYW5ub3VuY2VtZW50LWJhcicsIHtcbiAgICAgICAgICBjYWNoZWJ1c3Q6IGVudi5pc0RldixcbiAgICAgICAgICB1c2VyQXR0cmlidXRlczoge1xuICAgICAgICAgICAgaXRlbUluQ2FydDogaXRlbXMubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0udmFyaWFudC5wcm9kdWN0LmhhbmRsZSksXG4gICAgICAgICAgfSBhcyBhbnksXG4gICAgICAgIH0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgc2V0QW5ub3VuY2VtZW50KGFub3VuY2VtZW50Q29udGVudClcbiAgICB9XG4gICAgZmV0Y2hDb250ZW50KClcbiAgfSwgW2NhcnQ/LmxpbmVJdGVtc10pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QnVpbGRlckNvbXBvbmVudFxuICAgICAgICBjb250ZW50PXthbm5vdW5jZW1lbnR9XG4gICAgICAgIGRhdGE9e3sgdGhlbWUgfX1cbiAgICAgICAgbW9kZWw9XCJhbm5vdW5jZW1lbnQtYmFyXCJcbiAgICAgIC8+XG4gICAgICA8VGhlbWVkLmRpdlxuICAgICAgICBhcz1cImhlYWRlclwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWFyZ2luOiBgMCBhdXRvYCxcbiAgICAgICAgICBtYXhXaWR0aDogMTkyMCxcbiAgICAgICAgICBweTogMixcbiAgICAgICAgICBweDogMixcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFRoZW1lZC5kaXZcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogWydub25lJywgJ25vbmUnLCAnZmxleCddLFxuICAgICAgICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgICAgICAgbWluV2lkdGg6IDI0MCxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge25hdmlnYXRpb25MaW5rcz8ubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFRoZW1lZC5hXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIHN4PXt7IHBhZGRpbmc6IDEwLCBtaW5XaWR0aDogOTAgfX1cbiAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgIGhyZWY9e2xpbmsubGlua31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xpbmsudGl0bGV9XG4gICAgICAgICAgICA8L1RoZW1lZC5hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RoZW1lZC5kaXY+XG4gICAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFRoZW1lZC5oMVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsb2dvICYmIGxvZ28uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICA8VGhlbWVkLmFcbiAgICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IC0xLFxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IGBub25lYCxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnNXB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17bG9nby53aWR0aH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17bG9nby5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaW1hZ2V9XG4gICAgICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgICAgIDwvVGhlbWVkLmE+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2xvZ28gJiYgbG9nby50ZXh0ICYmICFsb2dvLmltYWdlICYmIChcbiAgICAgICAgICAgICAgPFRoZW1lZC5hXG4gICAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAtMSxcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBgbm9uZWAsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzVweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsb2dvLnRleHR9XG4gICAgICAgICAgICAgIDwvVGhlbWVkLmE+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGhlbWVkLmgxPlxuICAgICAgICA8L1RoZW1lZC5kaXY+XG4gICAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIG1pbldpZHRoOiAxNDAsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFsnc3BhY2UtYmV0d2VlbicsICdmbGV4LWVuZCddLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U2VhcmNoYmFyIC8+XG4gICAgICAgICAgPFVzZXJOYXYgLz5cbiAgICAgICAgPC9UaGVtZWQuZGl2PlxuICAgICAgPC9UaGVtZWQuZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBOb1NTUjogUmVhY3QuRkM8eyBza2VsZXRvbj86IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBza2VsZXRvbixcbn0pID0+IHtcbiAgY29uc3QgW3JlbmRlciwgc2V0UmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4gc2V0UmVuZGVyKHRydWUpLCBbXSlcbiAgaWYgKHJlbmRlcikge1xuICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz5cbiAgfVxuICBpZiAoc2tlbGV0b24pIHtcbiAgICByZXR1cm4gPD57c2tlbGV0b259PC8+XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cbmV4cG9ydCBkZWZhdWx0IE5vU1NSXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IFNlbGVjdCwgTGFiZWwgfSBmcm9tICdAdGhlbWUtdWkvY29tcG9uZW50cydcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uUGlja2VyUHJvcHMge1xuICBuYW1lOiBzdHJpbmdcbiAgb3B0aW9ucz86IFJlYWRvbmx5PEFycmF5PHN0cmluZyB8IHVuZGVmaW5lZD4+XG4gIG9uQ2hhbmdlPzogUmVhY3QuQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxTZWxlY3RFbGVtZW50PlxuICBzZWxlY3RlZD86IHN0cmluZ1xufVxuXG5jb25zdCBPcHRpb25QaWNrZXI6IFJlYWN0LkZDPE9wdGlvblBpY2tlclByb3BzPiA9ICh7XG4gIG5hbWUsXG4gIG9wdGlvbnMsXG4gIG9uQ2hhbmdlLFxuICBzZWxlY3RlZCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExhYmVsIGh0bWxGb3I9e25hbWV9PntuYW1lfTwvTGFiZWw+XG4gICAgICA8U2VsZWN0IGlkPXtuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXtzZWxlY3RlZH0+XG4gICAgICAgIHtvcHRpb25zPy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbn0ga2V5PXtvcHRpb259PlxuICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L1NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25QaWNrZXJcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFRoZW1lZCwganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBDYXJkLCBUZXh0IH0gZnJvbSAnQHRoZW1lLXVpL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBMaW5rLCBJbWFnZUNhcm91c2VsIH0gZnJvbSAnQGNvbXBvbmVudHMvdWknXG5pbXBvcnQgeyBnZXRQcmljZSB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL3Byb2R1Y3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RDYXJkUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcHJvZHVjdDogU2hvcGlmeUJ1eS5Qcm9kdWN0XG4gIGltZ1dpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgaW1nSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgaW1nTGF5b3V0PzogJ2ZpeGVkJyB8ICdpbnRyaW5zaWMnIHwgJ3Jlc3BvbnNpdmUnIHwgdW5kZWZpbmVkXG4gIGltZ1ByaW9yaXR5PzogYm9vbGVhblxuICBpbWdMb2FkaW5nPzogJ2VhZ2VyJyB8ICdsYXp5J1xuICBpbWdTaXplcz86IHN0cmluZ1xufVxuXG5jb25zdCBQcm9kdWN0Q2FyZDogUmVhY3QuRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoe1xuICBwcm9kdWN0LFxuICBpbWdXaWR0aCxcbiAgaW1nSGVpZ2h0LFxuICBpbWdQcmlvcml0eSxcbiAgaW1nTG9hZGluZyxcbiAgaW1nU2l6ZXMsXG4gIGltZ0xheW91dCA9ICdyZXNwb25zaXZlJyxcbn0pID0+IHtcbiAgY29uc3QgaGFuZGxlID0gKHByb2R1Y3QgYXMgYW55KS5oYW5kbGVcbiAgY29uc3QgcHJvZHVjdFZhcmlhbnQ6IGFueSA9IHByb2R1Y3QudmFyaWFudHNbMF1cbiAgY29uc3QgcHJpY2UgPSBnZXRQcmljZShcbiAgICBwcm9kdWN0VmFyaWFudC5wcmljZVYyLmFtb3VudCxcbiAgICBwcm9kdWN0VmFyaWFudC5wcmljZVYyLmN1cnJlbmN5Q29kZVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgc3g9e3tcbiAgICAgICAgbWF4V2lkdGg6IFs3MDAsIGltZ1dpZHRoIHx8IDU0MF0sXG4gICAgICAgIHA6IDMsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke2hhbmRsZX0vYH0+XG4gICAgICAgIDxkaXYgc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgPEltYWdlQ2Fyb3VzZWxcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZT17cHJvZHVjdC5pbWFnZXMgPyBwcm9kdWN0LmltYWdlcy5sZW5ndGggLSAxIDogMH1cbiAgICAgICAgICAgIHdpZHRoPXtpbWdXaWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aW1nSGVpZ2h0fVxuICAgICAgICAgICAgcHJpb3JpdHk9e2ltZ1ByaW9yaXR5fVxuICAgICAgICAgICAgbG9hZGluZz17aW1nTG9hZGluZ31cbiAgICAgICAgICAgIGxheW91dD17aW1nTGF5b3V0fVxuICAgICAgICAgICAgc2l6ZXM9e2ltZ1NpemVzfVxuICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgaW1hZ2VzPXtcbiAgICAgICAgICAgICAgcHJvZHVjdC5pbWFnZXMubGVuZ3RoID8gcHJvZHVjdC5pbWFnZXMgOiBbe1xuICAgICAgICAgICAgICAgIHNyYzogYGh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8ke2ltZ1dpZHRofXgke2ltZ0hlaWdodH1gLFxuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgPFRoZW1lZC5oMiBzeD17eyBtdDogNCwgbWI6IDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgIDwvVGhlbWVkLmgyPlxuICAgICAgICAgIDxUZXh0IHN4PXt7IGZvbnRTaXplOiAxMiwgbWI6IDIgfX0+e3ByaWNlfTwvVGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBUaGVtZWQsIGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBDYXJkLCBUZXh0IH0gZnJvbSAnQHRoZW1lLXVpL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQGNvbXBvbmVudHMvdWknXG5pbXBvcnQgeyBnZXRQcmljZSB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL3Byb2R1Y3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5vU1NSIGZyb20gJy4vTm9TU1InXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdENhcmRQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwcm9kdWN0OiBTaG9waWZ5QnV5LlByb2R1Y3RcbiAgaW1nV2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICBpbWdIZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICBpbWdMYXlvdXQ/OiAnZml4ZWQnIHwgJ2ludHJpbnNpYycgfCAncmVzcG9uc2l2ZScgfCB1bmRlZmluZWRcbiAgaW1nUHJpb3JpdHk/OiBib29sZWFuXG4gIGltZ0xvYWRpbmc/OiAnZWFnZXInIHwgJ2xhenknXG4gIGltZ1NpemVzPzogc3RyaW5nXG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkRGVtbzogUmVhY3QuRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoe1xuICBwcm9kdWN0LFxuICBpbWdXaWR0aCxcbiAgaW1nSGVpZ2h0LFxuICBpbWdQcmlvcml0eSxcbiAgaW1nTG9hZGluZyxcbiAgaW1nU2l6ZXMsXG4gIGltZ0xheW91dCA9ICdyZXNwb25zaXZlJyxcbn0pID0+IHtcbiAgY29uc3QgW3Nob3dBbHRlcm5hdGUsIHNldFNob3dBbHRlcm5hdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjYW5Ub2dnbGUsIHNldENhblRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgc3JjID0gcHJvZHVjdC5pbWFnZXNbMF0uc3JjXG4gIGNvbnN0IGhhbmRsZSA9IChwcm9kdWN0IGFzIGFueSkuaGFuZGxlXG4gIGNvbnN0IHByb2R1Y3RWYXJpYW50OiBhbnkgPSBwcm9kdWN0LnZhcmlhbnRzWzBdXG4gIGNvbnN0IHByaWNlID0gZ2V0UHJpY2UoXG4gICAgcHJvZHVjdFZhcmlhbnQuY29tcGFyZV9hdF9wcmljZSB8fCBwcm9kdWN0VmFyaWFudC5wcmljZSxcbiAgICAnVVNEJ1xuICApXG4gIGNvbnN0IGFsdGVybmF0ZUltYWdlID0gcHJvZHVjdC5pbWFnZXNbMV0/LnNyY1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIHN4PXt7XG4gICAgICAgIG1heFdpZHRoOiBbNzAwLCA1MDBdLFxuICAgICAgICBwOiAzLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgfX1cbiAgICAgIG9uTW91c2VPdXQ9eygpID0+IHNldFNob3dBbHRlcm5hdGUoZmFsc2UpfVxuICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldFNob3dBbHRlcm5hdGUodHJ1ZSl9XG4gICAgPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7aGFuZGxlfS9gfT5cbiAgICAgICAgPGRpdiBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICB7YWx0ZXJuYXRlSW1hZ2UgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBzaG93QWx0ZXJuYXRlICYmIGNhblRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE5vU1NSPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgcXVhbGl0eT1cIjg1XCJcbiAgICAgICAgICAgICAgICAgIHNyYz17YWx0ZXJuYXRlSW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17aW1nV2lkdGggfHwgNTQwfVxuICAgICAgICAgICAgICAgICAgc2l6ZXM9e2ltZ1NpemVzfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpbWdIZWlnaHQgfHwgNTQwfVxuICAgICAgICAgICAgICAgICAgbGF5b3V0PXtpbWdMYXlvdXR9XG4gICAgICAgICAgICAgICAgICBvbkxvYWQ9eygpID0+IHNldENhblRvZ2dsZSh0cnVlKX1cbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ob1NTUj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTpcbiAgICAgICAgICAgICAgICBjYW5Ub2dnbGUgJiYgc2hvd0FsdGVybmF0ZSAmJiBhbHRlcm5hdGVJbWFnZSA/ICdub25lJyA6ICdibG9jaycsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBxdWFsaXR5PVwiODVcIlxuICAgICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICB3aWR0aD17aW1nV2lkdGggfHwgNTQwfVxuICAgICAgICAgICAgICBzaXplcz17aW1nU2l6ZXN9XG4gICAgICAgICAgICAgIGhlaWdodD17aW1nSGVpZ2h0IHx8IDU0MH1cbiAgICAgICAgICAgICAgbGF5b3V0PXtpbWdMYXlvdXR9XG4gICAgICAgICAgICAgIGxvYWRpbmc9e2ltZ0xvYWRpbmd9XG4gICAgICAgICAgICAgIHByaW9yaXR5PXtpbWdQcmlvcml0eX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgPFRoZW1lZC5oMiBzeD17eyBtdDogNCwgbWI6IDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgIDwvVGhlbWVkLmgyPlxuICAgICAgICAgIDxUZXh0IHN4PXt7IGZvbnRTaXplOiAxMiwgbWI6IDIgfX0+e3ByaWNlfTwvVGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkRGVtb1xuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IExvYWRpbmdEb3RzIH0gZnJvbSAnQGNvbXBvbmVudHMvdWknXG5pbXBvcnQgYnVpbGRlckNvbmZpZyBmcm9tICdAY29uZmlnL2J1aWxkZXInXG5pbXBvcnQgeyBQcm9kdWN0R3JpZCB9IGZyb20gJ2Jsb2Nrcy9Qcm9kdWN0R3JpZC9Qcm9kdWN0R3JpZCdcbmltcG9ydCB7IEJ1dHRvbiwgVGhlbWVkLCBqc3gsIElucHV0LCBMYWJlbCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgc2VhcmNoUHJvZHVjdHMgfSBmcm9tICdAbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9hcGkvb3BlcmF0aW9ucy1idWlsZGVyJ1xuaW1wb3J0IHsgRXhwYW5kTW9kYWwgfSBmcm9tICdyZWFjdC1zcHJpbmctbW9kYWwnXG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCAncmVhY3Qtc3ByaW5nLW1vZGFsL3N0eWxlcy5jc3MnXG5pbXBvcnQgeyBDcm9zcyB9IGZyb20gJ0Bjb21wb25lbnRzL2ljb25zJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgaWQ/OiBzdHJpbmdcbn1cblxuY29uc3QgU2VhcmNoYmFyOiBGQzxQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgcSB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgYnV0dG9uUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKVxuICB9LCBbcm91dGVyLmFzUGF0aC5zcGxpdCgnPycpWzBdXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxFeHBhbmRNb2RhbFxuICAgICAgICB0cmFuc2l0aW9uQ29uZmlnPXt7fX1cbiAgICAgICAgY29udGVudFRyYW5zaXRpb249e3t9fVxuICAgICAgICBvdmVybGF5UHJvcHM9e3tcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6IDE5MjAsXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICAgIHRvcDogKGJ1dHRvblJlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gfHwgMCkgKyAxNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgID5cbiAgICAgICAgPFNlYXJjaE1vZGFsQ29udGVudFxuICAgICAgICAgIGluaXRpYWxTZWFyY2g9e3EgJiYgU3RyaW5nKHEpfVxuICAgICAgICAgIG9uU2VhcmNoPXsodGVybTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcCA9IHEgPyAncmVwbGFjZScgOiAncHVzaCdcbiAgICAgICAgICAgIHJvdXRlcltvcF0oe1xuICAgICAgICAgICAgICBwYXRobmFtZTogcm91dGVyLmFzUGF0aC5zcGxpdCgnPycpWzBdLFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHE6IHRlcm0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0V4cGFuZE1vZGFsPlxuXG4gICAgICA8VGhlbWVkLmRpdlxuICAgICAgICByZWY9e2J1dHRvblJlZn1cbiAgICAgICAgYXM9e0J1dHRvbn1cbiAgICAgICAgbXg9ezJ9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXG4gICAgICA+XG4gICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgPENyb3NzIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMlwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIyXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk04IDRhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6TTIgOGE2IDYgMCAxMTEwLjg5IDMuNDc2bDQuODE3IDQuODE3YTEgMSAwIDAxLTEuNDE0IDEuNDE0bC00LjgxNi00LjgxNkE2IDYgMCAwMTIgOHpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKX1cbiAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmNvbnN0IFNlYXJjaE1vZGFsQ29udGVudCA9IChwcm9wczoge1xuICBpbml0aWFsU2VhcmNoPzogc3RyaW5nXG4gIG9uU2VhcmNoOiAodGVybTogc3RyaW5nKSA9PiBhbnlcbn0pID0+IHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFxuICAgIHByb3BzLmluaXRpYWxTZWFyY2ggJiYgU3RyaW5nKHByb3BzLmluaXRpYWxTZWFyY2gpXG4gIClcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSBhcyBhbnlbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKHNlYXJjaFRlcm06IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgc2VhcmNoUHJvZHVjdHMoXG4gICAgICBidWlsZGVyQ29uZmlnLFxuICAgICAgU3RyaW5nKHNlYXJjaFRlcm0pLFxuICAgICAgLy8gVE9ETzogcGFnaW5hdGlvblxuICAgICAgMjAsXG4gICAgICAwXG4gICAgKVxuICAgIHNldFNlYXJjaChzZWFyY2hUZXJtKVxuICAgIHNldFByb2R1Y3RzKHJlc3VsdHMpXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICBpZiAoc2VhcmNoVGVybSkge1xuICAgICAgcHJvcHMub25TZWFyY2goc2VhcmNoVGVybSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGdldFByb2R1Y3RzKHNlYXJjaClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IHRocm90dGxlU2VhcmNoID0gdXNlQ2FsbGJhY2sodGhyb3R0bGUoZ2V0UHJvZHVjdHMpLCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZWQuZGl2XG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIHA6IFsxLCAyXSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPElucHV0XG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICBzeD17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuaW5pdGlhbFNlYXJjaH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHByb2R1Y3RzLi4uXCJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhyb3R0bGVTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmdEb3RzIC8+XG4gICAgICApIDogcHJvZHVjdHMubGVuZ3RoID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgIFNlYXJjaCBSZXN1bHRzIGZvciBcIjxzdHJvbmc+e3NlYXJjaH08L3N0cm9uZz5cIlxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgPFByb2R1Y3RHcmlkXG4gICAgICAgICAgICBjYXJkUHJvcHM9e3tcbiAgICAgICAgICAgICAgaW1nSGVpZ2h0OiA1NDAsXG4gICAgICAgICAgICAgIGltZ1dpZHRoOiA1NDAsXG4gICAgICAgICAgICAgIGltZ1ByaW9yaXR5OiBmYWxzZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XG4gICAgICAgICAgICBvZmZzZXQ9ezB9XG4gICAgICAgICAgICBsaW1pdD17cHJvZHVjdHMubGVuZ3RofVxuICAgICAgICAgID48L1Byb2R1Y3RHcmlkPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtzZWFyY2ggPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBUaGVyZSBhcmUgbm8gcHJvZHVjdHMgdGhhdCBtYXRjaCBcIjxzdHJvbmc+e3NlYXJjaH08L3N0cm9uZz5cIlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+IDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9UaGVtZWQuZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFVudGlsSW50ZXJhY3Rpb246IFJlYWN0LkZDPHsgc2tlbGV0b246IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBza2VsZXRvbixcbn0pID0+IHtcbiAgY29uc3QgW3JlbmRlciwgc2V0UmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBpZiAocmVuZGVyKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPlxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldFJlbmRlcih0cnVlKX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJlbmRlcih0cnVlKX1cbiAgICAgIG9uVG91Y2hTdGFydD17KCkgPT4gc2V0UmVuZGVyKHRydWUpfVxuICAgID5cbiAgICAgIHtza2VsZXRvbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgVW50aWxJbnRlcmFjdGlvblxuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJhZyB9IGZyb20gJ0Bjb21wb25lbnRzL2ljb25zJ1xuaW1wb3J0IHsgdXNlVUkgfSBmcm9tICdAY29tcG9uZW50cy91aS9jb250ZXh0J1xuaW1wb3J0IHsgQnV0dG9uLCBqc3ggfSBmcm9tICd0aGVtZS11aSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmNvbnN0IFVzZXJOYXY6IEZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyB0b2dnbGVTaWRlYmFyIH0gPSB1c2VVSSgpXG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9IGFyaWEtbGFiZWw9XCJDYXJ0XCI+XG4gICAgICA8QmFnIC8+XG4gICAgPC9CdXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlck5hdlxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBGZWF0dXJlQmFyIH0gZnJvbSAnLi9GZWF0dXJlQmFyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXlvdXQgfSBmcm9tICcuL0xheW91dCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2YmFyIH0gZnJvbSAnLi9OYXZiYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaGJhciB9IGZyb20gJy4vU2VhcmNoYmFyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyTmF2IH0gZnJvbSAnLi9Vc2VyTmF2J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkIH0gZnJvbSAnLi9IZWFkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPcHRpb25QaWNrZXIgfSBmcm9tICcuL09wdGlvblBpY2tlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZHVjdENhcmQgfSBmcm9tICcuL1Byb2R1Y3RDYXJkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9kdWN0Q2FyZERlbW8gfSBmcm9tICcuL1Byb2R1Y3RDYXJkRGVtbydcbiIsImNvbnN0IEFycm93TGVmdCA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5IDEySDVcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTIgMTlMNSAxMkwxMiA1XCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dMZWZ0XG4iLCJjb25zdCBCYWcgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICBoZWlnaHQ9XCIyMlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDIwIDIyXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00IDFMMSA1VjE5QzEgMTkuNTMwNCAxLjIxMDcxIDIwLjAzOTEgMS41ODU3OSAyMC40MTQyQzEuOTYwODYgMjAuNzg5MyAyLjQ2OTU3IDIxIDMgMjFIMTdDMTcuNTMwNCAyMSAxOC4wMzkxIDIwLjc4OTMgMTguNDE0MiAyMC40MTQyQzE4Ljc4OTMgMjAuMDM5MSAxOSAxOS41MzA0IDE5IDE5VjVMMTYgMUg0WlwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xIDVIMTlcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTQgOUMxNCAxMC4wNjA5IDEzLjU3ODYgMTEuMDc4MyAxMi44Mjg0IDExLjgyODRDMTIuMDc4MyAxMi41Nzg2IDExLjA2MDkgMTMgMTAgMTNDOC45MzkxMyAxMyA3LjkyMTcyIDEyLjU3ODYgNy4xNzE1NyAxMS44Mjg0QzYuNDIxNDMgMTEuMDc4MyA2IDEwLjA2MDkgNiA5XCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFnXG4iLCJjb25zdCBDaGVjayA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIwIDZMOSAxN0w0IDEyXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrXG4iLCJjb25zdCBDaGV2cm9uVXAgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzaGFwZVJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xOCAxNWwtNi02LTYgNlwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hldnJvblVwXG4iLCJjb25zdCBDcm9zcyA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHNoYXBlUmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE4IDZMNiAxOFwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTYgNmwxMiAxMlwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NcbiIsImNvbnN0IERvdWJsZUNoZXZyb24gPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTYgOC45MDQ4MkwxMiA0TDggOC45MDQ4Mk04IDE1LjA5NTJMMTIgMjBMMTYgMTUuMDk1MlwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvdWJsZUNoZXZyb25cbiIsImNvbnN0IEdpdGh1YiA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMiAwQzUuMzcgMCAwIDUuNTA1ODMgMCAxMi4zMDM1QzAgMTcuNzQ3OCAzLjQzNSAyMi4zNDYzIDguMjA1IDIzLjk3NjVDOC44MDUgMjQuMDg0MiA5LjAzIDIzLjcxNSA5LjAzIDIzLjM5MjFDOS4wMyAyMy4wOTk5IDkuMDE1IDIyLjEzMSA5LjAxNSAyMS4xMDA1QzYgMjEuNjY5NiA1LjIyIDIwLjM0NyA0Ljk4IDE5LjY1NDlDNC44NDUgMTkuMzAxMiA0LjI2IDE4LjIwOTIgMy43NSAxNy45MTdDMy4zMyAxNy42ODYzIDIuNzMgMTcuMTE3MyAzLjczNSAxNy4xMDE5QzQuNjggMTcuMDg2NSA1LjM1NSAxNy45OTM5IDUuNTggMTguMzYzQzYuNjYgMjAuMjIzOSA4LjM4NSAxOS43MDEgOS4wNzUgMTkuMzc4MUM5LjE4IDE4LjU3ODMgOS40OTUgMTguMDQgOS44NCAxNy43MzI1QzcuMTcgMTcuNDI0OSA0LjM4IDE2LjM2MzcgNC4zOCAxMS42NTc2QzQuMzggMTAuMzE5NiA0Ljg0NSA5LjIxMjI3IDUuNjEgOC4zNTEwMkM1LjQ5IDguMDQzNDMgNS4wNyA2Ljc4MjMyIDUuNzMgNS4wOTA1OEM1LjczIDUuMDkwNTggNi43MzUgNC43Njc2MiA5LjAzIDYuMzUxN0M5Ljk5IDYuMDc0ODcgMTEuMDEgNS45MzY0NSAxMi4wMyA1LjkzNjQ1QzEzLjA1IDUuOTM2NDUgMTQuMDcgNi4wNzQ4NyAxNS4wMyA2LjM1MTdDMTcuMzI1IDQuNzUyMjQgMTguMzMgNS4wOTA1OCAxOC4zMyA1LjA5MDU4QzE4Ljk5IDYuNzgyMzIgMTguNTcgOC4wNDM0MyAxOC40NSA4LjM1MTAyQzE5LjIxNSA5LjIxMjI3IDE5LjY4IDEwLjMwNDIgMTkuNjggMTEuNjU3NkMxOS42OCAxNi4zNzkxIDE2Ljg3NSAxNy40MjQ5IDE0LjIwNSAxNy43MzI1QzE0LjY0IDE4LjExNjkgMTUuMDE1IDE4Ljg1NTIgMTUuMDE1IDIwLjAwODZDMTUuMDE1IDIxLjY1NDIgMTUgMjIuOTc2OCAxNSAyMy4zOTIxQzE1IDIzLjcxNSAxNS4yMjUgMjQuMDk5NSAxNS44MjUgMjMuOTc2NUMxOC4yMDcyIDIzLjE1MTkgMjAuMjc3MyAyMS41ODIyIDIxLjc0MzggMTkuNDg4MkMyMy4yMTAzIDE3LjM5NDIgMjMuOTk5NCAxNC44ODE0IDI0IDEyLjMwMzVDMjQgNS41MDU4MyAxOC42MyAwIDEyIDBaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpdGh1YlxuIiwiY29uc3QgSGVhcnQgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDIwXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjAuODQgMi42MUMyMC4zMjkyIDIuMDk5IDE5LjcyMjggMS42OTM2NSAxOS4wNTU0IDEuNDE3MDhDMTguMzg3OSAxLjE0MDUyIDE3LjY3MjUgMC45OTgxNzUgMTYuOTUgMC45OTgxNzVDMTYuMjI3NSAwLjk5ODE3NSAxNS41MTIxIDEuMTQwNTIgMTQuODQ0NiAxLjQxNzA4QzE0LjE3NzIgMS42OTM2NSAxMy41NzA4IDIuMDk5IDEzLjA2IDIuNjFMMTIgMy42N0wxMC45NCAyLjYxQzkuOTA4MyAxLjU3ODMxIDguNTA5MDMgMC45OTg3MDkgNy4wNSAwLjk5ODcwOUM1LjU5MDk2IDAuOTk4NzA5IDQuMTkxNjkgMS41NzgzMSAzLjE2IDIuNjFDMi4xMjgzIDMuNjQxNjkgMS41NDg3MSA1LjA0MDk3IDEuNTQ4NzEgNi41QzEuNTQ4NzEgNy45NTkwMyAyLjEyODMgOS4zNTgzMSAzLjE2IDEwLjM5TDQuMjIgMTEuNDVMMTIgMTkuMjNMMTkuNzggMTEuNDVMMjAuODQgMTAuMzlDMjEuMzUxIDkuODc5MjQgMjEuNzU2MyA5LjI3MjgxIDIyLjAzMjkgOC42MDUzNkMyMi4zMDk1IDcuOTM3OSAyMi40NTE4IDcuMjIyNDkgMjIuNDUxOCA2LjVDMjIuNDUxOCA1Ljc3NzUxIDIyLjMwOTUgNS4wNjIxIDIyLjAzMjkgNC4zOTQ2NEMyMS43NTYzIDMuNzI3MTkgMjEuMzUxIDMuMTIwNzYgMjAuODQgMi42MVYyLjYxWlwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYXJ0XG4iLCJjb25zdCBJbmZvID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc2hhcGVSZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBmaWxsPVwidHJhbnNwYXJlbnRcIiAvPlxuICAgICAgPHBhdGggZD1cIk0xMiA4djRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgPHBhdGggZD1cIk0xMiAxNmguMDFcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9cbiIsImNvbnN0IE1pbnVzID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNSAxMkgxOVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbnVzXG4iLCJjb25zdCBNb29uID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc2hhcGVSZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMjEgMTIuNzlBOSA5IDAgMTExMS4yMSAzIDcgNyAwIDAwMjEgMTIuNzl6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb29uXG4iLCJjb25zdCBQbHVzID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTIgNVYxOVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk01IDEySDE5XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1c1xuIiwiY29uc3QgUmlnaHRBcnJvdyA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk01IDEySDE5XCJcbiAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTIgNUwxOSAxMkwxMiAxOVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0QXJyb3dcbiIsImNvbnN0IFN1biA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHNoYXBlUmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIiAvPlxuICAgICAgPHBhdGggZD1cIk0xMiAxdjJcIiAvPlxuICAgICAgPHBhdGggZD1cIk0xMiAyMXYyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNC4yMiA0LjIybDEuNDIgMS40MlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTE4LjM2IDE4LjM2bDEuNDIgMS40MlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEgMTJoMlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTIxIDEyaDJcIiAvPlxuICAgICAgPHBhdGggZD1cIk00LjIyIDE5Ljc4bDEuNDItMS40MlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTE4LjM2IDUuNjRsMS40Mi0xLjQyXCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdW5cbiIsImNvbnN0IFRyYXNoID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMgNkgyMVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk04IDZWNEM4IDMuNDY5NTcgOC4yMTA3MSAyLjk2MDg2IDguNTg1NzkgMi41ODU3OUM4Ljk2MDg2IDIuMjEwNzEgOS40Njk1NyAyIDEwIDJIMTRDMTQuNTMwNCAyIDE1LjAzOTEgMi4yMTA3MSAxNS40MTQyIDIuNTg1NzlDMTUuNzg5MyAyLjk2MDg2IDE2IDMuNDY5NTcgMTYgNFY2TTE5IDZWMjBDMTkgMjAuNTMwNCAxOC43ODkzIDIxLjAzOTEgMTguNDE0MiAyMS40MTQyQzE4LjAzOTEgMjEuNzg5MyAxNy41MzA0IDIyIDE3IDIySDdDNi40Njk1NyAyMiA1Ljk2MDg2IDIxLjc4OTMgNS41ODU3OSAyMS40MTQyQzUuMjEwNzEgMjEuMDM5MSA1IDIwLjUzMDQgNSAyMFY2SDE5WlwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMCAxMVYxN1wiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNCAxMVYxN1wiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXNoXG4iLCJjb25zdCBWZXJjZWwgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCI4OVwiXG4gICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDg5IDIwXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTEuNTYyNSAwTDIzLjEyNSAyMEgwTDExLjU2MjUgMFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNDkuODc1IDEwLjYyNUM0OS44NzUgNy40MDYyNSA0Ny41IDUuMTU2MjUgNDQuMDkzNyA1LjE1NjI1QzQwLjY4NzUgNS4xNTYyNSAzOC4zMTI1IDcuNDA2MjUgMzguMzEyNSAxMC42MjVDMzguMzEyNSAxMy43ODEyIDQwLjg3NSAxNi4wOTM3IDQ0LjQwNjIgMTYuMDkzN0M0Ni4zNDM4IDE2LjA5MzcgNDguMDkzOCAxNS4zNzUgNDkuMjE4OCAxNC4wNjI1TDQ3LjA5MzggMTIuODQzN0M0Ni40Mzc1IDEzLjUgNDUuNDY4OCAxMy45MDYyIDQ0LjQwNjIgMTMuOTA2MkM0Mi44NDM4IDEzLjkwNjIgNDEuNSAxMy4wNjI1IDQxLjAzMTIgMTEuNzgxMkw0MC45Mzc1IDExLjU2MjVINDkuNzgxMkM0OS44NDM4IDExLjI1IDQ5Ljg3NSAxMC45Mzc1IDQ5Ljg3NSAxMC42MjVaTTQwLjkwNjIgOS42ODc1TDQwLjk2ODggOS41QzQxLjM3NSA4LjE1NjI1IDQyLjU2MjUgNy4zNDM3NSA0NC4wNjI1IDcuMzQzNzVDNDUuNTkzOCA3LjM0Mzc1IDQ2Ljc1IDguMTU2MjUgNDcuMTU2MiA5LjVMNDcuMjE4OCA5LjY4NzVINDAuOTA2MlpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTgzLjUzMTMgMTAuNjI1QzgzLjUzMTMgNy40MDYyNSA4MS4xNTYzIDUuMTU2MjUgNzcuNzUgNS4xNTYyNUM3NC4zNDM4IDUuMTU2MjUgNzEuOTY4OCA3LjQwNjI1IDcxLjk2ODggMTAuNjI1QzcxLjk2ODggMTMuNzgxMiA3NC41MzEzIDE2LjA5MzcgNzguMDYyNSAxNi4wOTM3QzgwIDE2LjA5MzcgODEuNzUgMTUuMzc1IDgyLjg3NSAxNC4wNjI1TDgwLjc1IDEyLjg0MzdDODAuMDkzOCAxMy41IDc5LjEyNSAxMy45MDYyIDc4LjA2MjUgMTMuOTA2MkM3Ni41IDEzLjkwNjIgNzUuMTU2MyAxMy4wNjI1IDc0LjY4NzUgMTEuNzgxMkw3NC41OTM4IDExLjU2MjVIODMuNDM3NUM4My41IDExLjI1IDgzLjUzMTMgMTAuOTM3NSA4My41MzEzIDEwLjYyNVpNNzQuNTYyNSA5LjY4NzVMNzQuNjI1IDkuNUM3NS4wMzEzIDguMTU2MjUgNzYuMjE4OCA3LjM0Mzc1IDc3LjcxODggNy4zNDM3NUM3OS4yNSA3LjM0Mzc1IDgwLjQwNjMgOC4xNTYyNSA4MC44MTI1IDkuNUw4MC44NzUgOS42ODc1SDc0LjU2MjVaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk02OC41MzEzIDguODQzNzRMNzAuNjU2MyA3LjYyNDk5QzY5LjY1NjMgNi4wNjI0OSA2Ny44NzUgNS4xODc0OSA2NS43MTg4IDUuMTg3NDlDNjIuMzEyNSA1LjE4NzQ5IDU5LjkzNzUgNy40Mzc0OSA1OS45Mzc1IDEwLjY1NjJDNTkuOTM3NSAxMy44NzUgNjIuMzEyNSAxNi4xMjUgNjUuNzE4OCAxNi4xMjVDNjcuODc1IDE2LjEyNSA2OS42NTYzIDE1LjI1IDcwLjY1NjMgMTMuNjg3NUw2OC41MzEzIDEyLjQ2ODdDNjcuOTY4OCAxMy40MDYyIDY2Ljk2ODggMTMuOTM3NSA2NS43MTg4IDEzLjkzNzVDNjMuNzUgMTMuOTM3NSA2Mi40Mzc1IDEyLjYyNSA2Mi40Mzc1IDEwLjY1NjJDNjIuNDM3NSA4LjY4NzQ5IDYzLjc1IDcuMzc0OTkgNjUuNzE4OCA3LjM3NDk5QzY2LjkzNzUgNy4zNzQ5OSA2Ny45Njg4IDcuOTA2MjQgNjguNTMxMyA4Ljg0Mzc0WlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNODguMjE4OCAxLjc1SDg1LjcxODhWMTUuODEyNUg4OC4yMTg4VjEuNzVaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00MC4xNTYzIDEuNzVIMzcuMjgxM0wzMS43ODEzIDExLjI1TDI2LjI4MTMgMS43NUgyMy4zNzVMMzEuNzgxMyAxNi4yNUw0MC4xNTYzIDEuNzVaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk01Ny44NDM4IDguMDYyNUM1OC4xMjUgOC4wNjI1IDU4LjQwNjIgOC4wOTM3NSA1OC42ODc1IDguMTU2MjVWNS41QzU2LjU2MjUgNS41NjI1IDU0LjU2MjUgNi43NSA1NC41NjI1IDguMjE4NzVWNS41SDUyLjA2MjVWMTUuODEyNUg1NC41NjI1VjExLjM0MzdDNTQuNTYyNSA5LjQwNjI1IDU1LjkwNjIgOC4wNjI1IDU3Ljg0MzggOC4wNjI1WlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJjZWxcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQmFnIH0gZnJvbSAnLi9CYWcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYXJ0IH0gZnJvbSAnLi9IZWFydCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhc2ggfSBmcm9tICcuL1RyYXNoJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcm9zcyB9IGZyb20gJy4vQ3Jvc3MnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFycm93TGVmdCB9IGZyb20gJy4vQXJyb3dMZWZ0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbHVzIH0gZnJvbSAnLi9QbHVzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNaW51cyB9IGZyb20gJy4vTWludXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrIH0gZnJvbSAnLi9DaGVjaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3VuIH0gZnJvbSAnLi9TdW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vb24gfSBmcm9tICcuL01vb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdpdGh1YiB9IGZyb20gJy4vR2l0aHViJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb3VibGVDaGV2cm9uIH0gZnJvbSAnLi9Eb3VibGVDaGV2cm9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSaWdodEFycm93IH0gZnJvbSAnLi9SaWdodEFycm93J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbmZvIH0gZnJvbSAnLi9JbmZvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGV2cm9uVXAgfSBmcm9tICcuL0NoZXZyb25VcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVyY2VsIH0gZnJvbSAnLi9WZXJjZWwnXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIFRoZW1lZCwgQXNwZWN0UmF0aW8gfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IFVudGlsSW50ZXJhY3Rpb24gZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL1VudGlsSW50ZXJhY3Rpb24nXG5cbnR5cGUgcHJvcHMgPSBpbXBvcnQoJy4vTGF6eUltYWdlQ2Fyb3VzZWwnKS5JbWFnZUNhcm91c2VsUHJvcHNcblxuY29uc3QgTGF6eUNhcm91c2VsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vTGF6eUltYWdlQ2Fyb3VzZWwnKSwge1xuICBsb2FkaW5nOiAoKSA9PiA8VGhlbWVkLmRpdiBzeD17eyBoZWlnaHQ6ICcxMDAlJywgYmc6ICdtdXRlZCcgfX0gLz4sXG4gIHNzcjogZmFsc2UsXG59KVxuY29uc3QgSW1hZ2VDYXJvdXNlbDogUmVhY3QuRkM8cHJvcHM+ID0gKHtcbiAgaW1hZ2VzLFxuICBvblRodW1ibmFpbENsaWNrLFxuICBzaG93Wm9vbSxcbiAgY3VycmVudFNsaWRlLFxuICAuLi5pbWFnZVByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFzcGVjdFJhdGlvIHJhdGlvPXtOdW1iZXIoaW1hZ2VQcm9wcy5oZWlnaHQgKSAvIE51bWJlcihpbWFnZVByb3BzLndpZHRoKX0+XG4gICAgICA8VW50aWxJbnRlcmFjdGlvblxuICAgICAgICBza2VsZXRvbj17PEltYWdlIHNyYz17aW1hZ2VzWzBdLnNyY30gey4uLmltYWdlUHJvcHN9IC8+fVxuICAgICAgPlxuICAgICAgICA8TGF6eUNhcm91c2VsXG4gICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9XG4gICAgICAgICAgc2hvd1pvb209e3Nob3dab29tfVxuICAgICAgICAgIGN1cnJlbnRTbGlkZT17Y3VycmVudFNsaWRlfVxuICAgICAgICAgIG9uVGh1bWJuYWlsQ2xpY2s9e29uVGh1bWJuYWlsQ2xpY2t9XG4gICAgICAgICAgey4uLmltYWdlUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L1VudGlsSW50ZXJhY3Rpb24+XG4gICAgPC9Bc3BlY3RSYXRpbz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJvdXNlbFxuIiwiaW1wb3J0IE5leHRMaW5rLCB7IExpbmtQcm9wcyBhcyBOZXh0TGlua1Byb3BzIH0gZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBMaW5rOiBSZWFjdC5GQzxOZXh0TGlua1Byb3BzPiA9ICh7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgPGEgey4uLnByb3BzfT57Y2hpbGRyZW59PC9hPlxuICAgIDwvTmV4dExpbms+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTGluaydcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJvb3RcIjogXCJMb2FkaW5nRG90c19yb290X19qWEdRa1wiLFxuXHRcImJsaW5rXCI6IFwiTG9hZGluZ0RvdHNfYmxpbmtfXzJ4c0oyXCJcbn07XG4iLCJpbXBvcnQgcyBmcm9tICcuL0xvYWRpbmdEb3RzLm1vZHVsZS5jc3MnXG5cbmNvbnN0IExvYWRpbmdEb3RzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICA8c3BhbiAvPlxuICAgICAgPHNwYW4gLz5cbiAgICAgIDxzcGFuIC8+XG4gICAgPC9zcGFuPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdEb3RzXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Mb2FkaW5nRG90cydcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ2xvc2UsIFRoZW1lZCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgdXNlUmVzcG9uc2l2ZVZhbHVlIH0gZnJvbSAnQHRoZW1lLXVpL21hdGNoLW1lZGlhJ1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJhc2VNb2RhbCwgTW9kYWxDbG9zZVRhcmdldCB9IGZyb20gJ3JlYWN0LXNwcmluZy1tb2RhbCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb3BlbjogYm9vbGVhblxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IFNpZGViYXI6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCBvcGVuID0gZmFsc2UsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCB3aWR0aCA9IHVzZVJlc3BvbnNpdmVWYWx1ZShbJzEwMCUnLCA1MDBdKVxuICByZXR1cm4gKFxuICAgIDxCYXNlTW9kYWxcbiAgICAgIGlzT3Blbj17b3Blbn1cbiAgICAgIG9uRGlzbWlzcz17b25DbG9zZX1cbiAgICAgIGNvbnRlbnRQcm9wcz17e1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICBjb250ZW50VHJhbnNpdGlvbj17e1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgICAgIGVudGVyOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0sXG4gICAgICAgIGxlYXZlOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxNb2RhbENsb3NlVGFyZ2V0PlxuICAgICAgICA8VGhlbWVkLmRpdlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgICBiZzogJ3RleHQnLFxuICAgICAgICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENsb3NlIC8+XG4gICAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICAgIDwvTW9kYWxDbG9zZVRhcmdldD5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Jhc2VNb2RhbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TaWRlYmFyJ1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBkaXNwbGF5U2lkZWJhcjogYm9vbGVhblxuICBuYXZpZ2F0aW9uTGlua3M/OiBBcnJheTx7IGxpbms6IHN0cmluZzsgdGl0bGU6IHN0cmluZyB9PlxuICBsb2dvPzogeyBpbWFnZT86IHN0cmluZzsgdGV4dDogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9XG4gIHRvZ2dsZVNpZGViYXI/OiBhbnlcbiAgY2xvc2VTaWRlYmFyPzogYW55XG4gIG9wZW5TaWRlYmFyPzogYW55XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGlzcGxheVNpZGViYXI6IGZhbHNlLFxufVxuXG50eXBlIEFjdGlvbiA9XG4gIHwge1xuICAgICAgdHlwZTogJ09QRU5fU0lERUJBUidcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ0NMT1NFX1NJREVCQVInXG4gICAgfVxuXG5leHBvcnQgY29uc3QgVUlDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTdGF0ZT4oaW5pdGlhbFN0YXRlKVxuXG5VSUNvbnRleHQuZGlzcGxheU5hbWUgPSAnVUlDb250ZXh0J1xuXG5leHBvcnQgY29uc3QgVUlQcm92aWRlcjogRkM8eyBzaXRlU2V0dGluZ3M6IFBhcnRpYWw8U3RhdGU+IH0+ID0gKHtcbiAgc2l0ZVNldHRpbmdzLFxuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgIC4uLnNpdGVTZXR0aW5ncyxcbiAgfSlcblxuICBjb25zdCBvcGVuU2lkZWJhciA9ICgpID0+IHNldFN0YXRlKCgpID0+ICh7IGRpc3BsYXlTaWRlYmFyOiB0cnVlIH0pKVxuICBjb25zdCBjbG9zZVNpZGViYXIgPSAoKSA9PiBzZXRTdGF0ZSgoKSA9PiAoeyBkaXNwbGF5U2lkZWJhcjogZmFsc2UgfSkpXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PlxuICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyBkaXNwbGF5U2lkZWJhcjogIXByZXYuZGlzcGxheVNpZGViYXIgfSkpXG5cbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4uc2l0ZVNldHRpbmdzLFxuICAgIG9wZW5TaWRlYmFyLFxuICAgIGNsb3NlU2lkZWJhcixcbiAgICB0b2dnbGVTaWRlYmFyLFxuICB9XG5cbiAgcmV0dXJuIDxVSUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfSBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XG59XG5cbmV4cG9ydCBjb25zdCB1c2VVSSA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoVUlDb250ZXh0KVxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB1c2VVSSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVUlQcm92aWRlcmApXG4gIH1cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGNvbnN0IE1hbmFnZWRVSUNvbnRleHQ6IEZDPHsgc2l0ZVNldHRpbmdzOiBQYXJ0aWFsPFN0YXRlPiB9PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBzaXRlU2V0dGluZ3MsXG59KSA9PiA8VUlQcm92aWRlciBzaXRlU2V0dGluZ3M9e3NpdGVTZXR0aW5nc30+e2NoaWxkcmVufTwvVUlQcm92aWRlcj5cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2lkZWJhciB9IGZyb20gJy4vU2lkZWJhcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ0RvdHMgfSBmcm9tICcuL0xvYWRpbmdEb3RzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rIH0gZnJvbSAnLi9MaW5rJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbWFnZUNhcm91c2VsIH0gZnJvbSAnLi9JbWFnZUNhcm91c2VsJ1xuIiwiaWYgKCFwcm9jZXNzLmVudi5CVUlMREVSX1BVQkxJQ19LRVkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVudiB2YXJpYWxiZSBCVUlMREVSX1BVQkxJQ19LRVknKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuQlVJTERFUl9QVUJMSUNfS0VZLFxuICBwcm9kdWN0c01vZGVsOiAnc2hvcGlmeS1wcm9kdWN0JyxcbiAgY29sbGVjdGlvbnNNb2RlbDogJ3Nob3BpZnktY29sbGVjdGlvbicsXG4gIGlzRGVtbzogQm9vbGVhbihwcm9jZXNzLmVudi5JU19ERU1PKSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaXNEZXY6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxufVxuIiwiaWYgKCFwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFX0RPTUFJTikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgZW52aXJvbm1lbnQgdmFyaWFibGUgU0hPUElGWV9TVE9SRV9ET01BSU4nKVxufVxuaWYgKCFwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFRlJPTlRfQVBJX1RPS0VOKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnTWlzc2luZyByZXF1aXJlZCBlbnZpcm9ubWVudCB2YXJpYWJsZSBTSE9QSUZZX1NUT1JFRlJPTlRfQVBJX1RPS0VOJ1xuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFX0RPTUFJTixcbiAgc3RvcmVmcm9udEFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFRlJPTlRfQVBJX1RPS0VOLFxufVxuIiwiaW1wb3J0ICogYXMgdGhlbWVzIGZyb20gJ0B0aGVtZS11aS9wcmVzZXRzJ1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZXMgYXMgYW55XG4iLCJpbXBvcnQgeyByZXNvbHZlQnVpbGRlckNvbnRlbnQgfSBmcm9tICcuL3Jlc29sdmUtYnVpbGRlci1jb250ZW50J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF5b3V0UHJvcHModGFyZ2V0aW5nQXR0cmlidXRlcz86IGFueSkge1xuICBjb25zdCB0aGVtZSA9IGF3YWl0IHJlc29sdmVCdWlsZGVyQ29udGVudCgndGhlbWUnLCB0YXJnZXRpbmdBdHRyaWJ1dGVzKVxuXG4gIHJldHVybiB7XG4gICAgdGhlbWU6IHRoZW1lIHx8IG51bGwsXG4gIH1cbn1cbiIsImltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQ09PS0lFX05BTUUgPSAnYWNjZXB0X2Nvb2tpZXMnXG5cbmV4cG9ydCBjb25zdCB1c2VBY2NlcHRDb29raWVzID0gKCkgPT4ge1xuICBjb25zdCBbYWNjZXB0ZWRDb29raWVzLCBzZXRBY2NlcHRlZENvb2tpZXNdID0gdXNlU3RhdGUodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghQ29va2llcy5nZXQoQ09PS0lFX05BTUUpKSB7XG4gICAgICBzZXRBY2NlcHRlZENvb2tpZXMoZmFsc2UpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBhY2NlcHRDb29raWVzID0gKCkgPT4ge1xuICAgIHNldEFjY2VwdGVkQ29va2llcyh0cnVlKVxuICAgIENvb2tpZXMuc2V0KENPT0tJRV9OQU1FLCAnYWNjZXB0ZWQnLCB7IGV4cGlyZXM6IDM2NSB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhY2NlcHRlZENvb2tpZXMsXG4gICAgb25BY2NlcHRDb29raWVzOiBhY2NlcHRDb29raWVzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBidWlsZGVyLCBCdWlsZGVyIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcmVhY3QnXG5pbXBvcnQgeyBnZXRBc3luY1Byb3BzIH0gZnJvbSAnQGJ1aWxkZXIuaW8vdXRpbHMnXG5pbXBvcnQgYnVpbGRlckNvbmZpZyBmcm9tICdAY29uZmlnL2J1aWxkZXInXG5pbXBvcnQge1xuICBnZXRDb2xsZWN0aW9uLFxuICBnZXRQcm9kdWN0LFxuICBzZWFyY2hQcm9kdWN0cyxcbn0gZnJvbSAnLi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvYXBpL29wZXJhdGlvbnMtYnVpbGRlcidcbmJ1aWxkZXIuaW5pdChidWlsZGVyQ29uZmlnLmFwaUtleSlcbkJ1aWxkZXIuaXNTdGF0aWMgPSB0cnVlXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlQnVpbGRlckNvbnRlbnQoXG4gIG1vZGVsTmFtZTogc3RyaW5nLFxuICB0YXJnZXRpbmdBdHRyaWJ1dGVzPzogYW55XG4pIHtcbiAgbGV0IHBhZ2UgPSBhd2FpdCBidWlsZGVyXG4gICAgLmdldChtb2RlbE5hbWUsIHtcbiAgICAgIHVzZXJBdHRyaWJ1dGVzOiB0YXJnZXRpbmdBdHRyaWJ1dGVzLFxuICAgICAgaW5jbHVkZVJlZnM6IHRydWUsXG4gICAgICBwcmV2aWV3OiBtb2RlbE5hbWUsXG4gICAgICBjYWNoZWJ1c3Q6IHRydWUsXG4gICAgfSBhcyBhbnkpXG4gICAgLnRvUHJvbWlzZSgpXG5cbiAgaWYgKHBhZ2UpIHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0QXN5bmNQcm9wcyhwYWdlLCB7XG4gICAgICBhc3luYyBQcm9kdWN0R3JpZChwcm9wcykge1xuICAgICAgICBsZXQgcHJvZHVjdHM6IGFueVtdID0gW11cbiAgICAgICAgaWYgKHByb3BzLnByb2R1Y3RzTGlzdCkge1xuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gcHJvcHMucHJvZHVjdHNMaXN0XG4gICAgICAgICAgICAubWFwKChlbnRyeTogYW55KSA9PiBlbnRyeS5wcm9kdWN0KVxuICAgICAgICAgICAgLmZpbHRlcigoaGFuZGxlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHR5cGVvZiBoYW5kbGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgYXN5bmMgKGhhbmRsZTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgIGF3YWl0IGdldFByb2R1Y3QoYnVpbGRlckNvbmZpZywgeyBoYW5kbGUgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICBwcm9kdWN0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLy8gcmVzb2x2ZSB0aGUgcXVlcnkgYXMgYHByb2R1Y3RzYCBmb3Igc3NyXG4gICAgICAgICAgLy8gdXNlZCBmb3IgZXhhbXBsZSBpbiBQcm9kdWN0R3JpZC50c3ggYXMgaW5pdGlhbFByb2R1Y3RzXG4gICAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBDb2xsZWN0aW9uQm94KHByb3BzKSB7XG4gICAgICAgIGxldCBjb2xsZWN0aW9uID0gcHJvcHMuY29sbGVjdGlvblxuICAgICAgICBpZiAoY29sbGVjdGlvbiAmJiB0eXBlb2YgY29sbGVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb2xsZWN0aW9uID0gYXdhaXQgZ2V0Q29sbGVjdGlvbihidWlsZGVyQ29uZmlnLCB7XG4gICAgICAgICAgICBoYW5kbGU6IGNvbGxlY3Rpb24sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBQcm9kdWN0Qm94KHByb3BzKSB7XG4gICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdFxuICAgICAgICBpZiAocHJvZHVjdCAmJiB0eXBlb2YgcHJvZHVjdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBwcm9kdWN0ID0gYXdhaXQgZ2V0UHJvZHVjdChidWlsZGVyQ29uZmlnLCB7XG4gICAgICAgICAgICBoYW5kbGU6IHByb2R1Y3QsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIFByb2R1Y3RDb2xsZWN0aW9uR3JpZCh7IGNvbGxlY3Rpb24gfSkge1xuICAgICAgICBpZiAoY29sbGVjdGlvbiAmJiB0eXBlb2YgY29sbGVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCBnZXRDb2xsZWN0aW9uKGJ1aWxkZXJDb25maWcsIHtcbiAgICAgICAgICAgIGhhbmRsZTogY29sbGVjdGlvbixcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuIiwiZXhwb3J0IHsgQ29tbWVyY2VQcm92aWRlciB9IGZyb20gJy4vc3JjL0NvbW1lcmNlUHJvdmlkZXInXG5leHBvcnQgKiBmcm9tICcuL3NyYy9ob29rcydcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2hvcGlmeUJ1eSBmcm9tICdzaG9waWZ5LWJ1eSdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIExvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1lcmNlUHJvdmlkZXJQcm9wcyBleHRlbmRzIFNob3BpZnlCdXkuQ29uZmlnIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tbWVyY2VQcm92aWRlcih7XG4gIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbixcbiAgZG9tYWluLFxuICBjaGlsZHJlbixcbn06IENvbW1lcmNlUHJvdmlkZXJQcm9wcykge1xuICBpZiAoZG9tYWluID09IG51bGwgfHwgc3RvcmVmcm9udEFjY2Vzc1Rva2VuID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnVW5hYmxlIHRvIGJ1aWxkIHNob3BpZnktYnV5IGNsaWVudCBvYmplY3QuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3VyIGFjY2VzcyB0b2tlbiBhbmQgZG9tYWluIGFyZSBjb3JyZWN0LidcbiAgICApXG4gIH1cblxuICBjb25zdCBpbml0aWFsQ2FydCA9IExvY2FsU3RvcmFnZS5nZXRJbml0aWFsQ2FydCgpXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlPFNob3BpZnlCdXkuQ2FydCB8IG51bGw+KGluaXRpYWxDYXJ0KVxuXG4gIGNvbnN0IGlzQ3VzdG9tRG9tYWluID0gZG9tYWluLmluY2x1ZGVzKCcuJylcblxuICBjb25zdCBjbGllbnQgPSBTaG9waWZ5QnV5LmJ1aWxkQ2xpZW50KHtcbiAgICBzdG9yZWZyb250QWNjZXNzVG9rZW4sXG4gICAgZG9tYWluOiBpc0N1c3RvbURvbWFpbiA/IGRvbWFpbiA6IGAke2RvbWFpbn0ubXlzaG9waWZ5LmNvbWAsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXROZXdDYXJ0KCkge1xuICAgICAgY29uc3QgbmV3Q2FydCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5jcmVhdGUoKVxuICAgICAgc2V0Q2FydChuZXdDYXJ0KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hFeGlzdGluZ0NhcnQoY2FydElkOiBzdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlZnJlc2hlZENhcnQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQuZmV0Y2goY2FydElkKVxuXG4gICAgICAgIGlmIChyZWZyZXNoZWRDYXJ0ID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0TmV3Q2FydCgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYXJ0SGFzQmVlblB1cmNoYXNlZCA9IEJvb2xlYW4ocmVmcmVzaGVkQ2FydC5jb21wbGV0ZWRBdClcblxuICAgICAgICBpZiAoY2FydEhhc0JlZW5QdXJjaGFzZWQpIHtcbiAgICAgICAgICBnZXROZXdDYXJ0KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRDYXJ0KHJlZnJlc2hlZENhcnQpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNhcnQgPT0gbnVsbCkge1xuICAgICAgZ2V0TmV3Q2FydCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZnJlc2hFeGlzdGluZ0NhcnQoU3RyaW5nKGNhcnQuaWQpKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBMb2NhbFN0b3JhZ2Uuc2V0KExvY2FsU3RvcmFnZUtleXMuQ0FSVCwgSlNPTi5zdHJpbmdpZnkoY2FydCkpXG4gIH0sIFtjYXJ0XSlcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjbGllbnQsXG4gICAgICAgIGNhcnQsXG4gICAgICAgIHNldENhcnQsXG4gICAgICAgIGRvbWFpbixcbiAgICAgICAgc3RvcmVmcm9udEFjY2Vzc1Rva2VuLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2hvcGlmeUJ1eSBmcm9tICdzaG9waWZ5LWJ1eSdcblxuaW50ZXJmYWNlIENvbnRleHRTaGFwZSB7XG4gIGNsaWVudDogU2hvcGlmeUJ1eS5DbGllbnQgfCBudWxsXG4gIGNhcnQ6IFNob3BpZnlCdXkuQ2FydCB8IG51bGxcbiAgc2V0Q2FydDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248U2hvcGlmeUJ1eS5DYXJ0IHwgbnVsbD4+XG4gIGRvbWFpbjogc3RyaW5nXG4gIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbjogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb250ZXh0U2hhcGU+KHtcbiAgY2xpZW50OiBudWxsLFxuICBjYXJ0OiBudWxsLFxuICBkb21haW46ICcnLFxuICBzdG9yZWZyb250QWNjZXNzVG9rZW46ICcnLFxuICBzZXRDYXJ0OiAoKSA9PiB7XG4gICAgdGhyb3cgRXJyb3IoJ1lvdSBmb3Jnb3QgdG8gd3JhcCB0aGlzIGluIGEgUHJvdmlkZXIgb2JqZWN0JylcbiAgfSxcbn0pXG4iLCJpbXBvcnQgKiBhcyBxcyBmcm9tICdxcydcblxuZXhwb3J0IGludGVyZmFjZSBCdWlsbGRlckNvbmZpZyB7XG4gIGFwaUtleTogc3RyaW5nXG4gIHByb2R1Y3RzTW9kZWw6IHN0cmluZ1xuICBjb2xsZWN0aW9uc01vZGVsOiBzdHJpbmdcbiAgaXNEZW1vPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbGxlY3Rpb25Qcm9kdWN0c1F1ZXJ5IHtcbiAgaGFuZGxlOiBzdHJpbmdcbiAgbGltaXQ/OiBudW1iZXJcbiAgY3Vyc29yPzogc3RyaW5nXG4gIGFwaUtleTogc3RyaW5nXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQcm9kdWN0cyhcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgbGltaXQgPSAxMDAsXG4gIG9mZnNldCA9IDBcbikge1xuICBjb25zdCBwcm9kdWN0c0NvbnRlbnQgPSAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjIvY29udGVudC8ke2NvbmZpZy5wcm9kdWN0c01vZGVsfT9hcGlLZXk9JHtjb25maWcuYXBpS2V5fSZsaW1pdD0ke2xpbWl0fSZvZmZzZXQ9JHtvZmZzZXR9JmNhY2hlYnVzdD10cnVlYFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApLnJlc3VsdHNcblxuICByZXR1cm4gcHJvZHVjdHNDb250ZW50Lm1hcCgocHI6IGFueSkgPT4gcHIuZGF0YSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFByb2R1Y3RzKFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBzZWFyY2hTdHJpbmc6IHN0cmluZyxcbiAgbGltaXQgPSAxMDAsXG4gIG9mZnNldCA9IDBcbikge1xuICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeShcbiAgICB7XG4gICAgICBmaWVsZHM6IFsnZGF0YSddLFxuICAgICAgbGltaXQsXG4gICAgICBvZmZzZXQsXG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgfSxcbiAgICB7IGFsbG93RG90czogdHJ1ZSB9XG4gIClcblxuICBjb25zdCBwcm9kdWN0c0NvbnRlbnQgPSAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjIvY29udGVudC8ke1xuICAgICAgICBjb25maWcucHJvZHVjdHNNb2RlbFxuICAgICAgfT8ke3F1ZXJ5fSZxdWVyeS5kYXRhLnRpdGxlPSR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAkcmVnZXg6IGAke3NlYXJjaFN0cmluZ31gLFxuICAgICAgICAkb3B0aW9uczogJ2knLFxuICAgICAgfSl9YFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApLnJlc3VsdHNcbiAgcmV0dXJuIHByb2R1Y3RzQ29udGVudD8ubWFwKChwcm9kdWN0OiBhbnkpID0+IHByb2R1Y3QuZGF0YSkgfHwgW11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RQYXRocyhcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgbGltaXQ/OiBudW1iZXJcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgcHJvZHVjdHM6IGFueVtdID0gYXdhaXQgZ2V0QWxsUHJvZHVjdHMoY29uZmlnLCBsaW1pdClcbiAgcmV0dXJuIHByb2R1Y3RzPy5tYXAoKGVudHJ5KSA9PiBlbnRyeS5oYW5kbGUpIHx8IFtdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0KFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBvcHRpb25zOiB7IGlkPzogc3RyaW5nOyBoYW5kbGU/OiBzdHJpbmc7IHdpdGhDb250ZW50PzogYm9vbGVhbiB9XG4pIHtcbiAgaWYgKEJvb2xlYW4ob3B0aW9ucy5pZCkgPT09IEJvb2xlYW4ob3B0aW9ucy5oYW5kbGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFaXRoZXIgYSBoYW5kbGUgb3IgaWQgaXMgcmVxdWlyZWQnKVxuICB9XG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcbiAgICBsaW1pdDogMSxcbiAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgcXVlcnk6IHtcbiAgICAgIGRhdGE6IG9wdGlvbnMuaWRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpZDogeyAkZXE6IG9wdGlvbnMuaWQgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgaGFuZGxlOiB7ICRlcTogb3B0aW9ucy5oYW5kbGUgfSxcbiAgICAgICAgICB9LFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgcHJvZHVjdHNDb250ZW50ID0gKFxuICAgIGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vY2RuLmJ1aWxkZXIuaW8vYXBpL3YyL2NvbnRlbnQvJHtjb25maWcucHJvZHVjdHNNb2RlbH0/JHtxdWVyeX1gXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICkucmVzdWx0c1xuXG4gIGlmIChvcHRpb25zLndpdGhDb250ZW50KSB7XG4gICAgcmV0dXJuIHByb2R1Y3RzQ29udGVudFswXVxuICB9XG4gIHJldHVybiBwcm9kdWN0c0NvbnRlbnRbMF0/LmRhdGFcbn1cblxuLyoqXG4gKiBDb2xsZWN0aW9uc1xuICovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDb2xsZWN0aW9ucyhcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgbGltaXQgPSAyMCxcbiAgb2Zmc2V0ID0gMCxcbiAgZmllbGRzPzogc3RyaW5nXG4pIHtcbiAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoXG4gICAge1xuICAgICAgZmllbGRzOiBmaWVsZHMgfHwgJ2RhdGEnLFxuICAgICAgbGltaXQsXG4gICAgICBvZmZzZXQsXG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBjYWNoZWJ1c3Q6IHRydWUsXG4gICAgfSxcbiAgICB7IGFsbG93RG90czogdHJ1ZSB9XG4gIClcblxuICBjb25zdCBjb2xsZWN0aW9uc0NvbnRlbnQgPSAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjIvY29udGVudC8ke2NvbmZpZy5jb2xsZWN0aW9uc01vZGVsfT8ke3F1ZXJ5fWBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgKS5yZXN1bHRzXG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25zQ29udGVudD8ubWFwKChlbnRyeTogYW55KSA9PiBlbnRyeS5kYXRhKSB8fCBbXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoQ29sbGVjdGlvbnMoXG4gIGNvbmZpZzogQnVpbGxkZXJDb25maWcsXG4gIHNlYXJjaFN0cmluZzogc3RyaW5nLFxuICBsaW1pdCA9IDEwMCxcbiAgb2Zmc2V0ID0gMFxuKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KFxuICAgIHtcbiAgICAgIGZpZWxkczogWydkYXRhJ10sXG4gICAgICBsaW1pdCxcbiAgICAgIG9mZnNldCxcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICB9LFxuICAgIHsgYWxsb3dEb3RzOiB0cnVlIH1cbiAgKVxuXG4gIGNvbnN0IGNvbGxlY3Rpb25zQ29udGVudCA9IChcbiAgICBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92Mi9jb250ZW50LyR7XG4gICAgICAgIGNvbmZpZy5jb2xsZWN0aW9uc01vZGVsXG4gICAgICB9PyR7cXVlcnl9JnF1ZXJ5LiRvcj0ke0pTT04uc3RyaW5naWZ5KFtcbiAgICAgICAge1xuICAgICAgICAgICdkYXRhLmRlc2NyaXB0aW9uJzogeyAkcmVnZXg6IGAke3NlYXJjaFN0cmluZ31gIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnZGF0YS50aXRsZSc6IHsgJHJlZ2V4OiBgJHtzZWFyY2hTdHJpbmd9YCB9LFxuICAgICAgICB9LFxuICAgICAgXSl9YFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApLnJlc3VsdHNcbiAgcmV0dXJuIGNvbGxlY3Rpb25zQ29udGVudD8ubWFwKChlbnRyeTogYW55KSA9PiBlbnRyeS5kYXRhKSB8fCBbXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ29sbGVjdGlvblBhdGhzKFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBsaW1pdD86IG51bWJlclxuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCBjb2xsZWN0aW9uczogYW55W10gPSBhd2FpdCBnZXRBbGxDb2xsZWN0aW9ucyhjb25maWcsIGxpbWl0KVxuICByZXR1cm4gY29sbGVjdGlvbnM/Lm1hcCgoZW50cnkpID0+IGVudHJ5LmhhbmRsZSkgfHwgW11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbGxlY3Rpb24oXG4gIGNvbmZpZzogQnVpbGxkZXJDb25maWcsXG4gIG9wdGlvbnM6IHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGhhbmRsZT86IHN0cmluZ1xuICAgIHByb2R1Y3RzUXVlcnk/OiBPbWl0PENvbGxlY3Rpb25Qcm9kdWN0c1F1ZXJ5LCAnaGFuZGxlJz5cbiAgfVxuKSB7XG4gIGlmIChCb29sZWFuKG9wdGlvbnMuaWQpID09PSBCb29sZWFuKG9wdGlvbnMuaGFuZGxlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRWl0aGVyIGEgaGFuZGxlIG9yIGlkIGlzIHJlcXVpcmVkJylcbiAgfVxuICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XG4gICAgbGltaXQ6IDEsXG4gICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgIGNhY2hlYnVzdDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcbiAgICBxdWVyeToge1xuICAgICAgZGF0YTogb3B0aW9ucy5pZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGlkOiB7ICRlcTogb3B0aW9ucy5pZCB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBoYW5kbGU6IHsgJGVxOiBvcHRpb25zLmhhbmRsZSB9LFxuICAgICAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBjb2xsZWN0aW9uc0NvbnRlbnQgPSAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjIvY29udGVudC8ke2NvbmZpZy5jb2xsZWN0aW9uc01vZGVsfT8ke3F1ZXJ5fWBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgKS5yZXN1bHRzXG5cbiAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zQ29udGVudFswXT8uZGF0YVxuICBpZiAoY29uZmlnLmlzRGVtbykge1xuICAgIHJldHVybiBjb2xsZWN0aW9uXG4gIH1cbiAgY29uc3QgcHJvZHVjdHNRdWVyeSA9IHtcbiAgICBsaW1pdDogMjAsXG4gICAgaGFuZGxlOiBjb2xsZWN0aW9uPy5oYW5kbGUsXG4gICAgLi4ub3B0aW9ucy5wcm9kdWN0c1F1ZXJ5LFxuICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgfVxuICBjb25zdCB7IHByb2R1Y3RzLCBuZXh0UGFnZUN1cnNvciwgaGFzTmV4dFBhZ2UgfSA9IGF3YWl0IGdldENvbGxlY3Rpb25Qcm9kdWN0cyhcbiAgICBwcm9kdWN0c1F1ZXJ5XG4gIClcblxuICByZXR1cm4ge1xuICAgIC4uLmNvbGxlY3Rpb24sXG4gICAgcHJvZHVjdHMsXG4gICAgbmV4dFBhZ2VDdXJzb3IsXG4gICAgaGFzTmV4dFBhZ2UsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbGxlY3Rpb25Qcm9kdWN0cyA9IChcbiAgcHJvZHVjdHNRdWVyeTogQ29sbGVjdGlvblByb2R1Y3RzUXVlcnlcbik6IFByb21pc2U8e1xuICBuZXh0UGFnZUN1cnNvcjogc3RyaW5nXG4gIHByb2R1Y3RzOiBhbnlbXVxuICBoYXNOZXh0UGFnZTogYm9vbGVhblxufT4gPT4ge1xuICBjb25zdCBzZWFyY2ggPSBxcy5zdHJpbmdpZnkocHJvZHVjdHNRdWVyeSlcbiAgcmV0dXJuIGZldGNoKFxuICAgIGBodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92MS9zaG9waWZ5LXN5bmMvY29sbGVjdGlvbi1wcm9kdWN0cz8ke3NlYXJjaH1gXG4gICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxufVxuIiwiZXhwb3J0IHsgdXNlQ2xpZW50VW5zYWZlIH0gZnJvbSAnLi91c2VDbGllbnRVbnNhZmUnXG5leHBvcnQgeyB1c2VTZXRDYXJ0VW5zYWZlIH0gZnJvbSAnLi91c2VTZXRDYXJ0VW5zYWZlJ1xuZXhwb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4vdXNlQ2FydCdcbmV4cG9ydCB7IHVzZUNhcnRDb3VudCB9IGZyb20gJy4vdXNlQ2FydENvdW50J1xuZXhwb3J0IHsgdXNlQWRkSXRlbVRvQ2FydCB9IGZyb20gJy4vdXNlQWRkSXRlbVRvQ2FydCdcbmV4cG9ydCB7IHVzZUFkZEl0ZW1zVG9DYXJ0IH0gZnJvbSAnLi91c2VBZGRJdGVtc1RvQ2FydCdcbmV4cG9ydCB7IHVzZVJlbW92ZUl0ZW1Gcm9tQ2FydCB9IGZyb20gJy4vdXNlUmVtb3ZlSXRlbUZyb21DYXJ0J1xuZXhwb3J0IHsgdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCB9IGZyb20gJy4vdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCdcbmV4cG9ydCB7IHVzZUNhcnRJdGVtcyB9IGZyb20gJy4vdXNlQ2FydEl0ZW1zJ1xuZXhwb3J0IHsgdXNlQ2hlY2tvdXRVcmwgfSBmcm9tICcuL3VzZUNoZWNrb3V0VXJsJ1xuZXhwb3J0IHsgdXNlR2V0TGluZUl0ZW0gfSBmcm9tICcuL3VzZUdldExpbmVJdGVtJ1xuZXhwb3J0IHsgdXNlVXBkYXRlSXRlbVF1YW50aXR5IH0gZnJvbSAnLi91c2VVcGRhdGVJdGVtUXVhbnRpdHknXG4iLCJpbXBvcnQgeyB1c2VBZGRJdGVtc1RvQ2FydCB9IGZyb20gJy4vdXNlQWRkSXRlbXNUb0NhcnQnXG5pbXBvcnQgeyBBdHRyaWJ1dGVJbnB1dCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRkSXRlbVRvQ2FydCgpIHtcbiAgY29uc3QgYWRkSXRlbXNUb0NhcnQgPSB1c2VBZGRJdGVtc1RvQ2FydCgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbVRvQ2FydChcbiAgICB2YXJpYW50SWQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBxdWFudGl0eTogbnVtYmVyLFxuICAgIGN1c3RvbUF0dHJpYnV0ZXM/OiBBdHRyaWJ1dGVJbnB1dFtdXG4gICkge1xuICAgIGNvbnN0IGl0ZW0gPSBbeyB2YXJpYW50SWQsIHF1YW50aXR5LCBjdXN0b21BdHRyaWJ1dGVzIH1dXG5cbiAgICByZXR1cm4gYWRkSXRlbXNUb0NhcnQoaXRlbSlcbiAgfVxuXG4gIHJldHVybiBhZGRJdGVtVG9DYXJ0XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcbmltcG9ydCBTaG9waWZ5QnV5IGZyb20gJ3Nob3BpZnktYnV5J1xuaW1wb3J0IHsgTGluZUl0ZW1QYXRjaCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRkSXRlbXNUb0NhcnQoKSB7XG4gIGNvbnN0IHsgY2xpZW50LCBjYXJ0LCBzZXRDYXJ0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbXNUb0NhcnQoaXRlbXM6IExpbmVJdGVtUGF0Y2hbXSkge1xuICAgIGlmIChjYXJ0ID09IG51bGwgfHwgY2xpZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGVkIGFkZEl0ZW1zVG9DYXJ0IHRvbyBzb29uJylcbiAgICB9XG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBsaW5lIGl0ZW0sIGVtcHR5IGxpbmUgaXRlbXMgZm91bmQnXG4gICAgICApXG4gICAgfVxuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0udmFyaWFudElkID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHZhcmlhbnRJZCBpbiBpdGVtYClcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0ucXVhbnRpdHkgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYE1pc3NpbmcgcXVhbnRpdHkgaW4gaXRlbSB3aXRoIHZhcmlhbnQgaWQ6ICR7aXRlbS52YXJpYW50SWR9YFxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnF1YW50aXR5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgUXVhbnRpdHkgaXMgbm90IGEgbnVtYmVyIGluIGl0ZW0gd2l0aCB2YXJpYW50IGlkOiAke2l0ZW0udmFyaWFudElkfWBcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChpdGVtLnF1YW50aXR5IDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFF1YW50aXR5IG11c3Qgbm90IGJlIGxlc3MgdGhhbiBvbmUgaW4gaXRlbSB3aXRoIHZhcmlhbnQgaWQ6ICR7aXRlbS52YXJpYW50SWR9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG5ld0NhcnQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQuYWRkTGluZUl0ZW1zKFxuICAgICAgY2FydC5pZCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaXRlbXMgYXMgU2hvcGlmeUJ1eS5MaW5lSXRlbVtdXG4gICAgKVxuICAgIHNldENhcnQobmV3Q2FydClcbiAgfVxuXG4gIHJldHVybiBhZGRJdGVtc1RvQ2FydFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0KCkge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgcmV0dXJuIGNhcnRcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydENvdW50KCkge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgaWYgKGNhcnQgPT0gbnVsbCB8fCBjYXJ0LmxpbmVJdGVtcy5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGNvdW50ID0gY2FydC5saW5lSXRlbXMucmVkdWNlKCh0b3RhbENvdW50LCBsaW5lSXRlbSkgPT4ge1xuICAgIHJldHVybiB0b3RhbENvdW50ICsgbGluZUl0ZW0ucXVhbnRpdHlcbiAgfSwgMClcblxuICByZXR1cm4gY291bnRcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydEl0ZW1zKCkge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgaWYgKCFjYXJ0IHx8ICFBcnJheS5pc0FycmF5KGNhcnQubGluZUl0ZW1zKSkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmV0dXJuIGNhcnQubGluZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoZWNrb3V0VXJsKCk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgaWYgKGNhcnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gY2FydC53ZWJVcmxcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xpZW50VW5zYWZlKCkge1xuICBjb25zdCB7IGNsaWVudCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnVXNpbmcgY2xpZW50IGRpcmVjdGx5IHdpbGwgaGl0IHNob3BpZnkgQVBJIGFuZCBjb3VudHMgdG93YXJkcyB5b3VyIHN0b3JlZnJvbnQgcmF0ZSBsaW1pdCdcbiAgICApXG4gIH1cbiAgcmV0dXJuIGNsaWVudFxufVxuIiwiaW1wb3J0IHsgdXNlQ2FydEl0ZW1zIH0gZnJvbSAnLi91c2VDYXJ0SXRlbXMnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRMaW5lSXRlbSgpIHtcbiAgY29uc3QgY2FydEl0ZW1zID0gdXNlQ2FydEl0ZW1zKClcblxuICBmdW5jdGlvbiBnZXRMaW5lSXRlbSh2YXJpYW50SWQ6IHN0cmluZyB8IG51bWJlcik6IFNob3BpZnlCdXkuTGluZUl0ZW0gfCBudWxsIHtcbiAgICBpZiAoY2FydEl0ZW1zLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9IGNhcnRJdGVtcy5maW5kKChjYXJ0SXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gY2FydEl0ZW0udmFyaWFudC5pZCA9PT0gdmFyaWFudElkXG4gICAgfSlcblxuICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1cbiAgfVxuXG4gIHJldHVybiBnZXRMaW5lSXRlbVxufVxuIiwiaW1wb3J0IHsgdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCB9IGZyb20gJy4vdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlbW92ZUl0ZW1Gcm9tQ2FydCgpIHtcbiAgY29uc3QgcmVtb3ZlSXRlbXNGcm9tQ2FydCA9IHVzZVJlbW92ZUl0ZW1zRnJvbUNhcnQoKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tQ2FydCh2YXJpYW50SWQ6IG51bWJlciB8IHN0cmluZykge1xuICAgIGlmICh2YXJpYW50SWQgPT09ICcnIHx8IHZhcmlhbnRJZCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhcmlhbnRJZCBtdXN0IG5vdCBiZSBibGFuayBvciBudWxsJylcbiAgICB9XG5cbiAgICByZXR1cm4gcmVtb3ZlSXRlbXNGcm9tQ2FydChbU3RyaW5nKHZhcmlhbnRJZCldKVxuICB9XG5cbiAgcmV0dXJuIHJlbW92ZUl0ZW1Gcm9tQ2FydFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5pbXBvcnQgeyB1c2VHZXRMaW5lSXRlbSB9IGZyb20gJy4vdXNlR2V0TGluZUl0ZW0nXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZW1vdmVJdGVtc0Zyb21DYXJ0KCkge1xuICBjb25zdCB7IGNsaWVudCwgY2FydCwgc2V0Q2FydCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBjb25zdCBnZXRMaW5lSXRlbSA9IHVzZUdldExpbmVJdGVtKClcblxuICBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtc0Zyb21DYXJ0KHZhcmlhbnRJZHM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKGNhcnQgPT0gbnVsbCB8fCBjbGllbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgcmVtb3ZlSXRlbXNGcm9tQ2FydCB0b28gc29vbicpXG4gICAgfVxuXG4gICAgaWYgKHZhcmlhbnRJZHMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGl0ZW0gdG8gcmVtb3ZlJylcbiAgICB9XG5cbiAgICBjb25zdCBsaW5lSXRlbUlkcyA9IHZhcmlhbnRJZHMubWFwKCh2YXJpYW50SWQpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVJdGVtID0gZ2V0TGluZUl0ZW0odmFyaWFudElkKVxuICAgICAgaWYgKGxpbmVJdGVtID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ291bGQgbm90IGZpbmQgbGluZSBpdGVtIGluIGNhcnQgd2l0aCB2YXJpYW50IGlkOiAke3ZhcmlhbnRJZH1gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJldHVybiBTdHJpbmcobGluZUl0ZW0uaWQpXG4gICAgfSlcblxuICAgIGNvbnN0IG5ld0NhcnQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQucmVtb3ZlTGluZUl0ZW1zKGNhcnQuaWQsIGxpbmVJdGVtSWRzKVxuICAgIHNldENhcnQobmV3Q2FydClcbiAgfVxuXG4gIHJldHVybiByZW1vdmVJdGVtc0Zyb21DYXJ0XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNldENhcnRVbnNhZmUoKSB7XG4gIGNvbnN0IHsgc2V0Q2FydCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICByZXR1cm4gc2V0Q2FydFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5cbmltcG9ydCB7IHVzZUdldExpbmVJdGVtIH0gZnJvbSAnLi91c2VHZXRMaW5lSXRlbSdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZUl0ZW1RdWFudGl0eSgpIHtcbiAgY29uc3QgeyBjbGllbnQsIGNhcnQsIHNldENhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgY29uc3QgZ2V0TGluZUl0ZW0gPSB1c2VHZXRMaW5lSXRlbSgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSXRlbVF1YW50aXR5KFxuICAgIHZhcmlhbnRJZDogc3RyaW5nIHwgbnVtYmVyLFxuICAgIHF1YW50aXR5OiBudW1iZXJcbiAgKSB7XG4gICAgaWYgKHZhcmlhbnRJZCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcHJvdmlkZSBhIHZhcmlhbnQgaWQnKVxuICAgIH1cblxuICAgIGlmIChxdWFudGl0eSA9PSBudWxsIHx8IE51bWJlcihxdWFudGl0eSkgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1YW50aXR5IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKVxuICAgIH1cblxuICAgIGNvbnN0IGxpbmVJdGVtID0gZ2V0TGluZUl0ZW0odmFyaWFudElkKVxuICAgIGlmIChsaW5lSXRlbSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEl0ZW0gd2l0aCB2YXJpYW50SWQgJHt2YXJpYW50SWR9IG5vdCBpbiBjYXJ0YClcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgbmV3Q2FydCA9IGF3YWl0IGNsaWVudC5jaGVja291dC51cGRhdGVMaW5lSXRlbXMoY2FydC5pZCwgW1xuICAgICAgeyBpZDogbGluZUl0ZW0uaWQsIHF1YW50aXR5IH0sXG4gICAgXSlcbiAgICBzZXRDYXJ0KG5ld0NhcnQpXG4gIH1cblxuICByZXR1cm4gdXBkYXRlSXRlbVF1YW50aXR5XG59XG4iLCJpbXBvcnQgU2hvcGlmeUJ1eSBmcm9tICdzaG9waWZ5LWJ1eSdcbmltcG9ydCB7IExvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuL2tleXMnXG5pbXBvcnQgeyBpc0NhcnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZnVuY3Rpb24gc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gIGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICByZXR1cm4gaXRlbVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxDYXJ0KCk6IFNob3BpZnlCdXkuQ2FydCB8IG51bGwge1xuICBjb25zdCBleGlzdGluZ0NhcnRTdHJpbmcgPSBnZXQoTG9jYWxTdG9yYWdlS2V5cy5DQVJUKVxuICBpZiAoZXhpc3RpbmdDYXJ0U3RyaW5nID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBleGlzdGluZ0NhcnQgPSBKU09OLnBhcnNlKGV4aXN0aW5nQ2FydFN0cmluZylcbiAgICBpZiAoIWlzQ2FydChleGlzdGluZ0NhcnQpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBleGlzdGluZ0NhcnQgYXMgU2hvcGlmeUJ1eS5DYXJ0XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IExvY2FsU3RvcmFnZSA9IHtcbiAgZ2V0LFxuICBzZXQsXG4gIGdldEluaXRpYWxDYXJ0LFxufVxuIiwiaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9Mb2NhbFN0b3JhZ2UnXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgeyBMb2NhbFN0b3JhZ2UsIExvY2FsU3RvcmFnZUtleXMgfVxuIiwiY29uc3QgQ0FSVCA9ICdzaG9waWZ5X2xvY2FsX3N0b3JlX19jYXJ0J1xuY29uc3QgQ0hFQ0tPVVRfSUQgPSAnc2hvcGlmeV9sb2NhbF9zdG9yZV9fY2hlY2tvdXRfaWQnXG5cbmV4cG9ydCBjb25zdCBMb2NhbFN0b3JhZ2VLZXlzID0ge1xuICBDQVJULFxuICBDSEVDS09VVF9JRCxcbn1cbiIsImltcG9ydCB7IExvY2FsU3RvcmFnZSwgTG9jYWxTdG9yYWdlS2V5cyB9IGZyb20gJy4vTG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHsgaXNDYXJ0IH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IHsgTG9jYWxTdG9yYWdlLCBMb2NhbFN0b3JhZ2VLZXlzLCBpc0NhcnQgfVxuIiwiLyogXG4gIHByZXBhcmVWYXJpYW50c1dpdGhPcHRpb25zKClcblxuICBUaGlzIGZ1bmN0aW9uIGNoYW5nZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgdmFyaWFudHMgdG9cbiAgbW9yZSBlYXNpbHkgZ2V0IGF0IHRoZWlyIG9wdGlvbnMuIFRoZSBvcmlnaW5hbCBkYXRhIFxuICBzdHJ1Y3R1cmUgbG9va3MgbGlrZSB0aGlzOlxuXG4gIHtcbiAgICBcInNob3BpZnlJZFwiOiBcIloybGtPaTh2YzJodmNHbG1lUzlRY205a2RXTjBWbUZ5YVdGdWRDOHpNVGM0TkRRNE1UQXpNREU0T0E9PVwiLFxuICAgIFwic2VsZWN0ZWRPcHRpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQ29sb3JcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIlJlZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJTaXplXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJTbWFsbFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuXG4gIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyB0aGF0IGFuZCBvdXRwdXRzIGEgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBsb29rcyBsaWtlIHRoaXM6XG5cbiAge1xuICAgIFwic2hvcGlmeUlkXCI6IFwiWjJsa09pOHZjMmh2Y0dsbWVTOVFjbTlrZFdOMFZtRnlhV0Z1ZEM4ek1UYzRORFE0TVRBek1ERTRPQT09XCIsXG4gICAgXCJjb2xvclwiOiBcIlJlZFwiLFxuICAgIFwic2l6ZVwiOiBcIlNtYWxsXCJcbiAgfSxcbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlVmFyaWFudHNXaXRoT3B0aW9ucyhcbiAgdmFyaWFudHM6IGFueVtdXG4gIC8vIHZhcmlhbnRzOiBSZWFkb25seTxTaG9waWZ5QnV5LlByb2R1Y3RWYXJpYW50W10+XG4pIHtcbiAgcmV0dXJuIHZhcmlhbnRzLm1hcCgodmFyaWFudCkgPT4ge1xuICAgIC8vIFRPRE86IGxvb2sgaW50byB0eXBlcywgcHJvYiBuZWVkIHVwZGF0ZSBpbiBAdHlwZXMvc2hvcGlmeS1idXlcbiAgICAvLyBjb252ZXJ0IHRoZSBvcHRpb25zIHRvIGEgZGljdGlvbmFyeSBpbnN0ZWFkIG9mIGFuIGFycmF5XG4gICAgY29uc3Qgb3B0aW9uc0RpY3Rpb25hcnkgPSB2YXJpYW50LnNlbGVjdGVkT3B0aW9ucz8ucmVkdWNlKFxuICAgICAgKG9wdGlvbnM6IGFueSwgb3B0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgb3B0aW9uc1tgJHtvcHRpb24/Lm5hbWU/LnRvTG93ZXJDYXNlKCl9YF0gPSBvcHRpb24/LnZhbHVlXG4gICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgICB9LFxuICAgICAge31cbiAgICApXG5cbiAgICAvLyByZXR1cm4gYW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZSB2YXJpYW50IHByb3BlcnRpZXMgKyB0aGUgb3B0aW9ucyBhdCB0aGUgdG9wIGxldmVsXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9wdGlvbnNEaWN0aW9uYXJ5LFxuICAgICAgLi4udmFyaWFudCxcbiAgICB9XG4gIH0pIGFzIGFueVtdXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcmljZSA9IChwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nKSA9PlxuICBJbnRsLk51bWJlckZvcm1hdCh1bmRlZmluZWQsIHtcbiAgICBjdXJyZW5jeSxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gIH0pLmZvcm1hdChwYXJzZUZsb2F0KHByaWNlID8gcHJpY2UgOiAnMCcpKVxuXG4vKlxuICBwcmVwYXJlVmFyaWFudHNJbWFnZXMoKVxuXG4gIFRoaXMgZnVuY3Rpb24gZGlzdGlsbHMgdGhlIHZhcmlhbnRzIGltYWdlcyBpbnRvIGEgbm9uLXJlZHVuZGFudFxuICBncm91cCB0aGF0IGluY2x1ZGVzIGFuIG9wdGlvbiAna2V5JyAobW9zdCBsaWtlbHkgY29sb3IpLiBUaGVcbiAgZGF0YXN0cnVjdHVyZSBjb21pbmcgaW50byB0aGlzIGZ1bmN0aW9uIGxvb2tzIGxpa2UgdGhpczpcblxuICB7XG4gICAgXCJzaG9waWZ5SWRcIjogXCJaMmxrT2k4dmMyaHZjR2xtZVM5UWNtOWtkV04wVm1GeWFXRnVkQzh6TVRjNE5EUTRNVEF6TURFNE9BPT1cIixcbiAgICBcImltYWdlXCI6IGltYWdlMSxcbiAgICBcImNvbG9yXCI6IFwiUmVkXCIsXG4gICAgXCJzaXplXCI6IFwiU21hbGxcIlxuICB9LFxuICB7XG4gICAgXCJzaG9waWZ5SWRcIjogXCJaMmxrT2k4dmMyaHZjR2xtZVM5UWNtOWtkV04wVm1GeWFXMWwyQzh6TVRjNE5EUTRNVEF6TURFNE9BPT1cIixcbiAgICBcImltYWdlXCI6IGltYWdlMSxcbiAgICBcImNvbG9yXCI6IFwiUmVkXCIsXG4gICAgXCJzaXplXCI6IFwiTWVkaXVtXCJcbiAgfSxcblxuICBBbmQgY29uZGVuc2VzIHRoZW0gc28gdGhhdCB0aGVyZSBpcyBvbmx5IG9uZSB1bmlxdWVcbiAgaW1hZ2UgcGVyIGtleSB2YWx1ZTpcblxuICB7XG4gICAgXCJpbWFnZVwiOiBpbWFnZTEsXG4gICAgXCJjb2xvclwiOiBcIlJlZFwiLFxuICB9LFxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVWYXJpYW50c0ltYWdlcyhcbiAgdmFyaWFudHM6IGFueVtdLFxuICAvLyB2YXJpYW50czogUmVhZG9ubHk8R2F0c2J5VHlwZXMuU2hvcGlmeVByb2R1Y3RWYXJpYW50W10+LFxuICBvcHRpb25LZXk6IGFueVxuKTogYW55W10ge1xuICAvLyBHbyB0aHJvdWdoIHRoZSB2YXJpYW50cyBhbmQgcmVkdWNlIHRoZW0gaW50byBub24tcmVkdW5kYW50XG4gIC8vIGltYWdlcyBieSBvcHRpb25LZXkuIE91dHB1dCBsb29rcyBsaWtlIHRoaXM6XG4gIC8vIHtcbiAgLy8gICBbb3B0aW9uS2V5XTogaW1hZ2VcbiAgLy8gfVxuICBjb25zdCBpbWFnZURpY3Rpb25hcnkgPSB2YXJpYW50cy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgU2hvcGlmeUJ1eS5JbWFnZT4+KFxuICAgIChpbWFnZXMsIHZhcmlhbnQpID0+IHtcbiAgICAgIGlmICh2YXJpYW50W29wdGlvbktleV0pIHtcbiAgICAgICAgaW1hZ2VzW3ZhcmlhbnRbb3B0aW9uS2V5XV0gPSB2YXJpYW50LmltYWdlXG4gICAgICB9XG4gICAgICByZXR1cm4gaW1hZ2VzXG4gICAgfSxcbiAgICB7fVxuICApXG5cbiAgLy8gcHJlcGFyZSBhbiBhcnJheSBvZiBpbWFnZSBvYmplY3RzIHRoYXQgaW5jbHVkZSBib3RoIHRoZSBpbWFnZVxuICAvLyBhbmQgdGhlIG9wdGlvbmtleSB2YWx1ZS5cbiAgY29uc3QgaW1hZ2VzID0gT2JqZWN0LmtleXMoaW1hZ2VEaWN0aW9uYXJ5KS5tYXAoKGtleSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBbb3B0aW9uS2V5XToga2V5LFxuICAgICAgc3JjOiBpbWFnZURpY3Rpb25hcnlba2V5XSxcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGltYWdlc1xufVxuIiwiZXhwb3J0IHsgaXNDYXJ0IH0gZnJvbSAnLi9pc0NhcnQnXG4iLCJpbXBvcnQgU2hvcGlmeUJ1eSBmcm9tICdzaG9waWZ5LWJ1eSdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCBmdW5jdGlvbiBpc0NhcnQocG90ZW50aWFsQ2FydDogYW55KTogcG90ZW50aWFsQ2FydCBpcyBTaG9waWZ5QnV5LkNhcnQge1xuICByZXR1cm4gKFxuICAgIHBvdGVudGlhbENhcnQgIT0gbnVsbCAmJlxuICAgIHBvdGVudGlhbENhcnQuaWQgIT0gbnVsbCAmJlxuICAgIHBvdGVudGlhbENhcnQud2ViVXJsICE9IG51bGwgJiZcbiAgICBwb3RlbnRpYWxDYXJ0LmxpbmVJdGVtcyAhPSBudWxsICYmXG4gICAgcG90ZW50aWFsQ2FydC50eXBlICE9IG51bGwgJiZcbiAgICBwb3RlbnRpYWxDYXJ0LnR5cGUubmFtZSA9PT0gJ0NoZWNrb3V0JyAmJlxuICAgIHBvdGVudGlhbENhcnQudHlwZS5raW5kID09PSAnT0JKRUNUJ1xuICApXG59XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFsuLi5zaXplcy5tYXRjaEFsbCgvKF58XFxzKSgxP1xcZD9cXGQpdncvZyldLm1hcCgobSkgPT5cbiAgICAgIHBhcnNlSW50KG1bMl0pXG4gICAgKVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICBkb21haW5JdGVtczpcbiAgICB8IEFycmF5PHtcbiAgICAgICAgaHR0cD86IGJvb2xlYW5cbiAgICAgICAgZG9tYWluOiBzdHJpbmdcbiAgICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICAgIGRlZmF1bHRMb2NhbGU6IHN0cmluZ1xuICAgICAgfT5cbiAgICB8IHVuZGVmaW5lZCxcbiAgaG9zdG5hbWU/OiBzdHJpbmcsXG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgbGV0IGRvbWFpbkl0ZW06XG4gICAgfCB7XG4gICAgICAgIGh0dHA/OiBib29sZWFuXG4gICAgICAgIGRvbWFpbjogc3RyaW5nXG4gICAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgICBkZWZhdWx0TG9jYWxlOiBzdHJpbmdcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZFxuXG4gIGlmIChkb21haW5JdGVtcykge1xuICAgIGlmIChkZXRlY3RlZExvY2FsZSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBkZXRlY3RlZExvY2FsZS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKSB7XG4gICAgICAvLyByZW1vdmUgcG9ydCBpZiBwcmVzZW50XG4gICAgICBjb25zdCBkb21haW5Ib3N0bmFtZSA9IGl0ZW0uZG9tYWluPy5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKClcbiAgICAgIGlmIChcbiAgICAgICAgaG9zdG5hbWUgPT09IGRvbWFpbkhvc3RuYW1lIHx8XG4gICAgICAgIGRldGVjdGVkTG9jYWxlID09PSBpdGVtLmRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKSB8fFxuICAgICAgICBpdGVtLmxvY2FsZXM/LnNvbWUoKGxvY2FsZSkgPT4gbG9jYWxlLnRvTG93ZXJDYXNlKCkgPT09IGRldGVjdGVkTG9jYWxlKVxuICAgICAgKSB7XG4gICAgICAgIGRvbWFpbkl0ZW0gPSBpdGVtXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvbWFpbkl0ZW1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5cbmNvbnN0IHN0YXR1c0NvZGVzOiB7IFtjb2RlOiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcbiAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbn1cblxuZXhwb3J0IHR5cGUgRXJyb3JQcm9wcyA9IHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoe1xuICByZXMsXG4gIGVycixcbn06IE5leHRQYWdlQ29udGV4dCk6IFByb21pc2U8RXJyb3JQcm9wcz4gfCBFcnJvclByb3BzIHtcbiAgY29uc3Qgc3RhdHVzQ29kZSA9XG4gICAgcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSEgOiA0MDRcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG59XG5cbi8qKlxuICogYEVycm9yYCBjb21wb25lbnQgdXNlZCBmb3IgaGFuZGxpbmcgZXJyb3JzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcjxQID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFAgJiBFcnJvclByb3BzPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnXG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRpdGxlID1cbiAgICAgIHRoaXMucHJvcHMudGl0bGUgfHxcbiAgICAgIHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8XG4gICAgICAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVycm9yfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAge3N0YXR1c0NvZGV9OiB7dGl0bGV9XG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ICdib2R5IHsgbWFyZ2luOiAwIH0nIH19IC8+XG4gICAgICAgICAge3N0YXR1c0NvZGUgPyA8aDEgc3R5bGU9e3N0eWxlcy5oMX0+e3N0YXR1c0NvZGV9PC9oMT4gOiBudWxsfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVzLmgyfT57dGl0bGV9LjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHN0eWxlczogeyBbazogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0ge1xuICBlcnJvcjoge1xuICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGZvbnRGYW1pbHk6XG4gICAgICAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuXG4gIGRlc2M6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgaGVpZ2h0OiAnNDlweCcsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIH0sXG5cbiAgaDE6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXG4gICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gIH0sXG5cbiAgaDI6IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19lcnJvcicpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IHR5cGUge1xuICBHZXRTdGF0aWNQYXRoc0NvbnRleHQsXG4gIEdldFN0YXRpY1Byb3BzQ29udGV4dCxcbiAgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUsXG59IGZyb20gJ25leHQnXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCB7IEJ1aWxkZXJDb21wb25lbnQsIEJ1aWxkZXIsIGJ1aWxkZXIgfSBmcm9tICdAYnVpbGRlci5pby9yZWFjdCdcbmltcG9ydCBidWlsZGVyQ29uZmlnIGZyb20gJ0Bjb25maWcvYnVpbGRlcidcbmltcG9ydCBEZWZhdWx0RXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyByZXNvbHZlQnVpbGRlckNvbnRlbnQgfSBmcm9tICdAbGliL3Jlc29sdmUtYnVpbGRlci1jb250ZW50J1xuXG5idWlsZGVyLmluaXQoYnVpbGRlckNvbmZpZy5hcGlLZXkpXG5pbXBvcnQgJy4uL2Jsb2Nrcy9Qcm9kdWN0R3JpZC9Qcm9kdWN0R3JpZC5idWlsZGVyJ1xuaW1wb3J0ICcuLi9ibG9ja3MvQ29sbGVjdGlvblZpZXcvQ29sbGVjdGlvblZpZXcuYnVpbGRlcidcbmltcG9ydCB7IHVzZVRoZW1lVUkgfSBmcm9tICdAdGhlbWUtdWkvY29yZSdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAY29tcG9uZW50cy91aSdcbmltcG9ydCB7IFRoZW1lZCB9IGZyb20gJ0B0aGVtZS11aS9tZHgnXG5pbXBvcnQgeyBnZXRMYXlvdXRQcm9wcyB9IGZyb20gJ0BsaWIvZ2V0LWxheW91dC1wcm9wcydcblxuY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe1xuICBwYXJhbXMsXG4gIGxvY2FsZSxcbn06IEdldFN0YXRpY1Byb3BzQ29udGV4dDx7IHBhdGg6IHN0cmluZ1tdIH0+KSB7XG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCByZXNvbHZlQnVpbGRlckNvbnRlbnQoJ3BhZ2UnLCB7XG4gICAgbG9jYWxlLFxuICAgIHVybFBhdGg6ICcvJyArIChwYXJhbXM/LnBhdGg/LmpvaW4oJy8nKSB8fCAnJyksXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcGFnZSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIC4uLihhd2FpdCBnZXRMYXlvdXRQcm9wcygpKSxcbiAgICB9LFxuICAgIC8vIE5leHQuanMgd2lsbCBhdHRlbXB0IHRvIHJlLWdlbmVyYXRlIHRoZSBwYWdlOlxuICAgIC8vIC0gV2hlbiBhIHJlcXVlc3QgY29tZXMgaW5cbiAgICAvLyAtIEF0IG1vc3Qgb25jZSBldmVyeSAzMCBzZWNvbmRzXG4gICAgcmV2YWxpZGF0ZTogMzAsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKHsgbG9jYWxlcyB9OiBHZXRTdGF0aWNQYXRoc0NvbnRleHQpIHtcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBidWlsZGVyLmdldEFsbCgncGFnZScsIHtcbiAgICBvcHRpb25zOiB7IG5vVGFyZ2V0aW5nOiB0cnVlIH0sXG4gICAgYXBpS2V5OiBidWlsZGVyQ29uZmlnLmFwaUtleSxcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYWdlcy5tYXAoKHBhZ2UpID0+IGAke3BhZ2UuZGF0YT8udXJsfWApLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdGgoe1xuICBwYWdlLFxuICBsb2NhbGUsXG59OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lVUkoKVxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcbiAgICByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPlxuICB9XG4gIC8vIFRoaXMgaW5jbHVkZXMgc2V0dGluZyB0aGUgbm9pbmRleCBoZWFkZXIgYmVjYXVzZSBzdGF0aWMgZmlsZXMgYWx3YXlzIHJldHVybiBhIHN0YXR1cyAyMDAgYnV0IHRoZSByZW5kZXJlZCBub3QgZm91bmQgcGFnZSBwYWdlIHNob3VsZCBvYnZpb3VzbHkgbm90IGJlIGluZGV4ZWRcbiAgaWYgKCFwYWdlICYmICFCdWlsZGVyLmlzRWRpdGluZyAmJiAhQnVpbGRlci5pc1ByZXZpZXdpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIj48L21ldGE+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAge0J1aWxkZXIuaXNCcm93c2VyICYmIDxEZWZhdWx0RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz59XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UgfSA9IHBhZ2U/LmRhdGEhIHx8IHt9XG4gIEJ1aWxkZXIuaXNTdGF0aWMgPSB0cnVlO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7dGl0bGUgJiYgKFxuICAgICAgICA8TmV4dFNlb1xuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgICB0eXBlOiAnd2Vic2l0ZScsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgLi4uKGltYWdlICYmIHtcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdXJsOiBpbWFnZSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgIGFsdDogdGl0bGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPEJ1aWxkZXJDb21wb25lbnRcbiAgICAgICAgb3B0aW9ucz17eyBpbmNsdWRlUmVmczogdHJ1ZSB9IGFzIGFueX1cbiAgICAgICAgbW9kZWw9XCJwYWdlXCJcbiAgICAgICAgZGF0YT17eyB0aGVtZSB9fVxuICAgICAgICByZW5kZXJMaW5rPXsocHJvcHM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChwcm9wcy50YXJnZXQgPT09ICdfYmxhbmsnKSB7XG4gICAgICAgICAgICByZXR1cm4gPFRoZW1lZC5hIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDxUaGVtZWQuYSB7Li4ucHJvcHN9IGFzPXtMaW5rfSAvPlxuICAgICAgICB9fVxuICAgICAgICB7Li4uKHBhZ2UgJiYgeyBjb250ZW50OiBwYWdlIH0pfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5QYXRoLkxheW91dCA9IExheW91dFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJ1aWxkZXIuaW8vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJ1aWxkZXIuaW8vc2RrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBidWlsZGVyLmlvL3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBidWlsZGVyLmlvL3dpZGdldHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL2NvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL21hdGNoLW1lZGlhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0aGVtZS11aS9tZHhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL3ByZXNldHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInB1cmUtcmVhY3QtY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ByaW5nLW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9waWZ5LWJ1eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9