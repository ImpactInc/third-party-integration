/*!
 * WARNING!!!
 * This is an autogenerated file, please update correct files and then run `npm i` to regenerate when needed.
 * (version: 1.6.0; hash: 7f6a0551)
 */
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-unused-vars: off */
/* eslint no-undef: off */
/* eslint no-global-assign: off */
/* eslint no-native-reassign: off */

/* globals require, onTrack, onIdentify, onPage, onScreen, onGroup, onDelete, onAlias */

const post = __webpack_require__(/*! ./post */ "./src/post.js");
const router = __webpack_require__(/*! ./router */ "./src/router.js")(post);
const commonDataMapper = __webpack_require__(/*! ./mapper */ "./src/mapper.js");
const parseEvent = __webpack_require__(/*! ./parseEvent */ "./src/parseEvent.js");
const Config = __webpack_require__(/*! ./config */ "./src/config.js");
const EVENT_TYPE = Config.EVENT_TYPE;
const ENABLED_FLAG = Config.ENABLED_FLAG;

/**
 * onTrack handles events such as Application Installed and Order Complete.
 *
 * @param {Object} event
 * @param {Object.<string, *>} settings
 * @return Promise<any>
 */
onTrack = implemented();

/**
 * onPage handles our Page Load events within a web browser.
 *
 * @param {Object} event
 * @param {Object.<string, *>} settings
 * @return Promise<any>
 */
onPage = implemented(EVENT_TYPE.PAGE_LOAD, ENABLED_FLAG.PAGE_LOAD);

/**
 * onScreen handles our Page Load events in regards to a mobile app.
 *
 * @param {Object} event
 * @param {Object.<string, *>} settings
 * @return Promise<any>
 */
onScreen = implemented(EVENT_TYPE.SCREEN_LOAD, ENABLED_FLAG.SCREEN_LOAD);

/**
 * onIdentify handles events such as a user logging in and changing their email address.
 *
 * @param {Object} event
 * @param {Object.<string, *>} settings
 * @return Promise<any>
 */
onIdentify = implemented(EVENT_TYPE.PAGE_LOAD, ENABLED_FLAG.IDENTIFY);

/**
 * onGroup handles events where a user is associated with a group.
 *
 * @param {Object} event
 * @param {Object.<string, *>} settings
 * @return Promise<any>
 */
onGroup = notImplemented('onGroup');

/**
 * Wrapped for our implemented listeners.
 *
 * @param {String?} name
 * @param {String?} settingsFlag
 * @returns {function(event: Object, settings: Object): Promise<any>}
 * @throws Error
 */
function implemented(name, settingsFlag) {
  return (event, settings) => {
    if (settingsFlag && !settings[settingsFlag]) {
      throw new Error(`${name} is not enabled for this event`);
    }
    const parsedEvent = parseEvent(event);
    const commonData = commonDataMapper(parsedEvent, settings);
    return router(parsedEvent, settings, commonData, name || null);
  };
}

/**
 * Throw a message that a listener is not implemented yet.
 *
 * @param {String} name
 * @throws Error
 */
function notImplemented(name) {
  return (event, settings) => {
    throw new Error(`${name} is not implemented`);
  };
}


/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals exports */

const DEVICE_NAME = {
  IOS: 'iOS App',
  ANDROID: 'Android App'
};
exports.DEVICE_NAME = DEVICE_NAME;

const DEVICE_TYPE = {
  IOS: 'ios',
  ANDROID: 'android'
};
exports.DEVICE_TYPE = DEVICE_TYPE;

const ENDPOINT = {
  PAGE_LOAD: 'https://trkapi.impact.com/PageLoad',
  CONVERSION_PREFIX: 'https://api.impact.com/Advertisers',
  APPLICATION_INSTALL: 'https://trkapi.impact.com/AppInstall',
  CONVERSION_SUFFIX: '/Conversions.json'
};
exports.ENDPOINT = ENDPOINT;

