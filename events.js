
$('#burgers-icon').on('click', function () {
    $('.category').removeClass('selected');
    $('#burger-category').addClass('selected');
    $('.menu-container').addClass('hidden');
    $('#menu-burgers').removeClass('hidden');
});

$('#soups-icon').on('click', function () {
    $('.category').removeClass('selected');
    $('#soups-category').addClass('selected');
    $('.menu-container').addClass('hidden');
    $('#menu-soups').removeClass('hidden');
});

$('#pizza-icon').on('click', function () {
    $('.category').removeClass('selected');
    $('#pizza-category').addClass('selected');
    $('.menu-container').addClass('hidden');
    $('#menu-pizza').removeClass('hidden');
});

$('#fish-icon').on('click', function () {
    $('.category').removeClass('selected');
    $('#fish-category').addClass('selected');
    $('.menu-container').addClass('hidden');
    $('#menu-seafood').removeClass('hidden');
});

$('#icecream-icon').on('click', function () {
    $('.category').removeClass('selected');
    $('#icecream-category').addClass('selected');
    $('.menu-container').addClass('hidden');
    $('#menu-dessert').removeClass('hidden');
});


