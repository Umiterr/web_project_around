export default class Popup {
  constructor({ popupSelector }) {
    this._popup = document.querySelector(`.${popupSelector}`);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupSelector = popupSelector;
  }

  open() {
    this._popup.classList.add(`${this._popupSelector}_on`);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(`${this._popupSelector}_on`);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector(`.${this._popupSelector}__close`)
      .addEventListener("click", () => {
        this.close();
      });
    this._popup
      .querySelector(`.${this._popupSelector}__BG`)
      .addEventListener("click", () => {
        this.close();
      });
  }
}
