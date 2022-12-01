function addClass() {
  document.querySelector(".modal-class").classList.toggle("show-modal");
  document.querySelector(".modal-student").classList.remove("show-modal");
  document.querySelector(".darken-bg").classList.toggle("darken-bg--visible");
}
function addStudent() {
  document.querySelector(".modal-student").classList.toggle("show-modal");
  document.querySelector(".modal-class").classList.remove("show-modal");
  document.querySelector(".darken-bg").classList.toggle("darken-bg--visible");
}

export { addClass, addStudent };
