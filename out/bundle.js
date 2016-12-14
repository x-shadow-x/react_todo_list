/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./out/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./css/main.scss */ 1);
	__webpack_require__(/*! ./components/app.jsx */ 4);

/***/ },
/* 1 */
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/.npminstall/css-loader/0.14.5/css-loader!./../../~/.npminstall/sass-loader/1.0.4/sass-loader!./main.scss */ 2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/.npminstall/style-loader/0.12.4/style-loader/addStyles.js */ 3)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.14.5/css-loader/index.js!./../../node_modules/.npminstall/sass-loader/1.0.4/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.14.5/css-loader/index.js!./../../node_modules/.npminstall/sass-loader/1.0.4/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/*!**********************************************************************************************************************!*\
  !*** ./~/.npminstall/css-loader/0.14.5/css-loader!./~/.npminstall/sass-loader/1.0.4/sass-loader!./src/css/main.scss ***!
  \**********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/.npminstall/css-loader/0.14.5/css-loader/lib/css-base.js */ 11)();
	exports.push([module.id, "body {\n  background: #f5f5f5; }\n\nheader h1 {\n  text-align: center;\n  text-decoration: underline; }\n\n::selection {\n  background: #fff; }\n\n.container {\n  width: 760px;\n  margin: 0 auto; }\n\n.fl {\n  float: left; }\n\n.fr {\n  float: right; }\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  height: 0;\n  clear: both; }\n\n.panel {\n  background: #fff;\n  border: 1px solid #ddd;\n  padding: 8px;\n  box-shadow: 1px 1px 1px #000; }\n  .panel .header {\n    border-bottom: 3px solid #ddd; }\n    .panel .header input {\n      width: 90%;\n      padding: 5px 5px;\n      padding-left: 50px;\n      font-size: 24px;\n      border: none; }\n\n.todo_list {\n  list-style: none;\n  padding: 0; }\n  .todo_list li {\n    position: relative;\n    border-bottom: 1px solid #ddd;\n    padding: 10px;\n    font-size: 18px; }\n    .todo_list li input[type=checkbox] {\n      margin-right: 10px; }\n    .todo_list li button {\n      font-size: 14px; }\n  .todo_list .check_btn {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    vertical-align: middle;\n    border: 1px solid #ccc;\n    border-radius: 100px;\n    margin-right: 10px;\n    padding: 2px; }\n  .todo_list .check_btn.done {\n    background: #439207;\n    border: 1px solid #439207; }\n  .todo_list .input_box {\n    position: absolute;\n    bottom: 4px;\n    left: 35px;\n    width: 320px;\n    outline: none;\n    border: none;\n    z-index: 2;\n    height: 32px; }\n\n.footer {\n  margin-left: 10px; }\n  .footer input[type=checkbox] {\n    margin-right: 10px; }\n", ""]);

/***/ },
/* 3 */
/*!*********************************************************************!*\
  !*** ./~/.npminstall/style-loader/0.12.4/style-loader/addStyles.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 4 */
