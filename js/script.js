// WPIL'KA ^__^
let heart = document.getElementById('heart');
heart.addEventListener('click', function () {
  document.getElementById('soundClick').play();
});

let changeHeartPosition = function () {
  let randomX = Math.floor(Math.random() * document.documentElement.clientWidth);
  let randomY = Math.floor(Math.random() * document.documentElement.clientHeight);
  $("#heart").offset({ left: randomX, top: randomY });
};
let score = 0;
let speed = 2000;
let heartJump;
let yourLvl = 0;

$("#heart").click(function (e) {
  score++;
  $(".score__number").text(score);
});

let nextLevel = function () {
  $("#score, #heart, #level").addClass("d-none");
  $(".curtain-wrap").addClass("curtain");
  $(".title__text").text("Congratulations! You go to the next level!");
  $(".btn-start-play").text("Next level!");
  $(".title").slideDown(400);
  document.getElementById('soundNextLvl').play();
};

$("#heart").click(function (e) {
  if (score === 10) {
    endHeartJump();
    yourLvl++
    speed = 1700;
    $("body").css("background", "url(" + "img/bkg-2.jpg" + ") top/cover");
    return nextLevel();
  }
  if (score === 20) {
    endHeartJump();
    yourLvl++
    speed = 1400;
    $("body").css("background", "url(" + "../img/bkg-3.jpg" + ") top/cover");
    return nextLevel();
  }
  if (score === 30) {
    endHeartJump();
    yourLvl++
    speed = 1100;
    $("body").css("background", "url(" + "../img/bkg-4.jpg" + ") top/cover");
    return nextLevel();
  }
  if (score === 40) {
    endHeartJump();
    yourLvl++
    speed = 800;
    return nextLevel();
  }
  if (score === 50) {
    endHeartJump();
    yourLvl++
    speed = 500;
    return nextLevel();
  }
});

function startHeartJump() {
  heartJump = setInterval(changeHeartPosition, speed);
};
function endHeartJump() {
  clearInterval(heartJump);
}

// Button start PLAY
$(".btn-start-play").click(function (e) {
  $(".level__number").text(yourLvl);
  $(".title").slideUp(300);
  $(".curtain-wrap").removeClass("curtain");
  $("#score, #heart, #level").removeClass("d-none");
  changeHeartPosition();
  startHeartJump();
  // fix position of score number
  if (score > 9) {
    $(".score__number").css("left", "21px");
  }
});


