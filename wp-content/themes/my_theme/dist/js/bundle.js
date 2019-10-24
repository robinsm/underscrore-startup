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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _retina_1_3_0_retina_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retina-1.3.0/retina.js */ "./src/js/retina-1.3.0/retina.js");
/* harmony import */ var _retina_1_3_0_retina_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_retina_1_3_0_retina_js__WEBPACK_IMPORTED_MODULE_0__);

console.log('bundle.js loading');

/***/ }),

/***/ "./src/js/retina-1.3.0/retina.js":
/*!***************************************!*\
  !*** ./src/js/retina-1.3.0/retina.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
console.log('retina.js loading');

(function () {
  var root =  false ? undefined : exports;
  var config = {
    // An option to choose a suffix for 2x images
    retinaImageSuffix: '@2x',
    // Ensure Content-Type is an image before trying to load @2x image
    // https://github.com/imulus/retinajs/pull/45)
    check_mime_type: true,
    // Resize high-resolution images to original image's pixel dimensions
    // https://github.com/imulus/retinajs/issues/8
    force_original_dimensions: true
  };

  function Retina() {}

  root.Retina = Retina;

  Retina.configure = function (options) {
    if (options === null) {
      options = {};
    }

    for (var prop in options) {
      if (options.hasOwnProperty(prop)) {
        config[prop] = options[prop];
      }
    }
  };

  Retina.init = function (context) {
    if (context === null) {
      context = root;
    }

    var existing_onload = context.onload || function () {};

    context.onload = function () {
      var images = document.getElementsByTagName('img'),
          retinaImages = [],
          i,
          image;

      for (i = 0; i < images.length; i += 1) {
        image = images[i];

        if (!!!image.getAttributeNode('data-no-retina')) {
          retinaImages.push(new RetinaImage(image));
        }
      }

      existing_onload();
    };
  };

  Retina.isRetina = function () {
    var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';

    if (root.devicePixelRatio > 1) {
      return true;
    }

    if (root.matchMedia && root.matchMedia(mediaQuery).matches) {
      return true;
    }

    return false;
  };

  var regexMatch = /\.\w+$/;

  function suffixReplace(match) {
    return config.retinaImageSuffix + match;
  }

  function RetinaImagePath(path, at_2x_path) {
    this.path = path || '';

    if (typeof at_2x_path !== 'undefined' && at_2x_path !== null) {
      this.at_2x_path = at_2x_path;
      this.perform_check = false;
    } else {
      if (undefined !== document.createElement) {
        var locationObject = document.createElement('a');
        locationObject.href = this.path;
        locationObject.pathname = locationObject.pathname.replace(regexMatch, suffixReplace);
        this.at_2x_path = locationObject.href;
      } else {
        var parts = this.path.split('?');
        parts[0] = parts[0].replace(regexMatch, suffixReplace);
        this.at_2x_path = parts.join('?');
      }

      this.perform_check = true;
    }
  }

  root.RetinaImagePath = RetinaImagePath;
  RetinaImagePath.confirmed_paths = [];

  RetinaImagePath.prototype.is_external = function () {
    return !!(this.path.match(/^https?\:/i) && !this.path.match('//' + document.domain));
  };

  RetinaImagePath.prototype.check_2x_variant = function (callback) {
    var http,
        that = this;

    if (this.is_external()) {
      return callback(false);
    } else if (!this.perform_check && typeof this.at_2x_path !== 'undefined' && this.at_2x_path !== null) {
      return callback(true);
    } else if (this.at_2x_path in RetinaImagePath.confirmed_paths) {
      return callback(true);
    } else {
      http = new XMLHttpRequest();
      http.open('HEAD', this.at_2x_path);

      http.onreadystatechange = function () {
        if (http.readyState !== 4) {
          return callback(false);
        }

        if (http.status >= 200 && http.status <= 399) {
          if (config.check_mime_type) {
            var type = http.getResponseHeader('Content-Type');

            if (type === null || !type.match(/^image/i)) {
              return callback(false);
            }
          }

          RetinaImagePath.confirmed_paths.push(that.at_2x_path);
          return callback(true);
        } else {
          return callback(false);
        }
      };

      http.send();
    }
  };

  function RetinaImage(el) {
    this.el = el;
    this.path = new RetinaImagePath(this.el.getAttribute('src'), this.el.getAttribute('data-at2x'));
    var that = this;
    this.path.check_2x_variant(function (hasVariant) {
      if (hasVariant) {
        that.swap();
      }
    });
  }

  root.RetinaImage = RetinaImage;

  RetinaImage.prototype.swap = function (path) {
    if (typeof path === 'undefined') {
      path = this.path.at_2x_path;
    }

    var that = this;

    function load() {
      if (!that.el.complete) {
        setTimeout(load, 5);
      } else {
        if (config.force_original_dimensions) {
          that.el.setAttribute('width', that.el.offsetWidth);
          that.el.setAttribute('height', that.el.offsetHeight);
        }

        that.el.setAttribute('src', path);
      }
    }

    load();
  };

  if (Retina.isRetina()) {
    Retina.init(root);
  }
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcmV0aW5hLTEuMy4wL3JldGluYS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicm9vdCIsIndpbmRvdyIsImV4cG9ydHMiLCJjb25maWciLCJyZXRpbmFJbWFnZVN1ZmZpeCIsImNoZWNrX21pbWVfdHlwZSIsImZvcmNlX29yaWdpbmFsX2RpbWVuc2lvbnMiLCJSZXRpbmEiLCJjb25maWd1cmUiLCJvcHRpb25zIiwicHJvcCIsImhhc093blByb3BlcnR5IiwiaW5pdCIsImNvbnRleHQiLCJleGlzdGluZ19vbmxvYWQiLCJvbmxvYWQiLCJpbWFnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicmV0aW5hSW1hZ2VzIiwiaSIsImltYWdlIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlTm9kZSIsInB1c2giLCJSZXRpbmFJbWFnZSIsImlzUmV0aW5hIiwibWVkaWFRdWVyeSIsImRldmljZVBpeGVsUmF0aW8iLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInJlZ2V4TWF0Y2giLCJzdWZmaXhSZXBsYWNlIiwibWF0Y2giLCJSZXRpbmFJbWFnZVBhdGgiLCJwYXRoIiwiYXRfMnhfcGF0aCIsInBlcmZvcm1fY2hlY2siLCJ1bmRlZmluZWQiLCJjcmVhdGVFbGVtZW50IiwibG9jYXRpb25PYmplY3QiLCJocmVmIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwicGFydHMiLCJzcGxpdCIsImpvaW4iLCJjb25maXJtZWRfcGF0aHMiLCJwcm90b3R5cGUiLCJpc19leHRlcm5hbCIsImRvbWFpbiIsImNoZWNrXzJ4X3ZhcmlhbnQiLCJjYWxsYmFjayIsImh0dHAiLCJ0aGF0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsInNlbmQiLCJlbCIsImdldEF0dHJpYnV0ZSIsImhhc1ZhcmlhbnQiLCJzd2FwIiwibG9hZCIsImNvbXBsZXRlIiwic2V0VGltZW91dCIsInNldEF0dHJpYnV0ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEU7Ozs7Ozs7Ozs7O0FDREE7Ozs7Ozs7OztBQVNBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjs7QUFFQSxDQUFDLFlBQVc7QUFDWCxNQUFJQyxJQUFJLEdBQUcsU0FBaUNDLFNBQWpDLEdBQTBDQyxPQUFyRDtBQUNBLE1BQUlDLE1BQU0sR0FBRztBQUNaO0FBQ0FDLHFCQUFpQixFQUFFLEtBRlA7QUFJWjtBQUNBO0FBQ0FDLG1CQUFlLEVBQUUsSUFOTDtBQVFaO0FBQ0E7QUFDQUMsNkJBQXlCLEVBQUU7QUFWZixHQUFiOztBQWFBLFdBQVNDLE1BQVQsR0FBa0IsQ0FBRTs7QUFFcEJQLE1BQUksQ0FBQ08sTUFBTCxHQUFjQSxNQUFkOztBQUVBQSxRQUFNLENBQUNDLFNBQVAsR0FBbUIsVUFBU0MsT0FBVCxFQUFrQjtBQUNwQyxRQUFJQSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDckJBLGFBQU8sR0FBRyxFQUFWO0FBQ0E7O0FBRUQsU0FBSyxJQUFJQyxJQUFULElBQWlCRCxPQUFqQixFQUEwQjtBQUN6QixVQUFJQSxPQUFPLENBQUNFLGNBQVIsQ0FBdUJELElBQXZCLENBQUosRUFBa0M7QUFDakNQLGNBQU0sQ0FBQ08sSUFBRCxDQUFOLEdBQWVELE9BQU8sQ0FBQ0MsSUFBRCxDQUF0QjtBQUNBO0FBQ0Q7QUFDRCxHQVZEOztBQVlBSCxRQUFNLENBQUNLLElBQVAsR0FBYyxVQUFTQyxPQUFULEVBQWtCO0FBQy9CLFFBQUlBLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNyQkEsYUFBTyxHQUFHYixJQUFWO0FBQ0E7O0FBRUQsUUFBSWMsZUFBZSxHQUFHRCxPQUFPLENBQUNFLE1BQVIsSUFBa0IsWUFBVyxDQUFFLENBQXJEOztBQUVBRixXQUFPLENBQUNFLE1BQVIsR0FBaUIsWUFBVztBQUMzQixVQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0Msb0JBQVQsQ0FBOEIsS0FBOUIsQ0FBYjtBQUFBLFVBQ0NDLFlBQVksR0FBRyxFQURoQjtBQUFBLFVBRUNDLENBRkQ7QUFBQSxVQUdDQyxLQUhEOztBQUlBLFdBQUtELENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0osTUFBTSxDQUFDTSxNQUF2QixFQUErQkYsQ0FBQyxJQUFJLENBQXBDLEVBQXVDO0FBQ3RDQyxhQUFLLEdBQUdMLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFkOztBQUNBLFlBQUksQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQ0UsZ0JBQU4sQ0FBdUIsZ0JBQXZCLENBQVAsRUFBaUQ7QUFDaERKLHNCQUFZLENBQUNLLElBQWIsQ0FBa0IsSUFBSUMsV0FBSixDQUFnQkosS0FBaEIsQ0FBbEI7QUFDQTtBQUNEOztBQUNEUCxxQkFBZTtBQUNmLEtBWkQ7QUFhQSxHQXBCRDs7QUFzQkFQLFFBQU0sQ0FBQ21CLFFBQVAsR0FBa0IsWUFBVztBQUM1QixRQUFJQyxVQUFVLEdBQ2Isd0lBREQ7O0FBR0EsUUFBSTNCLElBQUksQ0FBQzRCLGdCQUFMLEdBQXdCLENBQTVCLEVBQStCO0FBQzlCLGFBQU8sSUFBUDtBQUNBOztBQUVELFFBQUk1QixJQUFJLENBQUM2QixVQUFMLElBQW1CN0IsSUFBSSxDQUFDNkIsVUFBTCxDQUFnQkYsVUFBaEIsRUFBNEJHLE9BQW5ELEVBQTREO0FBQzNELGFBQU8sSUFBUDtBQUNBOztBQUVELFdBQU8sS0FBUDtBQUNBLEdBYkQ7O0FBZUEsTUFBSUMsVUFBVSxHQUFHLFFBQWpCOztBQUNBLFdBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzdCLFdBQU85QixNQUFNLENBQUNDLGlCQUFQLEdBQTJCNkIsS0FBbEM7QUFDQTs7QUFFRCxXQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsVUFBL0IsRUFBMkM7QUFDMUMsU0FBS0QsSUFBTCxHQUFZQSxJQUFJLElBQUksRUFBcEI7O0FBQ0EsUUFBSSxPQUFPQyxVQUFQLEtBQXNCLFdBQXRCLElBQXFDQSxVQUFVLEtBQUssSUFBeEQsRUFBOEQ7QUFDN0QsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsS0FIRCxNQUdPO0FBQ04sVUFBSUMsU0FBUyxLQUFLckIsUUFBUSxDQUFDc0IsYUFBM0IsRUFBMEM7QUFDekMsWUFBSUMsY0FBYyxHQUFHdkIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixHQUF2QixDQUFyQjtBQUNBQyxzQkFBYyxDQUFDQyxJQUFmLEdBQXNCLEtBQUtOLElBQTNCO0FBQ0FLLHNCQUFjLENBQUNFLFFBQWYsR0FBMEJGLGNBQWMsQ0FBQ0UsUUFBZixDQUF3QkMsT0FBeEIsQ0FBZ0NaLFVBQWhDLEVBQTRDQyxhQUE1QyxDQUExQjtBQUNBLGFBQUtJLFVBQUwsR0FBa0JJLGNBQWMsQ0FBQ0MsSUFBakM7QUFDQSxPQUxELE1BS087QUFDTixZQUFJRyxLQUFLLEdBQUcsS0FBS1QsSUFBTCxDQUFVVSxLQUFWLENBQWdCLEdBQWhCLENBQVo7QUFDQUQsYUFBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNELE9BQVQsQ0FBaUJaLFVBQWpCLEVBQTZCQyxhQUE3QixDQUFYO0FBQ0EsYUFBS0ksVUFBTCxHQUFrQlEsS0FBSyxDQUFDRSxJQUFOLENBQVcsR0FBWCxDQUFsQjtBQUNBOztBQUNELFdBQUtULGFBQUwsR0FBcUIsSUFBckI7QUFDQTtBQUNEOztBQUVEckMsTUFBSSxDQUFDa0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFFQUEsaUJBQWUsQ0FBQ2EsZUFBaEIsR0FBa0MsRUFBbEM7O0FBRUFiLGlCQUFlLENBQUNjLFNBQWhCLENBQTBCQyxXQUExQixHQUF3QyxZQUFXO0FBQ2xELFdBQU8sQ0FBQyxFQUFFLEtBQUtkLElBQUwsQ0FBVUYsS0FBVixDQUFnQixZQUFoQixLQUFpQyxDQUFDLEtBQUtFLElBQUwsQ0FBVUYsS0FBVixDQUFnQixPQUFPaEIsUUFBUSxDQUFDaUMsTUFBaEMsQ0FBcEMsQ0FBUjtBQUNBLEdBRkQ7O0FBSUFoQixpQkFBZSxDQUFDYyxTQUFoQixDQUEwQkcsZ0JBQTFCLEdBQTZDLFVBQVNDLFFBQVQsRUFBbUI7QUFDL0QsUUFBSUMsSUFBSjtBQUFBLFFBQ0NDLElBQUksR0FBRyxJQURSOztBQUVBLFFBQUksS0FBS0wsV0FBTCxFQUFKLEVBQXdCO0FBQ3ZCLGFBQU9HLFFBQVEsQ0FBQyxLQUFELENBQWY7QUFDQSxLQUZELE1BRU8sSUFBSSxDQUFDLEtBQUtmLGFBQU4sSUFBdUIsT0FBTyxLQUFLRCxVQUFaLEtBQTJCLFdBQWxELElBQWlFLEtBQUtBLFVBQUwsS0FBb0IsSUFBekYsRUFBK0Y7QUFDckcsYUFBT2dCLFFBQVEsQ0FBQyxJQUFELENBQWY7QUFDQSxLQUZNLE1BRUEsSUFBSSxLQUFLaEIsVUFBTCxJQUFtQkYsZUFBZSxDQUFDYSxlQUF2QyxFQUF3RDtBQUM5RCxhQUFPSyxRQUFRLENBQUMsSUFBRCxDQUFmO0FBQ0EsS0FGTSxNQUVBO0FBQ05DLFVBQUksR0FBRyxJQUFJRSxjQUFKLEVBQVA7QUFDQUYsVUFBSSxDQUFDRyxJQUFMLENBQVUsTUFBVixFQUFrQixLQUFLcEIsVUFBdkI7O0FBQ0FpQixVQUFJLENBQUNJLGtCQUFMLEdBQTBCLFlBQVc7QUFDcEMsWUFBSUosSUFBSSxDQUFDSyxVQUFMLEtBQW9CLENBQXhCLEVBQTJCO0FBQzFCLGlCQUFPTixRQUFRLENBQUMsS0FBRCxDQUFmO0FBQ0E7O0FBRUQsWUFBSUMsSUFBSSxDQUFDTSxNQUFMLElBQWUsR0FBZixJQUFzQk4sSUFBSSxDQUFDTSxNQUFMLElBQWUsR0FBekMsRUFBOEM7QUFDN0MsY0FBSXhELE1BQU0sQ0FBQ0UsZUFBWCxFQUE0QjtBQUMzQixnQkFBSXVELElBQUksR0FBR1AsSUFBSSxDQUFDUSxpQkFBTCxDQUF1QixjQUF2QixDQUFYOztBQUNBLGdCQUFJRCxJQUFJLEtBQUssSUFBVCxJQUFpQixDQUFDQSxJQUFJLENBQUMzQixLQUFMLENBQVcsU0FBWCxDQUF0QixFQUE2QztBQUM1QyxxQkFBT21CLFFBQVEsQ0FBQyxLQUFELENBQWY7QUFDQTtBQUNEOztBQUVEbEIseUJBQWUsQ0FBQ2EsZUFBaEIsQ0FBZ0N2QixJQUFoQyxDQUFxQzhCLElBQUksQ0FBQ2xCLFVBQTFDO0FBQ0EsaUJBQU9nQixRQUFRLENBQUMsSUFBRCxDQUFmO0FBQ0EsU0FWRCxNQVVPO0FBQ04saUJBQU9BLFFBQVEsQ0FBQyxLQUFELENBQWY7QUFDQTtBQUNELE9BbEJEOztBQW1CQUMsVUFBSSxDQUFDUyxJQUFMO0FBQ0E7QUFDRCxHQWpDRDs7QUFtQ0EsV0FBU3JDLFdBQVQsQ0FBcUJzQyxFQUFyQixFQUF5QjtBQUN4QixTQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLNUIsSUFBTCxHQUFZLElBQUlELGVBQUosQ0FBb0IsS0FBSzZCLEVBQUwsQ0FBUUMsWUFBUixDQUFxQixLQUFyQixDQUFwQixFQUFpRCxLQUFLRCxFQUFMLENBQVFDLFlBQVIsQ0FBcUIsV0FBckIsQ0FBakQsQ0FBWjtBQUNBLFFBQUlWLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS25CLElBQUwsQ0FBVWdCLGdCQUFWLENBQTJCLFVBQVNjLFVBQVQsRUFBcUI7QUFDL0MsVUFBSUEsVUFBSixFQUFnQjtBQUNmWCxZQUFJLENBQUNZLElBQUw7QUFDQTtBQUNELEtBSkQ7QUFLQTs7QUFFRGxFLE1BQUksQ0FBQ3lCLFdBQUwsR0FBbUJBLFdBQW5COztBQUVBQSxhQUFXLENBQUN1QixTQUFaLENBQXNCa0IsSUFBdEIsR0FBNkIsVUFBUy9CLElBQVQsRUFBZTtBQUMzQyxRQUFJLE9BQU9BLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDaENBLFVBQUksR0FBRyxLQUFLQSxJQUFMLENBQVVDLFVBQWpCO0FBQ0E7O0FBRUQsUUFBSWtCLElBQUksR0FBRyxJQUFYOztBQUNBLGFBQVNhLElBQVQsR0FBZ0I7QUFDZixVQUFJLENBQUNiLElBQUksQ0FBQ1MsRUFBTCxDQUFRSyxRQUFiLEVBQXVCO0FBQ3RCQyxrQkFBVSxDQUFDRixJQUFELEVBQU8sQ0FBUCxDQUFWO0FBQ0EsT0FGRCxNQUVPO0FBQ04sWUFBSWhFLE1BQU0sQ0FBQ0cseUJBQVgsRUFBc0M7QUFDckNnRCxjQUFJLENBQUNTLEVBQUwsQ0FBUU8sWUFBUixDQUFxQixPQUFyQixFQUE4QmhCLElBQUksQ0FBQ1MsRUFBTCxDQUFRUSxXQUF0QztBQUNBakIsY0FBSSxDQUFDUyxFQUFMLENBQVFPLFlBQVIsQ0FBcUIsUUFBckIsRUFBK0JoQixJQUFJLENBQUNTLEVBQUwsQ0FBUVMsWUFBdkM7QUFDQTs7QUFFRGxCLFlBQUksQ0FBQ1MsRUFBTCxDQUFRTyxZQUFSLENBQXFCLEtBQXJCLEVBQTRCbkMsSUFBNUI7QUFDQTtBQUNEOztBQUNEZ0MsUUFBSTtBQUNKLEdBbkJEOztBQXFCQSxNQUFJNUQsTUFBTSxDQUFDbUIsUUFBUCxFQUFKLEVBQXVCO0FBQ3RCbkIsVUFBTSxDQUFDSyxJQUFQLENBQVlaLElBQVo7QUFDQTtBQUNELENBN0tELEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiaW1wb3J0ICcuL3JldGluYS0xLjMuMC9yZXRpbmEuanMnO1xuY29uc29sZS5sb2coJ2J1bmRsZS5qcyBsb2FkaW5nJyk7XG4iLCIvKiFcbiAqIFJldGluYS5qcyB2MS4zLjBcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNCBJbXVsdXMsIExMQ1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogUmV0aW5hLmpzIGlzIGFuIG9wZW4gc291cmNlIHNjcmlwdCB0aGF0IG1ha2VzIGl0IGVhc3kgdG8gc2VydmVcbiAqIGhpZ2gtcmVzb2x1dGlvbiBpbWFnZXMgdG8gZGV2aWNlcyB3aXRoIHJldGluYSBkaXNwbGF5cy5cbiAqL1xuY29uc29sZS5sb2coJ3JldGluYS5qcyBsb2FkaW5nJyk7XG5cbihmdW5jdGlvbigpIHtcblx0dmFyIHJvb3QgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBleHBvcnRzO1xuXHR2YXIgY29uZmlnID0ge1xuXHRcdC8vIEFuIG9wdGlvbiB0byBjaG9vc2UgYSBzdWZmaXggZm9yIDJ4IGltYWdlc1xuXHRcdHJldGluYUltYWdlU3VmZml4OiAnQDJ4JyxcblxuXHRcdC8vIEVuc3VyZSBDb250ZW50LVR5cGUgaXMgYW4gaW1hZ2UgYmVmb3JlIHRyeWluZyB0byBsb2FkIEAyeCBpbWFnZVxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbXVsdXMvcmV0aW5hanMvcHVsbC80NSlcblx0XHRjaGVja19taW1lX3R5cGU6IHRydWUsXG5cblx0XHQvLyBSZXNpemUgaGlnaC1yZXNvbHV0aW9uIGltYWdlcyB0byBvcmlnaW5hbCBpbWFnZSdzIHBpeGVsIGRpbWVuc2lvbnNcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vaW11bHVzL3JldGluYWpzL2lzc3Vlcy84XG5cdFx0Zm9yY2Vfb3JpZ2luYWxfZGltZW5zaW9uczogdHJ1ZSxcblx0fTtcblxuXHRmdW5jdGlvbiBSZXRpbmEoKSB7fVxuXG5cdHJvb3QuUmV0aW5hID0gUmV0aW5hO1xuXG5cdFJldGluYS5jb25maWd1cmUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0aWYgKG9wdGlvbnMgPT09IG51bGwpIHtcblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBwcm9wIGluIG9wdGlvbnMpIHtcblx0XHRcdGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cdFx0XHRcdGNvbmZpZ1twcm9wXSA9IG9wdGlvbnNbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdFJldGluYS5pbml0ID0gZnVuY3Rpb24oY29udGV4dCkge1xuXHRcdGlmIChjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0XHRjb250ZXh0ID0gcm9vdDtcblx0XHR9XG5cblx0XHR2YXIgZXhpc3Rpbmdfb25sb2FkID0gY29udGV4dC5vbmxvYWQgfHwgZnVuY3Rpb24oKSB7fTtcblxuXHRcdGNvbnRleHQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpLFxuXHRcdFx0XHRyZXRpbmFJbWFnZXMgPSBbXSxcblx0XHRcdFx0aSxcblx0XHRcdFx0aW1hZ2U7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdGltYWdlID0gaW1hZ2VzW2ldO1xuXHRcdFx0XHRpZiAoISEhaW1hZ2UuZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1uby1yZXRpbmEnKSkge1xuXHRcdFx0XHRcdHJldGluYUltYWdlcy5wdXNoKG5ldyBSZXRpbmFJbWFnZShpbWFnZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRleGlzdGluZ19vbmxvYWQoKTtcblx0XHR9O1xuXHR9O1xuXG5cdFJldGluYS5pc1JldGluYSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtZWRpYVF1ZXJ5ID1cblx0XHRcdCcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMy8yKSwgKG1pbi1yZXNvbHV0aW9uOiAxLjVkcHB4KSc7XG5cblx0XHRpZiAocm9vdC5kZXZpY2VQaXhlbFJhdGlvID4gMSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKHJvb3QubWF0Y2hNZWRpYSAmJiByb290Lm1hdGNoTWVkaWEobWVkaWFRdWVyeSkubWF0Y2hlcykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdHZhciByZWdleE1hdGNoID0gL1xcLlxcdyskLztcblx0ZnVuY3Rpb24gc3VmZml4UmVwbGFjZShtYXRjaCkge1xuXHRcdHJldHVybiBjb25maWcucmV0aW5hSW1hZ2VTdWZmaXggKyBtYXRjaDtcblx0fVxuXG5cdGZ1bmN0aW9uIFJldGluYUltYWdlUGF0aChwYXRoLCBhdF8yeF9wYXRoKSB7XG5cdFx0dGhpcy5wYXRoID0gcGF0aCB8fCAnJztcblx0XHRpZiAodHlwZW9mIGF0XzJ4X3BhdGggIT09ICd1bmRlZmluZWQnICYmIGF0XzJ4X3BhdGggIT09IG51bGwpIHtcblx0XHRcdHRoaXMuYXRfMnhfcGF0aCA9IGF0XzJ4X3BhdGg7XG5cdFx0XHR0aGlzLnBlcmZvcm1fY2hlY2sgPSBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHVuZGVmaW5lZCAhPT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkge1xuXHRcdFx0XHR2YXIgbG9jYXRpb25PYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdGxvY2F0aW9uT2JqZWN0LmhyZWYgPSB0aGlzLnBhdGg7XG5cdFx0XHRcdGxvY2F0aW9uT2JqZWN0LnBhdGhuYW1lID0gbG9jYXRpb25PYmplY3QucGF0aG5hbWUucmVwbGFjZShyZWdleE1hdGNoLCBzdWZmaXhSZXBsYWNlKTtcblx0XHRcdFx0dGhpcy5hdF8yeF9wYXRoID0gbG9jYXRpb25PYmplY3QuaHJlZjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IHRoaXMucGF0aC5zcGxpdCgnPycpO1xuXHRcdFx0XHRwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UocmVnZXhNYXRjaCwgc3VmZml4UmVwbGFjZSk7XG5cdFx0XHRcdHRoaXMuYXRfMnhfcGF0aCA9IHBhcnRzLmpvaW4oJz8nKTtcblx0XHRcdH1cblx0XHRcdHRoaXMucGVyZm9ybV9jaGVjayA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cm9vdC5SZXRpbmFJbWFnZVBhdGggPSBSZXRpbmFJbWFnZVBhdGg7XG5cblx0UmV0aW5hSW1hZ2VQYXRoLmNvbmZpcm1lZF9wYXRocyA9IFtdO1xuXG5cdFJldGluYUltYWdlUGF0aC5wcm90b3R5cGUuaXNfZXh0ZXJuYWwgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gISEodGhpcy5wYXRoLm1hdGNoKC9eaHR0cHM/XFw6L2kpICYmICF0aGlzLnBhdGgubWF0Y2goJy8vJyArIGRvY3VtZW50LmRvbWFpbikpO1xuXHR9O1xuXG5cdFJldGluYUltYWdlUGF0aC5wcm90b3R5cGUuY2hlY2tfMnhfdmFyaWFudCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIGh0dHAsXG5cdFx0XHR0aGF0ID0gdGhpcztcblx0XHRpZiAodGhpcy5pc19leHRlcm5hbCgpKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2soZmFsc2UpO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMucGVyZm9ybV9jaGVjayAmJiB0eXBlb2YgdGhpcy5hdF8yeF9wYXRoICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmF0XzJ4X3BhdGggIT09IG51bGwpIHtcblx0XHRcdHJldHVybiBjYWxsYmFjayh0cnVlKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuYXRfMnhfcGF0aCBpbiBSZXRpbmFJbWFnZVBhdGguY29uZmlybWVkX3BhdGhzKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2sodHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdGh0dHAub3BlbignSEVBRCcsIHRoaXMuYXRfMnhfcGF0aCk7XG5cdFx0XHRodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoaHR0cC5yZWFkeVN0YXRlICE9PSA0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGZhbHNlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChodHRwLnN0YXR1cyA+PSAyMDAgJiYgaHR0cC5zdGF0dXMgPD0gMzk5KSB7XG5cdFx0XHRcdFx0aWYgKGNvbmZpZy5jaGVja19taW1lX3R5cGUpIHtcblx0XHRcdFx0XHRcdHZhciB0eXBlID0gaHR0cC5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XG5cdFx0XHRcdFx0XHRpZiAodHlwZSA9PT0gbnVsbCB8fCAhdHlwZS5tYXRjaCgvXmltYWdlL2kpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhmYWxzZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0UmV0aW5hSW1hZ2VQYXRoLmNvbmZpcm1lZF9wYXRocy5wdXNoKHRoYXQuYXRfMnhfcGF0aCk7XG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKHRydWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRodHRwLnNlbmQoKTtcblx0XHR9XG5cdH07XG5cblx0ZnVuY3Rpb24gUmV0aW5hSW1hZ2UoZWwpIHtcblx0XHR0aGlzLmVsID0gZWw7XG5cdFx0dGhpcy5wYXRoID0gbmV3IFJldGluYUltYWdlUGF0aCh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc3JjJyksIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWF0MngnKSk7XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdHRoaXMucGF0aC5jaGVja18yeF92YXJpYW50KGZ1bmN0aW9uKGhhc1ZhcmlhbnQpIHtcblx0XHRcdGlmIChoYXNWYXJpYW50KSB7XG5cdFx0XHRcdHRoYXQuc3dhcCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cm9vdC5SZXRpbmFJbWFnZSA9IFJldGluYUltYWdlO1xuXG5cdFJldGluYUltYWdlLnByb3RvdHlwZS5zd2FwID0gZnVuY3Rpb24ocGF0aCkge1xuXHRcdGlmICh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHBhdGggPSB0aGlzLnBhdGguYXRfMnhfcGF0aDtcblx0XHR9XG5cblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0ZnVuY3Rpb24gbG9hZCgpIHtcblx0XHRcdGlmICghdGhhdC5lbC5jb21wbGV0ZSkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGxvYWQsIDUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGNvbmZpZy5mb3JjZV9vcmlnaW5hbF9kaW1lbnNpb25zKSB7XG5cdFx0XHRcdFx0dGhhdC5lbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhhdC5lbC5vZmZzZXRXaWR0aCk7XG5cdFx0XHRcdFx0dGhhdC5lbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoYXQuZWwub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoYXQuZWwuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXRoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bG9hZCgpO1xuXHR9O1xuXG5cdGlmIChSZXRpbmEuaXNSZXRpbmEoKSkge1xuXHRcdFJldGluYS5pbml0KHJvb3QpO1xuXHR9XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==