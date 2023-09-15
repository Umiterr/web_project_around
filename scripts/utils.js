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
    }
  });
}

export { setLikeEventListener };
