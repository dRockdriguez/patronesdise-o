import InitialState from "./states/InitialState.js";

class Square {
  constructor(
    ctx,
    xmin,
    xmax,
    ymin,
    ymax,
    x,
    y,
    size,
    move,
    color,
    randomColor,
    name,
    steps
  ) {
    this.ctx = ctx;
    this.xmin = xmin;
    this.xmax = xmax;
    this.ymin = ymin;
    this.ymax = ymax;
    this.size = size;
    this.x = x;
    this.y = y;
    this.move = move;
    this.name = name;
    this.color = color;
    this.randomColor = randomColor;
    this.steps = steps;
    this.state = new InitialState();
    this.observers = [];
    this.laps = 0;
  }

  setState(state) {
    this.state = state;
  }

  print() {
    this.state.print(this);
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify(data) {
    this.observers.forEach((o) => o.refresh(data));
  }
}

export default class SquareBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.ctx = null;
    this.xmin = 0;
    this.xmax = 0;
    this.ymin = 0;
    this.ymax = 0;
    this.size = 0;
    this.x = 0;
    this.y = 0;
    this.move = 0;
    this.name = "";
    this.color = "";
    this.randomColor = false;
    this.steps = {};
    this.state = new InitialState();
    this.laps = 0;
  }

  setCtx(ctx) {
    this.ctx = ctx;
    return this;
  }

  setXmin(xmin) {
    this.xmin = xmin;
    return this;
  }

  setXmax(xmax) {
    this.xmax = xmax;
    return this;
  }

  setYmin(ymin) {
    this.ymin = ymin;
    return this;
  }

  setYmax(ymax) {
    this.ymax = ymax;
    return this;
  }

  setSize(size) {
    this.size = size;
    return this;
  }

  setX(x) {
    this.x = x;
    return this;
  }

  setY(y) {
    this.y = y;
    return this;
  }

  setMove(move) {
    this.move = move;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setRandomColor(randomColor) {
    this.randomColor = randomColor;
    return this;
  }

  setState(state) {
    this.state = state;
    return this;
  }

  setSteps(steps) {
    this.steps = steps;
    return this;
  }

  build() {
    const square = new Square(
      this.ctx,
      this.xmin,
      this.xmax,
      this.ymin,
      this.ymax,
      this.x,
      this.y,
      this.size,
      this.move,
      this.color,
      this.randomColor,
      this.name,
      this.steps
    );

    this.reset();

    return square;
  }
}
