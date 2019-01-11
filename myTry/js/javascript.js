var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];




document.querySelector(".img1").setAttribute('src', randomImageSource);


document.querySelector(".img2").setAttribute('src', randomImageSource2);


if (randomImageSource === randomImageSource2) {

  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomImageSource < randomImageSource2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else if (randomImageSource > randomImageSource2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
