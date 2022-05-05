export default class LapState {
  print(square) {
    if (square.randomColor) {
      square.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    square.setState(square.steps["lapTo"]());
    square.laps++;

    square.notify({
      name: square.name,
      color: square.color,
      laps: square.laps
    })

  }
}
