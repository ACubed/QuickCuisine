
function addCartItem(cartItem) {
    let name = cartItem.getImagePath();
    
    var quantity = parseInt(cartItem.getQuantity());

    var c = getCookie(name);
    if (c !== null) {
        var array = c.split(',');
        quantity += parseInt(array[1]);
    }
    var cost = cartItem.getCost();
    var cals = cartItem.getCals();
    var itemTitle = cartItem.getName();
    var cString = name + "=" + itemTitle + "," + quantity + "," + cost + "," + cals + ";";
    document.cookie = cString;
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

class CartItem {
    item;
    quantity;
    cost;
    cals;
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.cost = item.cost * this.quantity
        this.cals = item.cals * this.quantity;;
    }

    changeQuantity(num) {
        this.quantity += num;
        this.cost = item.cost * this.quantity
        this.cals = item.cals * this.quantity;;
    }

    getQuantity(){
        return this.quantity;
    }

    getCost() {
        return this.cost;
    }

    getName() {
        return this.item.name;
    }

    getCals() {
        return this.cals;
    }
    getImagePath() {
        return this.item.imagePath;
    }
}

function Item(name,imagePath, cost, cal) {
    this.name = name;
    this.cost = cost;
    this.cals = cal;
    this.imagePath = imagePath;
}

// burg 

let Burger1 = new Item("Mr. Classic","burger_classic" ,8.99, 800);
let Burger2 = new Item("Triple Threat", "burger_triple_threat", 9.99, 860);
let Burger3 = new Item("Full Stack","burger_full_stack", 9.49, 900);
let Burger4 = new Item("The Burgler", "burger_burgler",14.99, 1106);
let Burger5 = new Item("Whoppersnapper","burger_whoppersnapper", 7.49, 820);
let Burger6 = new Item("Chicken Paradise","burger_chicken_paradise", 7.79, 675);
let Burger7 = new Item("Macho Onion BBQ","burger_", 8.79, 950);
let Burger8 = new Item("The Honey Mustard", "burger_full_stack",6.99, 640);

// soups

// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);

// pizza

// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);

// fish

// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);

// desserts

// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);
// let BigBurger = new Item("Big Burger", 5.99, 600);

// cart

// let cart = new Cart();

//events

// burgers
$('#add-burger1').on('click', function () {
    addCartItem(new CartItem(Burger1, 1))
    // cart.add(new CartItem(Burger1, 1))
    console.log(document.cookie);
});
$('#add-burger2').on('click', function () {
    addCartItem(new CartItem(Burger2, 1))
    // cart.add(new CartItem(Burger2, 1));
});
$('#add-burger3').on('click', function () {
    addCartItem(new CartItem(Burger3, 1))
    // cart.add(new CartItem(Burger3, 1));
});
$('#add-burger4').on('click', function () {
    addCartItem(new CartItem(Burger4, 1))
    // cart.add(new CartItem(Burger4, 1));
});
$('#add-burger5').on('click', function () {
    addCartItem(new CartItem(Burger5, 1))
    // cart.add(new CartItem(Burger5, 1));
});
$('#add-burger6').on('click', function () {
    addCartItem(new CartItem(Burger6, 1))
    // cart.add(new CartItem(Burger6, 1));
});
$('#add-burger7').on('click', function () {
    addCartItem(new CartItem(Burger7, 1))
    // cart.add(new CartItem(Burger7, 1));
});
$('#add-burger8').on('click', function () {
    addCartItem(new CartItem(Burger8, 1))
    // cart.add(new CartItem(Burger8, 1));
});

// // soups
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// // pizza
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// // fish
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// // dessert
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });

// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });
// $('#add-big-burger').on('click', function () {
//     cart.add(new CartItem(BigBurger, 1));
// });