const DEFAULT_ORDER_ID = 'IR_AN_64_TS';
exports.DEFAULT_ORDER_ID = DEFAULT_ORDER_ID;

const REFERRER_TYPE = 'impactradius';
exports.REFERRER_TYPE = REFERRER_TYPE;

const EVENT_TYPE = {
  APPLICATION_INSTALLED: 'Application Installed',
  INSTALL: 'INSTALL',
  ORDER_COMPLETE: 'Order Complete',
  ORDER_COMPLETED: 'Order Completed',
  PAGE_LOAD: 'Page Load',
  SCREEN_LOAD: 'Screen Load'
};
exports.EVENT_TYPE = EVENT_TYPE;

const DEFAULT_EVENT_TYPES = {
  APPLICATION_INSTALLED: [EVENT_TYPE.APPLICATION_INSTALLED],
  ORDER_COMPLETE: [EVENT_TYPE.ORDER_COMPLETE, EVENT_TYPE.ORDER_COMPLETED],
  PAGE_LOAD: [EVENT_TYPE.PAGE_LOAD],
  SCREEN_LOAD: [EVENT_TYPE.SCREEN_LOAD]
};
exports.DEFAULT_EVENT_TYPES = DEFAULT_EVENT_TYPES;

const ENABLED_FLAG = {
  PAGE_LOAD: 'enablePageEvents',
  SCREEN_LOAD: 'enableScreenEvents',
  IDENTIFY: 'enableIdentifyEvents'
};
exports.ENABLED_FLAG = ENABLED_FLAG;

const INTEGRATION_SOURCE = 'Segment';
exports.INTEGRATION_SOURCE = INTEGRATION_SOURCE;

const INTEGRATION_VERSION = '1.7.0';
exports.INTEGRATION_VERSION = INTEGRATION_VERSION;


/***/ }),

/***/ "./src/crypto.js":
/*!***********************!*\
  !*** ./src/crypto.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* istanbul ignore file */

/* eslint global-require: off */

/* globals module, crypto, require */

/**
 * Crypto object or add a placehoalder if crypto is not installed.
 *
 * @type {crypto|{createHash: (function(): {update: function(String?): {digest: function(): String}})}}
 * @module mapper/eventType
 */
module.exports = typeof crypto !== 'undefined'
  ? crypto
  : (__webpack_require__(/*! crypto */ "crypto") || {
    createHash: () => {
      return {
        update: (value) => {
          return {
            digest: () => value
          };
        }
      };
    }
  });


/***/ }),

/***/ "./src/hash.js":
/*!*********************!*\
  !*** ./src/hash.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-undefined: off */

const crypto = __webpack_require__(/*! ./crypto */ "./src/crypto.js");

/**
 * Fill in potentially empty objects so we don't have to use null checks.
 *
 * @param {String} value
 * @returns {String}
 * @module hash
 */
module.exports = (value) => {
  if (value === undefined || value === null) {
    return undefined;
  }
  return crypto.createHash('sha1')
    .update(value.trim().toLowerCase())
    .digest('hex');
};


/***/ }),

/***/ "./src/mapper.js":
/*!***********************!*\
  !*** ./src/mapper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Config = __webpack_require__(/*! ./config */ "./src/config.js");
const DEVICE_TYPE = Config.DEVICE_TYPE;
const REFERRER_TYPE = Config.REFERRER_TYPE;
const INTEGRATION_SOURCE = Config.INTEGRATION_SOURCE;
const INTEGRATION_VERSION = Config.INTEGRATION_VERSION;
const hash = __webpack_require__(/*! ./hash */ "./src/hash.js");
const mergePresentData = __webpack_require__(/*! ./mergePresentData */ "./src/mergePresentData.js");

