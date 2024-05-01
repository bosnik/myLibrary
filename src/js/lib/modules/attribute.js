import $ from '../core';

$.prototype.addAttribute = function(attributeName, attributeValue) {
    for (let i = 0; i < this.length; i++) {
        if (this[i]) {
            this[i].setAttribute(attributeName, attributeValue);
        }
    }
    return this;
};


$.prototype.removeAttribute = function(attributeName, attributeValue) {
    for (let i = 0; i < this.length; i++) {
        if (this[i]) {
            this[i].removeAttribute(attributeName, attributeValue);
        }
    }
    return this;
};


$.prototype.toggleAttribute = function(attributeName, attributeValue) {
    for (let i = 0; i < this.length; i++) {
        if (this[i]) {
            if (this[i].hasAttribute(attributeName)) {
                this[i].removeAttribute(attributeName);
            } else {
                this[i].setAttribute(attributeName, attributeValue);
            }
        }
    }
    return this;
};



