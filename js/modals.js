const modal = document.querySelector(".modal");
//const trigger = document.querySelector(".trigger");
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

//trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function toggleModalUpdate(isWin) {
  let modalContentUpdate = document.querySelector(".modal-content-heading");
  console.log("am here in");
  if (isWin) {
    modalContentUpdate.innerHTML = "You won";
    console.log(modalContentUpdate.innerHTML + ".....isWin html text update");
  } else modalContentUpdate.innerHTML = "You lost";
  console.log("am here in lostspan");
  toggleModal();
}
