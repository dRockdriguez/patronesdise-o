class ItemsSubject extends Subject {
    constructor() {
        super();

        this.data = [];
    }

    add(item) {
        this.data.push(item);
        this.notify(this.data);
    }
}

class HTMLElementObserver {
    constructor(element) {
        this.element = element
    }

    refresh(data) {
        this.element.innerHTML = data.reduce((acc, item) => {
            return acc + `
            <p>
                ${item}
            </p>
            `;
        }, "");
    }
}

const items = new ItemsSubject();
const htmlObserver = new HTMLElementObserver(document.querySelector("#o1"));
const ob1 = new Observer((d) =>  {
    document.querySelector("#o2").innerHTML = d.reduce((acc, el) =>  {
        return acc + `
            <p>
                ${el.toUpperCase()}
            </p>
            `;
    }, "");
});
const ob2 = new Observer((d) => {
    document.querySelector("#o3").innerHTML = d.reduce((acc, el) =>  {
        return acc + `
        <p>
            ${el.toLowerCase()}
        </p>
        `;
    }, ""); 
});

items.subscribe(htmlObserver);
items.subscribe(ob1);
items.subscribe(ob2);

function add () {
    const name = document.querySelector("#name").value;
    items.add(name);
    document.querySelector("#name").value = "";
}
