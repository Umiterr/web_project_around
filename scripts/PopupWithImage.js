import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._image = document.querySelector(`.${popupSelector}__image`);
    this._title = document.querySelector(`.${popupSelector}__title`);
    console.log(this._image);
    
   
  }

  open(title, imageURL) {
    this._image.src = imageURL.src;
    this._image.alt = title.textContent;
    this._title.textContent = title.textContent;
    super.open();
  }
}
