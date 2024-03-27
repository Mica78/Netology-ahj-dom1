/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/images/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/goblin.js

class goblinWidjet {
  constructor(element) {
    this._element = element;
    this.goblinImage = document.createElement("img");
    this.goblinImage.style.width = "100%";
    this.goblinImage.src = goblin_namespaceObject;
    this.goblinImage.classList.add("goblin");
    this.goblinImage.margin = "auto";
    this.childrens = this._element.querySelectorAll(".hole");
  }
  putGoblin(randomNumber) {
    const element = this.childrens[randomNumber];
    element.insertBefore(this.goblinImage, element.firstChild);
  }
  deleteGoblin() {
    const goblin = this._element.querySelector(".goblin");
    goblin.remove();
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const widjet = new goblinWidjet(document.querySelector(".widjet-container"));
  let randomNumber = Math.floor(Math.random() * (widjet.childrens.length - 1));
  widjet.putGoblin(randomNumber);
  setInterval(() => {
    widjet.deleteGoblin();
    let anotherRandomNumber = Math.floor(Math.random() * widjet.childrens.length);
    while (anotherRandomNumber === randomNumber) {
      anotherRandomNumber = Math.floor(Math.random() * (widjet.childrens.length - 1));
    }
    widjet.putGoblin(anotherRandomNumber);
    randomNumber = anotherRandomNumber;
  }, 2000);
});
;// CONCATENATED MODULE: ./src/index.js




/******/ })()
;