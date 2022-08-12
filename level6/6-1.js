const text = document.querySelector(".text");

while (true) {
  let day = prompt("월화수목금토일 중에서 입력하세요");
  let check = 1;
  switch (day) {
    case "월":
    case "화":
    case "수":
    case "목":
    case "금":
      text.textContent = `${day}요일은 정상출근 입니다.`;
      break;
    case "토":
    case "일":
      text.textContent = `${day}요일은 쉬세요.`;
      break;
    case null:
      alert("왜 입력 안하세요?");
      check = -1;

      break;
    default:
      alert("잘못 입력하셨습니다!");
      check = -1;
  }
  if (check != -1) break;
}
