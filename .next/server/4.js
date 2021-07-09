exports.ids = [4];
exports.modules = {

/***/ "./components/ui/LazyImageCarousel.tsx":
/*!*********************************************!*\
  !*** ./components/ui/LazyImageCarousel.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pure-react-carousel */ "pure-react-carousel");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ "./node_modules/pure-react-carousel/dist/react-carousel.es.css");
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Bruno\\Desktop\\tienda\\nextjs-shopify-master\\components\\ui\\LazyImageCarousel.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsxRuntime classic */

/** @jsx jsx */





const CustomDotGroup = (_ref) => {
  let {
    images,
    onThumbnailClick
  } = _ref,
      imageProps = _objectWithoutProperties(_ref, ["images", "onThumbnailClick"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    sx: {
      textAlign: 'center',
      position: 'absolute',
      left: '50%',
      maxWidth: '100%',
      overflow: 'auto',
      display: 'flex',
      bottom: 10,
      transform: 'translatex(-50%)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, images.map((image, slide) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    key: slide,
    sx: {
      height: 80,
      width: 80
    },
    as: "span",
    onClick: () => onThumbnailClick === null || onThumbnailClick === void 0 ? void 0 : onThumbnailClick(slide),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Dot"], {
    slide: slide,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
    src: image.src
  }, imageProps), {}, {
    height: 80,
    width: 80,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }))))));
};

const ImageCarousel = (_ref2) => {
  let {
    images,
    onThumbnailClick,
    showZoom,
    currentSlide
  } = _ref2,
      imageProps = _objectWithoutProperties(_ref2, ["images", "onThumbnailClick", "showZoom", "currentSlide"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselProvider"], {
    currentSlide: currentSlide,
    naturalSlideWidth: 1,
    naturalSlideHeight: 1,
    hasMasterSpinner: false,
    totalSlides: images.length,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 3
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, images.map((image, index) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Slide"], {
    index: index,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, showZoom ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["ImageWithZoom"], {
    src: image.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({
    src: image.src
  }, imageProps), {}, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }))))), showZoom && Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CustomDotGroup, _objectSpread(_objectSpread({}, imageProps), {}, {
    onThumbnailClick: onThumbnailClick,
    images: images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageCarousel);

/***/ }),

