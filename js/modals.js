const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
window.addEventListener("load", () => {
  toggleModal();
});

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function toggleModalUpdate(isWin) {
  let modalContentUpdate = document.querySelector(".modal-content-heading");

  if (isWin) {
    modalContentUpdate.innerHTML = "You won.";
  } else {modalContentUpdate.innerHTML = "You lost. Dont Cry :P";
  }

  toggleModal();
}
