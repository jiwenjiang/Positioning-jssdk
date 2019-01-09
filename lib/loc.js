(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("loc", [], factory);
	else if(typeof exports === 'object')
		exports["loc"] = factory();
	else
		root["loc"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bluetooth/index.js":
/*!********************************!*\
  !*** ./src/bluetooth/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Created by j_bleach on 2018/10/16 0016.
 */
var INTERVAL = 500; // 服务器时间间隔

var POINTLENTH = 3; // 质心点计算数组长度

var CHANGE_GPS = 5000; // 搜索不到蓝牙5000ms后，切换gps

var blueToothFn = function blueToothFn(target) {
  // const deviceUrl = `https://xz.parkbobo.com/location/device/v1/getAll`;
  var phoneType = "ios";
  var ibeaconArr = []; // 蓝牙地位点集合

  var gpsTimeId = null; // gps定时器标记

  var ua = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(ua)) {
    phoneType = "ios";
  } else if (/android/.test(ua)) {
    phoneType = "android";
  }

  return (
    /*#__PURE__*/
    function (_target) {
      _inherits(bluetooth, _target);

      function bluetooth() {
        _classCallCheck(this, bluetooth);

        return _possibleConstructorReturn(this, (bluetooth.__proto__ || Object.getPrototypeOf(bluetooth)).call(this));
      }

      _createClass(bluetooth, [{
        key: "getSignature",
        value: function getSignature() {
          var _this = this;

          var signBody = "url=".concat(encodeURIComponent(window.location.href.split("#")[0]), "&mapId=").concat(this.mapId); // const deviceBody = `mapId=${this.mapId}&isElevator=1`;
          // 注销页面，停止微信

          window.onunload = function () {
            _this.wx.stopSearchBeacons();
          }; // 请求签名


          var signUrl = "".concat(this.requestUrl, "/wxConfig/weixin/v1/jsSdkSign");
          fetch(signUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: signBody
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            _this.configWx(data.data);

            _this.initIbeacon = true;

            _this.initSuccess();
          }).catch(function (err) {
            _this.initError(err);
          }); // fetch(deviceUrl, {
          //     method: "PUT",
          //     headers: {
          //         "Content-Type": "application/x-www-form-urlencoded",
          //     },
          //     body: deviceBody
          // }).then((response) => response.json()).then((data) => {
          //     const arr = data.data;
          //     this.elevators = arr && arr.map(v => v.device);
          // }).catch((err) => {
          //     this.initError(err);
          // });
        } // 配置微信

      }, {
        key: "configWx",
        value: function configWx(sign) {
          var _this2 = this;

          this.wx.config({
            debug: false,
            // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: sign.appid,
            // 必填，公众号的唯一标识
            timestamp: sign.timestamp,
            // 必填，生成签名的时间戳
            nonceStr: sign.nonceStr,
            // 必填，生成签名的随机串
            signature: sign.signature,
            // 必填，签名
            beta: true,
            //用于在页面加载之初调用JSAPI
            jsApiList: ["openWXDeviceLib", "closeWXDeviceLib", "onWXDeviceBluetoothStateChange", "startSearchBeacons", "stopSearchBeacons", "onSearchBeacons", "startRecord", "stopRecord", "translateVoice", "onMenuShareAppMessage", "getLocation", "openBluetoothAdapter", "onBeaconServiceChange", "onWXDeviceBluetoothStateChange", "getBluetoothAdapterState", "onBluetoothAdapterStateChange"] // 必填，需要使用的JS接口列表

          });
          this.wx.error(function (res) {
            _this2.initError(res);
          });
        }
      }, {
        key: "stopIbeaconSearch",
        value: function stopIbeaconSearch() {
          var _this3 = this;

          this.wx.stopSearchBeacons({
            complete: function complete() {
              console.log("停止蓝牙");

              _this3.stopLocationComplete({
                code: 0,
                msg: "蓝牙停止"
              });
            }
          });
        }
        /**
         * @author j_bleach
         * @date 2018-10-16
         * @Description: 开始搜索
         */

      }, {
        key: "startIbeaconSearch",
        value: function startIbeaconSearch() {
          var _this4 = this;

          console.log("进入蓝牙");
          this.wx.ready(function () {
            var time = 0;
            var flag = false;
            var timeId = void 0;
            window.addEventListener("devicemotion", function () {
              if (Date.now() - time >= 300) {
                time = Date.now();

                if (false === flag) {
                  _this4.wx.stopSearchBeacons({
                    complete: function complete() {
                      console.log("启动蓝牙搜索");
                      ibeaconArr = [];

                      _this4.searchIbeacon();
                    },
                    fail: function fail(err) {
                      console.log("stop fail", err);
                    }
                  });
                }

                flag = true;
                timeId && clearTimeout(timeId);
                timeId = setTimeout(function () {
                  flag = false;

                  _this4.wx.stopSearchBeacons();
                }, 500);
              }
            });

            if (!_this4.initGps) {
              _this4.onSearchBeaconsWithGps();
            } else {
              _this4.onSearchBeaconsWithGps();
            }
          });
        }
        /**
         * @author j_bleach
         * @date 2018-10-16
         * @Description: 搜索蓝牙点
         */

      }, {
        key: "searchIbeacon",
        value: function searchIbeacon() {
          var _this5 = this;

          this.wx.startSearchBeacons({
            ticket: "",
            complete: function complete(t) {
              _this5.startSuccess({
                code: 0,
                msg: "\u5BA4\u5185\u5B9A\u4F4D\u542F\u52A8\uFF0C".concat(t.errMsg)
              });

              var n = t.errMsg;

              if ("startSearchBeacons:already started" === n) {
                return _this5.wx.stopSearchBeacons(function () {
                  _this5.searchIbeacon();
                });
              }

              if ("startSearchBeacons:system unsupported" === n) {
                _this5.searchIbeacon();
              }

              "startSearchBeacons:bluetooth power off" === n ? _this5.startLocationError("蓝牙未打开") : "startSearchBeacons:location service disable" === n && _this5.startLocationError("地理位置服务未打开");
            },
            fail: function fail(t) {
              console.log("sdk-开启失败", t);
            }
          });
        }
        /**
         * @author j_bleach
         * @date 2018-10-17
         * @Description: 监听蓝牙点
         */

      }, {
        key: "onSearchBeacons",
        value: function onSearchBeacons() {
          var _this6 = this;

          this.wx.onSearchBeacons({
            //监听iBeacon设备更新事件
            complete: function complete(data) {
              _this6.getIbeaconPoints(data);
            }
          });
        }
        /**
         * @author j_bleach
         * @date 2018-10-18
         * @Description: 监听蓝牙点（超时切换gps）
         */

      }, {
        key: "onSearchBeaconsWithGps",
        value: function onSearchBeaconsWithGps() {
          var _this7 = this;

          console.log("进入蓝牙定时搜索");
          this.wx.onSearchBeacons({
            //监听iBeacon设备更新事件
            complete: function complete(data) {
              data.beacons = data.beacons && data.beacons.filter(function (v) {
                return v.rssi != 0 && v.rssi > -90;
              });

              if (data.beacons && data.beacons.length > 0) {
                _this7.currentLocation = "ibeacon";

                _this7.getIbeaconPoints(data);

                gpsTimeId && clearTimeout(gpsTimeId);
                gpsTimeId = setTimeout(function () {
                  console.log("定时器执行");
                  ibeaconArr = [];
                  _this7.currentLocation = "gps";
                }, CHANGE_GPS);
              }
            },
            fail: function fail(err) {
              console.log("蓝牙扫描失败", err);
            }
          });
        }
        /**
         * @author j_bleach
         * @date 2018-10-17
         * @Description: 获取蓝牙点
         */

      }, {
        key: "getIbeaconPoints",
        value: function getIbeaconPoints(data) {
          var _this8 = this;

          var filterData = data.beacons && data.beacons.map(function (v) {
            return {
              rssi: ~~Number(v.rssi),
              device: "".concat(v.major, "_").concat(v.minor)
            };
          });

          if (filterData.length === 0) {// this.onSuccess();
          } else {
            filterData = JSON.stringify([filterData]);
            var getIbeaconBody = "mapId=".concat(this.mapId, "&datajson=").concat(filterData, "\n            &interval=").concat(INTERVAL, "&type=wx_").concat(phoneType); // console.log("请求", getIbeaconBody);

            var getIbeconUrl = "".concat(this.requestUrl, "/location/weka/v1/classify"); // map

            fetch(getIbeconUrl, {
              method: "PUT",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: getIbeaconBody
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              if (data.code == 0) {
                var res = data.data;

                var Polygon = _this8.setPolygonLocation(res);

                var ibeaconObj = _objectSpread({
                  isOutdoor: 0,
                  longitude: res.lon,
                  latitude: res.lat,
                  buildingId: res.building,
                  level: res.level,
                  fiducialLat: res.fiducialLat,
                  fiducialLon: res.fiducialLon,
                  locType: "ibeacon",
                  timer: new Date().getTime()
                }, Polygon);

                _this8.onSuccessIbeacon(ibeaconObj);
              }
            }).catch(function (err) {
              // this.initError(err);
              console.log("失败", err);
            });
          }
        }
        /**
         * @author j_bleach
         * @date 2018-10-17
         * @Description: 计算质心点
         * @param data:array
         * @return Polygon:obj
         */

      }, {
        key: "setPolygonLocation",
        value: function setPolygonLocation(data) {
          if (ibeaconArr.length < POINTLENTH) {
            ibeaconArr.push(data);
            return {
              polygonLon: 0,
              polygonLat: 0
            };
          } else {
            ibeaconArr.push(data);
            var inputArr = ibeaconArr && ibeaconArr.map(function (v, i) {
              return _objectSpread({}, v, {
                timestamp: new Date().getTime() + i * 2000
              });
            });
            var polygonLocation = this.polygonV2(inputArr);
            ibeaconArr.shift();
            return polygonLocation;
          }
        }
        /**
         * @author j_bleach
         * @date 2018-08-23
         * @Description: 更新质心点算法 polygonV2
         * @param points:Array
         */

      }, {
        key: "polygonV2",
        value: function polygonV2(points) {
          var m = 0,
              x = 0,
              y = 0;

          for (var i = 0; i < points.length; i++) {
            m += points[i].timestamp;
            x += points[i].lon * points[i].timestamp;
            y += points[i].lat * points[i].timestamp;
          }

          return {
            polygonLon: x / m,
            polygonLat: y / m
          };
        }
      }]);

      return bluetooth;
    }(target)
  );
};

