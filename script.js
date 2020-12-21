const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// document.querySelectorAll(".show-modal").addEventlistener("click", function () {
//   modal.classList.remove("hiden");
// });
// const btnOpenModal = document.querySelectorAll(".show-modal");
const btnclosemodal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const showElement = function () {
  modal.classList.remove("hiden");
  overlay.classList.remove("hiden");
};

const closemodal = function () {
  modal.classList.add("hiden");
  overlay.classList.add("hiden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", showElement);
}

btnclosemodal.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", function (e) {
  //   console.log(e);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hiden")) {
      closemodal();
    }
  }
});
