
function setCookie(cartItem) {
    // console.log(numItemsCookie);

    let name = cartItem.getName();
    console.log(getCookie(name));
    
    var c = getCookie("burger_burgler");
    var quantity = cartItem.getQuantity();
    if (c === "") {
        console.log("is Null");
    } else {
        var array = c.split(',');
        quantity += array[1];
    }
  var cost = cartItem.getCost();
    var cals = cartItem.getCals();
    var imagepath = cartItem.getImagePath();
    var cString = imagepath + "=" + name + "," + quantity + "," + cost + "," + cals + "," + imagepath + ";";
    document.cookie = cString;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);h);
        }
    }
    return "";
}
function splitCookie(entry) {
    var array = entry.split(',');
    for (let i = 0; i < array.length; i++) {consolelog(array[i]);
    }
}

// class Cart {

// 
// class Cart {
//     subtotal = 0.00;
//     tax = 0.00;
//     total = 0.00;
//     items = [];
//     constructor(){
//         this.updateDisplay();
//     }

//     // add(cartItem) {

//     //     // this.items.push(cartItem);
//     //     // this.subtotal += cartItem.getCost;
//     //     // this.tax = this.subtotal * 0.12;
//     //     // this.total = this.subtotal + this.tax;
//     //     // this.updateDisplay();
//     //     // console.log('Added to cart' + this.items.toString());
//     // }
    
//     // updateDisplay() {
//     //     let cartElement = document.createElement("div");
//     //     cartElement.addClass('cart-items');
//     //     items.array.forEach(item => {
//     //         let row = document.createElement("div");
//     //         row.addClass('order-row');
//     //         let image = document.createElement("img");
//     //         image.src = "Assets/Images/Food/" + item.getImagePath + ".png"; 
            
//     //     });     
//     // } 

// }

class CartItem {
    item;
    quantity;
    cost
    cals;;
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
    setCookie(new CartItem(Burger1, 1))
    // cart.add(new CartItem(Burger1, 1))
    console.log(document.cookie);
});
$('#add-burger2').on('click', function () {
    setCookie(new CartItem(Burger2, 1))
    // cart.add(new CartItem(Burger2, 1));
});
$('#add-burger3').on('click', function () {
    setCookie(new CartItem(Burger3, 1))
    // cart.add(new CartItem(Burger3, 1));
});
$('#add-burger4').on('click', function () {
    setCookie(new CartItem(Burger4, 1))
    // cart.add(new CartItem(Burger4, 1));
});
$('#add-burger5').on('click', function () {
    setCookie(new CartItem(Burger5, 1))
    // cart.add(new CartItem(Burger5, 1));
});
$('#add-burger6').on('click', function () {
    setCookie(new CartItem(Burger6, 1))
    // cart.add(new CartItem(Burger6, 1));
});
$('#add-burger7').on('click', function () {
    setCookie(new CartItem(Burger7, 1))
    // cart.add(new CartItem(Burger7, 1));
});
$('#add-burger8').on('click', function () {
    setCookie(new CartItem(Burger8, 1))
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






