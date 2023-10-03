import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });

    this._handleFormSubmit = handleFormSubmit;
    this._form = document.querySelector(`.${popupSelector}__inputs`);
    this._saveButton = document.querySelector(`.${popupSelector}__save`);

    this.setEventListeners();
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
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      if (this._form === document.querySelector(`.form-profile__inputs`)) {
        this._handleFormSubmit(this._getInputValues());
        this.close();
      } else {
        this._handleFormSubmit(event);

        this.close();
      }
    });

    this._saveButton.addEventListener("click", () => {
      this.close();
    });
  }
}