/***/ "./node_modules/pure-react-carousel/dist/react-carousel.es.css":
/*!*********************************************************************!*\
  !*** ./node_modules/pure-react-carousel/dist/react-carousel.es.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0xhenlJbWFnZUNhcm91c2VsLnRzeCJdLCJuYW1lcyI6WyJDdXN0b21Eb3RHcm91cCIsImltYWdlcyIsIm9uVGh1bWJuYWlsQ2xpY2siLCJpbWFnZVByb3BzIiwidGV4dEFsaWduIiwicG9zaXRpb24iLCJsZWZ0IiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJib3R0b20iLCJ0cmFuc2Zvcm0iLCJtYXAiLCJpbWFnZSIsInNsaWRlIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJJbWFnZUNhcm91c2VsIiwic2hvd1pvb20iLCJjdXJyZW50U2xpZGUiLCJsZW5ndGgiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUVBOztBQUVBLE1BQU1BLGNBQW1ELEdBQUcsVUFJdEQ7QUFBQSxNQUp1RDtBQUMzREMsVUFEMkQ7QUFFM0RDO0FBRjJELEdBSXZEO0FBQUEsTUFEREMsVUFDQzs7QUFDSixTQUNFO0FBQ0UsTUFBRSxFQUFFO0FBQ0ZDLGVBQVMsRUFBRSxRQURUO0FBRUZDLGNBQVEsRUFBRSxVQUZSO0FBR0ZDLFVBQUksRUFBRSxLQUhKO0FBSUZDLGNBQVEsRUFBRSxNQUpSO0FBS0ZDLGNBQVEsRUFBRSxNQUxSO0FBTUZDLGFBQU8sRUFBRSxNQU5QO0FBT0ZDLFlBQU0sRUFBRSxFQVBOO0FBUUZDLGVBQVMsRUFBRTtBQVJULEtBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlHVixNQUFNLENBQUNXLEdBQVAsQ0FBVyxDQUFDQyxLQUFELEVBQVFDLEtBQVIsS0FDVixxREFBQyxtREFBRDtBQUNFLE9BQUcsRUFBRUEsS0FEUDtBQUVFLE1BQUUsRUFBRTtBQUFFQyxZQUFNLEVBQUUsRUFBVjtBQUFjQyxXQUFLLEVBQUU7QUFBckIsS0FGTjtBQUdFLE1BQUUsRUFBQyxNQUhMO0FBSUUsV0FBTyxFQUFFLE1BQU1kLGdCQUFOLGFBQU1BLGdCQUFOLHVCQUFNQSxnQkFBZ0IsQ0FBR1ksS0FBSCxDQUpqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUscURBQUMsdURBQUQ7QUFBSyxTQUFLLEVBQUVBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGlEQUFEO0FBQ0UsT0FBRyxFQUFFRCxLQUFLLENBQUNJO0FBRGIsS0FFTWQsVUFGTjtBQUdFLFVBQU0sRUFBRSxFQUhWO0FBSUUsU0FBSyxFQUFFLEVBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBTkYsQ0FERCxDQVpILENBREY7QUFnQ0QsQ0FyQ0Q7O0FBcURBLE1BQU1lLGFBQXFDLEdBQUc7QUFBQSxNQUFDO0FBQzdDakIsVUFENkM7QUFFN0NDLG9CQUY2QztBQUc3Q2lCLFlBSDZDO0FBSTdDQztBQUo2QyxHQUFEO0FBQUEsTUFLekNqQixVQUx5Qzs7QUFBQSxTQU81QyxxREFBQyxvRUFBRDtBQUNFLGdCQUFZLEVBQUVpQixZQURoQjtBQUVFLHFCQUFpQixFQUFFLENBRnJCO0FBR0Usc0JBQWtCLEVBQUUsQ0FIdEI7QUFJRSxvQkFBZ0IsRUFBRSxLQUpwQjtBQUtFLGVBQVcsRUFBRW5CLE1BQU0sQ0FBQ29CLE1BTHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSSxxREFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dwQixNQUFNLENBQUNXLEdBQVAsQ0FBVyxDQUFDQyxLQUFELEVBQVFTLEtBQVIsS0FDVixxREFBQyx5REFBRDtBQUFPLFNBQUssRUFBRUEsS0FBZDtBQUFxQixPQUFHLEVBQUVBLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsUUFBUSxHQUNQLHFEQUFDLGlFQUFEO0FBQWUsT0FBRyxFQUFFTixLQUFLLENBQUNJLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETyxHQUdQLHFEQUFDLGlEQUFEO0FBQU8sT0FBRyxFQUFFSixLQUFLLENBQUNJO0FBQWxCLEtBQTJCZCxVQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkosQ0FERCxDQURILENBUEosRUFrQktnQixRQUFRLElBQ1AscURBQUMsY0FBRCxrQ0FDTWhCLFVBRE47QUFFRSxvQkFBZ0IsRUFBRUQsZ0JBRnBCO0FBR0UsVUFBTSxFQUFFRCxNQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuQk4sQ0FQNEM7QUFBQSxDQUE5Qzs7QUFvQ2VpQiw0RUFBZixFIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEljb25CdXR0b24gfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBDYXJvdXNlbFByb3ZpZGVyLFxuICBJbWFnZVdpdGhab29tLFxuICBTbGlkZSxcbiAgU2xpZGVyLFxuICBEb3QsXG59IGZyb20gJ3B1cmUtcmVhY3QtY2Fyb3VzZWwnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuaW1wb3J0ICdwdXJlLXJlYWN0LWNhcm91c2VsL2Rpc3QvcmVhY3QtY2Fyb3VzZWwuZXMuY3NzJ1xuXG5jb25zdCBDdXN0b21Eb3RHcm91cDogRkM8T21pdDxJbWFnZUNhcm91c2VsUHJvcHMsICdhbHQnPj4gPSAoe1xuICBpbWFnZXMsXG4gIG9uVGh1bWJuYWlsQ2xpY2ssXG4gIC4uLmltYWdlUHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzeD17e1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYm90dG9tOiAxMCxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRleCgtNTAlKScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgc2xpZGUpID0+IChcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBrZXk9e3NsaWRlfVxuICAgICAgICAgIHN4PXt7IGhlaWdodDogODAsIHdpZHRoOiA4MCB9fVxuICAgICAgICAgIGFzPVwic3BhblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25UaHVtYm5haWxDbGljaz8uKHNsaWRlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxEb3Qgc2xpZGU9e3NsaWRlfT5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlLnNyY31cbiAgICAgICAgICAgICAgey4uLmltYWdlUHJvcHN9XG4gICAgICAgICAgICAgIGhlaWdodD17ODB9XG4gICAgICAgICAgICAgIHdpZHRoPXs4MH1cbiAgICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICAgIDwvRG90PlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgdHlwZSBJbWFnZUNhcm91c2VsUHJvcHMgPSB7XG4gIHNob3dab29tPzogYm9vbGVhblxuICBpbWFnZXM6IEFycmF5PHsgc3JjOiBzdHJpbmcgfT5cbiAgYWx0OiBzdHJpbmdcbiAgb25UaHVtYm5haWxDbGljaz86IChpbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgbGF5b3V0PzogJ2ZpeGVkJyB8ICdpbnRyaW5zaWMnIHwgJ3Jlc3BvbnNpdmUnIHwgdW5kZWZpbmVkXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogJ2VhZ2VyJyB8ICdsYXp5J1xuICBzaXplcz86IHN0cmluZ1xuICBjdXJyZW50U2xpZGU/OiBudW1iZXJcbn1cblxuY29uc3QgSW1hZ2VDYXJvdXNlbDogRkM8SW1hZ2VDYXJvdXNlbFByb3BzPiA9ICh7XG4gIGltYWdlcyxcbiAgb25UaHVtYm5haWxDbGljayxcbiAgc2hvd1pvb20sXG4gIGN1cnJlbnRTbGlkZSxcbiAgLi4uaW1hZ2VQcm9wc1xufSkgPT4gKFxuICA8Q2Fyb3VzZWxQcm92aWRlclxuICAgIGN1cnJlbnRTbGlkZT17Y3VycmVudFNsaWRlfVxuICAgIG5hdHVyYWxTbGlkZVdpZHRoPXsxfVxuICAgIG5hdHVyYWxTbGlkZUhlaWdodD17MX1cbiAgICBoYXNNYXN0ZXJTcGlubmVyPXtmYWxzZX1cbiAgICB0b3RhbFNsaWRlcz17aW1hZ2VzLmxlbmd0aH1cbiAgPlxuICAgICAgPFNsaWRlcj5cbiAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTbGlkZSBpbmRleD17aW5kZXh9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAge3Nob3dab29tID8gKFxuICAgICAgICAgICAgICA8SW1hZ2VXaXRoWm9vbSBzcmM9e2ltYWdlLnNyY30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlLnNyY30gey4uLmltYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICkpfVxuICAgICAgPC9TbGlkZXI+XG4gICAgICB7c2hvd1pvb20gJiYgKFxuICAgICAgICA8Q3VzdG9tRG90R3JvdXBcbiAgICAgICAgICB7Li4uaW1hZ2VQcm9wc31cbiAgICAgICAgICBvblRodW1ibmFpbENsaWNrPXtvblRodW1ibmFpbENsaWNrfVxuICAgICAgICAgIGltYWdlcz17aW1hZ2VzfVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICA8L0Nhcm91c2VsUHJvdmlkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2Fyb3VzZWxcbiJdLCJzb3VyY2VSb290IjoiIn0=