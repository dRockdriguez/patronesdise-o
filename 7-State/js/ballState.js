class Ball {
  constructor(ctx, canvasWidth, canvasHeight, x, y, size, move, color) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.size = size;
    this.x = x;
    this.y = y;
    this.move = move;

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
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}

class InitialState {
  print(ball) {
    ball.ctx.fillRect(ball.x, ball.y, ball.size, ball.size);

    ball.ctx.fillRect(ball.x, ball.y, ball.size, ball.size);
    ball.ctx.fillStyle = ball.color;
    ball.ctx.fill();
  }
}

class RightState {
  print(ball) {
    ball.draw();

    if (ball.x + ball.size < ball.canvasWidth - ball.size) {
      ball.x += ball.move;
    } else {
      ball.setState(new DownState());
    }
  }
}

class LeftState {
  print(ball) {
    ball.draw();

    if (ball.x - ball.size > 0) {
      ball.x -= ball.move;
    } else {
      ball.setState(new UpState());
    }
  }
}

class UpState {
  print(ball) {
    ball.draw();

    if (ball.y > ball.size) {
      ball.y -= ball.move;
    } else {
      ball.setState(new LapState());
    }
  }
}

class DownState {
  print(ball) {
    ball.draw();

    if (ball.y + ball.size < ball.canvasHeight - ball.size) {
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

const ball = new Ball(ctx, canvas.width, canvas.height, 20, 20, 20, 5, "green");
ball.print();
ball.setState(new RightState());

setInterval(() => {
  ball.print();
}, 0);
