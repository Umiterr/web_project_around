// imports

//Card imports
import Section from "./Section.js";
import {
  feed,
  postButtonSave,
  postInput,
  Card,
  items,
  addNewCard,
} from "./Card.js";

//FormValidator import
import * as FormValidator from "./FormValidator.js";

//Popups imports
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";

//UserInfo import
import UserInfo from "./UserInfo.js";

//Card Generator

const imagePopup = new PopupWithImage({ popupSelector: "image-popup" });
const cardsList = new Section(
  {
    items: items,
    renderer: (cardItem) => {
      const newCard = new Card({
        data: cardItem,
        cardSelector: ".feed__post-template",
        handleCardClick: (cardItem) => {
          //Image popup
          const title = cardItem.title;
          const imageURL = cardItem.imageURL;

          imagePopup.open(title, imageURL);
        },
      });
      const cardElement = newCard.generateCard();

      cardsList.addItem(cardElement);
    },
  },
  ".feed"
);

cardsList.renderItems();

//Popups

//Profile
const profileForm = new PopupWithForm({
  popupSelector: "form-profile",
  handleFormSubmit: (formData) => {
    const UserData = new UserInfo({
      nameSelector: ".profile__info-name",
      jobSelector: ".profile__about",
    });
    UserData.setUserInfo({
      name: formData.nombre,
      job: formData.trabajo,
    });
  },
});

//Post
const postForm = new PopupWithForm({
  popupSelector: "form-post",
  handleFormSubmit: addNewCard,
});

const postButton = document.querySelector(".profile__add-button");
const profileButton = document.querySelector(".profile__edit-button");

postButton.addEventListener("click", () => {
  profileForm.open();
});

profileButton.addEventListener("click", () => {
  postForm.open();
});
