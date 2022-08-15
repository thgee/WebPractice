let texts = [
  "웹 문서의 뼈대 작성",
  "웹 문서를 꾸미는 역할",
  "사용자 동작에 반응",
];
let textbox;

function init() {
  textbox = document.querySelector("#textbox");
  let liarr = document.querySelectorAll("ul li");
  for (let i = 0; i < liarr.length; i++) {
    liarr[i].onmouseover = over;
    liarr[i].onmouseout = hide;
  }
}

function hide() {
  textbox.style.visibility = "hidden";
}

function over(e) {
  let n = 0;
  switch (e.target.id) {
    case "0":
      n = 0;
      break;
    case "1":
      n = 1;
      break;
    case "2":
      n = 2;
      break;
  }
  setTextBox(texts[n], e);
}

function setTextBox(text, e) {
  textbox.style.visibility = "visible";
  textbox.textContent = text;
  textbox.style.border = "1px solid green";
  textbox.style.backgroundColor = "aliceblue";
  textbox.style.position = "absolute";
  textbox.style.left = `${e.x}px`;
  textbox.style.top = `${e.y}px`;
  textbox.style.width = "150px";
  textbox.style.height = "100px";
}

init();
