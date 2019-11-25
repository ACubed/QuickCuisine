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

        let separator = params[0].indexOf('=');

        let tag = params[0].slice(0, separator);       
        let name = params[0].slice(separator + 1, params[0].length);
        let quantity = params[1];
        let cost = params[2];
        let cals = params[3];
 
        let result = new Item(name, tag, cost, cals);

        ItemList.push(new CartItem(result, quantity));
    }

    console.log(ItemList);
}

function UpdateCart() {
    let totalCost = 0;
    let totalCals = 0;

    ItemList.forEach(element => {
        totalCals+=element.getCals();
        totalCost += element.getCost();
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
    ItemList.forEach(element => {
        createItem(element);
    });
    

}

function createItem(element) {
    var itemDiv = document.createElement("div");
        itemDiv.classList.add('cart-item-container');
        var itemImg = document.createElement("img");
        itemImg.classList.add('cart-item-img');
        var itemTitle = document.createElement("h1");
        itemTitle.innerHTML = element.getName();
        itemTitle.classList.add('cart-item-title');
        var itemCals = document.createElement("p");
        itemCals.innerHTML = element.getCals();
        itemCals.classList.add('cart-item-cals');
        var itemQuantity = document.createElement("p");
        itemCals.classList.add('cart-item-quantity');
        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemCals);
        itemDiv.appendChild(itemTitle);
        itemDiv.appendChild(itemQuantity);
        var cartDiv = document.getElementsByClassName('Cart');
        cartDiv[0].appendChild(itemDiv);
}