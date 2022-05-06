export default class SquareObserver {
  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}
