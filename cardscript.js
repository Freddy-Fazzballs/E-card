var heart = document.getElementById("heart");
var card = document.getElementById("card");
var hint = document.getElementById("hint");
var stage = document.getElementById("stage");
var again = document.getElementById("again");
var background = document.getElementById("background");

var catLinks = [
  "images/cat1.png",
  "images/cat2.png",
  "images/cat3.png",
  "images/cat4.png"
];

function placeCats() {       // places cats in random spots, except the middle.
  var total = 15;
  for (var i = 0; i < total; i++) {
    var x, y;
    do {
      x = Math.random() * 88;
      y = Math.random() * 85;
    } while (x > 25 && x < 65 && y > 25 && y < 65);

    var img = document.createElement("img");
    img.className = "bg-cat";
    img.src = catLinks[i % catLinks.length];
    img.alt = "";
    img.style.left = x + "%";
    img.style.top = y + "%";
    img.style.width = (90 + Math.random() * 70) + "px";
    img.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";
    img.style.animationDelay = (Math.random() * 4) + "s";
    background.appendChild(img);
  }
}

function throwHearts() {
var symbols = ["💝", "💖", "🫶🏻", "💗", "💜"];    //symbols from picsart. 
  for (var i = 0; i < 26; i++) {
    var h = document.createElement("span");
    h.className = "mini";
    h.textContent = symbols[i % symbols.length];
    var angle = Math.random() * Math.PI * 2;
    var dist = 120 + Math.random() * 180;
    h.style.setProperty("--x", Math.cos(angle) * dist + "px");
    h.style.setProperty("--y", Math.sin(angle) * dist + "px");
    h.style.setProperty("--r", (Math.random() * 120 - 60) + "deg");
    h.style.animationDelay = (Math.random() * 0.2) + "s";
    stage.appendChild(h);
    setTimeout(function (el) { el.remove(); }, 2000, h);
  }
}

heart.addEventListener("click", function () {
  if (heart.classList.contains("split")) return;
  heart.classList.add("split");
  hint.classList.add("hide");
  throwHearts();
  card.classList.add("show");
});

again.addEventListener("click", function () {
  card.classList.remove("show");
  heart.classList.remove("split");
  hint.classList.remove("hide");
});

placeCats();
