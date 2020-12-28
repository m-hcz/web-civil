// doculent load
$(document).ready(() => {
  getVariable();
  editMenu();
});
$(window).resize(() => {
  getVariable();
  editMenu();
});

// window resize
function getVariable() {
  // let x = window.innerWidth / 80;

  const divMenuContainer = document.querySelector("#menu-container");
  x = divMenuContainer.getBoundingClientRect().width / 20;
  // console.log(divMenuContainer.getBoundingClientRect().width / 20);

  if (x > 45 || x < 12) {
    if (x > 45) x = 45;
    else x = 12;
  }

  // const newAngle = (-1 / x) * 500 + "deg";
  const newAngle = -x + "deg";
  // console.log(newAngle);
  $(":root").css("--navbar-angle", newAngle);

  let size = window.innerWidth / 200;
  size = Math.min(8, size) + "rem";

  $(":root").css("--icon-size", size);
  // document.documentElement.style.setProperty("--icon-size", size + "rem");
}

$(window).mousemove((event) => {
  const icons = document.querySelectorAll(".rotate-arrow");

  icons.forEach((icon) => {
    const position = icon.getBoundingClientRect();
    const angle = Math.atan2(
      event.clientY - position.y - position.height / 2,
      event.clientX - position.x - position.width / 2
    );
    const finalAngle = angle * (180 / Math.PI) + 90 + "deg";

    icon.style.transform = "rotate(" + finalAngle + ")";
    // $(":root").css("--icon-angle", finalAngle);
    // document.documentElement.style.setProperty("--icon-angle", finalAngle);
  });
});

$("#theme").click(() => {
  const col1 = "#f4f4f2";
  const col2 = "#495464";

  const col3 = "#bbbfca";
  const col4 = "#394867";

  if ($(":root").css("--bcolor-grad-1").trim() === col1)
    $(":root").css("--bcolor-grad-1", col2);
  else if ($(":root").css("--bcolor-grad-1").trim() === col2)
    $(":root").css("--bcolor-grad-1", col1);

  if ($(":root").css("--bcolor-grad-2").trim() === col3)
    $(":root").css("--bcolor-grad-2", col4);
  else if ($(":root").css("--bcolor-grad-2").trim() === col4)
    $(":root").css("--bcolor-grad-2", col3);

  const dark1 = "#30475e";
  const dark2 = "#e8e8e8";

  if ($(":root").css("--main-dark-color").trim() === dark1)
    $(":root").css("--main-dark-color", dark2);
  else if ($(":root").css("--main-dark-color").trim() === dark2)
    $(":root").css("--main-dark-color", dark1);
});

$("#plus").click(() => {
  const var1 = "--icon-size";

  const iconSize = $(":root").css(`${var1}`).split("r");
  console.log(iconSize);
  const iconSizeFloat = Math.min(8, parseFloat(iconSize[0]));

  if (iconSizeFloat < 8) $(":root").css(`${var1}`, iconSizeFloat + 0.5 + "rem");

  const var2 = "--para-font-size";
  const paraSize = $(":root").css(`${var2}`).split("r");
  console.log(iconSize);
  const paraSizeFloat = Math.min(2, parseFloat(paraSize[0]));

  if (paraSizeFloat < 2) $(":root").css(`${var2}`, paraSizeFloat + 0.1 + "rem");
});

$("#minus").click(() => {
  const var1 = "--icon-size";

  const iconSize = $(":root").css(`${var1}`).split("r");
  console.log(iconSize);
  const iconSizeFloat = Math.max(2, parseFloat(iconSize[0]));

  if (iconSizeFloat > 2) $(":root").css(`${var1}`, iconSizeFloat - 0.5 + "rem");

  const var2 = "--para-font-size";
  const paraSize = $(":root").css(`${var2}`).split("r");
  console.log(iconSize);
  const paraSizeFloat = Math.max(1, parseFloat(paraSize[0]));

  if (paraSizeFloat > 1) $(":root").css(`${var2}`, paraSizeFloat - 0.1 + "rem");
});

function editMenu() {
  // menu-container
  const divMenuContainer = document.querySelector("#menu-container");
  const divMenuContainerWidth = divMenuContainer.getBoundingClientRect().width;

  const ulMenu = document.querySelector("#menu");
  const ulMenuWidth = ulMenu.getBoundingClientRect().width;

  const scale = Math.min(1, divMenuContainerWidth / ulMenuWidth - 0.1);
  divMenuContainer.style.transform = "scale(" + scale + ")";
}
