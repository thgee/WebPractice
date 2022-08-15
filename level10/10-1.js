const site = document.querySelector("#site");
let url;

function openNewTab() {
  url = `http://www.${site.value}.com`;
  open(url, "name(newTab)");
}

site.addEventListener("change", openNewTab);
