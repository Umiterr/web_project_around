/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Card.js":
/*!*********************!*\
  !*** ./src/Card.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: function() { return /* binding */ Card; },
/* harmony export */   addNewCard: function() { return /* binding */ addNewCard; },
/* harmony export */   feed: function() { return /* binding */ feed; },
/* harmony export */   items: function() { return /* binding */ items; },
/* harmony export */   postButtonSave: function() { return /* binding */ postButtonSave; },
/* harmony export */   postInput: function() { return /* binding */ postInput; }
/* harmony export */ });
/* harmony import */ var _PopupWithImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupWithImage.js */ "./src/PopupWithImage.js");
/* harmony import */ var _images_UI_Trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/UI/Trash.svg */ "./src/images/UI/Trash.svg");
/* harmony import */ var _images_UI_Heart_White_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/UI/Heart-White.svg */ "./src/images/UI/Heart-White.svg");
/* harmony import */ var _images_Bliss_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Bliss.jpg */ "./src/images/Bliss.jpg");
/* harmony import */ var _images_El_Gran_Canon_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/El-Gran-Canon-2.jpg */ "./src/images/El-Gran-Canon-2.jpg");
/* harmony import */ var _images_El_Gran_Canon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/El-Gran-Canon.jpg */ "./src/images/El-Gran-Canon.jpg");
/* harmony import */ var _images_Montanas_Calvas_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/Montanas-Calvas.jpg */ "./src/images/Montanas-Calvas.jpg");
/* harmony import */ var _images_Lago_louise_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/Lago-louise.jpg */ "./src/images/Lago-louise.jpg");
/* harmony import */ var _images_Yosemite_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/Yosemite.jpg */ "./src/images/Yosemite.jpg");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//Imports





// default post images imports







var items = [{
  title: "Sodoma County",
  imageURL: _images_Bliss_jpg__WEBPACK_IMPORTED_MODULE_3__
}, {
  title: "El Gran Cañón 2",
  imageURL: _images_El_Gran_Canon_2_jpg__WEBPACK_IMPORTED_MODULE_4__
}, {
  title: "El Gran Cañón",
  imageURL: _images_El_Gran_Canon_jpg__WEBPACK_IMPORTED_MODULE_5__
}, {
  title: "Montañas Calvas",
  imageURL: _images_Montanas_Calvas_jpg__WEBPACK_IMPORTED_MODULE_6__
}, {
  title: "Lago-louise",
  imageURL: _images_Lago_louise_jpg__WEBPACK_IMPORTED_MODULE_7__
}, {
  title: "Valle de Yosemite",
  imageURL: _images_Yosemite_jpg__WEBPACK_IMPORTED_MODULE_8__
}];
var feed = document.querySelector(".feed");
var postButtonSave = document.querySelector(".form-post__save");
var postInput = document.querySelector(".form-post__inputs");
var Card = /*#__PURE__*/function () {
  function Card(_ref) {
    var data = _ref.data,
      cardSelector = _ref.cardSelector,
      handleCardClick = _ref.handleCardClick;
    _classCallCheck(this, Card);
    this._title = data.title;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._imageURL = data.imageURL;
    this._imageAlt = data.title;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector(".feed__post").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      // Delete new posts
      var deleteButton = this._element.querySelector(".feed__trash-button");
      deleteButton.addEventListener("click", function () {
        _this._element.remove();
      });

      //Heart new button
      var likeButton = this._element.querySelector(".feed__heart-button");
      setLikeEventListener(likeButton);

      // PopupWithImage
      var imageButton = this._element.querySelector(".feed__image-popup-buttom");
      imageButton.addEventListener("click", function () {
        _this._handleCardClick({
          title: _this._title,
          imageURL: _this._imageURL
        });
      });
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._element.querySelector(".feed__image").src = this._imageURL;
      this._element.querySelector(".feed__title").textContent = this._title;
      this._element.querySelector(".feed__image").alt = this._title;
      this._element.querySelector(".feed__trash-image").src = _images_UI_Trash_svg__WEBPACK_IMPORTED_MODULE_1__;
      this._element.querySelector(".feed__heart-image").src = _images_UI_Heart_White_svg__WEBPACK_IMPORTED_MODULE_2__;
      return this._element;
    }
  }]);
  return Card;
}();
function addNewCard(event) {
  event.preventDefault();
  var formPostName = document.querySelector(".form-post__name").value;
  var formPostURL = document.querySelector(".form-post__url").value;
  function addNewCardData(data, title, imageURL) {
    data.push({
      title: title,
      imageURL: imageURL
    });
  }
  addNewCardData(items, formPostName, formPostURL);
  function getNewCardData(arr) {
    if (arr.length > 0) {
      var newData = arr[arr.length - 1];
      return newData;
    }
  }

  //Disables Post button after adding a new post
  var disablePostButton = function disablePostButton() {
    var formPostElement = document.querySelector(".form-post");
    var buttonPostElement = formPostElement.querySelector(".form-post__save");
    buttonPostElement.classList.add("form__submit_inactive");
    buttonPostElement.disabled = true;
  };
  function createNewCard() {
    var newCardData = getNewCardData(items);
    var newCard = new Card({
      data: newCardData,
      cardSelector: ".feed__post-template",
      handleCardClick: function handleCardClick() {}
    });
    var cardElement = newCard.generateCard();
    feed.prepend(cardElement);
    function resetFormData() {
      document.querySelector(".form-post__name").value = "";
      document.querySelector(".form-post__url").value = "";
      disablePostButton();
    }
    resetFormData();
  }
  createNewCard();
}

