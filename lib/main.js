const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function (selector) {
  let nodeList;
  if (typeof(selector) === "string") {
    nodeList = Array.from(document.querySelectorAll(selector));
  } else if( selector instanceof HTMLElement){
    nodeList = [selector];
  }
  return new DOMNodeCollection(nodeList);
};