/**
 * Base mapping.
 *
 * @param {Object} event
 * @param {Object<String, *>} settings
 * @returns {{DeviceModel: *, EventDate: number, ReferringUrl: *, DeviceLocale: string, Latitude: number, CustomProfileId: *, CustomerId: *, AppVer: *, DeviceOs: *, Longitude: number, AppName: *, DeviceMfr: *, AppPackage: *, PageUrl: (*|{}|{enumerable: boolean}|string), PropertyId: *, CampaignId: *, CustomerEmail: ({type: string}|{type: string}|{type: string}|string), UserAgent: string | Window._resourceLoader._userAgent | {enumerable: boolean}, DeviceOsVer: *, IpAddress: string, DeviceCarrier: *, IntegrationSource: String, IntegrationVersion: String}}
 * @module mapper
 */
const commonMapper = (event, settings) => {
  return {
    CampaignId: settings.campaignId,
    PageUrl: event.context.page.url || event.properties.url || event.context.page.referrer || event.context.referrer.url,
    ReferringUrl: event.context.referrer.url || event.context.page.referrer,
    EventDate: event.timestamp,
    ClickId: event.context.referrer.id && String(event.context.referrer.type).toLowerCase() === REFERRER_TYPE
      ? event.context.referrer.id
      : undefined, // eslint-disable-line no-undefined
    CustomProfileId: event.anonymousId,
    CustomerId: event.userId,
    CustomerEmail: event.context.traits.email || event.properties.email,
    IpAddress: event.context.ip,
    AppName: event.context.app.name,
    AppPackage: event.context.app.namespace,
    AppVer: event.context.app.version,
    DeviceMfr: event.context.device.manufacturer,
    DeviceModel: event.context.device.model,
    DeviceCarrier: event.context.network.carrier,
    DeviceOs: event.context.device.type || event.context.os.name,
    DeviceOsVer: event.context.os.version,
    DeviceLocale: event.context.locale,
    UserAgent: event.context.userAgent,
    Latitude: event.context.location.latitude,
    Longitude: event.context.location.longitude,
    IntegrationSource: INTEGRATION_SOURCE,
    IntegrationVersion: INTEGRATION_VERSION
  };
};

/**
 * These are custom settings an end user can map an Impact value to a Segment value of their choosing.
 *
 * @param {Object} event
 * @param {Object} settings
 * @returns {Object}
 */
const customParameterMapper = (event, settings) => {
  const mapping = {};
  if (typeof settings.customParameterMapping !== 'object') {
    return mapping;
  }
  for (const key in settings.customParameterMapping) {
    /* istanbul ignore if */
    if (!settings.customParameterMapping.hasOwnProperty(key) || !settings.customParameterMapping[key]) {
      continue;
    }
    const value = findNestedValue(settings.customParameterMapping[key], event);
    if (typeof value !== 'undefined' && value !== null && value !== '') { // Make sure we use `false` if it exists yet ignore other falsies.
      mapping[key] = findNestedValue(settings.customParameterMapping[key], event);
    }
  }
  return mapping;
};

/**
 * Mobile specific data mapping.
 *
 * @param {Object} event
 * @param {Object} settings
 * @returns {{AppleAdTrack: *, PropertyId: *, AppleIfv: *, AppleIfa: *, MobileApp: true}|{AppleAdTrack: *, PropertyId: *, GoogAId: *, MobileApp: true}|{}}
 */
const appMapper = (event, settings) => {
  switch (String(event.context.device.type).toLowerCase()) {
    case DEVICE_TYPE.IOS.toLowerCase():
      return {
        PropertyId: settings.iOsAppId,
        AppleIfa: event.context.device.advertisingId,
        AppleAdTrack: event.context.device.adTrackingEnabled,
        AppleIfv: event.context.device.id
      };
    case DEVICE_TYPE.ANDROID.toLowerCase():
      return {
        PropertyId: settings.androidAppId,
        GoogAId: event.context.device.advertisingId,
        AppleAdTrack: event.context.device.adTrackingEnabled
      };
    default:
      return {};
  }
};

/**
 * Any post hashing or similar filtering we may need to do.
 *
 * @param {{}} mapping
 * @returns {{}}
 */
const filter = (mapping) => {
  if (mapping.CustomerEmail) {
    mapping.CustomerEmail = hash(mapping.CustomerEmail);
  }
  return mapping;
};