// heart button

var heartButtons = document.querySelectorAll(".feed__heart-button");
heartButtons.forEach(function (button) {
  setLikeEventListener(button);
});
function setLikeEventListener(button) {
  button.addEventListener("click", function () {
    var clickedButton = button.closest(".feed__heart-button");
    var heartImage = button.querySelector(".feed__heart-image");
    if (clickedButton) {
      heartImage.classList.toggle("feed__heart-button_on");

      // Cambiar el atributo "alt" de la imagen
      if (heartImage.alt === "Corazón con me gusta") {
        heartImage.alt = "Corazón sin me gusta";
      } else {
        heartImage.alt = "Corazón con me gusta";
      }
    }
  });
}


/***/ }),

/***/ "./src/FormValidator.js":
/*!******************************!*\
  !*** ./src/FormValidator.js ***!
  \******************************/
/***/ (function() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var formConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
};
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    _classCallCheck(this, FormValidator);
    this._config = config;
    this._formElement = formElement;
  }
  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      var errorElement = this._errorElement;
      inputElement.classList.add(this._config.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._errorElement;
      inputElement.classList.remove(this._config.inputErrorClass);
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = "";
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput(inputList) {
      return inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._config.inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(this._config.inactiveButtonClass);
        buttonElement.disabled = false;
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      var inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
      var buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
      inputList.forEach(function (inputElement) {
        _this._errorElement = _this._formElement.querySelector(".".concat(inputElement.id, "-error"));
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(inputElement);
          _this._toggleButtonState(inputList, buttonElement);
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners();
    }
  }]);
  return FormValidator;
}();
var formElements = document.querySelectorAll(".form");
formElements.forEach(function (formElement) {
  var formValidator = new FormValidator(formConfig, formElement);
  formValidator.enableValidation();
});

/***/ }),

/***/ "./src/Popup.js":
/*!**********************!*\
  !*** ./src/Popup.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(_ref) {
    var popupSelector = _ref.popupSelector;
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(".".concat(popupSelector));
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupSelector = popupSelector;
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add("".concat(this._popupSelector, "_on"));
      document.addEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove("".concat(this._popupSelector, "_on"));
      document.removeEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popup.querySelector(".".concat(this._popupSelector, "__close")).addEventListener("click", function () {
        _this.close();
      });
      this._popup.querySelector(".".concat(this._popupSelector, "__BG")).addEventListener("click", function () {
        _this.close();
      });
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/PopupWithForm.js":
/*!******************************!*\
  !*** ./src/PopupWithForm.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(_ref) {
    var _this;
    var popupSelector = _ref.popupSelector,
      handleFormSubmit = _ref.handleFormSubmit;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, {
      popupSelector: popupSelector
    });
    _this._handleFormSubmit = handleFormSubmit;
    _this._form = document.querySelector(".".concat(popupSelector, "__inputs"));
    _this._saveButton = document.querySelector(".".concat(popupSelector, "__save"));
    _this.setEventListeners();
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._inputList = this._form.querySelectorAll(".form__input");
      this._formValues = {};
      this._inputList.forEach(function (input) {
        _this2._formValues[input.name] = input.value;
      });
      return this._formValues;
    }
  }, {
    key: "setInputValues",
    value: function setInputValues(_ref2) {
      var input1 = _ref2.input1,
        input2 = _ref2.input2;
      this._inputList = Array.from(this._form.querySelectorAll(".form__input"));
      this._inputList[0].value = input1;
      this._inputList[1].value = input2;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener("submit", function (event) {
        if (_this3._form === document.querySelector(".form-profile__inputs")) {
          _this3._handleFormSubmit(_this3._getInputValues());
          _this3.close();
        } else {
          _this3._handleFormSubmit(event);
          _this3.close();
        }
      });
      this._saveButton.addEventListener("click", function () {
        _this3.close();
      });
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/PopupWithImage.js":
/*!*******************************!*\
  !*** ./src/PopupWithImage.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(_ref) {
    var _thisSuper, _this;
    var popupSelector = _ref.popupSelector;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, {
      popupSelector: popupSelector
    });
    _this._image = document.querySelector(".".concat(popupSelector, "__image"));
    _this._title = document.querySelector(".".concat(popupSelector, "__title"));
    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(PopupWithImage.prototype)), "setEventListeners", _thisSuper).call(_thisSuper);
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(title, imageURL) {
      this._image.src = imageURL;
      this._image.alt = title;
      this._title.textContent = title;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/Section.js":
/*!************************!*\
  !*** ./src/Section.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Section; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.append(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      this._renderedItems.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/UserInfo.js":
/*!*************************!*\
  !*** ./src/UserInfo.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserInfo; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      jobSelector = _ref.jobSelector;
    _classCallCheck(this, UserInfo);
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._nameElement.textContent,
        job: this._jobElement.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        job = _ref2.job;
      this._nameElement.textContent = name;
      this._jobElement.textContent = job;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/Bliss.jpg":
/*!******************************!*\
  !*** ./src/images/Bliss.jpg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "e0e2307be4e2bc5a6a36.jpg";

/***/ }),

/***/ "./src/images/El-Gran-Canon-2.jpg":
/*!****************************************!*\
  !*** ./src/images/El-Gran-Canon-2.jpg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "1bc587deec300ac6b631.jpg";

/***/ }),

/***/ "./src/images/El-Gran-Canon.jpg":
/*!**************************************!*\
  !*** ./src/images/El-Gran-Canon.jpg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "039e08c9afaa8eeac821.jpg";

/***/ }),