/*!********************************!*\
  !*** ./src/components/app.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _node_modulesLocalDbLocalDbJs = __webpack_require__(/*! ../../~/localDb/localDb.js */ 6);
	
	var _node_modulesLocalDbLocalDbJs2 = _interopRequireDefault(_node_modulesLocalDbLocalDbJs);
	
	var _TodoHeaderJsx = __webpack_require__(/*! ./TodoHeader.jsx */ 7);
	
	var _TodoHeaderJsx2 = _interopRequireDefault(_TodoHeaderJsx);
	
	var _TodoMainJsx = __webpack_require__(/*! ./TodoMain.jsx */ 8);
	
	var _TodoMainJsx2 = _interopRequireDefault(_TodoMainJsx);
	
	var _TodoFooterJsx = __webpack_require__(/*! ./TodoFooter.jsx */ 10);
	
	var _TodoFooterJsx2 = _interopRequireDefault(_TodoFooterJsx);
	
	var App = (function (_React$Component) {
		_inherits(App, _React$Component);
	
		function App() {
			_classCallCheck(this, App);
	
			_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
			this.db = new _node_modulesLocalDbLocalDbJs2['default']('React-Todos');
			this.state = {
				todos: this.db.get('todos') || [],
				isAllChecked: false
			};
		}
	
		// 判断是否所有任务的状态都完成，以便同步底部的全选按钮
	
		_createClass(App, [{
			key: 'allChecked',
			value: function allChecked() {
				var isAllChecked = false;
				if (this.state.todos.every(function (todo) {
					return todo.isDone;
				})) {
					isAllChecked = true;
				}
				this.setState({
					todos: this.state.todos,
					// ES6允许在对象之中，只写属性名，不写属性值。这时，属性值等于属性名所代表的变量,下面的写法等同于 isAllChecked：isAllChecked
					isAllChecked: isAllChecked
				});
			}
	
			// 添加任务项，传递给Header组件的方法
		}, {
			key: 'addTodo',
			value: function addTodo(todoItem) {
				this.state.todos.push(todoItem);
				this.allChecked();
				this.db.set('todos', this.state.todos);
			}
	
			// 改变任务项的状态，传递给TodoItem和Footer组件的方法
		}, {
			key: 'changeTodoState',
			value: function changeTodoState(index, isDone) {
				var isChangeAll = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
				if (isChangeAll) {
					this.setState({
						todos: this.state.todos.map(function (todo) {
							todo.isDone = isDone;
							return todo;
						}),
						isAllChecked: isDone
					});
				} else {
					// 因为allChecked函数中会调用setState所以此处只要通过this.state修改对应属性的状态就好，在allChecked函数中会通过setState将此处的修改更行
					// 否则直接使用this.state去修改状态是不提倡的，也不会触发 willUpdate，render等流程
					this.state.todos[index].isDone = isDone;
					this.allChecked();
				}
				this.db.set('todos', this.state.todos);
			}
		}, {
			key: 'changeTodoText',
			value: function changeTodoText(index, text) {
				this.state.todos[index].isDone = false;
				this.state.todos[index].content = text;
				this.allChecked();
				this.db.set('todos', this.state.todos);
			}
	
			// 清除已完成的任务，传递给Footer组件
		}, {
			key: 'clearDone',
			value: function clearDone() {
				var todos = this.state.todos.filter(function (todo) {
					return !todo.isDone;
				});
				this.state.todos = todos;
				this.allChecked();
			}
	
			// 删除当前的任务， 传递给TodoItem的方法
		}, {
			key: 'deleteTodo',
			value: function deleteTodo(index) {
				this.state.todos.splice(index, 1);
				this.setState({
					todos: this.state.todos
				});
				this.db.set('todos', this.state.todos);
			}
		}, {
			key: 'render',
			value: function render() {
	
				var props = {
					todoCount: this.state.todos.length || 0,
					todoDoneCount: this.state.todos && this.state.todos.filter(function (todo) {
						return todo.isDone;
					}).length || 0
				};
	
				// 注意：TodoFoter里面的{...props}
				// <TodoFooter {...props} />等效于
				// <TodoFooter todoCount={props.todoCount} todoDoneCount={props.todoDoneCount} />
				return _react2['default'].createElement(
					'div',
					{ className: 'panel' },
					_react2['default'].createElement(_TodoHeaderJsx2['default'], { addTodo: this.addTodo.bind(this) }),
					_react2['default'].createElement(_TodoMainJsx2['default'], { changeTodoText: this.changeTodoText.bind(this), deleteTodo: this.deleteTodo.bind(this), changeTodoState: this.changeTodoState.bind(this), todos: this.state.todos }),
					_react2['default'].createElement(_TodoFooterJsx2['default'], _extends({ isAllChecked: this.state.isAllChecked, clearDone: this.clearDone.bind(this) }, props, { changeTodoState: this.changeTodoState.bind(this) }))
				);
			}
		}]);
	
		return App;
	})(_react2['default'].Component);
	
	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

/***/ },
/* 5 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 6 */
/*!******************************!*\
  !*** ./~/localDb/localDb.js ***!
  \******************************/
