let radio = document.getElementsByName("character");
let img = document.querySelector("#img");

function drawImage() {
  radio.forEach((el) => {
    if (el.checked === true) {
      img.src = `../images/${el.value}.png`;
    }
  });
}

drawImage();

radio.forEach((el) => {
  el.addEventListener("change", drawImage);
});
