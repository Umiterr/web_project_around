import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._image = document.querySelector(`.${popupSelector}__image`);
    this._title = document.querySelector(`.${popupSelector}__title`);
    super.setEventListeners();
  }

  open(title, imageURL) {
    this._image.src = imageURL;
    this._image.alt = title;
    this._title.textContent = title;
    super.open();
  }
}
