module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/posts/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/larissa/Documentos/01-Front-Rocket/aula-03-ignews/src/pages/posts/[slug].tsx\";\n\n\n\n\n\nfunction Post({\n  post\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [post.title, \" | Ignews\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.post,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n          children: post.updatedAt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postContent,\n          dangerouslySetInnerHTML: {\n            __html: post.content\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getServerSideProps = async ({\n  req,\n  params\n}) => {\n  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"getSession\"])({\n    req\n  });\n  const {\n    slug\n  } = params; // if (!session?.activeSubscription) {\n  //   return {\n  //     redirect: {\n  //       destination: '/',\n  //       permanent: false,\n  //     }\n  //   }\n  // }\n\n  const prismic = Object(_services_prismic__WEBPACK_IMPORTED_MODULE_4__[\"getPrismicClient\"])(req);\n  const response = await prismic.getByUID('post', String(slug), {});\n  const post = {\n    slug,\n    title: prismic_dom__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].asText(response.data.title),\n    content: prismic_dom__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].asHtml(response.data.content),\n    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {\n      day: '2-digit',\n      month: '2-digit',\n      year: 'numeric'\n    })\n  };\n  return {\n    props: {\n      post\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeD9kMDUzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ1cGRhdGVkQXQiLCJwb3N0Q29udGVudCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJwYXJhbXMiLCJzZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInNsdWciLCJwcmlzbWljIiwiZ2V0UHJpc21pY0NsaWVudCIsInJlc3BvbnNlIiwiZ2V0QnlVSUQiLCJTdHJpbmciLCJSaWNoVGV4dCIsImFzVGV4dCIsImRhdGEiLCJhc0h0bWwiLCJEYXRlIiwibGFzdF9wdWJsaWNhdGlvbl9kYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBbUM7QUFDaEQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQVFBLElBQUksQ0FBQ0MsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFNLGVBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsU0FBeEI7QUFBQSw2QkFDRTtBQUFTLGlCQUFTLEVBQUVELHdEQUFNLENBQUNGLElBQTNCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLG9CQUFPRCxJQUFJLENBQUNJO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQ0UsbUJBQVMsRUFBRUYsd0RBQU0sQ0FBQ0csV0FEcEI7QUFFRSxpQ0FBdUIsRUFBRTtBQUFFQyxrQkFBTSxFQUFFTixJQUFJLENBQUNPO0FBQWY7QUFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQWlCRDtBQUVNLE1BQU1DLGtCQUFzQyxHQUFHLE9BQU87QUFBRUMsS0FBRjtBQUFPQztBQUFQLENBQVAsS0FBMkI7QUFFL0UsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLG1FQUFVLENBQUM7QUFBRUg7QUFBRixHQUFELENBQWhDO0FBQ0EsUUFBTztBQUFFSTtBQUFGLE1BQVdILE1BQWxCLENBSCtFLENBSy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBTUksT0FBTyxHQUFHQywwRUFBZ0IsQ0FBQ04sR0FBRCxDQUFoQztBQUNBLFFBQU1PLFFBQVEsR0FBRyxNQUFNRixPQUFPLENBQUNHLFFBQVIsQ0FBaUIsTUFBakIsRUFBeUJDLE1BQU0sQ0FBQ0wsSUFBRCxDQUEvQixFQUF1QyxFQUF2QyxDQUF2QjtBQUNBLFFBQU1iLElBQUksR0FBRztBQUNYYSxRQURXO0FBRVhaLFNBQUssRUFBRWtCLG9EQUFRLENBQUNDLE1BQVQsQ0FBZ0JKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjcEIsS0FBOUIsQ0FGSTtBQUdYTSxXQUFPLEVBQUVZLG9EQUFRLENBQUNHLE1BQVQsQ0FBZ0JOLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjZCxPQUE5QixDQUhFO0FBSVhILGFBQVMsRUFBRSxJQUFJbUIsSUFBSixDQUFTUCxRQUFRLENBQUNRLHFCQUFsQixFQUF5Q0Msa0JBQXpDLENBQTRELE9BQTVELEVBQXFFO0FBQzlFQyxTQUFHLEVBQUUsU0FEeUU7QUFFOUVDLFdBQUssRUFBRSxTQUZ1RTtBQUc5RUMsVUFBSSxFQUFFO0FBSHdFLEtBQXJFO0FBSkEsR0FBYjtBQVVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0w3QjtBQURLO0FBREYsR0FBUDtBQUtELENBL0JNIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1kb21cIlxuaW1wb3J0IHsgZ2V0UHJpc21pY0NsaWVudCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcmlzbWljXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3QubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgcG9zdDoge1xuICAgIHNsdWc6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9OiBQb3N0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX0gfCBJZ25ld3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHRpbWU+e3Bvc3QudXBkYXRlZEF0fTwvdGltZT5cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENvbnRlbnR9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fSAvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG5cbiAgKVxufSBcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVxLCBwYXJhbXMgfSkgPT4ge1xuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXG4gIGNvbnN0ICB7IHNsdWcgfSA9IHBhcmFtcztcblxuICAvLyBpZiAoIXNlc3Npb24/LmFjdGl2ZVN1YnNjcmlwdGlvbikge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICByZWRpcmVjdDoge1xuICAvLyAgICAgICBkZXN0aW5hdGlvbjogJy8nLFxuICAvLyAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KHJlcSlcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEKCdwb3N0JywgU3RyaW5nKHNsdWcpLCB7fSlcbiAgY29uc3QgcG9zdCA9IHtcbiAgICBzbHVnLFxuICAgIHRpdGxlOiBSaWNoVGV4dC5hc1RleHQocmVzcG9uc2UuZGF0YS50aXRsZSksXG4gICAgY29udGVudDogUmljaFRleHQuYXNIdG1sKHJlc3BvbnNlLmRhdGEuY29udGVudCksXG4gICAgdXBkYXRlZEF0OiBuZXcgRGF0ZShyZXNwb25zZS5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygncHQtQlInLCB7XG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICB9KVxuICB9O1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

