document.addEventListener("keypress", function (event) {
  handleClick(event.key);

  buttonAnimation(event.key);
});

for (i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonElem = this.innerHTML;
    handleClick(buttonElem);
    buttonAnimation(buttonElem);
  });
}

const handleClick = function (key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      break;
  }
};

// const numberOfButtons = document.querySelectorAll("button").length;
// console.log(numberOfButtons);

// for (i = 0; i < numberOfButtons; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", handleClick);
//   console.log(document.querySelectorAll("button")[i]);
// }

function buttonAnimation(key) { 
  var currentElem = document.querySelector("." + key);
  currentElem.classList.add("pressed");
  setTimeout(() => {
    currentElem.classList.remove("pressed");
  }, 0);
}
