
export default class UpState {
  print(square) {
    square.draw();

    if (square.y > square.ymin) {
      square.y -= square.move;
    } else {
      square.setState(square.steps['upTo']());
    }
  }
}
