var ItemList = [];

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

function deleteCookie(cname) {
    document.cookie = "" + cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


function splitCookie(entry) {
    var array = entry.split(',');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

window.onload = function() {
    console.log(document.cookie);
    buildListFromCookies();
    UpdateCart();
};



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


function buildListFromCookies() {
    let cookieList = document.cookie;
    let cookies = cookieList.split(';');

    ItemList = [];
    for (let i = 0; i < cookies.length; i++) {
        let params = cookies[i].split(',');
        console.log(params);
        if (params.length > 2) {
            
            let separator = params[0].indexOf('=');

            let tag = params[0].slice(0, separator);     
            
            let name = params[0].slice(separator + 1, params[0].length);
            let quantity = params[1];
            let cost = params[2];
            let cals = params[3];
    
            let result = new Item(name, tag, cost, cals);

            ItemList.push(new CartItem(result, quantity));
        }

    }

    console.log(ItemList);
}

function UpdateCart() {
    var totalCost = 0;
    var totalCals = 0;
    var totalQuantity = 0;

    ItemList.forEach(element => {
        totalCals+=element.getCals();
        totalCost += element.getCost();
        totalQuantity +=element.getQuantity();
    });
    

    let taxTotal = totalCost * 0.12;    
    let actualTotal = totalCost + taxTotal;
    var subtotal = document.getElementById('subtotal');
    subtotal.innerHTML = 'Subtotal: $' + totalCost.toFixed(2);
    var total = document.getElementById('total');
    total.innerHTML = 'Total: $' + actualTotal.toFixed(2); 
    var tax = document.getElementById('tax');
    tax.innerHTML = 'Tax: $' + taxTotal.toFixed(2); 
    var cals = document.getElementById('total-cals');
    cals.innerHTML = 'Total Calories: ' + totalCals.toString(); 
    // var cartCounter = document.getElementById("cart-counter");
    // cartCounter.innerHTML = totalQuantity;
    var even = true;
    ItemList.forEach(element => {
        
        createItem(element, even);
        even = !even;
    });
    

}

function createItem(element, even) {
    var itemDiv = document.createElement("div");
        itemDiv.classList.add('cart-item-container');
        var itemImg = document.createElement("img");
        itemImg.classList.add('cart-item-img');
        itemImg.src = ("Assets/Images/Food/"+ element.getImagePath().toString() +".png").replace(/\s/g, '');

        var itemCost = document.createElement("cart-item-cost");
        itemCost.innerHTML = "$" + element.getCost();
        itemCost.classList.add('cart-item-cost');
        var itemTitle = document.createElement("h1");
        itemTitle.innerHTML = element.getName();
        itemTitle.classList.add('cart-item-title');
        var itemCals = document.createElement("p");
        itemCals.innerHTML = element.getCals() + ' Cals';
        itemCals.classList.add('cart-item-cals');
        var itemQuantityDiv = document.createElement("div");
        itemQuantityDiv.classList.add('item-quantity-div');
        var itemQuantity = document.createElement("p");
        itemQuantity.innerHTML = element.getQuantity();
        itemQuantity.classList.add('cart-item-quantity');
        var increaseQuantity = document.createElement("img");
        var decreaseQuantity = document.createElement("img");
        increaseQuantity.src = ("Assets/Images/Buttons/button_plus.png").replace(/\s/g, '');
        decreaseQuantity.src = ("Assets/Images/Buttons/button_minus.png").replace(/\s/g, '');
        increaseQuantity.classList.add('cart-item-plus')
        decreaseQuantity.classList.add('cart-item-minus')
        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemTitle);
        itemDiv.appendChild(itemCals);
        itemDiv.appendChild(itemCost);
        itemQuantityDiv.appendChild(decreaseQuantity);
        itemQuantityDiv.appendChild(itemQuantity);
        itemQuantityDiv.appendChild(increaseQuantity);
        var cartDiv = document.getElementsByClassName('Cart')[0];
        var itemRow = document.createElement("div");
        itemRow.classList.add('cart-row');
        itemRow.appendChild(itemDiv);
        itemRow.appendChild(itemQuantityDiv);
        cartDiv.appendChild(itemRow);
        if(even) itemRow.classList.add('even');
        else itemRow.classList.add('odd');
        
}


$('#cart-item-button').on('click', function () {
    alert("Feature not yet implemented!");
    // cart.add(new CartItem(Burger1, 1))
});

// $('.cart-item-div.item-quantity-div.cart-item-plus').on('click', function () {
//     $('.cart-item-div.item-quantity-div');
// });