/***/ function(module, exports) {

	var _createClass = (function() {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];
	            descriptor.enumerable = descriptor.enumerable || false;
	            descriptor.configurable = true;
	            if ('value' in descriptor) descriptor.writable = true;
	            Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }
	    return function(Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);
	        if (staticProps) defineProperties(Constructor, staticProps);
	        return Constructor;
	    };
	})();
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}
	
	var LocalDb = (function() {
	    function LocalDb() {
	        var localDb = arguments[0] === undefined ? 'localDb' : arguments[0];
	
	        _classCallCheck(this, LocalDb);
	
	        if (!window.localStorage) {
	            throw new Error('Not supports localStorage');
	        }
	        this.localDb = localDb;
	
	        if (localStorage[localDb]) {
	            this.db = JSON.parse(localStorage[localDb]);
	        } else {
	            this.db = {};
	        }
	    }
	
	    _createClass(LocalDb, [{
	        key: 'getDb',
	        value: function getDb() {
	            return this.db;
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            if (key) {
	                this.db[key] = value;
	
	                return this._saveToLocalStorage();
	            }
	
	            throw new Error('set参数key不能为空');
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            if (key) {
	                var value = this.db[key];
	                if (typeof value === 'undefined') {
	                    console.warn(key + '的值不存在');
	                }
	                return value;
	            }
	
	            throw new Error('get参数key不能为空');
	        }
	    }, {
	        key: 'clean',
	        value: function clean() {
	            this.db = {};
	            this._saveToLocalStorage();
	        }
	    }, {
	        key: '_saveToLocalStorage',
	        value: function _saveToLocalStorage() {
	            localStorage[this.localDb] = JSON.stringify(this.getDb());
	        }
	    }]);
	
	    return LocalDb;
	})();
	
	module.exports = LocalDb;

