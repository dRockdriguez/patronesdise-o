class Editor {
  constructor(implementor) {
    this.implementor = implementor;
  }

  print(width, height, color) {
    this.implementor.setWidth(width);
    this.implementor.setHeight(height);
    this.implementor.setColor(color);
    this.implementor.print();
  }
}

class EditorClear extends Editor {
  constructor(implementor) {
    super(implementor);
  }

  clear() {
    this.implementor.setWidth(0);
    this.implementor.setHeight(0);
    this.implementor.print();
  }
}

class HTMLPainter {
  constructor(container) {
    this.container = container;
    this.width = "1px";
    this.height = "1px";
    this.color = "#FFFFFF";
  }

  setWidth(width) {
    this.width = width + "px";
  }

  setHeight(height) {
    this.height = height + "px";
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.container.innerHTML = `<div style="width:${this.width}; height:${this.height}; background-color: ${this.color};"></div>`;
  }
}

class CanvasPainter {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 1;
    this.height = 1;
    this.color = "#FFFFFF";
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}

const editor = new EditorClear(
  new HTMLPainter(document.querySelector("#content"))
);

const editor2 = new EditorClear(
  new CanvasPainter(document.querySelector("#canvas"))
);

document.querySelector("#range").addEventListener("input", ({ target }) => {
  const width = target.value;
  const height = target.value;
  const color = document.querySelector("#colorEditor").value;

  editor.print(width, height, color);
  editor2.print(width, height, color);
});

document
  .querySelector("#colorEditor")
  .addEventListener("input", ({ target }) => {
    const width = document.querySelector("#range").value;
    const height = document.querySelector("#range").value;
    const color = target.value;

    editor.print(width, height, color);
    editor2.print(width, height, color);
  });

document.querySelector("#clearBtn").addEventListener("click", () => {
  editor.clear();
  editor2.clear();
});
