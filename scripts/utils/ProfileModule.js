// Name/About
const profileNameForm = document.querySelector(".form-profile__name");
const profileAboutForm = document.querySelector(".form-profile__about");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__about");
const profileSaveButton = document.querySelector(".form-profile__save");
const profileInput = document.querySelector(".form-profile__inputs");

export function toggleProfile(form) {
  form.classList.toggle("form-profile_on");
}

export function refreshProfile() {
  profileNameForm.value = profileName.textContent;
  profileAboutForm.value = profileAbout.textContent;
}
