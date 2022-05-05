export default class InitialState {
  print(square) {
    square.draw();

    square.setState(square.steps['initialTo']());
  }
}
