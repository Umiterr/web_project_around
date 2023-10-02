//Imports

import PopupWithImage from "./PopupWithImage.js";

const items = [
  { title: "Sodoma County", imageURL: "images/Bliss.jpg" },
  { title: "El Gran Cañón 2", imageURL: "images/El-Gran-Canon-2.jpg" },
  { title: "El Gran Cañón", imageURL: "images/El-Gran-Canon.jpg" },
  { title: "Montañas Calvas", imageURL: "images/Montanas-Calvas.jpg" },
  { title: "Lago-louise", imageURL: "images/Lago-louise.jpg" },
  { title: "Valle de Yosemite", imageURL: "images/Yosemite.jpg" },
];

const feed = document.querySelector(".feed");
const postButtonSave = document.querySelector(".form-post__save");
const postInput = document.querySelector(".form-post__inputs");

class Card {
  constructor({data, cardSelector, handleCardClick}) {
    this._title = data.title;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._imageURL = data.imageURL;
    this._imageAlt = data.title;
    
    
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
    deleteButton.addEventListener("click", () => {
      this._element.remove();
    });

    //Heart new button
    const likeButton = this._element.querySelector(".feed__heart-button");
    setLikeEventListener(likeButton);

// PopupWithImage
    const imageButton = this._element.querySelector(".feed__image-popup-buttom");
    imageButton.addEventListener("click", () => {
      this._handleCardClick();
    });


  }

   

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".feed__image").src = this._imageURL;
    this._element.querySelector(".feed__title").textContent = this._title;
    this._element.querySelector(".feed__image").alt = this._title;

    return this._element;
  }
}

function addNewCard(event) {
  event.preventDefault();
  const formPostName = document.querySelector(".form-post__name").value;
  const formPostURL = document.querySelector(".form-post__url").value;

  function addNewCardData(data, title, imageURL) {
    data.push({ title: title, imageURL: imageURL });
  }

  addNewCardData(items, formPostName, formPostURL);

  function getNewCardData(arr) {
    if (arr.length > 0) {
      const newData = arr[arr.length - 1];
      return newData;
    }
  }

  //Disables Post button after adding a new post
  const disablePostButton = () => {
    const formPostElement = document.querySelector(".form-post");
    const buttonPostElement = formPostElement.querySelector(".form-post__save");
    buttonPostElement.classList.add("form__submit_inactive");
    buttonPostElement.disabled = true;
  };

  function createNewCard() {
    const newCardData = getNewCardData(items);
    const newCard = new Card(newCardData, ".feed__post-template");
    const cardElement = newCard.generateCard();


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

const heartButtons = document.querySelectorAll(".feed__heart-button");

heartButtons.forEach(function (button) {
  setLikeEventListener(button);
});

function setLikeEventListener(button) {
  button.addEventListener("click", function () {
    const clickedButton = button.closest(".feed__heart-button");
    const heartImage = button.querySelector(".feed__heart-image");
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

export { feed, postButtonSave, postInput, Card, items, addNewCard };
