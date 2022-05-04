class Ball {
  constructor(ctx, xmin, xmax, ymin, ymax, x, y, size, move, color, name) {
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
    this.state = new InitialState();
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
}

class InitialState {
  print(ball) {
    ball.draw();
  }
}

class RightState {
  print(ball) {
    ball.draw();

    if (ball.x + ball.size < ball.xmax) {
      ball.x += ball.move;
    } else {
      ball.setState(new DownState());
    }
  }
}

class LeftState {
  print(ball) {
    ball.draw();

    if (ball.x > ball.xmin) {
      ball.x -= ball.move;
    } else {
      ball.setState(new UpState());
    }
  }
}

class UpState {
  print(ball) {
    ball.draw();

    if (ball.y > ball.ymin) {
      ball.y -= ball.move;
    } else {
      ball.setState(new LapState());
    }
  }
}

class DownState {
  print(ball) {
    ball.draw();

    if (ball.y + ball.size < ball.xmax) {
      ball.y += ball.move;
    } else {
      ball.setState(new LeftState());
    }
  }
}

class LapState {
  print(ball) {
    ball.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ball.setState(new RightState());
  }
}

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const ball = new Ball(
  ctx,
  0,
  canvas.width,
  0,
  canvas.height,
  0,
  0,
  20,
  20,
  "green",
  "ball"
);
ball.print();
ball.setState(new RightState());

const ball1 = new Ball(
  ctx,
  40,
  canvas.width - 40,
  40,
  canvas.height - 40,
  40,
  40,
  20,
  20,
  "blue",
  "ball1"
);
ball1.print();
ball1.setState(new RightState());

const ball2 = new Ball(
  ctx,
  80,
  canvas.width - 80,
  80,
  canvas.height - 80,
  80,
  80,
  20,
  20,
  "red",
  "ball2"
);
ball2.print();
ball2.setState(new RightState());

const ball3 = new Ball(
  ctx,
  120,
  canvas.width - 120,
  120,
  canvas.height - 120,
  120,
  120,
  20,
  20,
  "yellow",
  "ball3"
);
ball3.print();
ball3.setState(new RightState());

const ball4 = new Ball(
  ctx,
  20,
  canvas.width - 20,
  20,
  canvas.height - 20,
  20,
  20,
  20,
  20,
  "pink",
  "ball4"
);
ball4.print();
ball4.setState(new RightState());

const ball5 = new Ball(
  ctx,
  60,
  canvas.width - 60,
  60,
  canvas.height - 60,
  60,
  60,
  20,
  20,
  "gray",
  "ball5"
);
ball5.print();
ball5.setState(new RightState());

const ball6 = new Ball(
  ctx,
  100,
  canvas.width - 100,
  100,
  canvas.height - 100,
  100,
  100,
  20,
  20,
  "tomato",
  "ball6"
);
ball6.print();
ball6.setState(new RightState());

const ball7 = new Ball(
  ctx,
  140,
  canvas.width - 140,
  140,
  canvas.height - 140,
  140,
  140,
  20,
  20,
  "purple",
  "ball7"
);
ball7.print();
ball7.setState(new RightState());

setInterval(() => {
  ball.print();
  ball1.print();
  ball2.print();
  ball3.print();
  ball4.print();
  ball5.print();
  ball6.print();
  ball7.print();
}, 10);