var _default = blueToothFn;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/gps/index.js":
/*!**************************!*\
  !*** ./src/gps/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by j_bleach on 2018/10/16 0016.
 */
var gpsFn = function gpsFn(target) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_target) {
    _inherits(gps, _target);

    function gps() {
      var _this;

      _classCallCheck(this, gps);

      _this = _possibleConstructorReturn(this, (gps.__proto__ || Object.getPrototypeOf(gps)).call(this));

      _defineProperty(_this, "geo_success", function (res) {
        var data = res.coords;
        var gpsObj = {
          isOutdoor: 1,
          longitude: data.longitude,
          latitude: data.latitude,
          accuracy: data.accuracy,
          level: "0",
          locType: "gps",
          timestamp: res.timestamp // timer: new Date().getTime(),

        };

        _this.onSuccessGps(gpsObj);
      });

      return _this;
    }

    _createClass(gps, [{
      key: "checkGPS",
      value: function checkGPS() {
        if ("geolocation" in navigator) {
          /* 地理位置服务可用 */
          this.initGps = true;
          this.initSuccess();
        } else {
          /* 地理位置服务不可用 */
        }
      }
    }, {
      key: "startGpsSearch",
      value: function startGpsSearch() {
        console.log("进入gps");
        this.startSuccess({
          code: 1,
          msg: "gps定位启动"
        });
        gps.gpsWatchId = navigator.geolocation.watchPosition(this.geo_success, gps.geo_error, {
          enableHighAccuracy: true,
          timeout: this.timeout
        });
      }
    }, {
      key: "stopGpsSearch",
      value: function stopGpsSearch() {
        console.log("停止gps");
        navigator.geolocation.clearWatch(gps.gpsWatchId);
        this.stopLocationComplete({
          code: 1,
          msg: "gps定位停止"
        });
      }
    }], [{
      key: "geo_error",
      value: function geo_error(err) {
        throw err;
      }
    }]);

    return gps;
  }(target), _defineProperty(_class, "gpsWatchId", null), _temp;
};

