import Popup from "./Popup.js";

export default class PopupProfileImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });

    this._saveButton = document.querySelector(`.${popupSelector}__save`);
    this._form = document.querySelector(`.${popupSelector}`);

    this.setEventListenersNew();
  }

  close() {
    super.close();
  }

  setEventListenersNew() {
    super.setEventListeners();

    this._saveButton.addEventListener("click", () => {
      this.close();
    });
  }
}
