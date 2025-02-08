"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const IndexPage = ({
  data
}) => {
  const posts = data.allMarkdownRemark.nodes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Welcome to My Blog"), posts.map(post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    key: post.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, post.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, post.frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, post.frontmatter.description))));
};
const query = "2269715183";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map