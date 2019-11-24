let userName = "HCI23";
let password = "12345";
loggingIn = false;
$('.login').on('click', function () {
    if(!loggingIn) {
        $('.login-container').removeClass('hidden');
        loggingIn = true;
    }
    else {
        $('.login-container').addClass('hidden');
        loggingIn = false;
    }
});

// Get the login
var login = $('.login-container');

// When the user clicks anywhere outside of the login, close it
window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}


$('.cancelbtn').on('click', function () {
    $('.login-container').addClass('hidden');
});