/**
 * Common mapper to handle all of the base cases.
 *
 * @type {{product: Function, common: Function}}
 */
module.exports = (event, settings) => {
  return filter(mergePresentData(commonMapper(event, settings), appMapper(event, settings), customParameterMapper(event, settings)));
};
module.exports.customParameterMapper = (mappedData, event, settings) => {
  return mergePresentData(mappedData, customParameterMapper(event, settings));
};

/**
 * Find a nested value within a given object.
 *
 * @param {String} key
 * @param {Object} source
 */
function findNestedValue(key, source) {
  const keyParts = key.split('.');
  let currentValue = source;
  for (let i = 0, count = keyParts.length; i < count; ++i) {
    /* istanbul ignore if */
    if (typeof currentValue !== 'object') {
      return null;
    }
    currentValue = currentValue[keyParts[i]];
  }
  return currentValue;
}


/***/ }),

/***/ "./src/mapper/eventType.js":
/*!*********************************!*\
  !*** ./src/mapper/eventType.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals module, require */

const Config = __webpack_require__(/*! ../config */ "./src/config.js");
const EVENT_TYPE = Config.EVENT_TYPE;
const DEFAULT_EVENT_TYPES = Config.DEFAULT_EVENT_TYPES;

/**
 * Check a collection for a specific value if it exists and return that value.
 *
 * @param {String} value
 * @param {Array} collection
 * @param {String} baseValue
 * @returns {*}
 */
const findInCollection = (value, collection, baseValue) => {
  value = String(value).toLowerCase();
  collection = collection || [];
  /* istanbul ignore if */
  if (!Array.isArray(collection)) {
    collection = [collection];
  }
  collection = collection
    .concat(baseValue || /* istanbul ignore next */ [])
    .map(_ => String(_).toLowerCase());
  const offset = collection.indexOf(value);
  return offset > -1
    ? collection[offset]
    : null;
};

/**
 * Map eventType to a specific expected event type based off of client settings and default values.
 *
 * Note: One caveat, if for some reason EVENT_TYPE.ORDER_COMPLETE is included in the installEventNames then it will
 *   return EVENT_TYPE.APPLICATION_INSTALLED as event type. Would most likely be an implementation error. Same if
 *   EVENT_TYPE.APPLICATION_INSTALLED is set in actionEventNames it will still come back as
 *   EVENT_TYPE.APPLICATION_INSTALLED.
 *
 * @param {String} type
 * @param {Object<String, *>} settings
 * @returns {String?}
 * @module mapper/eventType
 */
module.exports = (type, settings) => {
  const installEventName = findInCollection(type, settings.installEventNames, DEFAULT_EVENT_TYPES.APPLICATION_INSTALLED);
  if (installEventName) {
    return EVENT_TYPE.APPLICATION_INSTALLED;
  }

  const actionEventName = findInCollection(type, settings.actionEventNames, DEFAULT_EVENT_TYPES.ORDER_COMPLETE);
  if (actionEventName) {
    return EVENT_TYPE.ORDER_COMPLETE;
  }

  return null;
};


/***/ }),

/***/ "./src/mapper/product.js":
/*!*******************************!*\
  !*** ./src/mapper/product.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals module, require */

const DEFAULT_ORDER_ID = __webpack_require__(/*! ../config */ "./src/config.js").DEFAULT_ORDER_ID;
const PRICE_KEY = 'ItemPrice';
const REVENUE_KEY = 'OrderSubTotalPostDiscount';
const ITEM_KEY_MAPPING = {
  brand: 'ItemBrand',
  category: 'ItemCategory',
  coupon: 'ItemPromoCode',
  name: 'ItemName',
  price: PRICE_KEY,
  quantity: 'ItemQuantity',
  sku: 'ItemSku'
};
const ORDER_KEY_MAPPING = {
  coupon: 'OrderPromoCode',
  currency: 'CurrencyCode',
  discount: 'OrderDiscount',
  shipping: 'OrderShipping',
  tax: 'OrderTax'
};