var _default = gpsFn;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _loc = _interopRequireDefault(__webpack_require__(/*! ./loc */ "./src/loc.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by j_bleach on 2018/10/16 0016.
 */
var _default = _loc.default;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/loc.js":
/*!********************!*\
  !*** ./src/loc.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bluetooth = _interopRequireDefault(__webpack_require__(/*! ./bluetooth */ "./src/bluetooth/index.js"));

var _gps = _interopRequireDefault(__webpack_require__(/*! ./gps */ "./src/gps/index.js"));

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Loc = (0, _gps.default)(_class = (0, _bluetooth.default)(_class =
/*#__PURE__*/
function () {
  function Loc() {
    _classCallCheck(this, Loc);

    _defineProperty(this, "initIbeacon", false);

    _defineProperty(this, "initGps", false);

    _defineProperty(this, "ibeaconCoords", null);

    _defineProperty(this, "gpsCoords", null);

    _defineProperty(this, "locType", []);

    _defineProperty(this, "currentPosition", null);

    _defineProperty(this, "currentLocation", "gps");
  }

  _createClass(Loc, [{
    key: "init",
    value: function init(_ref) {
      var timeout = _ref.timeout,
          locType = _ref.locType,
          mapId = _ref.mapId,
          wxSDK = _ref.wxSDK,
          requestUrl = _ref.requestUrl,
          _ref$complete = _ref.complete,
          complete = _ref$complete === void 0 ? function () {} : _ref$complete,
          _ref$error = _ref.error,
          error = _ref$error === void 0 ? function () {} : _ref$error;
      console.log("开始定位");
      this.mapId = mapId;
      this.timeout = timeout; // 超时时间

      this.locType = locType; // 定位类型

      this.initComplete = complete; // 初始化成功函数

      this.initError = error; // 初始化失败函数

      this.wx = wxSDK;
      this.requestUrl = requestUrl; // locType && locType.includes("gps") && this.checkGPS();

      locType && locType.includes("ibeacon") && this.getSignature();
    }
  }, {
    key: "initSuccess",
    value: function initSuccess() {
      if (this.locType.includes("ibeacon") && this.initIbeacon) {
        this.initComplete();
      }
    } // 开启定位

  }, {
    key: "startLocation",
    value: function startLocation(_ref2) {
      var _ref2$complete = _ref2.complete,
          complete = _ref2$complete === void 0 ? function () {} : _ref2$complete,
          _ref2$error = _ref2.error,
          error = _ref2$error === void 0 ? function () {} : _ref2$error;
      this.startLocationComplete = complete;
      this.startLocationError = error;
      this.locType && this.locType.includes("gps") && this.startGpsSearch();
      this.locType && this.locType.includes("ibeacon") && this.startIbeaconSearch();
    } // 开启成功

  }, {
    key: "startSuccess",
    value: function startSuccess(response) {
      this.startLocationComplete(response);
    } // 停止定位

  }, {
    key: "stopLocation",
    value: function stopLocation(_ref3) {
      var _ref3$complete = _ref3.complete,
          complete = _ref3$complete === void 0 ? function () {} : _ref3$complete,
          _ref3$error = _ref3.error,
          error = _ref3$error === void 0 ? function () {} : _ref3$error;
      this.stopLocationComplete = complete;
      this.locType && this.locType.includes("gps") && this.stopGpsSearch();
      this.locType && this.locType.includes("ibeacon") && this.stopIbeaconSearch();
    } // 监听定位

  }, {
    key: "onLocation",
    value: function onLocation(_ref4) {
      var _ref4$complete = _ref4.complete,
          complete = _ref4$complete === void 0 ? function () {} : _ref4$complete,
          _ref4$error = _ref4.error,
          error = _ref4$error === void 0 ? function () {} : _ref4$error;
      this.onLocationComplete = complete;
    }
  }, {
    key: "onSuccessGps",
    value: function onSuccessGps(data) {
      this.gpsCoords = data;

      if (this.currentLocation !== "ibeacon") {
        this.onLocationComplete(this.gpsCoords);
        this.currentPosition = data;
      }
    }
  }, {
    key: "onSuccessIbeacon",
    value: function onSuccessIbeacon(data) {
      this.ibeaconCoords = data;
      this.currentPosition = data;
      this.onLocationComplete(this.ibeaconCoords, this);
    }
  }]);

  return Loc;
}()) || _class) || _class;

var _default = new Loc();

exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=loc.js.map