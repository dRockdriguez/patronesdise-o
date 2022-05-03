class Form {
  constructor(controls) {
    this.controls = controls;
  }

  getContent() {
    return `
        <form>
            ${this.controls.reduce((acc, it) => {
              return (
                acc + `<div>${this.getLabel(it)}${this.getInput(it)}</div>`
              );
            }, "")}
        </form>
    `;
  }

  getLabel(control) {
    return `
        <label for="${control.name}">${control.text}</label>
      `;
  }

  getInput(control) {
    if (control.type === "select") {
      return `
            <select name="${control.name}" id="${control.name}">
            ${control.options.reduce((acc, it) => {
              return acc + `<option value="${it.value}">${it.text}</option>`;
            }, "")}
            </select>
        `;
    }

    if (control.type === "color") {
      return `
        <input style="padding:0!important" type="${control.type}" name="${control.name}" id="${control.name}"/>
        `;
    }

    return `
        <input type="${control.type}" name="${control.name}" id="${control.name}"/>
    `;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.controls = [];
  }

  setText(name, text) {
    this.controls.push({ name, text, type: "text" });
    return this;
  }

  setSelect(name, text, options) {
    this.controls.push({ name, text, type: "select", options });
    return this;
  }

  setColor(name, text) {
    this.controls.push({ name, text, type: "color" });
    return this;
  }

  build() {
    const form = new Form(this.controls);

    this.reset();

    return form;
  }
}

const frmBuilder = new FormBuilder();
const formPeople = frmBuilder
  .setText("name", "Nombre")
  .setText("lastName", "Apellidos")
  .setSelect("city", "Ciudad", [
    { value: "M", text: "Madrid" },
    { value: "T", text: "Toledo" },
  ])
  .setColor("color", "Color favorito")
  .build();

document.querySelector("#form1").innerHTML = formPeople.getContent();


const formPets = frmBuilder
  .setText("name", "Nombre")
  .setSelect("animal", "Animal", [
    { value: "C", text: "Gato" },
    { value: "P", text: "Perro" },
  ])
  .setColor("color", "Color")
  .build();

document.querySelector("#form2").innerHTML = formPets.getContent();
