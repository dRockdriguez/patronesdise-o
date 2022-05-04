class DocumentContext {
    constructor() {
        this.content = "";
        this.setState(new BlankState());
    }

    setState(state) {
        this.state = state;
    }

    write(text) {
        this.state.write(this, text);
    }
}

class BlankState {
    write(context, text) {
        context.content = text;
        context.setState(new EditContent());
    }
}

class EditContent {
    write(context, text) {
        context.content +=  " " + text;
    }
}

class ApproveContent {
    write(context, text) {
        console.error("El contenido no se puede modificar, ya está aprobado")
    }
}

const doc = new DocumentContext();

doc.write("Hola");
console.log(doc.content);
doc.write("que tal");
console.log(doc.content);
doc.write("como estás");
console.log(doc.content);
doc.setState(new ApproveContent());
doc.write("amigo");
console.log(doc.content);
doc.setState(new EditContent());
doc.write("amigo");
console.log(doc.content);