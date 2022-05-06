import SquareBuilder from "./modules/Square.js";
import RightState from "./modules/states/RightState.js";
import LeftState from "./modules/states/LeftState.js";
import LapState from "./modules/states/LapState.js";
import DownState from "./modules/states/DownState.js";
import UpState from "./modules/states/UpState.js";
import SquareObserver from "./modules/SquareObserver.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 300;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const clockDirection = {
  initialTo: () => new RightState(),
  downTo: () => new LeftState(),
  leftTo: () => new UpState(),
  upTo: () => new LapState(),
  lapTo: () => new RightState(),
  rightTo: () => new DownState(),
};

const inverseClockDirection = {
  initialTo: () => new UpState(),
  downTo: () => new RightState(),
  leftTo: () => new DownState(),
  upTo: () => new LeftState(),
  lapTo: () => new UpState(),
  rightTo: () => new LapState(),
};

const squareBuilder = new SquareBuilder();
const square1 = squareBuilder
  .setCtx(ctx)
  .setXmin(0)
  .setXmax(canvas.width)
  .setYmin(0)
  .setYmax(canvas.height)
  .setX(0)
  .setY(0)
  .setSize(30)
  .setMove(15)
  .setColor("green")
  .setRandomColor(true)
  .setName("square1")
  .setSteps(clockDirection)
  .build();

const square2 = squareBuilder
  .setCtx(ctx)
  .setXmin(30)
  .setXmax(canvas.width - 30)
  .setYmin(30)
  .setYmax(canvas.height - 30)
  .setX(canvas.width - 60)
  .setY(canvas.height - 60)
  .setSize(30)
  .setMove(15)
  .setColor("blue")
  .setRandomColor(true)
  .setName("square2")
  .setSteps(inverseClockDirection)
  .build();

const square3 = squareBuilder
  .setCtx(ctx)
  .setXmin(60)
  .setXmax(canvas.width - 60)
  .setYmin(60)
  .setYmax(canvas.height - 60)
  .setX(60)
  .setY(60)
  .setSize(30)
  .setMove(15)
  .setColor("red")
  .setRandomColor(true)
  .setName("square3")
  .setSteps(clockDirection)
  .build();

const square4 = squareBuilder
  .setCtx(ctx)
  .setXmin(90)
  .setXmax(canvas.width - 90)
  .setYmin(90)
  .setYmax(canvas.height - 90)
  .setX(canvas.width - 120)
  .setY(canvas.height - 120)
  .setSize(30)
  .setMove(15)
  .setColor("yellow")
  .setRandomColor(true)
  .setName("square4")
  .setSteps(inverseClockDirection)
  .build();

const functionLapToObserver = ({ name, color, laps }) => {
  let div = document.querySelector(`#${name}`);
  if (!div) {
    div = document.createElement("div");
    div.id = name;

    document.querySelector("#content").appendChild(div);
  }
  div.innerHTML = `<div>El cuadrado ${name} lleva ${laps} vueltas</div>`;
  div.style.backgroundColor = color;
};

const observer = new SquareObserver(functionLapToObserver);

square1.subscribe(observer);
square2.subscribe(observer);
square3.subscribe(observer);
square4.subscribe(observer);

const squares = [square1, square2, square3, square4];
const interval = setInterval(() => {
  squares.forEach((s) => s.print());
}, 10);

const functionClear = ({ name, laps }) => {
  if (laps > 100) {
    alert(`El cuadrado ${name} ya ha llegado a 100 vueltas. Se acabó`);
    clearInterval(interval);
  }
};

const clearObserver = new SquareObserver(functionClear);
square1.subscribe(clearObserver);
square2.subscribe(clearObserver);
square3.subscribe(clearObserver);
square4.subscribe(clearObserver);
