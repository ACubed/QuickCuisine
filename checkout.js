

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
            return c.substring(name.length, c.length);
        }
    }
    return "";
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
    splitCookie(getCookie("item"));
};