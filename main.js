const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
const cardThree = document.querySelector(".card-three");

function changeCardOne() {
  cardOne.style.width = "388px";
  document.documentElement.style.setProperty("--default-color", "#FFD280");

  cardTwo.style.width = "183px";
  cardThree.style.width = "183px";
}

function changeCardTwo() {
  cardTwo.style.width = "388px";
  document.documentElement.style.setProperty("--default-color", "#9BA0FC");

  cardOne.style.width = "183px";
  cardThree.style.width = "183px";
}

function changeCardThree() {
  cardThree.style.width = "388px";
  document.documentElement.style.setProperty("--default-color", "#8FC7FF");

  cardTwo.style.width = "183px";
  cardOne.style.width = "183px";
}
