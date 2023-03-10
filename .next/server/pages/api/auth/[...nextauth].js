"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/connectDB.js":
/*!**************************!*\
  !*** ./lib/connectDB.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        console.log(\"Already connected.\");\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {}, (err)=>{\n        if (err) throw err;\n        console.log(\"Connected to mongodb.\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29ubmVjdERCLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZLFVBQVk7SUFDMUIsSUFBSUQsMkVBQWtDLEVBQUU7UUFDcENJLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0osQ0FBQztJQUVETCx1REFBZ0IsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUNDLE1BQVE7UUFDbkQsSUFBSUEsS0FBSyxNQUFNQSxJQUFJO1FBQ25CTixRQUFRQyxHQUFHLENBQUM7SUFDaEI7QUFDSjtBQUVBLGlFQUFlSixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX21vcmFsaXNfYXV0aC8uL2xpYi9jb25uZWN0REIuanM/YTQxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgY29ubmVjdGVkLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHt9LCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gbW9uZ29kYi5cIik7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/connectDB.js\n");

/***/ }),

/***/ "(api)/./lib/userSchema.js":
/*!***************************!*\
  !*** ./lib/userSchema.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    profileId: {\n        type: String\n    },\n    bio: {\n        type: String,\n        default: \"This is my Bio\"\n    }\n}, {\n    timestamps: true\n});\nlet Users = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.users) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdXNlclNjaGVtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxXQUFXO1FBQ1RDLE1BQU1DO0lBQ1I7SUFDQUMsS0FBSztRQUNIRixNQUFNQztRQUNORSxTQUFTO0lBQ1g7QUFDRixHQUNBO0lBQUVDLFlBQVksSUFBSTtBQUFDO0FBR3JCLElBQUlDLFFBQVFULDhEQUFxQixJQUFJQSxxREFBYyxDQUFDLFNBQVNDO0FBRTdELGlFQUFlUSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX21vcmFsaXNfYXV0aC8uL2xpYi91c2VyU2NoZW1hLmpzP2ZmZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIHByb2ZpbGVJZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgYmlvOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlRoaXMgaXMgbXkgQmlvXCIsXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmxldCBVc2VycyA9IG1vbmdvb3NlLm1vZGVscy51c2VycyB8fCBtb25nb29zZS5tb2RlbChcInVzZXJzXCIsIHVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VycztcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJwcm9maWxlSWQiLCJ0eXBlIiwiU3RyaW5nIiwiYmlvIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJVc2VycyIsIm1vZGVscyIsInVzZXJzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/userSchema.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_connectDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/connectDB */ \"(api)/./lib/connectDB.js\");\n/* harmony import */ var _lib_userSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/userSchema */ \"(api)/./lib/userSchema.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            name: \"MoralisAuth\",\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    const { message , signature  } = credentials;\n                    await moralis__WEBPACK_IMPORTED_MODULE_2___default().start({\n                        apiKey: process.env.MORALIS_API_KEY\n                    });\n                    const { address , profileId , expirationTime  } = (await moralis__WEBPACK_IMPORTED_MODULE_2___default().Auth.verify({\n                        message,\n                        signature,\n                        network: \"evm\"\n                    })).raw;\n                    const user = {\n                        address,\n                        profileId,\n                        expirationTime,\n                        signature\n                    };\n                    await (0,_lib_connectDB__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                    const MongoUser = await _lib_userSchema__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                        profileId: profileId\n                    });\n                    if (!MongoUser) {\n                        const newUser = new _lib_userSchema__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n                            profileId: profileId\n                        });\n                        await newUser.save();\n                    }\n                    return user;\n                } catch (e) {\n                    // eslint-disable-next-line no-console\n                    console.error(e);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            user && (token.user = user);\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.expires = token.user.expirationTime;\n            session.user = token.user;\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNqQztBQUNIO0FBQ2lCO0FBQ0g7QUFFNUMsaUVBQWVDLGdEQUFRQSxDQUFDO0lBQ3BCSSxXQUFXO1FBQ1BMLHNFQUFtQkEsQ0FBQztZQUNoQk0sTUFBTTtZQUNOQyxhQUFhO2dCQUNUQyxTQUFTO29CQUNMQyxPQUFPO29CQUNQQyxNQUFNO29CQUNOQyxhQUFhO2dCQUNqQjtnQkFDQUMsV0FBVztvQkFDUEgsT0FBTztvQkFDUEMsTUFBTTtvQkFDTkMsYUFBYTtnQkFDakI7WUFDSjtZQUNBLE1BQU1FLFdBQVVOLFdBQVcsRUFBRTtnQkFDekIsSUFBSTtvQkFDQSxNQUFNLEVBQUVDLFFBQU8sRUFBRUksVUFBUyxFQUFFLEdBQUdMO29CQUUvQixNQUFNTCxvREFBYSxDQUFDO3dCQUFFYSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7b0JBQUM7b0JBRTFELE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxVQUFTLEVBQUVDLGVBQWMsRUFBRSxHQUFHLENBQUMsTUFBTW5CLDBEQUFtQixDQUFDO3dCQUFFTTt3QkFBU0k7d0JBQVdZLFNBQVM7b0JBQU0sRUFBQyxFQUFHQyxHQUFHO29CQUV0SCxNQUFNQyxPQUFPO3dCQUFFUDt3QkFBU0M7d0JBQVdDO3dCQUFnQlQ7b0JBQVU7b0JBRTdELE1BQU1ULDBEQUFTQTtvQkFDZixNQUFNd0IsWUFBWSxNQUFNdkIsK0RBQWEsQ0FBQzt3QkFBQ2dCLFdBQVdBO29CQUFTO29CQUUzRCxJQUFHLENBQUNPLFdBQVU7d0JBRVosTUFBTUUsVUFBVSxJQUFJekIsdURBQUtBLENBQUM7NEJBQ3hCZ0IsV0FBV0E7d0JBQ2I7d0JBQ0EsTUFBTVMsUUFBUUMsSUFBSTtvQkFFcEIsQ0FBQztvQkFHRCxPQUFPSjtnQkFDWCxFQUFFLE9BQU9LLEdBQUc7b0JBQ1Isc0NBQXNDO29CQUN0Q0MsUUFBUUMsS0FBSyxDQUFDRjtvQkFDZCxPQUFPLElBQUk7Z0JBQ2Y7WUFDSjtRQUNKO0tBQ0g7SUFDREcsV0FBVztRQUNQLE1BQU1DLEtBQUksRUFBRUMsTUFBSyxFQUFFVixLQUFJLEVBQUUsRUFBRTtZQUN2QkEsUUFBU1UsQ0FBQUEsTUFBTVYsSUFBSSxHQUFHQSxJQUFHO1lBQ3pCLE9BQU9VO1FBQ1g7UUFDQSxNQUFNQyxTQUFRLEVBQUVBLFFBQU8sRUFBRUQsTUFBSyxFQUFFLEVBQUU7WUFDOUJDLFFBQVFDLE9BQU8sR0FBR0YsTUFBTVYsSUFBSSxDQUFDTCxjQUFjO1lBQzNDZ0IsUUFBUVgsSUFBSSxHQUFHVSxNQUFNVixJQUFJO1lBQ3pCLE9BQU9XO1FBQ1g7SUFDSjtJQUNBQSxTQUFTO1FBQ0xFLFVBQVU7SUFDZDtBQUNKLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqc19tb3JhbGlzX2F1dGgvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi9saWIvY29ubmVjdERCJztcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL2xpYi91c2VyU2NoZW1hJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiAnTW9yYWxpc0F1dGgnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMHgwJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzaWduYXR1cmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NpZ25hdHVyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMHgwJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UsIHNpZ25hdHVyZSB9ID0gY3JlZGVudGlhbHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IE1vcmFsaXMuc3RhcnQoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk1PUkFMSVNfQVBJX0tFWSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBhZGRyZXNzLCBwcm9maWxlSWQsIGV4cGlyYXRpb25UaW1lIH0gPSAoYXdhaXQgTW9yYWxpcy5BdXRoLnZlcmlmeSh7IG1lc3NhZ2UsIHNpZ25hdHVyZSwgbmV0d29yazogJ2V2bScgfSkpLnJhdztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHsgYWRkcmVzcywgcHJvZmlsZUlkLCBleHBpcmF0aW9uVGltZSwgc2lnbmF0dXJlIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IE1vbmdvVXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoe3Byb2ZpbGVJZDogcHJvZmlsZUlkfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIU1vbmdvVXNlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXJzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkOiBwcm9maWxlSWRcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICAgICAgICB1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcik7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgICAgICAgIHNlc3Npb24uZXhwaXJlcyA9IHRva2VuLnVzZXIuZXhwaXJhdGlvblRpbWU7XHJcbiAgICAgICAgICAgIHNlc3Npb24udXNlciA9IHRva2VuLnVzZXI7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2Vzc2lvbjoge1xyXG4gICAgICAgIHN0cmF0ZWd5OiAnand0JyxcclxuICAgIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsIk5leHRBdXRoIiwiTW9yYWxpcyIsImNvbm5lY3REQiIsIlVzZXJzIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibWVzc2FnZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2lnbmF0dXJlIiwiYXV0aG9yaXplIiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwiYWRkcmVzcyIsInByb2ZpbGVJZCIsImV4cGlyYXRpb25UaW1lIiwiQXV0aCIsInZlcmlmeSIsIm5ldHdvcmsiLCJyYXciLCJ1c2VyIiwiTW9uZ29Vc2VyIiwiZmluZE9uZSIsIm5ld1VzZXIiLCJzYXZlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsImV4cGlyZXMiLCJzdHJhdGVneSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();