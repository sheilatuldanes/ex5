//Javascript

//call to jQuery ready function
//make sure html and css is loaded

$(document).ready(function () {
    console.log('ready');


    //-----------------hover over the categories--------------

    $('li a.north').hover(function () {
        $('li.north').css('color', '#00778f');
    }, function () {
        $('li.north').css('color', 'black');
    });

    $('li a.west').hover(function () {
        $('li.west').css('color', '#00778f');
    }, function () {
        $('li.west').css('color', 'black');
    });

    $('li a.central').hover(function () {
        $('li.central').css('color', '#00778f');
    }, function () {
        $('li.central').css('color', 'black');
    });


    $('li a.east').hover(function () {
        $('li.east').css('color', '#00778f');
    }, function () {
        $('li.east').css('color', 'black');
    });

    $('li a.south').hover(function () {
        $('li.south').css('color', '#00778f');
    }, function () {
        $('li.south').css('color', 'black');
    });



})