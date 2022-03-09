// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n  .skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  .skin *::before,\n  .skin *::after {\n    box-sizing: border-box;\n  }\n  .skin {\n    min-height: 55vh;\n    background: #ffe600;\n  }\n  .skin {\n    position: relative;\n  }\n  \n  .nose {\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-radius: 12px;\n    border-width: 12px;\n    border-color: black transparent transparent;\n    position: absolute;\n    left: 50%;\n    top: 65px;\n    margin-left: -12px;\n    z-index: 10;\n  }\n  \n  .eye {\n    border: 3px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 25px;\n    margin-left: -32px;\n    background: #2e2e2e; /*\u53D6\u8272\u5DE5\u5177snipaste*/\n  }\n  .eye::before {\n    content: \"\";\n    display: block;\n    border: 3px solid black;\n    background: #fff;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    position: absolute;\n    left: 9px;\n    top: -2px;\n  }\n  .eye.left {\n    transform: translateX(-140px);\n    border-radius: 50%;\n  }\n  .eye.right {\n    transform: translateX(140px);\n    border-radius: 50%;\n  }\n  \n  .mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 95px;\n  }\n  \n  .mouth > .up > .lip {\n    border: 3px solid black;\n    border-top: transparent;\n    height: 30px;\n    width: 100px;\n    position: absolute;\n    background: #ffe600;\n    z-index: 3;\n  }\n  .mouth > .up > .lip.left {\n    border-bottom-left-radius: 40px 25px;\n    border-right: transparent;\n    transform: rotate(-20deg);\n  }\n  .mouth > .up > .lip.right {\n    border-bottom-right-radius: 40px 25px;\n    border-left: transparent;\n    transform: translateX(100px) rotate(20deg);\n  }\n  .mouth > .up > .lip::before {\n    content: \"\";\n    /* border: 1px solid black; */\n    display: block;\n    width: 10px;\n    height: 10px;\n    background: #ffe600;\n    position: absolute;\n  }\n  .mouth > .up > .lip.left::before {\n    transform: rotate(20deg) translateX(90px) translateY(-15px);\n  }\n  .mouth > .up > .lip.right::before {\n    transform: rotate(-20deg) translateX(-9px) translateY(15px);\n  }\n  \n  .mouth > .down {\n    position: absolute;\n    top: 11px;\n    width: 200px;\n    height: 280px;\n    overflow: hidden;\n  }\n  .mouth > .down > .yuan1 {\n    border: 3px solid black;\n    height: 200px;\n    width: 160px;\n    position: absolute;\n    left: 50%;\n    margin-left: -80px;\n    top: -20px;\n    /* border-radius: 50% 50% 50% 50%; */\n    border-bottom-left-radius: 90px 200px;\n    border-bottom-right-radius: 90px 200px;\n    background: #9b000a;\n    overflow: hidden;\n  }\n  .mouth > .down > .yuan1 > .yuan2 {\n    /* border: 3px solid red; */\n    height: 320px;\n    width: 240px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -120px;\n    border-radius: 50%;\n    transform: translateY(170px);\n    background: #ff485f;\n  }\n  \n  .face {\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    margin-left: -44px;\n    top: 165px;\n    background: rgb(224, 24, 24);\n    /* background: red; */\n    z-index: 5;\n  }\n  .face.left {\n    transform: translateX(-200px);\n  }\n  .face.right {\n    transform: translateX(200px);\n  }\n";
exports.default = string;
},{}],"epB2":[function(require,module,exports) {
'use strict';

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
style.innerHTML = _css2.default.substring(0, n);
css.innerText = _css2.default.substring(0, n);

var time = 100;
var run = function run() {
  n += 1;
  if (n > _css2.default.length) {
    window.clearInterval(id);
    return;
  }
  style.innerHTML = _css2.default.substring(0, n);
  css.innerText = _css2.default.substring(0, n);
  css.scrollTop = css.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var id = play();

btnPause.onclick = function () {
  window.clearInterval(id);
};
btnPlay.onclick = function () {
  id = play();
};

btnFast.onclick = function () {
  window.clearInterval(id);
  time = 0;
  id = play();
};
btnSlow.onclick = function () {
  window.clearInterval(id);
  time = 300;
  id = play();
};
btnMiddle.onclick = function () {
  window.clearInterval(id);
  time = 100;
  id = play();
};
},{"./css":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=https://wind2song.github.io/pipilo-1/dist/main.4eb19e54.map