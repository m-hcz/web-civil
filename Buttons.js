$("#setting").click(() => {});

$("#btn-heading").click(() => {
  // remove all from box2
  $("#kap").empty();

  $(".box2").addClass("box-hidden");
  $(".button").removeClass("btn-active");
  $("#start").removeClass("box-hidden");
});

$("#btn1").click(() => {
  $(".box-start").addClass("box-hidden");

  $(".box2").removeClass("box-hidden");

  $(".button").removeClass("btn-active");
  $("#btn1").addClass("btn-active");

  // remove all from box2
  $("#kap").empty();
  // append new chapter
  $("#kap").append(
    `<img src='/images/k1/k1i1.jpg' alt=''/><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto</p>${copy}`
  );
});

$("#btn2").click(() => {
  $(".box-start").addClass("box-hidden");

  $(".box2").removeClass("box-hidden");

  $(".button").removeClass("btn-active");
  $("#btn2").addClass("btn-active");

  // remove all from box2
  $("#kap").empty();
  // append new chapter
  $("#kap").append(`${heading}${kap2Img}${kap2P}${copy}`);
});
const heading = `<h3>Nastavení výkresu</h3>`;
const kap2Img = `<img class='w40' src='/images/k1/k1i2.jpg' alt=''/>`;
const kap2P = `<p>(název výkresu)_(číslo objektu)_(program).dwg
Si_101_C3D.dwg
Po_101_C3D.dwg</p>`;

const copy = `<p class='copyright'>MH &copy; All Right Reserved</p>`;
