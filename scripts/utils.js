import { toggleProfile, refreshProfile } from "./utils/Profilemodule.js";
import { togglePost } from "./utils/PostModule.js";
import {
  closePopup,
  setImagePopupEventListener,
} from "./utils/ImagePopupModule.js";

// Edit profile form

// Open/Close
const closeButton = document.querySelector(".form-profile__close");
const formProfile = document.querySelector(".form-profile");
const profileButton = document.querySelector(".profile__edit-button");
const profileOn = document.querySelector(".form-profile_on");
const profileBG = document.querySelector(".form-profile__BG");

profileBG.addEventListener("click", () => toggleProfile(formProfile));

closeButton.addEventListener("click", () => toggleProfile(formProfile));

profileButton.addEventListener("click", () => toggleProfile(formProfile));

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    formProfile.classList.contains("form-profile_on")
  ) {
    toggleProfile(formProfile);
  }
});

refreshProfile();

// post form

// Open/Close
const closeButtonPost = document.querySelector(".form-post__close");
const postButtonSave = document.querySelector(".form-post__save");
const postOn = document.querySelector(".form-post_on");
const formPost = document.querySelector(".form-post");
const postButtonAdd = document.querySelector(".profile__add-button");
const postInput = document.querySelector(".form-post__inputs");
const postBG = document.querySelector(".form-post__BG");

postBG.addEventListener("click", () => togglePost(formPost));
closeButtonPost.addEventListener("click", () => togglePost(formPost));
postButtonSave.addEventListener("click", () => togglePost(formPost));
postButtonAdd.addEventListener("click", () => togglePost(formPost));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && formPost.classList.contains("form-post_on")) {
    togglePost(formPost);
  }
});

// Image popup

// Close popup

const closeButtonPopup = document.querySelector(".image-popup__close");
const buttonPopups = document.querySelectorAll(".feed__image-popup-buttom");
const imagePopup = document.querySelector(".image-popup");
const imagePopupOn = document.querySelector(".image-popup_on");
const imagePopupBG = document.querySelector(".image-popup__BG");

closeButtonPopup.addEventListener("click", () => closePopup(imagePopup));
imagePopupBG.addEventListener("click", () => closePopup(imagePopup));

//show popup
const popupImage = document.querySelector(".image-popup__image");
const popupImageTitle = document.querySelector(".image-popup__title");

buttonPopups.forEach(function (button) {
  setImagePopupEventListener(button);
});
