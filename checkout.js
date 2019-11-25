

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
    console.log(cookies);

    var itemList = [];
    for (let i = 0; i < cookies.length; i++) {
        let params = cookies[i].split(',');
        console.log(params);

        //let Burger1 = new Item("Mr. Classic","burger_classic" ,8.99, 800);

        let separator = params[0].indexOf('=');

        let tag = params[0].slice(0, separator);       
        let name = params[0].slice(separator + 1, params[0].length);
        let cost = params[2];
        let cals = param
 
        console.log(tag);       
        console.log(name);
        // let foodItem = new Item(name,tag )
         // 
    }


}

