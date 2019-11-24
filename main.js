class Item {
    name;
    cost;
    cals;
    attributes;
    filename;
    
    constructor(name, cost, cals, attributes){
        this.name = name;
        this.cost = cost;
        this.cals = cals;
        this.attributes = attributes;
    }
}

class Cart {
    subtotal = 0.00;
    tax = 0.00;
    total = 0.00;
    items = [];
    constructor(){
        
    }

    add(item) {
        this.items.push(item);
        this.subtotal += item.cost;
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
        this.tax = this.subtotal * 0.12;
        this.total = this.subtotal + this.tax;
    }

}

class CartItem {
    item;
    quantity;
    cost;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * quantity;
    }

    changeQuantity(num) {
        quantity += num;
    }

}

let burgers = [];
let cart = new Cart();
cart.add(new CartItem(burgers[0], 2));


function initializeItems() {
    for(i = 0; i < 5; i++){
        burgers.push(new Item('Burger 1', 5.00, 500, ['Vegan', 'Bad']));
    }
}



$('#burgers-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#burgers').removeClass('hidden');
});

$('#chicken-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#chicken').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#fish').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.menu').addClass('hidden');
    $('#icecream').removeClass('hidden');
});
