function addClass() {
  document.querySelector(".modal-class").classList.toggle("show-modal");
  document.querySelector(".modal-student").classList.remove("show-modal");
}
function addStudent() {
  document.querySelector(".modal-student").classList.toggle("show-modal");
  document.querySelector(".modal-class").classList.remove("show-modal");
}

export { addClass, addStudent };
