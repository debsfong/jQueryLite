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
