
export default class RightState {
  print(square) {
    square.draw();

    if (square.x + square.size < square.xmax) {
      square.x += square.move;
    } else {
      square.setState(square.steps['rightTo']());
    }
  }
}
