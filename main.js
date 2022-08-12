const links = document.querySelectorAll("a");

links.forEach((el) => {
  el.setAttribute("target", "_blank");
});
