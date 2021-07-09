exports.ids = [1];
exports.modules = {

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



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ibG9ja3MvUHJvZHVjdEdyaWQvUHJvZHVjdEdyaWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9DYXJ0SXRlbS9DYXJ0SXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L0NhcnRJdGVtL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9DYXJ0U2lkZWJhclZpZXcvQ2FydFNpZGViYXJWaWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcnQvQ2FydFNpZGViYXJWaWV3L2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9GZWF0dXJlQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9IZWFkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vTm9TU1IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL09wdGlvblBpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vUHJvZHVjdENhcmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1Byb2R1Y3RDYXJkRGVtby50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vU2VhcmNoYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9VbnRpbEludGVyYWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9Vc2VyTmF2LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0Fycm93TGVmdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9CYWcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQ2hlY2sudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQ2hldnJvblVwLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0Nyb3NzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0RvdWJsZUNoZXZyb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvR2l0aHViLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0hlYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0luZm8udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvTWludXMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvTW9vbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9QbHVzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1JpZ2h0QXJyb3cudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvU3VuLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1RyYXNoLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1ZlcmNlbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0ltYWdlQ2Fyb3VzZWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTGluay9MaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0xpbmsvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9Mb2FkaW5nRG90cy9Mb2FkaW5nRG90cy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTG9hZGluZ0RvdHMvTG9hZGluZ0RvdHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvTG9hZGluZ0RvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvU2lkZWJhci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL2NvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvc2hvcGlmeS50cyIsIndlYnBhY2s6Ly8vLi9jb25maWcvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hvb2tzL3VzZUFjY2VwdENvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvQ29tbWVyY2VQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9Db250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2FwaS9vcGVyYXRpb25zLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZUFkZEl0ZW1Ub0NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VBZGRJdGVtc1RvQ2FydC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZUNhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VDYXJ0Q291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VDYXJ0SXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VDaGVja291dFVybC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZUNsaWVudFVuc2FmZS50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZUdldExpbmVJdGVtLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlUmVtb3ZlSXRlbUZyb21DYXJ0LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvaG9va3MvdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2hvb2tzL3VzZVNldENhcnRVbnNhZmUudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy9ob29rcy91c2VVcGRhdGVJdGVtUXVhbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy9Mb2NhbFN0b3JhZ2UvTG9jYWxTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvTG9jYWxTdG9yYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2xpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvTG9jYWxTdG9yYWdlL2tleXMudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy90eXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL3V0aWxzL3R5cGVzL2lzQ2FydC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0R3JpZCIsInByb2R1Y3RzIiwiaW5pdGlhbFByb2R1Y3RzIiwiY29sbGVjdGlvbiIsInByb2R1Y3RzTGlzdCIsIm9mZnNldCIsImxpbWl0IiwiY2FyZFByb3BzIiwiaGlnaGxpZ2h0Q2FyZCIsInNldFByb2R1Y3RzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImdldFByb2R1Y3RzIiwicHJvbWlzZXMiLCJtYXAiLCJlbnRyeSIsInByb2R1Y3QiLCJmaWx0ZXIiLCJoYW5kbGUiLCJnZXRQcm9kdWN0IiwiYnVpbGRlckNvbmZpZyIsIlByb21pc2UiLCJhbGwiLCJmZXRjaENvbGxlY3Rpb24iLCJyZXN1bHQiLCJnZXRDb2xsZWN0aW9uIiwiUHJvZHVjdENvbXBvbmVudCIsInByb2Nlc3MiLCJlbnYiLCJJU19ERU1PIiwiUHJvZHVjdENhcmREZW1vIiwiUHJvZHVjdENhcmQiLCJzbGljZSIsImkiLCJTdHJpbmciLCJpZCIsImluZGV4IiwiQ2FydEl0ZW0iLCJpdGVtIiwiY3VycmVuY3lDb2RlIiwidXBkYXRlSXRlbSIsInVzZVVwZGF0ZUl0ZW1RdWFudGl0eSIsInJlbW92ZUl0ZW0iLCJ1c2VSZW1vdmVJdGVtRnJvbUNhcnQiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwicmVtb3ZpbmciLCJzZXRSZW1vdmluZyIsInVwZGF0ZVF1YW50aXR5IiwidmFyaWFudCIsImhhbmRsZVF1YW50aXR5IiwiZSIsInZhbCIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIiwiaXNJbnRlZ2VyIiwiaGFuZGxlQmx1ciIsImluY3JlYXNlUXVhbnRpdHkiLCJuIiwiaGFuZGxlUmVtb3ZlIiwiZXJyb3IiLCJjb25zb2xlIiwid2lkdGgiLCJtIiwicGFkZGluZyIsImJvcmRlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpbWFnZSIsImFsdFRleHQiLCJzcmMiLCJMaW5rIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGl0bGUiLCJtYXJnaW5MZWZ0IiwiZ2V0UHJpY2UiLCJwcmljZVYyIiwiYW1vdW50IiwibXQiLCJtYiIsImxpc3RTdHlsZSIsImp1c3RpZnlJdGVtcyIsImhlaWdodCIsInRleHRBbGlnbiIsInNlbGVjdGVkT3B0aW9ucyIsIm9wdGlvbiIsIm5hbWUiLCJDYXJ0U2lkZWJhclZpZXciLCJjaGVja291dFVybCIsInVzZUNoZWNrb3V0VXJsIiwiY2FydCIsInVzZUNhcnQiLCJzdWJUb3RhbCIsInN1YnRvdGFsUHJpY2UiLCJ0b3RhbCIsIml0ZW1zIiwibGluZUl0ZW1zIiwiaXNFbXB0eSIsImxlbmd0aCIsImNhcnRVcHNlbGwiLCJzZXRDYXJ0VXBzZWxsIiwiZmV0Y2hDb250ZW50IiwiY2FydFVwc2VsbENvbnRlbnQiLCJidWlsZGVyIiwiZ2V0IiwiY2FjaGVidXN0IiwiaXNEZXYiLCJ1c2VyQXR0cmlidXRlcyIsIml0ZW1JbkNhcnQiLCJ0b1Byb21pc2UiLCJvdmVyZmxvdyIsInBhZGRpbmdCb3R0b20iLCJiZyIsImZsZXhEaXJlY3Rpb24iLCJweCIsImNvbG9yIiwibWluV2lkdGgiLCJwYWRkaW5nTGVmdCIsIm15IiwicCIsIkZlYXR1cmVCYXIiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImhpZGUiLCJkZWxheSIsImRlbGF5UGFzc2VkIiwic2V0RGVsYXlQYXNzZWQiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkhlYWQiLCJwcm9wcyIsInNlb0luZm8iLCJkeW5hbWljIiwic3NyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJwYWdlUHJvcHMiLCJidWlsZGVyVGhlbWUiLCJ0aGVtZSIsImlzTGl2ZSIsIkJ1aWxkZXIiLCJpc0VkaXRpbmciLCJpc1ByZXZpZXdpbmciLCJzaG9waWZ5Q29uZmlnIiwiY29udGVudCIsImRhdGEiLCJzaXRlU2V0dGluZ3MiLCJjb2xvck92ZXJyaWRlcyIsInNpdGVTZW9JbmZvIiwic2l0ZUluZm9ybWF0aW9uIiwic2VvQ29uZmlnIiwiSW5uZXJMYXlvdXQiLCJ0aGVtZU5hbWUiLCJ0aGVtZXNNYXAiLCJjb2xvcnMiLCJkaXNwbGF5U2lkZWJhciIsImNsb3NlU2lkZWJhciIsInVzZVVJIiwiYWNjZXB0ZWRDb29raWVzIiwib25BY2NlcHRDb29raWVzIiwidXNlQWNjZXB0Q29va2llcyIsIm1hcmdpbiIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwiZWRpdGluZ01vZGVsIiwicHJldmlld2luZ01vZGVsIiwiTmF2YmFyIiwiYW5ub3VuY2VtZW50Iiwic2V0QW5ub3VuY2VtZW50IiwidXNlVGhlbWVVSSIsIm5hdmlnYXRpb25MaW5rcyIsImxvZ28iLCJhbm91bmNlbWVudENvbnRlbnQiLCJweSIsInBvc2l0aW9uIiwiZmxleEJhc2lzIiwibGluayIsInRyYW5zZm9ybSIsImxlZnQiLCJsZXR0ZXJTcGFjaW5nIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0IiwiTm9TU1IiLCJza2VsZXRvbiIsInJlbmRlciIsInNldFJlbmRlciIsIk9wdGlvblBpY2tlciIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsInNlbGVjdGVkIiwiaW1nV2lkdGgiLCJpbWdIZWlnaHQiLCJpbWdQcmlvcml0eSIsImltZ0xvYWRpbmciLCJpbWdTaXplcyIsImltZ0xheW91dCIsInByb2R1Y3RWYXJpYW50IiwidmFyaWFudHMiLCJwcmljZSIsImZsZXhHcm93IiwiaW1hZ2VzIiwic2hvd0FsdGVybmF0ZSIsInNldFNob3dBbHRlcm5hdGUiLCJjYW5Ub2dnbGUiLCJzZXRDYW5Ub2dnbGUiLCJjb21wYXJlX2F0X3ByaWNlIiwiYWx0ZXJuYXRlSW1hZ2UiLCJTZWFyY2hiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxIiwicXVlcnkiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJhc1BhdGgiLCJzcGxpdCIsInN0eWxlIiwidG9wIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsInRlcm0iLCJvcCIsInBhdGhuYW1lIiwiQnV0dG9uIiwiU2VhcmNoTW9kYWxDb250ZW50Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaW5pdGlhbFNlYXJjaCIsInNlYXJjaFRlcm0iLCJyZXN1bHRzIiwic2VhcmNoUHJvZHVjdHMiLCJvblNlYXJjaCIsInRocm90dGxlU2VhcmNoIiwidXNlQ2FsbGJhY2siLCJ0aHJvdHRsZSIsIm1hcmdpbkJvdHRvbSIsImV2ZW50IiwiVW50aWxJbnRlcmFjdGlvbiIsIlVzZXJOYXYiLCJjbGFzc05hbWUiLCJ0b2dnbGVTaWRlYmFyIiwiQXJyb3dMZWZ0IiwiQmFnIiwiQ2hlY2siLCJDaGV2cm9uVXAiLCJDcm9zcyIsIkRvdWJsZUNoZXZyb24iLCJHaXRodWIiLCJIZWFydCIsIkluZm8iLCJNaW51cyIsIk1vb24iLCJQbHVzIiwiUmlnaHRBcnJvdyIsIlN1biIsIlRyYXNoIiwiVmVyY2VsIiwiTGF6eUNhcm91c2VsIiwiSW1hZ2VDYXJvdXNlbCIsIm9uVGh1bWJuYWlsQ2xpY2siLCJzaG93Wm9vbSIsImN1cnJlbnRTbGlkZSIsImltYWdlUHJvcHMiLCJocmVmIiwiTG9hZGluZ0RvdHMiLCJzIiwicm9vdCIsIlNpZGViYXIiLCJvcGVuIiwib25DbG9zZSIsInVzZVJlc3BvbnNpdmVWYWx1ZSIsInJpZ2h0IiwiZnJvbSIsImVudGVyIiwibGVhdmUiLCJpbml0aWFsU3RhdGUiLCJVSUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsIlVJUHJvdmlkZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwib3BlblNpZGViYXIiLCJwcmV2IiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJFcnJvciIsIk1hbmFnZWRVSUNvbnRleHQiLCJkb21haW4iLCJzdG9yZWZyb250QWNjZXNzVG9rZW4iLCJTSE9QSUZZX1NUT1JFRlJPTlRfQVBJX1RPS0VOIiwidGhlbWVzIiwiQ09PS0lFX05BTUUiLCJzZXRBY2NlcHRlZENvb2tpZXMiLCJDb29raWVzIiwiYWNjZXB0Q29va2llcyIsInNldCIsImV4cGlyZXMiLCJDb21tZXJjZVByb3ZpZGVyIiwiaW5pdGlhbENhcnQiLCJMb2NhbFN0b3JhZ2UiLCJnZXRJbml0aWFsQ2FydCIsInNldENhcnQiLCJpc0N1c3RvbURvbWFpbiIsImluY2x1ZGVzIiwiY2xpZW50IiwiU2hvcGlmeUJ1eSIsImJ1aWxkQ2xpZW50IiwiZ2V0TmV3Q2FydCIsIm5ld0NhcnQiLCJjaGVja291dCIsImNyZWF0ZSIsInJlZnJlc2hFeGlzdGluZ0NhcnQiLCJjYXJ0SWQiLCJyZWZyZXNoZWRDYXJ0IiwiZmV0Y2giLCJjYXJ0SGFzQmVlblB1cmNoYXNlZCIsIkJvb2xlYW4iLCJjb21wbGV0ZWRBdCIsIkxvY2FsU3RvcmFnZUtleXMiLCJDQVJUIiwiSlNPTiIsInN0cmluZ2lmeSIsIkNvbnRleHQiLCJnZXRBbGxQcm9kdWN0cyIsImNvbmZpZyIsInByb2R1Y3RzQ29udGVudCIsInByb2R1Y3RzTW9kZWwiLCJhcGlLZXkiLCJ0aGVuIiwicmVzIiwianNvbiIsInByIiwic2VhcmNoU3RyaW5nIiwicXMiLCJmaWVsZHMiLCJhbGxvd0RvdHMiLCIkcmVnZXgiLCIkb3B0aW9ucyIsImdldEFsbFByb2R1Y3RQYXRocyIsIiRlcSIsIndpdGhDb250ZW50IiwiZ2V0QWxsQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9uc0NvbnRlbnQiLCJjb2xsZWN0aW9uc01vZGVsIiwic2VhcmNoQ29sbGVjdGlvbnMiLCJnZXRBbGxDb2xsZWN0aW9uUGF0aHMiLCJjb2xsZWN0aW9ucyIsImlzRGVtbyIsInByb2R1Y3RzUXVlcnkiLCJuZXh0UGFnZUN1cnNvciIsImhhc05leHRQYWdlIiwiZ2V0Q29sbGVjdGlvblByb2R1Y3RzIiwidXNlQWRkSXRlbVRvQ2FydCIsImFkZEl0ZW1zVG9DYXJ0IiwidXNlQWRkSXRlbXNUb0NhcnQiLCJhZGRJdGVtVG9DYXJ0IiwidmFyaWFudElkIiwiY3VzdG9tQXR0cmlidXRlcyIsImZvckVhY2giLCJhZGRMaW5lSXRlbXMiLCJ1c2VDYXJ0Q291bnQiLCJjb3VudCIsInJlZHVjZSIsInRvdGFsQ291bnQiLCJsaW5lSXRlbSIsInVzZUNhcnRJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsIndlYlVybCIsInVzZUNsaWVudFVuc2FmZSIsIndhcm4iLCJ1c2VHZXRMaW5lSXRlbSIsImNhcnRJdGVtcyIsImdldExpbmVJdGVtIiwiZmluZCIsImNhcnRJdGVtIiwicmVtb3ZlSXRlbXNGcm9tQ2FydCIsInVzZVJlbW92ZUl0ZW1zRnJvbUNhcnQiLCJyZW1vdmVJdGVtRnJvbUNhcnQiLCJ2YXJpYW50SWRzIiwibGluZUl0ZW1JZHMiLCJyZW1vdmVMaW5lSXRlbXMiLCJ1c2VTZXRDYXJ0VW5zYWZlIiwidXBkYXRlSXRlbVF1YW50aXR5IiwidXBkYXRlTGluZUl0ZW1zIiwia2V5IiwiaXNCcm93c2VyIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJleGlzdGluZ0NhcnRTdHJpbmciLCJleGlzdGluZ0NhcnQiLCJwYXJzZSIsImlzQ2FydCIsIkNIRUNLT1VUX0lEIiwicHJlcGFyZVZhcmlhbnRzV2l0aE9wdGlvbnMiLCJvcHRpb25zRGljdGlvbmFyeSIsInRvTG93ZXJDYXNlIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsInByZXBhcmVWYXJpYW50c0ltYWdlcyIsIm9wdGlvbktleSIsImltYWdlRGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJwb3RlbnRpYWxDYXJ0IiwidHlwZSIsImtpbmQiLCJnbG9iYWwiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwicGF0aCIsImRvbWFpbnMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIndpZHRocyIsInciLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwibG9hZCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwicmVzdCIsInVuc2l6ZWQiLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsImJveFNpemluZyIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsImxvY2FsZURvbWFpbiIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwiZG9jdW1lbnQiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwiY2FuY2VsbGVkIiwiciIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSG9zdG5hbWUiLCJkb21haW5JdGVtIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwicmVxdWlyZSIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwiZGV0ZWN0ZWREb21haW4iLCJhZGRQYXRoUHJlZml4IiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJmaWx0ZXJlZFF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsInBhcnNlZEFzIiwiZGVsQmFzZVBhdGgiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhZGRMb2NhbGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwicXVlcnlzdHJpbmciLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQWVPLE1BQU1BLFdBQWlDLEdBQUcsQ0FBQztBQUNoREMsVUFBUSxFQUFFQyxlQURzQztBQUVoREMsWUFGZ0Q7QUFHaERDLGNBSGdEO0FBSWhEQyxRQUFNLEdBQUcsQ0FKdUM7QUFLaERDLE9BQUssR0FBRyxFQUx3QztBQU1oREMsV0FOZ0Q7QUFPaERDO0FBUGdELENBQUQsS0FRM0M7QUFDSixRQUFNO0FBQUEsT0FBQ1AsUUFBRDtBQUFBLE9BQVdRO0FBQVgsTUFBMEJDLHNEQUFRLENBQUNSLGVBQWUsSUFBSSxFQUFwQixDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDUyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUFHLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFdBQVcsR0FBRyxZQUFZO0FB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LFdBQVcsQ0FBbEIsWUFISzs7Ozs7Ozs7Ozs7OztBQzNZTSx3QkFBd0IsMENBQTBDLGdEQUFnRCxnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7QUNEQSxpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBcUI7Ozs7Ozs7Ozs7OztBQ0E5QyxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0IiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExvYWRpbmdEb3RzIH0gZnJvbSAnQGNvbXBvbmVudHMvdWknXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQHRoZW1lLXVpL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBQcm9kdWN0Q2FyZFByb3BzIH0gZnJvbSAnQGNvbXBvbmVudHMvY29tbW9uL1Byb2R1Y3RDYXJkJ1xuaW1wb3J0IHsgUHJvZHVjdENhcmREZW1vLCBQcm9kdWN0Q2FyZCB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbidcblxuaW1wb3J0IHtcbiAgZ2V0Q29sbGVjdGlvbixcbiAgZ2V0UHJvZHVjdCxcbn0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvYXBpL29wZXJhdGlvbnMtYnVpbGRlcidcbmltcG9ydCBidWlsZGVyQ29uZmlnIGZyb20gJ0Bjb25maWcvYnVpbGRlcidcbmludGVyZmFjZSBIaWdobGlnaHRlZENhcmRQcm9wcyBleHRlbmRzIE9taXQ8UHJvZHVjdENhcmRQcm9wcywgJ3Byb2R1Y3QnPiB7XG4gIGluZGV4OiBudW1iZXJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0R3JpZFByb3BzIHtcbiAgcHJvZHVjdHM/OiBTaG9waWZ5QnV5LlByb2R1Y3RbXVxuICBwcm9kdWN0c0xpc3Q/OiBBcnJheTx7IHByb2R1Y3Q6IHN0cmluZyB9PlxuICBjb2xsZWN0aW9uPzogc3RyaW5nIHwgYW55IC8vIFNob3BpZnlCdXkuQ29sbGVjdGlvblxuICBvZmZzZXQ6IG51bWJlclxuICBsaW1pdDogbnVtYmVyXG4gIGNhcmRQcm9wczogT21pdDxQcm9kdWN0Q2FyZFByb3BzLCAncHJvZHVjdCc+XG4gIGhpZ2hsaWdodENhcmQ/OiBIaWdobGlnaHRlZENhcmRQcm9wc1xufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjdEdyaWQ6IEZDPFByb2R1Y3RHcmlkUHJvcHM+ID0gKHtcbiAgcHJvZHVjdHM6IGluaXRpYWxQcm9kdWN0cyxcbiAgY29sbGVjdGlvbixcbiAgcHJvZHVjdHNMaXN0LFxuICBvZmZzZXQgPSAwLFxuICBsaW1pdCA9IDEwLFxuICBjYXJkUHJvcHMsXG4gIGhpZ2hsaWdodENhcmQsXG59KSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoaW5pdGlhbFByb2R1Y3RzIHx8IFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgY29uc3QgcHJvbWlzZXMgPSBwcm9kdWN0c0xpc3QhXG4gICAgICAgIC5tYXAoKGVudHJ5KSA9PiBlbnRyeS5wcm9kdWN0KVxuICAgICAgICAuZmlsdGVyKChoYW5kbGU6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gdHlwZW9mIGhhbmRsZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgYXN5bmMgKGhhbmRsZTogc3RyaW5nKSA9PiBhd2FpdCBnZXRQcm9kdWN0KGJ1aWxkZXJDb25maWcsIHsgaGFuZGxlIH0pXG4gICAgICAgIClcbiAgICAgIHNldFByb2R1Y3RzKGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKSlcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfVxuICAgIGlmIChwcm9kdWN0c0xpc3QgJiYgIWluaXRpYWxQcm9kdWN0cykge1xuICAgICAgZ2V0UHJvZHVjdHMoKVxuICAgIH1cbiAgfSwgW3Byb2R1Y3RzTGlzdCwgaW5pdGlhbFByb2R1Y3RzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ29sbGVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENvbGxlY3Rpb24oYnVpbGRlckNvbmZpZywge1xuICAgICAgICBoYW5kbGU6IGNvbGxlY3Rpb24sXG4gICAgICB9KVxuICAgICAgc2V0UHJvZHVjdHMocmVzdWx0LnByb2R1Y3RzKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb2xsZWN0aW9uID09PSAnc3RyaW5nJyAmJiAhaW5pdGlhbFByb2R1Y3RzKSB7XG4gICAgICBmZXRjaENvbGxlY3Rpb24oKVxuICAgIH1cbiAgfSwgW2NvbGxlY3Rpb25dKVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nRG90cyAvPlxuICB9XG4gIGNvbnN0IFByb2R1Y3RDb21wb25lbnQ6IGFueSA9IHByb2Nlc3MuZW52LklTX0RFTU9cbiAgICA/IFByb2R1Y3RDYXJkRGVtb1xuICAgIDogUHJvZHVjdENhcmRcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGdhcD17Mn0gd2lkdGg9e1snMTAwJScsICc0MCUnLCAnMjQlJ119PlxuICAgICAge3Byb2R1Y3RzLnNsaWNlKG9mZnNldCwgbGltaXQpLm1hcCgocHJvZHVjdCwgaSkgPT4gKFxuICAgICAgICA8UHJvZHVjdENvbXBvbmVudFxuICAgICAgICAgIGtleT17U3RyaW5nKHByb2R1Y3QuaWQpICsgaX1cbiAgICAgICAgICB7Li4uKGhpZ2hsaWdodENhcmQ/LmluZGV4ID09PSBpID8gaGlnaGxpZ2h0Q2FyZCA6IGNhcmRQcm9wcyl9XG4gICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgKVxufVxuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgVGhlbWVkLCBqc3gsIEdyaWQsIEJ1dHRvbiwgSW5wdXQsIFRleHQsIEljb25CdXR0b24gfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBQbHVzLCBNaW51cyB9IGZyb20gJ0Bjb21wb25lbnRzL2ljb25zJ1xuaW1wb3J0IHsgZ2V0UHJpY2UgfSBmcm9tICdAbGliL3Nob3BpZnkvc3RvcmVmcm9udC1kYXRhLWhvb2tzL3NyYy91dGlscy9wcm9kdWN0J1xuaW1wb3J0IHtcbiAgdXNlVXBkYXRlSXRlbVF1YW50aXR5LFxuICB1c2VSZW1vdmVJdGVtRnJvbUNhcnQsXG59IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3MnXG5cbmNvbnN0IENhcnRJdGVtID0gKHtcbiAgaXRlbSxcbiAgY3VycmVuY3lDb2RlLFxufToge1xuICBpdGVtOiAvKlNob3BpZnlCdXkuTGluZUl0ZW0gdG9kbzogY2hlY2sgaWYgdXBkYXRlZCB0eXBlcyovIGFueVxuICBjdXJyZW5jeUNvZGU6IHN0cmluZ1xufSkgPT4ge1xuICBjb25zdCB1cGRhdGVJdGVtID0gdXNlVXBkYXRlSXRlbVF1YW50aXR5KClcbiAgY29uc3QgcmVtb3ZlSXRlbSA9IHVzZVJlbW92ZUl0ZW1Gcm9tQ2FydCgpXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoaXRlbS5xdWFudGl0eSlcbiAgY29uc3QgW3JlbW92aW5nLCBzZXRSZW1vdmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdXBkYXRlUXVhbnRpdHkgPSBhc3luYyAocXVhbnRpdHk6IG51bWJlcikgPT4ge1xuICAgIGF3YWl0IHVwZGF0ZUl0ZW0oaXRlbS52YXJpYW50LmlkLCBxdWFudGl0eSlcbiAgfVxuICBjb25zdCBoYW5kbGVRdWFudGl0eSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbCA9IE51bWJlcihlLnRhcmdldC52YWx1ZSlcblxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbCkgJiYgdmFsID49IDApIHtcbiAgICAgIHNldFF1YW50aXR5KHZhbClcbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCB2YWwgPSBOdW1iZXIocXVhbnRpdHkpXG5cbiAgICBpZiAodmFsICE9PSBpdGVtLnF1YW50aXR5KSB7XG4gICAgICB1cGRhdGVRdWFudGl0eSh2YWwpXG4gICAgfVxuICB9XG4gIGNvbnN0IGluY3JlYXNlUXVhbnRpdHkgPSAobiA9IDEpID0+IHtcbiAgICBjb25zdCB2YWwgPSBOdW1iZXIocXVhbnRpdHkpICsgblxuXG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIodmFsKSAmJiB2YWwgPj0gMCkge1xuICAgICAgc2V0UXVhbnRpdHkodmFsKVxuICAgICAgdXBkYXRlUXVhbnRpdHkodmFsKVxuICAgIH1cbiAgfVxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0UmVtb3ZpbmcodHJ1ZSlcblxuICAgIHRyeSB7XG4gICAgICAvLyBJZiB0aGlzIGFjdGlvbiBzdWNjZWVkcyB0aGVuIHRoZXJlJ3Mgbm8gbmVlZCB0byBkbyBgc2V0UmVtb3ZpbmcodHJ1ZSlgXG4gICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHZpZXdcbiAgICAgIGF3YWl0IHJlbW92ZUl0ZW0oaXRlbS52YXJpYW50LmlkKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgc2V0UmVtb3ZpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZXNldCB0aGUgcXVhbnRpdHkgc3RhdGUgaWYgdGhlIGl0ZW0gcXVhbnRpdHkgY2hhbmdlc1xuICAgIGlmIChpdGVtLnF1YW50aXR5ICE9PSBOdW1iZXIocXVhbnRpdHkpKSB7XG4gICAgICBzZXRRdWFudGl0eShpdGVtLnF1YW50aXR5KVxuICAgIH1cbiAgfSwgW2l0ZW0ucXVhbnRpdHldKVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgZ2FwPXsyfSBzeD17eyB3aWR0aDogJzEwMCUnLCBtOiAxMiB9fSBjb2x1bW5zPXtbMl19PlxuICAgICAgPGRpdlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHBhZGRpbmc6IDEsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGhlaWdodD17MTMwfVxuICAgICAgICAgIHdpZHRoPXsxMzB9XG4gICAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgICAgICBhbHQ9e2l0ZW0udmFyaWFudC5pbWFnZS5hbHRUZXh0fVxuICAgICAgICAgIHNyYz17aXRlbS52YXJpYW50LmltYWdlLnNyY31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFRoZW1lZC5kaXZcbiAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICBocmVmPXtgL3Byb2R1Y3QvJHtpdGVtLnZhcmlhbnQucHJvZHVjdC5oYW5kbGV9L2B9XG4gICAgICAgICAgc3g9e3sgZm9udFNpemU6IDMsIG06IDAsIGZvbnRXZWlnaHQ6IDcwMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogNCxcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZXRQcmljZShcbiAgICAgICAgICAgICAgICBpdGVtLnZhcmlhbnQucHJpY2VWMi5hbW91bnQsXG4gICAgICAgICAgICAgICAgaXRlbS52YXJpYW50LnByaWNlVjIuY3VycmVuY3lDb2RlIHx8ICdVU0QnXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICAgICAgPFRoZW1lZC51bCBzeD17eyBtdDogMiwgbWI6IDAsIHBhZGRpbmc6IDAsIGxpc3RTdHlsZTogJ25vbmUnIH19PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxkaXYgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5SXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpbmNyZWFzZVF1YW50aXR5KC0xKX0+XG4gICAgICAgICAgICAgICAgPE1pbnVzIHdpZHRoPXsxOH0gaGVpZ2h0PXsxOH0gLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbWF4PXs5OX1cbiAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVRdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBpbmNyZWFzZVF1YW50aXR5KDEpfT5cbiAgICAgICAgICAgICAgICA8UGx1cyB3aWR0aD17MTh9IGhlaWdodD17MTh9IC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAge2l0ZW0udmFyaWFudC5zZWxlY3RlZE9wdGlvbnMubWFwKChvcHRpb246IGFueSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17b3B0aW9uLnZhbHVlfT5cbiAgICAgICAgICAgICAge29wdGlvbi5uYW1lfTp7b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UaGVtZWQudWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L0dyaWQ+XG4gIClcbn1cblxuLyoqXG4gKiAgICAgICAgIFxuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgQ2FydEl0ZW1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcnRJdGVtJ1xuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVkLCBqc3gsIFRleHQsIENhcmQsIEdyaWQsIERpdmlkZXIsIE5hdkxpbmsgfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCYWcgfSBmcm9tICdAY29tcG9uZW50cy9pY29ucydcbmltcG9ydCB7IHVzZUNhcnQsIHVzZUNoZWNrb3V0VXJsIH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcydcbmltcG9ydCBDYXJ0SXRlbSBmcm9tICcuLi9DYXJ0SXRlbSdcbmltcG9ydCB7IEJ1aWxkZXJDb21wb25lbnQsIGJ1aWxkZXIgfSBmcm9tICdAYnVpbGRlci5pby9yZWFjdCdcbmltcG9ydCBlbnYgZnJvbSAnQGNvbmZpZy9lbnYnXG5cbmNvbnN0IENhcnRTaWRlYmFyVmlldzogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGNoZWNrb3V0VXJsID0gdXNlQ2hlY2tvdXRVcmwoKVxuICBjb25zdCBjYXJ0ID0gdXNlQ2FydCgpXG4gIGNvbnN0IHN1YlRvdGFsID0gY2FydD8uc3VidG90YWxQcmljZVxuICBjb25zdCB0b3RhbCA9ICcgLSAnXG5cbiAgY29uc3QgaXRlbXMgPSBjYXJ0Py5saW5lSXRlbXMgPz8gW11cbiAgY29uc3QgaXNFbXB0eSA9IGl0ZW1zLmxlbmd0aCA9PT0gMFxuICBjb25zdCBbY2FydFVwc2VsbCwgc2V0Q2FydFVwc2VsbF0gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRlbnQoKSB7XG4gICAgICBjb25zdCBpdGVtcyA9IGNhcnQ/LmxpbmVJdGVtcyB8fCBbXVxuICAgICAgY29uc3QgY2FydFVwc2VsbENvbnRlbnQgPSBhd2FpdCBidWlsZGVyXG4gICAgICAgIC5nZXQoJ2NhcnQtdXBzZWxsLXNpZGViYXInLCB7XG4gICAgICAgICAgY2FjaGVidXN0OiBlbnYuaXNEZXYsXG4gICAgICAgICAgdXNlckF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIGl0ZW1JbkNhcnQ6IGl0ZW1zLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLnZhcmlhbnQucHJvZHVjdC5oYW5kbGUpLFxuICAgICAgICAgIH0gYXMgYW55LFxuICAgICAgICB9KVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgIHNldENhcnRVcHNlbGwoY2FydFVwc2VsbENvbnRlbnQpXG4gICAgfVxuICAgIGZldGNoQ29udGVudCgpXG4gIH0sIFtjYXJ0Py5saW5lSXRlbXNdKVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lZC5kaXZcbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiA1LFxuICAgICAgICBiZzogJ3RleHQnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgcHg6IDIsXG4gICAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXG4gICAgICAgIC4uLihpc0VtcHR5ICYmIHsganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH0pLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNFbXB0eSA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8QmFnIC8+XG4gICAgICAgICAgWW91ciBjYXJ0IGlzIGVtcHR5XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBCaXNjdWl0IG9hdCBjYWtlIHdhZmVyIGljaW5nIGljZSBjcmVhbSB0aXJhbWlzdSBwdWRkaW5nIGN1cGNha2UuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbTogYW55KSA9PiAoXG4gICAgICAgICAgICA8Q2FydEl0ZW1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAvLyB0b2RvIHVwZGF0ZSB0eXBlc1xuICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU9e2l0ZW0udmFyaWFudD8ucHJpY2VWMj8uY3VycmVuY3lDb2RlIHx8ICdVU0QnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8Q2FyZCBzeD17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIG1pbldpZHRoOiAnMTByZW0nLCBwYWRkaW5nTGVmdDogNSB9fT5cbiAgICAgICAgICAgIDxHcmlkIGdhcD17MX0gY29sdW1ucz17Mn0gc3g9e3sgbXk6IDMgfX0+XG4gICAgICAgICAgICAgIDxUZXh0PlN1YnRvdGFsOjwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgc3g9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PntzdWJUb3RhbH08L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0PlNoaXBwaW5nOjwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgc3g9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PiAtIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQ+VGF4OiA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHN4PXt7IG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT4gLSA8L1RleHQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICA8R3JpZCBnYXA9ezF9IGNvbHVtbnM9ezJ9PlxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9sZFwiPkVzdGltYXRlZCBUb3RhbDo8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJib2xkXCIgc3g9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgIHt0b3RhbH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8QnVpbGRlckNvbXBvbmVudCBjb250ZW50PXtjYXJ0VXBzZWxsfSBtb2RlbD1cImNhcnQtdXBzZWxsLXNpZGViYXJcIiAvPlxuICAgICAgICAgIHtjaGVja291dFVybCAmJiAoXG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICB2YXJpYW50PVwibmF2XCJcbiAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgbTogMiwgcDogMTIsIHRleHRBbGlnbjogJ2NlbnRlcicgfX1cbiAgICAgICAgICAgICAgaHJlZj17Y2hlY2tvdXRVcmwhfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcm9jZWVkIHRvIENoZWNrb3V0XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvVGhlbWVkLmRpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0U2lkZWJhclZpZXdcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcnRTaWRlYmFyVmlldydcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FydFNpZGViYXJWaWV3IH0gZnJvbSAnLi9DYXJ0U2lkZWJhclZpZXcnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcnRJdGVtIH0gZnJvbSAnLi9DYXJ0SXRlbSdcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUaGVtZWQsIGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgQ2VudGVyTW9kYWwsIE1vZGFsVGl0bGUsIE1vZGFsQ2xvc2VUYXJnZXQgfSBmcm9tICdyZWFjdC1zcHJpbmctbW9kYWwnXG5cbmludGVyZmFjZSBGZWF0dXJlQmFyUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBoaWRlPzogYm9vbGVhblxuICBhY3Rpb24/OiBSZWFjdC5SZWFjdE5vZGVcbiAgZGVsYXk/OiBudW1iZXJcbn1cblxuY29uc3QgRmVhdHVyZUJhcjogUmVhY3QuRkM8RmVhdHVyZUJhclByb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYWN0aW9uLFxuICBoaWRlLFxuICBkZWxheSxcbn0pID0+IHtcbiAgY29uc3QgW2RlbGF5UGFzc2VkLCBzZXREZWxheVBhc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBzZXREZWxheVBhc3NlZCh0cnVlKSwgZGVsYXkgfHwgNjAwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPENlbnRlck1vZGFsIGlzT3Blbj17ZGVsYXlQYXNzZWQgJiYgIWhpZGV9PlxuICAgICAgPE1vZGFsVGl0bGU+e3RpdGxlfTwvTW9kYWxUaXRsZT5cbiAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDxUaGVtZWQuZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBwOiBbMSwgMl0gfX0+XG4gICAgICAgIHthY3Rpb24gJiYgYWN0aW9ufVxuICAgICAgPC9UaGVtZWQuZGl2PlxuICAgIDwvQ2VudGVyTW9kYWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZUJhclxuIiwiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOZXh0SGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXG5cbmNvbnN0IEhlYWQ6IEZDPHsgc2VvSW5mbzogYW55IH0+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEZWZhdWx0U2VvIHsuLi5wcm9wcy5zZW9JbmZvfSAvPlxuICAgICAgPE5leHRIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIGtleT1cInNpdGUtbWFuaWZlc3RcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92MS9pbWFnZS9hc3NldHMlMkZZSklHYjRpMDFqdncwU1JkTDVCdCUyRjJkODZhNWJiMzBmNDRkMmRiMzU2NGFhMjk2MmJiMDkzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTmV4dEhlYWQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZFxuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBNYW5hZ2VkVUlDb250ZXh0LCB1c2VVSSB9IGZyb20gJ0Bjb21wb25lbnRzL3VpL2NvbnRleHQnXG5pbXBvcnQgeyBIZWFkLCBOYXZiYXIgfSBmcm9tICdAY29tcG9uZW50cy9jb21tb24nXG5pbXBvcnQgeyB1c2VBY2NlcHRDb29raWVzIH0gZnJvbSAnQGxpYi9ob29rcy91c2VBY2NlcHRDb29raWVzJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAnQGNvbXBvbmVudHMvdWknXG5pbXBvcnQgeyBDYXJ0U2lkZWJhclZpZXcgfSBmcm9tICdAY29tcG9uZW50cy9jYXJ0J1xuaW1wb3J0IHsgQ29tbWVyY2VQcm92aWRlciB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3MnXG5pbXBvcnQgc2hvcGlmeUNvbmZpZyBmcm9tICdAY29uZmlnL3Nob3BpZnknXG5pbXBvcnQgeyBidWlsZGVyLCBCdWlsZGVyQ29udGVudCwgQnVpbGRlciB9IGZyb20gJ0BidWlsZGVyLmlvL3JlYWN0J1xuaW1wb3J0IHRoZW1lc01hcCBmcm9tICdAY29uZmlnL3RoZW1lJ1xuaW1wb3J0ICdAYnVpbGRlci5pby93aWRnZXRzJ1xuaW1wb3J0ICdyZWFjdC1zcHJpbmctbW9kYWwvc3R5bGVzLmNzcydcbmltcG9ydCBzZW9Db25maWcgZnJvbSAnQGNvbmZpZy9zZW8uanNvbidcbmltcG9ydCBOb1NTUiBmcm9tICcuL05vU1NSJ1xuXG5jb25zdCBGZWF0dXJlQmFyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ0Bjb21wb25lbnRzL2NvbW1vbi9GZWF0dXJlQmFyJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pXG5cbmNvbnN0IExheW91dDogUmVhY3QuRkM8eyBwYWdlUHJvcHM6IGFueSB9PiA9ICh7IGNoaWxkcmVuLCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBidWlsZGVyVGhlbWUgPSBwYWdlUHJvcHMudGhlbWVcbiAgY29uc3QgaXNMaXZlID0gIUJ1aWxkZXIuaXNFZGl0aW5nICYmICFCdWlsZGVyLmlzUHJldmlld2luZ1xuICByZXR1cm4gKFxuICAgIDxDb21tZXJjZVByb3ZpZGVyIHsuLi5zaG9waWZ5Q29uZmlnfT5cbiAgICAgIDxCdWlsZGVyQ29udGVudFxuICAgICAgICBpc1N0YXRpY1xuICAgICAgICB7Li4uKGlzTGl2ZSAmJiB7IGNvbnRlbnQ6IGJ1aWxkZXJUaGVtZSB9KX1cbiAgICAgICAgbW9kZWxOYW1lPVwidGhlbWVcIlxuICAgICAgPlxuICAgICAgICB7KGRhdGEsIGxvYWRpbmcpID0+IHtcbiAgICAgICAgICBpZiAobG9hZGluZyAmJiAhYnVpbGRlclRoZW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2xvYWRpbmcgLi4uJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzaXRlU2V0dGluZ3MgPSBkYXRhPy5zaXRlU2V0dGluZ3NcbiAgICAgICAgICBjb25zdCBjb2xvck92ZXJyaWRlcyA9IGRhdGE/LmNvbG9yT3ZlcnJpZGVzXG4gICAgICAgICAgY29uc3Qgc2l0ZVNlb0luZm8gPSBkYXRhPy5zaXRlSW5mb3JtYXRpb25cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1hbmFnZWRVSUNvbnRleHQga2V5PXtkYXRhPy5pZH0gc2l0ZVNldHRpbmdzPXtzaXRlU2V0dGluZ3N9PlxuICAgICAgICAgICAgICA8SGVhZCBzZW9JbmZvPXtzaXRlU2VvSW5mbyB8fCBzZW9Db25maWd9IC8+XG4gICAgICAgICAgICAgIDxJbm5lckxheW91dFxuICAgICAgICAgICAgICAgIHRoZW1lTmFtZT17ZGF0YT8udGhlbWUgfHwgJ2Jhc2UnfVxuICAgICAgICAgICAgICAgIGNvbG9yT3ZlcnJpZGVzPXtjb2xvck92ZXJyaWRlc31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Jbm5lckxheW91dD5cbiAgICAgICAgICAgIDwvTWFuYWdlZFVJQ29udGV4dD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L0J1aWxkZXJDb250ZW50PlxuICAgIDwvQ29tbWVyY2VQcm92aWRlcj5cbiAgKVxufVxuXG5jb25zdCBJbm5lckxheW91dDogUmVhY3QuRkM8e1xuICB0aGVtZU5hbWU6IHN0cmluZ1xuICBjb2xvck92ZXJyaWRlcz86IHtcbiAgICB0ZXh0Pzogc3RyaW5nXG4gICAgYmFja2dyb3VuZD86IHN0cmluZ1xuICAgIHByaW1hcnk/OiBzdHJpbmdcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmdcbiAgICBtdXRlZD86IHN0cmluZ1xuICB9XG59PiA9ICh7IHRoZW1lTmFtZSwgY2hpbGRyZW4sIGNvbG9yT3ZlcnJpZGVzIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB7XG4gICAgLi4udGhlbWVzTWFwW3RoZW1lTmFtZV0sXG4gICAgY29sb3JzOiB7XG4gICAgICAuLi50aGVtZXNNYXBbdGhlbWVOYW1lXS5jb2xvcnMsXG4gICAgICAuLi5jb2xvck92ZXJyaWRlcyxcbiAgICB9LFxuICB9XG4gIGNvbnN0IHsgZGlzcGxheVNpZGViYXIsIGNsb3NlU2lkZWJhciB9ID0gdXNlVUkoKVxuICBjb25zdCB7IGFjY2VwdGVkQ29va2llcywgb25BY2NlcHRDb29raWVzIH0gPSB1c2VBY2NlcHRDb29raWVzKClcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGRpdlxuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbjogYDAgYXV0b2AsXG4gICAgICAgICAgcHg6IDIwLFxuICAgICAgICAgIG1heFdpZHRoOiAxOTIwLFxuICAgICAgICAgIG1pbldpZHRoOiAnNjB2dycsXG4gICAgICAgICAgbWluSGVpZ2h0OiA4MDAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFNpZGViYXJcbiAgICAgICAgb3Blbj17XG4gICAgICAgICAgZGlzcGxheVNpZGViYXIgfHxcbiAgICAgICAgICAoYnVpbGRlci5lZGl0aW5nTW9kZWwgfHwgQnVpbGRlci5wcmV2aWV3aW5nTW9kZWwpID09PVxuICAgICAgICAgICAgJ2NhcnQtdXBzZWxsLXNpZGViYXInXG4gICAgICAgIH1cbiAgICAgICAgb25DbG9zZT17Y2xvc2VTaWRlYmFyfVxuICAgICAgPlxuICAgICAgICA8Q2FydFNpZGViYXJWaWV3IC8+XG4gICAgICA8L1NpZGViYXI+XG4gICAgICA8Tm9TU1I+XG4gICAgICAgIDxGZWF0dXJlQmFyXG4gICAgICAgICAgdGl0bGU9XCJUaGlzIHNpdGUgdXNlcyBjb29raWVzIHRvIGltcHJvdmUgeW91ciBleHBlcmllbmNlLiBCeSBjbGlja2luZywgeW91IGFncmVlIHRvIG91ciBQcml2YWN5IFBvbGljeS5cIlxuICAgICAgICAgIGhpZGU9e0J1aWxkZXIuaXNFZGl0aW5nID8gdHJ1ZSA6IGFjY2VwdGVkQ29va2llc31cbiAgICAgICAgICBhY3Rpb249e1xuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkFjY2VwdENvb2tpZXMoKX0+QWNjZXB0IGNvb2tpZXM8L0J1dHRvbj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L05vU1NSPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgVXNlck5hdiB9IGZyb20gJ0Bjb21wb25lbnRzL2NvbW1vbidcbmltcG9ydCBlbnYgZnJvbSAnQGNvbmZpZy9lbnYnXG5pbXBvcnQgeyBCdWlsZGVyQ29tcG9uZW50LCBidWlsZGVyIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcmVhY3QnXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcydcbmltcG9ydCB7IGpzeCwgVGhlbWVkLCB1c2VUaGVtZVVJIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyB1c2VVSSB9IGZyb20gJ0Bjb21wb25lbnRzL3VpL2NvbnRleHQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSAnLi9TZWFyY2hiYXInXG5cbmNvbnN0IE5hdmJhcjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFthbm5vdW5jZW1lbnQsIHNldEFubm91bmNlbWVudF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lVUkoKVxuICBjb25zdCB7IG5hdmlnYXRpb25MaW5rcywgbG9nbyB9ID0gdXNlVUkoKVxuICBjb25zdCBjYXJ0ID0gdXNlQ2FydCgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRlbnQoKSB7XG4gICAgICBjb25zdCBpdGVtcyA9IGNhcnQ/LmxpbmVJdGVtcyB8fCBbXVxuICAgICAgY29uc3QgYW5vdW5jZW1lbnRDb250ZW50ID0gYXdhaXQgYnVpbGRlclxuICAgICAgICAuZ2V0KCdhbm5vdW5jZW1lbnQtYmFyJywge1xuICAgICAgICAgIGNhY2hlYnVzdDogZW52LmlzRGV2LFxuICAgICAgICAgIHVzZXJBdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBpdGVtSW5DYXJ0OiBpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS52YXJpYW50LnByb2R1Y3QuaGFuZGxlKSxcbiAgICAgICAgICB9IGFzIGFueSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICBzZXRBbm5vdW5jZW1lbnQoYW5vdW5jZW1lbnRDb250ZW50KVxuICAgIH1cbiAgICBmZXRjaENvbnRlbnQoKVxuICB9LCBbY2FydD8ubGluZUl0ZW1zXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxCdWlsZGVyQ29tcG9uZW50XG4gICAgICAgIGNvbnRlbnQ9e2Fubm91bmNlbWVudH1cbiAgICAgICAgZGF0YT17eyB0aGVtZSB9fVxuICAgICAgICBtb2RlbD1cImFubm91bmNlbWVudC1iYXJcIlxuICAgICAgLz5cbiAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgIGFzPVwiaGVhZGVyXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXJnaW46IGAwIGF1dG9gLFxuICAgICAgICAgIG1heFdpZHRoOiAxOTIwLFxuICAgICAgICAgIHB5OiAyLFxuICAgICAgICAgIHB4OiAyLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGhlbWVkLmRpdlxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBbJ25vbmUnLCAnbm9uZScsICdmbGV4J10sXG4gICAgICAgICAgICBmbGV4QmFzaXM6IDAsXG4gICAgICAgICAgICBtaW5XaWR0aDogMjQwLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bmF2aWdhdGlvbkxpbmtzPy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8VGhlbWVkLmFcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgc3g9e3sgcGFkZGluZzogMTAsIG1pbldpZHRoOiA5MCB9fVxuICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgaHJlZj17bGluay5saW5rfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgIDwvVGhlbWVkLmE+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICAgICAgPFRoZW1lZC5kaXZcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGhlbWVkLmgxXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xvZ28gJiYgbG9nby5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgIDxUaGVtZWQuYVxuICAgICAgICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogLTEsXG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogYG5vbmVgLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICc1cHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtsb2dvLndpZHRofVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtsb2dvLmhlaWdodH1cbiAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5pbWFnZX1cbiAgICAgICAgICAgICAgICA+PC9JbWFnZT5cbiAgICAgICAgICAgICAgPC9UaGVtZWQuYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7bG9nbyAmJiBsb2dvLnRleHQgJiYgIWxvZ28uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICA8VGhlbWVkLmFcbiAgICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IC0xLFxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IGBub25lYCxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnNXB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvZ28udGV4dH1cbiAgICAgICAgICAgICAgPC9UaGVtZWQuYT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UaGVtZWQuaDE+XG4gICAgICAgIDwvVGhlbWVkLmRpdj5cbiAgICAgICAgPFRoZW1lZC5kaXZcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgbWluV2lkdGg6IDE0MCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogWydzcGFjZS1iZXR3ZWVuJywgJ2ZsZXgtZW5kJ10sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTZWFyY2hiYXIgLz5cbiAgICAgICAgICA8VXNlck5hdiAvPlxuICAgICAgICA8L1RoZW1lZC5kaXY+XG4gICAgICA8L1RoZW1lZC5kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IE5vU1NSOiBSZWFjdC5GQzx7IHNrZWxldG9uPzogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHNrZWxldG9uLFxufSkgPT4ge1xuICBjb25zdCBbcmVuZGVyLCBzZXRSZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRSZW5kZXIodHJ1ZSksIFtdKVxuICBpZiAocmVuZGVyKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPlxuICB9XG4gIGlmIChza2VsZXRvbikge1xuICAgIHJldHVybiA8Pntza2VsZXRvbn08Lz5cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuZXhwb3J0IGRlZmF1bHQgTm9TU1JcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgU2VsZWN0LCBMYWJlbCB9IGZyb20gJ0B0aGVtZS11aS9jb21wb25lbnRzJ1xuZXhwb3J0IGludGVyZmFjZSBPcHRpb25QaWNrZXJQcm9wcyB7XG4gIG5hbWU6IHN0cmluZ1xuICBvcHRpb25zPzogUmVhZG9ubHk8QXJyYXk8c3RyaW5nIHwgdW5kZWZpbmVkPj5cbiAgb25DaGFuZ2U/OiBSZWFjdC5DaGFuZ2VFdmVudEhhbmRsZXI8SFRNTFNlbGVjdEVsZW1lbnQ+XG4gIHNlbGVjdGVkPzogc3RyaW5nXG59XG5cbmNvbnN0IE9wdGlvblBpY2tlcjogUmVhY3QuRkM8T3B0aW9uUGlja2VyUHJvcHM+ID0gKHtcbiAgbmFtZSxcbiAgb3B0aW9ucyxcbiAgb25DaGFuZ2UsXG4gIHNlbGVjdGVkLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGFiZWwgaHRtbEZvcj17bmFtZX0+e25hbWV9PC9MYWJlbD5cbiAgICAgIDxTZWxlY3QgaWQ9e25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3NlbGVjdGVkfT5cbiAgICAgICAge29wdGlvbnM/Lm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17b3B0aW9ufSBrZXk9e29wdGlvbn0+XG4gICAgICAgICAgICB7b3B0aW9ufVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvU2VsZWN0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvblBpY2tlclxuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgVGhlbWVkLCBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IENhcmQsIFRleHQgfSBmcm9tICdAdGhlbWUtdWkvY29tcG9uZW50cydcbmltcG9ydCB7IExpbmssIEltYWdlQ2Fyb3VzZWwgfSBmcm9tICdAY29tcG9uZW50cy91aSdcbmltcG9ydCB7IGdldFByaWNlIH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvcHJvZHVjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdENhcmRQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBwcm9kdWN0OiBTaG9waWZ5QnV5LlByb2R1Y3RcbiAgaW1nV2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICBpbWdIZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICBpbWdMYXlvdXQ/OiAnZml4ZWQnIHwgJ2ludHJpbnNpYycgfCAncmVzcG9uc2l2ZScgfCB1bmRlZmluZWRcbiAgaW1nUHJpb3JpdHk/OiBib29sZWFuXG4gIGltZ0xvYWRpbmc/OiAnZWFnZXInIHwgJ2xhenknXG4gIGltZ1NpemVzPzogc3RyaW5nXG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkOiBSZWFjdC5GQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7XG4gIHByb2R1Y3QsXG4gIGltZ1dpZHRoLFxuICBpbWdIZWlnaHQsXG4gIGltZ1ByaW9yaXR5LFxuICBpbWdMb2FkaW5nLFxuICBpbWdTaXplcyxcbiAgaW1nTGF5b3V0ID0gJ3Jlc3BvbnNpdmUnLFxufSkgPT4ge1xuICBjb25zdCBoYW5kbGUgPSAocHJvZHVjdCBhcyBhbnkpLmhhbmRsZVxuICBjb25zdCBwcm9kdWN0VmFyaWFudDogYW55ID0gcHJvZHVjdC52YXJpYW50c1swXVxuICBjb25zdCBwcmljZSA9IGdldFByaWNlKFxuICAgIHByb2R1Y3RWYXJpYW50LnByaWNlVjIuYW1vdW50LFxuICAgIHByb2R1Y3RWYXJpYW50LnByaWNlVjIuY3VycmVuY3lDb2RlXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBzeD17e1xuICAgICAgICBtYXhXaWR0aDogWzcwMCwgaW1nV2lkdGggfHwgNTQwXSxcbiAgICAgICAgcDogMyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7aGFuZGxlfS9gfT5cbiAgICAgICAgPGRpdiBzeD17eyBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICA8SW1hZ2VDYXJvdXNlbFxuICAgICAgICAgICAgY3VycmVudFNsaWRlPXtwcm9kdWN0LmltYWdlcyA/IHByb2R1Y3QuaW1hZ2VzLmxlbmd0aCAtIDEgOiAwfVxuICAgICAgICAgICAgd2lkdGg9e2ltZ1dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtpbWdIZWlnaHR9XG4gICAgICAgICAgICBwcmlvcml0eT17aW1nUHJpb3JpdHl9XG4gICAgICAgICAgICBsb2FkaW5nPXtpbWdMb2FkaW5nfVxuICAgICAgICAgICAgbGF5b3V0PXtpbWdMYXlvdXR9XG4gICAgICAgICAgICBzaXplcz17aW1nU2l6ZXN9XG4gICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICBpbWFnZXM9e1xuICAgICAgICAgICAgICBwcm9kdWN0LmltYWdlcy5sZW5ndGggPyBwcm9kdWN0LmltYWdlcyA6IFt7XG4gICAgICAgICAgICAgICAgc3JjOiBgaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLyR7aW1nV2lkdGh9eCR7aW1nSGVpZ2h0fWAsXG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8VGhlbWVkLmgyIHN4PXt7IG10OiA0LCBtYjogMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgPC9UaGVtZWQuaDI+XG4gICAgICAgICAgPFRleHQgc3g9e3sgZm9udFNpemU6IDEyLCBtYjogMiB9fT57cHJpY2V9PC9UZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L0NhcmQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmRcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFRoZW1lZCwganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IENhcmQsIFRleHQgfSBmcm9tICdAdGhlbWUtdWkvY29tcG9uZW50cydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAY29tcG9uZW50cy91aSdcbmltcG9ydCB7IGdldFByaWNlIH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvdXRpbHMvcHJvZHVjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTm9TU1IgZnJvbSAnLi9Ob1NTUidcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHByb2R1Y3Q6IFNob3BpZnlCdXkuUHJvZHVjdFxuICBpbWdXaWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gIGltZ0hlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gIGltZ0xheW91dD86ICdmaXhlZCcgfCAnaW50cmluc2ljJyB8ICdyZXNwb25zaXZlJyB8IHVuZGVmaW5lZFxuICBpbWdQcmlvcml0eT86IGJvb2xlYW5cbiAgaW1nTG9hZGluZz86ICdlYWdlcicgfCAnbGF6eSdcbiAgaW1nU2l6ZXM/OiBzdHJpbmdcbn1cblxuY29uc3QgUHJvZHVjdENhcmREZW1vOiBSZWFjdC5GQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7XG4gIHByb2R1Y3QsXG4gIGltZ1dpZHRoLFxuICBpbWdIZWlnaHQsXG4gIGltZ1ByaW9yaXR5LFxuICBpbWdMb2FkaW5nLFxuICBpbWdTaXplcyxcbiAgaW1nTGF5b3V0ID0gJ3Jlc3BvbnNpdmUnLFxufSkgPT4ge1xuICBjb25zdCBbc2hvd0FsdGVybmF0ZSwgc2V0U2hvd0FsdGVybmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NhblRvZ2dsZSwgc2V0Q2FuVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBzcmMgPSBwcm9kdWN0LmltYWdlc1swXS5zcmNcbiAgY29uc3QgaGFuZGxlID0gKHByb2R1Y3QgYXMgYW55KS5oYW5kbGVcbiAgY29uc3QgcHJvZHVjdFZhcmlhbnQ6IGFueSA9IHByb2R1Y3QudmFyaWFudHNbMF1cbiAgY29uc3QgcHJpY2UgPSBnZXRQcmljZShcbiAgICBwcm9kdWN0VmFyaWFudC5jb21wYXJlX2F0X3ByaWNlIHx8IHByb2R1Y3RWYXJpYW50LnByaWNlLFxuICAgICdVU0QnXG4gIClcbiAgY29uc3QgYWx0ZXJuYXRlSW1hZ2UgPSBwcm9kdWN0LmltYWdlc1sxXT8uc3JjXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgc3g9e3tcbiAgICAgICAgbWF4V2lkdGg6IFs3MDAsIDUwMF0sXG4gICAgICAgIHA6IDMsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB9fVxuICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0U2hvd0FsdGVybmF0ZShmYWxzZSl9XG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0U2hvd0FsdGVybmF0ZSh0cnVlKX1cbiAgICA+XG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtoYW5kbGV9L2B9PlxuICAgICAgICA8ZGl2IHN4PXt7IGZsZXhHcm93OiAxIH19PlxuICAgICAgICAgIHthbHRlcm5hdGVJbWFnZSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IHNob3dBbHRlcm5hdGUgJiYgY2FuVG9nZ2xlID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Tm9TU1I+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBxdWFsaXR5PVwiODVcIlxuICAgICAgICAgICAgICAgICAgc3JjPXthbHRlcm5hdGVJbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtpbWdXaWR0aCB8fCA1NDB9XG4gICAgICAgICAgICAgICAgICBzaXplcz17aW1nU2l6ZXN9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e2ltZ0hlaWdodCB8fCA1NDB9XG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9e2ltZ0xheW91dH1cbiAgICAgICAgICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0Q2FuVG9nZ2xlKHRydWUpfVxuICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImVhZ2VyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L05vU1NSPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OlxuICAgICAgICAgICAgICAgIGNhblRvZ2dsZSAmJiBzaG93QWx0ZXJuYXRlICYmIGFsdGVybmF0ZUltYWdlID8gJ25vbmUnIDogJ2Jsb2NrJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHF1YWxpdHk9XCI4NVwiXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgIHdpZHRoPXtpbWdXaWR0aCB8fCA1NDB9XG4gICAgICAgICAgICAgIHNpemVzPXtpbWdTaXplc31cbiAgICAgICAgICAgICAgaGVpZ2h0PXtpbWdIZWlnaHQgfHwgNTQwfVxuICAgICAgICAgICAgICBsYXlvdXQ9e2ltZ0xheW91dH1cbiAgICAgICAgICAgICAgbG9hZGluZz17aW1nTG9hZGluZ31cbiAgICAgICAgICAgICAgcHJpb3JpdHk9e2ltZ1ByaW9yaXR5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8VGhlbWVkLmgyIHN4PXt7IG10OiA0LCBtYjogMCwgZm9udFNpemU6IDE0IH19PlxuICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgPC9UaGVtZWQuaDI+XG4gICAgICAgICAgPFRleHQgc3g9e3sgZm9udFNpemU6IDEyLCBtYjogMiB9fT57cHJpY2V9PC9UZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L0NhcmQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmREZW1vXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgTG9hZGluZ0RvdHMgfSBmcm9tICdAY29tcG9uZW50cy91aSdcbmltcG9ydCBidWlsZGVyQ29uZmlnIGZyb20gJ0Bjb25maWcvYnVpbGRlcidcbmltcG9ydCB7IFByb2R1Y3RHcmlkIH0gZnJvbSAnYmxvY2tzL1Byb2R1Y3RHcmlkL1Byb2R1Y3RHcmlkJ1xuaW1wb3J0IHsgQnV0dG9uLCBUaGVtZWQsIGpzeCwgSW5wdXQsIExhYmVsIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBzZWFyY2hQcm9kdWN0cyB9IGZyb20gJ0BsaWIvc2hvcGlmeS9zdG9yZWZyb250LWRhdGEtaG9va3Mvc3JjL2FwaS9vcGVyYXRpb25zLWJ1aWxkZXInXG5pbXBvcnQgeyBFeHBhbmRNb2RhbCB9IGZyb20gJ3JlYWN0LXNwcmluZy1tb2RhbCdcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICdyZWFjdC1zcHJpbmctbW9kYWwvc3R5bGVzLmNzcydcbmltcG9ydCB7IENyb3NzIH0gZnJvbSAnQGNvbXBvbmVudHMvaWNvbnMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBpZD86IHN0cmluZ1xufVxuXG5jb25zdCBTZWFyY2hiYXI6IEZDPFByb3BzPiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBxIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBidXR0b25SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc09wZW4oZmFsc2UpXG4gIH0sIFtyb3V0ZXIuYXNQYXRoLnNwbGl0KCc/JylbMF1dKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEV4cGFuZE1vZGFsXG4gICAgICAgIHRyYW5zaXRpb25Db25maWc9e3t9fVxuICAgICAgICBjb250ZW50VHJhbnNpdGlvbj17e319XG4gICAgICAgIG92ZXJsYXlQcm9wcz17e1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogMTkyMCxcbiAgICAgICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICAgdG9wOiAoYnV0dG9uUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSB8fCAwKSArIDE1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgPlxuICAgICAgICA8U2VhcmNoTW9kYWxDb250ZW50XG4gICAgICAgICAgaW5pdGlhbFNlYXJjaD17cSAmJiBTdHJpbmcocSl9XG4gICAgICAgICAgb25TZWFyY2g9eyh0ZXJtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wID0gcSA/ICdyZXBsYWNlJyA6ICdwdXNoJ1xuICAgICAgICAgICAgcm91dGVyW29wXSh7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0ZXIuYXNQYXRoLnNwbGl0KCc/JylbMF0sXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcTogdGVybSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvRXhwYW5kTW9kYWw+XG5cbiAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgIHJlZj17YnV0dG9uUmVmfVxuICAgICAgICBhcz17QnV0dG9ufVxuICAgICAgICBteD17Mn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgID5cbiAgICAgICAge2lzT3BlbiA/IChcbiAgICAgICAgICA8Q3Jvc3MgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIyXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjJcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTggNGE0IDQgMCAxMDAgOCA0IDQgMCAwMDAtOHpNMiA4YTYgNiAwIDExMTAuODkgMy40NzZsNC44MTcgNC44MTdhMSAxIDAgMDEtMS40MTQgMS40MTRsLTQuODE2LTQuODE2QTYgNiAwIDAxMiA4elwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICApfVxuICAgICAgPC9UaGVtZWQuZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuY29uc3QgU2VhcmNoTW9kYWxDb250ZW50ID0gKHByb3BzOiB7XG4gIGluaXRpYWxTZWFyY2g/OiBzdHJpbmdcbiAgb25TZWFyY2g6ICh0ZXJtOiBzdHJpbmcpID0+IGFueVxufSkgPT4ge1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXG4gICAgcHJvcHMuaW5pdGlhbFNlYXJjaCAmJiBTdHJpbmcocHJvcHMuaW5pdGlhbFNlYXJjaClcbiAgKVxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdIGFzIGFueVtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoc2VhcmNoVGVybTogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBzZWFyY2hQcm9kdWN0cyhcbiAgICAgIGJ1aWxkZXJDb25maWcsXG4gICAgICBTdHJpbmcoc2VhcmNoVGVybSksXG4gICAgICAvLyBUT0RPOiBwYWdpbmF0aW9uXG4gICAgICAyMCxcbiAgICAgIDBcbiAgICApXG4gICAgc2V0U2VhcmNoKHNlYXJjaFRlcm0pXG4gICAgc2V0UHJvZHVjdHMocmVzdWx0cylcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIGlmIChzZWFyY2hUZXJtKSB7XG4gICAgICBwcm9wcy5vblNlYXJjaChzZWFyY2hUZXJtKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgZ2V0UHJvZHVjdHMoc2VhcmNoKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgdGhyb3R0bGVTZWFyY2ggPSB1c2VDYWxsYmFjayh0aHJvdHRsZShnZXRQcm9kdWN0cyksIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lZC5kaXZcbiAgICAgIHN4PXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgcDogWzEsIDJdLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SW5wdXRcbiAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIHN4PXt7IG1hcmdpbkJvdHRvbTogMTUgfX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy5pbml0aWFsU2VhcmNofVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcHJvZHVjdHMuLi5cIlxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aHJvdHRsZVNlYXJjaChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGluZ0RvdHMgLz5cbiAgICAgICkgOiBwcm9kdWN0cy5sZW5ndGggPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExhYmVsPlxuICAgICAgICAgICAgU2VhcmNoIFJlc3VsdHMgZm9yIFwiPHN0cm9uZz57c2VhcmNofTwvc3Ryb25nPlwiXG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8UHJvZHVjdEdyaWRcbiAgICAgICAgICAgIGNhcmRQcm9wcz17e1xuICAgICAgICAgICAgICBpbWdIZWlnaHQ6IDU0MCxcbiAgICAgICAgICAgICAgaW1nV2lkdGg6IDU0MCxcbiAgICAgICAgICAgICAgaW1nUHJpb3JpdHk6IGZhbHNlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgIG9mZnNldD17MH1cbiAgICAgICAgICAgIGxpbWl0PXtwcm9kdWN0cy5sZW5ndGh9XG4gICAgICAgICAgPjwvUHJvZHVjdEdyaWQ+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3NlYXJjaCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIFRoZXJlIGFyZSBubyBwcm9kdWN0cyB0aGF0IG1hdGNoIFwiPHN0cm9uZz57c2VhcmNofTwvc3Ryb25nPlwiXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD4gPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKX1cbiAgICA8L1RoZW1lZC5kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoYmFyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVW50aWxJbnRlcmFjdGlvbjogUmVhY3QuRkM8eyBza2VsZXRvbjogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHNrZWxldG9uLFxufSkgPT4ge1xuICBjb25zdCBbcmVuZGVyLCBzZXRSZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGlmIChyZW5kZXIpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0UmVuZGVyKHRydWUpfVxuICAgICAgb25DbGljaz17KCkgPT4gc2V0UmVuZGVyKHRydWUpfVxuICAgICAgb25Ub3VjaFN0YXJ0PXsoKSA9PiBzZXRSZW5kZXIodHJ1ZSl9XG4gICAgPlxuICAgICAge3NrZWxldG9ufVxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBVbnRpbEludGVyYWN0aW9uXG4iLCIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFnIH0gZnJvbSAnQGNvbXBvbmVudHMvaWNvbnMnXG5pbXBvcnQgeyB1c2VVSSB9IGZyb20gJ0Bjb21wb25lbnRzL3VpL2NvbnRleHQnXG5pbXBvcnQgeyBCdXR0b24sIGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuY29uc3QgVXNlck5hdjogRkM8UHJvcHM+ID0gKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHRvZ2dsZVNpZGViYXIgfSA9IHVzZVVJKClcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlU2lkZWJhcn0gYXJpYS1sYWJlbD1cIkNhcnRcIj5cbiAgICAgIDxCYWcgLz5cbiAgICA8L0J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTmF2XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEZlYXR1cmVCYXIgfSBmcm9tICcuL0ZlYXR1cmVCYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIExheW91dCB9IGZyb20gJy4vTGF5b3V0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXZiYXIgfSBmcm9tICcuL05hdmJhcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoYmFyIH0gZnJvbSAnLi9TZWFyY2hiYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJOYXYgfSBmcm9tICcuL1VzZXJOYXYnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWQgfSBmcm9tICcuL0hlYWQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE9wdGlvblBpY2tlciB9IGZyb20gJy4vT3B0aW9uUGlja2VyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9kdWN0Q2FyZCB9IGZyb20gJy4vUHJvZHVjdENhcmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2R1Y3RDYXJkRGVtbyB9IGZyb20gJy4vUHJvZHVjdENhcmREZW1vJ1xuIiwiY29uc3QgQXJyb3dMZWZ0ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTkgMTJINVwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMiAxOUw1IDEyTDEyIDVcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvd0xlZnRcbiIsImNvbnN0IEJhZyA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjIwXCJcbiAgICAgIGhlaWdodD1cIjIyXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjJcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQgMUwxIDVWMTlDMSAxOS41MzA0IDEuMjEwNzEgMjAuMDM5MSAxLjU4NTc5IDIwLjQxNDJDMS45NjA4NiAyMC43ODkzIDIuNDY5NTcgMjEgMyAyMUgxN0MxNy41MzA0IDIxIDE4LjAzOTEgMjAuNzg5MyAxOC40MTQyIDIwLjQxNDJDMTguNzg5MyAyMC4wMzkxIDE5IDE5LjUzMDQgMTkgMTlWNUwxNiAxSDRaXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEgNUgxOVwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNCA5QzE0IDEwLjA2MDkgMTMuNTc4NiAxMS4wNzgzIDEyLjgyODQgMTEuODI4NEMxMi4wNzgzIDEyLjU3ODYgMTEuMDYwOSAxMyAxMCAxM0M4LjkzOTEzIDEzIDcuOTIxNzIgMTIuNTc4NiA3LjE3MTU3IDExLjgyODRDNi40MjE0MyAxMS4wNzgzIDYgMTAuMDYwOSA2IDlcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWdcbiIsImNvbnN0IENoZWNrID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjAgNkw5IDE3TDQgMTJcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tcbiIsImNvbnN0IENoZXZyb25VcCA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHNoYXBlUmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE4IDE1bC02LTYtNiA2XCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGV2cm9uVXBcbiIsImNvbnN0IENyb3NzID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc2hhcGVSZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTggNkw2IDE4XCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNiA2bDEyIDEyXCIgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcm9zc1xuIiwiY29uc3QgRG91YmxlQ2hldnJvbiA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xNiA4LjkwNDgyTDEyIDRMOCA4LjkwNDgyTTggMTUuMDk1MkwxMiAyMEwxNiAxNS4wOTUyXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG91YmxlQ2hldnJvblxuIiwiY29uc3QgR2l0aHViID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTEyIDBDNS4zNyAwIDAgNS41MDU4MyAwIDEyLjMwMzVDMCAxNy43NDc4IDMuNDM1IDIyLjM0NjMgOC4yMDUgMjMuOTc2NUM4LjgwNSAyNC4wODQyIDkuMDMgMjMuNzE1IDkuMDMgMjMuMzkyMUM5LjAzIDIzLjA5OTkgOS4wMTUgMjIuMTMxIDkuMDE1IDIxLjEwMDVDNiAyMS42Njk2IDUuMjIgMjAuMzQ3IDQuOTggMTkuNjU0OUM0Ljg0NSAxOS4zMDEyIDQuMjYgMTguMjA5MiAzLjc1IDE3LjkxN0MzLjMzIDE3LjY4NjMgMi43MyAxNy4xMTczIDMuNzM1IDE3LjEwMTlDNC42OCAxNy4wODY1IDUuMzU1IDE3Ljk5MzkgNS41OCAxOC4zNjNDNi42NiAyMC4yMjM5IDguMzg1IDE5LjcwMSA5LjA3NSAxOS4zNzgxQzkuMTggMTguNTc4MyA5LjQ5NSAxOC4wNCA5Ljg0IDE3LjczMjVDNy4xNyAxNy40MjQ5IDQuMzggMTYuMzYzNyA0LjM4IDExLjY1NzZDNC4zOCAxMC4zMTk2IDQuODQ1IDkuMjEyMjcgNS42MSA4LjM1MTAyQzUuNDkgOC4wNDM0MyA1LjA3IDYuNzgyMzIgNS43MyA1LjA5MDU4QzUuNzMgNS4wOTA1OCA2LjczNSA0Ljc2NzYyIDkuMDMgNi4zNTE3QzkuOTkgNi4wNzQ4NyAxMS4wMSA1LjkzNjQ1IDEyLjAzIDUuOTM2NDVDMTMuMDUgNS45MzY0NSAxNC4wNyA2LjA3NDg3IDE1LjAzIDYuMzUxN0MxNy4zMjUgNC43NTIyNCAxOC4zMyA1LjA5MDU4IDE4LjMzIDUuMDkwNThDMTguOTkgNi43ODIzMiAxOC41NyA4LjA0MzQzIDE4LjQ1IDguMzUxMDJDMTkuMjE1IDkuMjEyMjcgMTkuNjggMTAuMzA0MiAxOS42OCAxMS42NTc2QzE5LjY4IDE2LjM3OTEgMTYuODc1IDE3LjQyNDkgMTQuMjA1IDE3LjczMjVDMTQuNjQgMTguMTE2OSAxNS4wMTUgMTguODU1MiAxNS4wMTUgMjAuMDA4NkMxNS4wMTUgMjEuNjU0MiAxNSAyMi45NzY4IDE1IDIzLjM5MjFDMTUgMjMuNzE1IDE1LjIyNSAyNC4wOTk1IDE1LjgyNSAyMy45NzY1QzE4LjIwNzIgMjMuMTUxOSAyMC4yNzczIDIxLjU4MjIgMjEuNzQzOCAxOS40ODgyQzIzLjIxMDMgMTcuMzk0MiAyMy45OTk0IDE0Ljg4MTQgMjQgMTIuMzAzNUMyNCA1LjUwNTgzIDE4LjYzIDAgMTIgMFpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2l0aHViXG4iLCJjb25zdCBIZWFydCA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjBcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yMC44NCAyLjYxQzIwLjMyOTIgMi4wOTkgMTkuNzIyOCAxLjY5MzY1IDE5LjA1NTQgMS40MTcwOEMxOC4zODc5IDEuMTQwNTIgMTcuNjcyNSAwLjk5ODE3NSAxNi45NSAwLjk5ODE3NUMxNi4yMjc1IDAuOTk4MTc1IDE1LjUxMjEgMS4xNDA1MiAxNC44NDQ2IDEuNDE3MDhDMTQuMTc3MiAxLjY5MzY1IDEzLjU3MDggMi4wOTkgMTMuMDYgMi42MUwxMiAzLjY3TDEwLjk0IDIuNjFDOS45MDgzIDEuNTc4MzEgOC41MDkwMyAwLjk5ODcwOSA3LjA1IDAuOTk4NzA5QzUuNTkwOTYgMC45OTg3MDkgNC4xOTE2OSAxLjU3ODMxIDMuMTYgMi42MUMyLjEyODMgMy42NDE2OSAxLjU0ODcxIDUuMDQwOTcgMS41NDg3MSA2LjVDMS41NDg3MSA3Ljk1OTAzIDIuMTI4MyA5LjM1ODMxIDMuMTYgMTAuMzlMNC4yMiAxMS40NUwxMiAxOS4yM0wxOS43OCAxMS40NUwyMC44NCAxMC4zOUMyMS4zNTEgOS44NzkyNCAyMS43NTYzIDkuMjcyODEgMjIuMDMyOSA4LjYwNTM2QzIyLjMwOTUgNy45Mzc5IDIyLjQ1MTggNy4yMjI0OSAyMi40NTE4IDYuNUMyMi40NTE4IDUuNzc3NTEgMjIuMzA5NSA1LjA2MjEgMjIuMDMyOSA0LjM5NDY0QzIxLjc1NjMgMy43MjcxOSAyMS4zNTEgMy4xMjA3NiAyMC44NCAyLjYxVjIuNjFaXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhcnRcbiIsImNvbnN0IEluZm8gPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzaGFwZVJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIGZpbGw9XCJ0cmFuc3BhcmVudFwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDh2NFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDE2aC4wMVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mb1xuIiwiY29uc3QgTWludXMgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk01IDEySDE5XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWludXNcbiIsImNvbnN0IE1vb24gPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzaGFwZVJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yMSAxMi43OUE5IDkgMCAxMTExLjIxIDMgNyA3IDAgMDAyMSAxMi43OXpcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vb25cbiIsImNvbnN0IFBsdXMgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMiA1VjE5XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTUgMTJIMTlcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbHVzXG4iLCJjb25zdCBSaWdodEFycm93ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTUgMTJIMTlcIlxuICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMiA1TDE5IDEyTDEyIDE5XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRBcnJvd1xuIiwiY29uc3QgU3VuID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc2hhcGVSZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiNVwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDF2MlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDIxdjJcIiAvPlxuICAgICAgPHBhdGggZD1cIk00LjIyIDQuMjJsMS40MiAxLjQyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMTguMzYgMTguMzZsMS40MiAxLjQyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMSAxMmgyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjEgMTJoMlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTQuMjIgMTkuNzhsMS40Mi0xLjQyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMTguMzYgNS42NGwxLjQyLTEuNDJcIiAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1blxuIiwiY29uc3QgVHJhc2ggPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMyA2SDIxXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTggNlY0QzggMy40Njk1NyA4LjIxMDcxIDIuOTYwODYgOC41ODU3OSAyLjU4NTc5QzguOTYwODYgMi4yMTA3MSA5LjQ2OTU3IDIgMTAgMkgxNEMxNC41MzA0IDIgMTUuMDM5MSAyLjIxMDcxIDE1LjQxNDIgMi41ODU3OUMxNS43ODkzIDIuOTYwODYgMTYgMy40Njk1NyAxNiA0VjZNMTkgNlYyMEMxOSAyMC41MzA0IDE4Ljc4OTMgMjEuMDM5MSAxOC40MTQyIDIxLjQxNDJDMTguMDM5MSAyMS43ODkzIDE3LjUzMDQgMjIgMTcgMjJIN0M2LjQ2OTU3IDIyIDUuOTYwODYgMjEuNzg5MyA1LjU4NTc5IDIxLjQxNDJDNS4yMTA3MSAyMS4wMzkxIDUgMjAuNTMwNCA1IDIwVjZIMTlaXCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEwIDExVjE3XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE0IDExVjE3XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhc2hcbiIsImNvbnN0IFZlcmNlbCA9ICh7IC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjg5XCJcbiAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgODkgMjBcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMS41NjI1IDBMMjMuMTI1IDIwSDBMMTEuNTYyNSAwWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00OS44NzUgMTAuNjI1QzQ5Ljg3NSA3LjQwNjI1IDQ3LjUgNS4xNTYyNSA0NC4wOTM3IDUuMTU2MjVDNDAuNjg3NSA1LjE1NjI1IDM4LjMxMjUgNy40MDYyNSAzOC4zMTI1IDEwLjYyNUMzOC4zMTI1IDEzLjc4MTIgNDAuODc1IDE2LjA5MzcgNDQuNDA2MiAxNi4wOTM3QzQ2LjM0MzggMTYuMDkzNyA0OC4wOTM4IDE1LjM3NSA0OS4yMTg4IDE0LjA2MjVMNDcuMDkzOCAxMi44NDM3QzQ2LjQzNzUgMTMuNSA0NS40Njg4IDEzLjkwNjIgNDQuNDA2MiAxMy45MDYyQzQyLjg0MzggMTMuOTA2MiA0MS41IDEzLjA2MjUgNDEuMDMxMiAxMS43ODEyTDQwLjkzNzUgMTEuNTYyNUg0OS43ODEyQzQ5Ljg0MzggMTEuMjUgNDkuODc1IDEwLjkzNzUgNDkuODc1IDEwLjYyNVpNNDAuOTA2MiA5LjY4NzVMNDAuOTY4OCA5LjVDNDEuMzc1IDguMTU2MjUgNDIuNTYyNSA3LjM0Mzc1IDQ0LjA2MjUgNy4zNDM3NUM0NS41OTM4IDcuMzQzNzUgNDYuNzUgOC4xNTYyNSA0Ny4xNTYyIDkuNUw0Ny4yMTg4IDkuNjg3NUg0MC45MDYyWlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNODMuNTMxMyAxMC42MjVDODMuNTMxMyA3LjQwNjI1IDgxLjE1NjMgNS4xNTYyNSA3Ny43NSA1LjE1NjI1Qzc0LjM0MzggNS4xNTYyNSA3MS45Njg4IDcuNDA2MjUgNzEuOTY4OCAxMC42MjVDNzEuOTY4OCAxMy43ODEyIDc0LjUzMTMgMTYuMDkzNyA3OC4wNjI1IDE2LjA5MzdDODAgMTYuMDkzNyA4MS43NSAxNS4zNzUgODIuODc1IDE0LjA2MjVMODAuNzUgMTIuODQzN0M4MC4wOTM4IDEzLjUgNzkuMTI1IDEzLjkwNjIgNzguMDYyNSAxMy45MDYyQzc2LjUgMTMuOTA2MiA3NS4xNTYzIDEzLjA2MjUgNzQuNjg3NSAxMS43ODEyTDc0LjU5MzggMTEuNTYyNUg4My40Mzc1QzgzLjUgMTEuMjUgODMuNTMxMyAxMC45Mzc1IDgzLjUzMTMgMTAuNjI1Wk03NC41NjI1IDkuNjg3NUw3NC42MjUgOS41Qzc1LjAzMTMgOC4xNTYyNSA3Ni4yMTg4IDcuMzQzNzUgNzcuNzE4OCA3LjM0Mzc1Qzc5LjI1IDcuMzQzNzUgODAuNDA2MyA4LjE1NjI1IDgwLjgxMjUgOS41TDgwLjg3NSA5LjY4NzVINzQuNTYyNVpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTY4LjUzMTMgOC44NDM3NEw3MC42NTYzIDcuNjI0OTlDNjkuNjU2MyA2LjA2MjQ5IDY3Ljg3NSA1LjE4NzQ5IDY1LjcxODggNS4xODc0OUM2Mi4zMTI1IDUuMTg3NDkgNTkuOTM3NSA3LjQzNzQ5IDU5LjkzNzUgMTAuNjU2MkM1OS45Mzc1IDEzLjg3NSA2Mi4zMTI1IDE2LjEyNSA2NS43MTg4IDE2LjEyNUM2Ny44NzUgMTYuMTI1IDY5LjY1NjMgMTUuMjUgNzAuNjU2MyAxMy42ODc1TDY4LjUzMTMgMTIuNDY4N0M2Ny45Njg4IDEzLjQwNjIgNjYuOTY4OCAxMy45Mzc1IDY1LjcxODggMTMuOTM3NUM2My43NSAxMy45Mzc1IDYyLjQzNzUgMTIuNjI1IDYyLjQzNzUgMTAuNjU2MkM2Mi40Mzc1IDguNjg3NDkgNjMuNzUgNy4zNzQ5OSA2NS43MTg4IDcuMzc0OTlDNjYuOTM3NSA3LjM3NDk5IDY3Ljk2ODggNy45MDYyNCA2OC41MzEzIDguODQzNzRaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk04OC4yMTg4IDEuNzVIODUuNzE4OFYxNS44MTI1SDg4LjIxODhWMS43NVpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQwLjE1NjMgMS43NUgzNy4yODEzTDMxLjc4MTMgMTEuMjVMMjYuMjgxMyAxLjc1SDIzLjM3NUwzMS43ODEzIDE2LjI1TDQwLjE1NjMgMS43NVpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTU3Ljg0MzggOC4wNjI1QzU4LjEyNSA4LjA2MjUgNTguNDA2MiA4LjA5Mzc1IDU4LjY4NzUgOC4xNTYyNVY1LjVDNTYuNTYyNSA1LjU2MjUgNTQuNTYyNSA2Ljc1IDU0LjU2MjUgOC4yMTg3NVY1LjVINTIuMDYyNVYxNS44MTI1SDU0LjU2MjVWMTEuMzQzN0M1NC41NjI1IDkuNDA2MjUgNTUuOTA2MiA4LjA2MjUgNTcuODQzOCA4LjA2MjVaXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlcmNlbFxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCYWcgfSBmcm9tICcuL0JhZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhcnQgfSBmcm9tICcuL0hlYXJ0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUcmFzaCB9IGZyb20gJy4vVHJhc2gnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENyb3NzIH0gZnJvbSAnLi9Dcm9zcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXJyb3dMZWZ0IH0gZnJvbSAnLi9BcnJvd0xlZnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBsdXMgfSBmcm9tICcuL1BsdXMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1pbnVzIH0gZnJvbSAnLi9NaW51cydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2sgfSBmcm9tICcuL0NoZWNrJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdW4gfSBmcm9tICcuL1N1bidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9vbiB9IGZyb20gJy4vTW9vbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2l0aHViIH0gZnJvbSAnLi9HaXRodWInXG5leHBvcnQgeyBkZWZhdWx0IGFzIERvdWJsZUNoZXZyb24gfSBmcm9tICcuL0RvdWJsZUNoZXZyb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJpZ2h0QXJyb3cgfSBmcm9tICcuL1JpZ2h0QXJyb3cnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEluZm8gfSBmcm9tICcuL0luZm8nXG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZXZyb25VcCB9IGZyb20gJy4vQ2hldnJvblVwJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWZXJjZWwgfSBmcm9tICcuL1ZlcmNlbCdcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgVGhlbWVkLCBBc3BlY3RSYXRpbyB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgVW50aWxJbnRlcmFjdGlvbiBmcm9tICdAY29tcG9uZW50cy9jb21tb24vVW50aWxJbnRlcmFjdGlvbidcblxudHlwZSBwcm9wcyA9IGltcG9ydCgnLi9MYXp5SW1hZ2VDYXJvdXNlbCcpLkltYWdlQ2Fyb3VzZWxQcm9wc1xuXG5jb25zdCBMYXp5Q2Fyb3VzZWwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9MYXp5SW1hZ2VDYXJvdXNlbCcpLCB7XG4gIGxvYWRpbmc6ICgpID0+IDxUaGVtZWQuZGl2IHN4PXt7IGhlaWdodDogJzEwMCUnLCBiZzogJ211dGVkJyB9fSAvPixcbiAgc3NyOiBmYWxzZSxcbn0pXG5jb25zdCBJbWFnZUNhcm91c2VsOiBSZWFjdC5GQzxwcm9wcz4gPSAoe1xuICBpbWFnZXMsXG4gIG9uVGh1bWJuYWlsQ2xpY2ssXG4gIHNob3dab29tLFxuICBjdXJyZW50U2xpZGUsXG4gIC4uLmltYWdlUHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXNwZWN0UmF0aW8gcmF0aW89e051bWJlcihpbWFnZVByb3BzLmhlaWdodCApIC8gTnVtYmVyKGltYWdlUHJvcHMud2lkdGgpfT5cbiAgICAgIDxVbnRpbEludGVyYWN0aW9uXG4gICAgICAgIHNrZWxldG9uPXs8SW1hZ2Ugc3JjPXtpbWFnZXNbMF0uc3JjfSB7Li4uaW1hZ2VQcm9wc30gLz59XG4gICAgICA+XG4gICAgICAgIDxMYXp5Q2Fyb3VzZWxcbiAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cbiAgICAgICAgICBzaG93Wm9vbT17c2hvd1pvb219XG4gICAgICAgICAgY3VycmVudFNsaWRlPXtjdXJyZW50U2xpZGV9XG4gICAgICAgICAgb25UaHVtYm5haWxDbGljaz17b25UaHVtYm5haWxDbGlja31cbiAgICAgICAgICB7Li4uaW1hZ2VQcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvVW50aWxJbnRlcmFjdGlvbj5cbiAgICA8L0FzcGVjdFJhdGlvPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsXG4iLCJpbXBvcnQgTmV4dExpbmssIHsgTGlua1Byb3BzIGFzIE5leHRMaW5rUHJvcHMgfSBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IExpbms6IFJlYWN0LkZDPE5leHRMaW5rUHJvcHM+ID0gKHsgaHJlZiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XG4gICAgICA8YSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2E+XG4gICAgPC9OZXh0TGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MaW5rJ1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicm9vdFwiOiBcIkxvYWRpbmdEb3RzX3Jvb3RfX2pYR1FrXCIsXG5cdFwiYmxpbmtcIjogXCJMb2FkaW5nRG90c19ibGlua19fMnhzSjJcIlxufTtcbiIsImltcG9ydCBzIGZyb20gJy4vTG9hZGluZ0RvdHMubW9kdWxlLmNzcydcblxuY29uc3QgTG9hZGluZ0RvdHM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgIDxzcGFuIC8+XG4gICAgICA8c3BhbiAvPlxuICAgICAgPHNwYW4gLz5cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ0RvdHNcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xvYWRpbmdEb3RzJ1xuIiwiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDbG9zZSwgVGhlbWVkIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyB1c2VSZXNwb25zaXZlVmFsdWUgfSBmcm9tICdAdGhlbWUtdWkvbWF0Y2gtbWVkaWEnXG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmFzZU1vZGFsLCBNb2RhbENsb3NlVGFyZ2V0IH0gZnJvbSAncmVhY3Qtc3ByaW5nLW1vZGFsJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvcGVuOiBib29sZWFuXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcbn1cblxuY29uc3QgU2lkZWJhcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIG9wZW4gPSBmYWxzZSwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gdXNlUmVzcG9uc2l2ZVZhbHVlKFsnMTAwJScsIDUwMF0pXG4gIHJldHVybiAoXG4gICAgPEJhc2VNb2RhbFxuICAgICAgaXNPcGVuPXtvcGVufVxuICAgICAgb25EaXNtaXNzPXtvbkNsb3NlfVxuICAgICAgY29udGVudFByb3BzPXt7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIGNvbnRlbnRUcmFuc2l0aW9uPXt7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScgfSxcbiAgICAgICAgZW50ZXI6IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSxcbiAgICAgICAgbGVhdmU6IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE1vZGFsQ2xvc2VUYXJnZXQ+XG4gICAgICAgIDxUaGVtZWQuZGl2XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBweTogMSxcbiAgICAgICAgICAgIGJnOiAndGV4dCcsXG4gICAgICAgICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgPC9UaGVtZWQuZGl2PlxuICAgICAgPC9Nb2RhbENsb3NlVGFyZ2V0PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQmFzZU1vZGFsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NpZGViYXInXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGRpc3BsYXlTaWRlYmFyOiBib29sZWFuXG4gIG5hdmlnYXRpb25MaW5rcz86IEFycmF5PHsgbGluazogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0+XG4gIGxvZ28/OiB7IGltYWdlPzogc3RyaW5nOyB0ZXh0OiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH1cbiAgdG9nZ2xlU2lkZWJhcj86IGFueVxuICBjbG9zZVNpZGViYXI/OiBhbnlcbiAgb3BlblNpZGViYXI/OiBhbnlcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkaXNwbGF5U2lkZWJhcjogZmFsc2UsXG59XG5cbnR5cGUgQWN0aW9uID1cbiAgfCB7XG4gICAgICB0eXBlOiAnT1BFTl9TSURFQkFSJ1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiAnQ0xPU0VfU0lERUJBUidcbiAgICB9XG5cbmV4cG9ydCBjb25zdCBVSUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFN0YXRlPihpbml0aWFsU3RhdGUpXG5cblVJQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdVSUNvbnRleHQnXG5cbmV4cG9ydCBjb25zdCBVSVByb3ZpZGVyOiBGQzx7IHNpdGVTZXR0aW5nczogUGFydGlhbDxTdGF0ZT4gfT4gPSAoe1xuICBzaXRlU2V0dGluZ3MsXG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAuLi5pbml0aWFsU3RhdGUsXG4gICAgLi4uc2l0ZVNldHRpbmdzLFxuICB9KVxuXG4gIGNvbnN0IG9wZW5TaWRlYmFyID0gKCkgPT4gc2V0U3RhdGUoKCkgPT4gKHsgZGlzcGxheVNpZGViYXI6IHRydWUgfSkpXG4gIGNvbnN0IGNsb3NlU2lkZWJhciA9ICgpID0+IHNldFN0YXRlKCgpID0+ICh7IGRpc3BsYXlTaWRlYmFyOiBmYWxzZSB9KSlcbiAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+XG4gICAgc2V0U3RhdGUoKHByZXYpID0+ICh7IGRpc3BsYXlTaWRlYmFyOiAhcHJldi5kaXNwbGF5U2lkZWJhciB9KSlcblxuICBjb25zdCB2YWx1ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5zaXRlU2V0dGluZ3MsXG4gICAgb3BlblNpZGViYXIsXG4gICAgY2xvc2VTaWRlYmFyLFxuICAgIHRvZ2dsZVNpZGViYXIsXG4gIH1cblxuICByZXR1cm4gPFVJQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVVJID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChVSUNvbnRleHQpXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZVVJIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVSVByb3ZpZGVyYClcbiAgfVxuICByZXR1cm4gY29udGV4dFxufVxuXG5leHBvcnQgY29uc3QgTWFuYWdlZFVJQ29udGV4dDogRkM8eyBzaXRlU2V0dGluZ3M6IFBhcnRpYWw8U3RhdGU+IH0+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHNpdGVTZXR0aW5ncyxcbn0pID0+IDxVSVByb3ZpZGVyIHNpdGVTZXR0aW5ncz17c2l0ZVNldHRpbmdzfT57Y2hpbGRyZW59PC9VSVByb3ZpZGVyPlxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTaWRlYmFyIH0gZnJvbSAnLi9TaWRlYmFyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nRG90cyB9IGZyb20gJy4vTG9hZGluZ0RvdHMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmsgfSBmcm9tICcuL0xpbmsnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEltYWdlQ2Fyb3VzZWwgfSBmcm9tICcuL0ltYWdlQ2Fyb3VzZWwnXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGlzRGV2OiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyxcbn1cbiIsImlmICghcHJvY2Vzcy5lbnYuU0hPUElGWV9TVE9SRV9ET01BSU4pIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGVudmlyb25tZW50IHZhcmlhYmxlIFNIT1BJRllfU1RPUkVfRE9NQUlOJylcbn1cbmlmICghcHJvY2Vzcy5lbnYuU0hPUElGWV9TVE9SRUZST05UX0FQSV9UT0tFTikge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ01pc3NpbmcgcmVxdWlyZWQgZW52aXJvbm1lbnQgdmFyaWFibGUgU0hPUElGWV9TVE9SRUZST05UX0FQSV9UT0tFTidcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRvbWFpbjogcHJvY2Vzcy5lbnYuU0hPUElGWV9TVE9SRV9ET01BSU4sXG4gIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuU0hPUElGWV9TVE9SRUZST05UX0FQSV9UT0tFTixcbn1cbiIsImltcG9ydCAqIGFzIHRoZW1lcyBmcm9tICdAdGhlbWUtdWkvcHJlc2V0cydcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVzIGFzIGFueVxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDT09LSUVfTkFNRSA9ICdhY2NlcHRfY29va2llcydcblxuZXhwb3J0IGNvbnN0IHVzZUFjY2VwdENvb2tpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFthY2NlcHRlZENvb2tpZXMsIHNldEFjY2VwdGVkQ29va2llc10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFDb29raWVzLmdldChDT09LSUVfTkFNRSkpIHtcbiAgICAgIHNldEFjY2VwdGVkQ29va2llcyhmYWxzZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGFjY2VwdENvb2tpZXMgPSAoKSA9PiB7XG4gICAgc2V0QWNjZXB0ZWRDb29raWVzKHRydWUpXG4gICAgQ29va2llcy5zZXQoQ09PS0lFX05BTUUsICdhY2NlcHRlZCcsIHsgZXhwaXJlczogMzY1IH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFjY2VwdGVkQ29va2llcyxcbiAgICBvbkFjY2VwdENvb2tpZXM6IGFjY2VwdENvb2tpZXMsXG4gIH1cbn1cbiIsImV4cG9ydCB7IENvbW1lcmNlUHJvdmlkZXIgfSBmcm9tICcuL3NyYy9Db21tZXJjZVByb3ZpZGVyJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvaG9va3MnXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNob3BpZnlCdXkgZnJvbSAnc2hvcGlmeS1idXknXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi9Db250ZXh0J1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBMb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGludGVyZmFjZSBDb21tZXJjZVByb3ZpZGVyUHJvcHMgZXh0ZW5kcyBTaG9waWZ5QnV5LkNvbmZpZyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbW1lcmNlUHJvdmlkZXIoe1xuICBzdG9yZWZyb250QWNjZXNzVG9rZW4sXG4gIGRvbWFpbixcbiAgY2hpbGRyZW4sXG59OiBDb21tZXJjZVByb3ZpZGVyUHJvcHMpIHtcbiAgaWYgKGRvbWFpbiA9PSBudWxsIHx8IHN0b3JlZnJvbnRBY2Nlc3NUb2tlbiA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1VuYWJsZSB0byBidWlsZCBzaG9waWZ5LWJ1eSBjbGllbnQgb2JqZWN0LiBQbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91ciBhY2Nlc3MgdG9rZW4gYW5kIGRvbWFpbiBhcmUgY29ycmVjdC4nXG4gICAgKVxuICB9XG5cbiAgY29uc3QgaW5pdGlhbENhcnQgPSBMb2NhbFN0b3JhZ2UuZ2V0SW5pdGlhbENhcnQoKVxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZTxTaG9waWZ5QnV5LkNhcnQgfCBudWxsPihpbml0aWFsQ2FydClcblxuICBjb25zdCBpc0N1c3RvbURvbWFpbiA9IGRvbWFpbi5pbmNsdWRlcygnLicpXG5cbiAgY29uc3QgY2xpZW50ID0gU2hvcGlmeUJ1eS5idWlsZENsaWVudCh7XG4gICAgc3RvcmVmcm9udEFjY2Vzc1Rva2VuLFxuICAgIGRvbWFpbjogaXNDdXN0b21Eb21haW4gPyBkb21haW4gOiBgJHtkb21haW59Lm15c2hvcGlmeS5jb21gLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TmV3Q2FydCgpIHtcbiAgICAgIGNvbnN0IG5ld0NhcnQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQuY3JlYXRlKClcbiAgICAgIHNldENhcnQobmV3Q2FydClcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiByZWZyZXNoRXhpc3RpbmdDYXJ0KGNhcnRJZDogc3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZWZyZXNoZWRDYXJ0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LmZldGNoKGNhcnRJZClcblxuICAgICAgICBpZiAocmVmcmVzaGVkQ2FydCA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGdldE5ld0NhcnQoKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2FydEhhc0JlZW5QdXJjaGFzZWQgPSBCb29sZWFuKHJlZnJlc2hlZENhcnQuY29tcGxldGVkQXQpXG5cbiAgICAgICAgaWYgKGNhcnRIYXNCZWVuUHVyY2hhc2VkKSB7XG4gICAgICAgICAgZ2V0TmV3Q2FydCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0Q2FydChyZWZyZXNoZWRDYXJ0KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjYXJ0ID09IG51bGwpIHtcbiAgICAgIGdldE5ld0NhcnQoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZWZyZXNoRXhpc3RpbmdDYXJ0KFN0cmluZyhjYXJ0LmlkKSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgTG9jYWxTdG9yYWdlLnNldChMb2NhbFN0b3JhZ2VLZXlzLkNBUlQsIEpTT04uc3RyaW5naWZ5KGNhcnQpKVxuICB9LCBbY2FydF0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY2xpZW50LFxuICAgICAgICBjYXJ0LFxuICAgICAgICBzZXRDYXJ0LFxuICAgICAgICBkb21haW4sXG4gICAgICAgIHN0b3JlZnJvbnRBY2Nlc3NUb2tlbixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNob3BpZnlCdXkgZnJvbSAnc2hvcGlmeS1idXknXG5cbmludGVyZmFjZSBDb250ZXh0U2hhcGUge1xuICBjbGllbnQ6IFNob3BpZnlCdXkuQ2xpZW50IHwgbnVsbFxuICBjYXJ0OiBTaG9waWZ5QnV5LkNhcnQgfCBudWxsXG4gIHNldENhcnQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFNob3BpZnlCdXkuQ2FydCB8IG51bGw+PlxuICBkb21haW46IHN0cmluZ1xuICBzdG9yZWZyb250QWNjZXNzVG9rZW46IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dFNoYXBlPih7XG4gIGNsaWVudDogbnVsbCxcbiAgY2FydDogbnVsbCxcbiAgZG9tYWluOiAnJyxcbiAgc3RvcmVmcm9udEFjY2Vzc1Rva2VuOiAnJyxcbiAgc2V0Q2FydDogKCkgPT4ge1xuICAgIHRocm93IEVycm9yKCdZb3UgZm9yZ290IHRvIHdyYXAgdGhpcyBpbiBhIFByb3ZpZGVyIG9iamVjdCcpXG4gIH0sXG59KVxuIiwiaW1wb3J0ICogYXMgcXMgZnJvbSAncXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVpbGxkZXJDb25maWcge1xuICBhcGlLZXk6IHN0cmluZ1xuICBwcm9kdWN0c01vZGVsOiBzdHJpbmdcbiAgY29sbGVjdGlvbnNNb2RlbDogc3RyaW5nXG4gIGlzRGVtbz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2xsZWN0aW9uUHJvZHVjdHNRdWVyeSB7XG4gIGhhbmRsZTogc3RyaW5nXG4gIGxpbWl0PzogbnVtYmVyXG4gIGN1cnNvcj86IHN0cmluZ1xuICBhcGlLZXk6IHN0cmluZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUHJvZHVjdHMoXG4gIGNvbmZpZzogQnVpbGxkZXJDb25maWcsXG4gIGxpbWl0ID0gMTAwLFxuICBvZmZzZXQgPSAwXG4pIHtcbiAgY29uc3QgcHJvZHVjdHNDb250ZW50ID0gKFxuICAgIGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vY2RuLmJ1aWxkZXIuaW8vYXBpL3YyL2NvbnRlbnQvJHtjb25maWcucHJvZHVjdHNNb2RlbH0/YXBpS2V5PSR7Y29uZmlnLmFwaUtleX0mbGltaXQ9JHtsaW1pdH0mb2Zmc2V0PSR7b2Zmc2V0fSZjYWNoZWJ1c3Q9dHJ1ZWBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgKS5yZXN1bHRzXG5cbiAgcmV0dXJuIHByb2R1Y3RzQ29udGVudC5tYXAoKHByOiBhbnkpID0+IHByLmRhdGEpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hQcm9kdWN0cyhcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgc2VhcmNoU3RyaW5nOiBzdHJpbmcsXG4gIGxpbWl0ID0gMTAwLFxuICBvZmZzZXQgPSAwXG4pIHtcbiAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoXG4gICAge1xuICAgICAgZmllbGRzOiBbJ2RhdGEnXSxcbiAgICAgIGxpbWl0LFxuICAgICAgb2Zmc2V0LFxuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgIH0sXG4gICAgeyBhbGxvd0RvdHM6IHRydWUgfVxuICApXG5cbiAgY29uc3QgcHJvZHVjdHNDb250ZW50ID0gKFxuICAgIGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vY2RuLmJ1aWxkZXIuaW8vYXBpL3YyL2NvbnRlbnQvJHtcbiAgICAgICAgY29uZmlnLnByb2R1Y3RzTW9kZWxcbiAgICAgIH0/JHtxdWVyeX0mcXVlcnkuZGF0YS50aXRsZT0ke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgJHJlZ2V4OiBgJHtzZWFyY2hTdHJpbmd9YCxcbiAgICAgICAgJG9wdGlvbnM6ICdpJyxcbiAgICAgIH0pfWBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgKS5yZXN1bHRzXG4gIHJldHVybiBwcm9kdWN0c0NvbnRlbnQ/Lm1hcCgocHJvZHVjdDogYW55KSA9PiBwcm9kdWN0LmRhdGEpIHx8IFtdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQcm9kdWN0UGF0aHMoXG4gIGNvbmZpZzogQnVpbGxkZXJDb25maWcsXG4gIGxpbWl0PzogbnVtYmVyXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHByb2R1Y3RzOiBhbnlbXSA9IGF3YWl0IGdldEFsbFByb2R1Y3RzKGNvbmZpZywgbGltaXQpXG4gIHJldHVybiBwcm9kdWN0cz8ubWFwKChlbnRyeSkgPT4gZW50cnkuaGFuZGxlKSB8fCBbXVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdChcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgb3B0aW9uczogeyBpZD86IHN0cmluZzsgaGFuZGxlPzogc3RyaW5nOyB3aXRoQ29udGVudD86IGJvb2xlYW4gfVxuKSB7XG4gIGlmIChCb29sZWFuKG9wdGlvbnMuaWQpID09PSBCb29sZWFuKG9wdGlvbnMuaGFuZGxlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRWl0aGVyIGEgaGFuZGxlIG9yIGlkIGlzIHJlcXVpcmVkJylcbiAgfVxuICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XG4gICAgbGltaXQ6IDEsXG4gICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgIHF1ZXJ5OiB7XG4gICAgICBkYXRhOiBvcHRpb25zLmlkXG4gICAgICAgID8ge1xuICAgICAgICAgICAgaWQ6IHsgJGVxOiBvcHRpb25zLmlkIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIGhhbmRsZTogeyAkZXE6IG9wdGlvbnMuaGFuZGxlIH0sXG4gICAgICAgICAgfSxcbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IHByb2R1Y3RzQ29udGVudCA9IChcbiAgICBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2Nkbi5idWlsZGVyLmlvL2FwaS92Mi9jb250ZW50LyR7Y29uZmlnLnByb2R1Y3RzTW9kZWx9PyR7cXVlcnl9YFxuICAgICkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApLnJlc3VsdHNcblxuICBpZiAob3B0aW9ucy53aXRoQ29udGVudCkge1xuICAgIHJldHVybiBwcm9kdWN0c0NvbnRlbnRbMF1cbiAgfVxuICByZXR1cm4gcHJvZHVjdHNDb250ZW50WzBdPy5kYXRhXG59XG5cbi8qKlxuICogQ29sbGVjdGlvbnNcbiAqL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ29sbGVjdGlvbnMoXG4gIGNvbmZpZzogQnVpbGxkZXJDb25maWcsXG4gIGxpbWl0ID0gMjAsXG4gIG9mZnNldCA9IDAsXG4gIGZpZWxkcz86IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KFxuICAgIHtcbiAgICAgIGZpZWxkczogZmllbGRzIHx8ICdkYXRhJyxcbiAgICAgIGxpbWl0LFxuICAgICAgb2Zmc2V0LFxuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgY2FjaGVidXN0OiB0cnVlLFxuICAgIH0sXG4gICAgeyBhbGxvd0RvdHM6IHRydWUgfVxuICApXG5cbiAgY29uc3QgY29sbGVjdGlvbnNDb250ZW50ID0gKFxuICAgIGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vY2RuLmJ1aWxkZXIuaW8vYXBpL3YyL2NvbnRlbnQvJHtjb25maWcuY29sbGVjdGlvbnNNb2RlbH0/JHtxdWVyeX1gXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICkucmVzdWx0c1xuXG4gIHJldHVybiBjb2xsZWN0aW9uc0NvbnRlbnQ/Lm1hcCgoZW50cnk6IGFueSkgPT4gZW50cnkuZGF0YSkgfHwgW11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaENvbGxlY3Rpb25zKFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBzZWFyY2hTdHJpbmc6IHN0cmluZyxcbiAgbGltaXQgPSAxMDAsXG4gIG9mZnNldCA9IDBcbikge1xuICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeShcbiAgICB7XG4gICAgICBmaWVsZHM6IFsnZGF0YSddLFxuICAgICAgbGltaXQsXG4gICAgICBvZmZzZXQsXG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgfSxcbiAgICB7IGFsbG93RG90czogdHJ1ZSB9XG4gIClcblxuICBjb25zdCBjb2xsZWN0aW9uc0NvbnRlbnQgPSAoXG4gICAgYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjIvY29udGVudC8ke1xuICAgICAgICBjb25maWcuY29sbGVjdGlvbnNNb2RlbFxuICAgICAgfT8ke3F1ZXJ5fSZxdWVyeS4kb3I9JHtKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIHtcbiAgICAgICAgICAnZGF0YS5kZXNjcmlwdGlvbic6IHsgJHJlZ2V4OiBgJHtzZWFyY2hTdHJpbmd9YCB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ2RhdGEudGl0bGUnOiB7ICRyZWdleDogYCR7c2VhcmNoU3RyaW5nfWAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0pfWBcbiAgICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgKS5yZXN1bHRzXG4gIHJldHVybiBjb2xsZWN0aW9uc0NvbnRlbnQ/Lm1hcCgoZW50cnk6IGFueSkgPT4gZW50cnkuZGF0YSkgfHwgW11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENvbGxlY3Rpb25QYXRocyhcbiAgY29uZmlnOiBCdWlsbGRlckNvbmZpZyxcbiAgbGltaXQ/OiBudW1iZXJcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgY29sbGVjdGlvbnM6IGFueVtdID0gYXdhaXQgZ2V0QWxsQ29sbGVjdGlvbnMoY29uZmlnLCBsaW1pdClcbiAgcmV0dXJuIGNvbGxlY3Rpb25zPy5tYXAoKGVudHJ5KSA9PiBlbnRyeS5oYW5kbGUpIHx8IFtdXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2xsZWN0aW9uKFxuICBjb25maWc6IEJ1aWxsZGVyQ29uZmlnLFxuICBvcHRpb25zOiB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBoYW5kbGU/OiBzdHJpbmdcbiAgICBwcm9kdWN0c1F1ZXJ5PzogT21pdDxDb2xsZWN0aW9uUHJvZHVjdHNRdWVyeSwgJ2hhbmRsZSc+XG4gIH1cbikge1xuICBpZiAoQm9vbGVhbihvcHRpb25zLmlkKSA9PT0gQm9vbGVhbihvcHRpb25zLmhhbmRsZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VpdGhlciBhIGhhbmRsZSBvciBpZCBpcyByZXF1aXJlZCcpXG4gIH1cbiAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xuICAgIGxpbWl0OiAxLFxuICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICBjYWNoZWJ1c3Q6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG4gICAgcXVlcnk6IHtcbiAgICAgIGRhdGE6IG9wdGlvbnMuaWRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBpZDogeyAkZXE6IG9wdGlvbnMuaWQgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgaGFuZGxlOiB7ICRlcTogb3B0aW9ucy5oYW5kbGUgfSxcbiAgICAgICAgICB9LFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgY29sbGVjdGlvbnNDb250ZW50ID0gKFxuICAgIGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vY2RuLmJ1aWxkZXIuaW8vYXBpL3YyL2NvbnRlbnQvJHtjb25maWcuY29sbGVjdGlvbnNNb2RlbH0/JHtxdWVyeX1gXG4gICAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICkucmVzdWx0c1xuXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uc0NvbnRlbnRbMF0/LmRhdGFcbiAgaWYgKGNvbmZpZy5pc0RlbW8pIHtcbiAgICByZXR1cm4gY29sbGVjdGlvblxuICB9XG4gIGNvbnN0IHByb2R1Y3RzUXVlcnkgPSB7XG4gICAgbGltaXQ6IDIwLFxuICAgIGhhbmRsZTogY29sbGVjdGlvbj8uaGFuZGxlLFxuICAgIC4uLm9wdGlvbnMucHJvZHVjdHNRdWVyeSxcbiAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gIH1cbiAgY29uc3QgeyBwcm9kdWN0cywgbmV4dFBhZ2VDdXJzb3IsIGhhc05leHRQYWdlIH0gPSBhd2FpdCBnZXRDb2xsZWN0aW9uUHJvZHVjdHMoXG4gICAgcHJvZHVjdHNRdWVyeVxuICApXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5jb2xsZWN0aW9uLFxuICAgIHByb2R1Y3RzLFxuICAgIG5leHRQYWdlQ3Vyc29yLFxuICAgIGhhc05leHRQYWdlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb2xsZWN0aW9uUHJvZHVjdHMgPSAoXG4gIHByb2R1Y3RzUXVlcnk6IENvbGxlY3Rpb25Qcm9kdWN0c1F1ZXJ5XG4pOiBQcm9taXNlPHtcbiAgbmV4dFBhZ2VDdXJzb3I6IHN0cmluZ1xuICBwcm9kdWN0czogYW55W11cbiAgaGFzTmV4dFBhZ2U6IGJvb2xlYW5cbn0+ID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gcXMuc3RyaW5naWZ5KHByb2R1Y3RzUXVlcnkpXG4gIHJldHVybiBmZXRjaChcbiAgICBgaHR0cHM6Ly9jZG4uYnVpbGRlci5pby9hcGkvdjEvc2hvcGlmeS1zeW5jL2NvbGxlY3Rpb24tcHJvZHVjdHM/JHtzZWFyY2h9YFxuICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbn1cbiIsImV4cG9ydCB7IHVzZUNsaWVudFVuc2FmZSB9IGZyb20gJy4vdXNlQ2xpZW50VW5zYWZlJ1xuZXhwb3J0IHsgdXNlU2V0Q2FydFVuc2FmZSB9IGZyb20gJy4vdXNlU2V0Q2FydFVuc2FmZSdcbmV4cG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuL3VzZUNhcnQnXG5leHBvcnQgeyB1c2VDYXJ0Q291bnQgfSBmcm9tICcuL3VzZUNhcnRDb3VudCdcbmV4cG9ydCB7IHVzZUFkZEl0ZW1Ub0NhcnQgfSBmcm9tICcuL3VzZUFkZEl0ZW1Ub0NhcnQnXG5leHBvcnQgeyB1c2VBZGRJdGVtc1RvQ2FydCB9IGZyb20gJy4vdXNlQWRkSXRlbXNUb0NhcnQnXG5leHBvcnQgeyB1c2VSZW1vdmVJdGVtRnJvbUNhcnQgfSBmcm9tICcuL3VzZVJlbW92ZUl0ZW1Gcm9tQ2FydCdcbmV4cG9ydCB7IHVzZVJlbW92ZUl0ZW1zRnJvbUNhcnQgfSBmcm9tICcuL3VzZVJlbW92ZUl0ZW1zRnJvbUNhcnQnXG5leHBvcnQgeyB1c2VDYXJ0SXRlbXMgfSBmcm9tICcuL3VzZUNhcnRJdGVtcydcbmV4cG9ydCB7IHVzZUNoZWNrb3V0VXJsIH0gZnJvbSAnLi91c2VDaGVja291dFVybCdcbmV4cG9ydCB7IHVzZUdldExpbmVJdGVtIH0gZnJvbSAnLi91c2VHZXRMaW5lSXRlbSdcbmV4cG9ydCB7IHVzZVVwZGF0ZUl0ZW1RdWFudGl0eSB9IGZyb20gJy4vdXNlVXBkYXRlSXRlbVF1YW50aXR5J1xuIiwiaW1wb3J0IHsgdXNlQWRkSXRlbXNUb0NhcnQgfSBmcm9tICcuL3VzZUFkZEl0ZW1zVG9DYXJ0J1xuaW1wb3J0IHsgQXR0cmlidXRlSW5wdXQgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFkZEl0ZW1Ub0NhcnQoKSB7XG4gIGNvbnN0IGFkZEl0ZW1zVG9DYXJ0ID0gdXNlQWRkSXRlbXNUb0NhcnQoKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZEl0ZW1Ub0NhcnQoXG4gICAgdmFyaWFudElkOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgcXVhbnRpdHk6IG51bWJlcixcbiAgICBjdXN0b21BdHRyaWJ1dGVzPzogQXR0cmlidXRlSW5wdXRbXVxuICApIHtcbiAgICBjb25zdCBpdGVtID0gW3sgdmFyaWFudElkLCBxdWFudGl0eSwgY3VzdG9tQXR0cmlidXRlcyB9XVxuXG4gICAgcmV0dXJuIGFkZEl0ZW1zVG9DYXJ0KGl0ZW0pXG4gIH1cblxuICByZXR1cm4gYWRkSXRlbVRvQ2FydFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5pbXBvcnQgU2hvcGlmeUJ1eSBmcm9tICdzaG9waWZ5LWJ1eSdcbmltcG9ydCB7IExpbmVJdGVtUGF0Y2ggfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFkZEl0ZW1zVG9DYXJ0KCkge1xuICBjb25zdCB7IGNsaWVudCwgY2FydCwgc2V0Q2FydCB9ID0gdXNlQ29udGV4dChDb250ZXh0KVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZEl0ZW1zVG9DYXJ0KGl0ZW1zOiBMaW5lSXRlbVBhdGNoW10pIHtcbiAgICBpZiAoY2FydCA9PSBudWxsIHx8IGNsaWVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxlZCBhZGRJdGVtc1RvQ2FydCB0b28gc29vbicpXG4gICAgfVxuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ011c3QgaW5jbHVkZSBhdCBsZWFzdCBvbmUgbGluZSBpdGVtLCBlbXB0eSBsaW5lIGl0ZW1zIGZvdW5kJ1xuICAgICAgKVxuICAgIH1cblxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLnZhcmlhbnRJZCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyB2YXJpYW50SWQgaW4gaXRlbWApXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnF1YW50aXR5ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBNaXNzaW5nIHF1YW50aXR5IGluIGl0ZW0gd2l0aCB2YXJpYW50IGlkOiAke2l0ZW0udmFyaWFudElkfWBcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5xdWFudGl0eSAhPSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFF1YW50aXR5IGlzIG5vdCBhIG51bWJlciBpbiBpdGVtIHdpdGggdmFyaWFudCBpZDogJHtpdGVtLnZhcmlhbnRJZH1gXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5xdWFudGl0eSA8IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBRdWFudGl0eSBtdXN0IG5vdCBiZSBsZXNzIHRoYW4gb25lIGluIGl0ZW0gd2l0aCB2YXJpYW50IGlkOiAke2l0ZW0udmFyaWFudElkfWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBuZXdDYXJ0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LmFkZExpbmVJdGVtcyhcbiAgICAgIGNhcnQuaWQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGl0ZW1zIGFzIFNob3BpZnlCdXkuTGluZUl0ZW1bXVxuICAgIClcbiAgICBzZXRDYXJ0KG5ld0NhcnQpXG4gIH1cblxuICByZXR1cm4gYWRkSXRlbXNUb0NhcnRcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FydCgpIHtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG4gIHJldHVybiBjYXJ0XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhcnRDb3VudCgpIHtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG4gIGlmIChjYXJ0ID09IG51bGwgfHwgY2FydC5saW5lSXRlbXMubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBjb3VudCA9IGNhcnQubGluZUl0ZW1zLnJlZHVjZSgodG90YWxDb3VudCwgbGluZUl0ZW0pID0+IHtcbiAgICByZXR1cm4gdG90YWxDb3VudCArIGxpbmVJdGVtLnF1YW50aXR5XG4gIH0sIDApXG5cbiAgcmV0dXJuIGNvdW50XG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhcnRJdGVtcygpIHtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG4gIGlmICghY2FydCB8fCAhQXJyYXkuaXNBcnJheShjYXJ0LmxpbmVJdGVtcykpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIHJldHVybiBjYXJ0LmxpbmVJdGVtc1xufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGVja291dFVybCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG4gIGlmIChjYXJ0ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGNhcnQud2ViVXJsXG59XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNsaWVudFVuc2FmZSgpIHtcbiAgY29uc3QgeyBjbGllbnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1VzaW5nIGNsaWVudCBkaXJlY3RseSB3aWxsIGhpdCBzaG9waWZ5IEFQSSBhbmQgY291bnRzIHRvd2FyZHMgeW91ciBzdG9yZWZyb250IHJhdGUgbGltaXQnXG4gICAgKVxuICB9XG4gIHJldHVybiBjbGllbnRcbn1cbiIsImltcG9ydCB7IHVzZUNhcnRJdGVtcyB9IGZyb20gJy4vdXNlQ2FydEl0ZW1zJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2V0TGluZUl0ZW0oKSB7XG4gIGNvbnN0IGNhcnRJdGVtcyA9IHVzZUNhcnRJdGVtcygpXG5cbiAgZnVuY3Rpb24gZ2V0TGluZUl0ZW0odmFyaWFudElkOiBzdHJpbmcgfCBudW1iZXIpOiBTaG9waWZ5QnV5LkxpbmVJdGVtIHwgbnVsbCB7XG4gICAgaWYgKGNhcnRJdGVtcy5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSBjYXJ0SXRlbXMuZmluZCgoY2FydEl0ZW0pID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmV0dXJuIGNhcnRJdGVtLnZhcmlhbnQuaWQgPT09IHZhcmlhbnRJZFxuICAgIH0pXG5cbiAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBpdGVtXG4gIH1cblxuICByZXR1cm4gZ2V0TGluZUl0ZW1cbn1cbiIsImltcG9ydCB7IHVzZVJlbW92ZUl0ZW1zRnJvbUNhcnQgfSBmcm9tICcuL3VzZVJlbW92ZUl0ZW1zRnJvbUNhcnQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZW1vdmVJdGVtRnJvbUNhcnQoKSB7XG4gIGNvbnN0IHJlbW92ZUl0ZW1zRnJvbUNhcnQgPSB1c2VSZW1vdmVJdGVtc0Zyb21DYXJ0KClcblxuICBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtRnJvbUNhcnQodmFyaWFudElkOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICBpZiAodmFyaWFudElkID09PSAnJyB8fCB2YXJpYW50SWQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpYW50SWQgbXVzdCBub3QgYmUgYmxhbmsgb3IgbnVsbCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbW92ZUl0ZW1zRnJvbUNhcnQoW1N0cmluZyh2YXJpYW50SWQpXSlcbiAgfVxuXG4gIHJldHVybiByZW1vdmVJdGVtRnJvbUNhcnRcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuaW1wb3J0IHsgdXNlR2V0TGluZUl0ZW0gfSBmcm9tICcuL3VzZUdldExpbmVJdGVtJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVtb3ZlSXRlbXNGcm9tQ2FydCgpIHtcbiAgY29uc3QgeyBjbGllbnQsIGNhcnQsIHNldENhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgY29uc3QgZ2V0TGluZUl0ZW0gPSB1c2VHZXRMaW5lSXRlbSgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlSXRlbXNGcm9tQ2FydCh2YXJpYW50SWRzOiBzdHJpbmdbXSkge1xuICAgIGlmIChjYXJ0ID09IG51bGwgfHwgY2xpZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGVkIHJlbW92ZUl0ZW1zRnJvbUNhcnQgdG9vIHNvb24nKVxuICAgIH1cblxuICAgIGlmICh2YXJpYW50SWRzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBpbmNsdWRlIGF0IGxlYXN0IG9uZSBpdGVtIHRvIHJlbW92ZScpXG4gICAgfVxuXG4gICAgY29uc3QgbGluZUl0ZW1JZHMgPSB2YXJpYW50SWRzLm1hcCgodmFyaWFudElkKSA9PiB7XG4gICAgICBjb25zdCBsaW5lSXRlbSA9IGdldExpbmVJdGVtKHZhcmlhbnRJZClcbiAgICAgIGlmIChsaW5lSXRlbSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENvdWxkIG5vdCBmaW5kIGxpbmUgaXRlbSBpbiBjYXJ0IHdpdGggdmFyaWFudCBpZDogJHt2YXJpYW50SWR9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gU3RyaW5nKGxpbmVJdGVtLmlkKVxuICAgIH0pXG5cbiAgICBjb25zdCBuZXdDYXJ0ID0gYXdhaXQgY2xpZW50LmNoZWNrb3V0LnJlbW92ZUxpbmVJdGVtcyhjYXJ0LmlkLCBsaW5lSXRlbUlkcylcbiAgICBzZXRDYXJ0KG5ld0NhcnQpXG4gIH1cblxuICByZXR1cm4gcmVtb3ZlSXRlbXNGcm9tQ2FydFxufVxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTZXRDYXJ0VW5zYWZlKCkge1xuICBjb25zdCB7IHNldENhcnQgfSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgcmV0dXJuIHNldENhcnRcbn1cbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0J1xuXG5pbXBvcnQgeyB1c2VHZXRMaW5lSXRlbSB9IGZyb20gJy4vdXNlR2V0TGluZUl0ZW0nXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVJdGVtUXVhbnRpdHkoKSB7XG4gIGNvbnN0IHsgY2xpZW50LCBjYXJ0LCBzZXRDYXJ0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpXG4gIGNvbnN0IGdldExpbmVJdGVtID0gdXNlR2V0TGluZUl0ZW0oKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1RdWFudGl0eShcbiAgICB2YXJpYW50SWQ6IHN0cmluZyB8IG51bWJlcixcbiAgICBxdWFudGl0eTogbnVtYmVyXG4gICkge1xuICAgIGlmICh2YXJpYW50SWQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgYSB2YXJpYW50IGlkJylcbiAgICB9XG5cbiAgICBpZiAocXVhbnRpdHkgPT0gbnVsbCB8fCBOdW1iZXIocXVhbnRpdHkpIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWFudGl0eSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJylcbiAgICB9XG5cbiAgICBjb25zdCBsaW5lSXRlbSA9IGdldExpbmVJdGVtKHZhcmlhbnRJZClcbiAgICBpZiAobGluZUl0ZW0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJdGVtIHdpdGggdmFyaWFudElkICR7dmFyaWFudElkfSBub3QgaW4gY2FydGApXG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtaWdub3JlXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IG5ld0NhcnQgPSBhd2FpdCBjbGllbnQuY2hlY2tvdXQudXBkYXRlTGluZUl0ZW1zKGNhcnQuaWQsIFtcbiAgICAgIHsgaWQ6IGxpbmVJdGVtLmlkLCBxdWFudGl0eSB9LFxuICAgIF0pXG4gICAgc2V0Q2FydChuZXdDYXJ0KVxuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZUl0ZW1RdWFudGl0eVxufVxuIiwiaW1wb3J0IFNob3BpZnlCdXkgZnJvbSAnc2hvcGlmeS1idXknXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi9rZXlzJ1xuaW1wb3J0IHsgaXNDYXJ0IH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmZ1bmN0aW9uIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICBpZiAoaXNCcm93c2VyKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0KGtleTogc3RyaW5nKSB7XG4gIGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gIGlmICghaXNCcm93c2VyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgaXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgcmV0dXJuIGl0ZW1cbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsQ2FydCgpOiBTaG9waWZ5QnV5LkNhcnQgfCBudWxsIHtcbiAgY29uc3QgZXhpc3RpbmdDYXJ0U3RyaW5nID0gZ2V0KExvY2FsU3RvcmFnZUtleXMuQ0FSVClcbiAgaWYgKGV4aXN0aW5nQ2FydFN0cmluZyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZXhpc3RpbmdDYXJ0ID0gSlNPTi5wYXJzZShleGlzdGluZ0NhcnRTdHJpbmcpXG4gICAgaWYgKCFpc0NhcnQoZXhpc3RpbmdDYXJ0KSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gZXhpc3RpbmdDYXJ0IGFzIFNob3BpZnlCdXkuQ2FydFxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBMb2NhbFN0b3JhZ2UgPSB7XG4gIGdldCxcbiAgc2V0LFxuICBnZXRJbml0aWFsQ2FydCxcbn1cbiIsImltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4vTG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlS2V5cyB9IGZyb20gJy4va2V5cydcblxuZXhwb3J0IHsgTG9jYWxTdG9yYWdlLCBMb2NhbFN0b3JhZ2VLZXlzIH1cbiIsImNvbnN0IENBUlQgPSAnc2hvcGlmeV9sb2NhbF9zdG9yZV9fY2FydCdcbmNvbnN0IENIRUNLT1VUX0lEID0gJ3Nob3BpZnlfbG9jYWxfc3RvcmVfX2NoZWNrb3V0X2lkJ1xuXG5leHBvcnQgY29uc3QgTG9jYWxTdG9yYWdlS2V5cyA9IHtcbiAgQ0FSVCxcbiAgQ0hFQ0tPVVRfSUQsXG59XG4iLCJpbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIExvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuL0xvY2FsU3RvcmFnZSdcbmltcG9ydCB7IGlzQ2FydCB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCB7IExvY2FsU3RvcmFnZSwgTG9jYWxTdG9yYWdlS2V5cywgaXNDYXJ0IH1cbiIsIi8qIFxuICBwcmVwYXJlVmFyaWFudHNXaXRoT3B0aW9ucygpXG5cbiAgVGhpcyBmdW5jdGlvbiBjaGFuZ2VzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHZhcmlhbnRzIHRvXG4gIG1vcmUgZWFzaWx5IGdldCBhdCB0aGVpciBvcHRpb25zLiBUaGUgb3JpZ2luYWwgZGF0YSBcbiAgc3RydWN0dXJlIGxvb2tzIGxpa2UgdGhpczpcblxuICB7XG4gICAgXCJzaG9waWZ5SWRcIjogXCJaMmxrT2k4dmMyaHZjR2xtZVM5UWNtOWtkV04wVm1GeWFXRnVkQzh6TVRjNE5EUTRNVEF6TURFNE9BPT1cIixcbiAgICBcInNlbGVjdGVkT3B0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkNvbG9yXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJSZWRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICBcInZhbHVlXCI6IFwiU21hbGxcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcblxuICBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgdGhhdCBhbmQgb3V0cHV0cyBhIGRhdGEgc3RydWN0dXJlIHRoYXQgbG9va3MgbGlrZSB0aGlzOlxuXG4gIHtcbiAgICBcInNob3BpZnlJZFwiOiBcIloybGtPaTh2YzJodmNHbG1lUzlRY205a2RXTjBWbUZ5YVdGdWRDOHpNVGM0TkRRNE1UQXpNREU0T0E9PVwiLFxuICAgIFwiY29sb3JcIjogXCJSZWRcIixcbiAgICBcInNpemVcIjogXCJTbWFsbFwiXG4gIH0sXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZVZhcmlhbnRzV2l0aE9wdGlvbnMoXG4gIHZhcmlhbnRzOiBhbnlbXVxuICAvLyB2YXJpYW50czogUmVhZG9ubHk8U2hvcGlmeUJ1eS5Qcm9kdWN0VmFyaWFudFtdPlxuKSB7XG4gIHJldHVybiB2YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IHtcbiAgICAvLyBUT0RPOiBsb29rIGludG8gdHlwZXMsIHByb2IgbmVlZCB1cGRhdGUgaW4gQHR5cGVzL3Nob3BpZnktYnV5XG4gICAgLy8gY29udmVydCB0aGUgb3B0aW9ucyB0byBhIGRpY3Rpb25hcnkgaW5zdGVhZCBvZiBhbiBhcnJheVxuICAgIGNvbnN0IG9wdGlvbnNEaWN0aW9uYXJ5ID0gdmFyaWFudC5zZWxlY3RlZE9wdGlvbnM/LnJlZHVjZShcbiAgICAgIChvcHRpb25zOiBhbnksIG9wdGlvbjogYW55KSA9PiB7XG4gICAgICAgIG9wdGlvbnNbYCR7b3B0aW9uPy5uYW1lPy50b0xvd2VyQ2FzZSgpfWBdID0gb3B0aW9uPy52YWx1ZVxuICAgICAgICByZXR1cm4gb3B0aW9uc1xuICAgICAgfSxcbiAgICAgIHt9XG4gICAgKVxuXG4gICAgLy8gcmV0dXJuIGFuIG9iamVjdCB3aXRoIGFsbCBvZiB0aGUgdmFyaWFudCBwcm9wZXJ0aWVzICsgdGhlIG9wdGlvbnMgYXQgdGhlIHRvcCBsZXZlbFxuICAgIHJldHVybiB7XG4gICAgICAuLi5vcHRpb25zRGljdGlvbmFyeSxcbiAgICAgIC4uLnZhcmlhbnQsXG4gICAgfVxuICB9KSBhcyBhbnlbXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJpY2UgPSAocHJpY2U6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZykgPT5cbiAgSW50bC5OdW1iZXJGb3JtYXQodW5kZWZpbmVkLCB7XG4gICAgY3VycmVuY3ksXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICB9KS5mb3JtYXQocGFyc2VGbG9hdChwcmljZSA/IHByaWNlIDogJzAnKSlcblxuLypcbiAgcHJlcGFyZVZhcmlhbnRzSW1hZ2VzKClcblxuICBUaGlzIGZ1bmN0aW9uIGRpc3RpbGxzIHRoZSB2YXJpYW50cyBpbWFnZXMgaW50byBhIG5vbi1yZWR1bmRhbnRcbiAgZ3JvdXAgdGhhdCBpbmNsdWRlcyBhbiBvcHRpb24gJ2tleScgKG1vc3QgbGlrZWx5IGNvbG9yKS4gVGhlXG4gIGRhdGFzdHJ1Y3R1cmUgY29taW5nIGludG8gdGhpcyBmdW5jdGlvbiBsb29rcyBsaWtlIHRoaXM6XG5cbiAge1xuICAgIFwic2hvcGlmeUlkXCI6IFwiWjJsa09pOHZjMmh2Y0dsbWVTOVFjbTlrZFdOMFZtRnlhV0Z1ZEM4ek1UYzRORFE0TVRBek1ERTRPQT09XCIsXG4gICAgXCJpbWFnZVwiOiBpbWFnZTEsXG4gICAgXCJjb2xvclwiOiBcIlJlZFwiLFxuICAgIFwic2l6ZVwiOiBcIlNtYWxsXCJcbiAgfSxcbiAge1xuICAgIFwic2hvcGlmeUlkXCI6IFwiWjJsa09pOHZjMmh2Y0dsbWVTOVFjbTlrZFdOMFZtRnlhVzFsMkM4ek1UYzRORFE0TVRBek1ERTRPQT09XCIsXG4gICAgXCJpbWFnZVwiOiBpbWFnZTEsXG4gICAgXCJjb2xvclwiOiBcIlJlZFwiLFxuICAgIFwic2l6ZVwiOiBcIk1lZGl1bVwiXG4gIH0sXG5cbiAgQW5kIGNvbmRlbnNlcyB0aGVtIHNvIHRoYXQgdGhlcmUgaXMgb25seSBvbmUgdW5pcXVlXG4gIGltYWdlIHBlciBrZXkgdmFsdWU6XG5cbiAge1xuICAgIFwiaW1hZ2VcIjogaW1hZ2UxLFxuICAgIFwiY29sb3JcIjogXCJSZWRcIixcbiAgfSxcbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlVmFyaWFudHNJbWFnZXMoXG4gIHZhcmlhbnRzOiBhbnlbXSxcbiAgLy8gdmFyaWFudHM6IFJlYWRvbmx5PEdhdHNieVR5cGVzLlNob3BpZnlQcm9kdWN0VmFyaWFudFtdPixcbiAgb3B0aW9uS2V5OiBhbnlcbik6IGFueVtdIHtcbiAgLy8gR28gdGhyb3VnaCB0aGUgdmFyaWFudHMgYW5kIHJlZHVjZSB0aGVtIGludG8gbm9uLXJlZHVuZGFudFxuICAvLyBpbWFnZXMgYnkgb3B0aW9uS2V5LiBPdXRwdXQgbG9va3MgbGlrZSB0aGlzOlxuICAvLyB7XG4gIC8vICAgW29wdGlvbktleV06IGltYWdlXG4gIC8vIH1cbiAgY29uc3QgaW1hZ2VEaWN0aW9uYXJ5ID0gdmFyaWFudHMucmVkdWNlPFJlY29yZDxzdHJpbmcsIFNob3BpZnlCdXkuSW1hZ2U+PihcbiAgICAoaW1hZ2VzLCB2YXJpYW50KSA9PiB7XG4gICAgICBpZiAodmFyaWFudFtvcHRpb25LZXldKSB7XG4gICAgICAgIGltYWdlc1t2YXJpYW50W29wdGlvbktleV1dID0gdmFyaWFudC5pbWFnZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGltYWdlc1xuICAgIH0sXG4gICAge31cbiAgKVxuXG4gIC8vIHByZXBhcmUgYW4gYXJyYXkgb2YgaW1hZ2Ugb2JqZWN0cyB0aGF0IGluY2x1ZGUgYm90aCB0aGUgaW1hZ2VcbiAgLy8gYW5kIHRoZSBvcHRpb25rZXkgdmFsdWUuXG4gIGNvbnN0IGltYWdlcyA9IE9iamVjdC5rZXlzKGltYWdlRGljdGlvbmFyeSkubWFwKChrZXkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgW29wdGlvbktleV06IGtleSxcbiAgICAgIHNyYzogaW1hZ2VEaWN0aW9uYXJ5W2tleV0sXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbWFnZXNcbn1cbiIsImV4cG9ydCB7IGlzQ2FydCB9IGZyb20gJy4vaXNDYXJ0J1xuIiwiaW1wb3J0IFNob3BpZnlCdXkgZnJvbSAnc2hvcGlmeS1idXknXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgZnVuY3Rpb24gaXNDYXJ0KHBvdGVudGlhbENhcnQ6IGFueSk6IHBvdGVudGlhbENhcnQgaXMgU2hvcGlmeUJ1eS5DYXJ0IHtcbiAgcmV0dXJuIChcbiAgICBwb3RlbnRpYWxDYXJ0ICE9IG51bGwgJiZcbiAgICBwb3RlbnRpYWxDYXJ0LmlkICE9IG51bGwgJiZcbiAgICBwb3RlbnRpYWxDYXJ0LndlYlVybCAhPSBudWxsICYmXG4gICAgcG90ZW50aWFsQ2FydC5saW5lSXRlbXMgIT0gbnVsbCAmJlxuICAgIHBvdGVudGlhbENhcnQudHlwZSAhPSBudWxsICYmXG4gICAgcG90ZW50aWFsQ2FydC50eXBlLm5hbWUgPT09ICdDaGVja291dCcgJiZcbiAgICBwb3RlbnRpYWxDYXJ0LnR5cGUua2luZCA9PT0gJ09CSkVDVCdcbiAgKVxufVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBsb2FkZXI/OiBJbWFnZUxvYWRlclxuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbLi4uc2l6ZXMubWF0Y2hBbGwoLyhefFxccykoMT9cXGQ/XFxkKXZ3L2cpXS5tYXAoKG0pID0+XG4gICAgICBwYXJzZUludChtWzJdKVxuICAgIClcbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHshaXNWaXNpYmxlICYmIChcbiAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgey4uLmdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICApfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRldGVjdERvbWFpbkxvY2FsZShcbiAgZG9tYWluSXRlbXM6XG4gICAgfCBBcnJheTx7XG4gICAgICAgIGh0dHA/OiBib29sZWFuXG4gICAgICAgIGRvbWFpbjogc3RyaW5nXG4gICAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgICBkZWZhdWx0TG9jYWxlOiBzdHJpbmdcbiAgICAgIH0+XG4gICAgfCB1bmRlZmluZWQsXG4gIGhvc3RuYW1lPzogc3RyaW5nLFxuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGxldCBkb21haW5JdGVtOlxuICAgIHwge1xuICAgICAgICBodHRwPzogYm9vbGVhblxuICAgICAgICBkb21haW46IHN0cmluZ1xuICAgICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgICAgZGVmYXVsdExvY2FsZTogc3RyaW5nXG4gICAgICB9XG4gICAgfCB1bmRlZmluZWRcblxuICBpZiAoZG9tYWluSXRlbXMpIHtcbiAgICBpZiAoZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gZGV0ZWN0ZWRMb2NhbGUudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkb21haW5JdGVtcykge1xuICAgICAgLy8gcmVtb3ZlIHBvcnQgaWYgcHJlc2VudFxuICAgICAgY29uc3QgZG9tYWluSG9zdG5hbWUgPSBpdGVtLmRvbWFpbj8uc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpXG4gICAgICBpZiAoXG4gICAgICAgIGhvc3RuYW1lID09PSBkb21haW5Ib3N0bmFtZSB8fFxuICAgICAgICBkZXRlY3RlZExvY2FsZSA9PT0gaXRlbS5kZWZhdWx0TG9jYWxlLnRvTG93ZXJDYXNlKCkgfHxcbiAgICAgICAgaXRlbS5sb2NhbGVzPy5zb21lKChsb2NhbGUpID0+IGxvY2FsZS50b0xvd2VyQ2FzZSgpID09PSBkZXRlY3RlZExvY2FsZSlcbiAgICAgICkge1xuICAgICAgICBkb21haW5JdGVtID0gaXRlbVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb21haW5JdGVtXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhcyksIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iXSwic291cmNlUm9vdCI6IiJ9