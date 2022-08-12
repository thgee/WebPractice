let dan;

while (true) {
  dan = prompt("몇 단?");
  if (dan == 0 && !Number(dan)) {
    continue;
  }
  break;
}
document.write(`<h2>${dan}단</h2>`);
for (let i = 1; i <= 9; i++) {
  document.write(`${dan} * ${i} : ${dan * i}<br />`);
}