/***/ },
/* 7 */
/*!***************************************!*\
  !*** ./src/components/TodoHeader.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TodoHeader = (function (_React$Component) {
		_inherits(TodoHeader, _React$Component);
	
		function TodoHeader() {
			_classCallCheck(this, TodoHeader);
	
			_get(Object.getPrototypeOf(TodoHeader.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(TodoHeader, [{
			key: 'handleKeyUp',
	
			// 监听回车事件，添加新任务项
			value: function handleKeyUp(event) {
				if (event.keyCode === 13) {
					var value = event.target.value;
	
					if (!value) {
						return false;
					}
					var newItem = {
						content: value,
						isDone: false
					};
	
					event.target.value = '';
					this.props.addTodo(newItem);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					{ className: 'header' },
					_react2['default'].createElement('input', { type: 'text', placeholder: 'Add item', onKeyUp: this.handleKeyUp.bind(this) })
				);
			}
		}]);
	
		return TodoHeader;
	})(_react2['default'].Component);
	
	exports['default'] = TodoHeader;
	module.exports = exports['default'];

/***/ },
/* 8 */
/*!*************************************!*\
  !*** ./src/components/TodoMain.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoItemJsx = __webpack_require__(/*! ./TodoItem.jsx */ 9);
	
	var _TodoItemJsx2 = _interopRequireDefault(_TodoItemJsx);
	
	var TodoMain = (function (_React$Component) {
		_inherits(TodoMain, _React$Component);
	
		function TodoMain() {
			_classCallCheck(this, TodoMain);
	
			_get(Object.getPrototypeOf(TodoMain.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(TodoMain, [{
			key: 'render',
	
			// 遍历todos并显示
			value: function render() {
				var _this = this;
	
				return _react2['default'].createElement(
					'ul',
					{ className: 'todo_list' },
					this.props.todos.map(function (todo, index) {
						return _react2['default'].createElement(_TodoItemJsx2['default'], _extends({ key: index, index: index }, todo, _this.props));
					})
				);
			}
		}]);
	
		return TodoMain;
	})(_react2['default'].Component);
	
	exports['default'] = TodoMain;
	module.exports = exports['default'];

/***/ },
/* 9 */
/*!*************************************!*\
  !*** ./src/components/TodoItem.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TodoItem = (function (_React$Component) {
		_inherits(TodoItem, _React$Component);
	
		function TodoItem() {
			_classCallCheck(this, TodoItem);
	
			_get(Object.getPrototypeOf(TodoItem.prototype), 'constructor', this).call(this);
			this.state = {
				showInput: false
			};
		}
	
		// 切换任务项的完成状态
	
		_createClass(TodoItem, [{
			key: 'handleClick',
			value: function handleClick() {
				var isDone = !this.props.isDone;
				this.props.changeTodoState(this.props.index, isDone);
			}
		}, {
			key: 'handleChange',
			value: function handleChange() {
				this.setState({
					showInput: true
				});
	
				setTimeout((function () {
					_react2['default'].findDOMNode(this.refs.input).focus();
				}).bind(this), 500);
			}
		}, {
			key: 'changeText',
			value: function changeText(event) {
				if (event.keyCode === 13) {
					var text = event.target.value;
					if (!text) {
						return false;
					}
					this.props.changeTodoText(this.props.index, text);
					this.setState({
						showInput: false
					});
				}
			}
		}, {
			key: 'handleMouseOver',
			value: function handleMouseOver() {
				// 找到真正的dom节点，注意0.14版本后refs引用的也是真正的dom
				_react2['default'].findDOMNode(this.refs.deleteBtn).style.display = 'inline';
			}
		}, {
			key: 'handleMouseOut',
			value: function handleMouseOut() {
				_react2['default'].findDOMNode(this.refs.deleteBtn).style.display = 'none';
			}
	
			// 删除当前任务
		}, {
			key: 'handleDelete',
			value: function handleDelete() {
				this.props.deleteTodo(this.props.index);
			}
		}, {
			key: 'render',
			value: function render() {
				var style = this.props.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
				var checkBtnClassName = this.props.isDone ? 'check_btn done' : 'check_btn';
				var inputStyle = this.state.showInput ? { display: 'block' } : { display: 'none' };
				return _react2['default'].createElement(
					'li',
					{ onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this) },
					_react2['default'].createElement('span', { className: checkBtnClassName, onClick: this.handleClick.bind(this) }),
					_react2['default'].createElement(
						'span',
						{ style: style, onDoubleClick: this.handleChange.bind(this) },
						this.props.content
					),
					_react2['default'].createElement('input', { type: 'text', ref: 'input', onKeyUp: this.changeText.bind(this), className: 'input_box', style: inputStyle }),
					_react2['default'].createElement(
						'button',
						{ style: { 'display': 'none' }, ref: 'deleteBtn', onClick: this.handleDelete.bind(this), className: 'fr' },
						'删除'
					)
				);
			}
		}]);
	
		return TodoItem;
	})(_react2['default'].Component);
	
	exports['default'] = TodoItem;
	module.exports = exports['default'];

/***/ },
/* 10 */
/*!***************************************!*\
  !*** ./src/components/TodoFooter.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(/*! react */ 5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TodoFooter = (function (_React$Component) {
		_inherits(TodoFooter, _React$Component);
	
		function TodoFooter() {
			_classCallCheck(this, TodoFooter);
	
			_get(Object.getPrototypeOf(TodoFooter.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(TodoFooter, [{
			key: "handleAllStatus",
	
			// 处理全选按钮，勾上代表全部选中并已完成，取消勾选代表全部未完成
			value: function handleAllStatus(event) {
				this.props.changeTodoState(null, event.target.checked, true);
			}
	
			// 点击事件，将已完成的项清除
		}, {
			key: "handleClick",
			value: function handleClick() {
				this.props.clearDone();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: "footer clearfix" },
					_react2["default"].createElement("input", { type: "checkbox", className: "fl", checked: this.props.isAllChecked, onChange: this.handleAllStatus.bind(this) }),
					_react2["default"].createElement(
						"span",
						{ className: "fl" },
						this.props.todoDoneCount,
						"已完成 / ",
						this.props.todoCount,
						"总数"
					),
					_react2["default"].createElement(
						"button",
						{ className: "fr", onClick: this.handleClick.bind(this) },
						"清除已完成"
					)
				);
			}
		}]);
	
		return TodoFooter;
	})(_react2["default"].Component);
	
	exports["default"] = TodoFooter;
	module.exports = exports["default"];

/***/ },
/* 11 */
/*!********************************************************************!*\
  !*** ./~/.npminstall/css-loader/0.14.5/css-loader/lib/css-base.js ***!
  \********************************************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map