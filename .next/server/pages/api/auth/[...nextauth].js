module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/auth/[...nextauth].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default.a.GitHub({\n    clientId: '4612ee36d888d2813e0c',\n    clientSecret: '03b779da28183ebb21f1f1c500d69b3001decdc0',\n    scope: 'read:user'\n  })],\n  callbacks: {\n    async session(session) {\n      try {\n        const userActiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__[\"fauna\"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Get(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Intersection([faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('subscription_by_user_ref'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Get(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Casefold(session.user.email))))), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('subscription_by_status'), \"active\")])));\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: userActiveSubscription\n        });\n      } catch {\n        return session;\n      }\n    },\n\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__[\"fauna\"].query(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].If(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Not(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Create(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Collection('users'), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Get(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Match(faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__[\"query\"].Casefold(user.email)))));\n        return true;\n      } catch {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz83MmNmIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJzY29wZSIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyQWN0aXZlU3Vic2NyaXB0aW9uIiwiZmF1bmEiLCJxdWVyeSIsInEiLCJHZXQiLCJJbnRlcnNlY3Rpb24iLCJNYXRjaCIsIkluZGV4IiwiU2VsZWN0IiwiQ2FzZWZvbGQiLCJ1c2VyIiwiZW1haWwiLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJzaWduSW4iLCJhY2NvdW50IiwicHJvZmlsZSIsIklmIiwiTm90IiwiRXhpc3RzIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFZUEsK0dBQVEsQ0FBQztBQUN0QkMsV0FBUyxFQUFFLENBQ1RDLDBEQUFTLENBQUNDLE1BQVYsQ0FBaUI7QUFDZkMsWUFBUSxFQUFFLHNCQURLO0FBRWZDLGdCQUFZLEVBQUUsMENBRkM7QUFHZkMsU0FBSyxFQUFFO0FBSFEsR0FBakIsQ0FEUyxDQURXO0FBUXRCQyxXQUFTLEVBQUU7QUFDVCxVQUFNQyxPQUFOLENBQWNBLE9BQWQsRUFBdUI7QUFDckIsVUFBSTtBQUNGLGNBQU1DLHNCQUFzQixHQUFHLE1BQU1DLHFEQUFLLENBQUNDLEtBQU4sQ0FDbkNDLDZDQUFDLENBQUNDLEdBQUYsQ0FDRUQsNkNBQUMsQ0FBQ0UsWUFBRixDQUFlLENBQ2JGLDZDQUFDLENBQUNHLEtBQUYsQ0FDRUgsNkNBQUMsQ0FBQ0ksS0FBRixDQUFRLDBCQUFSLENBREYsRUFFRUosNkNBQUMsQ0FBQ0ssTUFBRixDQUNFLEtBREYsRUFFRUwsNkNBQUMsQ0FBQ0MsR0FBRixDQUNFRCw2Q0FBQyxDQUFDRyxLQUFGLENBQ0VILDZDQUFDLENBQUNJLEtBQUYsQ0FBUSxlQUFSLENBREYsRUFFRUosNkNBQUMsQ0FBQ00sUUFBRixDQUFXVixPQUFPLENBQUNXLElBQVIsQ0FBYUMsS0FBeEIsQ0FGRixDQURGLENBRkYsQ0FGRixDQURhLEVBYWJSLDZDQUFDLENBQUNHLEtBQUYsQ0FDRUgsNkNBQUMsQ0FBQ0ksS0FBRixDQUFRLHdCQUFSLENBREYsRUFFRSxRQUZGLENBYmEsQ0FBZixDQURGLENBRG1DLENBQXJDO0FBc0JBLCtDQUNLUixPQURMO0FBRUVhLDRCQUFrQixFQUFFWjtBQUZ0QjtBQUlELE9BM0JELENBMkJFLE1BQU07QUFDTixlQUFPRCxPQUFQO0FBQ0Q7QUFDRixLQWhDUTs7QUFpQ1QsVUFBTWMsTUFBTixDQUFhSCxJQUFiLEVBQW1CSSxPQUFuQixFQUE0QkMsT0FBNUIsRUFBcUM7QUFDbkMsWUFBTTtBQUFFSjtBQUFGLFVBQVlELElBQWxCOztBQUVBLFVBQUk7QUFDRixjQUFNVCxxREFBSyxDQUFDQyxLQUFOLENBQ0pDLDZDQUFDLENBQUNhLEVBQUYsQ0FDRWIsNkNBQUMsQ0FBQ2MsR0FBRixDQUNFZCw2Q0FBQyxDQUFDZSxNQUFGLENBQ0VmLDZDQUFDLENBQUNHLEtBQUYsQ0FDRUgsNkNBQUMsQ0FBQ0ksS0FBRixDQUFRLGVBQVIsQ0FERixFQUVFSiw2Q0FBQyxDQUFDTSxRQUFGLENBQVdDLElBQUksQ0FBQ0MsS0FBaEIsQ0FGRixDQURGLENBREYsQ0FERixFQVNFUiw2Q0FBQyxDQUFDZ0IsTUFBRixDQUNFaEIsNkNBQUMsQ0FBQ2lCLFVBQUYsQ0FBYSxPQUFiLENBREYsRUFFRTtBQUFFQyxjQUFJLEVBQUU7QUFBQ1Y7QUFBRDtBQUFSLFNBRkYsQ0FURixFQWFFUiw2Q0FBQyxDQUFDQyxHQUFGLENBQ0VELDZDQUFDLENBQUNHLEtBQUYsQ0FDRUgsNkNBQUMsQ0FBQ0ksS0FBRixDQUFRLGVBQVIsQ0FERixFQUVFSiw2Q0FBQyxDQUFDTSxRQUFGLENBQVdDLElBQUksQ0FBQ0MsS0FBaEIsQ0FGRixDQURGLENBYkYsQ0FESSxDQUFOO0FBdUJBLGVBQU8sSUFBUDtBQUNELE9BekJELENBeUJFLE1BQU07QUFDTixlQUFPLEtBQVA7QUFDRDtBQUVGOztBQWpFUTtBQVJXLENBQUQsQ0FBdkIiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tICdmYXVuYWRiJztcblxuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCB7IHNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycydcblxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYSc7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvdmlkZXJzLkdpdEh1Yih7XG4gICAgICBjbGllbnRJZDogJzQ2MTJlZTM2ZDg4OGQyODEzZTBjJyxcbiAgICAgIGNsaWVudFNlY3JldDogJzAzYjc3OWRhMjgxODNlYmIyMWYxZjFjNTAwZDY5YjMwMDFkZWNkYzAnLFxuICAgICAgc2NvcGU6ICdyZWFkOnVzZXInXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlckFjdGl2ZVN1YnNjcmlwdGlvbiA9IGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgcS5JbnRlcnNlY3Rpb24oW1xuICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV91c2VyX3JlZicpLFxuICAgICAgICAgICAgICAgIHEuU2VsZWN0KFxuICAgICAgICAgICAgICAgICAgXCJyZWZcIixcbiAgICAgICAgICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHNlc3Npb24udXNlci5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICBxLkluZGV4KCdzdWJzY3JpcHRpb25fYnlfc3RhdHVzJyksXG4gICAgICAgICAgICAgICAgXCJhY3RpdmVcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnNlc3Npb24sXG4gICAgICAgICAgYWN0aXZlU3Vic2NyaXB0aW9uOiB1c2VyQWN0aXZlU3Vic2NyaXB0aW9uXG4gICAgICAgIH0gIFxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2lnbkluKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpIHtcbiAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHVzZXI7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgIHEuSWYoXG4gICAgICAgICAgICBxLk5vdChcbiAgICAgICAgICAgICAgcS5FeGlzdHMoXG4gICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcbiAgICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQodXNlci5lbWFpbClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxLkNyZWF0ZShcbiAgICAgICAgICAgICAgcS5Db2xsZWN0aW9uKCd1c2VycycpLFxuICAgICAgICAgICAgICB7IGRhdGE6IHtlbWFpbH0gfVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcbiAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICB9LFxuICB9XG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/*! exports provided: fauna */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fauna\", function() { return fauna; });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__[\"Client\"]({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLEtBQUssR0FBRyxJQUFJQyw4Q0FBSixDQUFXO0FBQzlCQyxRQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQURVLENBQVgsQ0FBZCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9mYXVuYS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInXG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faunadb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXVuYWRiXCI/OWIwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmYXVuYWRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///faunadb\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });