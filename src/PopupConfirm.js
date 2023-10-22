import Popup from "./Popup.js";
import Api from "./Api.js";

export default class PopupConfirm extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._cardId = undefined;
    this._saveButton = document.querySelector(`.${popupSelector}__save`);
    this._form = document.querySelector(`.${popupSelector}`);

    this.setEventListenersNew();
  }

  close() {
    super.close();
  }

  setCardId(id) {
    this._cardId = id;
  }

  setEventListenersNew() {
    super.setEventListeners();

    this._saveButton.addEventListener("click", () => {
      const deleteCard = new Api({
        groupId: "web_es_09",
        baseUrl: "https://around.nomoreparties.co/v1",
        resource: "cards",
      });
      deleteCard.deleteNewCard(this._cardId);
      const card = document.getElementById(this._cardId);
      card.remove();
      this.close();
    });
  }
}