/***/ }),

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__2m5md\",\n\t\"post\": \"post_post__3quL2\",\n\t\"postContent\": \"post_postContent__B7qN9\",\n\t\"previewContent\": \"post_previewContent__oPpak\",\n\t\"continueReading\": \"post_continueReading__2RmZn\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcz85ZmUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInBvc3RfY29udGFpbmVyX18ybTVtZFwiLFxuXHRcInBvc3RcIjogXCJwb3N0X3Bvc3RfXzNxdUwyXCIsXG5cdFwicG9zdENvbnRlbnRcIjogXCJwb3N0X3Bvc3RDb250ZW50X19CN3FOOVwiLFxuXHRcInByZXZpZXdDb250ZW50XCI6IFwicG9zdF9wcmV2aWV3Q29udGVudF9fb1BwYWtcIixcblx0XCJjb250aW51ZVJlYWRpbmdcIjogXCJwb3N0X2NvbnRpbnVlUmVhZGluZ19fMlJtWm5cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/*! exports provided: getPrismicClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPrismicClient\", function() { return getPrismicClient; });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default.a.client(process.env.PRISMIC_ENDPOINT, {\n    req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz84YzUwIl0sIm5hbWVzIjpbImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORFBPSU5UIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNBLGdCQUFULENBQTBCQyxHQUExQixFQUF5QztBQUM5QyxRQUFNQyxPQUFPLEdBQUdDLHdEQUFPLENBQUNDLE1BQVIsQ0FDZEMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURFLEVBRWQ7QUFDRU4sT0FERjtBQUVFTyxlQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUYzQixHQUZjLENBQWhCO0FBT0EsU0FBT1AsT0FBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL3ByaXNtaWMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJpc21pYyBmcm9tICdAcHJpc21pY2lvL2NsaWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmlzbWljQ2xpZW50KHJlcT86IHVua25vd24pIHtcbiAgY29uc3QgcHJpc21pYyA9IFByaXNtaWMuY2xpZW50KFxuICAgIHByb2Nlc3MuZW52LlBSSVNNSUNfRU5EUE9JTlQsIFxuICAgIHtcbiAgICAgIHJlcSxcbiAgICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5QUklTTUlDX0FDQ0VTU19UT0tFTlxuICAgIH1cbiAgKVxuICByZXR1cm4gcHJpc21pYztcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prismicio/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21pY2lvL2NsaWVudFwiPzdiNTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtaWNpby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21pY2lvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prismicio/client\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLWRvbVwiPzhjNTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicHJpc21pYy1kb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWljLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-dom\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });