(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Positioning-jssdk", [], factory);
	else if(typeof exports === 'object')
		exports["Positioning-jssdk"] = factory();
	else
		root["Positioning-jssdk"] = factory();
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

/***/ "./node_modules/weixin-js-sdk/index.js":
/*!*********************************************!*\
  !*** ./node_modules/weixin-js-sdk/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

! function (e, n) {
  module.exports = n(e)
}(window, function (e, n) {
  function i(n, i, t) {
    e.WeixinJSBridge ? WeixinJSBridge.invoke(n, o(i),
    function(e) {
      c(n, e, t)
    }) : u(n, t)
  }
  function t(n, i, t) {
    e.WeixinJSBridge ? WeixinJSBridge.on(n,
    function(e) {
      t && t.trigger && t.trigger(e),
      c(n, e, i)
    }) : t ? u(n, t) : u(n, i)
  }
  function o(e) {
    return e = e || {},
    e.appId = C.appId,
    e.verifyAppId = C.appId,
    e.verifySignType = "sha1",
    e.verifyTimestamp = C.timestamp + "",
    e.verifyNonceStr = C.nonceStr,
    e.verifySignature = C.signature,
    e
  }
  function r(e) {
    return {
      timeStamp: e.timestamp + "",
      nonceStr: e.nonceStr,
      package: e.package,
      paySign: e.paySign,
      signType: e.signType || "SHA1"
    }
  }
  function a(e) {
    return e.postalCode = e.addressPostalCode,
    delete e.addressPostalCode,
    e.provinceName = e.proviceFirstStageName,
    delete e.proviceFirstStageName,
    e.cityName = e.addressCitySecondStageName,
    delete e.addressCitySecondStageName,
    e.countryName = e.addressCountiesThirdStageName,
    delete e.addressCountiesThirdStageName,
    e.detailInfo = e.addressDetailInfo,
    delete e.addressDetailInfo,
    e
  }
  function c(e, n, i) {
    "openEnterpriseChat" == e && (n.errCode = n.err_code),
    delete n.err_code,
    delete n.err_desc,
    delete n.err_detail;
    var t = n.errMsg;
    t || (t = n.err_msg, delete n.err_msg, t = s(e, t), n.errMsg = t),
    (i = i || {})._complete && (i._complete(n), delete i._complete),
    t = n.errMsg || "",
    C.debug && !i.isInnerInvoke && alert(JSON.stringify(n));
    var o = t.indexOf(":");
    switch (t.substring(o + 1)) {
    case "ok":
      i.success && i.success(n);
      break;
    case "cancel":
      i.cancel && i.cancel(n);
      break;
    default:
      i.fail && i.fail(n)
    }
    i.complete && i.complete(n)
  }
  function s(e, n) {
    var i = e,
    t = v[i];
    t && (i = t);
    var o = "ok";
    if (n) {
      var r = n.indexOf(":");
      "confirm" == (o = n.substring(r + 1)) && (o = "ok"),
      "failed" == o && (o = "fail"),
      -1 != o.indexOf("failed_") && (o = o.substring(7)),
      -1 != o.indexOf("fail_") && (o = o.substring(5)),
      "access denied" != (o = (o = o.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != o || (o = "permission denied"),
      "config" == i && "function not exist" == o && (o = "ok"),
      "" == o && (o = "fail")
    }
    return n = i + ":" + o
  }
  function d(e) {
    if (e) {
      for (var n = 0,
      i = e.length; n < i; ++n) {
        var t = e[n],
        o = h[t];
        o && (e[n] = o)
      }
      return e
    }
  }
  function u(e, n) {
    if (! (!C.debug || n && n.isInnerInvoke)) {
      var i = v[e];
      i && (e = i),
      n && n._complete && delete n._complete,
      console.log('"' + e + '",', n || "")
    }
  }
  function l(e) {
    if (! (k || w || C.debug || x < "6.0.2" || V.systemType < 0)) {
      var n = new Image;
      V.appId = C.appId,
      V.initTime = A.initEndTime - A.initStartTime,
      V.preVerifyTime = A.preVerifyEndTime - A.preVerifyStartTime,
      N.getNetworkType({
        isInnerInvoke: !0,
        success: function(e) {
          V.networkType = e.networkType;
          var i = "https://open.weixin.qq.com/sdk/report?v=" + V.version + "&o=" + V.isPreVerifyOk + "&s=" + V.systemType + "&c=" + V.clientVersion + "&a=" + V.appId + "&n=" + V.networkType + "&i=" + V.initTime + "&p=" + V.preVerifyTime + "&u=" + V.url;
          n.src = i
        }
      })
    }
  }
  function p() {
    return (new Date).getTime()
  }
  function f(n) {
    T && (e.WeixinJSBridge ? n() : S.addEventListener && S.addEventListener("WeixinJSBridgeReady", n, !1))
  }
  function m() {
    N.invoke || (N.invoke = function(n, i, t) {
      e.WeixinJSBridge && WeixinJSBridge.invoke(n, o(i), t)
    },
    N.on = function(n, i) {
      e.WeixinJSBridge && WeixinJSBridge.on(n, i)
    })
  }
  function g(e) {
    if ("string" == typeof e && e.length > 0) {
      var n = e.split("?")[0],
      i = e.split("?")[1];
      return n += ".html",
      void 0 !== i ? n + "?" + i: n
    }
  }
  if (!e.jWeixin) {
    var h = {
      config: "preVerifyJSAPI",
      onMenuShareTimeline: "menu:share:timeline",
      onMenuShareAppMessage: "menu:share:appmessage",
      onMenuShareQQ: "menu:share:qq",
      onMenuShareWeibo: "menu:share:weiboApp",
      onMenuShareQZone: "menu:share:QZone",
      previewImage: "imagePreview",
      getLocation: "geoLocation",
      openProductSpecificView: "openProductViewWithPid",
      addCard: "batchAddCard",
      openCard: "batchViewCard",
      chooseWXPay: "getBrandWCPayRequest",
      openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
      startSearchBeacons: "startMonitoringBeacons",
      stopSearchBeacons: "stopMonitoringBeacons",
      onSearchBeacons: "onBeaconsInRange",
      consumeAndShareCard: "consumedShareCard",
      openAddress: "editAddress"
    },
    v = function() {
      var e = {};
      for (var n in h) e[h[n]] = n;
      return e
    } (),
    S = e.document,
    I = S.title,
    y = navigator.userAgent.toLowerCase(),
    _ = navigator.platform.toLowerCase(),
    k = !(!_.match("mac") && !_.match("win")),
    w = -1 != y.indexOf("wxdebugger"),
    T = -1 != y.indexOf("micromessenger"),
    M = -1 != y.indexOf("android"),
    P = -1 != y.indexOf("iphone") || -1 != y.indexOf("ipad"),
    x = function() {
      var e = y.match(/micromessenger\/(\d+\.\d+\.\d+)/) || y.match(/micromessenger\/(\d+\.\d+)/);
      return e ? e[1] : ""
    } (),
    A = {
      initStartTime: p(),
      initEndTime: 0,
      preVerifyStartTime: 0,
      preVerifyEndTime: 0
    },
    V = {
      version: 1,
      appId: "",
      initTime: 0,
      preVerifyTime: 0,
      networkType: "",
      isPreVerifyOk: 1,
      systemType: P ? 1 : M ? 2 : -1,
      clientVersion: x,
      url: encodeURIComponent(location.href)
    },
    C = {},
    L = {
      _completes: []
    },
    B = {
      state: 0,
      data: {}
    };
    f(function() {
      A.initEndTime = p()
    });
    var O = !1,
    E = [],
    N = {
      config: function(e) {
        C = e,
        u("config", e);
        var n = !1 !== C.check;
        f(function() {
          if (n) i(h.config, {
            verifyJsApiList: d(C.jsApiList)
          },
          function() {
            L._complete = function(e) {
              A.preVerifyEndTime = p(),
              B.state = 1,
              B.data = e
            },
            L.success = function(e) {
              V.isPreVerifyOk = 0
            },
            L.fail = function(e) {
              L._fail ? L._fail(e) : B.state = -1
            };
            var e = L._completes;
            return e.push(function() {
              l()
            }),
            L.complete = function(n) {
              for (var i = 0,
              t = e.length; i < t; ++i) e[i]();
              L._completes = []
            },
            L
          } ()),
          A.preVerifyStartTime = p();
          else {
            B.state = 1;
            for (var e = L._completes,
            t = 0,
            o = e.length; t < o; ++t) e[t]();
            L._completes = []
          }
        }),
        m()
      },
      ready: function(e) {
        0 != B.state ? e() : (L._completes.push(e), !T && C.debug && e())
      },
      error: function(e) {
        x < "6.0.2" || ( - 1 == B.state ? e(B.data) : L._fail = e)
      },
      checkJsApi: function(e) {
        var n = function(e) {
          var n = e.checkResult;
          for (var i in n) {
            var t = v[i];
            t && (n[t] = n[i], delete n[i])
          }
          return e
        };
        i("checkJsApi", {
          jsApiList: d(e.jsApiList)
        },
        (e._complete = function(e) {
          if (M) {
            var i = e.checkResult;
            i && (e.checkResult = JSON.parse(i))
          }
          e = n(e)
        },
        e))
      },
      onMenuShareTimeline: function(e) {
        t(h.onMenuShareTimeline, {
          complete: function() {
            i("shareTimeline", {
              title: e.title || I,
              desc: e.title || I,
              img_url: e.imgUrl || "",
              link: e.link || location.href,
              type: e.type || "link",
              data_url: e.dataUrl || ""
            },
            e)
          }
        },
        e)
      },
      onMenuShareAppMessage: function(e) {
        t(h.onMenuShareAppMessage, {
          complete: function(n) {
            "favorite" === n.scene ? i("sendAppMessage", {
              title: e.title || I,
              desc: e.desc || "",
              link: e.link || location.href,
              img_url: e.imgUrl || "",
              type: e.type || "link",
              data_url: e.dataUrl || ""
            }) : i("sendAppMessage", {
              title: e.title || I,
              desc: e.desc || "",
              link: e.link || location.href,
              img_url: e.imgUrl || "",
              type: e.type || "link",
              data_url: e.dataUrl || ""
            },
            e)
          }
        },
        e)
      },
      onMenuShareQQ: function(e) {
        t(h.onMenuShareQQ, {
          complete: function() {
            i("shareQQ", {
              title: e.title || I,
              desc: e.desc || "",
              img_url: e.imgUrl || "",
              link: e.link || location.href
            },
            e)
          }
        },
        e)
      },
      onMenuShareWeibo: function(e) {
        t(h.onMenuShareWeibo, {
          complete: function() {
            i("shareWeiboApp", {
              title: e.title || I,
              desc: e.desc || "",
              img_url: e.imgUrl || "",
              link: e.link || location.href
            },
            e)
          }
        },
        e)
      },
      onMenuShareQZone: function(e) {
        t(h.onMenuShareQZone, {
          complete: function() {
            i("shareQZone", {
              title: e.title || I,
              desc: e.desc || "",
              img_url: e.imgUrl || "",
              link: e.link || location.href
            },
            e)
          }
        },
        e)
      },
      updateTimelineShareData: function(e) {
        i("updateTimelineShareData", {
          title: e.title,
          link: e.link,
          imgUrl: e.imgUrl
        },
        e)
      },
      updateAppMessageShareData: function(e) {
        i("updateAppMessageShareData", {
          title: e.title,
          desc: e.desc,
          link: e.link,
          imgUrl: e.imgUrl
        },
        e)
      },
      startRecord: function(e) {
        i("startRecord", {},
        e)
      },
      stopRecord: function(e) {
        i("stopRecord", {},
        e)
      },
      onVoiceRecordEnd: function(e) {
        t("onVoiceRecordEnd", e)
      },
      playVoice: function(e) {
        i("playVoice", {
          localId: e.localId
        },
        e)
      },
      pauseVoice: function(e) {
        i("pauseVoice", {
          localId: e.localId
        },
        e)
      },
      stopVoice: function(e) {
        i("stopVoice", {
          localId: e.localId
        },
        e)
      },
      onVoicePlayEnd: function(e) {
        t("onVoicePlayEnd", e)
      },
      uploadVoice: function(e) {
        i("uploadVoice", {
          localId: e.localId,
          isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
        },
        e)
      },
      downloadVoice: function(e) {
        i("downloadVoice", {
          serverId: e.serverId,
          isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
        },
        e)
      },
      translateVoice: function(e) {
        i("translateVoice", {
          localId: e.localId,
          isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
        },
        e)
      },
      chooseImage: function(e) {
        i("chooseImage", {
          scene: "1|2",
          count: e.count || 9,
          sizeType: e.sizeType || ["original", "compressed"],
          sourceType: e.sourceType || ["album", "camera"]
        },
        (e._complete = function(e) {
          if (M) {
            var n = e.localIds;
            try {
              n && (e.localIds = JSON.parse(n))
            } catch(e) {}
          }
        },
        e))
      },
      getLocation: function(e) {},
      previewImage: function(e) {
        i(h.previewImage, {
          current: e.current,
          urls: e.urls
        },
        e)
      },
      uploadImage: function(e) {
        i("uploadImage", {
          localId: e.localId,
          isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
        },
        e)
      },
      downloadImage: function(e) {
        i("downloadImage", {
          serverId: e.serverId,
          isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
        },
        e)
      },
      getLocalImgData: function(e) { ! 1 === O ? (O = !0, i("getLocalImgData", {
          localId: e.localId
        },
        (e._complete = function(e) {
          if (O = !1, E.length > 0) {
            var n = E.shift();
            wx.getLocalImgData(n)
          }
        },
        e))) : E.push(e)
      },
      getNetworkType: function(e) {
        var n = function(e) {
          var n = e.errMsg;
          e.errMsg = "getNetworkType:ok";
          var i = e.subtype;
          if (delete e.subtype, i) e.networkType = i;
          else {
            var t = n.indexOf(":"),
            o = n.substring(t + 1);
            switch (o) {
            case "wifi":
            case "edge":
            case "wwan":
              e.networkType = o;
              break;
            default:
              e.errMsg = "getNetworkType:fail"
            }
          }
          return e
        };
        i("getNetworkType", {},
        (e._complete = function(e) {
          e = n(e)
        },
        e))
      },
      openLocation: function(e) {
        i("openLocation", {
          latitude: e.latitude,
          longitude: e.longitude,
          name: e.name || "",
          address: e.address || "",
          scale: e.scale || 28,
          infoUrl: e.infoUrl || ""
        },
        e)
      },
      getLocation: function(e) {
        e = e || {},
        i(h.getLocation, {
          type: e.type || "wgs84"
        },
        (e._complete = function(e) {
          delete e.type
        },
        e))
      },
      hideOptionMenu: function(e) {
        i("hideOptionMenu", {},
        e)
      },
      showOptionMenu: function(e) {
        i("showOptionMenu", {},
        e)
      },
      closeWindow: function(e) {
        i("closeWindow", {},
        e = e || {})
      },
      hideMenuItems: function(e) {
        i("hideMenuItems", {
          menuList: e.menuList
        },
        e)
      },
      showMenuItems: function(e) {
        i("showMenuItems", {
          menuList: e.menuList
        },
        e)
      },
      hideAllNonBaseMenuItem: function(e) {
        i("hideAllNonBaseMenuItem", {},
        e)
      },
      showAllNonBaseMenuItem: function(e) {
        i("showAllNonBaseMenuItem", {},
        e)
      },
      scanQRCode: function(e) {
        i("scanQRCode", {
          needResult: (e = e || {}).needResult || 0,
          scanType: e.scanType || ["qrCode", "barCode"]
        },
        (e._complete = function(e) {
          if (P) {
            var n = e.resultStr;
            if (n) {
              var i = JSON.parse(n);
              e.resultStr = i && i.scan_code && i.scan_code.scan_result
            }
          }
        },
        e))
      },
      openAddress: function(e) {
        i(h.openAddress, {},
        (e._complete = function(e) {
          e = a(e)
        },
        e))
      },
      openProductSpecificView: function(e) {
        i(h.openProductSpecificView, {
          pid: e.productId,
          view_type: e.viewType || 0,
          ext_info: e.extInfo
        },
        e)
      },
      addCard: function(e) {
        for (var n = e.cardList,
        t = [], o = 0, r = n.length; o < r; ++o) {
          var a = n[o],
          c = {
            card_id: a.cardId,
            card_ext: a.cardExt
          };
          t.push(c)
        }
        i(h.addCard, {
          card_list: t
        },
        (e._complete = function(e) {
          var n = e.card_list;
          if (n) {
            for (var i = 0,
            t = (n = JSON.parse(n)).length; i < t; ++i) {
              var o = n[i];
              o.cardId = o.card_id,
              o.cardExt = o.card_ext,
              o.isSuccess = !!o.is_succ,
              delete o.card_id,
              delete o.card_ext,
              delete o.is_succ
            }
            e.cardList = n,
            delete e.card_list
          }
        },
        e))
      },
      chooseCard: function(e) {
        i("chooseCard", {
          app_id: C.appId,
          location_id: e.shopId || "",
          sign_type: e.signType || "SHA1",
          card_id: e.cardId || "",
          card_type: e.cardType || "",
          card_sign: e.cardSign,
          time_stamp: e.timestamp + "",
          nonce_str: e.nonceStr
        },
        (e._complete = function(e) {
          e.cardList = e.choose_card_info,
          delete e.choose_card_info
        },
        e))
      },
      openCard: function(e) {
        for (var n = e.cardList,
        t = [], o = 0, r = n.length; o < r; ++o) {
          var a = n[o],
          c = {
            card_id: a.cardId,
            code: a.code
          };
          t.push(c)
        }
        i(h.openCard, {
          card_list: t
        },
        e)
      },
      consumeAndShareCard: function(e) {
        i(h.consumeAndShareCard, {
          consumedCardId: e.cardId,
          consumedCode: e.code
        },
        e)
      },
      chooseWXPay: function(e) {
        i(h.chooseWXPay, r(e), e)
      },
      openEnterpriseRedPacket: function(e) {
        i(h.openEnterpriseRedPacket, r(e), e)
      },
      startSearchBeacons: function(e) {
        i(h.startSearchBeacons, {
          ticket: e.ticket
        },
        e)
      },
      stopSearchBeacons: function(e) {
        i(h.stopSearchBeacons, {},
        e)
      },
      onSearchBeacons: function(e) {
        t(h.onSearchBeacons, e)
      },
      openEnterpriseChat: function(e) {
        i("openEnterpriseChat", {
          useridlist: e.userIds,
          chatname: e.groupName
        },
        e)
      },
      launchMiniProgram: function(e) {
        i("launchMiniProgram", {
          targetAppId: e.targetAppId,
          path: g(e.path),
          envVersion: e.envVersion
        },
        e)
      },
      miniProgram: {
        navigateBack: function(e) {
          e = e || {},
          f(function() {
            i("invokeMiniProgramAPI", {
              name: "navigateBack",
              arg: {
                delta: e.delta || 1
              }
            },
            e)
          })
        },
        navigateTo: function(e) {
          f(function() {
            i("invokeMiniProgramAPI", {
              name: "navigateTo",
              arg: {
                url: e.url
              }
            },
            e)
          })
        },
        redirectTo: function(e) {
          f(function() {
            i("invokeMiniProgramAPI", {
              name: "redirectTo",
              arg: {
                url: e.url
              }
            },
            e)
          })
        },
        switchTab: function(e) {
          f(function() {
            i("invokeMiniProgramAPI", {
              name: "switchTab",
              arg: {
                url: e.url
              }
            },
            e)
          })
        },
        reLaunch: function(e) {
          f(function() {
            i("invokeMiniProgramAPI", {
              name: "reLaunch",
              arg: {
                url: e.url
              }
            },
            e)
          })
        },
        postMessage: function(e) {
          f(function() {
            i("invokeMiniProgramAPI", {
              name: "postMessage",
              arg: e.data || {}
            },
            e)
          })
        },
        getEnv: function(n) {
          f(function() {
            n({
              miniprogram: "miniprogram" === e.__wxjs_environment
            })
          })
        }
      }
    },
    b = 1,
    R = {};
    return S.addEventListener("error",
    function(e) {
      if (!M) {
        var n = e.target,
        i = n.tagName,
        t = n.src;
        if (("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) && -1 != t.indexOf("wxlocalresource://")) {
          e.preventDefault(),
          e.stopPropagation();
          var o = n["wx-id"];
          if (o || (o = b++, n["wx-id"] = o), R[o]) return;
          R[o] = !0,
          wx.ready(function() {
            wx.getLocalImgData({
              localId: t,
              success: function(e) {
                n.src = e.localData
              }
            })
          })
        }
      }
    },
    !0),
    S.addEventListener("load",
    function(e) {
      if (!M) {
        var n = e.target,
        i = n.tagName;
        n.src;
        if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
          var t = n["wx-id"];
          t && (R[t] = !1)
        }
      }
    },
    !0),
    n && (e.wx = e.jWeixin = N),
    N
  }
});

/***/ }),

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

var _weixinJsSdk = _interopRequireDefault(__webpack_require__(/*! weixin-js-sdk */ "./node_modules/weixin-js-sdk/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var INTERVAL = 500; // 服务器时间间隔

var POINTLENTH = 3; // 质心点计算数组长度

var CHANGE_GPS = 5000; // 搜索不到蓝牙5000ms后，切换gps

var blueToothFn = function blueToothFn(target) {
  var signUrl = "https://map.parkbobo.com/location/weixin/v1/jsSdkSign";
  var getIbeconUrl = "https://map.parkbobo.com/location/weka/v1/classify";
  var signBody = "url=".concat(encodeURIComponent(window.location.href.split("#")[0]));
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

          console.log("请求签名"); // 注销页面，停止微信

          window.onunload = function () {
            _weixinJsSdk.default.stopSearchBeacons();
          }; // 请求签名


          fetch(signUrl, {
            method: "PUT",
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
          });
        } // 配置微信

      }, {
        key: "configWx",
        value: function configWx(sign) {
          var _this2 = this;

          _weixinJsSdk.default.config({
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
            jsApiList: ["openWXDeviceLib", "closeWXDeviceLib", "onWXDeviceBluetoothStateChange", "startSearchBeacons", "stopSearchBeacons", "onSearchBeacons", "startRecord", "stopRecord", "translateVoice", "onMenuShareAppMessage", "getLocation"] // 必填，需要使用的JS接口列表

          });

          _weixinJsSdk.default.error(function (res) {
            _this2.initError(res);
          });
        }
      }, {
        key: "stopIbeaconSearch",
        value: function stopIbeaconSearch() {
          var _this3 = this;

          _weixinJsSdk.default.stopSearchBeacons({
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
         * @param name:String
         * @return name:String
         */

      }, {
        key: "startIbeaconSearch",
        value: function startIbeaconSearch() {
          var _this4 = this;

          console.log("进入蓝牙");

          _weixinJsSdk.default.ready(function () {
            var time = Date.now();
            var flag = false;
            var timeId = void 0;
            window.addEventListener("devicemotion", function () {
              if (Date.now() - time >= 80) {
                time = Date.now();

                if (false === flag) {
                  _weixinJsSdk.default.stopSearchBeacons({
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

                  _weixinJsSdk.default.stopSearchBeacons();
                }, 500);
              }
            });

            if (!_this4.initGps) {
              _this4.onSearchBeacons();
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

          _weixinJsSdk.default.startSearchBeacons({
            ticket: "",
            complete: function complete(t) {
              console.log("开启成功", t);

              _this5.startSuccess({
                code: 0,
                msg: "\u5BA4\u5185\u5B9A\u4F4D\u542F\u52A8\uFF0C".concat(t.errMsg)
              });

              var n = t.errMsg;

              if ("startSearchBeacons:already started" === n) {
                return _weixinJsSdk.default.stopSearchBeacons(function () {
                  _this5.searchIbeacon();
                });
              }

              if ("startSearchBeacons:system unsupported" === n) {
                _this5.searchIbeacon();
              }

              "startSearchBeacons:bluetooth power off" === n ? _this5.startLocationError("蓝牙未打开，请打开蓝牙后，重新打开页面") : "startSearchBeacons:location service disable" === n && _this5.startLocationError("地理位置服务未打开");
            },
            fail: function fail(t) {
              console.log("开启失败", t);
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

          _weixinJsSdk.default.onSearchBeacons({
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
         * @param name:String
         * @return name:String
         */

      }, {
        key: "onSearchBeaconsWithGps",
        value: function onSearchBeaconsWithGps() {
          var _this7 = this;

          console.log("进入蓝牙定时搜索");

          _weixinJsSdk.default.onSearchBeacons({
            //监听iBeacon设备更新事件
            complete: function complete(data) {
              _this7.getIbeaconPoints(data);

              _this7.currentLocation = "ibeacon";
              gpsTimeId && clearTimeout(gpsTimeId);
              gpsTimeId = setTimeout(function () {
                console.log("定时器执行", _this7);
                _this7.currentLocation = "gps";
              }, CHANGE_GPS);
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

          var filterData = data.beacons && data.beacons.filter(function (v) {
            return v.rssi != 0;
          }).map(function (v) {
            return {
              rssi: v.rssi,
              device: "".concat(v.major, "_").concat(v.minor)
            };
          });

          if (filterData.length === 0) {// this.onSuccess();
          } else {
            filterData = JSON.stringify([filterData]);
            var getIbeaconBody = "mapId=".concat(this.mapId, "&datajson=").concat(filterData, "\n            &interval=").concat(INTERVAL, "&type=wx_").concat(phoneType);
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
                  locType: "ibeacon"
                }, Polygon);

                _this8.onSuccessIbeacon(ibeaconObj);
              }
            }).catch(function (err) {
              // this.initError(err);
              console.log(err);
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
        _this.startSuccess({
          code: 1,
          msg: "gps定位启动"
        });

        var data = res.coords;
        var gpsObj = {
          isOutdoor: 1,
          longitude: data.longitude,
          latitude: data.latitude,
          accuracy: data.accuracy,
          locType: "gps",
          timestamp: res.timestamp
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
        console.log("jinru gps");
        gps.gpsWatchId = navigator.geolocation.watchPosition(this.geo_success, gps.geo_error, {
          enableHighAccuracy: true
        });
      }
    }, {
      key: "stopGpsSearch",
      value: function stopGpsSearch() {
        console.log("qingchu");
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
  }

  _createClass(Loc, [{
    key: "init",
    value: function init(_ref) {
      var timeout = _ref.timeout,
          locType = _ref.locType,
          mapId = _ref.mapId,
          _ref$complete = _ref.complete,
          complete = _ref$complete === void 0 ? function () {} : _ref$complete,
          _ref$error = _ref.error,
          error = _ref$error === void 0 ? function () {} : _ref$error;
      this.mapId = mapId;
      this.timeout = timeout; // 超时时间

      this.locType = locType; // 定位类型

      this.initComplete = complete; // 初始化成功函数

      this.initError = error; // 初始化失败函数

      locType && locType.includes("gps") && this.checkGPS();
      locType && locType.includes("ibeacon") && this.getSignature();
    }
  }, {
    key: "initSuccess",
    value: function initSuccess() {
      if (!(this.locType.includes("ibeacon") && !this.initIbeacon || this.locType.includes("gps") && !this.initGps)) {
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

      if (!this.initIbeacon || this.currentLocation !== "ibeacon") {
        this.onLocationComplete(this.gpsCoords);
      }
    }
  }, {
    key: "onSuccessIbeacon",
    value: function onSuccessIbeacon(data) {
      this.ibeaconCoords = data;
      this.onLocationComplete(this.ibeaconCoords);
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
//# sourceMappingURL=Positioning-jssdk.js.map