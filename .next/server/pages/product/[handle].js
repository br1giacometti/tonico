module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/product/[handle]": 0
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
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[handle].tsx");
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

/***/ "./pages/product/[handle].tsx":
/*!************************************!*\
  !*** ./pages/product/[handle].tsx ***!
  \************************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Handle; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common */ "./components/common/index.ts");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @builder.io/react */ "@builder.io/react");
/* harmony import */ var _builder_io_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_builder_io_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_resolve_builder_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/resolve-builder-content */ "./lib/resolve-builder-content.ts");
/* harmony import */ var _blocks_ProductView_ProductView_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/ProductView/ProductView.builder */ "./blocks/ProductView/ProductView.builder.ts");
/* harmony import */ var _config_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @config/builder */ "./config/builder.ts");
/* harmony import */ var _lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks/src/api/operations-builder */ "./lib/shopify/storefront-data-hooks/src/api/operations-builder.ts");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_get_layout_props__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @lib/get-layout-props */ "./lib/get-layout-props.ts");


var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\pages\\product\\[handle].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["builder"].init(_config_builder__WEBPACK_IMPORTED_MODULE_6__["default"].apiKey);
_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["Builder"].isStatic = true;
const builderModel = 'product-page';
async function getStaticProps({
  params,
  locale
}) {
  const product = await Object(_lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_7__["getProduct"])(_config_builder__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handle: params === null || params === void 0 ? void 0 : params.handle
  });
  const page = await Object(_lib_resolve_builder_content__WEBPACK_IMPORTED_MODULE_4__["resolveBuilderContent"])(builderModel, {
    productHandle: params === null || params === void 0 ? void 0 : params.handle,
    locale
  });
  return {
    props: _objectSpread({
      page: page || null,
      product: product || null
    }, await Object(_lib_get_layout_props__WEBPACK_IMPORTED_MODULE_11__["getLayoutProps"])())
  };
}
async function getStaticPaths({
  locales
}) {
  const paths = await Object(_lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_7__["getAllProductPaths"])(_config_builder__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return {
    paths: paths.map(path => `/product/${path}`),
    fallback: 'blocking'
  };
}
function Handle({
  product,
  page
}) {
  _builder_io_react__WEBPACK_IMPORTED_MODULE_3__["Builder"].isStatic = true;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const isLive = !_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["Builder"].isEditing && !_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["Builder"].isPreviewing;
  const {
    theme
  } = Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["useThemeUI"])(); // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed

  if (!product && isLive) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "robots",
          content: "noindex"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_8___default.a, {
        statusCode: 404
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

  return router.isFallback && isLive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, this) // TODO (BC) Add Skeleton Views
  :
  /*#__PURE__*/
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["BuilderComponent"], _objectSpread({
    isStatic: true,
    model: builderModel,
    data: {
      product,
      theme
    }
  }, page && {
    content: page
  }), product.id, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
Handle.Layout = _components_common__WEBPACK_IMPORTED_MODULE_2__["Layout"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2Jsb2Nrcy9Qcm9kdWN0R3JpZC9Qcm9kdWN0R3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL1Byb2R1Y3RWaWV3L1Byb2R1Y3RWaWV3LmJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9DYXJ0SXRlbS9DYXJ0SXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L0NhcnRJdGVtL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9DYXJ0U2lkZWJhclZpZXcvQ2FydFNpZGViYXJWaWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQvQ2FydFNpZGViYXJWaWV3L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9GZWF0dXJlQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9IZWFkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vTm9TU1IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL09wdGlvblBpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vUHJvZHVjdENhcmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1Byb2R1Y3RDYXJkRGVtby50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vU2VhcmNoYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9VbnRpbEludGVyYWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9Vc2VyTmF2LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0Fycm93TGVmdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9CYWcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQ2hlY2sudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQ2hldnJvblVwLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0Nyb3NzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0RvdWJsZUNoZXZyb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvR2l0aHViLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0hlYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0luZm8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvTWludXMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvTW9vbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9QbHVzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1JpZ2h0QXJyb3cudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvU3VuLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1RyYXNoLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1ZlcmNlbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0ltYWdlQ2Fyb3VzZWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTGluay9MaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0xpbmsvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9Mb2FkaW5nRG90cy9Mb2FkaW5nRG90cy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTG9hZGluZ0RvdHMvTG9hZGluZ0RvdHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTG9hZGluZ0RvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvU2lkZWJhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL2NvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvc2hvcGlmeS50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2dldC1sYXlvdXQtcHJvcHMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hvb2tzL3VzZUFjY2VwdENvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Jlc29sdmUtYnVpbGRlci1jb250ZW50LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL0NvbW1lcmNlUHJvdmlkZXIudHN4Iiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9hcGkvb3BlcmF0aW9ucy1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VBZGRJdGVtVG9DYXJ0LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlQWRkSXRlbXNUb0NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VDYXJ0LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlQ2FydENvdW50LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlQ2FydEl0ZW1zLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlQ2hlY2tvdXRVcmwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VDbGllbnRVbnNhZmUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VHZXRMaW5lSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZVJlbW92ZUl0ZW1Gcm9tQ2FydC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZVJlbW92ZUl0ZW1zRnJvbUNhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VTZXRDYXJ0VW5zYWZlLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlVXBkYXRlSXRlbVF1YW50aXR5LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvTG9jYWxTdG9yYWdlL0xvY2FsU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL0xvY2FsU3RvcmFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL0xvY2FsU3RvcmFnZS9rZXlzLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy90eXBlcy9pc0NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZXJyb3IudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Vycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdC9baGFuZGxlXS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJ1aWxkZXIuaW8vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYnVpbGRlci5pby9zZGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYnVpbGRlci5pby91dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBidWlsZGVyLmlvL3dpZGdldHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGhlbWUtdWkvY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0aGVtZS11aS9tYXRjaC1tZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0aGVtZS11aS9wcmVzZXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1cmUtcmVhY3QtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmctbW9kYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9waWZ5LWJ1eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsiUHJvZHVjdEdyaWQiLCJwcm9kdWN0cyIsImluaXRpYWxQcm9kdWN0cyIsImNvbGxlY3Rpb24iLCJwcm9kdWN0c0xpc3QiLCJvZmZzZXQiLCJsaW1pdCIsImNhcmRQcm9wcyIsImhpZ2hsaWdodENhcmQiLCJzZXRQcm9kdWN0cyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0cyIsInByb21pc2VzIiwibWFwIiwiZW50cnkiLCJwcm9kdWN0IiwiZmlsdGVyIiwiaGFuZGxlIiwiZ2V0UHJvZHVjdCIsImJ1aWxkZXJDb25maWciLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2hDb2xsZWN0aW9uIiwicmVzdWx0IiwiZ2V0Q29sbGVjdGlvbiIsIlByb2R1Y3RDb21wb25lbnQiLCJwcm9jZXNzIiwiZW52IiwiSVNfREVNTyIsIlByb2R1Y3RDYXJkRGVtbyIsIlByb2R1Y3RDYXJkIiwic2xpY2UiLCJpIiwiU3RyaW5nIiwiaWQiLCJpbmRleCIsImlzRGVtbyIsIkJvb2xlYW4iLCJMYXp5UHJvZHVjdFZpZXciLCJkeW5hbWljIiwic3NyIiwicmVzdHJpY3RlZFJlZ2lzdGVyIiwibmFtZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0cyIsImJpbmRpbmdzIiwiaW5wdXRzIiwidHlwZSIsInJpY2hUZXh0IiwiaGVscGVyVGV4dCIsImNvbXBvbmVudCIsIm9wdGlvbnMiLCJtb2RlbHMiLCJCdWlsZGVyIiwiaXNFZGl0aW5nIiwiaW5jbHVkZXMiLCJidWlsZGVyIiwiZWRpdGluZ01vZGVsIiwicmVnaXN0ZXJDb21wb25lbnQiLCJDYXJ0SXRlbSIsIml0ZW0iLCJjdXJyZW5jeUNvZGUiLCJ1cGRhdGVJdGVtIiwidXNlVXBkYXRlSXRlbVF1YW50aXR5IiwicmVtb3ZlSXRlbSIsInVzZVJlbW92ZUl0ZW1Gcm9tQ2FydCIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJyZW1vdmluZyIsInNldFJlbW92aW5nIiwidXBkYXRlUXVhbnRpdHkiLCJ2YXJpYW50IiwiaGFuZGxlUXVhbnRpdHkiLCJlIiwidmFsIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJpc0ludGVnZXIiLCJoYW5kbGVCbHVyIiwiaW5jcmVhc2VRdWFudGl0eSIsIm4iLCJoYW5kbGVSZW1vdmUiLCJlcnJvciIsImNvbnNvbGUiLCJ3aWR0aCIsIm0iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsdFRleHQiLCJzcmMiLCJMaW5rIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGl0bGUiLCJtYXJnaW5MZWZ0IiwiZ2V0UHJpY2UiLCJwcmljZVYyIiwiYW1vdW50IiwibXQiLCJtYiIsImxpc3RTdHlsZSIsImp1c3RpZnlJdGVtcyIsImhlaWdodCIsInRleHRBbGlnbiIsInNlbGVjdGVkT3B0aW9ucyIsIm9wdGlvbiIsIkNhcnRTaWRlYmFyVmlldyIsImNoZWNrb3V0VXJsIiwidXNlQ2hlY2tvdXRVcmwiLCJjYXJ0IiwidXNlQ2FydCIsInN1YlRvdGFsIiwic3VidG90YWxQcmljZSIsInRvdGFsIiwiaXRlbXMiLCJsaW5lSXRlbXMiLCJpc0VtcHR5IiwibGVuZ3RoIiwiY2FydFVwc2VsbCIsInNldENhcnRVcHNlbGwiLCJmZXRjaENvbnRlbnQiLCJjYXJ0VXBzZWxsQ29udGVudCIsImdldCIsImNhY2hlYnVzdCIsImlzRGV2IiwidXNlckF0dHJpYnV0ZXMiLCJpdGVtSW5DYXJ0IiwidG9Qcm9taXNlIiwib3ZlcmZsb3ciLCJwYWRkaW5nQm90dG9tIiwiYmciLCJmbGV4RGlyZWN0aW9uIiwicHgiLCJjb2xvciIsIm1pbldpZHRoIiwicGFkZGluZ0xlZnQiLCJteSIsInAiLCJGZWF0dXJlQmFyIiwiYWN0aW9uIiwiaGlkZSIsImRlbGF5IiwiZGVsYXlQYXNzZWQiLCJzZXREZWxheVBhc3NlZCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiSGVhZCIsInByb3BzIiwic2VvSW5mbyIsIkxheW91dCIsImNoaWxkcmVuIiwicGFnZVByb3BzIiwiYnVpbGRlclRoZW1lIiwidGhlbWUiLCJpc0xpdmUiLCJpc1ByZXZpZXdpbmciLCJzaG9waWZ5Q29uZmlnIiwiY29udGVudCIsImRhdGEiLCJzaXRlU2V0dGluZ3MiLCJjb2xvck92ZXJyaWRlcyIsInNpdGVTZW9JbmZvIiwic2l0ZUluZm9ybWF0aW9uIiwic2VvQ29uZmlnIiwiSW5uZXJMYXlvdXQiLCJ0aGVtZU5hbWUiLCJ0aGVtZXNNYXAiLCJjb2xvcnMiLCJkaXNwbGF5U2lkZWJhciIsImNsb3NlU2lkZWJhciIsInVzZVVJIiwiYWNjZXB0ZWRDb29raWVzIiwib25BY2NlcHRDb29raWVzIiwidXNlQWNjZXB0Q29va2llcyIsIm1hcmdpbiIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwicHJldmlld2luZ01vZGVsIiwiTmF2YmFyIiwiYW5ub3VuY2VtZW50Iiwic2V0QW5ub3VuY2VtZW50IiwidXNlVGhlbWVVSSIsIm5hdmlnYXRpb25MaW5rcyIsImxvZ28iLCJhbm91bmNlbWVudENvbnRlbnQiLCJweSIsInBvc2l0aW9uIiwiZmxleEJhc2lzIiwibGluayIsInRyYW5zZm9ybSIsImxlZnQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0IiwiTm9TU1IiLCJza2VsZXRvbiIsInJlbmRlciIsInNldFJlbmRlciIsIk9wdGlvblBpY2tlciIsIm9uQ2hhbmdlIiwic2VsZWN0ZWQiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsImltZ1ByaW9yaXR5IiwiaW1nTG9hZGluZyIsImltZ1NpemVzIiwiaW1nTGF5b3V0IiwicHJvZHVjdFZhcmlhbnQiLCJ2YXJpYW50cyIsInByaWNlIiwiZmxleEdyb3ciLCJpbWFnZXMiLCJzaG93QWx0ZXJuYXRlIiwic2V0U2hvd0FsdGVybmF0ZSIsImNhblRvZ2dsZSIsInNldENhblRvZ2dsZSIsImNvbXBhcmVfYXRfcHJpY2UiLCJhbHRlcm5hdGVJbWFnZSIsIlNlYXJjaGJhciIsInJvdXRlciIsInVzZVJvdXRlciIsInEiLCJxdWVyeSIsImlzT3BlbiIsInNldElzT3BlbiIsImJ1dHRvblJlZiIsInVzZVJlZiIsImFzUGF0aCIsInNwbGl0Iiwic3R5bGUiLCJ0b3AiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwidGVybSIsIm9wIiwicGF0aG5hbWUiLCJCdXR0b24iLCJTZWFyY2hNb2RhbENvbnRlbnQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJpbml0aWFsU2VhcmNoIiwic2VhcmNoVGVybSIsInJlc3VsdHMiLCJzZWFyY2hQcm9kdWN0cyIsIm9uU2VhcmNoIiwidGhyb3R0bGVTZWFyY2giLCJ1c2VDYWxsYmFjayIsInRocm90dGxlIiwibWFyZ2luQm90dG9tIiwiZXZlbnQiLCJVbnRpbEludGVyYWN0aW9uIiwiVXNlck5hdiIsImNsYXNzTmFtZSIsInRvZ2dsZVNpZGViYXIiLCJBcnJvd0xlZnQiLCJCYWciLCJDaGVjayIsIkNoZXZyb25VcCIsIkNyb3NzIiwiRG91YmxlQ2hldnJvbiIsIkdpdGh1YiIsIkhlYXJ0IiwiSW5mbyIsIk1pbnVzIiwiTW9vbiIsIlBsdXMiLCJSaWdodEFycm93IiwiU3VuIiwiVHJhc2giLCJWZXJjZWwiLCJMYXp5Q2Fyb3VzZWwiLCJJbWFnZUNhcm91c2VsIiwib25UaHVtYm5haWxDbGljayIsInNob3dab29tIiwiY3VycmVudFNsaWRlIiwiaW1hZ2VQcm9wcyIsImhyZWYiLCJMb2FkaW5nRG90cyIsInMiLCJyb290IiwiU2lkZWJhciIsIm9wZW4iLCJvbkNsb3NlIiwidXNlUmVzcG9uc2l2ZVZhbHVlIiwicmlnaHQiLCJmcm9tIiwiZW50ZXIiLCJsZWF2ZSIsImluaXRpYWxTdGF0ZSIsIlVJQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiVUlQcm92aWRlciIsInN0YXRlIiwic2V0U3RhdGUiLCJvcGVuU2lkZWJhciIsInByZXYiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVuZGVmaW5lZCIsIkVycm9yIiwiTWFuYWdlZFVJQ29udGV4dCIsImFwaUtleSIsInByb2R1Y3RzTW9kZWwiLCJjb2xsZWN0aW9uc01vZGVsIiwiZG9tYWluIiwic3RvcmVmcm9udEFjY2Vzc1Rva2VuIiwiU0hPUElGWV9TVE9SRUZST05UX0FQSV9UT0tFTiIsInRoZW1lcyIsImdldExheW91dFByb3BzIiwidGFyZ2V0aW5nQXR0cmlidXRlcyIsInJlc29sdmVCdWlsZGVyQ29udGVudCIsIkNPT0tJRV9OQU1FIiwic2V0QWNjZXB0ZWRDb29raWVzIiwiQ29va2llcyIsImFjY2VwdENvb2tpZXMiLCJzZXQiLCJleHBpcmVzIiwiaW5pdCIsImlzU3RhdGljIiwibW9kZWxOYW1lIiwicGFnZSIsImluY2x1ZGVSZWZzIiwicHJldmlldyIsImdldEFzeW5jUHJvcHMiLCJDb2xsZWN0aW9uQm94IiwiUHJvZHVjdEJveCIsIlByb2R1Y3RDb2xsZWN0aW9uR3JpZCIsIkNvbW1lcmNlUHJvdmlkZXIiLCJpbml0aWFsQ2FydCIsIkxvY2FsU3RvcmFnZSIsImdldEluaXRpYWxDYXJ0Iiwic2V0Q2FydCIsImlzQ3VzdG9tRG9tYWluIiwiY2xpZW50IiwiU2hvcGlmeUJ1eSIsImJ1aWxkQ2xpZW50IiwiZ2V0TmV3Q2FydCIsIm5ld0NhcnQiLCJjaGVja291dCIsImNyZWF0ZSIsInJlZnJlc2hFeGlzdGluZ0NhcnQiLCJjYXJ0SWQiLCJyZWZyZXNoZWRDYXJ0IiwiZmV0Y2giLCJjYXJ0SGFzQmVlblB1cmNoYXNlZCIsImNvbXBsZXRlZEF0IiwiTG9jYWxTdG9yYWdlS2V5cyIsIkNBUlQiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29udGV4dCIsImdldEFsbFByb2R1Y3RzIiwiY29uZmlnIiwicHJvZHVjdHNDb250ZW50IiwidGhlbiIsInJlcyIsImpzb24iLCJwciIsInNlYXJjaFN0cmluZyIsInFzIiwiZmllbGRzIiwiYWxsb3dEb3RzIiwiJHJlZ2V4IiwiJG9wdGlvbnMiLCJnZXRBbGxQcm9kdWN0UGF0aHMiLCIkZXEiLCJ3aXRoQ29udGVudCIsImdldEFsbENvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnNDb250ZW50Iiwic2VhcmNoQ29sbGVjdGlvbnMiLCJnZXRBbGxDb2xsZWN0aW9uUGF0aHMiLCJjb2xsZWN0aW9ucyIsInByb2R1Y3RzUXVlcnkiLCJuZXh0UGFnZUN1cnNvciIsImhhc05leHRQYWdlIiwiZ2V0Q29sbGVjdGlvblByb2R1Y3RzIiwidXNlQWRkSXRlbVRvQ2FydCIsImFkZEl0ZW1zVG9DYXJ0IiwidXNlQWRkSXRlbXNUb0NhcnQiLCJhZGRJdGVtVG9DYXJ0IiwidmFyaWFudElkIiwiY3VzdG9tQXR0cmlidXRlcyIsImZvckVhY2giLCJhZGRMaW5lSXRlbXMiLCJ1c2VDYXJ0Q291bnQiLCJjb3VudCIsInJlZHVjZSIsInRvdGFsQ291bnQiLCJsaW5lSXRlbSIsInVzZUNhcnRJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsIndlYlVybCIsInVzZUNsaWVudFVuc2FmZSIsIndhcm4iLCJ1c2VHZXRMaW5lSXRlbSIsImNhcnRJdGVtcyIsImdldExpbmVJdGVtIiwiZmluZCIsImNhcnRJdGVtIiwicmVtb3ZlSXRlbXNGcm9tQ2FydCIsInVzZVJlbW92ZUl0ZW1zRnJvbUNhcnQiLCJyZW1vdmVJdGVtRnJvbUNhcnQiLCJ2YXJpYW50SWRzIiwibGluZUl0ZW1JZHMiLCJyZW1vdmVMaW5lSXRlbXMiLCJ1c2VTZXRDYXJ0VW5zYWZlIiwidXBkYXRlSXRlbVF1YW50aXR5IiwidXBkYXRlTGluZUl0ZW1zIiwia2V5IiwiaXNCcm93c2VyIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJleGlzdGluZ0NhcnRTdHJpbmciLCJleGlzdGluZ0NhcnQiLCJwYXJzZSIsImlzQ2FydCIsIkNIRUNLT1VUX0lEIiwicHJlcGFyZVZhcmlhbnRzV2l0aE9wdGlvbnMiLCJvcHRpb25zRGljdGlvbmFyeSIsInRvTG93ZXJDYXNlIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsInByZXBhcmVWYXJpYW50c0ltYWdlcyIsIm9wdGlvbktleSIsImltYWdlRGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJwb3RlbnRpYWxDYXJ0Iiwia2luZCIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwic2l6ZXMiLCJsYXlvdXQiLCJwZXJjZW50U2l6ZXMiLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwid2lkdGhzIiwidyIsInNyY1NldCIsImdldFdpZHRocyIsImxhc3QiLCJsb2FkIiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJyZXN0IiwidW5zaXplZCIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwiYm94U2l6aW5nIiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicHJlZmV0Y2hlZCIsImVyciIsImN1ckxvY2FsZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwibG9jYWxlRG9tYWluIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJkb2N1bWVudCIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkb21haW5Ib3N0bmFtZSIsImRvbWFpbkl0ZW0iLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJyZXF1aXJlIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJkZXRlY3RlZERvbWFpbiIsImFkZFBhdGhQcmVmaXgiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzUHJldmlldyIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImRlbEJhc2VQYXRoIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYWRkTG9jYWxlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInN0YXR1c0NvZGVzIiwic3RhdHVzQ29kZSIsInN0eWxlcyIsIl9faHRtbCIsIl9nZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJkZXNjIiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJoMSIsImJvcmRlclJpZ2h0IiwibWFyZ2luUmlnaHQiLCJoMiIsImJ1aWxkZXJNb2RlbCIsImdldFN0YXRpY1Byb3BzIiwicHJvZHVjdEhhbmRsZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmYWxsYmFjayIsIkhhbmRsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Ozs7Ozs7O0FDeEZBLDhDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QvW2hhbmRsZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9wcm9kdWN0L1toYW5kbGVdXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi8uLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2R1Y3QvW2hhbmRsZV0udHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTG9hZGluZ0RvdHMgfSBmcm9tICdAY29tcG9uZW50cy91aSdcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAdGhlbWUtdWkvY29tcG9uZW50cydcbmltcG9ydCB7IFByb2R1Y3RDYXJkUHJvcHMgfSBmcm9tICdAY29tcG9uZW50cy9jb21tb24vUHJvZHVjdENhcmQnXG5pbXBvcnQgeyBQcm9kdWN0Q2FyZERlbW8sIFByb2R1Y3RDYXJkIH0gZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uJ1xuXG5pbXBvcnQge1xuICBnZXRDb2xsZWN0aW9uLFxuICBnZXRQcm9kdWN0LFxufSBmcm9tICdAbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9hcGkvb3BlcmF0aW9ucy1idWlsZGVyJ1xuaW1wb3J0IGJ1aWxkZXJDb25maWcgZnJvbSAnQGNvbmZpZy9idWlsZGVyJ1xuaW50ZXJmYWNlIEhpZ2hsaWdodGVkQ2FyZFByb3BzIGV4dGVuZHMgT21pdDxQcm9kdWN0Q2FyZFByb3BzLCAncHJvZHVjdCc+IHtcbiAgaW5kZXg6IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RHcmlkUHJvcHMge1xuICBwcm9kdWN0cz86IFNob3BpZnlCdXkuUHJvZHVjdFtdXG4gIHByb2R1Y3RzTGlzdD86IEFycmF5PHsgcHJvZHVjdDogc3RyaW5nIH0+XG4gIGNvbGxlY3Rpb24/OiBzdHJpbmcgfCBhbnkgLy8gU2hvcGlmeUJ1eS5Db2xsZWN0aW9uXG4gIG9mZnNldDogbnVtYmVyXG4gIGxpbWl0OiBudW1iZXJcbiAgY2FyZFByb3BzOiBPbWl0PFByb2R1Y3RDYXJkUHJvcHMsICdwcm9kdWN0Jz5cbiAgaGlnaGxpZ2h0Q2FyZD86IEhpZ2hsaWdodGVkQ2FyZFByb3BzXG59XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0R3JpZDogRkM8UHJvZHVjdEdyaWRQcm9wcz4gPSAoe1xuICBwcm9kdWN0czogaW5pdGlhbFByb2R1Y3RzLFxuICBjb2xsZWN0aW9uLFxuICBwcm9kdWN0c0xpc3QsXG4gIG9mZnNldCA9IDAsXG4gIGxpbWl0ID0gMTAsXG4gIGNhcmRQcm9wcyxcbiAgaGlnaGxpZ2h0Q2FyZCxcbn0pID0+IHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShpbml0aWFsUHJvZHVjdHMgfHwgW10pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBjb25zdCBwcm9taXNlcyA9IHByb2R1Y3RzTGlzdCFcbiAgICAgICAgLm1hcCgoZW50cnkpID0+IGVudHJ5LnByb2R1Y3QpXG4gICAgICAgIC5maWx0ZXIoKGhhbmRsZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB0eXBlb2YgaGFuZGxlID09PSAnc3RyaW5nJylcbiAgICAgICAgLm1hcChcbiAgICAgICAgICBhc3luYyAoaGFuZGxlOiBzdHJpbmcpID0+IGF3YWl0IGdldFByb2R1Y3QoYnVpbGRlckNvbmZpZywgeyBoYW5kbGUgfSlcbiAgICAgICAgKVxuICAgICAgc2V0UHJvZHVjdHMoYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9XG4gICAgaWYgKHByb2R1Y3RzTGlzdCAmJiAhaW5pdGlhbFByb2R1Y3RzKSB7XG4gICAgICBnZXRQcm9kdWN0cygpXG4gICAgfVxuICB9LCBbcHJvZHVjdHNMaXN0LCBpbml0aWFsUHJvZHVjdHNdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hDb2xsZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0Q29sbGVjdGlvbihidWlsZGVyQ29uZmlnLCB7XG4gICAgICAgIGhhbmRsZTogY29sbGVjdGlvbixcbiAgICAgIH0pXG4gICAgICBzZXRQcm9kdWN0cyhyZXN1bHQucHJvZHVjdHMpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbGxlY3Rpb24gPT09ICdzdHJpbmcnICYmICFpbml0aWFsUHJvZHVjdHMpIHtcbiAgICAgIGZldGNoQ29sbGVjdGlvbigpXG4gICAgfVxuICB9LCBbY29sbGVjdGlvbl0pXG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmdEb3RzIC8+XG4gIH1cbiAgY29uc3QgUHJvZHVjdENvbXBvbmVudDogYW55ID0gcHJvY2Vzcy5lbnYuSVNfREVNT1xuICAgID8gUHJvZHVjdENhcmREZW1vXG4gICAgOiBQcm9kdWN0Q2FyZFxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgZ2FwPXsyfSB3aWR0aD17WycxMDAlJywgJzQwJScsICcyNCUnXX0+XG4gICAgICB7cHJvZHVjdHMuc2xpY2Uob2Zmc2V0LCBsaW1pdCkubWFwKChwcm9kdWN0LCBpKSA9PiAoXG4gICAgICAgIDxQcm9kdWN0Q29tcG9uZW50XG4gICAgICAgICAga2V5PXtTdHJpbmcocHJvZHVjdC5pZCkgKyBpfVxuICAgICAgICAgIHsuLi4oaGlnaGxpZ2h0Q2FyZD8uaW5kZXggPT09IGkgPyBoaWdobGlnaHRDYXJkIDogY2FyZFByb3BzKX1cbiAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9HcmlkPlxuICApXG59XG4iLCJpbXBvcnQgeyBCdWlsZGVyLCBidWlsZGVyIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcmVhY3QnXG5pbXBvcnQgeyByZXN0cmljdGVkUmVnaXN0ZXIgfSBmcm9tICdibG9ja3MvdXRpbHMnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5cbmNvbnN0IGlzRGVtbyA9IEJvb2xlYW4ocHJvY2Vzcy5lbnYuSVNfREVNTylcbmNvbnN0IExhenlQcm9kdWN0VmlldyA9IGR5bmFtaWMoXG4gICgpID0+XG4gICAgaXNEZW1vXG4gICAgICA/IGltcG9ydChgYmxvY2tzL1Byb2R1Y3RWaWV3L1Byb2R1Y3RWaWV3RGVtb2ApXG4gICAgICA6IGltcG9ydChgYmxvY2tzL1Byb2R1Y3RWaWV3L1Byb2R1Y3RWaWV3YCksXG4gIHsgc3NyOiB0cnVlIH1cbilcblxucmVzdHJpY3RlZFJlZ2lzdGVyKFxuICBMYXp5UHJvZHVjdFZpZXcsXG4gIHtcbiAgICBuYW1lOiAnUHJvZHVjdFZpZXcnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly91bnBrZy5jb20vY3NzLmdnQDIuMC4wL2ljb25zL3N2Zy9pbnBpY3R1cmUuc3ZnJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdQcm9kdWN0IGRldGFpbHMsIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gcHJvZHVjdCBwYWdlIHRlbXBsYXRlLCBkeW5hbWljYWxseSBiaW5kIHRvIHByb2R1Y3QgaW4gY29udGV4dC4nLFxuICAgIGRlZmF1bHRzOiB7XG4gICAgICBiaW5kaW5nczoge1xuICAgICAgICAnY29tcG9uZW50Lm9wdGlvbnMucHJvZHVjdCc6ICdzdGF0ZS5wcm9kdWN0JyxcbiAgICAgICAgJ2NvbXBvbmVudC5vcHRpb25zLnRpdGxlJzogJ3N0YXRlLnByb2R1Y3QudGl0bGUnLFxuICAgICAgICAnY29tcG9uZW50Lm9wdGlvbnMuZGVzY3JpcHRpb24nOiAnc3RhdGUucHJvZHVjdC5kZXNjcmlwdGlvbkh0bWwnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBbJ3Byb2R1Y3QtcGFnZScsICd0aGVtZSddXG4pXG5cbnJlc3RyaWN0ZWRSZWdpc3RlcihcbiAgTGF6eVByb2R1Y3RWaWV3LFxuICB7XG4gICAgbmFtZTogJ1Byb2R1Y3RCb3gnLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAncHJvZHVjdCcsXG4gICAgICAgIHR5cGU6IGAke2lzRGVtbyA/ICdTaG9waWZ5U3RvcmUnIDogJ1Nob3BpZnknfVByb2R1Y3RIYW5kbGVgLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgcmljaFRleHQ6IHRydWUsXG4gICAgICAgIHR5cGU6ICdodG1sJyxcbiAgICAgICAgaGVscGVyVGV4dDogJ092ZXJyaWRlIHByb2R1Y3QgZGVzY3JpcHRpb24gZnJvbSBzaG9waWZ5JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0aXRsZScsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaGVscGVyVGV4dDogJ092ZXJyaWRlIHByb2R1Y3QgdGl0bGUgZnJvbSBzaG9waWZ5JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBpbWFnZTogJ2h0dHBzOi8vdW5wa2cuY29tL2Nzcy5nZ0AyLjAuMC9pY29ucy9zdmcvZXJlYWRlci5zdmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hvb3NlIGEgcHJvZHVjdCB0byBzaG93IGl0cyBkZXRhaWxzIG9uIHBhZ2UnLFxuICB9LFxuICBbJ3BhZ2UnLCAnY29sbGVjdGlvbi1wYWdlJywgJ3RoZW1lJ11cbilcbiIsImltcG9ydCB7IEJ1aWxkZXIsIENvbXBvbmVudCwgYnVpbGRlciB9IGZyb20gJ0BidWlsZGVyLmlvL3NkaydcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RyaWN0ZWRSZWdpc3RlcihcbiAgY29tcG9uZW50OiBhbnksXG4gIG9wdGlvbnM6IENvbXBvbmVudCxcbiAgbW9kZWxzOiBzdHJpbmdbXVxuKSB7XG4gIGlmICghQnVpbGRlci5pc0VkaXRpbmcgfHwgbW9kZWxzLmluY2x1ZGVzKGJ1aWxkZXIuZWRpdGluZ01vZGVsISkpIHtcbiAgICByZXR1cm4gQnVpbGRlci5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMpXG4gIH1cbn1cbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFRoZW1lZCwganN4LCBHcmlkLCBCdXR0b24sIElucHV0LCBUZXh0LCBJY29uQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgUGx1cywgTWludXMgfSBmcm9tICdAY29tcG9uZW50cy9pY29ucydcbmltcG9ydCB7IGdldFByaWNlIH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvcHJvZHVjdCdcbmltcG9ydCB7XG4gIHVzZVVwZGF0ZUl0ZW1RdWFudGl0eSxcbiAgdXNlUmVtb3ZlSXRlbUZyb21DYXJ0LFxufSBmcm9tICdAbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzJ1xuXG5jb25zdCBDYXJ0SXRlbSA9ICh7XG4gIGl0ZW0sXG4gIGN1cnJlbmN5Q29kZSxcbn06IHtcbiAgaXRlbTogLypTaG9waWZ5QnV5LkxpbmVJdGVtIHRvZG86IGNoZWNrIGlmIHVwZGF0ZWQgdHlwZXMqLyBhbnlcbiAgY3VycmVuY3lDb2RlOiBzdHJpbmdcbn0pID0+IHtcbiAgY29uc3QgdXBkYXRlSXRlbSA9IHVzZVVwZGF0ZUl0ZW1RdWFudGl0eSgpXG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSB1c2VSZW1vdmVJdGVtRnJvbUNhcnQoKVxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKGl0ZW0ucXVhbnRpdHkpXG4gIGNvbnN0IFtyZW1vdmluZywgc2V0UmVtb3ZpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHVwZGF0ZVF1YW50aXR5ID0gYXN5bmMgKHF1YW50aXR5OiBudW1iZXIpID0+IHtcbiAgICBhd2FpdCB1cGRhdGVJdGVtKGl0ZW0udmFyaWFudC5pZCwgcXVhbnRpdHkpXG4gIH1cbiAgY29uc3QgaGFuZGxlUXVhbnRpdHkgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWwgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpXG5cbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2YWwpICYmIHZhbCA+PSAwKSB7XG4gICAgICBzZXRRdWFudGl0eSh2YWwpXG4gICAgfVxuICB9XG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdmFsID0gTnVtYmVyKHF1YW50aXR5KVxuXG4gICAgaWYgKHZhbCAhPT0gaXRlbS5xdWFudGl0eSkge1xuICAgICAgdXBkYXRlUXVhbnRpdHkodmFsKVxuICAgIH1cbiAgfVxuICBjb25zdCBpbmNyZWFzZVF1YW50aXR5ID0gKG4gPSAxKSA9PiB7XG4gICAgY29uc3QgdmFsID0gTnVtYmVyKHF1YW50aXR5KSArIG5cblxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbCkgJiYgdmFsID49IDApIHtcbiAgICAgIHNldFF1YW50aXR5KHZhbClcbiAgICAgIHVwZGF0ZVF1YW50aXR5KHZhbClcbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFJlbW92aW5nKHRydWUpXG5cbiAgICB0cnkge1xuICAgICAgLy8gSWYgdGhpcyBhY3Rpb24gc3VjY2VlZHMgdGhlbiB0aGVyZSdzIG5vIG5lZWQgdG8gZG8gYHNldFJlbW92aW5nKHRydWUpYFxuICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSB2aWV3XG4gICAgICBhd2FpdCByZW1vdmVJdGVtKGl0ZW0udmFyaWFudC5pZClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIHNldFJlbW92aW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVzZXQgdGhlIHF1YW50aXR5IHN0YXRlIGlmIHRoZSBpdGVtIHF1YW50aXR5IGNoYW5nZXNcbiAgICBpZiAoaXRlbS5xdWFudGl0eSAhPT0gTnVtYmVyKHF1YW50aXR5KSkge1xuICAgICAgc2V0UXVhbnRpdHkoaXRlbS5xdWFudGl0eSlcbiAgICB9XG4gIH0sIFtpdGVtLnF1YW50aXR5XSlcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGdhcD17Mn0gc3g9e3sgd2lkdGg6ICcxMDAlJywgbTogMTIgfX0gY29sdW1ucz17WzJdfT5cbiAgICAgIDxkaXZcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBwYWRkaW5nOiAxLFxuICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBoZWlnaHQ9ezEzMH1cbiAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgIHVub3B0aW1pemVkXG4gICAgICAgICAgYWx0PXtpdGVtLnZhcmlhbnQuaW1hZ2UuYWx0VGV4dH1cbiAgICAgICAgICBzcmM9e2l0ZW0udmFyaWFudC5pbWFnZS5zcmN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgaHJlZj17YC9wcm9kdWN0LyR7aXRlbS52YXJpYW50LnByb2R1Y3QuaGFuZGxlfS9gfVxuICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAzLCBtOiAwLCBmb250V2VpZ2h0OiA3MDAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDQsXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2V0UHJpY2UoXG4gICAgICAgICAgICAgICAgaXRlbS52YXJpYW50LnByaWNlVjIuYW1vdW50LFxuICAgICAgICAgICAgICAgIGl0ZW0udmFyaWFudC5wcmljZVYyLmN1cnJlbmN5Q29kZSB8fCAnVVNEJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvPlxuICAgICAgICA8L1RoZW1lZC5kaXY+XG4gICAgICAgIDxUaGVtZWQudWwgc3g9e3sgbXQ6IDIsIG1iOiAwLCBwYWRkaW5nOiAwLCBsaXN0U3R5bGU6ICdub25lJyB9fT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaW5jcmVhc2VRdWFudGl0eSgtMSl9PlxuICAgICAgICAgICAgICAgIDxNaW51cyB3aWR0aD17MTh9IGhlaWdodD17MTh9IC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG1heD17OTl9XG4gICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaW5jcmVhc2VRdWFudGl0eSgxKX0+XG4gICAgICAgICAgICAgICAgPFBsdXMgd2lkdGg9ezE4fSBoZWlnaHQ9ezE4fSAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHtpdGVtLnZhcmlhbnQuc2VsZWN0ZWRPcHRpb25zLm1hcCgob3B0aW9uOiBhbnkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e29wdGlvbi52YWx1ZX0+XG4gICAgICAgICAgICAgIHtvcHRpb24ubmFtZX06e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVGhlbWVkLnVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9HcmlkPlxuICApXG59XG5cbi8qKlxuICogICAgICAgICBcblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IENhcnRJdGVtXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJ0SXRlbSdcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lZCwganN4LCBUZXh0LCBDYXJkLCBHcmlkLCBEaXZpZGVyLCBOYXZMaW5rIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFnIH0gZnJvbSAnQGNvbXBvbmVudHMvaWNvbnMnXG5pbXBvcnQgeyB1c2VDYXJ0LCB1c2VDaGVja291dFVybCB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3MnXG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi4vQ2FydEl0ZW0nXG5pbXBvcnQgeyBCdWlsZGVyQ29tcG9uZW50LCBidWlsZGVyIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcmVhY3QnXG5pbXBvcnQgZW52IGZyb20gJ0Bjb25maWcvZW52J1xuXG5jb25zdCBDYXJ0U2lkZWJhclZpZXc6IEZDID0gKCkgPT4ge1xuICBjb25zdCBjaGVja291dFVybCA9IHVzZUNoZWNrb3V0VXJsKClcbiAgY29uc3QgY2FydCA9IHVzZUNhcnQoKVxuICBjb25zdCBzdWJUb3RhbCA9IGNhcnQ/LnN1YnRvdGFsUHJpY2VcbiAgY29uc3QgdG90YWwgPSAnIC0gJ1xuXG4gIGNvbnN0IGl0ZW1zID0gY2FydD8ubGluZUl0ZW1zID8/IFtdXG4gIGNvbnN0IGlzRW1wdHkgPSBpdGVtcy5sZW5ndGggPT09IDBcbiAgY29uc3QgW2NhcnRVcHNlbGwsIHNldENhcnRVcHNlbGxdID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250ZW50KCkge1xuICAgICAgY29uc3QgaXRlbXMgPSBjYXJ0Py5saW5lSXRlbXMgfHwgW11cbiAgICAgIGNvbnN0IGNhcnRVcHNlbGxDb250ZW50ID0gYXdhaXQgYnVpbGRlclxuICAgICAgICAuZ2V0KCdjYXJ0LXVwc2VsbC1zaWRlYmFyJywge1xuICAgICAgICAgIGNhY2hlYnVzdDogZW52LmlzRGV2LFxuICAgICAgICAgIHVzZXJBdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBpdGVtSW5DYXJ0OiBpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS52YXJpYW50LnByb2R1Y3QuaGFuZGxlKSxcbiAgICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICBzZXRDYXJ0VXBzZWxsKGNhcnRVcHNlbGxDb250ZW50KVxuICAgIH1cbiAgICBmZXRjaENvbnRlbnQoKVxuICB9LCBbY2FydD8ubGluZUl0ZW1zXSlcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZWQuZGl2XG4gICAgICBzeD17e1xuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogNSxcbiAgICAgICAgYmc6ICd0ZXh0JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIHB4OiAyLFxuICAgICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgICAuLi4oaXNFbXB0eSAmJiB7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9KSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2lzRW1wdHkgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEJhZyAvPlxuICAgICAgICAgIFlvdXIgY2FydCBpcyBlbXB0eVxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgQmlzY3VpdCBvYXQgY2FrZSB3YWZlciBpY2luZyBpY2UgY3JlYW0gdGlyYW1pc3UgcHVkZGluZyBjdXBjYWtlLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gKFxuICAgICAgICAgICAgPENhcnRJdGVtXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgLy8gdG9kbyB1cGRhdGUgdHlwZXNcbiAgICAgICAgICAgICAgY3VycmVuY3lDb2RlPXtpdGVtLnZhcmlhbnQ/LnByaWNlVjI/LmN1cnJlbmN5Q29kZSB8fCAnVVNEJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPENhcmQgc3g9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtaW5XaWR0aDogJzEwcmVtJywgcGFkZGluZ0xlZnQ6IDUgfX0+XG4gICAgICAgICAgICA8R3JpZCBnYXA9ezF9IGNvbHVtbnM9ezJ9IHN4PXt7IG15OiAzIH19PlxuICAgICAgICAgICAgICA8VGV4dD5TdWJ0b3RhbDo8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT57c3ViVG90YWx9PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dD5TaGlwcGluZzo8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT4gLSA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0PlRheDogPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBzeD17eyBtYXJnaW5MZWZ0OiAnYXV0bycgfX0+IC0gPC9UZXh0PlxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgPEdyaWQgZ2FwPXsxfSBjb2x1bW5zPXsyfT5cbiAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cImJvbGRcIj5Fc3RpbWF0ZWQgVG90YWw6PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9sZFwiIHN4PXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICB7dG90YWx9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPEJ1aWxkZXJDb21wb25lbnQgY29udGVudD17Y2FydFVwc2VsbH0gbW9kZWw9XCJjYXJ0LXVwc2VsbC1zaWRlYmFyXCIgLz5cbiAgICAgICAgICB7Y2hlY2tvdXRVcmwgJiYgKFxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm5hdlwiXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIG06IDIsIHA6IDEyLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIGhyZWY9e2NoZWNrb3V0VXJsIX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJvY2VlZCB0byBDaGVja291dFxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L1RoZW1lZC5kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydFNpZGViYXJWaWV3XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJ0U2lkZWJhclZpZXcnXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENhcnRTaWRlYmFyVmlldyB9IGZyb20gJy4vQ2FydFNpZGViYXJWaWV3J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJ0SXRlbSB9IGZyb20gJy4vQ2FydEl0ZW0nXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVkLCBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IENlbnRlck1vZGFsLCBNb2RhbFRpdGxlLCBNb2RhbENsb3NlVGFyZ2V0IH0gZnJvbSAncmVhY3Qtc3ByaW5nLW1vZGFsJ1xuXG5pbnRlcmZhY2UgRmVhdHVyZUJhclByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgaGlkZT86IGJvb2xlYW5cbiAgYWN0aW9uPzogUmVhY3QuUmVhY3ROb2RlXG4gIGRlbGF5PzogbnVtYmVyXG59XG5cbmNvbnN0IEZlYXR1cmVCYXI6IFJlYWN0LkZDPEZlYXR1cmVCYXJQcm9wcz4gPSAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGFjdGlvbixcbiAgaGlkZSxcbiAgZGVsYXksXG59KSA9PiB7XG4gIGNvbnN0IFtkZWxheVBhc3NlZCwgc2V0RGVsYXlQYXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0RGVsYXlQYXNzZWQodHJ1ZSksIGRlbGF5IHx8IDYwMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICB9KVxuICByZXR1cm4gKFxuICAgIDxDZW50ZXJNb2RhbCBpc09wZW49e2RlbGF5UGFzc2VkICYmICFoaWRlfT5cbiAgICAgIDxNb2RhbFRpdGxlPnt0aXRsZX08L01vZGFsVGl0bGU+XG4gICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8VGhlbWVkLmRpdiBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcDogWzEsIDJdIH19PlxuICAgICAgICB7YWN0aW9uICYmIGFjdGlvbn1cbiAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICA8L0NlbnRlck1vZGFsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVCYXJcbiIsImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgRGVmYXVsdFNlbyB9IGZyb20gJ25leHQtc2VvJ1xuXG5jb25zdCBIZWFkOiBGQzx7IHNlb0luZm86IGFueSB9PiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RGVmYXVsdFNlbyB7Li4ucHJvcHMuc2VvSW5mb30gLz5cbiAgICAgIDxOZXh0SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiBrZXk9XCJzaXRlLW1hbmlmZXN0XCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjEvaW1hZ2UvYXNzZXRzJTJGWUpJR2I0aTAxanZ3MFNSZEw1QnQlMkYyZDg2YTViYjMwZjQ0ZDJkYjM1NjRhYTI5NjJiYjA5M1wiXG4gICAgICAgIC8+XG4gICAgICA8L05leHRIZWFkPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgTWFuYWdlZFVJQ29udGV4dCwgdXNlVUkgfSBmcm9tICdAY29tcG9uZW50cy91aS9jb250ZXh0J1xuaW1wb3J0IHsgSGVhZCwgTmF2YmFyIH0gZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uJ1xuaW1wb3J0IHsgdXNlQWNjZXB0Q29va2llcyB9IGZyb20gJ0BsaWIvaG9va3MvdXNlQWNjZXB0Q29va2llcydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJ0Bjb21wb25lbnRzL3VpJ1xuaW1wb3J0IHsgQ2FydFNpZGViYXJWaWV3IH0gZnJvbSAnQGNvbXBvbmVudHMvY2FydCdcbmltcG9ydCB7IENvbW1lcmNlUHJvdmlkZXIgfSBmcm9tICdAbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzJ1xuaW1wb3J0IHNob3BpZnlDb25maWcgZnJvbSAnQGNvbmZpZy9zaG9waWZ5J1xuaW1wb3J0IHsgYnVpbGRlciwgQnVpbGRlckNvbnRlbnQsIEJ1aWxkZXIgfSBmcm9tICdAYnVpbGRlci5pby9yZWFjdCdcbmltcG9ydCB0aGVtZXNNYXAgZnJvbSAnQGNvbmZpZy90aGVtZSdcbmltcG9ydCAnQGJ1aWxkZXIuaW8vd2lkZ2V0cydcbmltcG9ydCAncmVhY3Qtc3ByaW5nLW1vZGFsL3N0eWxlcy5jc3MnXG5pbXBvcnQgc2VvQ29uZmlnIGZyb20gJ0Bjb25maWcvc2VvLmpzb24nXG5pbXBvcnQgTm9TU1IgZnJvbSAnLi9Ob1NTUidcblxuY29uc3QgRmVhdHVyZUJhciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdAY29tcG9uZW50cy9jb21tb24vRmVhdHVyZUJhcicpLCB7XG4gIHNzcjogZmFsc2UsXG59KVxuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPHsgcGFnZVByb3BzOiBhbnkgfT4gPSAoeyBjaGlsZHJlbiwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgYnVpbGRlclRoZW1lID0gcGFnZVByb3BzLnRoZW1lXG4gIGNvbnN0IGlzTGl2ZSA9ICFCdWlsZGVyLmlzRWRpdGluZyAmJiAhQnVpbGRlci5pc1ByZXZpZXdpbmdcbiAgcmV0dXJuIChcbiAgICA8Q29tbWVyY2VQcm92aWRlciB7Li4uc2hvcGlmeUNvbmZpZ30+XG4gICAgICA8QnVpbGRlckNvbnRlbnRcbiAgICAgICAgaXNTdGF0aWNcbiAgICAgICAgey4uLihpc0xpdmUgJiYgeyBjb250ZW50OiBidWlsZGVyVGhlbWUgfSl9XG4gICAgICAgIG1vZGVsTmFtZT1cInRoZW1lXCJcbiAgICAgID5cbiAgICAgICAgeyhkYXRhLCBsb2FkaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKGxvYWRpbmcgJiYgIWJ1aWxkZXJUaGVtZSkge1xuICAgICAgICAgICAgcmV0dXJuICdsb2FkaW5nIC4uLidcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2l0ZVNldHRpbmdzID0gZGF0YT8uc2l0ZVNldHRpbmdzXG4gICAgICAgICAgY29uc3QgY29sb3JPdmVycmlkZXMgPSBkYXRhPy5jb2xvck92ZXJyaWRlc1xuICAgICAgICAgIGNvbnN0IHNpdGVTZW9JbmZvID0gZGF0YT8uc2l0ZUluZm9ybWF0aW9uXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYW5hZ2VkVUlDb250ZXh0IGtleT17ZGF0YT8uaWR9IHNpdGVTZXR0aW5ncz17c2l0ZVNldHRpbmdzfT5cbiAgICAgICAgICAgICAgPEhlYWQgc2VvSW5mbz17c2l0ZVNlb0luZm8gfHwgc2VvQ29uZmlnfSAvPlxuICAgICAgICAgICAgICA8SW5uZXJMYXlvdXRcbiAgICAgICAgICAgICAgICB0aGVtZU5hbWU9e2RhdGE/LnRoZW1lIHx8ICdiYXNlJ31cbiAgICAgICAgICAgICAgICBjb2xvck92ZXJyaWRlcz17Y29sb3JPdmVycmlkZXN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvSW5uZXJMYXlvdXQ+XG4gICAgICAgICAgICA8L01hbmFnZWRVSUNvbnRleHQ+XG4gICAgICAgICAgKVxuICAgICAgICB9fVxuICAgICAgPC9CdWlsZGVyQ29udGVudD5cbiAgICA8L0NvbW1lcmNlUHJvdmlkZXI+XG4gIClcbn1cblxuY29uc3QgSW5uZXJMYXlvdXQ6IFJlYWN0LkZDPHtcbiAgdGhlbWVOYW1lOiBzdHJpbmdcbiAgY29sb3JPdmVycmlkZXM/OiB7XG4gICAgdGV4dD86IHN0cmluZ1xuICAgIGJhY2tncm91bmQ/OiBzdHJpbmdcbiAgICBwcmltYXJ5Pzogc3RyaW5nXG4gICAgc2Vjb25kYXJ5Pzogc3RyaW5nXG4gICAgbXV0ZWQ/OiBzdHJpbmdcbiAgfVxufT4gPSAoeyB0aGVtZU5hbWUsIGNoaWxkcmVuLCBjb2xvck92ZXJyaWRlcyB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0ge1xuICAgIC4uLnRoZW1lc01hcFt0aGVtZU5hbWVdLFxuICAgIGNvbG9yczoge1xuICAgICAgLi4udGhlbWVzTWFwW3RoZW1lTmFtZV0uY29sb3JzLFxuICAgICAgLi4uY29sb3JPdmVycmlkZXMsXG4gICAgfSxcbiAgfVxuICBjb25zdCB7IGRpc3BsYXlTaWRlYmFyLCBjbG9zZVNpZGViYXIgfSA9IHVzZVVJKClcbiAgY29uc3QgeyBhY2NlcHRlZENvb2tpZXMsIG9uQWNjZXB0Q29va2llcyB9ID0gdXNlQWNjZXB0Q29va2llcygpXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXJnaW46IGAwIGF1dG9gLFxuICAgICAgICAgIHB4OiAyMCxcbiAgICAgICAgICBtYXhXaWR0aDogMTkyMCxcbiAgICAgICAgICBtaW5XaWR0aDogJzYwdncnLFxuICAgICAgICAgIG1pbkhlaWdodDogODAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIG9wZW49e1xuICAgICAgICAgIGRpc3BsYXlTaWRlYmFyIHx8XG4gICAgICAgICAgKGJ1aWxkZXIuZWRpdGluZ01vZGVsIHx8IEJ1aWxkZXIucHJldmlld2luZ01vZGVsKSA9PT1cbiAgICAgICAgICAgICdjYXJ0LXVwc2VsbC1zaWRlYmFyJ1xuICAgICAgICB9XG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlU2lkZWJhcn1cbiAgICAgID5cbiAgICAgICAgPENhcnRTaWRlYmFyVmlldyAvPlxuICAgICAgPC9TaWRlYmFyPlxuICAgICAgPE5vU1NSPlxuICAgICAgICA8RmVhdHVyZUJhclxuICAgICAgICAgIHRpdGxlPVwiVGhpcyBzaXRlIHVzZXMgY29va2llcyB0byBpbXByb3ZlIHlvdXIgZXhwZXJpZW5jZS4gQnkgY2xpY2tpbmcsIHlvdSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3kuXCJcbiAgICAgICAgICBoaWRlPXtCdWlsZGVyLmlzRWRpdGluZyA/IHRydWUgOiBhY2NlcHRlZENvb2tpZXN9XG4gICAgICAgICAgYWN0aW9uPXtcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25BY2NlcHRDb29raWVzKCl9PkFjY2VwdCBjb29raWVzPC9CdXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9Ob1NTUj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IFVzZXJOYXYgfSBmcm9tICdAY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgZW52IGZyb20gJ0Bjb25maWcvZW52J1xuaW1wb3J0IHsgQnVpbGRlckNvbXBvbmVudCwgYnVpbGRlciB9IGZyb20gJ0BidWlsZGVyLmlvL3JlYWN0J1xuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3MnXG5pbXBvcnQgeyBqc3gsIFRoZW1lZCwgdXNlVGhlbWVVSSB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgdXNlVUkgfSBmcm9tICdAY29tcG9uZW50cy91aS9jb250ZXh0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJy4vU2VhcmNoYmFyJ1xuXG5jb25zdCBOYXZiYXI6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbYW5ub3VuY2VtZW50LCBzZXRBbm5vdW5jZW1lbnRdID0gdXNlU3RhdGUoKVxuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZVVJKClcbiAgY29uc3QgeyBuYXZpZ2F0aW9uTGlua3MsIGxvZ28gfSA9IHVzZVVJKClcbiAgY29uc3QgY2FydCA9IHVzZUNhcnQoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250ZW50KCkge1xuICAgICAgY29uc3QgaXRlbXMgPSBjYXJ0Py5saW5lSXRlbXMgfHwgW11cbiAgICAgIGNvbnN0IGFub3VuY2VtZW50Q29udGVudCA9IGF3YWl0IGJ1aWxkZXJcbiAgICAgICAgLmdldCgnYW5ub3VuY2VtZW50LWJhcicsIHtcbiAgICAgICAgICBjYWNoZWJ1c3Q6IGVudi5pc0RldixcbiAgICAgICAgICB1c2VyQXR0cmlidXRlczoge1xuICAgICAgICAgICAgaXRlbUluQ2FydDogaXRlbXMubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0udmFyaWFudC5wcm9kdWN0LmhhbmRsZSksXG4gICAgICAgICAgfSBhcyBhbnksXG4gICAgICAgIH0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgc2V0QW5ub3VuY2VtZW50KGFub3VuY2VtZW50Q29udGVudClcbiAgICB9XG4gICAgZmV0Y2hDb250ZW50KClcbiAgfSwgW2NhcnQ/LmxpbmVJdGVtc10pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QnVpbGRlckNvbXBvbmVudFxuICAgICAgICBjb250ZW50PXthbm5vdW5jZW1lbnR9XG4gICAgICAgIGRhdGE9e3sgdGhlbWUgfX1cbiAgICAgICAgbW9kZWw9XCJhbm5vdW5jZW1lbnQtYmFyXCJcbiAgICAgIC8+XG4gICAgICA8VGhlbWVkLmRpdlxuICAgICAgICBhcz1cImhlYWRlclwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWFyZ2luOiBgMCBhdXRvYCxcbiAgICAgICAgICBtYXhXaWR0aDogMTkyMCxcbiAgICAgICAgICBweTogMixcbiAgICAgICAgICBweDogMixcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFRoZW1lZC5kaXZcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogWydub25lJywgJ25vbmUnLCAnZmxleCddLFxuICAgICAgICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgICAgICAgbWluV2lkdGg6IDI0MCxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge25hdmlnYXRpb25MaW5rcz8ubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFRoZW1lZC5hXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIHN4PXt7IHBhZGRpbmc6IDEwLCBtaW5XaWR0aDogOTAgfX1cbiAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgIGhyZWY9e2xpbmsubGlua31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xpbmsudGl0bGV9XG4gICAgICAgICAgICA8L1RoZW1lZC5hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1RoZW1lZC5kaXY+XG4gICAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFRoZW1lZC5oMVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsb2dvICYmIGxvZ28uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICA8VGhlbWVkLmFcbiAgICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IC0xLFxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IGBub25lYCxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnNXB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17bG9nby53aWR0aH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17bG9nby5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICBzcmM9e2xvZ28uaW1hZ2V9XG4gICAgICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgICAgIDwvVGhlbWVkLmE+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2xvZ28gJiYgbG9nby50ZXh0ICYmICFsb2dvLmltYWdlICYmIChcbiAgICAgICAgICAgICAgPFRoZW1lZC5hXG4gICAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiAtMSxcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBgbm9uZWAsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJzVweCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsb2dvLnRleHR9XG4gICAgICAgICAgICAgIDwvVGhlbWVkLmE+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvVGhlbWVkLmgxPlxuICAgICAgICA8L1RoZW1lZC5kaXY+XG4gICAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIG1pbldpZHRoOiAxNDAsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFsnc3BhY2UtYmV0d2VlbicsICdmbGV4LWVuZCddLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U2VhcmNoYmFyIC8+XG4gICAgICAgICAgPFVzZXJOYXYgLz5cbiAgICAgICAgPC9UaGVtZWQuZGl2PlxuICAgICAgPC9UaGVtZWQuZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBOb1NTUjogUmVhY3QuRkM8eyBza2VsZXRvbj86IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBza2VsZXRvbixcbn0pID0+IHtcbiAgY29uc3QgW3JlbmRlciwgc2V0UmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4gc2V0UmVuZGVyKHRydWUpLCBbXSlcbiAgaWYgKHJlbmRlcikge1xuICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz5cbiAgfVxuICBpZiAoc2tlbGV0b24pIHtcbiAgICByZXR1cm4gPD57c2tlbGV0b259PC8+XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cbmV4cG9ydCBkZWZhdWx0IE5vU1NSXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IFNlbGVjdCwgTGFiZWwgfSBmcm9tICdAdGhlbWUtdWkvY29tcG9uZW50cydcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uUGlja2VyUHJvcHMge1xuICBuYW1lOiBzdHJpbmdcbiAgb3B0aW9ucz86IFJlYWRvbmx5PEFycmF5PHN0cmluZyB8IHVuZGVmaW5lZD4+XG4gIG9uQ2hhbmdlPzogUmVhY3QuQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxTZWxlY3RFbGVtZW50PlxuICBzZWxlY3RlZD86IHN0cmluZ1xufVxuXG5jb25zdCBPcHRpb25QaWNrZXI6IFJlYWN0LkZDPE9wdGlvblBpY2tlclByb3BzPiA9ICh7XG4gIG5hbWUsXG4gIG9wdGlvbnMsXG4gIG9uQ2hhbmdlLFxuICBzZWxlY3RlZCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExhYmVsIGh0bWxGb3I9e25hbWV9PntuYW1lfTwvTGFiZWw+XG4gICAgICA8U2VsZWN0IGlkPXtuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXtzZWxlY3RlZH0+XG4gICAgICAgIHtvcHRpb25zPy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29wdGlvbn0ga2V5PXtvcHRpb259PlxuICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L1NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25QaWNrZXJcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFRoZW1lZCwganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBDYXJkLCBUZXh0IH0gZnJvbSAnQHRoZW1lLXVpL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBMaW5rLCBJbWFnZUNhcm91c2VsIH0gZnJvbSAnQGNvbXBvbmVudHMvdWknXG5pbXBvcnQgeyBnZXRQcmljZSB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL3Byb2R1Y3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RDYXJkUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgcHJvZHVjdDogU2hvcGlmeUJ1eS5Qcm9kdWN0XG4gIGltZ1dpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgaW1nSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgaW1nTGF5b3V0PzogJ2ZpeGVkJyB8ICdpbnRyaW5zaWMnIHwgJ3Jlc3BvbnNpdmUnIHwgdW5kZWZpbmVkXG4gIGltZ1ByaW9yaXR5PzogYm9vbGVhblxuICBpbWdMb2FkaW5nPzogJ2VhZ2VyJyB8ICdsYXp5J1xuICBpbWdTaXplcz86IHN0cmluZ1xufVxuXG5jb25zdCBQcm9kdWN0Q2FyZDogUmVhY3QuRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoe1xuICBwcm9kdWN0LFxuICBpbWdXaWR0aCxcbiAgaW1nSGVpZ2h0LFxuICBpbWdQcmlvcml0eSxcbiAgaW1nTG9hZGluZyxcbiAgaW1nU2l6ZXMsXG4gIGltZ0xheW91dCA9ICdyZXNwb25zaXZlJyxcbn0pID0+IHtcbiAgY29uc3QgaGFuZGxlID0gKHByb2R1Y3QgYXMgYW55KS5oYW5kbGVcbiAgY29uc3QgcHJvZHVjdFZhcmlhbnQ6IGFueSA9IHByb2R1Y3QudmFyaWFudHNbMF1cbiAgY29uc3QgcHJpY2UgPSBnZXRQcmljZShcbiAgICBwcm9kdWN0VmFyaWFudC5wcmljZVYyLmFtb3VudCxcbiAgICBwcm9kdWN0VmFyaWFudC5wcmljZVYyLmN1cnJlbmN5Q29kZVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgc3g9e3tcbiAgICAgICAgbWF4V2lkdGg6IFs3MDAsIGltZ1dpZHRoIHx8IDU0MF0sXG4gICAgICAgIHA6IDMsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke2hhbmRsZX0vYH0+XG4gICAgICAgIDxkaXYgc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgPEltYWdlQ2Fyb3VzZWxcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZT17cHJvZHVjdC5pbWFnZXMgPyBwcm9kdWN0LmltYWdlcy5sZW5ndGggLSAxIDogMH1cbiAgICAgICAgICAgIHdpZHRoPXtpbWdXaWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aW1nSGVpZ2h0fVxuICAgICAgICAgICAgcHJpb3JpdHk9e2ltZ1ByaW9yaXR5fVxuICAgICAgICAgICAgbG9hZGluZz17aW1nTG9hZGluZ31cbiAgICAgICAgICAgIGxheW91dD17aW1nTGF5b3V0fVxuICAgICAgICAgICAgc2l6ZXM9e2ltZ1NpemVzfVxuICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgaW1hZ2VzPXtcbiAgICAgICAgICAgICAgcHJvZHVjdC5pbWFnZXMubGVuZ3RoID8gcHJvZHVjdC5pbWFnZXMgOiBbe1xuICAgICAgICAgICAgICAgIHNyYzogYGh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8ke2ltZ1dpZHRofXgke2ltZ0hlaWdodH1gLFxuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgPFRoZW1lZC5oMiBzeD17eyBtdDogNCwgbWI6IDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgIDwvVGhlbWVkLmgyPlxuICAgICAgICAgIDxUZXh0IHN4PXt7IGZvbnRTaXplOiAxMiwgbWI6IDIgfX0+e3ByaWNlfTwvVGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBUaGVtZWQsIGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBDYXJkLCBUZXh0IH0gZnJvbSAnQHRoZW1lLXVpL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQGNvbXBvbmVudHMvdWknXG5pbXBvcnQgeyBnZXRQcmljZSB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL3Byb2R1Y3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5vU1NSIGZyb20gJy4vTm9TU1InXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdENhcmRQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwcm9kdWN0OiBTaG9waWZ5QnV5LlByb2R1Y3RcbiAgaW1nV2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICBpbWdIZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICBpbWdMYXlvdXQ/OiAnZml4ZWQnIHwgJ2ludHJpbnNpYycgfCAncmVzcG9uc2l2ZScgfCB1bmRlZmluZWRcbiAgaW1nUHJpb3JpdHk/OiBib29sZWFuXG4gIGltZ0xvYWRpbmc/OiAnZWFnZXInIHwgJ2xhenknXG4gIGltZ1NpemVzPzogc3RyaW5nXG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkRGVtbzogUmVhY3QuRkM8UHJvZHVjdENhcmRQcm9wcz4gPSAoe1xuICBwcm9kdWN0LFxuICBpbWdXaWR0aCxcbiAgaW1nSGVpZ2h0LFxuICBpbWdQcmlvcml0eSxcbiAgaW1nTG9hZGluZyxcbiAgaW1nU2l6ZXMsXG4gIGltZ0xheW91dCA9ICdyZXNwb25zaXZlJyxcbn0pID0+IHtcbiAgY29uc3QgW3Nob3dBbHRlcm5hdGUsIHNldFNob3dBbHRlcm5hdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjYW5Ub2dnbGUsIHNldENhblRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgc3JjID0gcHJvZHVjdC5pbWFnZXNbMF0uc3JjXG4gIGNvbnN0IGhhbmRsZSA9IChwcm9kdWN0IGFzIGFueSkuaGFuZGxlXG4gIGNvbnN0IHByb2R1Y3RWYXJpYW50OiBhbnkgPSBwcm9kdWN0LnZhcmlhbnRzWzBdXG4gIGNvbnN0IHByaWNlID0gZ2V0UHJpY2UoXG4gICAgcHJvZHVjdFZhcmlhbnQuY29tcGFyZV9hdF9wcmljZSB8fCBwcm9kdWN0VmFyaWFudC5wcmljZSxcbiAgICAnVVNEJ1xuICApXG4gIGNvbnN0IGFsdGVybmF0ZUltYWdlID0gcHJvZHVjdC5pbWFnZXNbMV0/LnNyY1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIHN4PXt7XG4gICAgICAgIG1heFdpZHRoOiBbNzAwLCA1MDBdLFxuICAgICAgICBwOiAzLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgfX1cbiAgICAgIG9uTW91c2VPdXQ9eygpID0+IHNldFNob3dBbHRlcm5hdGUoZmFsc2UpfVxuICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldFNob3dBbHRlcm5hdGUodHJ1ZSl9XG4gICAgPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7aGFuZGxlfS9gfT5cbiAgICAgICAgPGRpdiBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICB7YWx0ZXJuYXRlSW1hZ2UgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzeD17eyBkaXNwbGF5OiBzaG93QWx0ZXJuYXRlICYmIGNhblRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE5vU1NSPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgcXVhbGl0eT1cIjg1XCJcbiAgICAgICAgICAgICAgICAgIHNyYz17YWx0ZXJuYXRlSW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17aW1nV2lkdGggfHwgNTQwfVxuICAgICAgICAgICAgICAgICAgc2l6ZXM9e2ltZ1NpemVzfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtpbWdIZWlnaHQgfHwgNTQwfVxuICAgICAgICAgICAgICAgICAgbGF5b3V0PXtpbWdMYXlvdXR9XG4gICAgICAgICAgICAgICAgICBvbkxvYWQ9eygpID0+IHNldENhblRvZ2dsZSh0cnVlKX1cbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ob1NTUj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTpcbiAgICAgICAgICAgICAgICBjYW5Ub2dnbGUgJiYgc2hvd0FsdGVybmF0ZSAmJiBhbHRlcm5hdGVJbWFnZSA/ICdub25lJyA6ICdibG9jaycsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBxdWFsaXR5PVwiODVcIlxuICAgICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICB3aWR0aD17aW1nV2lkdGggfHwgNTQwfVxuICAgICAgICAgICAgICBzaXplcz17aW1nU2l6ZXN9XG4gICAgICAgICAgICAgIGhlaWdodD17aW1nSGVpZ2h0IHx8IDU0MH1cbiAgICAgICAgICAgICAgbGF5b3V0PXtpbWdMYXlvdXR9XG4gICAgICAgICAgICAgIGxvYWRpbmc9e2ltZ0xvYWRpbmd9XG4gICAgICAgICAgICAgIHByaW9yaXR5PXtpbWdQcmlvcml0eX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgPFRoZW1lZC5oMiBzeD17eyBtdDogNCwgbWI6IDAsIGZvbnRTaXplOiAxNCB9fT5cbiAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgIDwvVGhlbWVkLmgyPlxuICAgICAgICAgIDxUZXh0IHN4PXt7IGZvbnRTaXplOiAxMiwgbWI6IDIgfX0+e3ByaWNlfTwvVGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkRGVtb1xuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IExvYWRpbmdEb3RzIH0gZnJvbSAnQGNvbXBvbmVudHMvdWknXG5pbXBvcnQgYnVpbGRlckNvbmZpZyBmcm9tICdAY29uZmlnL2J1aWxkZXInXG5pbXBvcnQgeyBQcm9kdWN0R3JpZCB9IGZyb20gJ2Jsb2Nrcy9Qcm9kdWN0R3JpZC9Qcm9kdWN0R3JpZCdcbmltcG9ydCB7IEJ1dHRvbiwgVGhlbWVkLCBqc3gsIElucHV0LCBMYWJlbCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgc2VhcmNoUHJvZHVjdHMgfSBmcm9tICdAbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9hcGkvb3BlcmF0aW9ucy1idWlsZGVyJ1xuaW1wb3J0IHsgRXhwYW5kTW9kYWwgfSBmcm9tICdyZWFjdC1zcHJpbmctbW9kYWwnXG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCAncmVhY3Qtc3ByaW5nLW1vZGFsL3N0eWxlcy5jc3MnXG5pbXBvcnQgeyBDcm9zcyB9IGZyb20gJ0Bjb21wb25lbnRzL2ljb25zJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgaWQ/OiBzdHJpbmdcbn1cblxuY29uc3QgU2VhcmNoYmFyOiBGQzxQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgcSB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgYnV0dG9uUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKVxuICB9LCBbcm91dGVyLmFzUGF0aC5zcGxpdCgnPycpWzBdXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxFeHBhbmRNb2RhbFxuICAgICAgICB0cmFuc2l0aW9uQ29uZmlnPXt7fX1cbiAgICAgICAgY29udGVudFRyYW5zaXRpb249e3t9fVxuICAgICAgICBvdmVybGF5UHJvcHM9e3tcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6IDE5MjAsXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICAgIHRvcDogKGJ1dHRvblJlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gfHwgMCkgKyAxNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgID5cbiAgICAgICAgPFNlYXJjaE1vZGFsQ29udGVudFxuICAgICAgICAgIGluaXRpYWxTZWFyY2g9e3EgJiYgU3RyaW5nKHEpfVxuICAgICAgICAgIG9uU2VhcmNoPXsodGVybTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcCA9IHEgPyAncmVwbGFjZScgOiAncHVzaCdcbiAgICAgICAgICAgIHJvdXRlcltvcF0oe1xuICAgICAgICAgICAgICBwYXRobmFtZTogcm91dGVyLmFzUGF0aC5zcGxpdCgnPycpWzBdLFxuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHE6IHRlcm0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0V4cGFuZE1vZGFsPlxuXG4gICAgICA8VGhlbWVkLmRpdlxuICAgICAgICByZWY9e2J1dHRvblJlZn1cbiAgICAgICAgYXM9e0J1dHRvbn1cbiAgICAgICAgbXg9ezJ9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cbiAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXG4gICAgICA+XG4gICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgPENyb3NzIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMlwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIyXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk04IDRhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6TTIgOGE2IDYgMCAxMTEwLjg5IDMuNDc2bDQuODE3IDQuODE3YTEgMSAwIDAxLTEuNDE0IDEuNDE0bC00LjgxNi00LjgxNkE2IDYgMCAwMTIgOHpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKX1cbiAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmNvbnN0IFNlYXJjaE1vZGFsQ29udGVudCA9IChwcm9wczoge1xuICBpbml0aWFsU2VhcmNoPzogc3RyaW5nXG4gIG9uU2VhcmNoOiAodGVybTogc3RyaW5nKSA9PiBhbnlcbn0pID0+IHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFxuICAgIHByb3BzLmluaXRpYWxTZWFyY2ggJiYgU3RyaW5nKHByb3BzLmluaXRpYWxTZWFyY2gpXG4gIClcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSBhcyBhbnlbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKHNlYXJjaFRlcm06IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgc2VhcmNoUHJvZHVjdHMoXG4gICAgICBidWlsZGVyQ29uZmlnLFxuICAgICAgU3RyaW5nKHNlYXJjaFRlcm0pLFxuICAgICAgLy8gVE9ETzogcGFnaW5hdGlvblxuICAgICAgMjAsXG4gICAgICAwXG4gICAgKVxuICAgIHNldFNlYXJjaChzZWFyY2hUZXJtKVxuICAgIHNldFByb2R1Y3RzKHJlc3VsdHMpXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICBpZiAoc2VhcmNoVGVybSkge1xuICAgICAgcHJvcHMub25TZWFyY2goc2VhcmNoVGVybSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGdldFByb2R1Y3RzKHNlYXJjaClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IHRocm90dGxlU2VhcmNoID0gdXNlQ2FsbGJhY2sodGhyb3R0bGUoZ2V0UHJvZHVjdHMpLCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZWQuZGl2XG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIHA6IFsxLCAyXSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPElucHV0XG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICBzeD17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuaW5pdGlhbFNlYXJjaH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHByb2R1Y3RzLi4uXCJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhyb3R0bGVTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmdEb3RzIC8+XG4gICAgICApIDogcHJvZHVjdHMubGVuZ3RoID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgIFNlYXJjaCBSZXN1bHRzIGZvciBcIjxzdHJvbmc+e3NlYXJjaH08L3N0cm9uZz5cIlxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgPFByb2R1Y3RHcmlkXG4gICAgICAgICAgICBjYXJkUHJvcHM9e3tcbiAgICAgICAgICAgICAgaW1nSGVpZ2h0OiA1NDAsXG4gICAgICAgICAgICAgIGltZ1dpZHRoOiA1NDAsXG4gICAgICAgICAgICAgIGltZ1ByaW9yaXR5OiBmYWxzZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XG4gICAgICAgICAgICBvZmZzZXQ9ezB9XG4gICAgICAgICAgICBsaW1pdD17cHJvZHVjdHMubGVuZ3RofVxuICAgICAgICAgID48L1Byb2R1Y3RHcmlkPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtzZWFyY2ggPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBUaGVyZSBhcmUgbm8gcHJvZHVjdHMgdGhhdCBtYXRjaCBcIjxzdHJvbmc+e3NlYXJjaH08L3N0cm9uZz5cIlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+IDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9UaGVtZWQuZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaGJhclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFVudGlsSW50ZXJhY3Rpb246IFJlYWN0LkZDPHsgc2tlbGV0b246IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBza2VsZXRvbixcbn0pID0+IHtcbiAgY29uc3QgW3JlbmRlciwgc2V0UmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBpZiAocmVuZGVyKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPlxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldFJlbmRlcih0cnVlKX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJlbmRlcih0cnVlKX1cbiAgICAgIG9uVG91Y2hTdGFydD17KCkgPT4gc2V0UmVuZGVyKHRydWUpfVxuICAgID5cbiAgICAgIHtza2VsZXRvbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgVW50aWxJbnRlcmFjdGlvblxuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJhZyB9IGZyb20gJ0Bjb21wb25lbnRzL2ljb25zJ1xuaW1wb3J0IHsgdXNlVUkgfSBmcm9tICdAY29tcG9uZW50cy91aS9jb250ZXh0J1xuaW1wb3J0IHsgQnV0dG9uLCBqc3ggfSBmcm9tICd0aGVtZS11aSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmNvbnN0IFVzZXJOYXY6IEZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgeyB0b2dnbGVTaWRlYmFyIH0gPSB1c2VVSSgpXG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9IGFyaWEtbGFiZWw9XCJDYXJ0XCI+XG4gICAgICA8QmFnIC8+XG4gICAgPC9CdXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlck5hdlxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBGZWF0dXJlQmFyIH0gZnJvbSAnLi9GZWF0dXJlQmFyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXlvdXQgfSBmcm9tICcuL0xheW91dCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2YmFyIH0gZnJvbSAnLi9OYXZiYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaGJhciB9IGZyb20gJy4vU2VhcmNoYmFyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyTmF2IH0gZnJvbSAnLi9Vc2VyTmF2J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkIH0gZnJvbSAnLi9IZWFkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPcHRpb25QaWNrZXIgfSBmcm9tICcuL09wdGlvblBpY2tlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZHVjdENhcmQgfSBmcm9tICcuL1Byb2R1Y3RDYXJkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9kdWN0Q2FyZERlbW8gfSBmcm9tICcuL1Byb2R1Y3RDYXJkRGVtbydcbiIsImNvbnN0IEFycm93TGVmdCA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5IDEySDVcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTIgMTlMNSAxMkwxMiA1XCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyb3dMZWZ0XG4iLCJjb25zdCBCYWcgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICBoZWlnaHQ9XCIyMlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDIwIDIyXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00IDFMMSA1VjE5QzEgMTkuNTMwNCAxLjIxMDcxIDIwLjAzOTEgMS41ODU3OSAyMC40MTQyQzEuOTYwODYgMjAuNzg5MyAyLjQ2OTU3IDIxIDMgMjFIMTdDMTcuNTMwNCAyMSAxOC4wMzkxIDIwLjc4OTMgMTguNDE0MiAyMC40MTQyQzE4Ljc4OTMgMjAuMDM5MSAxOSAxOS41MzA0IDE5IDE5VjVMMTYgMUg0WlwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xIDVIMTlcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTQgOUMxNCAxMC4wNjA5IDEzLjU3ODYgMTEuMDc4MyAxMi44Mjg0IDExLjgyODRDMTIuMDc4MyAxMi41Nzg2IDExLjA2MDkgMTMgMTAgMTNDOC45MzkxMyAxMyA3LjkyMTcyIDEyLjU3ODYgNy4xNzE1NyAxMS44Mjg0QzYuNDIxNDMgMTEuMDc4MyA2IDEwLjA2MDkgNiA5XCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFnXG4iLCJjb25zdCBDaGVjayA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIwIDZMOSAxN0w0IDEyXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrXG4iLCJjb25zdCBDaGV2cm9uVXAgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzaGFwZVJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xOCAxNWwtNi02LTYgNlwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hldnJvblVwXG4iLCJjb25zdCBDcm9zcyA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHNoYXBlUmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE4IDZMNiAxOFwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTYgNmwxMiAxMlwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NcbiIsImNvbnN0IERvdWJsZUNoZXZyb24gPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTYgOC45MDQ4MkwxMiA0TDggOC45MDQ4Mk04IDE1LjA5NTJMMTIgMjBMMTYgMTUuMDk1MlwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvdWJsZUNoZXZyb25cbiIsImNvbnN0IEdpdGh1YiA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMiAwQzUuMzcgMCAwIDUuNTA1ODMgMCAxMi4zMDM1QzAgMTcuNzQ3OCAzLjQzNSAyMi4zNDYzIDguMjA1IDIzLjk3NjVDOC44MDUgMjQuMDg0MiA5LjAzIDIzLjcxNSA5LjAzIDIzLjM5MjFDOS4wMyAyMy4wOTk5IDkuMDE1IDIyLjEzMSA5LjAxNSAyMS4xMDA1QzYgMjEuNjY5NiA1LjIyIDIwLjM0NyA0Ljk4IDE5LjY1NDlDNC44NDUgMTkuMzAxMiA0LjI2IDE4LjIwOTIgMy43NSAxNy45MTdDMy4zMyAxNy42ODYzIDIuNzMgMTcuMTE3MyAzLjczNSAxNy4xMDE5QzQuNjggMTcuMDg2NSA1LjM1NSAxNy45OTM5IDUuNTggMTguMzYzQzYuNjYgMjAuMjIzOSA4LjM4NSAxOS43MDEgOS4wNzUgMTkuMzc4MUM5LjE4IDE4LjU3ODMgOS40OTUgMTguMDQgOS44NCAxNy43MzI1QzcuMTcgMTcuNDI0OSA0LjM4IDE2LjM2MzcgNC4zOCAxMS42NTc2QzQuMzggMTAuMzE5NiA0Ljg0NSA5LjIxMjI3IDUuNjEgOC4zNTEwMkM1LjQ5IDguMDQzNDMgNS4wNyA2Ljc4MjMyIDUuNzMgNS4wOTA1OEM1LjczIDUuMDkwNTggNi43MzUgNC43Njc2MiA5LjAzIDYuMzUxN0M5Ljk5IDYuMDc0ODcgMTEuMDEgNS45MzY0NSAxMi4wMyA1LjkzNjQ1QzEzLjA1IDUuOTM2NDUgMTQuMDcgNi4wNzQ4NyAxNS4wMyA2LjM1MTdDMTcuMzI1IDQuNzUyMjQgMTguMzMgNS4wOTA1OCAxOC4zMyA1LjA5MDU4QzE4Ljk5IDYuNzgyMzIgMTguNTcgOC4wNDM0MyAxOC40NSA4LjM1MTAyQzE5LjIxNSA5LjIxMjI3IDE5LjY4IDEwLjMwNDIgMTkuNjggMTEuNjU3NkMxOS42OCAxNi4zNzkxIDE2Ljg3NSAxNy40MjQ5IDE0LjIwNSAxNy43MzI1QzE0LjY0IDE4LjExNjkgMTUuMDE1IDE4Ljg1NTIgMTUuMDE1IDIwLjAwODZDMTUuMDE1IDIxLjY1NDIgMTUgMjIuOTc2OCAxNSAyMy4zOTIxQzE1IDIzLjcxNSAxNS4yMjUgMjQuMDk5NSAxNS44MjUgMjMuOTc2NUMxOC4yMDcyIDIzLjE1MTkgMjAuMjc3MyAyMS41ODIyIDIxLjc0MzggMTkuNDg4MkMyMy4yMTAzIDE3LjM5NDIgMjMuOTk5NCAxNC44ODE0IDI0IDEyLjMwMzVDMjQgNS41MDU4MyAxOC42MyAwIDEyIDBaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpdGh1YlxuIiwiY29uc3QgSGVhcnQgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDIwXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjAuODQgMi42MUMyMC4zMjkyIDIuMDk5IDE5LjcyMjggMS42OTM2NSAxOS4wNTU0IDEuNDE3MDhDMTguMzg3OSAxLjE0MDUyIDE3LjY3MjUgMC45OTgxNzUgMTYuOTUgMC45OTgxNzVDMTYuMjI3NSAwLjk5ODE3NSAxNS41MTIxIDEuMTQwNTIgMTQuODQ0NiAxLjQxNzA4QzE0LjE3NzIgMS42OTM2NSAxMy41NzA4IDIuMDk5IDEzLjA2IDIuNjFMMTIgMy42N0wxMC45NCAyLjYxQzkuOTA4MyAxLjU3ODMxIDguNTA5MDMgMC45OTg3MDkgNy4wNSAwLjk5ODcwOUM1LjU5MDk2IDAuOTk4NzA5IDQuMTkxNjkgMS41NzgzMSAzLjE2IDIuNjFDMi4xMjgzIDMuNjQxNjkgMS41NDg3MSA1LjA0MDk3IDEuNTQ4NzEgNi41QzEuNTQ4NzEgNy45NTkwMyAyLjEyODMgOS4zNTgzMSAzLjE2IDEwLjM5TDQuMjIgMTEuNDVMMTIgMTkuMjNMMTkuNzggMTEuNDVMMjAuODQgMTAuMzlDMjEuMzUxIDkuODc5MjQgMjEuNzU2MyA5LjI3MjgxIDIyLjAzMjkgOC42MDUzNkMyMi4zMDk1IDcuOTM3OSAyMi40NTE4IDcuMjIyNDkgMjIuNDUxOCA2LjVDMjIuNDUxOCA1Ljc3NzUxIDIyLjMwOTUgNS4wNjIxIDIyLjAzMjkgNC4zOTQ2NEMyMS43NTYzIDMuNzI3MTkgMjEuMzUxIDMuMTIwNzYgMjAuODQgMi42MVYyLjYxWlwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYXJ0XG4iLCJjb25zdCBJbmZvID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc2hhcGVSZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBmaWxsPVwidHJhbnNwYXJlbnRcIiAvPlxuICAgICAgPHBhdGggZD1cIk0xMiA4djRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgPHBhdGggZD1cIk0xMiAxNmguMDFcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9cbiIsImNvbnN0IE1pbnVzID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNSAxMkgxOVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbnVzXG4iLCJjb25zdCBNb29uID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc2hhcGVSZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMjEgMTIuNzlBOSA5IDAgMTExMS4yMSAzIDcgNyAwIDAwMjEgMTIuNzl6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb29uXG4iLCJjb25zdCBQbHVzID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTIgNVYxOVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk01IDEySDE5XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1c1xuIiwiY29uc3QgUmlnaHRBcnJvdyA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk01IDEySDE5XCJcbiAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTIgNUwxOSAxMkwxMiAxOVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0QXJyb3dcbiIsImNvbnN0IFN1biA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHNoYXBlUmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjVcIiAvPlxuICAgICAgPHBhdGggZD1cIk0xMiAxdjJcIiAvPlxuICAgICAgPHBhdGggZD1cIk0xMiAyMXYyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNC4yMiA0LjIybDEuNDIgMS40MlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTE4LjM2IDE4LjM2bDEuNDIgMS40MlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEgMTJoMlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTIxIDEyaDJcIiAvPlxuICAgICAgPHBhdGggZD1cIk00LjIyIDE5Ljc4bDEuNDItMS40MlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTE4LjM2IDUuNjRsMS40Mi0xLjQyXCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdW5cbiIsImNvbnN0IFRyYXNoID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMgNkgyMVwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk04IDZWNEM4IDMuNDY5NTcgOC4yMTA3MSAyLjk2MDg2IDguNTg1NzkgMi41ODU3OUM4Ljk2MDg2IDIuMjEwNzEgOS40Njk1NyAyIDEwIDJIMTRDMTQuNTMwNCAyIDE1LjAzOTEgMi4yMTA3MSAxNS40MTQyIDIuNTg1NzlDMTUuNzg5MyAyLjk2MDg2IDE2IDMuNDY5NTcgMTYgNFY2TTE5IDZWMjBDMTkgMjAuNTMwNCAxOC43ODkzIDIxLjAzOTEgMTguNDE0MiAyMS40MTQyQzE4LjAzOTEgMjEuNzg5MyAxNy41MzA0IDIyIDE3IDIySDdDNi40Njk1NyAyMiA1Ljk2MDg2IDIxLjc4OTMgNS41ODU3OSAyMS40MTQyQzUuMjEwNzEgMjEuMDM5MSA1IDIwLjUzMDQgNSAyMFY2SDE5WlwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMCAxMVYxN1wiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNCAxMVYxN1wiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXNoXG4iLCJjb25zdCBWZXJjZWwgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCI4OVwiXG4gICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDg5IDIwXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTEuNTYyNSAwTDIzLjEyNSAyMEgwTDExLjU2MjUgMFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNDkuODc1IDEwLjYyNUM0OS44NzUgNy40MDYyNSA0Ny41IDUuMTU2MjUgNDQuMDkzNyA1LjE1NjI1QzQwLjY4NzUgNS4xNTYyNSAzOC4zMTI1IDcuNDA2MjUgMzguMzEyNSAxMC42MjVDMzguMzEyNSAxMy43ODEyIDQwLjg3NSAxNi4wOTM3IDQ0LjQwNjIgMTYuMDkzN0M0Ni4zNDM4IDE2LjA5MzcgNDguMDkzOCAxNS4zNzUgNDkuMjE4OCAxNC4wNjI1TDQ3LjA5MzggMTIuODQzN0M0Ni40Mzc1IDEzLjUgNDUuNDY4OCAxMy45MDYyIDQ0LjQwNjIgMTMuOTA2MkM0Mi44NDM4IDEzLjkwNjIgNDEuNSAxMy4wNjI1IDQxLjAzMTIgMTEuNzgxMkw0MC45Mzc1IDExLjU2MjVINDkuNzgxMkM0OS44NDM4IDExLjI1IDQ5Ljg3NSAxMC45Mzc1IDQ5Ljg3NSAxMC42MjVaTTQwLjkwNjIgOS42ODc1TDQwLjk2ODggOS41QzQxLjM3NSA4LjE1NjI1IDQyLjU2MjUgNy4zNDM3NSA0NC4wNjI1IDcuMzQzNzVDNDUuNTkzOCA3LjM0Mzc1IDQ2Ljc1IDguMTU2MjUgNDcuMTU2MiA5LjVMNDcuMjE4OCA5LjY4NzVINDAuOTA2MlpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTgzLjUzMTMgMTAuNjI1QzgzLjUzMTMgNy40MDYyNSA4MS4xNTYzIDUuMTU2MjUgNzcuNzUgNS4xNTYyNUM3NC4zNDM4IDUuMTU2MjUgNzEuOTY4OCA3LjQwNjI1IDcxLjk2ODggMTAuNjI1QzcxLjk2ODggMTMuNzgxMiA3NC41MzEzIDE2LjA5MzcgNzguMDYyNSAxNi4wOTM3QzgwIDE2LjA5MzcgODEuNzUgMTUuMzc1IDgyLjg3NSAxNC4wNjI1TDgwLjc1IDEyLjg0MzdDODAuMDkzOCAxMy41IDc5LjEyNSAxMy45MDYyIDc4LjA2MjUgMTMuOTA2MkM3Ni41IDEzLjkwNjIgNzUuMTU2MyAxMy4wNjI1IDc0LjY4NzUgMTEuNzgxMkw3NC41OTM4IDExLjU2MjVIODMuNDM3NUM4My41IDExLjI1IDgzLjUzMTMgMTAuOTM3NSA4My41MzEzIDEwLjYyNVpNNzQuNTYyNSA5LjY4NzVMNzQuNjI1IDkuNUM3NS4wMzEzIDguMTU2MjUgNzYuMjE4OCA3LjM0Mzc1IDc3LjcxODggNy4zNDM3NUM3OS4yNSA3LjM0Mzc1IDgwLjQwNjMgOC4xNTYyNSA4MC44MTI1IDkuNUw4MC44NzUgOS42ODc1SDc0LjU2MjVaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk02OC41MzEzIDguODQzNzRMNzAuNjU2MyA3LjYyNDk5QzY5LjY1NjMgNi4wNjI0OSA2Ny44NzUgNS4xODc0OSA2NS43MTg4IDUuMTg3NDlDNjIuMzEyNSA1LjE4NzQ5IDU5LjkzNzUgNy40Mzc0OSA1OS45Mzc1IDEwLjY1NjJDNTkuOTM3NSAxMy44NzUgNjIuMzEyNSAxNi4xMjUgNjUuNzE4OCAxNi4xMjVDNjcuODc1IDE2LjEyNSA2OS42NTYzIDE1LjI1IDcwLjY1NjMgMTMuNjg3NUw2OC41MzEzIDEyLjQ2ODdDNjcuOTY4OCAxMy40MDYyIDY2Ljk2ODggMTMuOTM3NSA2NS43MTg4IDEzLjkzNzVDNjMuNzUgMTMuOTM3NSA2Mi40Mzc1IDEyLjYyNSA2Mi40Mzc1IDEwLjY1NjJDNjIuNDM3NSA4LjY4NzQ5IDYzLjc1IDcuMzc0OTkgNjUuNzE4OCA3LjM3NDk5QzY2LjkzNzUgNy4zNzQ5OSA2Ny45Njg4IDcuOTA2MjQgNjguNTMxMyA4Ljg0Mzc0WlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNODguMjE4OCAxLjc1SDg1LjcxODhWMTUuODEyNUg4OC4yMTg4VjEuNzVaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00MC4xNTYzIDEuNzVIMzcuMjgxM0wzMS43ODEzIDExLjI1TDI2LjI4MTMgMS43NUgyMy4zNzVMMzEuNzgxMyAxNi4yNUw0MC4xNTYzIDEuNzVaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk01Ny44NDM4IDguMDYyNUM1OC4xMjUgOC4wNjI1IDU4LjQwNjIgOC4wOTM3NSA1OC42ODc1IDguMTU2MjVWNS41QzU2LjU2MjUgNS41NjI1IDU0LjU2MjUgNi43NSA1NC41NjI1IDguMjE4NzVWNS41SDUyLjA2MjVWMTUuODEyNUg1NC41NjI1VjExLjM0MzdDNTQuNTYyNSA5LjQwNjI1IDU1LjkwNjIgOC4wNjI1IDU3Ljg0MzggOC4wNjI1WlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJjZWxcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQmFnIH0gZnJvbSAnLi9CYWcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYXJ0IH0gZnJvbSAnLi9IZWFydCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhc2ggfSBmcm9tICcuL1RyYXNoJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcm9zcyB9IGZyb20gJy4vQ3Jvc3MnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFycm93TGVmdCB9IGZyb20gJy4vQXJyb3dMZWZ0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQbHVzIH0gZnJvbSAnLi9QbHVzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNaW51cyB9IGZyb20gJy4vTWludXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrIH0gZnJvbSAnLi9DaGVjaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3VuIH0gZnJvbSAnLi9TdW4nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vb24gfSBmcm9tICcuL01vb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIEdpdGh1YiB9IGZyb20gJy4vR2l0aHViJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb3VibGVDaGV2cm9uIH0gZnJvbSAnLi9Eb3VibGVDaGV2cm9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSaWdodEFycm93IH0gZnJvbSAnLi9SaWdodEFycm93J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbmZvIH0gZnJvbSAnLi9JbmZvJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGV2cm9uVXAgfSBmcm9tICcuL0NoZXZyb25VcCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVyY2VsIH0gZnJvbSAnLi9WZXJjZWwnXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIFRoZW1lZCwgQXNwZWN0UmF0aW8gfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IFVudGlsSW50ZXJhY3Rpb24gZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL1VudGlsSW50ZXJhY3Rpb24nXG5cbnR5cGUgcHJvcHMgPSBpbXBvcnQoJy4vTGF6eUltYWdlQ2Fyb3VzZWwnKS5JbWFnZUNhcm91c2VsUHJvcHNcblxuY29uc3QgTGF6eUNhcm91c2VsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vTGF6eUltYWdlQ2Fyb3VzZWwnKSwge1xuICBsb2FkaW5nOiAoKSA9PiA8VGhlbWVkLmRpdiBzeD17eyBoZWlnaHQ6ICcxMDAlJywgYmc6ICdtdXRlZCcgfX0gLz4sXG4gIHNzcjogZmFsc2UsXG59KVxuY29uc3QgSW1hZ2VDYXJvdXNlbDogUmVhY3QuRkM8cHJvcHM+ID0gKHtcbiAgaW1hZ2VzLFxuICBvblRodW1ibmFpbENsaWNrLFxuICBzaG93Wm9vbSxcbiAgY3VycmVudFNsaWRlLFxuICAuLi5pbWFnZVByb3BzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFzcGVjdFJhdGlvIHJhdGlvPXtOdW1iZXIoaW1hZ2VQcm9wcy5oZWlnaHQgKSAvIE51bWJlcihpbWFnZVByb3BzLndpZHRoKX0+XG4gICAgICA8VW50aWxJbnRlcmFjdGlvblxuICAgICAgICBza2VsZXRvbj17PEltYWdlIHNyYz17aW1hZ2VzWzBdLnNyY30gey4uLmltYWdlUHJvcHN9IC8+fVxuICAgICAgPlxuICAgICAgICA8TGF6eUNhcm91c2VsXG4gICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9XG4gICAgICAgICAgc2hvd1pvb209e3Nob3dab29tfVxuICAgICAgICAgIGN1cnJlbnRTbGlkZT17Y3VycmVudFNsaWRlfVxuICAgICAgICAgIG9uVGh1bWJuYWlsQ2xpY2s9e29uVGh1bWJuYWlsQ2xpY2t9XG4gICAgICAgICAgey4uLmltYWdlUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICA8L1VudGlsSW50ZXJhY3Rpb24+XG4gICAgPC9Bc3BlY3RSYXRpbz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJvdXNlbFxuIiwiaW1wb3J0IE5leHRMaW5rLCB7IExpbmtQcm9wcyBhcyBOZXh0TGlua1Byb3BzIH0gZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBMaW5rOiBSZWFjdC5GQzxOZXh0TGlua1Byb3BzPiA9ICh7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgPGEgey4uLnByb3BzfT57Y2hpbGRyZW59PC9hPlxuICAgIDwvTmV4dExpbms+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTGluaydcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJvb3RcIjogXCJMb2FkaW5nRG90c19yb290X19qWEdRa1wiLFxuXHRcImJsaW5rXCI6IFwiTG9hZGluZ0RvdHNfYmxpbmtfXzJ4c0oyXCJcbn07XG4iLCJpbXBvcnQgcyBmcm9tICcuL0xvYWRpbmdEb3RzLm1vZHVsZS5jc3MnXG5cbmNvbnN0IExvYWRpbmdEb3RzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICA8c3BhbiAvPlxuICAgICAgPHNwYW4gLz5cbiAgICAgIDxzcGFuIC8+XG4gICAgPC9zcGFuPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdEb3RzXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Mb2FkaW5nRG90cydcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ2xvc2UsIFRoZW1lZCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgdXNlUmVzcG9uc2l2ZVZhbHVlIH0gZnJvbSAnQHRoZW1lLXVpL21hdGNoLW1lZGlhJ1xuaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJhc2VNb2RhbCwgTW9kYWxDbG9zZVRhcmdldCB9IGZyb20gJ3JlYWN0LXNwcmluZy1tb2RhbCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb3BlbjogYm9vbGVhblxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IFNpZGViYXI6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCBvcGVuID0gZmFsc2UsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCB3aWR0aCA9IHVzZVJlc3BvbnNpdmVWYWx1ZShbJzEwMCUnLCA1MDBdKVxuICByZXR1cm4gKFxuICAgIDxCYXNlTW9kYWxcbiAgICAgIGlzT3Blbj17b3Blbn1cbiAgICAgIG9uRGlzbWlzcz17b25DbG9zZX1cbiAgICAgIGNvbnRlbnRQcm9wcz17e1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICBjb250ZW50VHJhbnNpdGlvbj17e1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgICAgIGVudGVyOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0sXG4gICAgICAgIGxlYXZlOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxNb2RhbENsb3NlVGFyZ2V0PlxuICAgICAgICA8VGhlbWVkLmRpdlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgcHk6IDEsXG4gICAgICAgICAgICBiZzogJ3RleHQnLFxuICAgICAgICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENsb3NlIC8+XG4gICAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICAgIDwvTW9kYWxDbG9zZVRhcmdldD5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Jhc2VNb2RhbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TaWRlYmFyJ1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBkaXNwbGF5U2lkZWJhcjogYm9vbGVhblxuICBuYXZpZ2F0aW9uTGlua3M/OiBBcnJheTx7IGxpbms6IHN0cmluZzsgdGl0bGU6IHN0cmluZyB9PlxuICBsb2dvPzogeyBpbWFnZT86IHN0cmluZzsgdGV4dDogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9XG4gIHRvZ2dsZVNpZGViYXI/OiBhbnlcbiAgY2xvc2VTaWRlYmFyPzogYW55XG4gIG9wZW5TaWRlYmFyPzogYW55XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGlzcGxheVNpZGViYXI6IGZhbHNlLFxufVxuXG50eXBlIEFjdGlvbiA9XG4gIHwge1xuICAgICAgdHlwZTogJ09QRU5fU0lERUJBUidcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ0NMT1NFX1NJREVCQVInXG4gICAgfVxuXG5leHBvcnQgY29uc3QgVUlDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTdGF0ZT4oaW5pdGlhbFN0YXRlKVxuXG5VSUNvbnRleHQuZGlzcGxheU5hbWUgPSAnVUlDb250ZXh0J1xuXG5leHBvcnQgY29uc3QgVUlQcm92aWRlcjogRkM8eyBzaXRlU2V0dGluZ3M6IFBhcnRpYWw8U3RhdGU+IH0+ID0gKHtcbiAgc2l0ZVNldHRpbmdzLFxuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgIC4uLnNpdGVTZXR0aW5ncyxcbiAgfSlcblxuICBjb25zdCBvcGVuU2lkZWJhciA9ICgpID0+IHNldFN0YXRlKCgpID0+ICh7IGRpc3BsYXlTaWRlYmFyOiB0cnVlIH0pKVxuICBjb25zdCBjbG9zZVNpZGViYXIgPSAoKSA9PiBzZXRTdGF0ZSgoKSA9PiAoeyBkaXNwbGF5U2lkZWJhcjogZmFsc2UgfSkpXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PlxuICAgIHNldFN0YXRlKChwcmV2KSA9PiAoeyBkaXNwbGF5U2lkZWJhcjogIXByZXYuZGlzcGxheVNpZGViYXIgfSkpXG5cbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4uc2l0ZVNldHRpbmdzLFxuICAgIG9wZW5TaWRlYmFyLFxuICAgIGNsb3NlU2lkZWJhcixcbiAgICB0b2dnbGVTaWRlYmFyLFxuICB9XG5cbiAgcmV0dXJuIDxVSUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfSBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XG59XG5cbmV4cG9ydCBjb25zdCB1c2VVSSA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoVUlDb250ZXh0KVxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB1c2VVSSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVUlQcm92aWRlcmApXG4gIH1cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGNvbnN0IE1hbmFnZWRVSUNvbnRleHQ6IEZDPHsgc2l0ZVNldHRpbmdzOiBQYXJ0aWFsPFN0YXRlPiB9PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBzaXRlU2V0dGluZ3MsXG59KSA9PiA8VUlQcm92aWRlciBzaXRlU2V0dGluZ3M9e3NpdGVTZXR0aW5nc30+e2NoaWxkcmVufTwvVUlQcm92aWRlcj5cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2lkZWJhciB9IGZyb20gJy4vU2lkZWJhcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ0RvdHMgfSBmcm9tICcuL0xvYWRpbmdEb3RzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rIH0gZnJvbSAnLi9MaW5rJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbWFnZUNhcm91c2VsIH0gZnJvbSAnLi9JbWFnZUNhcm91c2VsJ1xuIiwiaWYgKCFwcm9jZXNzLmVudi5CVUlMREVSX1BVQkxJQ19LRVkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVudiB2YXJpYWxiZSBCVUlMREVSX1BVQkxJQ19LRVknKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuQlVJTERFUl9QVUJMSUNfS0VZLFxuICBwcm9kdWN0c01vZGVsOiAnc2hvcGlmeS1wcm9kdWN0JyxcbiAgY29sbGVjdGlvbnNNb2RlbDogJ3Nob3BpZnktY29sbGVjdGlvbicsXG4gIGlzRGVtbzogQm9vbGVhbihwcm9jZXNzLmVudi5JU19ERU1PKSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaXNEZXY6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxufVxuIiwiaWYgKCFwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFX0RPTUFJTikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgZW52aXJvbm1lbnQgdmFyaWFibGUgU0hPUElGWV9TVE9SRV9ET01BSU4nKVxufVxuaWYgKCFwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFRlJPTlRfQVBJX1RPS0VOKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnTWlzc2luZyByZXF1aXJlZCBlbnZpcm9ubWVudCB2YXJpYWJsZSBTSE9QSUZZX1NUT1JFRlJPTlRfQVBJX1RPS0VOJ1xuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZG9tYWluOiBwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFX0RPTUFJTixcbiAgc3RvcmVmcm9udEFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5TSE9QSUZZX1NUT1JFRlJPTlRfQVBJX1RPS0VOLFxufVxuIiwiaW1wb3J0ICogYXMgdGhlbWVzIGZyb20gJ0B0aGVtZS11aS9wcmVzZXRzJ1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZXMgYXMgYW55XG4iLCJpbXBvcnQgeyByZXNvbHZlQnVpbGRlckNvbnRlbnQgfSBmcm9tICcuL3Jlc29sdmUtYnVpbGRlci1jb250ZW50J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGF5b3V0UHJvcHModGFyZ2V0aW5nQXR0cmlidXRlcz86IGFueSkge1xuICBjb25zdCB0aGVtZSA9IGF3YWl0IHJlc29sdmVCdWlsZGVyQ29udGVudCgndGhlbWUnLCB0YXJnZXRpbmdBdHRyaWJ1dGVzKVxuXG4gIHJldHVybiB7XG4gICAgdGhlbWU6IHRoZW1lIHx8IG51bGwsXG4gIH1cbn1cbiIsImltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQ09PS0lFX05BTUUgPSAnYWNjZXB0X2Nvb2tpZXMnXG5cbmV4cG9ydCBjb25zdCB1c2VBY2NlcHRDb29raWVzID0gKCkgPT4ge1xuICBjb25zdCBbYWNjZXB0ZWRDb29raWVzLCBzZXRBY2NlcHRlZENvb2tpZXNdID0gdXNlU3RhdGUodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghQ29va2llcy5nZXQoQ09PS0lFX05BTUUpKSB7XG4gICAgICBzZXRBY2NlcHRlZENvb2tpZXMoZmFsc2UpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBhY2NlcHRDb29raWVzID0gKCkgPT4ge1xuICAgIHNldEFjY2VwdGVkQ29va2llcyh0cnVlKVxuICAgIENvb2tpZXMuc2V0KENPT0tJRV9OQU1FLCAnYWNjZXB0ZWQnLCB7IGV4cGlyZXM6IDM2NSB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhY2NlcHRlZENvb2tpZXMsXG4gICAgb25BY2NlcHRDb29raWVzOiBhY2NlcHRDb29raWVzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBidWlsZGVyLCBCdWlsZGVyIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcmVhY3QnXG5pbXBvcnQgeyBnZXRBc3luY1Byb3BzIH0gZnJvbSAnQGJ1aWxkZXIuaW8vdXRpbHMnXG5pbXBvcnQgYnVpbGRlckNvbmZpZyBmcm9tICdAY29uZmlnL2J1aWxkZXInXG5pbXBvcnQge1xuICBnZXRDb2xsZWN0aW9uLFxuICBnZXRQcm9kdWN0LFxuICBzZWFyY2hQcm9kdWN0cyxcbn0gZnJvbSAnLi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvYXBpL29wZXJhdGlvbnMtYnVpbGRlcidcbmJ1aWxkZXIuaW5pdChidWlsZGVyQ29uZmlnLmFwaUtleSlcbkJ1aWxkZXIuaXNTdGF0aWMgPSB0cnVlXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlQnVpbGRlckNvbnRlbnQoXG4gIG1vZGVsTmFtZTogc3RyaW5nLFxuICB0YXJnZXRpbmdBdHRyaWJ1dGVzPzogYW55XG4pIHtcbiAgbGV0IHBhZ2UgPSBhd2FpdCBidWlsZGVyXG4gICAgLmdldChtb2RlbE5hbWUsIHtcbiAgICAgIHVzZXJBdHRyaWJ1dGVzOiB0YXJnZXRpbmdBdHRyaWJ1dGVzLFxuICAgICAgaW5jbHVkZVJlZnM6IHRydWUsXG4gICAgICBwcmV2aWV3OiBtb2RlbE5hbWUsXG4gICAgICBjYWNoZWJ1c3Q6IHRydWUsXG4gICAgfSBhcyBhbnkpXG4gICAgLnRvUHJvbWlzZSgpXG5cbiAgaWYgKHBhZ2UpIHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0QXN5bmNQcm9wcyhwYWdlLCB7XG4gICAgICBhc3luYyBQcm9kdWN0R3JpZChwcm9wcykge1xuICAgICAgICBsZXQgcHJvZHVjdHM6IGFueVtdID0gW11cbiAgICAgICAgaWYgKHByb3BzLnByb2R1Y3RzTGlzdCkge1xuICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gcHJvcHMucHJvZHVjdHNMaXN0XG4gICAgICAgICAgICAubWFwKChlbnRyeTogYW55KSA9PiBlbnRyeS5wcm9kdWN0KVxuICAgICAgICAgICAgLmZpbHRlcigoaGFuZGxlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHR5cGVvZiBoYW5kbGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgYXN5bmMgKGhhbmRsZTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgIGF3YWl0IGdldFByb2R1Y3QoYnVpbGRlckNvbmZpZywgeyBoYW5kbGUgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICBwcm9kdWN0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLy8gcmVzb2x2ZSB0aGUgcXVlcnkgYXMgYHByb2R1Y3RzYCBmb3Igc3NyXG4gICAgICAgICAgLy8gdXNlZCBmb3IgZXhhbXBsZSBpbiBQcm9kdWN0R3JpZC50c3ggYXMgaW5pdGlhbFByb2R1Y3RzXG4gICAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBDb2xsZWN0aW9uQm94KHByb3BzKSB7XG4gICAgICAgIGxldCBjb2xsZWN0aW9uID0gcHJvcHMuY29sbGVjdGlvblxuICAgICAgICBpZiAoY29sbGVjdGlvbiAmJiB0eXBlb2YgY29sbGVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb2xsZWN0aW9uID0gYXdhaXQgZ2V0Q29sbGVjdGlvbihidWlsZGVyQ29uZmlnLCB7XG4gICAgICAgICAgICBoYW5kbGU6IGNvbGxlY3Rpb24sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBQcm9kdWN0Qm94KHByb3BzKSB7XG4gICAgICAgIGxldCBwcm9kdWN0ID0gcHJvcHMucHJvZHVjdFxuICAgICAgICBpZiAocHJvZHVjdCAmJiB0eXBlb2YgcHJvZHVjdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBwcm9kdWN0ID0gYXdhaXQgZ2V0UHJvZHVjdChidWlsZGVyQ29uZmlnLCB7XG4gICAgICAgICAgICBoYW5kbGU6IHByb2R1Y3QsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIFByb2R1Y3RDb2xsZWN0aW9uR3JpZCh7IGNvbGxlY3Rpb24gfSkge1xuICAgICAgICBpZiAoY29sbGVjdGlvbiAmJiB0eXBlb2YgY29sbGVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCBnZXRDb2xsZWN0aW9uKGJ1aWxkZXJDb25maWcsIHtcbiAgICAgICAgICAgIGhhbmRsZTogY29sbGVjdGlvbixcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuIiwiZXhwb3J0IHsgQ29tbWVyY2VQcm92aWRlciB9IGZyb20gJy4vc3JjL0NvbW1lcmNlUHJvdmlkZXInXG5leHBvcnQgKiBmcm9tICcuL3NyYy9ob29rcydcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2hvcGlmeUJ1eSBmcm9tICdzaG9waWZ5LWJ1eSdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIExvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1lcmNlUHJvdmlkZXJQcm9wcyBleHRlbmRzIFNob3BpZnlCdXkuQ29uZmlnIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tbWVyY2VQcm92aWRlcih7XG4gIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbixcbiAgZG9tYWluLFxuICBjaGlsZHJlbixcbn06IENvbW1lcmNlUHJvdmlkZXJQcm9wcykge1xuICBpZiAoZG9tYWluID09IG51bGwgfHwgc3RvcmVmcm9udEFjY2Vzc1Rva2VuID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnVW5hYmxlIHRvIGJ1aWxkIHNob3BpZnktYnV5IGNsaWVudCBvYmplY3QuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3VyIGFjY2VzcyB0b2tlbiBhbmQgZG9tYWluIGFyZSBjb3JyZWN0LidcbiAgICApXG4gIH1cblxuICBjb25zdCBpbml0aWFsQ2FydCA9IExvY2FsU3RvcmFnZS5nZXRJbml0aWFsQ2FydCgpXG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlPFNob3BpZnlCdXkuQ2FydCB8IG51bGw+KGluaXRpYWxDYXJ0KVxuXG4gIGNvbnN0IGlzQ3VzdG9tRG9tYWluID0gZG9tYWluLmluY2x1ZGVzKCcuJylcblxuICBjb25zdCBjbGllbnQgPSBTaG9waWZ5QnV5LmJ1aWxkQ2xpZW50KHtcbiAgICBzdG9yZWZyb250QWNjZXNzVG9rZW4sXG4gICAgZG9tYWluOiBpc0N1c3RvbURvbWFpbiA/IGRvbWFpbiA6IGAke2RvbWFpbn0ubXlzaG9waWZ5LmNvbWAsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXROZXdDYXJ0KCkge1xuICAgICAgY29uc3QgbmV3Q2FydCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5jcmVhdGUoKVxuICAgICAgc2V0Q2FydChuZXdDYXJ0KVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hFeGlzdGluZ0NhcnQoY2FydElkOiBzdHJpbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlZnJlc2hlZENhcnQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQuZmV0Y2goY2FydElkKVxuXG4gICAgICAgIGlmIChyZWZyZXNoZWRDYXJ0ID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0TmV3Q2FydCgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYXJ0SGFzQmVlblB1cmNoYXNlZCA9IEJvb2xlYW4ocmVmcmVzaGVkQ2FydC5jb21wbGV0ZWRBdClcblxuICAgICAgICBpZiAoY2FydEhhc0JlZW5QdXJjaGFzZWQpIHtcbiAgICAgICAgICBnZXROZXdDYXJ0KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRDYXJ0KHJlZnJlc2hlZENhcnQpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNhcnQgPT0gbnVsbCkge1xuICAgICAgZ2V0TmV3Q2FydCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZnJlc2hFeGlzdGluZ0NhcnQoU3RyaW5nKGNhcnQuaWQpKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBMb2NhbFN0b3JhZ2Uuc2V0KExvY2FsU3RvcmFnZUtleXMuQ0FSVCwgSlNPTi5zdHJpbmdpZnkoY2FydCkpXG4gIH0sIFtjYXJ0XSlcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjbGllbnQsXG4gICAgICAgIGNhcnQsXG4gICAgICAgIHNldENhcnQsXG4gICAgICAgIGRvbWFpbixcbiAgICAgICAgc3RvcmVmcm9udEFjY2Vzc1Rva2VuLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2hvcGlmeUJ1eSBmcm9tICdzaG9waWZ5LWJ1eSdcblxuaW50ZXJmYWNlIENvbnRleHRTaGFwZSB7XG4gIGNsaWVudDogU2hvcGlmeUJ1eS5DbGllbnQgfCBudWxsXG4gIGNhcnQ6IFNob3BpZnlCdXkuQ2FydCB8IG51bGxcbiAgc2V0Q2FydDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248U2hvcGlmeUJ1eS5DYXJ0IHwgbnVsbD4+XG4gIGRvbWFpbjogc3RyaW5nXG4gIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbjogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb250ZXh0U2hhcGU+KHtcbiAgY2xpZW50OiBudWxsLFxuICBjYXJ0OiBudWxsLFxuICBkb21haW46ICcnLFxuICBzdG9yZWZyb250QWNjZXNzVG9rZW46ICcnLFxuICBzZXRDYXJ0OiAoKSA9PiB7XG4gICAgdGhyb3cgRXJyb3IoJ1lvdSBmb3Jnb3QgdG8gd3JhcCB0aGlzIGluIGEgUHJvdmlkZXIgb2JqZWN0JylcbiAgfSxcbn0pXG4iLCJpbXBvcnQgKiBhcyBxcyBmcm9tICdxcydcblxuZXhwb3J0IGludGVyZmFjZSBCdWlsbGRlckNvbmZpZyB7XG4gIGFwaUtleTogc3RyaW5nXG4gIHByb2R1Y3RzTW9kZWw6IHN0cmluZ1xuICBjb2xsZWN0aW9uc01vZGVsOiBzdHJpbmdcbiAgaXNEZW1vPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbGxlY3Rpb25Qcm9kdWN0c1F1ZXJ5IHtcbiAgaGFuZGxlOiBzdHJpbmdcbiAgbGltaXQ/OiBudW1iZXJcbiAgY3Vyc29yPzogc3RyaW5nXG4gIGFwaUtleTogc3RyaW5nXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQcm9kdWN0cyhcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgbGltaXQgPSAxMDAsXG4gIG9mZnNldCA9IDBcbikge1xuICBjb25zdCBwcm9kdWN0c0NvbnRlbnQgPSAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjIvY29udGVudC8ke2NvbmZpZy5wcm9kdWN0c01vZGVsfT9hcGlLZXk9JHtjb25maWcuYXBpS2V5fSZsaW1pdD0ke2xpbWl0fSZvZmZzZXQ9JHtvZmZzZXR9JmNhY2hlYnVzdD10cnVlYFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApLnJlc3VsdHNcblxuICByZXR1cm4gcHJvZHVjdHNDb250ZW50Lm1hcCgocHI6IGFueSkgPT4gcHIuZGF0YSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFByb2R1Y3RzKFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBzZWFyY2hTdHJpbmc6IHN0cmluZyxcbiAgbGltaXQgPSAxMDAsXG4gIG9mZnNldCA9IDBcbikge1xuICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeShcbiAgICB7XG4gICAgICBmaWVsZHM6IFsnZGF0YSddLFxuICAgICAgbGltaXQsXG4gICAgICBvZmZzZXQsXG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgfSxcbiAgICB7IGFsbG93RG90czogdHJ1ZSB9XG4gIClcblxuICBjb25zdCBwcm9kdWN0c0NvbnRlbnQgPSAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjIvY29udGVudC8ke1xuICAgICAgICBjb25maWcucHJvZHVjdHNNb2RlbFxuICAgICAgfT8ke3F1ZXJ5fSZxdWVyeS5kYXRhLnRpdGxlPSR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAkcmVnZXg6IGAke3NlYXJjaFN0cmluZ31gLFxuICAgICAgICAkb3B0aW9uczogJ2knLFxuICAgICAgfSl9YFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApLnJlc3VsdHNcbiAgcmV0dXJuIHByb2R1Y3RzQ29udGVudD8ubWFwKChwcm9kdWN0OiBhbnkpID0+IHByb2R1Y3QuZGF0YSkgfHwgW11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RQYXRocyhcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgbGltaXQ/OiBudW1iZXJcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgcHJvZHVjdHM6IGFueVtdID0gYXdhaXQgZ2V0QWxsUHJvZHVjdHMoY29uZmlnLCBsaW1pdClcbiAgcmV0dXJuIHByb2R1Y3RzPy5tYXAoKGVudHJ5KSA9PiBlbnRyeS5oYW5kbGUpIHx8IFtdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0KFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBvcHRpb25zOiB7IGlkPzogc3RyaW5nOyBoYW5kbGU/OiBzdHJpbmc7IHdpdGhDb250ZW50PzogYm9vbGVhbiB9XG4pIHtcbiAgaWYgKEJvb2xlYW4ob3B0aW9ucy5pZCkgPT09IEJvb2xlYW4ob3B0aW9ucy5oYW5kbGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFaXRoZXIgYSBoYW5kbGUgb3IgaWQgaXMgcmVxdWlyZWQnKVxuICB9XG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcbiAgICBsaW1pdDogMSxcbiAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgcXVlcnk6IHtcbiAgICAgIGRhdGE6IG9wdGlvbnMuaWRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpZDogeyAkZXE6IG9wdGlvbnMuaWQgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgaGFuZGxlOiB7ICRlcTogb3B0aW9ucy5oYW5kbGUgfSxcbiAgICAgICAgICB9LFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgcHJvZHVjdHNDb250ZW50ID0gKFxuICAgIGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vY2RuLmJ1aWxkZXIuaW8vYXBpL3YyL2NvbnRlbnQvJHtjb25maWcucHJvZHVjdHNNb2RlbH0/JHtxdWVyeX1gXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICkucmVzdWx0c1xuXG4gIGlmIChvcHRpb25zLndpdGhDb250ZW50KSB7XG4gICAgcmV0dXJuIHByb2R1Y3RzQ29udGVudFswXVxuICB9XG4gIHJldHVybiBwcm9kdWN0c0NvbnRlbnRbMF0/LmRhdGFcbn1cblxuLyoqXG4gKiBDb2xsZWN0aW9uc1xuICovXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDb2xsZWN0aW9ucyhcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgbGltaXQgPSAyMCxcbiAgb2Zmc2V0ID0gMCxcbiAgZmllbGRzPzogc3RyaW5nXG4pIHtcbiAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoXG4gICAge1xuICAgICAgZmllbGRzOiBmaWVsZHMgfHwgJ2RhdGEnLFxuICAgICAgbGltaXQsXG4gICAgICBvZmZzZXQsXG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBjYWNoZWJ1c3Q6IHRydWUsXG4gICAgfSxcbiAgICB7IGFsbG93RG90czogdHJ1ZSB9XG4gIClcblxuICBjb25zdCBjb2xsZWN0aW9uc0NvbnRlbnQgPSAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjIvY29udGVudC8ke2NvbmZpZy5jb2xsZWN0aW9uc01vZGVsfT8ke3F1ZXJ5fWBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgKS5yZXN1bHRzXG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25zQ29udGVudD8ubWFwKChlbnRyeTogYW55KSA9PiBlbnRyeS5kYXRhKSB8fCBbXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoQ29sbGVjdGlvbnMoXG4gIGNvbmZpZzogQnVpbGxkZXJDb25maWcsXG4gIHNlYXJjaFN0cmluZzogc3RyaW5nLFxuICBsaW1pdCA9IDEwMCxcbiAgb2Zmc2V0ID0gMFxuKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KFxuICAgIHtcbiAgICAgIGZpZWxkczogWydkYXRhJ10sXG4gICAgICBsaW1pdCxcbiAgICAgIG9mZnNldCxcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICB9LFxuICAgIHsgYWxsb3dEb3RzOiB0cnVlIH1cbiAgKVxuXG4gIGNvbnN0IGNvbGxlY3Rpb25zQ29udGVudCA9IChcbiAgICBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92Mi9jb250ZW50LyR7XG4gICAgICAgIGNvbmZpZy5jb2xsZWN0aW9uc01vZGVsXG4gICAgICB9PyR7cXVlcnl9JnF1ZXJ5LiRvcj0ke0pTT04uc3RyaW5naWZ5KFtcbiAgICAgICAge1xuICAgICAgICAgICdkYXRhLmRlc2NyaXB0aW9uJzogeyAkcmVnZXg6IGAke3NlYXJjaFN0cmluZ31gIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnZGF0YS50aXRsZSc6IHsgJHJlZ2V4OiBgJHtzZWFyY2hTdHJpbmd9YCB9LFxuICAgICAgICB9LFxuICAgICAgXSl9YFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApLnJlc3VsdHNcbiAgcmV0dXJuIGNvbGxlY3Rpb25zQ29udGVudD8ubWFwKChlbnRyeTogYW55KSA9PiBlbnRyeS5kYXRhKSB8fCBbXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ29sbGVjdGlvblBhdGhzKFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBsaW1pdD86IG51bWJlclxuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCBjb2xsZWN0aW9uczogYW55W10gPSBhd2FpdCBnZXRBbGxDb2xsZWN0aW9ucyhjb25maWcsIGxpbWl0KVxuICByZXR1cm4gY29sbGVjdGlvbnM/Lm1hcCgoZW50cnkpID0+IGVudHJ5LmhhbmRsZSkgfHwgW11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbGxlY3Rpb24oXG4gIGNvbmZpZzogQnVpbGxkZXJDb25maWcsXG4gIG9wdGlvbnM6IHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGhhbmRsZT86IHN0cmluZ1xuICAgIHByb2R1Y3RzUXVlcnk/OiBPbWl0PENvbGxlY3Rpb25Qcm9kdWN0c1F1ZXJ5LCAnaGFuZGxlJz5cbiAgfVxuKSB7XG4gIGlmIChCb29sZWFuKG9wdGlvbnMuaWQpID09PSBCb29sZWFuKG9wdGlvbnMuaGFuZGxlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRWl0aGVyIGEgaGFuZGxlIG9yIGlkIGlzIHJlcXVpcmVkJylcbiAgfVxuICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XG4gICAgbGltaXQ6IDEsXG4gICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgIGNhY2hlYnVzdDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcbiAgICBxdWVyeToge1xuICAgICAgZGF0YTogb3B0aW9ucy5pZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGlkOiB7ICRlcTogb3B0aW9ucy5pZCB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBoYW5kbGU6IHsgJGVxOiBvcHRpb25zLmhhbmRsZSB9LFxuICAgICAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBjb2xsZWN0aW9uc0NvbnRlbnQgPSAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjIvY29udGVudC8ke2NvbmZpZy5jb2xsZWN0aW9uc01vZGVsfT8ke3F1ZXJ5fWBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgKS5yZXN1bHRzXG5cbiAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zQ29udGVudFswXT8uZGF0YVxuICBpZiAoY29uZmlnLmlzRGVtbykge1xuICAgIHJldHVybiBjb2xsZWN0aW9uXG4gIH1cbiAgY29uc3QgcHJvZHVjdHNRdWVyeSA9IHtcbiAgICBsaW1pdDogMjAsXG4gICAgaGFuZGxlOiBjb2xsZWN0aW9uPy5oYW5kbGUsXG4gICAgLi4ub3B0aW9ucy5wcm9kdWN0c1F1ZXJ5LFxuICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgfVxuICBjb25zdCB7IHByb2R1Y3RzLCBuZXh0UGFnZUN1cnNvciwgaGFzTmV4dFBhZ2UgfSA9IGF3YWl0IGdldENvbGxlY3Rpb25Qcm9kdWN0cyhcbiAgICBwcm9kdWN0c1F1ZXJ5XG4gIClcblxuICByZXR1cm4ge1xuICAgIC4uLmNvbGxlY3Rpb24sXG4gICAgcHJvZHVjdHMsXG4gICAgbmV4dFBhZ2VDdXJzb3IsXG4gICAgaGFzTmV4dFBhZ2UsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbGxlY3Rpb25Qcm9kdWN0cyA9IChcbiAgcHJvZHVjdHNRdWVyeTogQ29sbGVjdGlvblByb2R1Y3RzUXVlcnlcbik6IFByb21pc2U8e1xuICBuZXh0UGFnZUN1cnNvcjogc3RyaW5nXG4gIHByb2R1Y3RzOiBhbnlbXVxuICBoYXNOZXh0UGFnZTogYm9vbGVhblxufT4gPT4ge1xuICBjb25zdCBzZWFyY2ggPSBxcy5zdHJpbmdpZnkocHJvZHVjdHNRdWVyeSlcbiAgcmV0dXJuIGZldGNoKFxuICAgIGBodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92MS9zaG9waWZ5LXN5bmMvY29sbGVjdGlvbi1wcm9kdWN0cz8ke3NlYXJjaH1gXG4gICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxufVxuIiwiZXhwb3J0IHsgdXNlQ2xpZW50VW5zYWZlIH0gZnJvbSAnLi91c2VDbGllbnRVbnNhZmUnXG5leHBvcnQgeyB1c2VTZXRDYXJ0VW5zYWZlIH0gZnJvbSAnLi91c2VTZXRDYXJ0VW5zYWZlJ1xuZXhwb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4vdXNlQ2FydCdcbmV4cG9ydCB7IHVzZUNhcnRDb3VudCB9IGZyb20gJy4vdXNlQ2FydENvdW50J1xuZXhwb3J0IHsgdXNlQWRkSXRlbVRvQ2FydCB9IGZyb20gJy4vdXNlQWRkSXRlbVRvQ2FydCdcbmV4cG9ydCB7IHVzZUFkZEl0ZW1zVG9DYXJ0IH0gZnJvbSAnLi91c2VBZGRJdGVtc1RvQ2FydCdcbmV4cG9ydCB7IHVzZVJlbW92ZUl0ZW1Gcm9tQ2FydCB9IGZyb20gJy4vdXNlUmVtb3ZlSXRlbUZyb21DYXJ0J1xuZXhwb3J0IHsgdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCB9IGZyb20gJy4vdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCdcbmV4cG9ydCB7IHVzZUNhcnRJdGVtcyB9IGZyb20gJy4vdXNlQ2FydEl0ZW1zJ1xuZXhwb3J0IHsgdXNlQ2hlY2tvdXRVcmwgfSBmcm9tICcuL3VzZUNoZWNrb3V0VXJsJ1xuZXhwb3J0IHsgdXNlR2V0TGluZUl0ZW0gfSBmcm9tICcuL3VzZUdldExpbmVJdGVtJ1xuZXhwb3J0IHsgdXNlVXBkYXRlSXRlbVF1YW50aXR5IH0gZnJvbSAnLi91c2VVcGRhdGVJdGVtUXVhbnRpdHknXG4iLCJpbXBvcnQgeyB1c2VBZGRJdGVtc1RvQ2FydCB9IGZyb20gJy4vdXNlQWRkSXRlbXNUb0NhcnQnXG5pbXBvcnQgeyBBdHRyaWJ1dGVJbnB1dCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRkSXRlbVRvQ2FydCgpIHtcbiAgY29uc3QgYWRkSXRlbXNUb0NhcnQgPSB1c2VBZGRJdGVtc1RvQ2FydCgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbVRvQ2FydChcbiAgICB2YXJpYW50SWQ6IG51bWJlciB8IHN0cmluZyxcbiAgICBxdWFudGl0eTogbnVtYmVyLFxuICAgIGN1c3RvbUF0dHJpYnV0ZXM/OiBBdHRyaWJ1dGVJbnB1dFtdXG4gICkge1xuICAgIGNvbnN0IGl0ZW0gPSBbeyB2YXJpYW50SWQsIHF1YW50aXR5LCBjdXN0b21BdHRyaWJ1dGVzIH1dXG5cbiAgICByZXR1cm4gYWRkSXRlbXNUb0NhcnQoaXRlbSlcbiAgfVxuXG4gIHJldHVybiBhZGRJdGVtVG9DYXJ0XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcbmltcG9ydCBTaG9waWZ5QnV5IGZyb20gJ3Nob3BpZnktYnV5J1xuaW1wb3J0IHsgTGluZUl0ZW1QYXRjaCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWRkSXRlbXNUb0NhcnQoKSB7XG4gIGNvbnN0IHsgY2xpZW50LCBjYXJ0LCBzZXRDYXJ0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkSXRlbXNUb0NhcnQoaXRlbXM6IExpbmVJdGVtUGF0Y2hbXSkge1xuICAgIGlmIChjYXJ0ID09IG51bGwgfHwgY2xpZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGVkIGFkZEl0ZW1zVG9DYXJ0IHRvbyBzb29uJylcbiAgICB9XG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnTXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBsaW5lIGl0ZW0sIGVtcHR5IGxpbmUgaXRlbXMgZm91bmQnXG4gICAgICApXG4gICAgfVxuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0udmFyaWFudElkID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIHZhcmlhbnRJZCBpbiBpdGVtYClcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0ucXVhbnRpdHkgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYE1pc3NpbmcgcXVhbnRpdHkgaW4gaXRlbSB3aXRoIHZhcmlhbnQgaWQ6ICR7aXRlbS52YXJpYW50SWR9YFxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnF1YW50aXR5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgUXVhbnRpdHkgaXMgbm90IGEgbnVtYmVyIGluIGl0ZW0gd2l0aCB2YXJpYW50IGlkOiAke2l0ZW0udmFyaWFudElkfWBcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmIChpdGVtLnF1YW50aXR5IDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFF1YW50aXR5IG11c3Qgbm90IGJlIGxlc3MgdGhhbiBvbmUgaW4gaXRlbSB3aXRoIHZhcmlhbnQgaWQ6ICR7aXRlbS52YXJpYW50SWR9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG5ld0NhcnQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQuYWRkTGluZUl0ZW1zKFxuICAgICAgY2FydC5pZCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaXRlbXMgYXMgU2hvcGlmeUJ1eS5MaW5lSXRlbVtdXG4gICAgKVxuICAgIHNldENhcnQobmV3Q2FydClcbiAgfVxuXG4gIHJldHVybiBhZGRJdGVtc1RvQ2FydFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0KCkge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgcmV0dXJuIGNhcnRcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydENvdW50KCkge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgaWYgKGNhcnQgPT0gbnVsbCB8fCBjYXJ0LmxpbmVJdGVtcy5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGNvdW50ID0gY2FydC5saW5lSXRlbXMucmVkdWNlKCh0b3RhbENvdW50LCBsaW5lSXRlbSkgPT4ge1xuICAgIHJldHVybiB0b3RhbENvdW50ICsgbGluZUl0ZW0ucXVhbnRpdHlcbiAgfSwgMClcblxuICByZXR1cm4gY291bnRcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydEl0ZW1zKCkge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgaWYgKCFjYXJ0IHx8ICFBcnJheS5pc0FycmF5KGNhcnQubGluZUl0ZW1zKSkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcmV0dXJuIGNhcnQubGluZUl0ZW1zXG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoZWNrb3V0VXJsKCk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgaWYgKGNhcnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gY2FydC53ZWJVcmxcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xpZW50VW5zYWZlKCkge1xuICBjb25zdCB7IGNsaWVudCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnVXNpbmcgY2xpZW50IGRpcmVjdGx5IHdpbGwgaGl0IHNob3BpZnkgQVBJIGFuZCBjb3VudHMgdG93YXJkcyB5b3VyIHN0b3JlZnJvbnQgcmF0ZSBsaW1pdCdcbiAgICApXG4gIH1cbiAgcmV0dXJuIGNsaWVudFxufVxuIiwiaW1wb3J0IHsgdXNlQ2FydEl0ZW1zIH0gZnJvbSAnLi91c2VDYXJ0SXRlbXMnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRMaW5lSXRlbSgpIHtcbiAgY29uc3QgY2FydEl0ZW1zID0gdXNlQ2FydEl0ZW1zKClcblxuICBmdW5jdGlvbiBnZXRMaW5lSXRlbSh2YXJpYW50SWQ6IHN0cmluZyB8IG51bWJlcik6IFNob3BpZnlCdXkuTGluZUl0ZW0gfCBudWxsIHtcbiAgICBpZiAoY2FydEl0ZW1zLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9IGNhcnRJdGVtcy5maW5kKChjYXJ0SXRlbSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gY2FydEl0ZW0udmFyaWFudC5pZCA9PT0gdmFyaWFudElkXG4gICAgfSlcblxuICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1cbiAgfVxuXG4gIHJldHVybiBnZXRMaW5lSXRlbVxufVxuIiwiaW1wb3J0IHsgdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCB9IGZyb20gJy4vdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlbW92ZUl0ZW1Gcm9tQ2FydCgpIHtcbiAgY29uc3QgcmVtb3ZlSXRlbXNGcm9tQ2FydCA9IHVzZVJlbW92ZUl0ZW1zRnJvbUNhcnQoKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUl0ZW1Gcm9tQ2FydCh2YXJpYW50SWQ6IG51bWJlciB8IHN0cmluZykge1xuICAgIGlmICh2YXJpYW50SWQgPT09ICcnIHx8IHZhcmlhbnRJZCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhcmlhbnRJZCBtdXN0IG5vdCBiZSBibGFuayBvciBudWxsJylcbiAgICB9XG5cbiAgICByZXR1cm4gcmVtb3ZlSXRlbXNGcm9tQ2FydChbU3RyaW5nKHZhcmlhbnRJZCldKVxuICB9XG5cbiAgcmV0dXJuIHJlbW92ZUl0ZW1Gcm9tQ2FydFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5pbXBvcnQgeyB1c2VHZXRMaW5lSXRlbSB9IGZyb20gJy4vdXNlR2V0TGluZUl0ZW0nXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZW1vdmVJdGVtc0Zyb21DYXJ0KCkge1xuICBjb25zdCB7IGNsaWVudCwgY2FydCwgc2V0Q2FydCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBjb25zdCBnZXRMaW5lSXRlbSA9IHVzZUdldExpbmVJdGVtKClcblxuICBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtc0Zyb21DYXJ0KHZhcmlhbnRJZHM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKGNhcnQgPT0gbnVsbCB8fCBjbGllbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgcmVtb3ZlSXRlbXNGcm9tQ2FydCB0b28gc29vbicpXG4gICAgfVxuXG4gICAgaWYgKHZhcmlhbnRJZHMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGl0ZW0gdG8gcmVtb3ZlJylcbiAgICB9XG5cbiAgICBjb25zdCBsaW5lSXRlbUlkcyA9IHZhcmlhbnRJZHMubWFwKCh2YXJpYW50SWQpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVJdGVtID0gZ2V0TGluZUl0ZW0odmFyaWFudElkKVxuICAgICAgaWYgKGxpbmVJdGVtID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ291bGQgbm90IGZpbmQgbGluZSBpdGVtIGluIGNhcnQgd2l0aCB2YXJpYW50IGlkOiAke3ZhcmlhbnRJZH1gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJldHVybiBTdHJpbmcobGluZUl0ZW0uaWQpXG4gICAgfSlcblxuICAgIGNvbnN0IG5ld0NhcnQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQucmVtb3ZlTGluZUl0ZW1zKGNhcnQuaWQsIGxpbmVJdGVtSWRzKVxuICAgIHNldENhcnQobmV3Q2FydClcbiAgfVxuXG4gIHJldHVybiByZW1vdmVJdGVtc0Zyb21DYXJ0XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNldENhcnRVbnNhZmUoKSB7XG4gIGNvbnN0IHsgc2V0Q2FydCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICByZXR1cm4gc2V0Q2FydFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5cbmltcG9ydCB7IHVzZUdldExpbmVJdGVtIH0gZnJvbSAnLi91c2VHZXRMaW5lSXRlbSdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZUl0ZW1RdWFudGl0eSgpIHtcbiAgY29uc3QgeyBjbGllbnQsIGNhcnQsIHNldENhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgY29uc3QgZ2V0TGluZUl0ZW0gPSB1c2VHZXRMaW5lSXRlbSgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSXRlbVF1YW50aXR5KFxuICAgIHZhcmlhbnRJZDogc3RyaW5nIHwgbnVtYmVyLFxuICAgIHF1YW50aXR5OiBudW1iZXJcbiAgKSB7XG4gICAgaWYgKHZhcmlhbnRJZCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcHJvdmlkZSBhIHZhcmlhbnQgaWQnKVxuICAgIH1cblxuICAgIGlmIChxdWFudGl0eSA9PSBudWxsIHx8IE51bWJlcihxdWFudGl0eSkgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1YW50aXR5IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKVxuICAgIH1cblxuICAgIGNvbnN0IGxpbmVJdGVtID0gZ2V0TGluZUl0ZW0odmFyaWFudElkKVxuICAgIGlmIChsaW5lSXRlbSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEl0ZW0gd2l0aCB2YXJpYW50SWQgJHt2YXJpYW50SWR9IG5vdCBpbiBjYXJ0YClcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgbmV3Q2FydCA9IGF3YWl0IGNsaWVudC5jaGVja291dC51cGRhdGVMaW5lSXRlbXMoY2FydC5pZCwgW1xuICAgICAgeyBpZDogbGluZUl0ZW0uaWQsIHF1YW50aXR5IH0sXG4gICAgXSlcbiAgICBzZXRDYXJ0KG5ld0NhcnQpXG4gIH1cblxuICByZXR1cm4gdXBkYXRlSXRlbVF1YW50aXR5XG59XG4iLCJpbXBvcnQgU2hvcGlmeUJ1eSBmcm9tICdzaG9waWZ5LWJ1eSdcbmltcG9ydCB7IExvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuL2tleXMnXG5pbXBvcnQgeyBpc0NhcnQgfSBmcm9tICcuLi8uLi91dGlscydcblxuZnVuY3Rpb24gc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gIGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgaWYgKCFpc0Jyb3dzZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBpdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICByZXR1cm4gaXRlbVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxDYXJ0KCk6IFNob3BpZnlCdXkuQ2FydCB8IG51bGwge1xuICBjb25zdCBleGlzdGluZ0NhcnRTdHJpbmcgPSBnZXQoTG9jYWxTdG9yYWdlS2V5cy5DQVJUKVxuICBpZiAoZXhpc3RpbmdDYXJ0U3RyaW5nID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBleGlzdGluZ0NhcnQgPSBKU09OLnBhcnNlKGV4aXN0aW5nQ2FydFN0cmluZylcbiAgICBpZiAoIWlzQ2FydChleGlzdGluZ0NhcnQpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBleGlzdGluZ0NhcnQgYXMgU2hvcGlmeUJ1eS5DYXJ0XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IExvY2FsU3RvcmFnZSA9IHtcbiAgZ2V0LFxuICBzZXQsXG4gIGdldEluaXRpYWxDYXJ0LFxufVxuIiwiaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9Mb2NhbFN0b3JhZ2UnXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi9rZXlzJ1xuXG5leHBvcnQgeyBMb2NhbFN0b3JhZ2UsIExvY2FsU3RvcmFnZUtleXMgfVxuIiwiY29uc3QgQ0FSVCA9ICdzaG9waWZ5X2xvY2FsX3N0b3JlX19jYXJ0J1xuY29uc3QgQ0hFQ0tPVVRfSUQgPSAnc2hvcGlmeV9sb2NhbF9zdG9yZV9fY2hlY2tvdXRfaWQnXG5cbmV4cG9ydCBjb25zdCBMb2NhbFN0b3JhZ2VLZXlzID0ge1xuICBDQVJULFxuICBDSEVDS09VVF9JRCxcbn1cbiIsImltcG9ydCB7IExvY2FsU3RvcmFnZSwgTG9jYWxTdG9yYWdlS2V5cyB9IGZyb20gJy4vTG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHsgaXNDYXJ0IH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IHsgTG9jYWxTdG9yYWdlLCBMb2NhbFN0b3JhZ2VLZXlzLCBpc0NhcnQgfVxuIiwiLyogXG4gIHByZXBhcmVWYXJpYW50c1dpdGhPcHRpb25zKClcblxuICBUaGlzIGZ1bmN0aW9uIGNoYW5nZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgdmFyaWFudHMgdG9cbiAgbW9yZSBlYXNpbHkgZ2V0IGF0IHRoZWlyIG9wdGlvbnMuIFRoZSBvcmlnaW5hbCBkYXRhIFxuICBzdHJ1Y3R1cmUgbG9va3MgbGlrZSB0aGlzOlxuXG4gIHtcbiAgICBcInNob3BpZnlJZFwiOiBcIloybGtPaTh2YzJodmNHbG1lUzlRY205a2RXTjBWbUZ5YVdGdWRDOHpNVGM0TkRRNE1UQXpNREU0T0E9PVwiLFxuICAgIFwic2VsZWN0ZWRPcHRpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQ29sb3JcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIlJlZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJTaXplXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJTbWFsbFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuXG4gIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyB0aGF0IGFuZCBvdXRwdXRzIGEgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBsb29rcyBsaWtlIHRoaXM6XG5cbiAge1xuICAgIFwic2hvcGlmeUlkXCI6IFwiWjJsa09pOHZjMmh2Y0dsbWVTOVFjbTlrZFdOMFZtRnlhV0Z1ZEM4ek1UYzRORFE0TVRBek1ERTRPQT09XCIsXG4gICAgXCJjb2xvclwiOiBcIlJlZFwiLFxuICAgIFwic2l6ZVwiOiBcIlNtYWxsXCJcbiAgfSxcbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlVmFyaWFudHNXaXRoT3B0aW9ucyhcbiAgdmFyaWFudHM6IGFueVtdXG4gIC8vIHZhcmlhbnRzOiBSZWFkb25seTxTaG9waWZ5QnV5LlByb2R1Y3RWYXJpYW50W10+XG4pIHtcbiAgcmV0dXJuIHZhcmlhbnRzLm1hcCgodmFyaWFudCkgPT4ge1xuICAgIC8vIFRPRE86IGxvb2sgaW50byB0eXBlcywgcHJvYiBuZWVkIHVwZGF0ZSBpbiBAdHlwZXMvc2hvcGlmeS1idXlcbiAgICAvLyBjb252ZXJ0IHRoZSBvcHRpb25zIHRvIGEgZGljdGlvbmFyeSBpbnN0ZWFkIG9mIGFuIGFycmF5XG4gICAgY29uc3Qgb3B0aW9uc0RpY3Rpb25hcnkgPSB2YXJpYW50LnNlbGVjdGVkT3B0aW9ucz8ucmVkdWNlKFxuICAgICAgKG9wdGlvbnM6IGFueSwgb3B0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgb3B0aW9uc1tgJHtvcHRpb24/Lm5hbWU/LnRvTG93ZXJDYXNlKCl9YF0gPSBvcHRpb24/LnZhbHVlXG4gICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgICB9LFxuICAgICAge31cbiAgICApXG5cbiAgICAvLyByZXR1cm4gYW4gb2JqZWN0IHdpdGggYWxsIG9mIHRoZSB2YXJpYW50IHByb3BlcnRpZXMgKyB0aGUgb3B0aW9ucyBhdCB0aGUgdG9wIGxldmVsXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9wdGlvbnNEaWN0aW9uYXJ5LFxuICAgICAgLi4udmFyaWFudCxcbiAgICB9XG4gIH0pIGFzIGFueVtdXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcmljZSA9IChwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nKSA9PlxuICBJbnRsLk51bWJlckZvcm1hdCh1bmRlZmluZWQsIHtcbiAgICBjdXJyZW5jeSxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gIH0pLmZvcm1hdChwYXJzZUZsb2F0KHByaWNlID8gcHJpY2UgOiAnMCcpKVxuXG4vKlxuICBwcmVwYXJlVmFyaWFudHNJbWFnZXMoKVxuXG4gIFRoaXMgZnVuY3Rpb24gZGlzdGlsbHMgdGhlIHZhcmlhbnRzIGltYWdlcyBpbnRvIGEgbm9uLXJlZHVuZGFudFxuICBncm91cCB0aGF0IGluY2x1ZGVzIGFuIG9wdGlvbiAna2V5JyAobW9zdCBsaWtlbHkgY29sb3IpLiBUaGVcbiAgZGF0YXN0cnVjdHVyZSBjb21pbmcgaW50byB0aGlzIGZ1bmN0aW9uIGxvb2tzIGxpa2UgdGhpczpcblxuICB7XG4gICAgXCJzaG9waWZ5SWRcIjogXCJaMmxrT2k4dmMyaHZjR2xtZVM5UWNtOWtkV04wVm1GeWFXRnVkQzh6TVRjNE5EUTRNVEF6TURFNE9BPT1cIixcbiAgICBcImltYWdlXCI6IGltYWdlMSxcbiAgICBcImNvbG9yXCI6IFwiUmVkXCIsXG4gICAgXCJzaXplXCI6IFwiU21hbGxcIlxuICB9LFxuICB7XG4gICAgXCJzaG9waWZ5SWRcIjogXCJaMmxrT2k4dmMyaHZjR2xtZVM5UWNtOWtkV04wVm1GeWFXMWwyQzh6TVRjNE5EUTRNVEF6TURFNE9BPT1cIixcbiAgICBcImltYWdlXCI6IGltYWdlMSxcbiAgICBcImNvbG9yXCI6IFwiUmVkXCIsXG4gICAgXCJzaXplXCI6IFwiTWVkaXVtXCJcbiAgfSxcblxuICBBbmQgY29uZGVuc2VzIHRoZW0gc28gdGhhdCB0aGVyZSBpcyBvbmx5IG9uZSB1bmlxdWVcbiAgaW1hZ2UgcGVyIGtleSB2YWx1ZTpcblxuICB7XG4gICAgXCJpbWFnZVwiOiBpbWFnZTEsXG4gICAgXCJjb2xvclwiOiBcIlJlZFwiLFxuICB9LFxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVWYXJpYW50c0ltYWdlcyhcbiAgdmFyaWFudHM6IGFueVtdLFxuICAvLyB2YXJpYW50czogUmVhZG9ubHk8R2F0c2J5VHlwZXMuU2hvcGlmeVByb2R1Y3RWYXJpYW50W10+LFxuICBvcHRpb25LZXk6IGFueVxuKTogYW55W10ge1xuICAvLyBHbyB0aHJvdWdoIHRoZSB2YXJpYW50cyBhbmQgcmVkdWNlIHRoZW0gaW50byBub24tcmVkdW5kYW50XG4gIC8vIGltYWdlcyBieSBvcHRpb25LZXkuIE91dHB1dCBsb29rcyBsaWtlIHRoaXM6XG4gIC8vIHtcbiAgLy8gICBbb3B0aW9uS2V5XTogaW1hZ2VcbiAgLy8gfVxuICBjb25zdCBpbWFnZURpY3Rpb25hcnkgPSB2YXJpYW50cy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgU2hvcGlmeUJ1eS5JbWFnZT4+KFxuICAgIChpbWFnZXMsIHZhcmlhbnQpID0+IHtcbiAgICAgIGlmICh2YXJpYW50W29wdGlvbktleV0pIHtcbiAgICAgICAgaW1hZ2VzW3ZhcmlhbnRbb3B0aW9uS2V5XV0gPSB2YXJpYW50LmltYWdlXG4gICAgICB9XG4gICAgICByZXR1cm4gaW1hZ2VzXG4gICAgfSxcbiAgICB7fVxuICApXG5cbiAgLy8gcHJlcGFyZSBhbiBhcnJheSBvZiBpbWFnZSBvYmplY3RzIHRoYXQgaW5jbHVkZSBib3RoIHRoZSBpbWFnZVxuICAvLyBhbmQgdGhlIG9wdGlvbmtleSB2YWx1ZS5cbiAgY29uc3QgaW1hZ2VzID0gT2JqZWN0LmtleXMoaW1hZ2VEaWN0aW9uYXJ5KS5tYXAoKGtleSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBbb3B0aW9uS2V5XToga2V5LFxuICAgICAgc3JjOiBpbWFnZURpY3Rpb25hcnlba2V5XSxcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGltYWdlc1xufVxuIiwiZXhwb3J0IHsgaXNDYXJ0IH0gZnJvbSAnLi9pc0NhcnQnXG4iLCJpbXBvcnQgU2hvcGlmeUJ1eSBmcm9tICdzaG9waWZ5LWJ1eSdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCBmdW5jdGlvbiBpc0NhcnQocG90ZW50aWFsQ2FydDogYW55KTogcG90ZW50aWFsQ2FydCBpcyBTaG9waWZ5QnV5LkNhcnQge1xuICByZXR1cm4gKFxuICAgIHBvdGVudGlhbENhcnQgIT0gbnVsbCAmJlxuICAgIHBvdGVudGlhbENhcnQuaWQgIT0gbnVsbCAmJlxuICAgIHBvdGVudGlhbENhcnQud2ViVXJsICE9IG51bGwgJiZcbiAgICBwb3RlbnRpYWxDYXJ0LmxpbmVJdGVtcyAhPSBudWxsICYmXG4gICAgcG90ZW50aWFsQ2FydC50eXBlICE9IG51bGwgJiZcbiAgICBwb3RlbnRpYWxDYXJ0LnR5cGUubmFtZSA9PT0gJ0NoZWNrb3V0JyAmJlxuICAgIHBvdGVudGlhbENhcnQudHlwZS5raW5kID09PSAnT0JKRUNUJ1xuICApXG59XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFsuLi5zaXplcy5tYXRjaEFsbCgvKF58XFxzKSgxP1xcZD9cXGQpdncvZyldLm1hcCgobSkgPT5cbiAgICAgIHBhcnNlSW50KG1bMl0pXG4gICAgKVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICBkb21haW5JdGVtczpcbiAgICB8IEFycmF5PHtcbiAgICAgICAgaHR0cD86IGJvb2xlYW5cbiAgICAgICAgZG9tYWluOiBzdHJpbmdcbiAgICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICAgIGRlZmF1bHRMb2NhbGU6IHN0cmluZ1xuICAgICAgfT5cbiAgICB8IHVuZGVmaW5lZCxcbiAgaG9zdG5hbWU/OiBzdHJpbmcsXG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgbGV0IGRvbWFpbkl0ZW06XG4gICAgfCB7XG4gICAgICAgIGh0dHA/OiBib29sZWFuXG4gICAgICAgIGRvbWFpbjogc3RyaW5nXG4gICAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgICBkZWZhdWx0TG9jYWxlOiBzdHJpbmdcbiAgICAgIH1cbiAgICB8IHVuZGVmaW5lZFxuXG4gIGlmIChkb21haW5JdGVtcykge1xuICAgIGlmIChkZXRlY3RlZExvY2FsZSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBkZXRlY3RlZExvY2FsZS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKSB7XG4gICAgICAvLyByZW1vdmUgcG9ydCBpZiBwcmVzZW50XG4gICAgICBjb25zdCBkb21haW5Ib3N0bmFtZSA9IGl0ZW0uZG9tYWluPy5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKClcbiAgICAgIGlmIChcbiAgICAgICAgaG9zdG5hbWUgPT09IGRvbWFpbkhvc3RuYW1lIHx8XG4gICAgICAgIGRldGVjdGVkTG9jYWxlID09PSBpdGVtLmRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKSB8fFxuICAgICAgICBpdGVtLmxvY2FsZXM/LnNvbWUoKGxvY2FsZSkgPT4gbG9jYWxlLnRvTG93ZXJDYXNlKCkgPT09IGRldGVjdGVkTG9jYWxlKVxuICAgICAgKSB7XG4gICAgICAgIGRvbWFpbkl0ZW0gPSBpdGVtXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvbWFpbkl0ZW1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5cbmNvbnN0IHN0YXR1c0NvZGVzOiB7IFtjb2RlOiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcbiAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbn1cblxuZXhwb3J0IHR5cGUgRXJyb3JQcm9wcyA9IHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoe1xuICByZXMsXG4gIGVycixcbn06IE5leHRQYWdlQ29udGV4dCk6IFByb21pc2U8RXJyb3JQcm9wcz4gfCBFcnJvclByb3BzIHtcbiAgY29uc3Qgc3RhdHVzQ29kZSA9XG4gICAgcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSEgOiA0MDRcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG59XG5cbi8qKlxuICogYEVycm9yYCBjb21wb25lbnQgdXNlZCBmb3IgaGFuZGxpbmcgZXJyb3JzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcjxQID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFAgJiBFcnJvclByb3BzPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnXG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRpdGxlID1cbiAgICAgIHRoaXMucHJvcHMudGl0bGUgfHxcbiAgICAgIHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8XG4gICAgICAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVycm9yfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAge3N0YXR1c0NvZGV9OiB7dGl0bGV9XG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ICdib2R5IHsgbWFyZ2luOiAwIH0nIH19IC8+XG4gICAgICAgICAge3N0YXR1c0NvZGUgPyA8aDEgc3R5bGU9e3N0eWxlcy5oMX0+e3N0YXR1c0NvZGV9PC9oMT4gOiBudWxsfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVzLmgyfT57dGl0bGV9LjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHN0eWxlczogeyBbazogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0ge1xuICBlcnJvcjoge1xuICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGZvbnRGYW1pbHk6XG4gICAgICAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuXG4gIGRlc2M6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgaGVpZ2h0OiAnNDlweCcsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIH0sXG5cbiAgaDE6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXG4gICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gIH0sXG5cbiAgaDI6IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19lcnJvcicpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IHR5cGUge1xuICBHZXRTdGF0aWNQYXRoc0NvbnRleHQsXG4gIEdldFN0YXRpY1Byb3BzQ29udGV4dCxcbiAgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUsXG59IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCB7IEJ1aWxkZXJDb21wb25lbnQsIEJ1aWxkZXIsIGJ1aWxkZXIgfSBmcm9tICdAYnVpbGRlci5pby9yZWFjdCdcbmltcG9ydCB7IHJlc29sdmVCdWlsZGVyQ29udGVudCB9IGZyb20gJ0BsaWIvcmVzb2x2ZS1idWlsZGVyLWNvbnRlbnQnXG5pbXBvcnQgJy4uLy4uL2Jsb2Nrcy9Qcm9kdWN0Vmlldy9Qcm9kdWN0Vmlldy5idWlsZGVyJ1xuaW1wb3J0IGJ1aWxkZXJDb25maWcgZnJvbSAnQGNvbmZpZy9idWlsZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0QWxsUHJvZHVjdFBhdGhzLFxuICBnZXRQcm9kdWN0LFxufSBmcm9tICdAbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9hcGkvb3BlcmF0aW9ucy1idWlsZGVyJ1xuaW1wb3J0IERlZmF1bHRFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVRoZW1lVUkgfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IGdldExheW91dFByb3BzIH0gZnJvbSAnQGxpYi9nZXQtbGF5b3V0LXByb3BzJ1xuYnVpbGRlci5pbml0KGJ1aWxkZXJDb25maWcuYXBpS2V5ISlcbkJ1aWxkZXIuaXNTdGF0aWMgPSB0cnVlXG5cbmNvbnN0IGJ1aWxkZXJNb2RlbCA9ICdwcm9kdWN0LXBhZ2UnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7XG4gIHBhcmFtcyxcbiAgbG9jYWxlLFxufTogR2V0U3RhdGljUHJvcHNDb250ZXh0PHsgaGFuZGxlOiBzdHJpbmcgfT4pIHtcbiAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGdldFByb2R1Y3QoYnVpbGRlckNvbmZpZywge1xuICAgIGhhbmRsZTogcGFyYW1zPy5oYW5kbGUsXG4gIH0pXG5cbiAgY29uc3QgcGFnZSA9IGF3YWl0IHJlc29sdmVCdWlsZGVyQ29udGVudChidWlsZGVyTW9kZWwsIHtcbiAgICBwcm9kdWN0SGFuZGxlOiBwYXJhbXM/LmhhbmRsZSxcbiAgICBsb2NhbGUsXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcGFnZTogcGFnZSB8fCBudWxsLFxuICAgICAgcHJvZHVjdDogcHJvZHVjdCB8fCBudWxsLFxuICAgICAgLi4uKGF3YWl0IGdldExheW91dFByb3BzKCkpLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKHsgbG9jYWxlcyB9OiBHZXRTdGF0aWNQYXRoc0NvbnRleHQpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBnZXRBbGxQcm9kdWN0UGF0aHMoYnVpbGRlckNvbmZpZylcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChwYXRoKSA9PiBgL3Byb2R1Y3QvJHtwYXRofWApLFxuICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhbmRsZSh7XG4gIHByb2R1Y3QsXG4gIHBhZ2UsXG59OiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+KSB7XG4gIEJ1aWxkZXIuaXNTdGF0aWMgPSB0cnVlXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGlzTGl2ZSA9ICFCdWlsZGVyLmlzRWRpdGluZyAmJiAhQnVpbGRlci5pc1ByZXZpZXdpbmdcbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWVVSSgpXG4gIC8vIFRoaXMgaW5jbHVkZXMgc2V0dGluZyB0aGUgbm9pbmRleCBoZWFkZXIgYmVjYXVzZSBzdGF0aWMgZmlsZXMgYWx3YXlzIHJldHVybiBhIHN0YXR1cyAyMDAgYnV0IHRoZSByZW5kZXJlZCBub3QgZm91bmQgcGFnZSBwYWdlIHNob3VsZCBvYnZpb3VzbHkgbm90IGJlIGluZGV4ZWRcbiAgaWYgKCFwcm9kdWN0ICYmIGlzTGl2ZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXhcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiPjwvbWV0YT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8RGVmYXVsdEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gcm91dGVyLmlzRmFsbGJhY2sgJiYgaXNMaXZlID8gKFxuICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT4gLy8gVE9ETyAoQkMpIEFkZCBTa2VsZXRvbiBWaWV3c1xuICApIDogKFxuICAgIDxCdWlsZGVyQ29tcG9uZW50XG4gICAgICBpc1N0YXRpY1xuICAgICAga2V5PXtwcm9kdWN0IS5pZH1cbiAgICAgIG1vZGVsPXtidWlsZGVyTW9kZWx9XG4gICAgICBkYXRhPXt7IHByb2R1Y3QsIHRoZW1lIH19XG4gICAgICB7Li4uKHBhZ2UgJiYgeyBjb250ZW50OiBwYWdlIH0pfVxuICAgIC8+XG4gIClcbn1cblxuSGFuZGxlLkxheW91dCA9IExheW91dFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJ1aWxkZXIuaW8vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJ1aWxkZXIuaW8vc2RrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBidWlsZGVyLmlvL3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBidWlsZGVyLmlvL3dpZGdldHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL2NvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL21hdGNoLW1lZGlhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0aGVtZS11aS9wcmVzZXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXJlLXJlYWN0LWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZy1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcGlmeS1idXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhlbWUtdWlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==