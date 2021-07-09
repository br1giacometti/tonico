module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/collection/[handle]": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/collection/[handle].tsx");
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

/***/ "./pages/collection/[handle].tsx":
/*!***************************************!*\
  !*** ./pages/collection/[handle].tsx ***!
  \***************************************/
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
/* harmony import */ var _config_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @config/builder */ "./config/builder.ts");
/* harmony import */ var _lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks/src/api/operations-builder */ "./lib/shopify/storefront-data-hooks/src/api/operations-builder.ts");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @theme-ui/core */ "@theme-ui/core");
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_get_layout_props__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @lib/get-layout-props */ "./lib/get-layout-props.ts");


var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\pages\\collection\\[handle].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["builder"].init(_config_builder__WEBPACK_IMPORTED_MODULE_5__["default"].apiKey);
_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["Builder"].isStatic = true;
const builderModel = 'collection-page';
async function getStaticProps({
  params,
  locale
}) {
  const collection = await Object(_lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_6__["getCollection"])(_config_builder__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handle: params === null || params === void 0 ? void 0 : params.handle
  });
  const page = await Object(_lib_resolve_builder_content__WEBPACK_IMPORTED_MODULE_4__["resolveBuilderContent"])(builderModel, {
    collectionHandle: params === null || params === void 0 ? void 0 : params.handle,
    locale
  });
  return {
    props: _objectSpread({
      page: page || null,
      collection: collection || null
    }, await Object(_lib_get_layout_props__WEBPACK_IMPORTED_MODULE_10__["getLayoutProps"])())
  };
}
async function getStaticPaths({
  locales
}) {
  const paths = await Object(_lib_shopify_storefront_data_hooks_src_api_operations_builder__WEBPACK_IMPORTED_MODULE_6__["getAllCollectionPaths"])(_config_builder__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return {
    paths: paths.map(path => `/collection/${path}`),
    fallback: 'blocking'
  };
}
function Handle({
  collection,
  page
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const isLive = !_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["Builder"].isEditing && !_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["Builder"].isPreviewing;
  const {
    theme
  } = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_9__["useThemeUI"])();

  if (!collection && isLive) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "robots",
          content: "noindex"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_7___default.a, {
        statusCode: 404
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

  return router.isFallback && isLive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, this) // TODO (BC) Add Skeleton Views
  :
  /*#__PURE__*/
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_builder_io_react__WEBPACK_IMPORTED_MODULE_3__["BuilderComponent"], _objectSpread({
    isStatic: true,
    model: builderModel,
    data: {
      collection,
      theme
    }
  }, page && {
    content: page
  }), collection.id, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovLy8uL2Jsb2Nrcy9Qcm9kdWN0R3JpZC9Qcm9kdWN0R3JpZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L0NhcnRJdGVtL0NhcnRJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQvQ2FydEl0ZW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L0NhcnRTaWRlYmFyVmlldy9DYXJ0U2lkZWJhclZpZXcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9DYXJ0U2lkZWJhclZpZXcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0ZlYXR1cmVCYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0hlYWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9Ob1NTUi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vT3B0aW9uUGlja2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9Qcm9kdWN0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vUHJvZHVjdENhcmREZW1vLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9TZWFyY2hiYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1VudGlsSW50ZXJhY3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1VzZXJOYXYudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQXJyb3dMZWZ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0JhZy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9DaGVjay50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9DaGV2cm9uVXAudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQ3Jvc3MudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvRG91YmxlQ2hldnJvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9HaXRodWIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvSGVhcnQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvSW5mby50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9NaW51cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9Nb29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1BsdXMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvUmlnaHRBcnJvdy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9TdW4udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvVHJhc2gudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvVmVyY2VsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvSW1hZ2VDYXJvdXNlbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9MaW5rL0xpbmsudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTGluay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0xvYWRpbmdEb3RzL0xvYWRpbmdEb3RzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9Mb2FkaW5nRG90cy9Mb2FkaW5nRG90cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9Mb2FkaW5nRG90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL1NpZGViYXIvU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9TaWRlYmFyL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvY29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvZW52LnRzIiwid2VicGFjazovLy8uL2NvbmZpZy9zaG9waWZ5LnRzIiwid2VicGFjazovLy8uL2NvbmZpZy90aGVtZS50cyIsIndlYnBhY2s6Ly8vLi9saWIvZ2V0LWxheW91dC1wcm9wcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvaG9va3MvdXNlQWNjZXB0Q29va2llcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvcmVzb2x2ZS1idWlsZGVyLWNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvQ29tbWVyY2VQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9Db250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2FwaS9vcGVyYXRpb25zLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZUFkZEl0ZW1Ub0NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VBZGRJdGVtc1RvQ2FydC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZUNhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VDYXJ0Q291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VDYXJ0SXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VDaGVja291dFVybC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZUNsaWVudFVuc2FmZS50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZUdldExpbmVJdGVtLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlUmVtb3ZlSXRlbUZyb21DYXJ0LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZVNldENhcnRVbnNhZmUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VVcGRhdGVJdGVtUXVhbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy9Mb2NhbFN0b3JhZ2UvTG9jYWxTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvTG9jYWxTdG9yYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvTG9jYWxTdG9yYWdlL2tleXMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy90eXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL3R5cGVzL2lzQ2FydC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19lcnJvci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2xsZWN0aW9uL1toYW5kbGVdLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYnVpbGRlci5pby9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBidWlsZGVyLmlvL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJ1aWxkZXIuaW8vd2lkZ2V0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0aGVtZS11aS9jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRoZW1lLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGhlbWUtdWkvbWF0Y2gtbWVkaWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGhlbWUtdWkvcHJlc2V0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXJlLXJlYWN0LWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3ByaW5nLW1vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcGlmeS1idXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sIm5hbWVzIjpbIlByb2R1Y3RHcmlkIiwicHJvZHVjdHMiLCJpbml0aWFsUHJvZHVjdHMiLCJjb2xsZWN0aW9uIiwicHJvZHVjdHNMaXN0Iiwib2Zmc2V0IiwibGltaXQiLCJjYXJkUHJvcHMiLCJoaWdobGlnaHRDYXJkIiwic2V0UHJvZHVjdHMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0UHJvZHVjdHMiLCJwcm9taXNlcyIsIm1hcCIsImVudHJ5IiwicHJvZHVjdCIsImZpbHRlciIsImhhbmRsZSIsImdldFByb2R1Y3QiLCJidWlsZGVyQ29uZmlnIiwiUHJvbWlzZSIsImFsbCIsImZldGNoQ29sbGVjdGlvbiIsInJlc3VsdCIsImdldENvbGxlY3Rpb24iLCJQcm9kdWN0Q29tcG9uZW50IiwicHJvY2VzcyIsImVudiIsIklTX0RFTU8iLCJQcm9kdWN0Q2FyZERlbW8iLCJQcm9kdWN0Q2FyZCIsInNsaWNlIiwiaSIsIlN0cmluZyIsImlkIiwiaW5kZXgiLCJDYXJ0SXRlbSIsIml0ZW0iLCJjdXJyZW5jeUNvZGUiLCJ1cGRhdGVJdGVtIiwidXNlVXBkYXRlSXRlbVF1YW50aXR5IiwicmVtb3ZlSXRlbSIsInVzZVJlbW92ZUl0ZW1Gcm9tQ2FydCIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJyZW1vdmluZyIsInNldFJlbW92aW5nIiwidXBkYXRlUXVhbnRpdHkiLCJ2YXJpYW50IiwiaGFuZGxlUXVhbnRpdHkiLCJlIiwidmFsIiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiLCJpc0ludGVnZXIiLCJoYW5kbGVCbHVyIiwiaW5jcmVhc2VRdWFudGl0eSIsIm4iLCJoYW5kbGVSZW1vdmUiLCJlcnJvciIsImNvbnNvbGUiLCJ3aWR0aCIsIm0iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImltYWdlIiwiYWx0VGV4dCIsInNyYyIsIkxpbmsiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0aXRsZSIsIm1hcmdpbkxlZnQiLCJnZXRQcmljZSIsInByaWNlVjIiLCJhbW91bnQiLCJtdCIsIm1iIiwibGlzdFN0eWxlIiwianVzdGlmeUl0ZW1zIiwiaGVpZ2h0IiwidGV4dEFsaWduIiwic2VsZWN0ZWRPcHRpb25zIiwib3B0aW9uIiwibmFtZSIsIkNhcnRTaWRlYmFyVmlldyIsImNoZWNrb3V0VXJsIiwidXNlQ2hlY2tvdXRVcmwiLCJjYXJ0IiwidXNlQ2FydCIsInN1YlRvdGFsIiwic3VidG90YWxQcmljZSIsInRvdGFsIiwiaXRlbXMiLCJsaW5lSXRlbXMiLCJpc0VtcHR5IiwibGVuZ3RoIiwiY2FydFVwc2VsbCIsInNldENhcnRVcHNlbGwiLCJmZXRjaENvbnRlbnQiLCJjYXJ0VXBzZWxsQ29udGVudCIsImJ1aWxkZXIiLCJnZXQiLCJjYWNoZWJ1c3QiLCJpc0RldiIsInVzZXJBdHRyaWJ1dGVzIiwiaXRlbUluQ2FydCIsInRvUHJvbWlzZSIsIm92ZXJmbG93IiwicGFkZGluZ0JvdHRvbSIsImJnIiwiZmxleERpcmVjdGlvbiIsInB4IiwiY29sb3IiLCJtaW5XaWR0aCIsInBhZGRpbmdMZWZ0IiwibXkiLCJwIiwiRmVhdHVyZUJhciIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiaGlkZSIsImRlbGF5IiwiZGVsYXlQYXNzZWQiLCJzZXREZWxheVBhc3NlZCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiSGVhZCIsInByb3BzIiwic2VvSW5mbyIsImR5bmFtaWMiLCJzc3IiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInBhZ2VQcm9wcyIsImJ1aWxkZXJUaGVtZSIsInRoZW1lIiwiaXNMaXZlIiwiQnVpbGRlciIsImlzRWRpdGluZyIsImlzUHJldmlld2luZyIsInNob3BpZnlDb25maWciLCJjb250ZW50IiwiZGF0YSIsInNpdGVTZXR0aW5ncyIsImNvbG9yT3ZlcnJpZGVzIiwic2l0ZVNlb0luZm8iLCJzaXRlSW5mb3JtYXRpb24iLCJzZW9Db25maWciLCJJbm5lckxheW91dCIsInRoZW1lTmFtZSIsInRoZW1lc01hcCIsImNvbG9ycyIsImRpc3BsYXlTaWRlYmFyIiwiY2xvc2VTaWRlYmFyIiwidXNlVUkiLCJhY2NlcHRlZENvb2tpZXMiLCJvbkFjY2VwdENvb2tpZXMiLCJ1c2VBY2NlcHRDb29raWVzIiwibWFyZ2luIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJlZGl0aW5nTW9kZWwiLCJwcmV2aWV3aW5nTW9kZWwiLCJOYXZiYXIiLCJhbm5vdW5jZW1lbnQiLCJzZXRBbm5vdW5jZW1lbnQiLCJ1c2VUaGVtZVVJIiwibmF2aWdhdGlvbkxpbmtzIiwibG9nbyIsImFub3VuY2VtZW50Q29udGVudCIsInB5IiwicG9zaXRpb24iLCJmbGV4QmFzaXMiLCJsaW5rIiwidHJhbnNmb3JtIiwibGVmdCIsImxldHRlclNwYWNpbmciLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHQiLCJOb1NTUiIsInNrZWxldG9uIiwicmVuZGVyIiwic2V0UmVuZGVyIiwiT3B0aW9uUGlja2VyIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwic2VsZWN0ZWQiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsImltZ1ByaW9yaXR5IiwiaW1nTG9hZGluZyIsImltZ1NpemVzIiwiaW1nTGF5b3V0IiwicHJvZHVjdFZhcmlhbnQiLCJ2YXJpYW50cyIsInByaWNlIiwiZmxleEdyb3ciLCJpbWFnZXMiLCJzaG93QWx0ZXJuYXRlIiwic2V0U2hvd0FsdGVybmF0ZSIsImNhblRvZ2dsZSIsInNldENhblRvZ2dsZSIsImNvbXBhcmVfYXRfcHJpY2UiLCJhbHRlcm5hdGVJbWFnZSIsIlNlYXJjaGJhciIsInJvdXRlciIsInVzZVJvdXRlciIsInEiLCJxdWVyeSIsImlzT3BlbiIsInNldElzT3BlbiIsImJ1dHRvblJlZiIsInVzZVJlZiIsImFzUGF0aCIsInNwbGl0Iiwic3R5bGUiLCJ0b3AiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tIiwidGVybSIsIm9wIiwicGF0aG5hbWUiLCJCdXR0b24iLCJTZWFyY2hNb2RhbENvbnRlbnQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJpbml0aWFsU2VhcmNoIiwic2VhcmNoVGVybSIsInJlc3VsdHMiLCJzZWFyY2hQcm9kdWN0cyIsIm9uU2VhcmNoIiwidGhyb3R0bGVTZWFyY2giLCJ1c2VDYWxsYmFjayIsInRocm90dGxlIiwibWFyZ2luQm90dG9tIiwiZXZlbnQiLCJVbnRpbEludGVyYWN0aW9uIiwiVXNlck5hdiIsImNsYXNzTmFtZSIsInRvZ2dsZVNpZGViYXIiLCJBcnJvd0xlZnQiLCJCYWciLCJDaGVjayIsIkNoZXZyb25VcCIsIkNyb3NzIiwiRG91YmxlQ2hldnJvbiIsIkdpdGh1YiIsIkhlYXJ0IiwiSW5mbyIsIk1pbnVzIiwiTW9vbiIsIlBsdXMiLCJSaWdodEFycm93IiwiU3VuIiwiVHJhc2giLCJWZXJjZWwiLCJMYXp5Q2Fyb3VzZWwiLCJJbWFnZUNhcm91c2VsIiwib25UaHVtYm5haWxDbGljayIsInNob3dab29tIiwiY3VycmVudFNsaWRlIiwiaW1hZ2VQcm9wcyIsImhyZWYiLCJMb2FkaW5nRG90cyIsInMiLCJyb290IiwiU2lkZWJhciIsIm9wZW4iLCJvbkNsb3NlIiwidXNlUmVzcG9uc2l2ZVZhbHVlIiwicmlnaHQiLCJmcm9tIiwiZW50ZXIiLCJsZWF2ZSIsImluaXRpYWxTdGF0ZSIsIlVJQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiVUlQcm92aWRlciIsInN0YXRlIiwic2V0U3RhdGUiLCJvcGVuU2lkZWJhciIsInByZXYiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVuZGVmaW5lZCIsIkVycm9yIiwiTWFuYWdlZFVJQ29udGV4dCIsImFwaUtleSIsInByb2R1Y3RzTW9kZWwiLCJjb2xsZWN0aW9uc01vZGVsIiwiaXNEZW1vIiwiQm9vbGVhbiIsImRvbWFpbiIsInN0b3JlZnJvbnRBY2Nlc3NUb2tlbiIsIlNIT1BJRllfU1RPUkVGUk9OVF9BUElfVE9LRU4iLCJ0aGVtZXMiLCJnZXRMYXlvdXRQcm9wcyIsInRhcmdldGluZ0F0dHJpYnV0ZXMiLCJyZXNvbHZlQnVpbGRlckNvbnRlbnQiLCJDT09LSUVfTkFNRSIsInNldEFjY2VwdGVkQ29va2llcyIsIkNvb2tpZXMiLCJhY2NlcHRDb29raWVzIiwic2V0IiwiZXhwaXJlcyIsImluaXQiLCJpc1N0YXRpYyIsIm1vZGVsTmFtZSIsInBhZ2UiLCJpbmNsdWRlUmVmcyIsInByZXZpZXciLCJnZXRBc3luY1Byb3BzIiwiQ29sbGVjdGlvbkJveCIsIlByb2R1Y3RCb3giLCJQcm9kdWN0Q29sbGVjdGlvbkdyaWQiLCJDb21tZXJjZVByb3ZpZGVyIiwiaW5pdGlhbENhcnQiLCJMb2NhbFN0b3JhZ2UiLCJnZXRJbml0aWFsQ2FydCIsInNldENhcnQiLCJpc0N1c3RvbURvbWFpbiIsImluY2x1ZGVzIiwiY2xpZW50IiwiU2hvcGlmeUJ1eSIsImJ1aWxkQ2xpZW50IiwiZ2V0TmV3Q2FydCIsIm5ld0NhcnQiLCJjaGVja291dCIsImNyZWF0ZSIsInJlZnJlc2hFeGlzdGluZ0NhcnQiLCJjYXJ0SWQiLCJyZWZyZXNoZWRDYXJ0IiwiZmV0Y2giLCJjYXJ0SGFzQmVlblB1cmNoYXNlZCIsImNvbXBsZXRlZEF0IiwiTG9jYWxTdG9yYWdlS2V5cyIsIkNBUlQiLCJKU09OIiwic3RyaW5naWZ5IiwiQ29udGV4dCIsImdldEFsbFByb2R1Y3RzIiwiY29uZmlnIiwicHJvZHVjdHNDb250ZW50IiwidGhlbiIsInJlcyIsImpzb24iLCJwciIsInNlYXJjaFN0cmluZyIsInFzIiwiZmllbGRzIiwiYWxsb3dEb3RzIiwiJHJlZ2V4IiwiJG9wdGlvbnMiLCJnZXRBbGxQcm9kdWN0UGF0aHMiLCIkZXEiLCJ3aXRoQ29udGVudCIsImdldEFsbENvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnNDb250ZW50Iiwic2VhcmNoQ29sbGVjdGlvbnMiLCJnZXRBbGxDb2xsZWN0aW9uUGF0aHMiLCJjb2xsZWN0aW9ucyIsInByb2R1Y3RzUXVlcnkiLCJuZXh0UGFnZUN1cnNvciIsImhhc05leHRQYWdlIiwiZ2V0Q29sbGVjdGlvblByb2R1Y3RzIiwidXNlQWRkSXRlbVRvQ2FydCIsImFkZEl0ZW1zVG9DYXJ0IiwidXNlQWRkSXRlbXNUb0NhcnQiLCJhZGRJdGVtVG9DYXJ0IiwidmFyaWFudElkIiwiY3VzdG9tQXR0cmlidXRlcyIsImZvckVhY2giLCJhZGRMaW5lSXRlbXMiLCJ1c2VDYXJ0Q291bnQiLCJjb3VudCIsInJlZHVjZSIsInRvdGFsQ291bnQiLCJsaW5lSXRlbSIsInVzZUNhcnRJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsIndlYlVybCIsInVzZUNsaWVudFVuc2FmZSIsIndhcm4iLCJ1c2VHZXRMaW5lSXRlbSIsImNhcnRJdGVtcyIsImdldExpbmVJdGVtIiwiZmluZCIsImNhcnRJdGVtIiwicmVtb3ZlSXRlbXNGcm9tQ2FydCIsInVzZVJlbW92ZUl0ZW1zRnJvbUNhcnQiLCJyZW1vdmVJdGVtRnJvbUNhcnQiLCJ2YXJpYW50SWRzIiwibGluZUl0ZW1JZHMiLCJyZW1vdmVMaW5lSXRlbXMiLCJ1c2VTZXRDYXJ0VW5zYWZlIiwidXBkYXRlSXRlbVF1YW50aXR5IiwidXBkYXRlTGluZUl0ZW1zIiwia2V5IiwiaXNCcm93c2VyIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJleGlzdGluZ0NhcnRTdHJpbmciLCJleGlzdGluZ0NhcnQiLCJwYXJzZSIsImlzQ2FydCIsIkNIRUNLT1VUX0lEIiwicHJlcGFyZVZhcmlhbnRzV2l0aE9wdGlvbnMiLCJvcHRpb25zRGljdGlvbmFyeSIsInRvTG93ZXJDYXNlIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsInByZXBhcmVWYXJpYW50c0ltYWdlcyIsIm9wdGlvbktleSIsImltYWdlRGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJwb3RlbnRpYWxDYXJ0IiwidHlwZSIsImtpbmQiLCJnbG9iYWwiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwicGF0aCIsImRvbWFpbnMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIndpZHRocyIsInciLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwibG9hZCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwicmVzdCIsInVuc2l6ZWQiLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsImJveFNpemluZyIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsImxvY2FsZURvbWFpbiIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwiZG9jdW1lbnQiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSG9zdG5hbWUiLCJkb21haW5JdGVtIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwicmVxdWlyZSIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwiZGV0ZWN0ZWREb21haW4iLCJhZGRQYXRoUHJlZml4IiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJmaWx0ZXJlZFF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwicGFyc2VkQXMiLCJkZWxCYXNlUGF0aCIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFkZExvY2FsZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInJlc29sdmVEeW5hbWljUm91dGUiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJxdWVyeXN0cmluZyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJzdGF0dXNDb2RlcyIsInN0YXR1c0NvZGUiLCJzdHlsZXMiLCJfX2h0bWwiLCJfZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImJhY2tncm91bmQiLCJmb250RmFtaWx5IiwiZGVzYyIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiaDEiLCJib3JkZXJSaWdodCIsIm1hcmdpblJpZ2h0IiwiaDIiLCJidWlsZGVyTW9kZWwiLCJnZXRTdGF0aWNQcm9wcyIsImNvbGxlY3Rpb25IYW5kbGUiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siLCJIYW5kbGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBO1FBQ0Esc0NBQXNDO1FBQ3RDO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREssQ0FDZTtBQURmO0FBQUE7QUFHTCx1RUFBQyxrRUFBRDtBQUNFLFlBQVEsTUFEVjtBQUdFLFNBQUssRUFBRTRxQixZQUhUO0FBSUUsUUFBSSxFQUFFO0FBQUUxekIsZ0JBQUY7QUFBYzZJO0FBQWQ7QUFKUixLQUtPZ0wsSUFBSSxJQUFJO0FBQUUxSyxXQUFPLEVBQUUwSztBQUFYLEdBTGYsR0FFTzdULFVBQVUsQ0FBQ2tDLEVBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFIRjtBQVdEO0FBRUQ4eEIsTUFBTSxDQUFDdnJCLE1BQVAsR0FBZ0JBLHlEQUFoQixDOzs7Ozs7Ozs7OztBQ3JGQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9jb2xsZWN0aW9uL1toYW5kbGVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvY29sbGVjdGlvbi9baGFuZGxlXVwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jb2xsZWN0aW9uL1toYW5kbGVdLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExvYWRpbmdEb3RzIH0gZnJvbSAnQGNvbXBvbmVudHMvdWknXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQHRoZW1lLXVpL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBQcm9kdWN0Q2FyZFByb3BzIH0gZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL1Byb2R1Y3RDYXJkJ1xuaW1wb3J0IHsgUHJvZHVjdENhcmREZW1vLCBQcm9kdWN0Q2FyZCB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbidcblxuaW1wb3J0IHtcbiAgZ2V0Q29sbGVjdGlvbixcbiAgZ2V0UHJvZHVjdCxcbn0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvYXBpL29wZXJhdGlvbnMtYnVpbGRlcidcbmltcG9ydCBidWlsZGVyQ29uZmlnIGZyb20gJ0Bjb25maWcvYnVpbGRlcidcbmludGVyZmFjZSBIaWdobGlnaHRlZENhcmRQcm9wcyBleHRlbmRzIE9taXQ8UHJvZHVjdENhcmRQcm9wcywgJ3Byb2R1Y3QnPiB7XG4gIGluZGV4OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0R3JpZFByb3BzIHtcbiAgcHJvZHVjdHM/OiBTaG9waWZ5QnV5LlByb2R1Y3RbXVxuICBwcm9kdWN0c0xpc3Q/OiBBcnJheTx7IHByb2R1Y3Q6IHN0cmluZyB9PlxuICBjb2xsZWN0aW9uPzogc3RyaW5nIHwgYW55IC8vIFNob3BpZnlCdXkuQ29sbGVjdGlvblxuICBvZmZzZXQ6IG51bWJlclxuICBsaW1pdDogbnVtYmVyXG4gIGNhcmRQcm9wczogT21pdDxQcm9kdWN0Q2FyZFByb3BzLCAncHJvZHVjdCc+XG4gIGhpZ2hsaWdodENhcmQ/OiBIaWdobGlnaHRlZENhcmRQcm9wc1xufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjdEdyaWQ6IEZDPFByb2R1Y3RHcmlkUHJvcHM+ID0gKHtcbiAgcHJvZHVjdHM6IGluaXRpYWxQcm9kdWN0cyxcbiAgY29sbGVjdGlvbixcbiAgcHJvZHVjdHNMaXN0LFxuICBvZmZzZXQgPSAwLFxuICBsaW1pdCA9IDEwLFxuICBjYXJkUHJvcHMsXG4gIGhpZ2hsaWdodENhcmQsXG59KSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoaW5pdGlhbFByb2R1Y3RzIHx8IFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgY29uc3QgcHJvbWlzZXMgPSBwcm9kdWN0c0xpc3QhXG4gICAgICAgIC5tYXAoKGVudHJ5KSA9PiBlbnRyeS5wcm9kdWN0KVxuICAgICAgICAuZmlsdGVyKChoYW5kbGU6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gdHlwZW9mIGhhbmRsZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgYXN5bmMgKGhhbmRsZTogc3RyaW5nKSA9PiBhd2FpdCBnZXRQcm9kdWN0KGJ1aWxkZXJDb25maWcsIHsgaGFuZGxlIH0pXG4gICAgICAgIClcbiAgICAgIHNldFByb2R1Y3RzKGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKSlcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICAgIGlmIChwcm9kdWN0c0xpc3QgJiYgIWluaXRpYWxQcm9kdWN0cykge1xuICAgICAgZ2V0UHJvZHVjdHMoKVxuICAgIH1cbiAgfSwgW3Byb2R1Y3RzTGlzdCwgaW5pdGlhbFByb2R1Y3RzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ29sbGVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENvbGxlY3Rpb24oYnVpbGRlckNvbmZpZywge1xuICAgICAgICBoYW5kbGU6IGNvbGxlY3Rpb24sXG4gICAgICB9KVxuICAgICAgc2V0UHJvZHVjdHMocmVzdWx0LnByb2R1Y3RzKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb2xsZWN0aW9uID09PSAnc3RyaW5nJyAmJiAhaW5pdGlhbFByb2R1Y3RzKSB7XG4gICAgICBmZXRjaENvbGxlY3Rpb24oKVxuICAgIH1cbiAgfSwgW2NvbGxlY3Rpb25dKVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nRG90cyAvPlxuICB9XG4gIGNvbnN0IFByb2R1Y3RDb21wb25lbnQ6IGFueSA9IHByb2Nlc3MuZW52LklTX0RFTU9cbiAgICA/IFByb2R1Y3RDYXJkRGVtb1xuICAgIDogUHJvZHVjdENhcmRcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGdhcD17Mn0gd2lkdGg9e1snMTAwJScsICc0MCUnLCAnMjQlJ119PlxuICAgICAge3Byb2R1Y3RzLnNsaWNlKG9mZnNldCwgbGltaXQpLm1hcCgocHJvZHVjdCwgaSkgPT4gKFxuICAgICAgICA8UHJvZHVjdENvbXBvbmVudFxuICAgICAgICAgIGtleT17U3RyaW5nKHByb2R1Y3QuaWQpICsgaX1cbiAgICAgICAgICB7Li4uKGhpZ2hsaWdodENhcmQ/LmluZGV4ID09PSBpID8gaGlnaGxpZ2h0Q2FyZCA6IGNhcmRQcm9wcyl9XG4gICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgKVxufVxuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgVGhlbWVkLCBqc3gsIEdyaWQsIEJ1dHRvbiwgSW5wdXQsIFRleHQsIEljb25CdXR0b24gfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBQbHVzLCBNaW51cyB9IGZyb20gJ0Bjb21wb25lbnRzL2ljb25zJ1xuaW1wb3J0IHsgZ2V0UHJpY2UgfSBmcm9tICdAbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy9wcm9kdWN0J1xuaW1wb3J0IHtcbiAgdXNlVXBkYXRlSXRlbVF1YW50aXR5LFxuICB1c2VSZW1vdmVJdGVtRnJvbUNhcnQsXG59IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3MnXG5cbmNvbnN0IENhcnRJdGVtID0gKHtcbiAgaXRlbSxcbiAgY3VycmVuY3lDb2RlLFxufToge1xuICBpdGVtOiAvKlNob3BpZnlCdXkuTGluZUl0ZW0gdG9kbzogY2hlY2sgaWYgdXBkYXRlZCB0eXBlcyovIGFueVxuICBjdXJyZW5jeUNvZGU6IHN0cmluZ1xufSkgPT4ge1xuICBjb25zdCB1cGRhdGVJdGVtID0gdXNlVXBkYXRlSXRlbVF1YW50aXR5KClcbiAgY29uc3QgcmVtb3ZlSXRlbSA9IHVzZVJlbW92ZUl0ZW1Gcm9tQ2FydCgpXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoaXRlbS5xdWFudGl0eSlcbiAgY29uc3QgW3JlbW92aW5nLCBzZXRSZW1vdmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdXBkYXRlUXVhbnRpdHkgPSBhc3luYyAocXVhbnRpdHk6IG51bWJlcikgPT4ge1xuICAgIGF3YWl0IHVwZGF0ZUl0ZW0oaXRlbS52YXJpYW50LmlkLCBxdWFudGl0eSlcbiAgfVxuICBjb25zdCBoYW5kbGVRdWFudGl0eSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbCA9IE51bWJlcihlLnRhcmdldC52YWx1ZSlcblxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbCkgJiYgdmFsID49IDApIHtcbiAgICAgIHNldFF1YW50aXR5KHZhbClcbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCB2YWwgPSBOdW1iZXIocXVhbnRpdHkpXG5cbiAgICBpZiAodmFsICE9PSBpdGVtLnF1YW50aXR5KSB7XG4gICAgICB1cGRhdGVRdWFudGl0eSh2YWwpXG4gICAgfVxuICB9XG4gIGNvbnN0IGluY3JlYXNlUXVhbnRpdHkgPSAobiA9IDEpID0+IHtcbiAgICBjb25zdCB2YWwgPSBOdW1iZXIocXVhbnRpdHkpICsgblxuXG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIodmFsKSAmJiB2YWwgPj0gMCkge1xuICAgICAgc2V0UXVhbnRpdHkodmFsKVxuICAgICAgdXBkYXRlUXVhbnRpdHkodmFsKVxuICAgIH1cbiAgfVxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0UmVtb3ZpbmcodHJ1ZSlcblxuICAgIHRyeSB7XG4gICAgICAvLyBJZiB0aGlzIGFjdGlvbiBzdWNjZWVkcyB0aGVuIHRoZXJlJ3Mgbm8gbmVlZCB0byBkbyBgc2V0UmVtb3ZpbmcodHJ1ZSlgXG4gICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHZpZXdcbiAgICAgIGF3YWl0IHJlbW92ZUl0ZW0oaXRlbS52YXJpYW50LmlkKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgc2V0UmVtb3ZpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZXNldCB0aGUgcXVhbnRpdHkgc3RhdGUgaWYgdGhlIGl0ZW0gcXVhbnRpdHkgY2hhbmdlc1xuICAgIGlmIChpdGVtLnF1YW50aXR5ICE9PSBOdW1iZXIocXVhbnRpdHkpKSB7XG4gICAgICBzZXRRdWFudGl0eShpdGVtLnF1YW50aXR5KVxuICAgIH1cbiAgfSwgW2l0ZW0ucXVhbnRpdHldKVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgZ2FwPXsyfSBzeD17eyB3aWR0aDogJzEwMCUnLCBtOiAxMiB9fSBjb2x1bW5zPXtbMl19PlxuICAgICAgPGRpdlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHBhZGRpbmc6IDEsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGhlaWdodD17MTMwfVxuICAgICAgICAgIHdpZHRoPXsxMzB9XG4gICAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgICAgICBhbHQ9e2l0ZW0udmFyaWFudC5pbWFnZS5hbHRUZXh0fVxuICAgICAgICAgIHNyYz17aXRlbS52YXJpYW50LmltYWdlLnNyY31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFRoZW1lZC5kaXZcbiAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICBocmVmPXtgL3Byb2R1Y3QvJHtpdGVtLnZhcmlhbnQucHJvZHVjdC5oYW5kbGV9L2B9XG4gICAgICAgICAgc3g9e3sgZm9udFNpemU6IDMsIG06IDAsIGZvbnRXZWlnaHQ6IDcwMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogNCxcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZXRQcmljZShcbiAgICAgICAgICAgICAgICBpdGVtLnZhcmlhbnQucHJpY2VWMi5hbW91bnQsXG4gICAgICAgICAgICAgICAgaXRlbS52YXJpYW50LnByaWNlVjIuY3VycmVuY3lDb2RlIHx8ICdVU0QnXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICAgICAgPFRoZW1lZC51bCBzeD17eyBtdDogMiwgbWI6IDAsIHBhZGRpbmc6IDAsIGxpc3RTdHlsZTogJ25vbmUnIH19PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxkaXYgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5SXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpbmNyZWFzZVF1YW50aXR5KC0xKX0+XG4gICAgICAgICAgICAgICAgPE1pbnVzIHdpZHRoPXsxOH0gaGVpZ2h0PXsxOH0gLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbWF4PXs5OX1cbiAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpbmNyZWFzZVF1YW50aXR5KDEpfT5cbiAgICAgICAgICAgICAgICA8UGx1cyB3aWR0aD17MTh9IGhlaWdodD17MTh9IC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAge2l0ZW0udmFyaWFudC5zZWxlY3RlZE9wdGlvbnMubWFwKChvcHRpb246IGFueSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17b3B0aW9uLnZhbHVlfT5cbiAgICAgICAgICAgICAge29wdGlvbi5uYW1lfTp7b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UaGVtZWQudWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L0dyaWQ+XG4gIClcbn1cblxuLyoqXG4gKiAgICAgICAgIFxuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgQ2FydEl0ZW1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcnRJdGVtJ1xuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVkLCBqc3gsIFRleHQsIENhcmQsIEdyaWQsIERpdmlkZXIsIE5hdkxpbmsgfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCYWcgfSBmcm9tICdAY29tcG9uZW50cy9pY29ucydcbmltcG9ydCB7IHVzZUNhcnQsIHVzZUNoZWNrb3V0VXJsIH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcydcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICcuLi9DYXJ0SXRlbSdcbmltcG9ydCB7IEJ1aWxkZXJDb21wb25lbnQsIGJ1aWxkZXIgfSBmcm9tICdAYnVpbGRlci5pby9yZWFjdCdcbmltcG9ydCBlbnYgZnJvbSAnQGNvbmZpZy9lbnYnXG5cbmNvbnN0IENhcnRTaWRlYmFyVmlldzogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNoZWNrb3V0VXJsID0gdXNlQ2hlY2tvdXRVcmwoKVxuICBjb25zdCBjYXJ0ID0gdXNlQ2FydCgpXG4gIGNvbnN0IHN1YlRvdGFsID0gY2FydD8uc3VidG90YWxQcmljZVxuICBjb25zdCB0b3RhbCA9ICcgLSAnXG5cbiAgY29uc3QgaXRlbXMgPSBjYXJ0Py5saW5lSXRlbXMgPz8gW11cbiAgY29uc3QgaXNFbXB0eSA9IGl0ZW1zLmxlbmd0aCA9PT0gMFxuICBjb25zdCBbY2FydFVwc2VsbCwgc2V0Q2FydFVwc2VsbF0gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRlbnQoKSB7XG4gICAgICBjb25zdCBpdGVtcyA9IGNhcnQ/LmxpbmVJdGVtcyB8fCBbXVxuICAgICAgY29uc3QgY2FydFVwc2VsbENvbnRlbnQgPSBhd2FpdCBidWlsZGVyXG4gICAgICAgIC5nZXQoJ2NhcnQtdXBzZWxsLXNpZGViYXInLCB7XG4gICAgICAgICAgY2FjaGVidXN0OiBlbnYuaXNEZXYsXG4gICAgICAgICAgdXNlckF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIGl0ZW1JbkNhcnQ6IGl0ZW1zLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLnZhcmlhbnQucHJvZHVjdC5oYW5kbGUpLFxuICAgICAgICAgIH0gYXMgYW55LFxuICAgICAgICB9KVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgIHNldENhcnRVcHNlbGwoY2FydFVwc2VsbENvbnRlbnQpXG4gICAgfVxuICAgIGZldGNoQ29udGVudCgpXG4gIH0sIFtjYXJ0Py5saW5lSXRlbXNdKVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lZC5kaXZcbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiA1LFxuICAgICAgICBiZzogJ3RleHQnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgcHg6IDIsXG4gICAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXG4gICAgICAgIC4uLihpc0VtcHR5ICYmIHsganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH0pLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNFbXB0eSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8QmFnIC8+XG4gICAgICAgICAgWW91ciBjYXJ0IGlzIGVtcHR5XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBCaXNjdWl0IG9hdCBjYWtlIHdhZmVyIGljaW5nIGljZSBjcmVhbSB0aXJhbWlzdSBwdWRkaW5nIGN1cGNha2UuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbTogYW55KSA9PiAoXG4gICAgICAgICAgICA8Q2FydEl0ZW1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAvLyB0b2RvIHVwZGF0ZSB0eXBlc1xuICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU9e2l0ZW0udmFyaWFudD8ucHJpY2VWMj8uY3VycmVuY3lDb2RlIHx8ICdVU0QnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8Q2FyZCBzeD17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIG1pbldpZHRoOiAnMTByZW0nLCBwYWRkaW5nTGVmdDogNSB9fT5cbiAgICAgICAgICAgIDxHcmlkIGdhcD17MX0gY29sdW1ucz17Mn0gc3g9e3sgbXk6IDMgfX0+XG4gICAgICAgICAgICAgIDxUZXh0PlN1YnRvdGFsOjwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgc3g9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PntzdWJUb3RhbH08L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0PlNoaXBwaW5nOjwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgc3g9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PiAtIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQ+VGF4OiA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT4gLSA8L1RleHQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICA8R3JpZCBnYXA9ezF9IGNvbHVtbnM9ezJ9PlxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9sZFwiPkVzdGltYXRlZCBUb3RhbDo8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJib2xkXCIgc3g9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgIHt0b3RhbH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8QnVpbGRlckNvbXBvbmVudCBjb250ZW50PXtjYXJ0VXBzZWxsfSBtb2RlbD1cImNhcnQtdXBzZWxsLXNpZGViYXJcIiAvPlxuICAgICAgICAgIHtjaGVja291dFVybCAmJiAoXG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICB2YXJpYW50PVwibmF2XCJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgbTogMiwgcDogMTIsIHRleHRBbGlnbjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgaHJlZj17Y2hlY2tvdXRVcmwhfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcm9jZWVkIHRvIENoZWNrb3V0XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvVGhlbWVkLmRpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0U2lkZWJhclZpZXdcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcnRTaWRlYmFyVmlldydcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FydFNpZGViYXJWaWV3IH0gZnJvbSAnLi9DYXJ0U2lkZWJhclZpZXcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcnRJdGVtIH0gZnJvbSAnLi9DYXJ0SXRlbSdcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaGVtZWQsIGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgQ2VudGVyTW9kYWwsIE1vZGFsVGl0bGUsIE1vZGFsQ2xvc2VUYXJnZXQgfSBmcm9tICdyZWFjdC1zcHJpbmctbW9kYWwnXG5cbmludGVyZmFjZSBGZWF0dXJlQmFyUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBoaWRlPzogYm9vbGVhblxuICBhY3Rpb24/OiBSZWFjdC5SZWFjdE5vZGVcbiAgZGVsYXk/OiBudW1iZXJcbn1cblxuY29uc3QgRmVhdHVyZUJhcjogUmVhY3QuRkM8RmVhdHVyZUJhclByb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYWN0aW9uLFxuICBoaWRlLFxuICBkZWxheSxcbn0pID0+IHtcbiAgY29uc3QgW2RlbGF5UGFzc2VkLCBzZXREZWxheVBhc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBzZXREZWxheVBhc3NlZCh0cnVlKSwgZGVsYXkgfHwgNjAwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPENlbnRlck1vZGFsIGlzT3Blbj17ZGVsYXlQYXNzZWQgJiYgIWhpZGV9PlxuICAgICAgPE1vZGFsVGl0bGU+e3RpdGxlfTwvTW9kYWxUaXRsZT5cbiAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDxUaGVtZWQuZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBwOiBbMSwgMl0gfX0+XG4gICAgICAgIHthY3Rpb24gJiYgYWN0aW9ufVxuICAgICAgPC9UaGVtZWQuZGl2PlxuICAgIDwvQ2VudGVyTW9kYWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZUJhclxuIiwiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOZXh0SGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXG5cbmNvbnN0IEhlYWQ6IEZDPHsgc2VvSW5mbzogYW55IH0+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEZWZhdWx0U2VvIHsuLi5wcm9wcy5zZW9JbmZvfSAvPlxuICAgICAgPE5leHRIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIGtleT1cInNpdGUtbWFuaWZlc3RcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92MS9pbWFnZS9hc3NldHMlMkZZSklHYjRpMDFqdncwU1JkTDVCdCUyRjJkODZhNWJiMzBmNDRkMmRiMzU2NGFhMjk2MmJiMDkzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTmV4dEhlYWQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZFxuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBNYW5hZ2VkVUlDb250ZXh0LCB1c2VVSSB9IGZyb20gJ0Bjb21wb25lbnRzL3VpL2NvbnRleHQnXG5pbXBvcnQgeyBIZWFkLCBOYXZiYXIgfSBmcm9tICdAY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgeyB1c2VBY2NlcHRDb29raWVzIH0gZnJvbSAnQGxpYi9ob29rcy91c2VBY2NlcHRDb29raWVzJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAnQGNvbXBvbmVudHMvdWknXG5pbXBvcnQgeyBDYXJ0U2lkZWJhclZpZXcgfSBmcm9tICdAY29tcG9uZW50cy9jYXJ0J1xuaW1wb3J0IHsgQ29tbWVyY2VQcm92aWRlciB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3MnXG5pbXBvcnQgc2hvcGlmeUNvbmZpZyBmcm9tICdAY29uZmlnL3Nob3BpZnknXG5pbXBvcnQgeyBidWlsZGVyLCBCdWlsZGVyQ29udGVudCwgQnVpbGRlciB9IGZyb20gJ0BidWlsZGVyLmlvL3JlYWN0J1xuaW1wb3J0IHRoZW1lc01hcCBmcm9tICdAY29uZmlnL3RoZW1lJ1xuaW1wb3J0ICdAYnVpbGRlci5pby93aWRnZXRzJ1xuaW1wb3J0ICdyZWFjdC1zcHJpbmctbW9kYWwvc3R5bGVzLmNzcydcbmltcG9ydCBzZW9Db25maWcgZnJvbSAnQGNvbmZpZy9zZW8uanNvbidcbmltcG9ydCBOb1NTUiBmcm9tICcuL05vU1NSJ1xuXG5jb25zdCBGZWF0dXJlQmFyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0Bjb21wb25lbnRzL2NvbW1vbi9GZWF0dXJlQmFyJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pXG5cbmNvbnN0IExheW91dDogUmVhY3QuRkM8eyBwYWdlUHJvcHM6IGFueSB9PiA9ICh7IGNoaWxkcmVuLCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBidWlsZGVyVGhlbWUgPSBwYWdlUHJvcHMudGhlbWVcbiAgY29uc3QgaXNMaXZlID0gIUJ1aWxkZXIuaXNFZGl0aW5nICYmICFCdWlsZGVyLmlzUHJldmlld2luZ1xuICByZXR1cm4gKFxuICAgIDxDb21tZXJjZVByb3ZpZGVyIHsuLi5zaG9waWZ5Q29uZmlnfT5cbiAgICAgIDxCdWlsZGVyQ29udGVudFxuICAgICAgICBpc1N0YXRpY1xuICAgICAgICB7Li4uKGlzTGl2ZSAmJiB7IGNvbnRlbnQ6IGJ1aWxkZXJUaGVtZSB9KX1cbiAgICAgICAgbW9kZWxOYW1lPVwidGhlbWVcIlxuICAgICAgPlxuICAgICAgICB7KGRhdGEsIGxvYWRpbmcpID0+IHtcbiAgICAgICAgICBpZiAobG9hZGluZyAmJiAhYnVpbGRlclRoZW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2xvYWRpbmcgLi4uJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzaXRlU2V0dGluZ3MgPSBkYXRhPy5zaXRlU2V0dGluZ3NcbiAgICAgICAgICBjb25zdCBjb2xvck92ZXJyaWRlcyA9IGRhdGE/LmNvbG9yT3ZlcnJpZGVzXG4gICAgICAgICAgY29uc3Qgc2l0ZVNlb0luZm8gPSBkYXRhPy5zaXRlSW5mb3JtYXRpb25cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1hbmFnZWRVSUNvbnRleHQga2V5PXtkYXRhPy5pZH0gc2l0ZVNldHRpbmdzPXtzaXRlU2V0dGluZ3N9PlxuICAgICAgICAgICAgICA8SGVhZCBzZW9JbmZvPXtzaXRlU2VvSW5mbyB8fCBzZW9Db25maWd9IC8+XG4gICAgICAgICAgICAgIDxJbm5lckxheW91dFxuICAgICAgICAgICAgICAgIHRoZW1lTmFtZT17ZGF0YT8udGhlbWUgfHwgJ2Jhc2UnfVxuICAgICAgICAgICAgICAgIGNvbG9yT3ZlcnJpZGVzPXtjb2xvck92ZXJyaWRlc31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Jbm5lckxheW91dD5cbiAgICAgICAgICAgIDwvTWFuYWdlZFVJQ29udGV4dD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L0J1aWxkZXJDb250ZW50PlxuICAgIDwvQ29tbWVyY2VQcm92aWRlcj5cbiAgKVxufVxuXG5jb25zdCBJbm5lckxheW91dDogUmVhY3QuRkM8e1xuICB0aGVtZU5hbWU6IHN0cmluZ1xuICBjb2xvck92ZXJyaWRlcz86IHtcbiAgICB0ZXh0Pzogc3RyaW5nXG4gICAgYmFja2dyb3VuZD86IHN0cmluZ1xuICAgIHByaW1hcnk/OiBzdHJpbmdcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmdcbiAgICBtdXRlZD86IHN0cmluZ1xuICB9XG59PiA9ICh7IHRoZW1lTmFtZSwgY2hpbGRyZW4sIGNvbG9yT3ZlcnJpZGVzIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB7XG4gICAgLi4udGhlbWVzTWFwW3RoZW1lTmFtZV0sXG4gICAgY29sb3JzOiB7XG4gICAgICAuLi50aGVtZXNNYXBbdGhlbWVOYW1lXS5jb2xvcnMsXG4gICAgICAuLi5jb2xvck92ZXJyaWRlcyxcbiAgICB9LFxuICB9XG4gIGNvbnN0IHsgZGlzcGxheVNpZGViYXIsIGNsb3NlU2lkZWJhciB9ID0gdXNlVUkoKVxuICBjb25zdCB7IGFjY2VwdGVkQ29va2llcywgb25BY2NlcHRDb29raWVzIH0gPSB1c2VBY2NlcHRDb29raWVzKClcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGRpdlxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbjogYDAgYXV0b2AsXG4gICAgICAgICAgcHg6IDIwLFxuICAgICAgICAgIG1heFdpZHRoOiAxOTIwLFxuICAgICAgICAgIG1pbldpZHRoOiAnNjB2dycsXG4gICAgICAgICAgbWluSGVpZ2h0OiA4MDAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFNpZGViYXJcbiAgICAgICAgb3Blbj17XG4gICAgICAgICAgZGlzcGxheVNpZGViYXIgfHxcbiAgICAgICAgICAoYnVpbGRlci5lZGl0aW5nTW9kZWwgfHwgQnVpbGRlci5wcmV2aWV3aW5nTW9kZWwpID09PVxuICAgICAgICAgICAgJ2NhcnQtdXBzZWxsLXNpZGViYXInXG4gICAgICAgIH1cbiAgICAgICAgb25DbG9zZT17Y2xvc2VTaWRlYmFyfVxuICAgICAgPlxuICAgICAgICA8Q2FydFNpZGViYXJWaWV3IC8+XG4gICAgICA8L1NpZGViYXI+XG4gICAgICA8Tm9TU1I+XG4gICAgICAgIDxGZWF0dXJlQmFyXG4gICAgICAgICAgdGl0bGU9XCJUaGlzIHNpdGUgdXNlcyBjb29raWVzIHRvIGltcHJvdmUgeW91ciBleHBlcmllbmNlLiBCeSBjbGlja2luZywgeW91IGFncmVlIHRvIG91ciBQcml2YWN5IFBvbGljeS5cIlxuICAgICAgICAgIGhpZGU9e0J1aWxkZXIuaXNFZGl0aW5nID8gdHJ1ZSA6IGFjY2VwdGVkQ29va2llc31cbiAgICAgICAgICBhY3Rpb249e1xuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkFjY2VwdENvb2tpZXMoKX0+QWNjZXB0IGNvb2tpZXM8L0J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L05vU1NSPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgVXNlck5hdiB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCBlbnYgZnJvbSAnQGNvbmZpZy9lbnYnXG5pbXBvcnQgeyBCdWlsZGVyQ29tcG9uZW50LCBidWlsZGVyIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcmVhY3QnXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcydcbmltcG9ydCB7IGpzeCwgVGhlbWVkLCB1c2VUaGVtZVVJIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyB1c2VVSSB9IGZyb20gJ0Bjb21wb25lbnRzL3VpL2NvbnRleHQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSAnLi9TZWFyY2hiYXInXG5cbmNvbnN0IE5hdmJhcjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFthbm5vdW5jZW1lbnQsIHNldEFubm91bmNlbWVudF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lVUkoKVxuICBjb25zdCB7IG5hdmlnYXRpb25MaW5rcywgbG9nbyB9ID0gdXNlVUkoKVxuICBjb25zdCBjYXJ0ID0gdXNlQ2FydCgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRlbnQoKSB7XG4gICAgICBjb25zdCBpdGVtcyA9IGNhcnQ/LmxpbmVJdGVtcyB8fCBbXVxuICAgICAgY29uc3QgYW5vdW5jZW1lbnRDb250ZW50ID0gYXdhaXQgYnVpbGRlclxuICAgICAgICAuZ2V0KCdhbm5vdW5jZW1lbnQtYmFyJywge1xuICAgICAgICAgIGNhY2hlYnVzdDogZW52LmlzRGV2LFxuICAgICAgICAgIHVzZXJBdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBpdGVtSW5DYXJ0OiBpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS52YXJpYW50LnByb2R1Y3QuaGFuZGxlKSxcbiAgICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICBzZXRBbm5vdW5jZW1lbnQoYW5vdW5jZW1lbnRDb250ZW50KVxuICAgIH1cbiAgICBmZXRjaENvbnRlbnQoKVxuICB9LCBbY2FydD8ubGluZUl0ZW1zXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxCdWlsZGVyQ29tcG9uZW50XG4gICAgICAgIGNvbnRlbnQ9e2Fubm91bmNlbWVudH1cbiAgICAgICAgZGF0YT17eyB0aGVtZSB9fVxuICAgICAgICBtb2RlbD1cImFubm91bmNlbWVudC1iYXJcIlxuICAgICAgLz5cbiAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgIGFzPVwiaGVhZGVyXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXJnaW46IGAwIGF1dG9gLFxuICAgICAgICAgIG1heFdpZHRoOiAxOTIwLFxuICAgICAgICAgIHB5OiAyLFxuICAgICAgICAgIHB4OiAyLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGhlbWVkLmRpdlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBbJ25vbmUnLCAnbm9uZScsICdmbGV4J10sXG4gICAgICAgICAgICBmbGV4QmFzaXM6IDAsXG4gICAgICAgICAgICBtaW5XaWR0aDogMjQwLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bmF2aWdhdGlvbkxpbmtzPy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8VGhlbWVkLmFcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgc3g9e3sgcGFkZGluZzogMTAsIG1pbldpZHRoOiA5MCB9fVxuICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgaHJlZj17bGluay5saW5rfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgIDwvVGhlbWVkLmE+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICAgICAgPFRoZW1lZC5kaXZcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGhlbWVkLmgxXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xvZ28gJiYgbG9nby5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgIDxUaGVtZWQuYVxuICAgICAgICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogLTEsXG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogYG5vbmVgLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICc1cHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtsb2dvLndpZHRofVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtsb2dvLmhlaWdodH1cbiAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5pbWFnZX1cbiAgICAgICAgICAgICAgICA+PC9JbWFnZT5cbiAgICAgICAgICAgICAgPC9UaGVtZWQuYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bG9nbyAmJiBsb2dvLnRleHQgJiYgIWxvZ28uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICA8VGhlbWVkLmFcbiAgICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IC0xLFxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IGBub25lYCxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnNXB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvZ28udGV4dH1cbiAgICAgICAgICAgICAgPC9UaGVtZWQuYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UaGVtZWQuaDE+XG4gICAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICAgICAgPFRoZW1lZC5kaXZcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgbWluV2lkdGg6IDE0MCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogWydzcGFjZS1iZXR3ZWVuJywgJ2ZsZXgtZW5kJ10sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTZWFyY2hiYXIgLz5cbiAgICAgICAgICA8VXNlck5hdiAvPlxuICAgICAgICA8L1RoZW1lZC5kaXY+XG4gICAgICA8L1RoZW1lZC5kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IE5vU1NSOiBSZWFjdC5GQzx7IHNrZWxldG9uPzogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHNrZWxldG9uLFxufSkgPT4ge1xuICBjb25zdCBbcmVuZGVyLCBzZXRSZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRSZW5kZXIodHJ1ZSksIFtdKVxuICBpZiAocmVuZGVyKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPlxuICB9XG4gIGlmIChza2VsZXRvbikge1xuICAgIHJldHVybiA8Pntza2VsZXRvbn08Lz5cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuZXhwb3J0IGRlZmF1bHQgTm9TU1JcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgU2VsZWN0LCBMYWJlbCB9IGZyb20gJ0B0aGVtZS11aS9jb21wb25lbnRzJ1xuZXhwb3J0IGludGVyZmFjZSBPcHRpb25QaWNrZXJQcm9wcyB7XG4gIG5hbWU6IHN0cmluZ1xuICBvcHRpb25zPzogUmVhZG9ubHk8QXJyYXk8c3RyaW5nIHwgdW5kZWZpbmVkPj5cbiAgb25DaGFuZ2U/OiBSZWFjdC5DaGFuZ2VFdmVudEhhbmRsZXI8SFRNTFNlbGVjdEVsZW1lbnQ+XG4gIHNlbGVjdGVkPzogc3RyaW5nXG59XG5cbmNvbnN0IE9wdGlvblBpY2tlcjogUmVhY3QuRkM8T3B0aW9uUGlja2VyUHJvcHM+ID0gKHtcbiAgbmFtZSxcbiAgb3B0aW9ucyxcbiAgb25DaGFuZ2UsXG4gIHNlbGVjdGVkLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGFiZWwgaHRtbEZvcj17bmFtZX0+e25hbWV9PC9MYWJlbD5cbiAgICAgIDxTZWxlY3QgaWQ9e25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3NlbGVjdGVkfT5cbiAgICAgICAge29wdGlvbnM/Lm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17b3B0aW9ufSBrZXk9e29wdGlvbn0+XG4gICAgICAgICAgICB7b3B0aW9ufVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvU2VsZWN0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvblBpY2tlclxuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgVGhlbWVkLCBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IENhcmQsIFRleHQgfSBmcm9tICdAdGhlbWUtdWkvY29tcG9uZW50cydcbmltcG9ydCB7IExpbmssIEltYWdlQ2Fyb3VzZWwgfSBmcm9tICdAY29tcG9uZW50cy91aSdcbmltcG9ydCB7IGdldFByaWNlIH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvcHJvZHVjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdENhcmRQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwcm9kdWN0OiBTaG9waWZ5QnV5LlByb2R1Y3RcbiAgaW1nV2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICBpbWdIZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICBpbWdMYXlvdXQ/OiAnZml4ZWQnIHwgJ2ludHJpbnNpYycgfCAncmVzcG9uc2l2ZScgfCB1bmRlZmluZWRcbiAgaW1nUHJpb3JpdHk/OiBib29sZWFuXG4gIGltZ0xvYWRpbmc/OiAnZWFnZXInIHwgJ2xhenknXG4gIGltZ1NpemVzPzogc3RyaW5nXG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkOiBSZWFjdC5GQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7XG4gIHByb2R1Y3QsXG4gIGltZ1dpZHRoLFxuICBpbWdIZWlnaHQsXG4gIGltZ1ByaW9yaXR5LFxuICBpbWdMb2FkaW5nLFxuICBpbWdTaXplcyxcbiAgaW1nTGF5b3V0ID0gJ3Jlc3BvbnNpdmUnLFxufSkgPT4ge1xuICBjb25zdCBoYW5kbGUgPSAocHJvZHVjdCBhcyBhbnkpLmhhbmRsZVxuICBjb25zdCBwcm9kdWN0VmFyaWFudDogYW55ID0gcHJvZHVjdC52YXJpYW50c1swXVxuICBjb25zdCBwcmljZSA9IGdldFByaWNlKFxuICAgIHByb2R1Y3RWYXJpYW50LnByaWNlVjIuYW1vdW50LFxuICAgIHByb2R1Y3RWYXJpYW50LnByaWNlVjIuY3VycmVuY3lDb2RlXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBzeD17e1xuICAgICAgICBtYXhXaWR0aDogWzcwMCwgaW1nV2lkdGggfHwgNTQwXSxcbiAgICAgICAgcDogMyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7aGFuZGxlfS9gfT5cbiAgICAgICAgPGRpdiBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICA8SW1hZ2VDYXJvdXNlbFxuICAgICAgICAgICAgY3VycmVudFNsaWRlPXtwcm9kdWN0LmltYWdlcyA/IHByb2R1Y3QuaW1hZ2VzLmxlbmd0aCAtIDEgOiAwfVxuICAgICAgICAgICAgd2lkdGg9e2ltZ1dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtpbWdIZWlnaHR9XG4gICAgICAgICAgICBwcmlvcml0eT17aW1nUHJpb3JpdHl9XG4gICAgICAgICAgICBsb2FkaW5nPXtpbWdMb2FkaW5nfVxuICAgICAgICAgICAgbGF5b3V0PXtpbWdMYXlvdXR9XG4gICAgICAgICAgICBzaXplcz17aW1nU2l6ZXN9XG4gICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICBpbWFnZXM9e1xuICAgICAgICAgICAgICBwcm9kdWN0LmltYWdlcy5sZW5ndGggPyBwcm9kdWN0LmltYWdlcyA6IFt7XG4gICAgICAgICAgICAgICAgc3JjOiBgaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLyR7aW1nV2lkdGh9eCR7aW1nSGVpZ2h0fWAsXG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8VGhlbWVkLmgyIHN4PXt7IG10OiA0LCBtYjogMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgPC9UaGVtZWQuaDI+XG4gICAgICAgICAgPFRleHQgc3g9e3sgZm9udFNpemU6IDEyLCBtYjogMiB9fT57cHJpY2V9PC9UZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L0NhcmQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmRcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFRoZW1lZCwganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IENhcmQsIFRleHQgfSBmcm9tICdAdGhlbWUtdWkvY29tcG9uZW50cydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAY29tcG9uZW50cy91aSdcbmltcG9ydCB7IGdldFByaWNlIH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvcHJvZHVjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTm9TU1IgZnJvbSAnLi9Ob1NTUidcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHByb2R1Y3Q6IFNob3BpZnlCdXkuUHJvZHVjdFxuICBpbWdXaWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gIGltZ0hlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gIGltZ0xheW91dD86ICdmaXhlZCcgfCAnaW50cmluc2ljJyB8ICdyZXNwb25zaXZlJyB8IHVuZGVmaW5lZFxuICBpbWdQcmlvcml0eT86IGJvb2xlYW5cbiAgaW1nTG9hZGluZz86ICdlYWdlcicgfCAnbGF6eSdcbiAgaW1nU2l6ZXM/OiBzdHJpbmdcbn1cblxuY29uc3QgUHJvZHVjdENhcmREZW1vOiBSZWFjdC5GQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7XG4gIHByb2R1Y3QsXG4gIGltZ1dpZHRoLFxuICBpbWdIZWlnaHQsXG4gIGltZ1ByaW9yaXR5LFxuICBpbWdMb2FkaW5nLFxuICBpbWdTaXplcyxcbiAgaW1nTGF5b3V0ID0gJ3Jlc3BvbnNpdmUnLFxufSkgPT4ge1xuICBjb25zdCBbc2hvd0FsdGVybmF0ZSwgc2V0U2hvd0FsdGVybmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NhblRvZ2dsZSwgc2V0Q2FuVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBzcmMgPSBwcm9kdWN0LmltYWdlc1swXS5zcmNcbiAgY29uc3QgaGFuZGxlID0gKHByb2R1Y3QgYXMgYW55KS5oYW5kbGVcbiAgY29uc3QgcHJvZHVjdFZhcmlhbnQ6IGFueSA9IHByb2R1Y3QudmFyaWFudHNbMF1cbiAgY29uc3QgcHJpY2UgPSBnZXRQcmljZShcbiAgICBwcm9kdWN0VmFyaWFudC5jb21wYXJlX2F0X3ByaWNlIHx8IHByb2R1Y3RWYXJpYW50LnByaWNlLFxuICAgICdVU0QnXG4gIClcbiAgY29uc3QgYWx0ZXJuYXRlSW1hZ2UgPSBwcm9kdWN0LmltYWdlc1sxXT8uc3JjXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgc3g9e3tcbiAgICAgICAgbWF4V2lkdGg6IFs3MDAsIDUwMF0sXG4gICAgICAgIHA6IDMsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB9fVxuICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0U2hvd0FsdGVybmF0ZShmYWxzZSl9XG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0U2hvd0FsdGVybmF0ZSh0cnVlKX1cbiAgICA+XG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtoYW5kbGV9L2B9PlxuICAgICAgICA8ZGl2IHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgIHthbHRlcm5hdGVJbWFnZSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IHNob3dBbHRlcm5hdGUgJiYgY2FuVG9nZ2xlID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Tm9TU1I+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBxdWFsaXR5PVwiODVcIlxuICAgICAgICAgICAgICAgICAgc3JjPXthbHRlcm5hdGVJbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtpbWdXaWR0aCB8fCA1NDB9XG4gICAgICAgICAgICAgICAgICBzaXplcz17aW1nU2l6ZXN9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e2ltZ0hlaWdodCB8fCA1NDB9XG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9e2ltZ0xheW91dH1cbiAgICAgICAgICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0Q2FuVG9nZ2xlKHRydWUpfVxuICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImVhZ2VyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L05vU1NSPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OlxuICAgICAgICAgICAgICAgIGNhblRvZ2dsZSAmJiBzaG93QWx0ZXJuYXRlICYmIGFsdGVybmF0ZUltYWdlID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHF1YWxpdHk9XCI4NVwiXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgIHdpZHRoPXtpbWdXaWR0aCB8fCA1NDB9XG4gICAgICAgICAgICAgIHNpemVzPXtpbWdTaXplc31cbiAgICAgICAgICAgICAgaGVpZ2h0PXtpbWdIZWlnaHQgfHwgNTQwfVxuICAgICAgICAgICAgICBsYXlvdXQ9e2ltZ0xheW91dH1cbiAgICAgICAgICAgICAgbG9hZGluZz17aW1nTG9hZGluZ31cbiAgICAgICAgICAgICAgcHJpb3JpdHk9e2ltZ1ByaW9yaXR5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8VGhlbWVkLmgyIHN4PXt7IG10OiA0LCBtYjogMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgPC9UaGVtZWQuaDI+XG4gICAgICAgICAgPFRleHQgc3g9e3sgZm9udFNpemU6IDEyLCBtYjogMiB9fT57cHJpY2V9PC9UZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L0NhcmQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmREZW1vXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgTG9hZGluZ0RvdHMgfSBmcm9tICdAY29tcG9uZW50cy91aSdcbmltcG9ydCBidWlsZGVyQ29uZmlnIGZyb20gJ0Bjb25maWcvYnVpbGRlcidcbmltcG9ydCB7IFByb2R1Y3RHcmlkIH0gZnJvbSAnYmxvY2tzL1Byb2R1Y3RHcmlkL1Byb2R1Y3RHcmlkJ1xuaW1wb3J0IHsgQnV0dG9uLCBUaGVtZWQsIGpzeCwgSW5wdXQsIExhYmVsIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBzZWFyY2hQcm9kdWN0cyB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2FwaS9vcGVyYXRpb25zLWJ1aWxkZXInXG5pbXBvcnQgeyBFeHBhbmRNb2RhbCB9IGZyb20gJ3JlYWN0LXNwcmluZy1tb2RhbCdcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICdyZWFjdC1zcHJpbmctbW9kYWwvc3R5bGVzLmNzcydcbmltcG9ydCB7IENyb3NzIH0gZnJvbSAnQGNvbXBvbmVudHMvaWNvbnMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBpZD86IHN0cmluZ1xufVxuXG5jb25zdCBTZWFyY2hiYXI6IEZDPFByb3BzPiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBxIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBidXR0b25SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc09wZW4oZmFsc2UpXG4gIH0sIFtyb3V0ZXIuYXNQYXRoLnNwbGl0KCc/JylbMF1dKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEV4cGFuZE1vZGFsXG4gICAgICAgIHRyYW5zaXRpb25Db25maWc9e3t9fVxuICAgICAgICBjb250ZW50VHJhbnNpdGlvbj17e319XG4gICAgICAgIG92ZXJsYXlQcm9wcz17e1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogMTkyMCxcbiAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICAgdG9wOiAoYnV0dG9uUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSB8fCAwKSArIDE1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgPlxuICAgICAgICA8U2VhcmNoTW9kYWxDb250ZW50XG4gICAgICAgICAgaW5pdGlhbFNlYXJjaD17cSAmJiBTdHJpbmcocSl9XG4gICAgICAgICAgb25TZWFyY2g9eyh0ZXJtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wID0gcSA/ICdyZXBsYWNlJyA6ICdwdXNoJ1xuICAgICAgICAgICAgcm91dGVyW29wXSh7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0ZXIuYXNQYXRoLnNwbGl0KCc/JylbMF0sXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcTogdGVybSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvRXhwYW5kTW9kYWw+XG5cbiAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgIHJlZj17YnV0dG9uUmVmfVxuICAgICAgICBhcz17QnV0dG9ufVxuICAgICAgICBteD17Mn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgID5cbiAgICAgICAge2lzT3BlbiA/IChcbiAgICAgICAgICA8Q3Jvc3MgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIyXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjJcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTggNGE0IDQgMCAxMDAgOCA0IDQgMCAwMDAtOHpNMiA4YTYgNiAwIDExMTAuODkgMy40NzZsNC44MTcgNC44MTdhMSAxIDAgMDEtMS40MTQgMS40MTRsLTQuODE2LTQuODE2QTYgNiAwIDAxMiA4elwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICApfVxuICAgICAgPC9UaGVtZWQuZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuY29uc3QgU2VhcmNoTW9kYWxDb250ZW50ID0gKHByb3BzOiB7XG4gIGluaXRpYWxTZWFyY2g/OiBzdHJpbmdcbiAgb25TZWFyY2g6ICh0ZXJtOiBzdHJpbmcpID0+IGFueVxufSkgPT4ge1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXG4gICAgcHJvcHMuaW5pdGlhbFNlYXJjaCAmJiBTdHJpbmcocHJvcHMuaW5pdGlhbFNlYXJjaClcbiAgKVxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdIGFzIGFueVtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBzZWFyY2hQcm9kdWN0cyhcbiAgICAgIGJ1aWxkZXJDb25maWcsXG4gICAgICBTdHJpbmcoc2VhcmNoVGVybSksXG4gICAgICAvLyBUT0RPOiBwYWdpbmF0aW9uXG4gICAgICAyMCxcbiAgICAgIDBcbiAgICApXG4gICAgc2V0U2VhcmNoKHNlYXJjaFRlcm0pXG4gICAgc2V0UHJvZHVjdHMocmVzdWx0cylcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIGlmIChzZWFyY2hUZXJtKSB7XG4gICAgICBwcm9wcy5vblNlYXJjaChzZWFyY2hUZXJtKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgZ2V0UHJvZHVjdHMoc2VhcmNoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgdGhyb3R0bGVTZWFyY2ggPSB1c2VDYWxsYmFjayh0aHJvdHRsZShnZXRQcm9kdWN0cyksIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lZC5kaXZcbiAgICAgIHN4PXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgcDogWzEsIDJdLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SW5wdXRcbiAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIHN4PXt7IG1hcmdpbkJvdHRvbTogMTUgfX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy5pbml0aWFsU2VhcmNofVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcHJvZHVjdHMuLi5cIlxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aHJvdHRsZVNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGluZ0RvdHMgLz5cbiAgICAgICkgOiBwcm9kdWN0cy5sZW5ndGggPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExhYmVsPlxuICAgICAgICAgICAgU2VhcmNoIFJlc3VsdHMgZm9yIFwiPHN0cm9uZz57c2VhcmNofTwvc3Ryb25nPlwiXG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8UHJvZHVjdEdyaWRcbiAgICAgICAgICAgIGNhcmRQcm9wcz17e1xuICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDU0MCxcbiAgICAgICAgICAgICAgaW1nV2lkdGg6IDU0MCxcbiAgICAgICAgICAgICAgaW1nUHJpb3JpdHk6IGZhbHNlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgIG9mZnNldD17MH1cbiAgICAgICAgICAgIGxpbWl0PXtwcm9kdWN0cy5sZW5ndGh9XG4gICAgICAgICAgPjwvUHJvZHVjdEdyaWQ+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3NlYXJjaCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIFRoZXJlIGFyZSBubyBwcm9kdWN0cyB0aGF0IG1hdGNoIFwiPHN0cm9uZz57c2VhcmNofTwvc3Ryb25nPlwiXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD4gPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKX1cbiAgICA8L1RoZW1lZC5kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVW50aWxJbnRlcmFjdGlvbjogUmVhY3QuRkM8eyBza2VsZXRvbjogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHNrZWxldG9uLFxufSkgPT4ge1xuICBjb25zdCBbcmVuZGVyLCBzZXRSZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGlmIChyZW5kZXIpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0UmVuZGVyKHRydWUpfVxuICAgICAgb25DbGljaz17KCkgPT4gc2V0UmVuZGVyKHRydWUpfVxuICAgICAgb25Ub3VjaFN0YXJ0PXsoKSA9PiBzZXRSZW5kZXIodHJ1ZSl9XG4gICAgPlxuICAgICAge3NrZWxldG9ufVxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBVbnRpbEludGVyYWN0aW9uXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFnIH0gZnJvbSAnQGNvbXBvbmVudHMvaWNvbnMnXG5pbXBvcnQgeyB1c2VVSSB9IGZyb20gJ0Bjb21wb25lbnRzL3VpL2NvbnRleHQnXG5pbXBvcnQgeyBCdXR0b24sIGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuY29uc3QgVXNlck5hdjogRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHRvZ2dsZVNpZGViYXIgfSA9IHVzZVVJKClcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlU2lkZWJhcn0gYXJpYS1sYWJlbD1cIkNhcnRcIj5cbiAgICAgIDxCYWcgLz5cbiAgICA8L0J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTmF2XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEZlYXR1cmVCYXIgfSBmcm9tICcuL0ZlYXR1cmVCYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIExheW91dCB9IGZyb20gJy4vTGF5b3V0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXZiYXIgfSBmcm9tICcuL05hdmJhcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoYmFyIH0gZnJvbSAnLi9TZWFyY2hiYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJOYXYgfSBmcm9tICcuL1VzZXJOYXYnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWQgfSBmcm9tICcuL0hlYWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE9wdGlvblBpY2tlciB9IGZyb20gJy4vT3B0aW9uUGlja2VyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9kdWN0Q2FyZCB9IGZyb20gJy4vUHJvZHVjdENhcmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2R1Y3RDYXJkRGVtbyB9IGZyb20gJy4vUHJvZHVjdENhcmREZW1vJ1xuIiwiY29uc3QgQXJyb3dMZWZ0ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTkgMTJINVwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMiAxOUw1IDEyTDEyIDVcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0xlZnRcbiIsImNvbnN0IEJhZyA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjIwXCJcbiAgICAgIGhlaWdodD1cIjIyXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjJcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQgMUwxIDVWMTlDMSAxOS41MzA0IDEuMjEwNzEgMjAuMDM5MSAxLjU4NTc5IDIwLjQxNDJDMS45NjA4NiAyMC43ODkzIDIuNDY5NTcgMjEgMyAyMUgxN0MxNy41MzA0IDIxIDE4LjAzOTEgMjAuNzg5MyAxOC40MTQyIDIwLjQxNDJDMTguNzg5MyAyMC4wMzkxIDE5IDE5LjUzMDQgMTkgMTlWNUwxNiAxSDRaXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEgNUgxOVwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNCA5QzE0IDEwLjA2MDkgMTMuNTc4NiAxMS4wNzgzIDEyLjgyODQgMTEuODI4NEMxMi4wNzgzIDEyLjU3ODYgMTEuMDYwOSAxMyAxMCAxM0M4LjkzOTEzIDEzIDcuOTIxNzIgMTIuNTc4NiA3LjE3MTU3IDExLjgyODRDNi40MjE0MyAxMS4wNzgzIDYgMTAuMDYwOSA2IDlcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWdcbiIsImNvbnN0IENoZWNrID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjAgNkw5IDE3TDQgMTJcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tcbiIsImNvbnN0IENoZXZyb25VcCA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHNoYXBlUmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE4IDE1bC02LTYtNiA2XCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGV2cm9uVXBcbiIsImNvbnN0IENyb3NzID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc2hhcGVSZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTggNkw2IDE4XCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNiA2bDEyIDEyXCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcm9zc1xuIiwiY29uc3QgRG91YmxlQ2hldnJvbiA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNiA4LjkwNDgyTDEyIDRMOCA4LjkwNDgyTTggMTUuMDk1MkwxMiAyMEwxNiAxNS4wOTUyXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG91YmxlQ2hldnJvblxuIiwiY29uc3QgR2l0aHViID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTEyIDBDNS4zNyAwIDAgNS41MDU4MyAwIDEyLjMwMzVDMCAxNy43NDc4IDMuNDM1IDIyLjM0NjMgOC4yMDUgMjMuOTc2NUM4LjgwNSAyNC4wODQyIDkuMDMgMjMuNzE1IDkuMDMgMjMuMzkyMUM5LjAzIDIzLjA5OTkgOS4wMTUgMjIuMTMxIDkuMDE1IDIxLjEwMDVDNiAyMS42Njk2IDUuMjIgMjAuMzQ3IDQuOTggMTkuNjU0OUM0Ljg0NSAxOS4zMDEyIDQuMjYgMTguMjA5MiAzLjc1IDE3LjkxN0MzLjMzIDE3LjY4NjMgMi43MyAxNy4xMTczIDMuNzM1IDE3LjEwMTlDNC42OCAxNy4wODY1IDUuMzU1IDE3Ljk5MzkgNS41OCAxOC4zNjNDNi42NiAyMC4yMjM5IDguMzg1IDE5LjcwMSA5LjA3NSAxOS4zNzgxQzkuMTggMTguNTc4MyA5LjQ5NSAxOC4wNCA5Ljg0IDE3LjczMjVDNy4xNyAxNy40MjQ5IDQuMzggMTYuMzYzNyA0LjM4IDExLjY1NzZDNC4zOCAxMC4zMTk2IDQuODQ1IDkuMjEyMjcgNS42MSA4LjM1MTAyQzUuNDkgOC4wNDM0MyA1LjA3IDYuNzgyMzIgNS43MyA1LjA5MDU4QzUuNzMgNS4wOTA1OCA2LjczNSA0Ljc2NzYyIDkuMDMgNi4zNTE3QzkuOTkgNi4wNzQ4NyAxMS4wMSA1LjkzNjQ1IDEyLjAzIDUuOTM2NDVDMTMuMDUgNS45MzY0NSAxNC4wNyA2LjA3NDg3IDE1LjAzIDYuMzUxN0MxNy4zMjUgNC43NTIyNCAxOC4zMyA1LjA5MDU4IDE4LjMzIDUuMDkwNThDMTguOTkgNi43ODIzMiAxOC41NyA4LjA0MzQzIDE4LjQ1IDguMzUxMDJDMTkuMjE1IDkuMjEyMjcgMTkuNjggMTAuMzA0MiAxOS42OCAxMS42NTc2QzE5LjY4IDE2LjM3OTEgMTYuODc1IDE3LjQyNDkgMTQuMjA1IDE3LjczMjVDMTQuNjQgMTguMTE2OSAxNS4wMTUgMTguODU1MiAxNS4wMTUgMjAuMDA4NkMxNS4wMTUgMjEuNjU0MiAxNSAyMi45NzY4IDE1IDIzLjM5MjFDMTUgMjMuNzE1IDE1LjIyNSAyNC4wOTk1IDE1LjgyNSAyMy45NzY1QzE4LjIwNzIgMjMuMTUxOSAyMC4yNzczIDIxLjU4MjIgMjEuNzQzOCAxOS40ODgyQzIzLjIxMDMgMTcuMzk0MiAyMy45OTk0IDE0Ljg4MTQgMjQgMTIuMzAzNUMyNCA1LjUwNTgzIDE4LjYzIDAgMTIgMFpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2l0aHViXG4iLCJjb25zdCBIZWFydCA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjBcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMC44NCAyLjYxQzIwLjMyOTIgMi4wOTkgMTkuNzIyOCAxLjY5MzY1IDE5LjA1NTQgMS40MTcwOEMxOC4zODc5IDEuMTQwNTIgMTcuNjcyNSAwLjk5ODE3NSAxNi45NSAwLjk5ODE3NUMxNi4yMjc1IDAuOTk4MTc1IDE1LjUxMjEgMS4xNDA1MiAxNC44NDQ2IDEuNDE3MDhDMTQuMTc3MiAxLjY5MzY1IDEzLjU3MDggMi4wOTkgMTMuMDYgMi42MUwxMiAzLjY3TDEwLjk0IDIuNjFDOS45MDgzIDEuNTc4MzEgOC41MDkwMyAwLjk5ODcwOSA3LjA1IDAuOTk4NzA5QzUuNTkwOTYgMC45OTg3MDkgNC4xOTE2OSAxLjU3ODMxIDMuMTYgMi42MUMyLjEyODMgMy42NDE2OSAxLjU0ODcxIDUuMDQwOTcgMS41NDg3MSA2LjVDMS41NDg3MSA3Ljk1OTAzIDIuMTI4MyA5LjM1ODMxIDMuMTYgMTAuMzlMNC4yMiAxMS40NUwxMiAxOS4yM0wxOS43OCAxMS40NUwyMC44NCAxMC4zOUMyMS4zNTEgOS44NzkyNCAyMS43NTYzIDkuMjcyODEgMjIuMDMyOSA4LjYwNTM2QzIyLjMwOTUgNy45Mzc5IDIyLjQ1MTggNy4yMjI0OSAyMi40NTE4IDYuNUMyMi40NTE4IDUuNzc3NTEgMjIuMzA5NSA1LjA2MjEgMjIuMDMyOSA0LjM5NDY0QzIxLjc1NjMgMy43MjcxOSAyMS4zNTEgMy4xMjA3NiAyMC44NCAyLjYxVjIuNjFaXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhcnRcbiIsImNvbnN0IEluZm8gPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzaGFwZVJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIGZpbGw9XCJ0cmFuc3BhcmVudFwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDh2NFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDE2aC4wMVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mb1xuIiwiY29uc3QgTWludXMgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk01IDEySDE5XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWludXNcbiIsImNvbnN0IE1vb24gPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzaGFwZVJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yMSAxMi43OUE5IDkgMCAxMTExLjIxIDMgNyA3IDAgMDAyMSAxMi43OXpcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vb25cbiIsImNvbnN0IFBsdXMgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMiA1VjE5XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTUgMTJIMTlcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVzXG4iLCJjb25zdCBSaWdodEFycm93ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTUgMTJIMTlcIlxuICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMiA1TDE5IDEyTDEyIDE5XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRBcnJvd1xuIiwiY29uc3QgU3VuID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc2hhcGVSZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDF2MlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDIxdjJcIiAvPlxuICAgICAgPHBhdGggZD1cIk00LjIyIDQuMjJsMS40MiAxLjQyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMTguMzYgMTguMzZsMS40MiAxLjQyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMSAxMmgyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjEgMTJoMlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTQuMjIgMTkuNzhsMS40Mi0xLjQyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMTguMzYgNS42NGwxLjQyLTEuNDJcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1blxuIiwiY29uc3QgVHJhc2ggPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMyA2SDIxXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTggNlY0QzggMy40Njk1NyA4LjIxMDcxIDIuOTYwODYgOC41ODU3OSAyLjU4NTc5QzguOTYwODYgMi4yMTA3MSA5LjQ2OTU3IDIgMTAgMkgxNEMxNC41MzA0IDIgMTUuMDM5MSAyLjIxMDcxIDE1LjQxNDIgMi41ODU3OUMxNS43ODkzIDIuOTYwODYgMTYgMy40Njk1NyAxNiA0VjZNMTkgNlYyMEMxOSAyMC41MzA0IDE4Ljc4OTMgMjEuMDM5MSAxOC40MTQyIDIxLjQxNDJDMTguMDM5MSAyMS43ODkzIDE3LjUzMDQgMjIgMTcgMjJIN0M2LjQ2OTU3IDIyIDUuOTYwODYgMjEuNzg5MyA1LjU4NTc5IDIxLjQxNDJDNS4yMTA3MSAyMS4wMzkxIDUgMjAuNTMwNCA1IDIwVjZIMTlaXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEwIDExVjE3XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE0IDExVjE3XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhc2hcbiIsImNvbnN0IFZlcmNlbCA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjg5XCJcbiAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgODkgMjBcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMS41NjI1IDBMMjMuMTI1IDIwSDBMMTEuNTYyNSAwWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00OS44NzUgMTAuNjI1QzQ5Ljg3NSA3LjQwNjI1IDQ3LjUgNS4xNTYyNSA0NC4wOTM3IDUuMTU2MjVDNDAuNjg3NSA1LjE1NjI1IDM4LjMxMjUgNy40MDYyNSAzOC4zMTI1IDEwLjYyNUMzOC4zMTI1IDEzLjc4MTIgNDAuODc1IDE2LjA5MzcgNDQuNDA2MiAxNi4wOTM3QzQ2LjM0MzggMTYuMDkzNyA0OC4wOTM4IDE1LjM3NSA0OS4yMTg4IDE0LjA2MjVMNDcuMDkzOCAxMi44NDM3QzQ2LjQzNzUgMTMuNSA0NS40Njg4IDEzLjkwNjIgNDQuNDA2MiAxMy45MDYyQzQyLjg0MzggMTMuOTA2MiA0MS41IDEzLjA2MjUgNDEuMDMxMiAxMS43ODEyTDQwLjkzNzUgMTEuNTYyNUg0OS43ODEyQzQ5Ljg0MzggMTEuMjUgNDkuODc1IDEwLjkzNzUgNDkuODc1IDEwLjYyNVpNNDAuOTA2MiA5LjY4NzVMNDAuOTY4OCA5LjVDNDEuMzc1IDguMTU2MjUgNDIuNTYyNSA3LjM0Mzc1IDQ0LjA2MjUgNy4zNDM3NUM0NS41OTM4IDcuMzQzNzUgNDYuNzUgOC4xNTYyNSA0Ny4xNTYyIDkuNUw0Ny4yMTg4IDkuNjg3NUg0MC45MDYyWlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNODMuNTMxMyAxMC42MjVDODMuNTMxMyA3LjQwNjI1IDgxLjE1NjMgNS4xNTYyNSA3Ny43NSA1LjE1NjI1Qzc0LjM0MzggNS4xNTYyNSA3MS45Njg4IDcuNDA2MjUgNzEuOTY4OCAxMC42MjVDNzEuOTY4OCAxMy43ODEyIDc0LjUzMTMgMTYuMDkzNyA3OC4wNjI1IDE2LjA5MzdDODAgMTYuMDkzNyA4MS43NSAxNS4zNzUgODIuODc1IDE0LjA2MjVMODAuNzUgMTIuODQzN0M4MC4wOTM4IDEzLjUgNzkuMTI1IDEzLjkwNjIgNzguMDYyNSAxMy45MDYyQzc2LjUgMTMuOTA2MiA3NS4xNTYzIDEzLjA2MjUgNzQuNjg3NSAxMS43ODEyTDc0LjU5MzggMTEuNTYyNUg4My40Mzc1QzgzLjUgMTEuMjUgODMuNTMxMyAxMC45Mzc1IDgzLjUzMTMgMTAuNjI1Wk03NC41NjI1IDkuNjg3NUw3NC42MjUgOS41Qzc1LjAzMTMgOC4xNTYyNSA3Ni4yMTg4IDcuMzQzNzUgNzcuNzE4OCA3LjM0Mzc1Qzc5LjI1IDcuMzQzNzUgODAuNDA2MyA4LjE1NjI1IDgwLjgxMjUgOS41TDgwLjg3NSA5LjY4NzVINzQuNTYyNVpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTY4LjUzMTMgOC44NDM3NEw3MC42NTYzIDcuNjI0OTlDNjkuNjU2MyA2LjA2MjQ5IDY3Ljg3NSA1LjE4NzQ5IDY1LjcxODggNS4xODc0OUM2Mi4zMTI1IDUuMTg3NDkgNTkuOTM3NSA3LjQzNzQ5IDU5LjkzNzUgMTAuNjU2MkM1OS45Mzc1IDEzLjg3NSA2Mi4zMTI1IDE2LjEyNSA2NS43MTg4IDE2LjEyNUM2Ny44NzUgMTYuMTI1IDY5LjY1NjMgMTUuMjUgNzAuNjU2MyAxMy42ODc1TDY4LjUzMTMgMTIuNDY4N0M2Ny45Njg4IDEzLjQwNjIgNjYuOTY4OCAxMy45Mzc1IDY1LjcxODggMTMuOTM3NUM2My43NSAxMy45Mzc1IDYyLjQzNzUgMTIuNjI1IDYyLjQzNzUgMTAuNjU2MkM2Mi40Mzc1IDguNjg3NDkgNjMuNzUgNy4zNzQ5OSA2NS43MTg4IDcuMzc0OTlDNjYuOTM3NSA3LjM3NDk5IDY3Ljk2ODggNy45MDYyNCA2OC41MzEzIDguODQzNzRaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk04OC4yMTg4IDEuNzVIODUuNzE4OFYxNS44MTI1SDg4LjIxODhWMS43NVpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQwLjE1NjMgMS43NUgzNy4yODEzTDMxLjc4MTMgMTEuMjVMMjYuMjgxMyAxLjc1SDIzLjM3NUwzMS43ODEzIDE2LjI1TDQwLjE1NjMgMS43NVpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTU3Ljg0MzggOC4wNjI1QzU4LjEyNSA4LjA2MjUgNTguNDA2MiA4LjA5Mzc1IDU4LjY4NzUgOC4xNTYyNVY1LjVDNTYuNTYyNSA1LjU2MjUgNTQuNTYyNSA2Ljc1IDU0LjU2MjUgOC4yMTg3NVY1LjVINTIuMDYyNVYxNS44MTI1SDU0LjU2MjVWMTEuMzQzN0M1NC41NjI1IDkuNDA2MjUgNTUuOTA2MiA4LjA2MjUgNTcuODQzOCA4LjA2MjVaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlcmNlbFxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCYWcgfSBmcm9tICcuL0JhZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhcnQgfSBmcm9tICcuL0hlYXJ0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUcmFzaCB9IGZyb20gJy4vVHJhc2gnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENyb3NzIH0gZnJvbSAnLi9Dcm9zcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3dMZWZ0IH0gZnJvbSAnLi9BcnJvd0xlZnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsdXMgfSBmcm9tICcuL1BsdXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1pbnVzIH0gZnJvbSAnLi9NaW51cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2sgfSBmcm9tICcuL0NoZWNrJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdW4gfSBmcm9tICcuL1N1bidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9vbiB9IGZyb20gJy4vTW9vbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2l0aHViIH0gZnJvbSAnLi9HaXRodWInXG5leHBvcnQgeyBkZWZhdWx0IGFzIERvdWJsZUNoZXZyb24gfSBmcm9tICcuL0RvdWJsZUNoZXZyb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJpZ2h0QXJyb3cgfSBmcm9tICcuL1JpZ2h0QXJyb3cnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEluZm8gfSBmcm9tICcuL0luZm8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZXZyb25VcCB9IGZyb20gJy4vQ2hldnJvblVwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWZXJjZWwgfSBmcm9tICcuL1ZlcmNlbCdcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgVGhlbWVkLCBBc3BlY3RSYXRpbyB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgVW50aWxJbnRlcmFjdGlvbiBmcm9tICdAY29tcG9uZW50cy9jb21tb24vVW50aWxJbnRlcmFjdGlvbidcblxudHlwZSBwcm9wcyA9IGltcG9ydCgnLi9MYXp5SW1hZ2VDYXJvdXNlbCcpLkltYWdlQ2Fyb3VzZWxQcm9wc1xuXG5jb25zdCBMYXp5Q2Fyb3VzZWwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9MYXp5SW1hZ2VDYXJvdXNlbCcpLCB7XG4gIGxvYWRpbmc6ICgpID0+IDxUaGVtZWQuZGl2IHN4PXt7IGhlaWdodDogJzEwMCUnLCBiZzogJ211dGVkJyB9fSAvPixcbiAgc3NyOiBmYWxzZSxcbn0pXG5jb25zdCBJbWFnZUNhcm91c2VsOiBSZWFjdC5GQzxwcm9wcz4gPSAoe1xuICBpbWFnZXMsXG4gIG9uVGh1bWJuYWlsQ2xpY2ssXG4gIHNob3dab29tLFxuICBjdXJyZW50U2xpZGUsXG4gIC4uLmltYWdlUHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXNwZWN0UmF0aW8gcmF0aW89e051bWJlcihpbWFnZVByb3BzLmhlaWdodCApIC8gTnVtYmVyKGltYWdlUHJvcHMud2lkdGgpfT5cbiAgICAgIDxVbnRpbEludGVyYWN0aW9uXG4gICAgICAgIHNrZWxldG9uPXs8SW1hZ2Ugc3JjPXtpbWFnZXNbMF0uc3JjfSB7Li4uaW1hZ2VQcm9wc30gLz59XG4gICAgICA+XG4gICAgICAgIDxMYXp5Q2Fyb3VzZWxcbiAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cbiAgICAgICAgICBzaG93Wm9vbT17c2hvd1pvb219XG4gICAgICAgICAgY3VycmVudFNsaWRlPXtjdXJyZW50U2xpZGV9XG4gICAgICAgICAgb25UaHVtYm5haWxDbGljaz17b25UaHVtYm5haWxDbGlja31cbiAgICAgICAgICB7Li4uaW1hZ2VQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvVW50aWxJbnRlcmFjdGlvbj5cbiAgICA8L0FzcGVjdFJhdGlvPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsXG4iLCJpbXBvcnQgTmV4dExpbmssIHsgTGlua1Byb3BzIGFzIE5leHRMaW5rUHJvcHMgfSBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IExpbms6IFJlYWN0LkZDPE5leHRMaW5rUHJvcHM+ID0gKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XG4gICAgICA8YSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2E+XG4gICAgPC9OZXh0TGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MaW5rJ1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicm9vdFwiOiBcIkxvYWRpbmdEb3RzX3Jvb3RfX2pYR1FrXCIsXG5cdFwiYmxpbmtcIjogXCJMb2FkaW5nRG90c19ibGlua19fMnhzSjJcIlxufTtcbiIsImltcG9ydCBzIGZyb20gJy4vTG9hZGluZ0RvdHMubW9kdWxlLmNzcydcblxuY29uc3QgTG9hZGluZ0RvdHM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgIDxzcGFuIC8+XG4gICAgICA8c3BhbiAvPlxuICAgICAgPHNwYW4gLz5cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ0RvdHNcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xvYWRpbmdEb3RzJ1xuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDbG9zZSwgVGhlbWVkIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyB1c2VSZXNwb25zaXZlVmFsdWUgfSBmcm9tICdAdGhlbWUtdWkvbWF0Y2gtbWVkaWEnXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFzZU1vZGFsLCBNb2RhbENsb3NlVGFyZ2V0IH0gZnJvbSAncmVhY3Qtc3ByaW5nLW1vZGFsJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvcGVuOiBib29sZWFuXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbn1cblxuY29uc3QgU2lkZWJhcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIG9wZW4gPSBmYWxzZSwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gdXNlUmVzcG9uc2l2ZVZhbHVlKFsnMTAwJScsIDUwMF0pXG4gIHJldHVybiAoXG4gICAgPEJhc2VNb2RhbFxuICAgICAgaXNPcGVuPXtvcGVufVxuICAgICAgb25EaXNtaXNzPXtvbkNsb3NlfVxuICAgICAgY29udGVudFByb3BzPXt7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIGNvbnRlbnRUcmFuc2l0aW9uPXt7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScgfSxcbiAgICAgICAgZW50ZXI6IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSxcbiAgICAgICAgbGVhdmU6IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE1vZGFsQ2xvc2VUYXJnZXQ+XG4gICAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgIGJnOiAndGV4dCcsXG4gICAgICAgICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgPC9UaGVtZWQuZGl2PlxuICAgICAgPC9Nb2RhbENsb3NlVGFyZ2V0PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQmFzZU1vZGFsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NpZGViYXInXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGRpc3BsYXlTaWRlYmFyOiBib29sZWFuXG4gIG5hdmlnYXRpb25MaW5rcz86IEFycmF5PHsgbGluazogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0+XG4gIGxvZ28/OiB7IGltYWdlPzogc3RyaW5nOyB0ZXh0OiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH1cbiAgdG9nZ2xlU2lkZWJhcj86IGFueVxuICBjbG9zZVNpZGViYXI/OiBhbnlcbiAgb3BlblNpZGViYXI/OiBhbnlcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkaXNwbGF5U2lkZWJhcjogZmFsc2UsXG59XG5cbnR5cGUgQWN0aW9uID1cbiAgfCB7XG4gICAgICB0eXBlOiAnT1BFTl9TSURFQkFSJ1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiAnQ0xPU0VfU0lERUJBUidcbiAgICB9XG5cbmV4cG9ydCBjb25zdCBVSUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFN0YXRlPihpbml0aWFsU3RhdGUpXG5cblVJQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdVSUNvbnRleHQnXG5cbmV4cG9ydCBjb25zdCBVSVByb3ZpZGVyOiBGQzx7IHNpdGVTZXR0aW5nczogUGFydGlhbDxTdGF0ZT4gfT4gPSAoe1xuICBzaXRlU2V0dGluZ3MsXG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAuLi5pbml0aWFsU3RhdGUsXG4gICAgLi4uc2l0ZVNldHRpbmdzLFxuICB9KVxuXG4gIGNvbnN0IG9wZW5TaWRlYmFyID0gKCkgPT4gc2V0U3RhdGUoKCkgPT4gKHsgZGlzcGxheVNpZGViYXI6IHRydWUgfSkpXG4gIGNvbnN0IGNsb3NlU2lkZWJhciA9ICgpID0+IHNldFN0YXRlKCgpID0+ICh7IGRpc3BsYXlTaWRlYmFyOiBmYWxzZSB9KSlcbiAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+XG4gICAgc2V0U3RhdGUoKHByZXYpID0+ICh7IGRpc3BsYXlTaWRlYmFyOiAhcHJldi5kaXNwbGF5U2lkZWJhciB9KSlcblxuICBjb25zdCB2YWx1ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5zaXRlU2V0dGluZ3MsXG4gICAgb3BlblNpZGViYXIsXG4gICAgY2xvc2VTaWRlYmFyLFxuICAgIHRvZ2dsZVNpZGViYXIsXG4gIH1cblxuICByZXR1cm4gPFVJQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVVJID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChVSUNvbnRleHQpXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZVVJIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVSVByb3ZpZGVyYClcbiAgfVxuICByZXR1cm4gY29udGV4dFxufVxuXG5leHBvcnQgY29uc3QgTWFuYWdlZFVJQ29udGV4dDogRkM8eyBzaXRlU2V0dGluZ3M6IFBhcnRpYWw8U3RhdGU+IH0+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHNpdGVTZXR0aW5ncyxcbn0pID0+IDxVSVByb3ZpZGVyIHNpdGVTZXR0aW5ncz17c2l0ZVNldHRpbmdzfT57Y2hpbGRyZW59PC9VSVByb3ZpZGVyPlxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTaWRlYmFyIH0gZnJvbSAnLi9TaWRlYmFyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nRG90cyB9IGZyb20gJy4vTG9hZGluZ0RvdHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmsgfSBmcm9tICcuL0xpbmsnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEltYWdlQ2Fyb3VzZWwgfSBmcm9tICcuL0ltYWdlQ2Fyb3VzZWwnXG4iLCJpZiAoIXByb2Nlc3MuZW52LkJVSUxERVJfUFVCTElDX0tFWSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZW52IHZhcmlhbGJlIEJVSUxERVJfUFVCTElDX0tFWScpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5CVUlMREVSX1BVQkxJQ19LRVksXG4gIHByb2R1Y3RzTW9kZWw6ICdzaG9waWZ5LXByb2R1Y3QnLFxuICBjb2xsZWN0aW9uc01vZGVsOiAnc2hvcGlmeS1jb2xsZWN0aW9uJyxcbiAgaXNEZW1vOiBCb29sZWFuKHByb2Nlc3MuZW52LklTX0RFTU8pLFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpc0RldjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG59XG4iLCJpZiAoIXByb2Nlc3MuZW52LlNIT1BJRllfU1RPUkVfRE9NQUlOKSB7XG4gIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBlbnZpcm9ubWVudCB2YXJpYWJsZSBTSE9QSUZZX1NUT1JFX0RPTUFJTicpXG59XG5pZiAoIXByb2Nlc3MuZW52LlNIT1BJRllfU1RPUkVGUk9OVF9BUElfVE9LRU4pIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdNaXNzaW5nIHJlcXVpcmVkIGVudmlyb25tZW50IHZhcmlhYmxlIFNIT1BJRllfU1RPUkVGUk9OVF9BUElfVE9LRU4nXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBkb21haW46IHByb2Nlc3MuZW52LlNIT1BJRllfU1RPUkVfRE9NQUlOLFxuICBzdG9yZWZyb250QWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LlNIT1BJRllfU1RPUkVGUk9OVF9BUElfVE9LRU4sXG59XG4iLCJpbXBvcnQgKiBhcyB0aGVtZXMgZnJvbSAnQHRoZW1lLXVpL3ByZXNldHMnXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lcyBhcyBhbnlcbiIsImltcG9ydCB7IHJlc29sdmVCdWlsZGVyQ29udGVudCB9IGZyb20gJy4vcmVzb2x2ZS1idWlsZGVyLWNvbnRlbnQnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMYXlvdXRQcm9wcyh0YXJnZXRpbmdBdHRyaWJ1dGVzPzogYW55KSB7XG4gIGNvbnN0IHRoZW1lID0gYXdhaXQgcmVzb2x2ZUJ1aWxkZXJDb250ZW50KCd0aGVtZScsIHRhcmdldGluZ0F0dHJpYnV0ZXMpXG5cbiAgcmV0dXJuIHtcbiAgICB0aGVtZTogdGhlbWUgfHwgbnVsbCxcbiAgfVxufVxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDT09LSUVfTkFNRSA9ICdhY2NlcHRfY29va2llcydcblxuZXhwb3J0IGNvbnN0IHVzZUFjY2VwdENvb2tpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFthY2NlcHRlZENvb2tpZXMsIHNldEFjY2VwdGVkQ29va2llc10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFDb29raWVzLmdldChDT09LSUVfTkFNRSkpIHtcbiAgICAgIHNldEFjY2VwdGVkQ29va2llcyhmYWxzZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGFjY2VwdENvb2tpZXMgPSAoKSA9PiB7XG4gICAgc2V0QWNjZXB0ZWRDb29raWVzKHRydWUpXG4gICAgQ29va2llcy5zZXQoQ09PS0lFX05BTUUsICdhY2NlcHRlZCcsIHsgZXhwaXJlczogMzY1IH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFjY2VwdGVkQ29va2llcyxcbiAgICBvbkFjY2VwdENvb2tpZXM6IGFjY2VwdENvb2tpZXMsXG4gIH1cbn1cbiIsImltcG9ydCB7IGJ1aWxkZXIsIEJ1aWxkZXIgfSBmcm9tICdAYnVpbGRlci5pby9yZWFjdCdcbmltcG9ydCB7IGdldEFzeW5jUHJvcHMgfSBmcm9tICdAYnVpbGRlci5pby91dGlscydcbmltcG9ydCBidWlsZGVyQ29uZmlnIGZyb20gJ0Bjb25maWcvYnVpbGRlcidcbmltcG9ydCB7XG4gIGdldENvbGxlY3Rpb24sXG4gIGdldFByb2R1Y3QsXG4gIHNlYXJjaFByb2R1Y3RzLFxufSBmcm9tICcuL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9hcGkvb3BlcmF0aW9ucy1idWlsZGVyJ1xuYnVpbGRlci5pbml0KGJ1aWxkZXJDb25maWcuYXBpS2V5KVxuQnVpbGRlci5pc1N0YXRpYyA9IHRydWVcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVCdWlsZGVyQ29udGVudChcbiAgbW9kZWxOYW1lOiBzdHJpbmcsXG4gIHRhcmdldGluZ0F0dHJpYnV0ZXM/OiBhbnlcbikge1xuICBsZXQgcGFnZSA9IGF3YWl0IGJ1aWxkZXJcbiAgICAuZ2V0KG1vZGVsTmFtZSwge1xuICAgICAgdXNlckF0dHJpYnV0ZXM6IHRhcmdldGluZ0F0dHJpYnV0ZXMsXG4gICAgICBpbmNsdWRlUmVmczogdHJ1ZSxcbiAgICAgIHByZXZpZXc6IG1vZGVsTmFtZSxcbiAgICAgIGNhY2hlYnVzdDogdHJ1ZSxcbiAgICB9IGFzIGFueSlcbiAgICAudG9Qcm9taXNlKClcblxuICBpZiAocGFnZSkge1xuICAgIHJldHVybiBhd2FpdCBnZXRBc3luY1Byb3BzKHBhZ2UsIHtcbiAgICAgIGFzeW5jIFByb2R1Y3RHcmlkKHByb3BzKSB7XG4gICAgICAgIGxldCBwcm9kdWN0czogYW55W10gPSBbXVxuICAgICAgICBpZiAocHJvcHMucHJvZHVjdHNMaXN0KSB7XG4gICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBwcm9wcy5wcm9kdWN0c0xpc3RcbiAgICAgICAgICAgIC5tYXAoKGVudHJ5OiBhbnkpID0+IGVudHJ5LnByb2R1Y3QpXG4gICAgICAgICAgICAuZmlsdGVyKChoYW5kbGU6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gdHlwZW9mIGhhbmRsZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICBhc3luYyAoaGFuZGxlOiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgICAgYXdhaXQgZ2V0UHJvZHVjdChidWlsZGVyQ29uZmlnLCB7IGhhbmRsZSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIHByb2R1Y3RzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAvLyByZXNvbHZlIHRoZSBxdWVyeSBhcyBgcHJvZHVjdHNgIGZvciBzc3JcbiAgICAgICAgICAvLyB1c2VkIGZvciBleGFtcGxlIGluIFByb2R1Y3RHcmlkLnRzeCBhcyBpbml0aWFsUHJvZHVjdHNcbiAgICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIENvbGxlY3Rpb25Cb3gocHJvcHMpIHtcbiAgICAgICAgbGV0IGNvbGxlY3Rpb24gPSBwcm9wcy5jb2xsZWN0aW9uXG4gICAgICAgIGlmIChjb2xsZWN0aW9uICYmIHR5cGVvZiBjb2xsZWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbGxlY3Rpb24gPSBhd2FpdCBnZXRDb2xsZWN0aW9uKGJ1aWxkZXJDb25maWcsIHtcbiAgICAgICAgICAgIGhhbmRsZTogY29sbGVjdGlvbixcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIFByb2R1Y3RCb3gocHJvcHMpIHtcbiAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9wcy5wcm9kdWN0XG4gICAgICAgIGlmIChwcm9kdWN0ICYmIHR5cGVvZiBwcm9kdWN0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHByb2R1Y3QgPSBhd2FpdCBnZXRQcm9kdWN0KGJ1aWxkZXJDb25maWcsIHtcbiAgICAgICAgICAgIGhhbmRsZTogcHJvZHVjdCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvZHVjdCxcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYXN5bmMgUHJvZHVjdENvbGxlY3Rpb25HcmlkKHsgY29sbGVjdGlvbiB9KSB7XG4gICAgICAgIGlmIChjb2xsZWN0aW9uICYmIHR5cGVvZiBjb2xsZWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IGdldENvbGxlY3Rpb24oYnVpbGRlckNvbmZpZywge1xuICAgICAgICAgICAgaGFuZGxlOiBjb2xsZWN0aW9uLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2R1Y3RzLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBudWxsXG59XG4iLCJleHBvcnQgeyBDb21tZXJjZVByb3ZpZGVyIH0gZnJvbSAnLi9zcmMvQ29tbWVyY2VQcm92aWRlcidcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2hvb2tzJ1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTaG9waWZ5QnV5IGZyb20gJ3Nob3BpZnktYnV5J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vQ29udGV4dCdcbmltcG9ydCB7IExvY2FsU3RvcmFnZSwgTG9jYWxTdG9yYWdlS2V5cyB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWVyY2VQcm92aWRlclByb3BzIGV4dGVuZHMgU2hvcGlmeUJ1eS5Db25maWcge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21tZXJjZVByb3ZpZGVyKHtcbiAgc3RvcmVmcm9udEFjY2Vzc1Rva2VuLFxuICBkb21haW4sXG4gIGNoaWxkcmVuLFxufTogQ29tbWVyY2VQcm92aWRlclByb3BzKSB7XG4gIGlmIChkb21haW4gPT0gbnVsbCB8fCBzdG9yZWZyb250QWNjZXNzVG9rZW4gPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdVbmFibGUgdG8gYnVpbGQgc2hvcGlmeS1idXkgY2xpZW50IG9iamVjdC4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdXIgYWNjZXNzIHRva2VuIGFuZCBkb21haW4gYXJlIGNvcnJlY3QuJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxDYXJ0ID0gTG9jYWxTdG9yYWdlLmdldEluaXRpYWxDYXJ0KClcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGU8U2hvcGlmeUJ1eS5DYXJ0IHwgbnVsbD4oaW5pdGlhbENhcnQpXG5cbiAgY29uc3QgaXNDdXN0b21Eb21haW4gPSBkb21haW4uaW5jbHVkZXMoJy4nKVxuXG4gIGNvbnN0IGNsaWVudCA9IFNob3BpZnlCdXkuYnVpbGRDbGllbnQoe1xuICAgIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbixcbiAgICBkb21haW46IGlzQ3VzdG9tRG9tYWluID8gZG9tYWluIDogYCR7ZG9tYWlufS5teXNob3BpZnkuY29tYCxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldE5ld0NhcnQoKSB7XG4gICAgICBjb25zdCBuZXdDYXJ0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LmNyZWF0ZSgpXG4gICAgICBzZXRDYXJ0KG5ld0NhcnQpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEV4aXN0aW5nQ2FydChjYXJ0SWQ6IHN0cmluZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVmcmVzaGVkQ2FydCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5mZXRjaChjYXJ0SWQpXG5cbiAgICAgICAgaWYgKHJlZnJlc2hlZENhcnQgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBnZXROZXdDYXJ0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhcnRIYXNCZWVuUHVyY2hhc2VkID0gQm9vbGVhbihyZWZyZXNoZWRDYXJ0LmNvbXBsZXRlZEF0KVxuXG4gICAgICAgIGlmIChjYXJ0SGFzQmVlblB1cmNoYXNlZCkge1xuICAgICAgICAgIGdldE5ld0NhcnQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldENhcnQocmVmcmVzaGVkQ2FydClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2FydCA9PSBudWxsKSB7XG4gICAgICBnZXROZXdDYXJ0KClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVmcmVzaEV4aXN0aW5nQ2FydChTdHJpbmcoY2FydC5pZCkpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIExvY2FsU3RvcmFnZS5zZXQoTG9jYWxTdG9yYWdlS2V5cy5DQVJULCBKU09OLnN0cmluZ2lmeShjYXJ0KSlcbiAgfSwgW2NhcnRdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgY2FydCxcbiAgICAgICAgc2V0Q2FydCxcbiAgICAgICAgZG9tYWluLFxuICAgICAgICBzdG9yZWZyb250QWNjZXNzVG9rZW4sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTaG9waWZ5QnV5IGZyb20gJ3Nob3BpZnktYnV5J1xuXG5pbnRlcmZhY2UgQ29udGV4dFNoYXBlIHtcbiAgY2xpZW50OiBTaG9waWZ5QnV5LkNsaWVudCB8IG51bGxcbiAgY2FydDogU2hvcGlmeUJ1eS5DYXJ0IHwgbnVsbFxuICBzZXRDYXJ0OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxTaG9waWZ5QnV5LkNhcnQgfCBudWxsPj5cbiAgZG9tYWluOiBzdHJpbmdcbiAgc3RvcmVmcm9udEFjY2Vzc1Rva2VuOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENvbnRleHRTaGFwZT4oe1xuICBjbGllbnQ6IG51bGwsXG4gIGNhcnQ6IG51bGwsXG4gIGRvbWFpbjogJycsXG4gIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbjogJycsXG4gIHNldENhcnQ6ICgpID0+IHtcbiAgICB0aHJvdyBFcnJvcignWW91IGZvcmdvdCB0byB3cmFwIHRoaXMgaW4gYSBQcm92aWRlciBvYmplY3QnKVxuICB9LFxufSlcbiIsImltcG9ydCAqIGFzIHFzIGZyb20gJ3FzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1aWxsZGVyQ29uZmlnIHtcbiAgYXBpS2V5OiBzdHJpbmdcbiAgcHJvZHVjdHNNb2RlbDogc3RyaW5nXG4gIGNvbGxlY3Rpb25zTW9kZWw6IHN0cmluZ1xuICBpc0RlbW8/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGVjdGlvblByb2R1Y3RzUXVlcnkge1xuICBoYW5kbGU6IHN0cmluZ1xuICBsaW1pdD86IG51bWJlclxuICBjdXJzb3I/OiBzdHJpbmdcbiAgYXBpS2V5OiBzdHJpbmdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RzKFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBsaW1pdCA9IDEwMCxcbiAgb2Zmc2V0ID0gMFxuKSB7XG4gIGNvbnN0IHByb2R1Y3RzQ29udGVudCA9IChcbiAgICBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92Mi9jb250ZW50LyR7Y29uZmlnLnByb2R1Y3RzTW9kZWx9P2FwaUtleT0ke2NvbmZpZy5hcGlLZXl9JmxpbWl0PSR7bGltaXR9Jm9mZnNldD0ke29mZnNldH0mY2FjaGVidXN0PXRydWVgXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICkucmVzdWx0c1xuXG4gIHJldHVybiBwcm9kdWN0c0NvbnRlbnQubWFwKChwcjogYW55KSA9PiBwci5kYXRhKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoUHJvZHVjdHMoXG4gIGNvbmZpZzogQnVpbGxkZXJDb25maWcsXG4gIHNlYXJjaFN0cmluZzogc3RyaW5nLFxuICBsaW1pdCA9IDEwMCxcbiAgb2Zmc2V0ID0gMFxuKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KFxuICAgIHtcbiAgICAgIGZpZWxkczogWydkYXRhJ10sXG4gICAgICBsaW1pdCxcbiAgICAgIG9mZnNldCxcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICB9LFxuICAgIHsgYWxsb3dEb3RzOiB0cnVlIH1cbiAgKVxuXG4gIGNvbnN0IHByb2R1Y3RzQ29udGVudCA9IChcbiAgICBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92Mi9jb250ZW50LyR7XG4gICAgICAgIGNvbmZpZy5wcm9kdWN0c01vZGVsXG4gICAgICB9PyR7cXVlcnl9JnF1ZXJ5LmRhdGEudGl0bGU9JHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICRyZWdleDogYCR7c2VhcmNoU3RyaW5nfWAsXG4gICAgICAgICRvcHRpb25zOiAnaScsXG4gICAgICB9KX1gXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICkucmVzdWx0c1xuICByZXR1cm4gcHJvZHVjdHNDb250ZW50Py5tYXAoKHByb2R1Y3Q6IGFueSkgPT4gcHJvZHVjdC5kYXRhKSB8fCBbXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUHJvZHVjdFBhdGhzKFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBsaW1pdD86IG51bWJlclxuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCBwcm9kdWN0czogYW55W10gPSBhd2FpdCBnZXRBbGxQcm9kdWN0cyhjb25maWcsIGxpbWl0KVxuICByZXR1cm4gcHJvZHVjdHM/Lm1hcCgoZW50cnkpID0+IGVudHJ5LmhhbmRsZSkgfHwgW11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3QoXG4gIGNvbmZpZzogQnVpbGxkZXJDb25maWcsXG4gIG9wdGlvbnM6IHsgaWQ/OiBzdHJpbmc7IGhhbmRsZT86IHN0cmluZzsgd2l0aENvbnRlbnQ/OiBib29sZWFuIH1cbikge1xuICBpZiAoQm9vbGVhbihvcHRpb25zLmlkKSA9PT0gQm9vbGVhbihvcHRpb25zLmhhbmRsZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VpdGhlciBhIGhhbmRsZSBvciBpZCBpcyByZXF1aXJlZCcpXG4gIH1cbiAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xuICAgIGxpbWl0OiAxLFxuICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICBxdWVyeToge1xuICAgICAgZGF0YTogb3B0aW9ucy5pZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGlkOiB7ICRlcTogb3B0aW9ucy5pZCB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBoYW5kbGU6IHsgJGVxOiBvcHRpb25zLmhhbmRsZSB9LFxuICAgICAgICAgIH0sXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBwcm9kdWN0c0NvbnRlbnQgPSAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjIvY29udGVudC8ke2NvbmZpZy5wcm9kdWN0c01vZGVsfT8ke3F1ZXJ5fWBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgKS5yZXN1bHRzXG5cbiAgaWYgKG9wdGlvbnMud2l0aENvbnRlbnQpIHtcbiAgICByZXR1cm4gcHJvZHVjdHNDb250ZW50WzBdXG4gIH1cbiAgcmV0dXJuIHByb2R1Y3RzQ29udGVudFswXT8uZGF0YVxufVxuXG4vKipcbiAqIENvbGxlY3Rpb25zXG4gKi9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENvbGxlY3Rpb25zKFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBsaW1pdCA9IDIwLFxuICBvZmZzZXQgPSAwLFxuICBmaWVsZHM/OiBzdHJpbmdcbikge1xuICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeShcbiAgICB7XG4gICAgICBmaWVsZHM6IGZpZWxkcyB8fCAnZGF0YScsXG4gICAgICBsaW1pdCxcbiAgICAgIG9mZnNldCxcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgIGNhY2hlYnVzdDogdHJ1ZSxcbiAgICB9LFxuICAgIHsgYWxsb3dEb3RzOiB0cnVlIH1cbiAgKVxuXG4gIGNvbnN0IGNvbGxlY3Rpb25zQ29udGVudCA9IChcbiAgICBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92Mi9jb250ZW50LyR7Y29uZmlnLmNvbGxlY3Rpb25zTW9kZWx9PyR7cXVlcnl9YFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApLnJlc3VsdHNcblxuICByZXR1cm4gY29sbGVjdGlvbnNDb250ZW50Py5tYXAoKGVudHJ5OiBhbnkpID0+IGVudHJ5LmRhdGEpIHx8IFtdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hDb2xsZWN0aW9ucyhcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgc2VhcmNoU3RyaW5nOiBzdHJpbmcsXG4gIGxpbWl0ID0gMTAwLFxuICBvZmZzZXQgPSAwXG4pIHtcbiAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoXG4gICAge1xuICAgICAgZmllbGRzOiBbJ2RhdGEnXSxcbiAgICAgIGxpbWl0LFxuICAgICAgb2Zmc2V0LFxuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgIH0sXG4gICAgeyBhbGxvd0RvdHM6IHRydWUgfVxuICApXG5cbiAgY29uc3QgY29sbGVjdGlvbnNDb250ZW50ID0gKFxuICAgIGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vY2RuLmJ1aWxkZXIuaW8vYXBpL3YyL2NvbnRlbnQvJHtcbiAgICAgICAgY29uZmlnLmNvbGxlY3Rpb25zTW9kZWxcbiAgICAgIH0/JHtxdWVyeX0mcXVlcnkuJG9yPSR7SlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICB7XG4gICAgICAgICAgJ2RhdGEuZGVzY3JpcHRpb24nOiB7ICRyZWdleDogYCR7c2VhcmNoU3RyaW5nfWAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICdkYXRhLnRpdGxlJzogeyAkcmVnZXg6IGAke3NlYXJjaFN0cmluZ31gIH0sXG4gICAgICAgIH0sXG4gICAgICBdKX1gXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICkucmVzdWx0c1xuICByZXR1cm4gY29sbGVjdGlvbnNDb250ZW50Py5tYXAoKGVudHJ5OiBhbnkpID0+IGVudHJ5LmRhdGEpIHx8IFtdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDb2xsZWN0aW9uUGF0aHMoXG4gIGNvbmZpZzogQnVpbGxkZXJDb25maWcsXG4gIGxpbWl0PzogbnVtYmVyXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IGNvbGxlY3Rpb25zOiBhbnlbXSA9IGF3YWl0IGdldEFsbENvbGxlY3Rpb25zKGNvbmZpZywgbGltaXQpXG4gIHJldHVybiBjb2xsZWN0aW9ucz8ubWFwKChlbnRyeSkgPT4gZW50cnkuaGFuZGxlKSB8fCBbXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbihcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgb3B0aW9uczoge1xuICAgIGlkPzogc3RyaW5nXG4gICAgaGFuZGxlPzogc3RyaW5nXG4gICAgcHJvZHVjdHNRdWVyeT86IE9taXQ8Q29sbGVjdGlvblByb2R1Y3RzUXVlcnksICdoYW5kbGUnPlxuICB9XG4pIHtcbiAgaWYgKEJvb2xlYW4ob3B0aW9ucy5pZCkgPT09IEJvb2xlYW4ob3B0aW9ucy5oYW5kbGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFaXRoZXIgYSBoYW5kbGUgb3IgaWQgaXMgcmVxdWlyZWQnKVxuICB9XG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcbiAgICBsaW1pdDogMSxcbiAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgY2FjaGVidXN0OiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuICAgIHF1ZXJ5OiB7XG4gICAgICBkYXRhOiBvcHRpb25zLmlkXG4gICAgICAgID8ge1xuICAgICAgICAgICAgaWQ6IHsgJGVxOiBvcHRpb25zLmlkIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIGhhbmRsZTogeyAkZXE6IG9wdGlvbnMuaGFuZGxlIH0sXG4gICAgICAgICAgfSxcbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IGNvbGxlY3Rpb25zQ29udGVudCA9IChcbiAgICBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92Mi9jb250ZW50LyR7Y29uZmlnLmNvbGxlY3Rpb25zTW9kZWx9PyR7cXVlcnl9YFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApLnJlc3VsdHNcblxuICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnNDb250ZW50WzBdPy5kYXRhXG4gIGlmIChjb25maWcuaXNEZW1vKSB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25cbiAgfVxuICBjb25zdCBwcm9kdWN0c1F1ZXJ5ID0ge1xuICAgIGxpbWl0OiAyMCxcbiAgICBoYW5kbGU6IGNvbGxlY3Rpb24/LmhhbmRsZSxcbiAgICAuLi5vcHRpb25zLnByb2R1Y3RzUXVlcnksXG4gICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICB9XG4gIGNvbnN0IHsgcHJvZHVjdHMsIG5leHRQYWdlQ3Vyc29yLCBoYXNOZXh0UGFnZSB9ID0gYXdhaXQgZ2V0Q29sbGVjdGlvblByb2R1Y3RzKFxuICAgIHByb2R1Y3RzUXVlcnlcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgLi4uY29sbGVjdGlvbixcbiAgICBwcm9kdWN0cyxcbiAgICBuZXh0UGFnZUN1cnNvcixcbiAgICBoYXNOZXh0UGFnZSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q29sbGVjdGlvblByb2R1Y3RzID0gKFxuICBwcm9kdWN0c1F1ZXJ5OiBDb2xsZWN0aW9uUHJvZHVjdHNRdWVyeVxuKTogUHJvbWlzZTx7XG4gIG5leHRQYWdlQ3Vyc29yOiBzdHJpbmdcbiAgcHJvZHVjdHM6IGFueVtdXG4gIGhhc05leHRQYWdlOiBib29sZWFuXG59PiA9PiB7XG4gIGNvbnN0IHNlYXJjaCA9IHFzLnN0cmluZ2lmeShwcm9kdWN0c1F1ZXJ5KVxuICByZXR1cm4gZmV0Y2goXG4gICAgYGh0dHBzOi8vY2RuLmJ1aWxkZXIuaW8vYXBpL3YxL3Nob3BpZnktc3luYy9jb2xsZWN0aW9uLXByb2R1Y3RzPyR7c2VhcmNofWBcbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG59XG4iLCJleHBvcnQgeyB1c2VDbGllbnRVbnNhZmUgfSBmcm9tICcuL3VzZUNsaWVudFVuc2FmZSdcbmV4cG9ydCB7IHVzZVNldENhcnRVbnNhZmUgfSBmcm9tICcuL3VzZVNldENhcnRVbnNhZmUnXG5leHBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi91c2VDYXJ0J1xuZXhwb3J0IHsgdXNlQ2FydENvdW50IH0gZnJvbSAnLi91c2VDYXJ0Q291bnQnXG5leHBvcnQgeyB1c2VBZGRJdGVtVG9DYXJ0IH0gZnJvbSAnLi91c2VBZGRJdGVtVG9DYXJ0J1xuZXhwb3J0IHsgdXNlQWRkSXRlbXNUb0NhcnQgfSBmcm9tICcuL3VzZUFkZEl0ZW1zVG9DYXJ0J1xuZXhwb3J0IHsgdXNlUmVtb3ZlSXRlbUZyb21DYXJ0IH0gZnJvbSAnLi91c2VSZW1vdmVJdGVtRnJvbUNhcnQnXG5leHBvcnQgeyB1c2VSZW1vdmVJdGVtc0Zyb21DYXJ0IH0gZnJvbSAnLi91c2VSZW1vdmVJdGVtc0Zyb21DYXJ0J1xuZXhwb3J0IHsgdXNlQ2FydEl0ZW1zIH0gZnJvbSAnLi91c2VDYXJ0SXRlbXMnXG5leHBvcnQgeyB1c2VDaGVja291dFVybCB9IGZyb20gJy4vdXNlQ2hlY2tvdXRVcmwnXG5leHBvcnQgeyB1c2VHZXRMaW5lSXRlbSB9IGZyb20gJy4vdXNlR2V0TGluZUl0ZW0nXG5leHBvcnQgeyB1c2VVcGRhdGVJdGVtUXVhbnRpdHkgfSBmcm9tICcuL3VzZVVwZGF0ZUl0ZW1RdWFudGl0eSdcbiIsImltcG9ydCB7IHVzZUFkZEl0ZW1zVG9DYXJ0IH0gZnJvbSAnLi91c2VBZGRJdGVtc1RvQ2FydCdcbmltcG9ydCB7IEF0dHJpYnV0ZUlucHV0IH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBZGRJdGVtVG9DYXJ0KCkge1xuICBjb25zdCBhZGRJdGVtc1RvQ2FydCA9IHVzZUFkZEl0ZW1zVG9DYXJ0KClcblxuICBhc3luYyBmdW5jdGlvbiBhZGRJdGVtVG9DYXJ0KFxuICAgIHZhcmlhbnRJZDogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHF1YW50aXR5OiBudW1iZXIsXG4gICAgY3VzdG9tQXR0cmlidXRlcz86IEF0dHJpYnV0ZUlucHV0W11cbiAgKSB7XG4gICAgY29uc3QgaXRlbSA9IFt7IHZhcmlhbnRJZCwgcXVhbnRpdHksIGN1c3RvbUF0dHJpYnV0ZXMgfV1cblxuICAgIHJldHVybiBhZGRJdGVtc1RvQ2FydChpdGVtKVxuICB9XG5cbiAgcmV0dXJuIGFkZEl0ZW1Ub0NhcnRcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuaW1wb3J0IFNob3BpZnlCdXkgZnJvbSAnc2hvcGlmeS1idXknXG5pbXBvcnQgeyBMaW5lSXRlbVBhdGNoIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBZGRJdGVtc1RvQ2FydCgpIHtcbiAgY29uc3QgeyBjbGllbnQsIGNhcnQsIHNldENhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcblxuICBhc3luYyBmdW5jdGlvbiBhZGRJdGVtc1RvQ2FydChpdGVtczogTGluZUl0ZW1QYXRjaFtdKSB7XG4gICAgaWYgKGNhcnQgPT0gbnVsbCB8fCBjbGllbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgYWRkSXRlbXNUb0NhcnQgdG9vIHNvb24nKVxuICAgIH1cblxuICAgIGlmIChpdGVtcy5sZW5ndGggPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdNdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGxpbmUgaXRlbSwgZW1wdHkgbGluZSBpdGVtcyBmb3VuZCdcbiAgICAgIClcbiAgICB9XG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS52YXJpYW50SWQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgdmFyaWFudElkIGluIGl0ZW1gKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5xdWFudGl0eSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgTWlzc2luZyBxdWFudGl0eSBpbiBpdGVtIHdpdGggdmFyaWFudCBpZDogJHtpdGVtLnZhcmlhbnRJZH1gXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0ucXVhbnRpdHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBRdWFudGl0eSBpcyBub3QgYSBudW1iZXIgaW4gaXRlbSB3aXRoIHZhcmlhbnQgaWQ6ICR7aXRlbS52YXJpYW50SWR9YFxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0ucXVhbnRpdHkgPCAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgUXVhbnRpdHkgbXVzdCBub3QgYmUgbGVzcyB0aGFuIG9uZSBpbiBpdGVtIHdpdGggdmFyaWFudCBpZDogJHtpdGVtLnZhcmlhbnRJZH1gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgbmV3Q2FydCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5hZGRMaW5lSXRlbXMoXG4gICAgICBjYXJ0LmlkLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpdGVtcyBhcyBTaG9waWZ5QnV5LkxpbmVJdGVtW11cbiAgICApXG4gICAgc2V0Q2FydChuZXdDYXJ0KVxuICB9XG5cbiAgcmV0dXJuIGFkZEl0ZW1zVG9DYXJ0XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhcnQoKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICByZXR1cm4gY2FydFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0Q291bnQoKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBpZiAoY2FydCA9PSBudWxsIHx8IGNhcnQubGluZUl0ZW1zLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgY291bnQgPSBjYXJ0LmxpbmVJdGVtcy5yZWR1Y2UoKHRvdGFsQ291bnQsIGxpbmVJdGVtKSA9PiB7XG4gICAgcmV0dXJuIHRvdGFsQ291bnQgKyBsaW5lSXRlbS5xdWFudGl0eVxuICB9LCAwKVxuXG4gIHJldHVybiBjb3VudFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0SXRlbXMoKSB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBpZiAoIWNhcnQgfHwgIUFycmF5LmlzQXJyYXkoY2FydC5saW5lSXRlbXMpKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICByZXR1cm4gY2FydC5saW5lSXRlbXNcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hlY2tvdXRVcmwoKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBpZiAoY2FydCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBjYXJ0LndlYlVybFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDbGllbnRVbnNhZmUoKSB7XG4gIGNvbnN0IHsgY2xpZW50IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdVc2luZyBjbGllbnQgZGlyZWN0bHkgd2lsbCBoaXQgc2hvcGlmeSBBUEkgYW5kIGNvdW50cyB0b3dhcmRzIHlvdXIgc3RvcmVmcm9udCByYXRlIGxpbWl0J1xuICAgIClcbiAgfVxuICByZXR1cm4gY2xpZW50XG59XG4iLCJpbXBvcnQgeyB1c2VDYXJ0SXRlbXMgfSBmcm9tICcuL3VzZUNhcnRJdGVtcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldExpbmVJdGVtKCkge1xuICBjb25zdCBjYXJ0SXRlbXMgPSB1c2VDYXJ0SXRlbXMoKVxuXG4gIGZ1bmN0aW9uIGdldExpbmVJdGVtKHZhcmlhbnRJZDogc3RyaW5nIHwgbnVtYmVyKTogU2hvcGlmeUJ1eS5MaW5lSXRlbSB8IG51bGwge1xuICAgIGlmIChjYXJ0SXRlbXMubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtID0gY2FydEl0ZW1zLmZpbmQoKGNhcnRJdGVtKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJldHVybiBjYXJ0SXRlbS52YXJpYW50LmlkID09PSB2YXJpYW50SWRcbiAgICB9KVxuXG4gICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVxuICB9XG5cbiAgcmV0dXJuIGdldExpbmVJdGVtXG59XG4iLCJpbXBvcnQgeyB1c2VSZW1vdmVJdGVtc0Zyb21DYXJ0IH0gZnJvbSAnLi91c2VSZW1vdmVJdGVtc0Zyb21DYXJ0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVtb3ZlSXRlbUZyb21DYXJ0KCkge1xuICBjb25zdCByZW1vdmVJdGVtc0Zyb21DYXJ0ID0gdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21DYXJ0KHZhcmlhbnRJZDogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgaWYgKHZhcmlhbnRJZCA9PT0gJycgfHwgdmFyaWFudElkID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVmFyaWFudElkIG11c3Qgbm90IGJlIGJsYW5rIG9yIG51bGwnKVxuICAgIH1cblxuICAgIHJldHVybiByZW1vdmVJdGVtc0Zyb21DYXJ0KFtTdHJpbmcodmFyaWFudElkKV0pXG4gIH1cblxuICByZXR1cm4gcmVtb3ZlSXRlbUZyb21DYXJ0XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcbmltcG9ydCB7IHVzZUdldExpbmVJdGVtIH0gZnJvbSAnLi91c2VHZXRMaW5lSXRlbSdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlbW92ZUl0ZW1zRnJvbUNhcnQoKSB7XG4gIGNvbnN0IHsgY2xpZW50LCBjYXJ0LCBzZXRDYXJ0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG4gIGNvbnN0IGdldExpbmVJdGVtID0gdXNlR2V0TGluZUl0ZW0oKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUl0ZW1zRnJvbUNhcnQodmFyaWFudElkczogc3RyaW5nW10pIHtcbiAgICBpZiAoY2FydCA9PSBudWxsIHx8IGNsaWVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxlZCByZW1vdmVJdGVtc0Zyb21DYXJ0IHRvbyBzb29uJylcbiAgICB9XG5cbiAgICBpZiAodmFyaWFudElkcy5sZW5ndGggPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgaXRlbSB0byByZW1vdmUnKVxuICAgIH1cblxuICAgIGNvbnN0IGxpbmVJdGVtSWRzID0gdmFyaWFudElkcy5tYXAoKHZhcmlhbnRJZCkgPT4ge1xuICAgICAgY29uc3QgbGluZUl0ZW0gPSBnZXRMaW5lSXRlbSh2YXJpYW50SWQpXG4gICAgICBpZiAobGluZUl0ZW0gPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDb3VsZCBub3QgZmluZCBsaW5lIGl0ZW0gaW4gY2FydCB3aXRoIHZhcmlhbnQgaWQ6ICR7dmFyaWFudElkfWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIFN0cmluZyhsaW5lSXRlbS5pZClcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3Q2FydCA9IGF3YWl0IGNsaWVudC5jaGVja291dC5yZW1vdmVMaW5lSXRlbXMoY2FydC5pZCwgbGluZUl0ZW1JZHMpXG4gICAgc2V0Q2FydChuZXdDYXJ0KVxuICB9XG5cbiAgcmV0dXJuIHJlbW92ZUl0ZW1zRnJvbUNhcnRcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU2V0Q2FydFVuc2FmZSgpIHtcbiAgY29uc3QgeyBzZXRDYXJ0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG4gIHJldHVybiBzZXRDYXJ0XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcblxuaW1wb3J0IHsgdXNlR2V0TGluZUl0ZW0gfSBmcm9tICcuL3VzZUdldExpbmVJdGVtJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVXBkYXRlSXRlbVF1YW50aXR5KCkge1xuICBjb25zdCB7IGNsaWVudCwgY2FydCwgc2V0Q2FydCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuICBjb25zdCBnZXRMaW5lSXRlbSA9IHVzZUdldExpbmVJdGVtKClcblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVJdGVtUXVhbnRpdHkoXG4gICAgdmFyaWFudElkOiBzdHJpbmcgfCBudW1iZXIsXG4gICAgcXVhbnRpdHk6IG51bWJlclxuICApIHtcbiAgICBpZiAodmFyaWFudElkID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgdmFyaWFudCBpZCcpXG4gICAgfVxuXG4gICAgaWYgKHF1YW50aXR5ID09IG51bGwgfHwgTnVtYmVyKHF1YW50aXR5KSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVhbnRpdHkgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpXG4gICAgfVxuXG4gICAgY29uc3QgbGluZUl0ZW0gPSBnZXRMaW5lSXRlbSh2YXJpYW50SWQpXG4gICAgaWYgKGxpbmVJdGVtID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSXRlbSB3aXRoIHZhcmlhbnRJZCAke3ZhcmlhbnRJZH0gbm90IGluIGNhcnRgKVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBuZXdDYXJ0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LnVwZGF0ZUxpbmVJdGVtcyhjYXJ0LmlkLCBbXG4gICAgICB7IGlkOiBsaW5lSXRlbS5pZCwgcXVhbnRpdHkgfSxcbiAgICBdKVxuICAgIHNldENhcnQobmV3Q2FydClcbiAgfVxuXG4gIHJldHVybiB1cGRhdGVJdGVtUXVhbnRpdHlcbn1cbiIsImltcG9ydCBTaG9waWZ5QnV5IGZyb20gJ3Nob3BpZnktYnV5J1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlS2V5cyB9IGZyb20gJy4va2V5cydcbmltcG9ydCB7IGlzQ2FydCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5mdW5jdGlvbiBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgaWYgKGlzQnJvd3Nlcikge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldChrZXk6IHN0cmluZykge1xuICBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICBpZiAoIWlzQnJvd3Nlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuICAgIHJldHVybiBpdGVtXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbENhcnQoKTogU2hvcGlmeUJ1eS5DYXJ0IHwgbnVsbCB7XG4gIGNvbnN0IGV4aXN0aW5nQ2FydFN0cmluZyA9IGdldChMb2NhbFN0b3JhZ2VLZXlzLkNBUlQpXG4gIGlmIChleGlzdGluZ0NhcnRTdHJpbmcgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGV4aXN0aW5nQ2FydCA9IEpTT04ucGFyc2UoZXhpc3RpbmdDYXJ0U3RyaW5nKVxuICAgIGlmICghaXNDYXJ0KGV4aXN0aW5nQ2FydCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGV4aXN0aW5nQ2FydCBhcyBTaG9waWZ5QnV5LkNhcnRcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTG9jYWxTdG9yYWdlID0ge1xuICBnZXQsXG4gIHNldCxcbiAgZ2V0SW5pdGlhbENhcnQsXG59XG4iLCJpbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL0xvY2FsU3RvcmFnZSdcbmltcG9ydCB7IExvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuL2tleXMnXG5cbmV4cG9ydCB7IExvY2FsU3RvcmFnZSwgTG9jYWxTdG9yYWdlS2V5cyB9XG4iLCJjb25zdCBDQVJUID0gJ3Nob3BpZnlfbG9jYWxfc3RvcmVfX2NhcnQnXG5jb25zdCBDSEVDS09VVF9JRCA9ICdzaG9waWZ5X2xvY2FsX3N0b3JlX19jaGVja291dF9pZCdcblxuZXhwb3J0IGNvbnN0IExvY2FsU3RvcmFnZUtleXMgPSB7XG4gIENBUlQsXG4gIENIRUNLT1VUX0lELFxufVxuIiwiaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBMb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi9Mb2NhbFN0b3JhZ2UnXG5pbXBvcnQgeyBpc0NhcnQgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgeyBMb2NhbFN0b3JhZ2UsIExvY2FsU3RvcmFnZUtleXMsIGlzQ2FydCB9XG4iLCIvKiBcbiAgcHJlcGFyZVZhcmlhbnRzV2l0aE9wdGlvbnMoKVxuXG4gIFRoaXMgZnVuY3Rpb24gY2hhbmdlcyB0aGUgc3RydWN0dXJlIG9mIHRoZSB2YXJpYW50cyB0b1xuICBtb3JlIGVhc2lseSBnZXQgYXQgdGhlaXIgb3B0aW9ucy4gVGhlIG9yaWdpbmFsIGRhdGEgXG4gIHN0cnVjdHVyZSBsb29rcyBsaWtlIHRoaXM6XG5cbiAge1xuICAgIFwic2hvcGlmeUlkXCI6IFwiWjJsa09pOHZjMmh2Y0dsbWVTOVFjbTlrZFdOMFZtRnlhV0Z1ZEM4ek1UYzRORFE0TVRBek1ERTRPQT09XCIsXG4gICAgXCJzZWxlY3RlZE9wdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJDb2xvclwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiUmVkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBcIlNtYWxsXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG5cbiAgVGhpcyBmdW5jdGlvbiBhY2NlcHRzIHRoYXQgYW5kIG91dHB1dHMgYSBkYXRhIHN0cnVjdHVyZSB0aGF0IGxvb2tzIGxpa2UgdGhpczpcblxuICB7XG4gICAgXCJzaG9waWZ5SWRcIjogXCJaMmxrT2k4dmMyaHZjR2xtZVM5UWNtOWtkV04wVm1GeWFXRnVkQzh6TVRjNE5EUTRNVEF6TURFNE9BPT1cIixcbiAgICBcImNvbG9yXCI6IFwiUmVkXCIsXG4gICAgXCJzaXplXCI6IFwiU21hbGxcIlxuICB9LFxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVWYXJpYW50c1dpdGhPcHRpb25zKFxuICB2YXJpYW50czogYW55W11cbiAgLy8gdmFyaWFudHM6IFJlYWRvbmx5PFNob3BpZnlCdXkuUHJvZHVjdFZhcmlhbnRbXT5cbikge1xuICByZXR1cm4gdmFyaWFudHMubWFwKCh2YXJpYW50KSA9PiB7XG4gICAgLy8gVE9ETzogbG9vayBpbnRvIHR5cGVzLCBwcm9iIG5lZWQgdXBkYXRlIGluIEB0eXBlcy9zaG9waWZ5LWJ1eVxuICAgIC8vIGNvbnZlcnQgdGhlIG9wdGlvbnMgdG8gYSBkaWN0aW9uYXJ5IGluc3RlYWQgb2YgYW4gYXJyYXlcbiAgICBjb25zdCBvcHRpb25zRGljdGlvbmFyeSA9IHZhcmlhbnQuc2VsZWN0ZWRPcHRpb25zPy5yZWR1Y2UoXG4gICAgICAob3B0aW9uczogYW55LCBvcHRpb246IGFueSkgPT4ge1xuICAgICAgICBvcHRpb25zW2Ake29wdGlvbj8ubmFtZT8udG9Mb3dlckNhc2UoKX1gXSA9IG9wdGlvbj8udmFsdWVcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICAgIH0sXG4gICAgICB7fVxuICAgIClcblxuICAgIC8vIHJldHVybiBhbiBvYmplY3Qgd2l0aCBhbGwgb2YgdGhlIHZhcmlhbnQgcHJvcGVydGllcyArIHRoZSBvcHRpb25zIGF0IHRoZSB0b3AgbGV2ZWxcbiAgICByZXR1cm4ge1xuICAgICAgLi4ub3B0aW9uc0RpY3Rpb25hcnksXG4gICAgICAuLi52YXJpYW50LFxuICAgIH1cbiAgfSkgYXMgYW55W11cbn1cblxuZXhwb3J0IGNvbnN0IGdldFByaWNlID0gKHByaWNlOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcpID0+XG4gIEludGwuTnVtYmVyRm9ybWF0KHVuZGVmaW5lZCwge1xuICAgIGN1cnJlbmN5LFxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgfSkuZm9ybWF0KHBhcnNlRmxvYXQocHJpY2UgPyBwcmljZSA6ICcwJykpXG5cbi8qXG4gIHByZXBhcmVWYXJpYW50c0ltYWdlcygpXG5cbiAgVGhpcyBmdW5jdGlvbiBkaXN0aWxscyB0aGUgdmFyaWFudHMgaW1hZ2VzIGludG8gYSBub24tcmVkdW5kYW50XG4gIGdyb3VwIHRoYXQgaW5jbHVkZXMgYW4gb3B0aW9uICdrZXknIChtb3N0IGxpa2VseSBjb2xvcikuIFRoZVxuICBkYXRhc3RydWN0dXJlIGNvbWluZyBpbnRvIHRoaXMgZnVuY3Rpb24gbG9va3MgbGlrZSB0aGlzOlxuXG4gIHtcbiAgICBcInNob3BpZnlJZFwiOiBcIloybGtPaTh2YzJodmNHbG1lUzlRY205a2RXTjBWbUZ5YVdGdWRDOHpNVGM0TkRRNE1UQXpNREU0T0E9PVwiLFxuICAgIFwiaW1hZ2VcIjogaW1hZ2UxLFxuICAgIFwiY29sb3JcIjogXCJSZWRcIixcbiAgICBcInNpemVcIjogXCJTbWFsbFwiXG4gIH0sXG4gIHtcbiAgICBcInNob3BpZnlJZFwiOiBcIloybGtPaTh2YzJodmNHbG1lUzlRY205a2RXTjBWbUZ5YVcxbDJDOHpNVGM0TkRRNE1UQXpNREU0T0E9PVwiLFxuICAgIFwiaW1hZ2VcIjogaW1hZ2UxLFxuICAgIFwiY29sb3JcIjogXCJSZWRcIixcbiAgICBcInNpemVcIjogXCJNZWRpdW1cIlxuICB9LFxuXG4gIEFuZCBjb25kZW5zZXMgdGhlbSBzbyB0aGF0IHRoZXJlIGlzIG9ubHkgb25lIHVuaXF1ZVxuICBpbWFnZSBwZXIga2V5IHZhbHVlOlxuXG4gIHtcbiAgICBcImltYWdlXCI6IGltYWdlMSxcbiAgICBcImNvbG9yXCI6IFwiUmVkXCIsXG4gIH0sXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZVZhcmlhbnRzSW1hZ2VzKFxuICB2YXJpYW50czogYW55W10sXG4gIC8vIHZhcmlhbnRzOiBSZWFkb25seTxHYXRzYnlUeXBlcy5TaG9waWZ5UHJvZHVjdFZhcmlhbnRbXT4sXG4gIG9wdGlvbktleTogYW55XG4pOiBhbnlbXSB7XG4gIC8vIEdvIHRocm91Z2ggdGhlIHZhcmlhbnRzIGFuZCByZWR1Y2UgdGhlbSBpbnRvIG5vbi1yZWR1bmRhbnRcbiAgLy8gaW1hZ2VzIGJ5IG9wdGlvbktleS4gT3V0cHV0IGxvb2tzIGxpa2UgdGhpczpcbiAgLy8ge1xuICAvLyAgIFtvcHRpb25LZXldOiBpbWFnZVxuICAvLyB9XG4gIGNvbnN0IGltYWdlRGljdGlvbmFyeSA9IHZhcmlhbnRzLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBTaG9waWZ5QnV5LkltYWdlPj4oXG4gICAgKGltYWdlcywgdmFyaWFudCkgPT4ge1xuICAgICAgaWYgKHZhcmlhbnRbb3B0aW9uS2V5XSkge1xuICAgICAgICBpbWFnZXNbdmFyaWFudFtvcHRpb25LZXldXSA9IHZhcmlhbnQuaW1hZ2VcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbWFnZXNcbiAgICB9LFxuICAgIHt9XG4gIClcblxuICAvLyBwcmVwYXJlIGFuIGFycmF5IG9mIGltYWdlIG9iamVjdHMgdGhhdCBpbmNsdWRlIGJvdGggdGhlIGltYWdlXG4gIC8vIGFuZCB0aGUgb3B0aW9ua2V5IHZhbHVlLlxuICBjb25zdCBpbWFnZXMgPSBPYmplY3Qua2V5cyhpbWFnZURpY3Rpb25hcnkpLm1hcCgoa2V5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtvcHRpb25LZXldOiBrZXksXG4gICAgICBzcmM6IGltYWdlRGljdGlvbmFyeVtrZXldLFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW1hZ2VzXG59XG4iLCJleHBvcnQgeyBpc0NhcnQgfSBmcm9tICcuL2lzQ2FydCdcbiIsImltcG9ydCBTaG9waWZ5QnV5IGZyb20gJ3Nob3BpZnktYnV5J1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FydChwb3RlbnRpYWxDYXJ0OiBhbnkpOiBwb3RlbnRpYWxDYXJ0IGlzIFNob3BpZnlCdXkuQ2FydCB7XG4gIHJldHVybiAoXG4gICAgcG90ZW50aWFsQ2FydCAhPSBudWxsICYmXG4gICAgcG90ZW50aWFsQ2FydC5pZCAhPSBudWxsICYmXG4gICAgcG90ZW50aWFsQ2FydC53ZWJVcmwgIT0gbnVsbCAmJlxuICAgIHBvdGVudGlhbENhcnQubGluZUl0ZW1zICE9IG51bGwgJiZcbiAgICBwb3RlbnRpYWxDYXJ0LnR5cGUgIT0gbnVsbCAmJlxuICAgIHBvdGVudGlhbENhcnQudHlwZS5uYW1lID09PSAnQ2hlY2tvdXQnICYmXG4gICAgcG90ZW50aWFsQ2FydC50eXBlLmtpbmQgPT09ICdPQkpFQ1QnXG4gIClcbn1cbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3QgcGVyY2VudFNpemVzID0gWy4uLnNpemVzLm1hdGNoQWxsKC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nKV0ubWFwKChtKSA9PlxuICAgICAgcGFyc2VJbnQobVsyXSlcbiAgICApXG4gICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoXG4gICAgICAgICAgKHMpID0+IHMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICksXG4gICAgICAgIGtpbmQ6ICd3JyxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBhbGxTaXplcywga2luZDogJ3cnIH1cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuXG4gICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7IWlzVmlzaWJsZSAmJiAoXG4gICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHsuLi5nZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgICBsb2FkZXIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgICAgICBzaXplcz17c2l6ZXN9XG4gICAgICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgKX1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZXRlY3REb21haW5Mb2NhbGUoXG4gIGRvbWFpbkl0ZW1zOlxuICAgIHwgQXJyYXk8e1xuICAgICAgICBodHRwPzogYm9vbGVhblxuICAgICAgICBkb21haW46IHN0cmluZ1xuICAgICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgICAgZGVmYXVsdExvY2FsZTogc3RyaW5nXG4gICAgICB9PlxuICAgIHwgdW5kZWZpbmVkLFxuICBob3N0bmFtZT86IHN0cmluZyxcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBsZXQgZG9tYWluSXRlbTpcbiAgICB8IHtcbiAgICAgICAgaHR0cD86IGJvb2xlYW5cbiAgICAgICAgZG9tYWluOiBzdHJpbmdcbiAgICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICAgIGRlZmF1bHRMb2NhbGU6IHN0cmluZ1xuICAgICAgfVxuICAgIHwgdW5kZWZpbmVkXG5cbiAgaWYgKGRvbWFpbkl0ZW1zKSB7XG4gICAgaWYgKGRldGVjdGVkTG9jYWxlKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGRldGVjdGVkTG9jYWxlLnRvTG93ZXJDYXNlKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZG9tYWluSXRlbXMpIHtcbiAgICAgIC8vIHJlbW92ZSBwb3J0IGlmIHByZXNlbnRcbiAgICAgIGNvbnN0IGRvbWFpbkhvc3RuYW1lID0gaXRlbS5kb21haW4/LnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKVxuICAgICAgaWYgKFxuICAgICAgICBob3N0bmFtZSA9PT0gZG9tYWluSG9zdG5hbWUgfHxcbiAgICAgICAgZGV0ZWN0ZWRMb2NhbGUgPT09IGl0ZW0uZGVmYXVsdExvY2FsZS50b0xvd2VyQ2FzZSgpIHx8XG4gICAgICAgIGl0ZW0ubG9jYWxlcz8uc29tZSgobG9jYWxlKSA9PiBsb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gZGV0ZWN0ZWRMb2NhbGUpXG4gICAgICApIHtcbiAgICAgICAgZG9tYWluSXRlbSA9IGl0ZW1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9tYWluSXRlbVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaClcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcblxuY29uc3Qgc3RhdHVzQ29kZXM6IHsgW2NvZGU6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuICA0MDA6ICdCYWQgUmVxdWVzdCcsXG4gIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICA0MDU6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuICA1MDA6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InLFxufVxuXG5leHBvcnQgdHlwZSBFcnJvclByb3BzID0ge1xuICBzdGF0dXNDb2RlOiBudW1iZXJcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyh7XG4gIHJlcyxcbiAgZXJyLFxufTogTmV4dFBhZ2VDb250ZXh0KTogUHJvbWlzZTxFcnJvclByb3BzPiB8IEVycm9yUHJvcHMge1xuICBjb25zdCBzdGF0dXNDb2RlID1cbiAgICByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlISA6IDQwNFxuICByZXR1cm4geyBzdGF0dXNDb2RlIH1cbn1cblxuLyoqXG4gKiBgRXJyb3JgIGNvbXBvbmVudCB1c2VkIGZvciBoYW5kbGluZyBlcnJvcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yPFAgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UCAmIEVycm9yUHJvcHM+IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSdcblxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHNcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGl0bGUgPVxuICAgICAgdGhpcy5wcm9wcy50aXRsZSB8fFxuICAgICAgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHxcbiAgICAgICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCdcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZXJyb3J9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICB7c3RhdHVzQ29kZX06IHt0aXRsZX1cbiAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogJ2JvZHkgeyBtYXJnaW46IDAgfScgfX0gLz5cbiAgICAgICAgICB7c3RhdHVzQ29kZSA/IDxoMSBzdHlsZT17c3R5bGVzLmgxfT57c3RhdHVzQ29kZX08L2gxPiA6IG51bGx9XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmRlc2N9PlxuICAgICAgICAgICAgPGgyIHN0eWxlPXtzdHlsZXMuaDJ9Pnt0aXRsZX0uPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzOiB7IFtrOiBzdHJpbmddOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIH0gPSB7XG4gIGVycm9yOiB7XG4gICAgY29sb3I6ICcjMDAwJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgZm9udEZhbWlseTpcbiAgICAgICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG5cbiAgZGVzYzoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcbiAgICBoZWlnaHQ6ICc0OXB4JyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgfSxcblxuICBoMToge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4IDIzcHggMTBweCAwJyxcbiAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgfSxcblxuICBoMjoge1xuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICB9LFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2Vycm9yJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgdHlwZSB7XG4gIEdldFN0YXRpY1BhdGhzQ29udGV4dCxcbiAgR2V0U3RhdGljUHJvcHNDb250ZXh0LFxuICBJbmZlckdldFN0YXRpY1Byb3BzVHlwZSxcbn0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uJ1xuaW1wb3J0IHsgQnVpbGRlckNvbXBvbmVudCwgQnVpbGRlciwgYnVpbGRlciB9IGZyb20gJ0BidWlsZGVyLmlvL3JlYWN0J1xuaW1wb3J0IHsgcmVzb2x2ZUJ1aWxkZXJDb250ZW50IH0gZnJvbSAnQGxpYi9yZXNvbHZlLWJ1aWxkZXItY29udGVudCdcbmltcG9ydCBidWlsZGVyQ29uZmlnIGZyb20gJ0Bjb25maWcvYnVpbGRlcidcbmltcG9ydCB7XG4gIGdldENvbGxlY3Rpb24sXG4gIGdldEFsbENvbGxlY3Rpb25QYXRocyxcbn0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvYXBpL29wZXJhdGlvbnMtYnVpbGRlcidcbmltcG9ydCBEZWZhdWx0RXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VUaGVtZVVJIH0gZnJvbSAnQHRoZW1lLXVpL2NvcmUnXG5pbXBvcnQgeyBnZXRMYXlvdXRQcm9wcyB9IGZyb20gJ0BsaWIvZ2V0LWxheW91dC1wcm9wcydcblxuYnVpbGRlci5pbml0KGJ1aWxkZXJDb25maWcuYXBpS2V5ISlcbkJ1aWxkZXIuaXNTdGF0aWMgPSB0cnVlXG5jb25zdCBidWlsZGVyTW9kZWwgPSAnY29sbGVjdGlvbi1wYWdlJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe1xuICBwYXJhbXMsXG4gIGxvY2FsZSxcbn06IEdldFN0YXRpY1Byb3BzQ29udGV4dDx7IGhhbmRsZTogc3RyaW5nIH0+KSB7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBnZXRDb2xsZWN0aW9uKGJ1aWxkZXJDb25maWcsIHtcbiAgICBoYW5kbGU6IHBhcmFtcz8uaGFuZGxlLFxuICB9KVxuXG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCByZXNvbHZlQnVpbGRlckNvbnRlbnQoYnVpbGRlck1vZGVsLCB7XG4gICAgY29sbGVjdGlvbkhhbmRsZTogcGFyYW1zPy5oYW5kbGUsXG4gICAgbG9jYWxlLFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBhZ2U6IHBhZ2UgfHwgbnVsbCxcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24gfHwgbnVsbCxcbiAgICAgIC4uLihhd2FpdCBnZXRMYXlvdXRQcm9wcygpKSxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyh7IGxvY2FsZXMgfTogR2V0U3RhdGljUGF0aHNDb250ZXh0KSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0QWxsQ29sbGVjdGlvblBhdGhzKGJ1aWxkZXJDb25maWcpXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLm1hcCgocGF0aCkgPT4gYC9jb2xsZWN0aW9uLyR7cGF0aH1gKSxcbiAgICBmYWxsYmFjazogJ2Jsb2NraW5nJyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIYW5kbGUoe1xuICBjb2xsZWN0aW9uLFxuICBwYWdlLFxufTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBpc0xpdmUgPSAhQnVpbGRlci5pc0VkaXRpbmcgJiYgIUJ1aWxkZXIuaXNQcmV2aWV3aW5nXG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lVUkoKVxuICBpZiAoIWNvbGxlY3Rpb24gJiYgaXNMaXZlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCI+PC9tZXRhPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxEZWZhdWx0RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiByb3V0ZXIuaXNGYWxsYmFjayAmJiBpc0xpdmUgPyAoXG4gICAgPGgxPkxvYWRpbmcuLi48L2gxPiAvLyBUT0RPIChCQykgQWRkIFNrZWxldG9uIFZpZXdzXG4gICkgOiAoXG4gICAgPEJ1aWxkZXJDb21wb25lbnRcbiAgICAgIGlzU3RhdGljXG4gICAgICBrZXk9e2NvbGxlY3Rpb24uaWR9XG4gICAgICBtb2RlbD17YnVpbGRlck1vZGVsfVxuICAgICAgZGF0YT17eyBjb2xsZWN0aW9uLCB0aGVtZSB9fVxuICAgICAgey4uLihwYWdlICYmIHsgY29udGVudDogcGFnZSB9KX1cbiAgICAvPlxuICApXG59XG5cbkhhbmRsZS5MYXlvdXQgPSBMYXlvdXRcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBidWlsZGVyLmlvL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBidWlsZGVyLmlvL3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBidWlsZGVyLmlvL3dpZGdldHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL2NvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRoZW1lLXVpL21hdGNoLW1lZGlhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0aGVtZS11aS9wcmVzZXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXJlLXJlYWN0LWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZy1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcGlmeS1idXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhlbWUtdWlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==