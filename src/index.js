// imports
import "./pages/index.css";
//images
import headerlogo from "./images/UI/Logo.svg";
import profilepic from "./images/profile/Jack-Cousteau.jpg";
import editbuttonpic from "./images/UI/Edit-Button.svg";
import addbuttonpic from "./images/UI/Add-Button.svg";
import closepic from "./images/UI/Close-Icon.svg";
import profileeditpic from "./images/UI/Edit-Profile-Icon.svg";

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

// Default Profile info
const userDataDefault = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__about",
});

const profileValues = userDataDefault.getUserInfo();
profileForm.setInputValues({
  input1: profileValues.name,
  input2: profileValues.job,
});

//Post
const postForm = new PopupWithForm({
  popupSelector: "form-post",
  handleFormSubmit: addNewCard,
});

const postButton = document.querySelector(".profile__add-button");
const profileButton = document.querySelector(".profile__edit-button");

postButton.addEventListener("click", () => {
  postForm.open();
});

profileButton.addEventListener("click", () => {
  profileForm.open();
});

//Delete post

/* const deletePost = new PopupWithForm({
  popupSelector: "form-confirm",
  handleFormSubmit: ,
}); */

//const images
const headerImage = document.getElementById("header-logo");
headerImage.src = headerlogo;

const profileimage = document.getElementById("profile-image");
profileimage.src = profilepic;

const editbuttonimage = document.getElementById("profile__edit-button");
editbuttonimage.src = editbuttonpic;

const addbuttonimage = document.getElementById("profile__add-button");
addbuttonimage.src = addbuttonpic;

const trashimage = document.querySelectorAll("feed__trash-image");
trashimage.forEach((src) => (src.src = trashpic));

const heartbuttonimage = document.querySelectorAll("feed__heart-image");
heartbuttonimage.forEach((src) => (src.src = heartbuttonpic));

const profilecloseimage = document.getElementById("form-profile__close-image");
profilecloseimage.src = closepic;

const postcloseimage = document.getElementById("form-post__close-image");
postcloseimage.src = closepic;

const confirmcloseimage = document.getElementById("form-confirm__close-image");
confirmcloseimage.src = closepic;

const imageprofileclose = document.getElementById(
  "form-image-profile__close-image"
);
imageprofileclose.src = closepic;

const popupimagecloseimage = document.getElementById(
  "image-popup__close-image"
);
popupimagecloseimage.src = closepic;

const profileeditimage = document.getElementById("profile-edit-icon");
profileeditimage.src = profileeditpic;