const getOrderIdIfPresent = (orderId) => {
  if (Array.isArray(orderId)) {
    return orderId.length
      ? orderId
      : null;
  }
  return orderId || null;
};

/**
 * Map product data.
 *
 * @param {Object} event
 * @param {Object} customMapping
 * @returns {Object}
 * @module mapper/product
 */
module.exports = (event, customMapping) => {
  const productData = {};

  const properties = (event || /* istanbul ignore next */ {}).properties || {};
  if (!Object.keys(properties).length) {
    return productData;
  }

  /*
   * Set our OrderId or use the internal Impact generation.
   */
  productData.OrderId = getOrderIdIfPresent(event.properties.orderId)
    || getOrderIdIfPresent(event.properties.order_id)
    || getOrderIdIfPresent(event.properties.transactionID)
    || getOrderIdIfPresent(event.properties.messageId)
    || getOrderIdIfPresent(event.messageId)
    || DEFAULT_ORDER_ID;

  for (const key in properties) {
    /* istanbul ignore if */
    if (!properties.hasOwnProperty(key) || !ORDER_KEY_MAPPING[key] || key === 'total') {
      continue;
    }
    productData[ORDER_KEY_MAPPING[key]] = properties[key];
  }

  const mergedMapping = {};
  let priceKey = 'price';
  for (const key in ITEM_KEY_MAPPING) {
    /* istanbul ignore if */
    if (!ITEM_KEY_MAPPING.hasOwnProperty(key)) {
      continue;
    }
    if (customMapping[ITEM_KEY_MAPPING[key]]) {
      if (ITEM_KEY_MAPPING[key] === PRICE_KEY) {
        priceKey = customMapping[ITEM_KEY_MAPPING[key]];
      }
      mergedMapping[customMapping[ITEM_KEY_MAPPING[key]]] = ITEM_KEY_MAPPING[key];
    } else {
      mergedMapping[key] = ITEM_KEY_MAPPING[key];
    }
  }

  /*
   * We need to do a second pass through of just custom mapping to make sure we handle cases that don't already
   * exist.
   */
  for (const key in customMapping) {
    if (key === PRICE_KEY) {
      priceKey = customMapping[key];
    }
    mergedMapping[customMapping[key]] = key;
  }

  /*
   * If we have item level pricing we should use that, otherwise don't add price and instead use properties.total
   * instead since Impact side will double credit if both exist so we must use one or the other.
   */
  const products = properties.products || [];
  for (let i = 0, count = products.length; i < count; ++i) {
    const product = products[i];
    for (const key in product) {
      /* istanbul ignore if */
      if (!product.hasOwnProperty(key) || !mergedMapping[key]) {
        continue;
      }
      productData[`${mergedMapping[key]}${i}`] = product[key];
    }
    if (!productData[priceKey] && product.subtotal) {
      productData[`${PRICE_KEY}${i}`] = product.subtotal;
    }
  }

  if (!productData[`${PRICE_KEY}0`]) {
    const revenue = properties.revenue || properties.total || null;
    if (revenue) {
      productData[REVENUE_KEY] = revenue;
    }
  }

  return productData;
};


/***/ }),

/***/ "./src/mergePresentData.js":
/*!*********************************!*\
  !*** ./src/mergePresentData.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals module */

/**
 * Create form data on a flat object. Note this won't handle nested objects.
 *
 * @param {...Object} data
 * @returns {Object}
 * @module post/mergePresentData
 */
module.exports = (...data) => {
  return data.reduce((gathered, item) => {
    Object.keys(item)
      .filter(key => typeof item[key] !== 'undefined')
      .forEach(key => gathered[key] = item[key])
    return gathered;
  }, {});
};


/***/ }),

/***/ "./src/parseEvent.js":
/*!***************************!*\
  !*** ./src/parseEvent.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals module, _ */

