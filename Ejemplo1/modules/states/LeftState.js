export default class LeftState {
  print(square) {
    square.draw();

    if (square.x > square.xmin) {
      square.x -= square.move;
    } else {
      square.setState(square.steps['leftTo']());
    }
  }
}
