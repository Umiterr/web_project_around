import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor({ popupSelector, card }) {
    super({ popupSelector });

    this._card = card;
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
      const card = this._card;
      card.remove();
      this.close();
    });
  }
}
