//Imports
import PopupConfirm from "./PopupConfirm.js";
import PopupWithImage from "./PopupWithImage.js";
import trashpic from "./images/UI/Trash.svg";
import heartbuttonpic from "./images/UI/Heart-White.svg";
import Api from "./Api.js";

const items = [];

const feed = document.querySelector(".feed");
const postButtonSave = document.querySelector(".form-post__save");
const postInput = document.querySelector(".form-post__inputs");

class Card {
  constructor({ data, cardSelector, handleCardClick }) {
    this._title = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._imageURL = data.link;
    this._imageAlt = data.name;
    this._id = data._id;
    this._likes = data.likes;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".feed__post")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    // Delete new posts
    const deleteButton = this._element.querySelector(".feed__trash-button");
    setDeletePopupEventListener(deleteButton);

    //Heart new button
    const likeButton = this._element.querySelector(".feed__heart-button");
    setLikeEventListener(likeButton);

    // PopupWithImage
    const imageButton = this._element.querySelector(
      ".feed__image-popup-buttom"
    );
    imageButton.addEventListener("click", () => {
      this._handleCardClick({ title: this._title, imageURL: this._imageURL });
    });
  }

  generateCard({ cardOnline, clientUsername }) {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".feed__image").src = this._imageURL;
    this._element.querySelector(".feed__title").textContent = this._title;
    this._element.querySelector(".feed__image").alt = this._title;
    this._element.querySelector(".feed__trash-image").src = trashpic;
    this._element.querySelector(".feed__heart-image").src = heartbuttonpic;
    this._element.querySelector(".feed__heart-likes").textContent =
      this._likes.length;
    this._element.querySelector(".feed__heart-likes").id = this._id;

    this._element.id = this._id;

    if (!(cardOnline.owner.name === clientUsername)) {
      const trashButton = this._element.querySelector(".feed__trash-button");

      trashButton.remove();
    }

    const like = this._element.querySelector(".feed__heart-likes");
    const heartImage = this._element.querySelector(".feed__heart-image");

    if (
      cardOnline.likes.some((like) => like.name === clientUsername) &&
      parseInt(like.textContent) >= 1
    ) {
      heartImage.classList.toggle("feed__heart-button_on");
    } else if (parseInt(like.textContent) === 0) {
      like.style.color = "transparent";
    }

    return this._element;
  }

  removeTrashButtons() {}
}

function addNewCard({ cardOnline, clientUsername }) {
  disablePostButton();

  const newCard = new Card({
    data: cardOnline,
    cardSelector: ".feed__post-template",
    handleCardClick: () => {},
  });

  items.push(cardOnline);

  const cardElement = newCard.generateCard({ cardOnline, clientUsername });

  feed.prepend(cardElement);
}

function disablePostButton() {
  document.querySelector(".form-post__name").value = "";
  document.querySelector(".form-post__url").value = "";

  const formPostElement = document.querySelector(".form-post");
  const buttonPostElement = formPostElement.querySelector(".form-post__save");
  buttonPostElement.classList.add("form__submit_inactive");
  buttonPostElement.disabled = true;
}

// delete button

//Delete post

const deleteButtons = document.querySelectorAll(".feed__trash-button");

deleteButtons.forEach(function (button) {
  setDeletePopupEventListener(button);
});
const popupConfirm = new PopupConfirm({
  popupSelector: "form-confirm",
});

function setDeletePopupEventListener(button) {
  button.addEventListener("click", function () {
    const clickedButton = button.closest(".feed__trash-button");
    if (clickedButton) {
      const card = button.closest(".feed__post");

      popupConfirm.setCardId(card.id);
      popupConfirm.open();
    }
  });
}

// heart button

const heartButtons = document.querySelectorAll(".feed__heart-button");

heartButtons.forEach(function (button) {
  setLikeEventListener(button);
});

function setLikeEventListener(button) {
  button.addEventListener("click", () => {
    const clickedButton = button.closest(".feed__heart-button");
    const heartImage = button.querySelector(".feed__heart-image");
    const like = button.querySelector(".feed__heart-likes");

    const likeHandler = new Api({
      groupId: "web_es_09",
      baseUrl: "https://around.nomoreparties.co/v1",
      resource: "cards",
    });

    if (
      clickedButton &&
      !heartImage.classList.contains("feed__heart-button_on")
    ) {
      heartImage.classList.toggle("feed__heart-button_on");
      like.textContent = parseInt(like.textContent) + 1;
      likeHandler.setLike(like.id);
      if (parseInt(like.textContent) >= 1) {
        like.style.color = "black";
      }
    } else if (heartImage.classList.contains("feed__heart-button_on")) {
      heartImage.classList.toggle("feed__heart-button_on");
      like.textContent = parseInt(like.textContent) - 1;
      likeHandler.removeLike(like.id);
      if (parseInt(like.textContent) === 0) {
        like.style.color = "transparent";
      }
    }

    heartImage.alt =
      heartImage.alt === "Corazón con me gusta"
        ? "Corazón sin me gusta"
        : "Corazón con me gusta";
  });
}

export { feed, postButtonSave, postInput, Card, items, addNewCard };
