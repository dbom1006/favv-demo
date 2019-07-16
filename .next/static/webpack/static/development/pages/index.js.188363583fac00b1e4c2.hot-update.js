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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CardProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CardProfile */ "./components/CardProfile/index.js");

var _jsxFileName = "/mnt/d/Tenomad/favv/containers/SliderProfile/index.js";




function SliderProfile() {
  var profiles = [{
    id: 1,
    name: '셀럽이름',
    avatar: 'https://i.pravatar.cc/300?u=11'
  }, {
    id: 2,
    name: '일이삼사오육칠팔구십',
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
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profiles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), profiles.map(function (profile) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CardProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: profile.id,
      profile: profile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    });
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.188363583fac00b1e4c2.hot-update.js.map