/**
 * Fill in potentially empty objects so we don't have to use null checks.
 *
 * @param {Object} event
 * @returns {Object}
 * @module parseEvent
 */
module.exports = (event) => {
  return _.defaultsDeep({}, event, {
    context: {
      app: {},
      device: {},
      location: {},
      network: {},
      os: {},
      page: {},
      properties: {},
      referrer: {},
      traits: {}
    },
    properties: {}
  });
};


/***/ }),

/***/ "./src/post.js":
/*!*********************!*\
  !*** ./src/post.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-console: off */

/* globals module, console */

/**
 * Post data to our servers.
 *
 * @param {String} endpoint
 * @param {Promise<Object<String, *>>} promisedData
 * @param {Headers?} headers
 * @returns {Promise<Object<String, *>>}
 * @module post
 */
module.exports = async(endpoint, promisedData, headers) => {
  const data = await promisedData;
  console.info('POSTING:', endpoint, data);
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: data
  });
  const responseData = await res.json();
  console.info('RESPONSE:', responseData);
  return responseData;
};


/***/ }),

/***/ "./src/post/createFormData.js":
/*!************************************!*\
  !*** ./src/post/createFormData.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals module */

/**
 * Create form data on a flat object. Note this won't handle nested objects.
 *
 * @param {Object} data
 * @returns {String}
 * @module post/createFormData
 */
module.exports = (data) => {
  return Object.keys(data)
    .filter(key => data[key] !== null && typeof data[key] !== 'undefined')
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};


/***/ }),

/***/ "./src/post/retrieveClickId.js":
/*!*************************************!*\
  !*** ./src/post/retrieveClickId.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/* globals module, require */

const Config = __webpack_require__(/*! ../config */ "./src/config.js");
const ENDPOINT = Config.ENDPOINT;
const createFormData = __webpack_require__(/*! ./createFormData */ "./src/post/createFormData.js");
const mergePresentData = __webpack_require__(/*! ../mergePresentData */ "./src/mergePresentData.js");

const irClickIdParameter = 'irclickid';
const findIrClickId = (url) => {
  const queryString = (url || '').split('?');
  if (!queryString[1]) {
    return;
  }
  const pairs = queryString[1].split('&');
  for (let i = 0, count = pairs.length; i < count; ++i) {
    const [key, value] = pairs[i].split('=');
    if (key === irClickIdParameter) {
      /* istanbul ignore next */
      try {
        return decodeURIComponent(value);
      } catch (e) {
        return value;
      }
    }
  }
}

/**
 * Auxiliary data for an install event.
 *
 * @param {module:post} post
 * @returns {(function(formData: Object): Promise<{ClickId: String?}>)}
 * @module post/retrieveClickId
 */
