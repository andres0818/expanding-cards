function onClick(id) {
  const active = document.querySelector(".card.active");
  active.classList.remove("active");
  const newFocus = document.getElementById(id);
  newFocus.classList.add("active");
}
