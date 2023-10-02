import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });

    this._handleFormSubmit = handleFormSubmit;
    this._form = document.querySelector(`.${popupSelector}__inputs`);
    this._saveButton = document.querySelector(`.${popupSelector}__save`);
    this._BG = this._popup.querySelector(`.${popupSelector}__BG`);
    this._buttonClose = this._popup.querySelector(`.${popupSelector}__close`);

    this._postButton = document.querySelector(".profile__add-button");
    this._profileButton = document.querySelector(".profile__edit-button");

    this.setEventListeners();
    this._getInputValues();
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll(".form__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    super.close();
  }

  setEventListeners() {
    this._form.addEventListener("submit", (event) => {
      if (this._form === document.querySelector(`.form-profile__inputs`)) {
        this._handleFormSubmit(this._getInputValues());
        console.log("profile");
        this.close();
      } else {
        this._handleFormSubmit();
        console.log("post");
        this.close();
      }
    });

    this._BG.addEventListener("click", () => {
      this.close();
    });

    this._saveButton.addEventListener("click", () => {
      this.close();
    });

    this._buttonClose.addEventListener("click", () => {
      this.close();
    });

    if (this._form === document.querySelector(`.form-post__inputs`)) {
      this._postButton.addEventListener("click", () => {
        super.open();
      });
    } else {
      this._profileButton.addEventListener("click", () => {
        super.open();
      });
    }
  }
}
