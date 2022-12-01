function addClass() {
  document.querySelector(".form-section").classList.toggle("form1");
  document.querySelector(".form-section-2").classList.remove("form2");
}
function addStudent() {
  document.querySelector(".form-section-2").classList.toggle("form2");
  document.querySelector(".form-section").classList.remove("form1");
}

export { addClass, addStudent };
