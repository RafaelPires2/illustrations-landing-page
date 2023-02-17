const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
const cardThree = document.querySelector(".card-three");

function changeCardOne() {
  cardOne.style.width = "50%";
  document.documentElement.style.setProperty("--default-color", "#FFD280");

  cardTwo.style.width = "25%";
  cardThree.style.width = "25%";
}

function changeCardTwo() {
  cardTwo.style.width = "50%";
  document.documentElement.style.setProperty("--default-color", "#9BA0FC");

  cardOne.style.width = "25%";
  cardThree.style.width = "25%";
}

function changeCardThree() {
  cardThree.style.width = "50%";
  document.documentElement.style.setProperty("--default-color", "#8FC7FF");

  cardTwo.style.width = "25%";
  cardOne.style.width = "25%";
}
