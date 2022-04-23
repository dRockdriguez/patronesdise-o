// Component
class ClientComponent { 
    constructor(url){
        this.url = url;
    }

    async getData() {
        const res = await fetch(this.url);
        const data = await res.json();

        return data;
    }
}

// Decorator
class ClientDecorator {
    constructor(component) {
        this.component = component;
    }

    async getData() {
       return await this.component.getData();
    }
}

// Decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
    async getData(){
        const data = await super.getData();
        const mapped = data.map((it) => {
            return {
                ...it,
                title: it.title.toUpperCase()
            }
        });
        return mapped;
    }
}

// Decorator 2
class HTMLClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const mapped = data.map((it) => {
            return {
                ...it,
                title: `<h1>${it.title}</h1>`,
                thumbnail: `<img src="${it.thumbnailUrl}" />`
            }
        });
        return mapped;
    }
}

(async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const client = new ClientComponent(url);

    const upperTitle = new UpperCaseClientDecorator(client);

    const html = new HTMLClientDecorator(upperTitle);
    
    const data = await html.getData();
    document.querySelector("#divContent1").innerHTML = data.reduce((acc, i) => {
        return acc + i.title + i.thumbnail;
    }, "");

    const html1 = new HTMLClientDecorator(client);
    const data1 = await html1.getData();
    document.querySelector("#divContent2").innerHTML = data1.reduce((acc, i) => {
        return acc + i.title + i.thumbnail;
    }, "");

})();