const closeEscapePopupImage = (event) => {
  if (
    event.key === "Escape" &&
    imagePopup.classList.contains("image-popup_on")
  ) {
    closePopup(imagePopup);
  }
};

export function closePopup(popup) {
  popup.classList.toggle("image-popup_on");
  if (popup.classList.contains("image-popup_on")) {
    document.addEventListener("keydown", closeEscapePopupImage);
  } else {
    document.removeEventListener("keydown", closeEscapePopupImage);
  }
}

export function setImagePopupEventListener(button) {
  const feedImage = button.querySelector(".feed__image");
  const feedTitle = button.closest(".feed__post").querySelector(".feed__title");

  button.addEventListener("click", function () {
    popupImage.src = feedImage.src;
    popupImageTitle.textContent = feedTitle.textContent;
    popupImage.alt = feedTitle.textContent;

    closePopup(imagePopup);
  });
}