/***/ "./src/images/Lago-louise.jpg":
/*!************************************!*\
  !*** ./src/images/Lago-louise.jpg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "7c3d6f144b930265668b.jpg";

/***/ }),

/***/ "./src/images/Montanas-Calvas.jpg":
/*!****************************************!*\
  !*** ./src/images/Montanas-Calvas.jpg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "d0f307f9ea20f8970c1a.jpg";

/***/ }),

/***/ "./src/images/UI/Add-Button.svg":
/*!**************************************!*\
  !*** ./src/images/UI/Add-Button.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "bed8c136e13907f5eefb.svg";

/***/ }),

/***/ "./src/images/UI/Close-Icon.svg":
/*!**************************************!*\
  !*** ./src/images/UI/Close-Icon.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "0ca722bc0e922fcea36e.svg";

/***/ }),

/***/ "./src/images/UI/Edit-Button.svg":
/*!***************************************!*\
  !*** ./src/images/UI/Edit-Button.svg ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "af236f6cf67005f1d7aa.svg";

/***/ }),

/***/ "./src/images/UI/Heart-White.svg":
/*!***************************************!*\
  !*** ./src/images/UI/Heart-White.svg ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "99043841e8bec6b9df21.svg";

/***/ }),

/***/ "./src/images/UI/Logo.svg":
/*!********************************!*\
  !*** ./src/images/UI/Logo.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c75819857ff1599f0c50.svg";

/***/ }),

/***/ "./src/images/UI/Trash.svg":
/*!*********************************!*\
  !*** ./src/images/UI/Trash.svg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "a85cc5e25106301e909e.svg";

/***/ }),

/***/ "./src/images/Yosemite.jpg":
/*!*********************************!*\
  !*** ./src/images/Yosemite.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "718361d5454b59e55597.jpg";

/***/ }),

/***/ "./src/images/profile/Jack-Cousteau.jpg":
/*!**********************************************!*\
  !*** ./src/images/profile/Jack-Cousteau.jpg ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "e7d376649aca6b620fcf.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _images_UI_Logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/UI/Logo.svg */ "./src/images/UI/Logo.svg");
/* harmony import */ var _images_profile_Jack_Cousteau_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/profile/Jack-Cousteau.jpg */ "./src/images/profile/Jack-Cousteau.jpg");
/* harmony import */ var _images_UI_Edit_Button_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/UI/Edit-Button.svg */ "./src/images/UI/Edit-Button.svg");
/* harmony import */ var _images_UI_Add_Button_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/UI/Add-Button.svg */ "./src/images/UI/Add-Button.svg");
/* harmony import */ var _images_UI_Close_Icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/UI/Close-Icon.svg */ "./src/images/UI/Close-Icon.svg");
/* harmony import */ var _Section_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Section.js */ "./src/Section.js");
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Card.js */ "./src/Card.js");
/* harmony import */ var _FormValidator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormValidator.js */ "./src/FormValidator.js");
/* harmony import */ var _FormValidator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PopupWithImage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PopupWithImage.js */ "./src/PopupWithImage.js");
/* harmony import */ var _PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PopupWithForm.js */ "./src/PopupWithForm.js");
/* harmony import */ var _UserInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UserInfo.js */ "./src/UserInfo.js");
// imports

//images






//Card imports



//FormValidator import


//Popups imports



//UserInfo import


//Card Generator

var imagePopup = new _PopupWithImage_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  popupSelector: "image-popup"
});
var cardsList = new _Section_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  items: _Card_js__WEBPACK_IMPORTED_MODULE_7__.items,
  renderer: function renderer(cardItem) {
    var newCard = new _Card_js__WEBPACK_IMPORTED_MODULE_7__.Card({
      data: cardItem,
      cardSelector: ".feed__post-template",
      handleCardClick: function handleCardClick(cardItem) {
        //Image popup
        var title = cardItem.title;
        var imageURL = cardItem.imageURL;
        imagePopup.open(title, imageURL);
      }
    });
    var cardElement = newCard.generateCard();
    cardsList.addItem(cardElement);
  }
}, ".feed");
cardsList.renderItems();

//Popups

//Profile
var profileForm = new _PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
  popupSelector: "form-profile",
  handleFormSubmit: function handleFormSubmit(formData) {
    var UserData = new _UserInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
      nameSelector: ".profile__info-name",
      jobSelector: ".profile__about"
    });
    UserData.setUserInfo({
      name: formData.nombre,
      job: formData.trabajo
    });
  }
});

// Default Profile info
var userDataDefault = new _UserInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__about"
});
var profileValues = userDataDefault.getUserInfo();
profileForm.setInputValues({
  input1: profileValues.name,
  input2: profileValues.job
});

//Post
var postForm = new _PopupWithForm_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
  popupSelector: "form-post",
  handleFormSubmit: _Card_js__WEBPACK_IMPORTED_MODULE_7__.addNewCard
});
var postButton = document.querySelector(".profile__add-button");
var profileButton = document.querySelector(".profile__edit-button");
postButton.addEventListener("click", function () {
  postForm.open();
});
profileButton.addEventListener("click", function () {
  profileForm.open();
});

