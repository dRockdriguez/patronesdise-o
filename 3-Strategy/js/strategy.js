// Es un patrón de comportamiento, nos ayuda a tener diferentes comportamientos y añadir nuevos a un objeto sin modificar
// el contexto inicial
// Ejemplo
class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

const regularStrategy = new RegularSaleStrategy(0.15);
const discountStrategy = new DiscountSaleStrategy(0.15, 1);

const sale = new SaleContext(regularStrategy);
console.log(sale.calculate(100));

sale.setStrategy(discountStrategy);
console.log(sale.calculate(100));

// Otro ejemplo
const data = [
  {
    name: "Erdinger Pikantus",
    country: "Germany",
    info: "blablabla",
    img: "https://cdn1.yopongoelhielo.com/347-thickbox_default/erdinder-pikantus.jpg",
  },
  {
    name: "Corona",
    country: "Mexico",
    info: "blablabla",
    img: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202201/28/00118603600117____8__600x600.jpg",
  },
  {
    name: "Delirium Tremens",
    country: "Belgium",
    info: "blablabla",
    img: "https://www.bodecall.com/images/stories/virtuemart/product/delirium-tremens.png",
  },
];

class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    show() {
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy {
    show(data, element) {
       element.innerHTML = data.reduce((acc, el) => {
            return acc + `
            <div class="beer">
                <h2>${el.name}</h2>
                <p>${el.country}</p>
            </div>
            `
        }, '')
    
    }
}

class ListDetailStrategy {
    show(data, element) {
       element.innerHTML = data.reduce((acc, el) => {
            return acc + `
            <div class="beer">
                <h2>${el.name}</h2>
                <p>${el.country}</p>
                <p>${el.info}</p>
                <img src="${el.img}" />
            </div>
            `
        }, '')
    
    }
}

const strategies = [
     new ListStrategy(),
     new ListDetailStrategy(),
]

const info = new InfoContext(new ListStrategy(), data, document.querySelector("#content"));

document.querySelector("#options").addEventListener("change", (e) => {
    const opt = e.target.value;
    info.setStrategy(strategies[Number(opt)]);
    info.show();

});

info.show();