let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.onclick = () => {
    console.log(i + 1);
  };
}

const a = 6;
