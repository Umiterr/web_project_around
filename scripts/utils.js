// Edit profile form

// Open/Close
const closeButton = document.querySelector(".form-profile__close");
const formProfile = document.querySelector(".form-profile");
const profileButton = document.querySelector(".profile__edit-button");
const profileOn = document.querySelector(".form-profile_on");
const profileBG = document.querySelector(".form-profile__BG");

function toggleProfile(form) {
  form.classList.toggle("form-profile_on");
}

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

// Name/About
const profileNameForm = document.querySelector(".form-profile__name");
const profileAboutForm = document.querySelector(".form-profile__about");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__about");
const profileSaveButton = document.querySelector(".form-profile__save");
const profileInput = document.querySelector(".form-profile__inputs");

function refreshProfile() {
  profileNameForm.value = profileName.textContent;
  profileAboutForm.value = profileAbout.textContent;
}

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

function togglePost(form) {
  form.classList.toggle("form-post_on");
}

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

function closePopup(popup) {
  popup.classList.toggle("image-popup_on");
  if (popup.classList.contains("image-popup_on")) {
    document.addEventListener("keydown", closeEscapePopupImage);
  } else {
    document.removeEventListener("keydown", closeEscapePopupImage);
  }
}

closeButtonPopup.addEventListener("click", () => closePopup(imagePopup));
imagePopupBG.addEventListener("click", () => closePopup(imagePopup));

const closeEscapePopupImage = (event) => {
  if (
    event.key === "Escape" &&
    imagePopup.classList.contains("image-popup_on")
  ) {
    closePopup(imagePopup);
  }
};

//show popup
const popupImage = document.querySelector(".image-popup__image");
const popupImageTitle = document.querySelector(".image-popup__title");

buttonPopups.forEach(function (button) {
  setImagePopupEventListener(button);
});

function setImagePopupEventListener(button) {
  const feedImage = button.querySelector(".feed__image");
  const feedTitle = button.closest(".feed__post").querySelector(".feed__title");

  button.addEventListener("click", function () {
    popupImage.src = feedImage.src;
    popupImageTitle.textContent = feedTitle.textContent;
    popupImage.alt = feedTitle.textContent;

    closePopup(imagePopup);
  });
}

export { setImagePopupEventListener };
