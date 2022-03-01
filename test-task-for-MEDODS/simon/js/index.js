let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");
const btns=document.querySelectorAll(".btn");
const aud=document.querySelectorAll(".audio");
const circle=document.querySelector("#outer-circle");

strictButton.addEventListener('click', (event) => {
  if (strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});

onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "-";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

startButton.addEventListener('click', (event) => {
  if (on || win) {
    play();
  }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
    console.log(order);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) {playmusic(1),topLeft.classList.add('flash')};
      if (order[flash] == 2) {playmusic(2),topRight.classList.add('flash')};
      if (order[flash] == 3) {playmusic(3),bottomLeft.classList.add('flash')};
      if (order[flash] == 4) {playmusic(4),bottomRight.classList.add('flash')};
      flash++;
    }, 200);
  }
}

function clearColor() {
  btns.forEach((el)=>el.classList.remove('flash'));

}

function flashColor() {
 
  btns.forEach((el)=>el.classList.add('flash'));

}


function playmusic(id){
  if (noise) {
    let audio = document.getElementById("clip4");
      audio.play();
    }
   
  
  noise = true;
 
  
}





btns.forEach((el=>el.addEventListener("click", (event)=>{

    if (on) {
     let id=el.dataset.id;
      playerOrder.push(id);
      console.log(playerOrder);
      check();
playmusic();
el.classList.add('flash');
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
  
 }
})
))





function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 3 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "NO!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}


