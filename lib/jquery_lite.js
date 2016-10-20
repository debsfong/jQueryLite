/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const DOMNodeCollection = __webpack_require__(1);

	window.$l = function (selector) {
	  let nodeList;
	  if (typeof(selector) === "string") {
	    nodeList = Array.from(document.querySelectorAll(selector));
	  } else if( selector instanceof HTMLElement){
	    nodeList = [selector];
	  }
	  return new DOMNodeCollection(nodeList);
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	class DOMNodeCollection {
	  constructor(HTMLElements) {
	    this.HTMLElements = HTMLElements;
	  }

	  html(arg) {
	    if (arg) {
	      this.HTMLElements.forEach((el) => {
	        el.innerHTML = arg;
	      });
	    } else {
	      return this.HTMLElements[0].innerHTML;
	    }
	  }

	  empty() {
	    this.HTMLElements.forEach( (el) => {
	      el.innerHTML = "";
	    });
	  }

	  append(arg){
	    this.HTMLElements.forEach( (el) => {
	      el.innerHTML += arg;
	    });
	  }

	  attr(attrName, value){
	    if(value){
	      this.HTMLElements.forEach( (el) => {
	        el.setAttribute(attrName, value);
	      });
	    } else {
	      return this.HTMLElements[0].getAttribute(attrName);
	    }
	  }

	  addClass(className){
	    this.HTMLElements.forEach( (el) => {
	      el.className +=  " " + className;
	    });
	  }

	//spaces?
	  removeClass(className){
	    this.HTMLElements.forEach( (el) => {
	      let regex = new RegExp(className);
	      el.className = el.className.replace(regex,'');
	    });
	  }


	  children() {
	    let childElements = [];
	    this.HTMLElements.forEach( (el) => {
	      childElements = childElements.concat(el.children);
	    });
	    return new DOMNodeCollection(childElements);
	  }

	  parent() {
	    let parentElements = [];
	    this.HTMLElements.forEach( (el) => {
	      parentElements = parentElements.concat(el.parentNode);
	    });
	    return new DOMNodeCollection(parentElements);
	  }

	  find(selector) {
	    let selected = [];
	    this.HTMLElements.forEach( (el) => {
	      selected = selected.concat(el.querySelectorAll(selector));
	    });
	    return new DOMNodeCollection(selected);
	  }

	  remove() {
	    this.HTMLElements.forEach( (el) => {
	      el.parentNode.removeChild(el);
	    });
	    this.HTMLElements = [];
	  }
	}

	module.exports = DOMNodeCollection;


/***/ }
/******/ ]);