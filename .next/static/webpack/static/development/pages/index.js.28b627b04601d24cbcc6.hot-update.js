webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/ListCover/index.js":
/*!***************************************!*\
  !*** ./containers/ListCover/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListCover; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./containers/ListCover/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CardProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CardProfile */ "./components/CardProfile/index.js");

var _jsxFileName = "/mnt/d/Tenomad/favv/containers/ListCover/index.js";




function ListCover() {
  var profiles = [{
    id: 1,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=11'
  }, {
    id: 2,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=20'
  }, {
    id: 3,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=24'
  }, {
    id: 4,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=1'
  }, {
    id: 5,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=2'
  }, {
    id: 6,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=3'
  }, {
    id: 7,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=4'
  }];
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), profiles.map(function (profile) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CardProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: profile.id,
      profile: profile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
  })));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_HeaderHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/HeaderHome */ "./containers/HeaderHome/index.js");
/* harmony import */ var _containers_SliderProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/SliderProfile */ "./containers/SliderProfile/index.js");
/* harmony import */ var _containers_ListCover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/ListCover */ "./containers/ListCover/index.js");
var _jsxFileName = "/mnt/d/Tenomad/favv/pages/index.js";





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_HeaderHome__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_SliderProfile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_ListCover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.28b627b04601d24cbcc6.hot-update.js.map