module.exports = (post) => {
  return async(formData) => {
    const response = await post(
      ENDPOINT.APPLICATION_INSTALL,
      new Promise(resolve => process.nextTick(() => resolve(createFormData(formData)))),
      new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    );
    if (response.clickId) {
      return new Promise(resolve => resolve(mergePresentData(formData, {ClickId: response.clickId})));
    }
    return new Promise(resolve => resolve(mergePresentData(formData, {ClickId: findIrClickId(response.landingPage)})));
  };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/* globals module, require */

const createFormData = __webpack_require__(/*! ./post/createFormData */ "./src/post/createFormData.js");
const mapEventType = __webpack_require__(/*! ./mapper/eventType */ "./src/mapper/eventType.js");
const mergePresentData = __webpack_require__(/*! ./mergePresentData */ "./src/mergePresentData.js");
const {customParameterMapper} = __webpack_require__(/*! ./mapper */ "./src/mapper.js");

const action = __webpack_require__(/*! ./track/action */ "./src/track/action.js");
const ApplicationInstalled = __webpack_require__(/*! ./track/applicationInstalled */ "./src/track/applicationInstalled.js");

const Config = __webpack_require__(/*! ./config */ "./src/config.js");
const EVENT_TYPE = Config.EVENT_TYPE;
const ENDPOINT = Config.ENDPOINT;

/**
 * Handle routing for incoming events and pass them to their destination. First we need to inject the post function
 * though, for easier testing purposes.
 *
 * @param {module:post} post
 * @returns {function(event: Object, settings: Object<String, *>, commonData: Object<String, *>, eventTypeOverride: String?): Promise<JSON>}
 * @module router
 */
module.exports = (post) => {
  const applicationInstalled = ApplicationInstalled(post);
  return (event, settings, commonData, eventTypeOverride) => {
    let promisedAuxiliaryData = new Promise(resolve => process.nextTick(() => resolve({})));
    const eventType = mapEventType(event.event, settings);
    switch (eventTypeOverride || eventType) {
      case EVENT_TYPE.ORDER_COMPLETE:
        promisedAuxiliaryData = action(event, settings);
        break;
      case EVENT_TYPE.APPLICATION_INSTALLED:
        promisedAuxiliaryData = applicationInstalled(event, settings, commonData);
        break;
      default:
        return post(
          ENDPOINT.PAGE_LOAD,
          new Promise(resolve => resolve(JSON.stringify(commonData))),
          new Headers({'Content-Type': 'application/json'})
        );
    }
    return post(
      ENDPOINT.CONVERSION_PREFIX + '/' + settings.accountSid + ENDPOINT.CONVERSION_SUFFIX,
      new Promise(resolve => promisedAuxiliaryData.then((auxiliaryData) => {
        resolve(createFormData(mergePresentData(commonData, customParameterMapper(auxiliaryData, event, settings))));
      })),
      new Headers({
        'Authorization': 'Basic ' + btoa(settings.accountSid + ':' + settings.apiKey),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    );
  };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/track/action.js":
/*!*****************************!*\
  !*** ./src/track/action.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/* globals module, require */

const mapProductData = __webpack_require__(/*! ../mapper/product */ "./src/mapper/product.js");

/**
 * Auxiliary data for an order event.
 *
 * @param {Object} event
 * @param {Object<String, *>} settings
 * @returns {Promise<Object<String, *>>}
 * @module track/action
 */
module.exports = (event, settings) => {
  return new Promise((resolve) => {
    process.nextTick(() => {
      const auxiliaryData = mapProductData(event, settings.customMappingForProducts || {});
      auxiliaryData.CustomerStatus = event.context.traits.status;
      auxiliaryData.EventTypeCode = event.event
        ? String(event.event).replace(',', '') // Strip out commas, they have a special meaning in Impact's API.
        : null;
      auxiliaryData.EventTypeId = settings.eventTypeId
        ? parseInt(settings.eventTypeId, 10)
        : null;
      resolve(auxiliaryData);
    });
  });
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/track/applicationInstalled.js":
/*!*******************************************!*\
  !*** ./src/track/applicationInstalled.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals module, require */

const Config = __webpack_require__(/*! ../config */ "./src/config.js");
const DEVICE_TYPE = Config.DEVICE_TYPE;
const EVENT_TYPE = Config.EVENT_TYPE;
const RetrieveClickId = __webpack_require__(/*! ../post/retrieveClickId */ "./src/post/retrieveClickId.js");
const appendCommonData = __webpack_require__(/*! ../mergePresentData */ "./src/mergePresentData.js");

/**
 * Auxiliary data for an install event.
 *
 * @returns {function(event: Object, settings: Object<String, *>, commonData: Object<String, *>): Promise<Object<String, *>>}
 * @module track/applicationInstalled
 */
module.exports = (post) => {
  const retrieveClickId = RetrieveClickId(post);
  return (event, settings, commonData) => {
    return new Promise((resolve) => {
      retrieveClickId(commonData).then(responseData => resolve(appendCommonData(responseData, {
        EventTypeId: event.context.device.type === DEVICE_TYPE.IOS
          ? settings.iOsAppId
          : settings.androidAppId,
        EventCode: EVENT_TYPE.INSTALL
      })));
    });
  };
}


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = crypto;

/***/ })

/******/ });