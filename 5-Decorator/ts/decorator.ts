interface Component {
    getDetail(): string;
}

class ProductComponent implements Component {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getDetail(): string {
        return `${this.name}`;
    }
}

abstract class ProductDecorator  implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public getDetail(): string {
        return `${this.component.getDetail()}`;
    }

}

class CommercialInfoProductDecorator extends ProductDecorator {
    private brand: string;

    constructor(component: Component, brand: string) {
        super(component);   
        this.brand = brand;
    }

    public getDetail(): string {
        return `Nombre: ${super.getDetail()} Marca: ${this.brand}`;
    }
}

class StoreProductDecorator extends ProductDecorator {
    private price: number;
    private currency: string;

    constructor(component: Component, price: number, currency: string) {
        super(component);   
        this.price = price;
        this.currency = currency
    }

    public getDetail(): string {
        return `${super.getDetail()} Precio: ${this.price} ${this.currency}`;
    }
}

class HTMLProductDecorator extends ProductDecorator {
    public getDetail(): string {
        return `
        <h1>Información del producto</h1>
        <hr />
        <p>${super.getDetail()}</p>
        `;
    }
}

const component = new ProductComponent('producto'); 
console.log(component.getDetail());

const comercialInfo = new CommercialInfoProductDecorator(component, 'brand');
console.log(comercialInfo.getDetail())

const storeProduct = new StoreProductDecorator(component, 123.2, '€');
console.log(storeProduct.getDetail())

const storeProductWithComercialInfo = new StoreProductDecorator(comercialInfo, 123.2, '€');
console.log(storeProductWithComercialInfo.getDetail())


const htmlProduct = new HTMLProductDecorator(storeProductWithComercialInfo);
console.log(htmlProduct.getDetail())
