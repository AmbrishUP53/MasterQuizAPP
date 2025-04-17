let scores = document.querySelector(".score");
let messages = document.querySelector(".message");
let score = scores.firstElementChild.innerText;
score = Number(score)
switch (true) {
  case score === 1:
    messages.innerText = "I suppose one is better than none..";
    break;
  case score >= 2 && score < 5:
    messages.innerText = "Harder than you thought huh?!";
    break;
  case score >= 5 && score < 7:
    messages.innerText = "You can do it better than that!";
    break;
  case score >= 7 && score < 10:
    messages.innerText = "Good Effort!";
    break;
  case score >= 10 && score < 12:
    messages.innerText = "Gre-eight Effort!";
    break;
  case score >= 12 && score <= 14:
    messages.innerText = "Fantastic";
    break;
  case score === 15:
    messages.innerText = "Congratulations!!";
    break;
  default:
    messages.innerText = "Oh dear..";
}
