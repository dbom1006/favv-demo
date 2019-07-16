webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/SliderProfile/index.js":
/*!*******************************************!*\
  !*** ./containers/SliderProfile/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderProfile; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./containers/SliderProfile/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CardProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CardProfile */ "./components/CardProfile/index.js");

var _jsxFileName = "/mnt/d/Tenomad/favv/containers/SliderProfile/index.js";





function SliderProfile() {
  var profiles = [{
    id: 1,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=11'
  }, {
    id: 2,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=21'
  }, {
    id: 3,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=33'
  }, {
    id: 4,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=40'
  }, {
    id: 5,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=55'
  }, {
    id: 6,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=66'
  }, {
    id: 7,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=77'
  }];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), profiles.map(function (profile) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CardProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: profile.id,
      profile: profile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    });
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.1c96a83e4739818abfed.hot-update.js.map