//const images
var headerImage = document.getElementById("header-logo");
headerImage.src = _images_UI_Logo_svg__WEBPACK_IMPORTED_MODULE_1__;
var profileimage = document.getElementById("profile-image");
profileimage.src = _images_profile_Jack_Cousteau_jpg__WEBPACK_IMPORTED_MODULE_2__;
var editbuttonimage = document.getElementById("profile__edit-button");
editbuttonimage.src = _images_UI_Edit_Button_svg__WEBPACK_IMPORTED_MODULE_3__;
var addbuttonimage = document.getElementById("profile__add-button");
addbuttonimage.src = _images_UI_Add_Button_svg__WEBPACK_IMPORTED_MODULE_4__;
var trashimage = document.querySelectorAll("feed__trash-image");
trashimage.forEach(function (src) {
  return src.src = trashpic;
});
var heartbuttonimage = document.querySelectorAll("feed__heart-image");
heartbuttonimage.forEach(function (src) {
  return src.src = heartbuttonpic;
});
var profilecloseimage = document.getElementById("form-profile__close-image");
profilecloseimage.src = _images_UI_Close_Icon_svg__WEBPACK_IMPORTED_MODULE_5__;
var postcloseimage = document.getElementById("form-post__close-image");
postcloseimage.src = _images_UI_Close_Icon_svg__WEBPACK_IMPORTED_MODULE_5__;
var popupimagecloseimage = document.getElementById("image-popup__close-image");
popupimagecloseimage.src = _images_UI_Close_Icon_svg__WEBPACK_IMPORTED_MODULE_5__;
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEdBQUdpSSxzREFBUTtBQUU3QixJQUFNdUIsb0JBQW9CLEdBQUd4TCxRQUFRLENBQUNnTCxjQUFjLENBQ2xELDBCQUNGLENBQUM7QUFDRFEsb0JBQW9CLENBQUN4SixHQUFHLEdBQUdpSSxzREFBUSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL1BvcHVwLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0ltcG9ydHNcclxuXHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgdHJhc2hwaWMgZnJvbSBcIi4vaW1hZ2VzL1VJL1RyYXNoLnN2Z1wiO1xyXG5pbXBvcnQgaGVhcnRidXR0b25waWMgZnJvbSBcIi4vaW1hZ2VzL1VJL0hlYXJ0LVdoaXRlLnN2Z1wiO1xyXG5cclxuLy8gZGVmYXVsdCBwb3N0IGltYWdlcyBpbXBvcnRzXHJcblxyXG5pbXBvcnQgc29kb21hY291bnR5IGZyb20gXCIuL2ltYWdlcy9CbGlzcy5qcGdcIjtcclxuaW1wb3J0IGVsZ3JhbmNhbm9uMiBmcm9tIFwiLi9pbWFnZXMvRWwtR3Jhbi1DYW5vbi0yLmpwZ1wiO1xyXG5pbXBvcnQgZWxncmFuY2Fub24gZnJvbSBcIi4vaW1hZ2VzL0VsLUdyYW4tQ2Fub24uanBnXCI7XHJcbmltcG9ydCBtb250YW5hc2NhbHZhcyBmcm9tIFwiLi9pbWFnZXMvTW9udGFuYXMtQ2FsdmFzLmpwZ1wiO1xyXG5pbXBvcnQgbGFnb2xvdWlzZSBmcm9tIFwiLi9pbWFnZXMvTGFnby1sb3Vpc2UuanBnXCI7XHJcbmltcG9ydCB2YWxsZXlvc2VtaXRlIGZyb20gXCIuL2ltYWdlcy9Zb3NlbWl0ZS5qcGdcIjtcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHsgdGl0bGU6IFwiU29kb21hIENvdW50eVwiLCBpbWFnZVVSTDogc29kb21hY291bnR5IH0sXHJcbiAgeyB0aXRsZTogXCJFbCBHcmFuIENhw7HDs24gMlwiLCBpbWFnZVVSTDogZWxncmFuY2Fub24yIH0sXHJcbiAgeyB0aXRsZTogXCJFbCBHcmFuIENhw7HDs25cIiwgaW1hZ2VVUkw6IGVsZ3JhbmNhbm9uIH0sXHJcbiAgeyB0aXRsZTogXCJNb250YcOxYXMgQ2FsdmFzXCIsIGltYWdlVVJMOiBtb250YW5hc2NhbHZhcyB9LFxyXG4gIHsgdGl0bGU6IFwiTGFnby1sb3Vpc2VcIiwgaW1hZ2VVUkw6IGxhZ29sb3Vpc2UgfSxcclxuICB7IHRpdGxlOiBcIlZhbGxlIGRlIFlvc2VtaXRlXCIsIGltYWdlVVJMOiB2YWxsZXlvc2VtaXRlIH0sXHJcbl07XHJcblxyXG5jb25zdCBmZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVkXCIpO1xyXG5jb25zdCBwb3N0QnV0dG9uU2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3N0X19zYXZlXCIpO1xyXG5jb25zdCBwb3N0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9zdF9faW5wdXRzXCIpO1xyXG5cclxuY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoeyBkYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljayB9KSB7XHJcbiAgICB0aGlzLl90aXRsZSA9IGRhdGEudGl0bGU7XHJcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XHJcbiAgICB0aGlzLl9pbWFnZVVSTCA9IGRhdGEuaW1hZ2VVUkw7XHJcbiAgICB0aGlzLl9pbWFnZUFsdCA9IGRhdGEudGl0bGU7XHJcbiAgfVxyXG5cclxuICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcclxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5mZWVkX19wb3N0XCIpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gRGVsZXRlIG5ldyBwb3N0c1xyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRfX3RyYXNoLWJ1dHRvblwiKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9IZWFydCBuZXcgYnV0dG9uXHJcbiAgICBjb25zdCBsaWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRfX2hlYXJ0LWJ1dHRvblwiKTtcclxuICAgIHNldExpa2VFdmVudExpc3RlbmVyKGxpa2VCdXR0b24pO1xyXG5cclxuICAgIC8vIFBvcHVwV2l0aEltYWdlXHJcbiAgICBjb25zdCBpbWFnZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuZmVlZF9faW1hZ2UtcG9wdXAtYnV0dG9tXCJcclxuICAgICk7XHJcbiAgICBpbWFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soeyB0aXRsZTogdGhpcy5fdGl0bGUsIGltYWdlVVJMOiB0aGlzLl9pbWFnZVVSTCB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVkX19pbWFnZVwiKS5zcmMgPSB0aGlzLl9pbWFnZVVSTDtcclxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVkX190aXRsZVwiKS50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRfX2ltYWdlXCIpLmFsdCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRfX3RyYXNoLWltYWdlXCIpLnNyYyA9IHRyYXNocGljO1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWRfX2hlYXJ0LWltYWdlXCIpLnNyYyA9IGhlYXJ0YnV0dG9ucGljO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmV3Q2FyZChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgZm9ybVBvc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvc3RfX25hbWVcIikudmFsdWU7XHJcbiAgY29uc3QgZm9ybVBvc3RVUkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9zdF9fdXJsXCIpLnZhbHVlO1xyXG5cclxuICBmdW5jdGlvbiBhZGROZXdDYXJkRGF0YShkYXRhLCB0aXRsZSwgaW1hZ2VVUkwpIHtcclxuICAgIGRhdGEucHVzaCh7IHRpdGxlOiB0aXRsZSwgaW1hZ2VVUkw6IGltYWdlVVJMIH0pO1xyXG4gIH1cclxuICBhZGROZXdDYXJkRGF0YShpdGVtcywgZm9ybVBvc3ROYW1lLCBmb3JtUG9zdFVSTCk7XHJcblxyXG4gIGZ1bmN0aW9uIGdldE5ld0NhcmREYXRhKGFycikge1xyXG4gICAgaWYgKGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgICByZXR1cm4gbmV3RGF0YTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRGlzYWJsZXMgUG9zdCBidXR0b24gYWZ0ZXIgYWRkaW5nIGEgbmV3IHBvc3RcclxuICBjb25zdCBkaXNhYmxlUG9zdEJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1Qb3N0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3N0XCIpO1xyXG4gICAgY29uc3QgYnV0dG9uUG9zdEVsZW1lbnQgPSBmb3JtUG9zdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvc3RfX3NhdmVcIik7XHJcbiAgICBidXR0b25Qb3N0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9fc3VibWl0X2luYWN0aXZlXCIpO1xyXG4gICAgYnV0dG9uUG9zdEVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld0NhcmQoKSB7XHJcbiAgICBjb25zdCBuZXdDYXJkRGF0YSA9IGdldE5ld0NhcmREYXRhKGl0ZW1zKTtcclxuXHJcbiAgICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoe1xyXG4gICAgICBkYXRhOiBuZXdDYXJkRGF0YSxcclxuICAgICAgY2FyZFNlbGVjdG9yOiBcIi5mZWVkX19wb3N0LXRlbXBsYXRlXCIsXHJcbiAgICAgIGhhbmRsZUNhcmRDbGljazogKCkgPT4ge30sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxuXHJcbiAgICBmZWVkLnByZXBlbmQoY2FyZEVsZW1lbnQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybURhdGEoKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3N0X19uYW1lXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvc3RfX3VybFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIGRpc2FibGVQb3N0QnV0dG9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRGb3JtRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTmV3Q2FyZCgpO1xyXG59XHJcblxyXG4vLyBoZWFydCBidXR0b25cclxuXHJcbmNvbnN0IGhlYXJ0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmVlZF9faGVhcnQtYnV0dG9uXCIpO1xyXG5cclxuaGVhcnRCdXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gIHNldExpa2VFdmVudExpc3RlbmVyKGJ1dHRvbik7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2V0TGlrZUV2ZW50TGlzdGVuZXIoYnV0dG9uKSB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjbGlja2VkQnV0dG9uID0gYnV0dG9uLmNsb3Nlc3QoXCIuZmVlZF9faGVhcnQtYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgaGVhcnRJbWFnZSA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwiLmZlZWRfX2hlYXJ0LWltYWdlXCIpO1xyXG4gICAgaWYgKGNsaWNrZWRCdXR0b24pIHtcclxuICAgICAgaGVhcnRJbWFnZS5jbGFzc0xpc3QudG9nZ2xlKFwiZmVlZF9faGVhcnQtYnV0dG9uX29uXCIpO1xyXG5cclxuICAgICAgLy8gQ2FtYmlhciBlbCBhdHJpYnV0byBcImFsdFwiIGRlIGxhIGltYWdlblxyXG4gICAgICBpZiAoaGVhcnRJbWFnZS5hbHQgPT09IFwiQ29yYXrDs24gY29uIG1lIGd1c3RhXCIpIHtcclxuICAgICAgICBoZWFydEltYWdlLmFsdCA9IFwiQ29yYXrDs24gc2luIG1lIGd1c3RhXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhcnRJbWFnZS5hbHQgPSBcIkNvcmF6w7NuIGNvbiBtZSBndXN0YVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZlZWQsIHBvc3RCdXR0b25TYXZlLCBwb3N0SW5wdXQsIENhcmQsIGl0ZW1zLCBhZGROZXdDYXJkIH07XHJcbiIsImNvbnN0IGZvcm1Db25maWcgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiBcIi5mb3JtXCIsXHJcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybV9faW5wdXRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybV9fc3VibWl0XCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJmb3JtX19zdWJtaXRfaW5hY3RpdmVcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXQtZXJyb3JfYWN0aXZlXCIsXHJcbn07XHJcblxyXG5jbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9lcnJvckVsZW1lbnQ7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Vycm9yRWxlbWVudDtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpIHtcclxuICAgIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50KSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2NvbmZpZy5pbnB1dFNlbGVjdG9yKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLl9jb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3JcclxuICAgICk7XHJcblxyXG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxyXG4gICAgICApO1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBmb3JtRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1cIik7XHJcbmZvcm1FbGVtZW50cy5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IGZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtQ29uZmlnLCBmb3JtRWxlbWVudCk7XHJcbiAgZm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3Ioe3BvcHVwU2VsZWN0b3J9KSB7XHJcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwU2VsZWN0b3J9YCk7XHJcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9wb3B1cFNlbGVjdG9yID0gcG9wdXBTZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuX3BvcHVwU2VsZWN0b3J9X29uYCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoYCR7dGhpcy5fcG9wdXBTZWxlY3Rvcn1fb25gKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5fcG9wdXBTZWxlY3Rvcn1fX2Nsb3NlYCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9wb3B1cFNlbGVjdG9yfV9fQkdgKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCB9KSB7XHJcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XHJcblxyXG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XHJcbiAgICB0aGlzLl9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBTZWxlY3Rvcn1fX2lucHV0c2ApO1xyXG4gICAgdGhpcy5fc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwU2VsZWN0b3J9X19zYXZlYCk7XHJcblxyXG4gICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2lucHV0XCIpO1xyXG4gICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZXMoeyBpbnB1dDEsIGlucHV0MiB9KSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKSk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3RbMF0udmFsdWUgPSBpbnB1dDE7XHJcbiAgICB0aGlzLl9pbnB1dExpc3RbMV0udmFsdWUgPSBpbnB1dDI7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9mb3JtID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9ybS1wcm9maWxlX19pbnB1dHNgKSkge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQoZXZlbnQpO1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3NhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHN1cGVyKHsgcG9wdXBTZWxlY3RvciB9KTtcclxuICAgIHRoaXMuX2ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBTZWxlY3Rvcn1fX2ltYWdlYCk7XHJcbiAgICB0aGlzLl90aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BvcHVwU2VsZWN0b3J9X190aXRsZWApO1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIG9wZW4odGl0bGUsIGltYWdlVVJMKSB7XHJcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSBpbWFnZVVSTDtcclxuICAgIHRoaXMuX2ltYWdlLmFsdCA9IHRpdGxlO1xyXG4gICAgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBpdGVtcztcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3Rvciwgam9iU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9qb2JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihqb2JTZWxlY3Rvcik7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgam9iOiB0aGlzLl9qb2JFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgam9iIH0pIHtcclxuICAgIHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRoaXMuX2pvYkVsZW1lbnQudGV4dENvbnRlbnQgPSBqb2I7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIGltcG9ydHNcclxuaW1wb3J0IFwiLi9wYWdlcy9pbmRleC5jc3NcIjtcclxuLy9pbWFnZXNcclxuaW1wb3J0IGhlYWRlcmxvZ28gZnJvbSBcIi4vaW1hZ2VzL1VJL0xvZ28uc3ZnXCI7XHJcbmltcG9ydCBwcm9maWxlcGljIGZyb20gXCIuL2ltYWdlcy9wcm9maWxlL0phY2stQ291c3RlYXUuanBnXCI7XHJcbmltcG9ydCBlZGl0YnV0dG9ucGljIGZyb20gXCIuL2ltYWdlcy9VSS9FZGl0LUJ1dHRvbi5zdmdcIjtcclxuaW1wb3J0IGFkZGJ1dHRvbnBpYyBmcm9tIFwiLi9pbWFnZXMvVUkvQWRkLUJ1dHRvbi5zdmdcIjtcclxuaW1wb3J0IGNsb3NlcGljIGZyb20gXCIuL2ltYWdlcy9VSS9DbG9zZS1JY29uLnN2Z1wiO1xyXG5cclxuLy9DYXJkIGltcG9ydHNcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGZlZWQsXHJcbiAgcG9zdEJ1dHRvblNhdmUsXHJcbiAgcG9zdElucHV0LFxyXG4gIENhcmQsXHJcbiAgaXRlbXMsXHJcbiAgYWRkTmV3Q2FyZCxcclxufSBmcm9tIFwiLi9DYXJkLmpzXCI7XHJcblxyXG4vL0Zvcm1WYWxpZGF0b3IgaW1wb3J0XHJcbmltcG9ydCAqIGFzIEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4vRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5cclxuLy9Qb3B1cHMgaW1wb3J0c1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4vUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4vUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5cclxuLy9Vc2VySW5mbyBpbXBvcnRcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuL1VzZXJJbmZvLmpzXCI7XHJcblxyXG4vL0NhcmQgR2VuZXJhdG9yXHJcblxyXG5jb25zdCBpbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKHsgcG9wdXBTZWxlY3RvcjogXCJpbWFnZS1wb3B1cFwiIH0pO1xyXG5jb25zdCBjYXJkc0xpc3QgPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICBpdGVtczogaXRlbXMsXHJcbiAgICByZW5kZXJlcjogKGNhcmRJdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZCh7XHJcbiAgICAgICAgZGF0YTogY2FyZEl0ZW0sXHJcbiAgICAgICAgY2FyZFNlbGVjdG9yOiBcIi5mZWVkX19wb3N0LXRlbXBsYXRlXCIsXHJcbiAgICAgICAgaGFuZGxlQ2FyZENsaWNrOiAoY2FyZEl0ZW0pID0+IHtcclxuICAgICAgICAgIC8vSW1hZ2UgcG9wdXBcclxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gY2FyZEl0ZW0udGl0bGU7XHJcbiAgICAgICAgICBjb25zdCBpbWFnZVVSTCA9IGNhcmRJdGVtLmltYWdlVVJMO1xyXG5cclxuICAgICAgICAgIGltYWdlUG9wdXAub3Blbih0aXRsZSwgaW1hZ2VVUkwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcblxyXG4gICAgICBjYXJkc0xpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgXCIuZmVlZFwiXHJcbik7XHJcblxyXG5jYXJkc0xpc3QucmVuZGVySXRlbXMoKTtcclxuXHJcbi8vUG9wdXBzXHJcblxyXG4vL1Byb2ZpbGVcclxuY29uc3QgcHJvZmlsZUZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogXCJmb3JtLXByb2ZpbGVcIixcclxuICBoYW5kbGVGb3JtU3VibWl0OiAoZm9ybURhdGEpID0+IHtcclxuICAgIGNvbnN0IFVzZXJEYXRhID0gbmV3IFVzZXJJbmZvKHtcclxuICAgICAgbmFtZVNlbGVjdG9yOiBcIi5wcm9maWxlX19pbmZvLW5hbWVcIixcclxuICAgICAgam9iU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2Fib3V0XCIsXHJcbiAgICB9KTtcclxuICAgIFVzZXJEYXRhLnNldFVzZXJJbmZvKHtcclxuICAgICAgbmFtZTogZm9ybURhdGEubm9tYnJlLFxyXG4gICAgICBqb2I6IGZvcm1EYXRhLnRyYWJham8sXHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIERlZmF1bHQgUHJvZmlsZSBpbmZvXHJcbmNvbnN0IHVzZXJEYXRhRGVmYXVsdCA9IG5ldyBVc2VySW5mbyh7XHJcbiAgbmFtZVNlbGVjdG9yOiBcIi5wcm9maWxlX19pbmZvLW5hbWVcIixcclxuICBqb2JTZWxlY3RvcjogXCIucHJvZmlsZV9fYWJvdXRcIixcclxufSk7XHJcblxyXG5jb25zdCBwcm9maWxlVmFsdWVzID0gdXNlckRhdGFEZWZhdWx0LmdldFVzZXJJbmZvKCk7XHJcbnByb2ZpbGVGb3JtLnNldElucHV0VmFsdWVzKHtcclxuICBpbnB1dDE6IHByb2ZpbGVWYWx1ZXMubmFtZSxcclxuICBpbnB1dDI6IHByb2ZpbGVWYWx1ZXMuam9iLFxyXG59KTtcclxuXHJcbi8vUG9zdFxyXG5jb25zdCBwb3N0Rm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBcImZvcm0tcG9zdFwiLFxyXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IGFkZE5ld0NhcmQsXHJcbn0pO1xyXG5cclxuY29uc3QgcG9zdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcclxuY29uc3QgcHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XHJcblxyXG5wb3N0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgcG9zdEZvcm0ub3BlbigpO1xyXG59KTtcclxuXHJcbnByb2ZpbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwcm9maWxlRm9ybS5vcGVuKCk7XHJcbn0pO1xyXG5cclxuLy9jb25zdCBpbWFnZXNcclxuY29uc3QgaGVhZGVySW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1sb2dvXCIpO1xyXG5oZWFkZXJJbWFnZS5zcmMgPSBoZWFkZXJsb2dvO1xyXG5cclxuY29uc3QgcHJvZmlsZWltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlLWltYWdlXCIpO1xyXG5wcm9maWxlaW1hZ2Uuc3JjID0gcHJvZmlsZXBpYztcclxuXHJcbmNvbnN0IGVkaXRidXR0b25pbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZV9fZWRpdC1idXR0b25cIik7XHJcbmVkaXRidXR0b25pbWFnZS5zcmMgPSBlZGl0YnV0dG9ucGljO1xyXG5cclxuY29uc3QgYWRkYnV0dG9uaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGVfX2FkZC1idXR0b25cIik7XHJcbmFkZGJ1dHRvbmltYWdlLnNyYyA9IGFkZGJ1dHRvbnBpYztcclxuXHJcbmNvbnN0IHRyYXNoaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZmVlZF9fdHJhc2gtaW1hZ2VcIik7XHJcbnRyYXNoaW1hZ2UuZm9yRWFjaCgoc3JjKSA9PiAoc3JjLnNyYyA9IHRyYXNocGljKSk7XHJcblxyXG5jb25zdCBoZWFydGJ1dHRvbmltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZlZWRfX2hlYXJ0LWltYWdlXCIpO1xyXG5oZWFydGJ1dHRvbmltYWdlLmZvckVhY2goKHNyYykgPT4gKHNyYy5zcmMgPSBoZWFydGJ1dHRvbnBpYykpO1xyXG5cclxuY29uc3QgcHJvZmlsZWNsb3NlaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tcHJvZmlsZV9fY2xvc2UtaW1hZ2VcIik7XHJcbnByb2ZpbGVjbG9zZWltYWdlLnNyYyA9IGNsb3NlcGljO1xyXG5cclxuY29uc3QgcG9zdGNsb3NlaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tcG9zdF9fY2xvc2UtaW1hZ2VcIik7XHJcbnBvc3RjbG9zZWltYWdlLnNyYyA9IGNsb3NlcGljO1xyXG5cclxuY29uc3QgcG9wdXBpbWFnZWNsb3NlaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImltYWdlLXBvcHVwX19jbG9zZS1pbWFnZVwiXHJcbik7XHJcbnBvcHVwaW1hZ2VjbG9zZWltYWdlLnNyYyA9IGNsb3NlcGljO1xyXG4iXSwibmFtZXMiOlsiUG9wdXBXaXRoSW1hZ2UiLCJ0cmFzaHBpYyIsImhlYXJ0YnV0dG9ucGljIiwic29kb21hY291bnR5IiwiZWxncmFuY2Fub24yIiwiZWxncmFuY2Fub24iLCJtb250YW5hc2NhbHZhcyIsImxhZ29sb3Vpc2UiLCJ2YWxsZXlvc2VtaXRlIiwiaXRlbXMiLCJ0aXRsZSIsImltYWdlVVJMIiwiZmVlZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBvc3RCdXR0b25TYXZlIiwicG9zdElucHV0IiwiQ2FyZCIsIl9yZWYiLCJkYXRhIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiX2NsYXNzQ2FsbENoZWNrIiwiX3RpdGxlIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaW1hZ2VVUkwiLCJfaW1hZ2VBbHQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9nZXRUZW1wbGF0ZSIsImNhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIl90aGlzIiwiZGVsZXRlQnV0dG9uIiwiX2VsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwibGlrZUJ1dHRvbiIsInNldExpa2VFdmVudExpc3RlbmVyIiwiaW1hZ2VCdXR0b24iLCJnZW5lcmF0ZUNhcmQiLCJzcmMiLCJ0ZXh0Q29udGVudCIsImFsdCIsImFkZE5ld0NhcmQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybVBvc3ROYW1lIiwiZm9ybVBvc3RVUkwiLCJhZGROZXdDYXJkRGF0YSIsInB1c2giLCJnZXROZXdDYXJkRGF0YSIsImFyciIsImxlbmd0aCIsIm5ld0RhdGEiLCJkaXNhYmxlUG9zdEJ1dHRvbiIsImZvcm1Qb3N0RWxlbWVudCIsImJ1dHRvblBvc3RFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzYWJsZWQiLCJjcmVhdGVOZXdDYXJkIiwibmV3Q2FyZERhdGEiLCJuZXdDYXJkIiwicHJlcGVuZCIsInJlc2V0Rm9ybURhdGEiLCJoZWFydEJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImNsaWNrZWRCdXR0b24iLCJjbG9zZXN0IiwiaGVhcnRJbWFnZSIsInRvZ2dsZSIsImZvcm1Db25maWciLCJmb3JtU2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsIl9jb25maWciLCJfZm9ybUVsZW1lbnQiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJfZXJyb3JFbGVtZW50IiwiX2hpZGVJbnB1dEVycm9yIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJpbnB1dExpc3QiLCJzb21lIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiYnV0dG9uRWxlbWVudCIsIkFycmF5IiwiZnJvbSIsImNvbmNhdCIsImlkIiwiZW5hYmxlVmFsaWRhdGlvbiIsImV2dCIsImZvcm1FbGVtZW50cyIsImZvcm1WYWxpZGF0b3IiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiX3BvcHVwU2VsZWN0b3IiLCJvcGVuIiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJkZWZhdWx0IiwiUG9wdXBXaXRoRm9ybSIsIl9Qb3B1cCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImhhbmRsZUZvcm1TdWJtaXQiLCJjYWxsIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfZm9ybSIsIl9zYXZlQnV0dG9uIiwiX2dldElucHV0VmFsdWVzIiwiX3RoaXMyIiwiX2lucHV0TGlzdCIsIl9mb3JtVmFsdWVzIiwiaW5wdXQiLCJuYW1lIiwic2V0SW5wdXRWYWx1ZXMiLCJfcmVmMiIsImlucHV0MSIsImlucHV0MiIsIl9nZXQiLCJfZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJfdGhpczMiLCJfdGhpc1N1cGVyIiwiX2ltYWdlIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVkSXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiYWRkSXRlbSIsImVsZW1lbnQiLCJhcHBlbmQiLCJyZW5kZXJJdGVtcyIsIml0ZW0iLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiX25hbWVFbGVtZW50IiwiX2pvYkVsZW1lbnQiLCJnZXRVc2VySW5mbyIsImpvYiIsInNldFVzZXJJbmZvIiwiaGVhZGVybG9nbyIsInByb2ZpbGVwaWMiLCJlZGl0YnV0dG9ucGljIiwiYWRkYnV0dG9ucGljIiwiY2xvc2VwaWMiLCJpbWFnZVBvcHVwIiwiY2FyZHNMaXN0IiwiY2FyZEl0ZW0iLCJwcm9maWxlRm9ybSIsImZvcm1EYXRhIiwiVXNlckRhdGEiLCJub21icmUiLCJ0cmFiYWpvIiwidXNlckRhdGFEZWZhdWx0IiwicHJvZmlsZVZhbHVlcyIsInBvc3RGb3JtIiwicG9zdEJ1dHRvbiIsInByb2ZpbGVCdXR0b24iLCJoZWFkZXJJbWFnZSIsImdldEVsZW1lbnRCeUlkIiwicHJvZmlsZWltYWdlIiwiZWRpdGJ1dHRvbmltYWdlIiwiYWRkYnV0dG9uaW1hZ2UiLCJ0cmFzaGltYWdlIiwiaGVhcnRidXR0b25pbWFnZSIsInByb2ZpbGVjbG9zZWltYWdlIiwicG9zdGNsb3NlaW1hZ2UiLCJwb3B1cGltYWdlY2xvc2VpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=