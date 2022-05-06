
export default class DownState {
  print(square) {
    square.draw();

    if (square.y + square.size < square.ymax) {
      square.y += square.move;
    } else {
      square.setState(square.steps['downTo']());
    }
  }
}
