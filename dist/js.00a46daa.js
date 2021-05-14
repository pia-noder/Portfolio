// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  const previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  const nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        const currentRequire =
          typeof parcelRequire === 'function' && parcelRequire;
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

        const err = new Error(`Cannot find module '${name}'`);
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      const module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  let error;
  for (let i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    const mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(() => mainExports);

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})(
  {
    'assets/reservia.png': [
      function (require, module, exports) {
        module.exports = '/reservia.d7ccb00c.png';
      },
      {},
    ],
    'assets/Ohmyfood.jpg': [
      function (require, module, exports) {
        module.exports = '/Ohmyfood.7f675792.jpg';
      },
      {},
    ],
    'assets/chouette.jpg': [
      function (require, module, exports) {
        module.exports = '/chouette.98258cd6.jpg';
      },
      {},
    ],
    'assets/groupomania.jpg': [
      function (require, module, exports) {
        module.exports = '/groupomania.f60fe198.jpg';
      },
      {},
    ],
    'js/index.js': [
      function (require, module, exports) {
        const _reservia = _interopRequireDefault(
          require('../assets/reservia.png')
        );

        const _Ohmyfood = _interopRequireDefault(
          require('../assets/Ohmyfood.jpg')
        );

        const _chouette = _interopRequireDefault(
          require('../assets/chouette.jpg')
        );

        const _groupomania = _interopRequireDefault(
          require('../assets/groupomania.jpg')
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _typeof(obj) {
          '@babel/helpers - typeof';

          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function _createForOfIteratorHelper(o, allowArrayLike) {
          let it;
          if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
            if (
              Array.isArray(o) ||
              (it = _unsupportedIterableToArray(o)) ||
              (allowArrayLike && o && typeof o.length === 'number')
            ) {
              if (it) o = it;
              let i = 0;
              const F = function F() {};
              return {
                s: F,
                n: function n() {
                  if (i >= o.length) return { done: true };
                  return { done: false, value: o[i++] };
                },
                e: function e(_e) {
                  throw _e;
                },
                f: F,
              };
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          }
          let normalCompletion = true;
          let didErr = false;
          let err;
          return {
            s: function s() {
              it = o[Symbol.iterator]();
            },
            n: function n() {
              const step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function e(_e2) {
              didErr = true;
              err = _e2;
            },
            f: function f() {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            },
          };
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
          let n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === 'Object' && o.constructor) n = o.constructor.name;
          if (n === 'Map' || n === 'Set') return Array.from(o);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        // Faire appraraitre dans le losange l'image du site lors du survole de son nom
        // 1)Créer un event lors du survole du nom du site
        // 2)Récupérer le nom et y associer l'image correspondante
        // 3)Intégrer l'img dans le losange
        const divSites = document.getElementsByClassName('projectDisplay');

        const _iterator = _createForOfIteratorHelper(divSites);
        let _step;

        try {
          const _loop = function _loop() {
            const elt = _step.value;
            elt.addEventListener('mouseover', (event) => {
              const catchSiteName = event.path[0].attributes.class.value;
              const siteId = catchSiteName.split(' ')[0];
              displaySiteImg(siteId);
              elt.addEventListener('mouseleave', (event) => {
                console.log(event);
                const imgDisplay =
                  document.getElementsByClassName('imgDisplay');
                imgDisplay[0].remove();
              });
            });
          };

          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        function displaySiteImg(siteId) {
          const losangeDisplay = document.getElementById('img-display');
          const imgSite = document.createElement('img');
          console.log(siteId);
          losangeDisplay.appendChild(imgSite);
          imgSite.setAttribute('class', 'imgDisplay');
          console.log(_typeof(siteId));

          switch (siteId) {
            case 'site1':
              imgSite.src = _reservia.default;
              break;

            case 'site2':
              imgSite.src = _Ohmyfood.default;
              break;

            case 'site3':
              imgSite.src = _chouette.default;
              break;

            case 'site6':
              imgSite.src = _groupomania.default;
              break;

            default:
              console.log('Sorry, we are out of image.');
          }
        }
      },
      {
        '../assets/reservia.png': 'assets/reservia.png',
        '../assets/Ohmyfood.jpg': 'assets/Ohmyfood.jpg',
        '../assets/chouette.jpg': 'assets/chouette.jpg',
        '../assets/groupomania.jpg': 'assets/groupomania.jpg',
      },
    ],
    '../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js':
      [
        function (require, module, exports) {
          const global = arguments[3];
          const OVERLAY_ID = '__parcel__error__overlay__';
          const OldModule = module.bundle.Module;

          function Module(moduleName) {
            OldModule.call(this, moduleName);
            this.hot = {
              data: module.bundle.hotData,
              _acceptCallbacks: [],
              _disposeCallbacks: [],
              accept(fn) {
                this._acceptCallbacks.push(fn || (() => {}));
              },
              dispose(fn) {
                this._disposeCallbacks.push(fn);
              },
            };
            module.bundle.hotData = null;
          }

          module.bundle.Module = Module;
          let checkedAssets;
          let assetsToAccept;
          const { parent } = module.bundle;

          if (
            (!parent || !parent.isParcelRequire) &&
            typeof WebSocket !== 'undefined'
          ) {
            const hostname = '' || location.hostname;
            const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
            const ws = new WebSocket(
              `${protocol}://${hostname}:` + `51138` + `/`
            );

            ws.onmessage = function (event) {
              checkedAssets = {};
              assetsToAccept = [];
              const data = JSON.parse(event.data);

              if (data.type === 'update') {
                let handled = false;
                data.assets.forEach((asset) => {
                  if (!asset.isNew) {
                    const didAccept = hmrAcceptCheck(
                      global.parcelRequire,
                      asset.id
                    );

                    if (didAccept) {
                      handled = true;
                    }
                  }
                }); // Enable HMR for CSS by default.

                handled =
                  handled ||
                  data.assets.every(
                    (asset) => asset.type === 'css' && asset.generated.js
                  );

                if (handled) {
                  console.clear();
                  data.assets.forEach((asset) => {
                    hmrApply(global.parcelRequire, asset);
                  });
                  assetsToAccept.forEach((v) => {
                    hmrAcceptRun(v[0], v[1]);
                  });
                } else if (location.reload) {
                  // `location` global exists in a web worker context but lacks `.reload()` function.
                  location.reload();
                }
              }

              if (data.type === 'reload') {
                ws.close();

                ws.onclose = function () {
                  location.reload();
                };
              }

              if (data.type === 'error-resolved') {
                console.log('[parcel] ✨ Error resolved');
                removeErrorOverlay();
              }

              if (data.type === 'error') {
                console.error(
                  `[parcel] 🚨  ${data.error.message}\n${data.error.stack}`
                );
                removeErrorOverlay();
                const overlay = createErrorOverlay(data);
                document.body.appendChild(overlay);
              }
            };
          }

          function removeErrorOverlay() {
            const overlay = document.getElementById(OVERLAY_ID);

            if (overlay) {
              overlay.remove();
            }
          }

          function createErrorOverlay(data) {
            const overlay = document.createElement('div');
            overlay.id = OVERLAY_ID; // html encode message and stack trace

            const message = document.createElement('div');
            const stackTrace = document.createElement('pre');
            message.innerText = data.error.message;
            stackTrace.innerText = data.error.stack;
            overlay.innerHTML =
              `${
                '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
                '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
                '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' +
                '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">'
              }${message.innerHTML}</div>` +
              `<pre>${stackTrace.innerHTML}</pre>` +
              `</div>`;
            return overlay;
          }

          function getParents(bundle, id) {
            const { modules } = bundle;

            if (!modules) {
              return [];
            }

            let parents = [];
            let k;
            let d;
            let dep;

            for (k in modules) {
              for (d in modules[k][1]) {
                dep = modules[k][1][d];

                if (
                  dep === id ||
                  (Array.isArray(dep) && dep[dep.length - 1] === id)
                ) {
                  parents.push(k);
                }
              }
            }

            if (bundle.parent) {
              parents = parents.concat(getParents(bundle.parent, id));
            }

            return parents;
          }

          function hmrApply(bundle, asset) {
            const { modules } = bundle;

            if (!modules) {
              return;
            }

            if (modules[asset.id] || !bundle.parent) {
              const fn = new Function(
                'require',
                'module',
                'exports',
                asset.generated.js
              );
              asset.isNew = !modules[asset.id];
              modules[asset.id] = [fn, asset.deps];
            } else if (bundle.parent) {
              hmrApply(bundle.parent, asset);
            }
          }

          function hmrAcceptCheck(bundle, id) {
            const { modules } = bundle;

            if (!modules) {
              return;
            }

            if (!modules[id] && bundle.parent) {
              return hmrAcceptCheck(bundle.parent, id);
            }

            if (checkedAssets[id]) {
              return;
            }

            checkedAssets[id] = true;
            const cached = bundle.cache[id];
            assetsToAccept.push([bundle, id]);

            if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
              return true;
            }

            return getParents(global.parcelRequire, id).some((id) =>
              hmrAcceptCheck(global.parcelRequire, id)
            );
          }

          function hmrAcceptRun(bundle, id) {
            let cached = bundle.cache[id];
            bundle.hotData = {};

            if (cached) {
              cached.hot.data = bundle.hotData;
            }

            if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
              cached.hot._disposeCallbacks.forEach((cb) => {
                cb(bundle.hotData);
              });
            }

            delete bundle.cache[id];
            bundle(id);
            cached = bundle.cache[id];

            if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
              cached.hot._acceptCallbacks.forEach((cb) => {
                cb();
              });

              return true;
            }
          }
        },
        {},
      ],
  },
  {},
  [
    '../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js',
    'js/index.js',
  ],
  null
);
// # sourceMappingURL=/js.00a46daa.js.map
