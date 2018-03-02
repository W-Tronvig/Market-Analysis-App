'use strict';

// Project Goals:     

// - Upon page load, have three images appear on the screen in accordance with HTML and CSS applied. 
// - Display text above the images to let the user know to click on the image.
// - Once image becomes clicked, then three new images appear and browser keeps track of clicks without reloading page completely.
// - Store images in an array or maybe an array within an array? Have a loop so that the randomizer can randomly select images from the loop and display three at a time. 
// - Have function that displays images. 
// - Have function that displays totals, in a table of some type.
// - Try for function that displays totals in different types of ways, percentages, data points on table.


// Product Constructor

var Product = function (name, url) {
    this.name = name;
    this.url = url;
    this.clicks = 0;
};

// Methods within the constructor

function randomProductUrl (){
    
    var random = Math.floor(Math.random() * productsArray.length);
    return productsArray[random].url;
}

var randomProductDisplay = function (){
    var urlArray = [];
    var productBag = document.getElementById('bag');
    
    while (urlArray.length != 3) {
        var currentUrl = randomProductUrl();
        if (urlArray.indexOf(currentUrl) == -1){
            urlArray.push(currentUrl);
        }
    };
    console.log(urlArray);

    for (let i = 0; i < urlArray.length; i++) {
        var img = document.createElement('img');
        img.setAttribute("src", urlArray[i]);
        productBag.appendChild(img);  
    }
}


var productsArray = [];
productsArray.push(
    new Product('r2d2 bag', 'images/bag.jpg'),
    new Product('banana slicer', 'images/banana.jpg'),
    new Product('toeless boots', 'images/boots.jpg'),
    new Product('odd chair', 'images/chair.jpg'),
    new Product('creature', 'images/cthulhu.jpg'),
    new Product('dragon spam', 'images/dragon.jpg'),
    new Product('pentencil', 'images/pen.jpg'),
    new Product('pizza scissors', 'images/scissors.jpg'),
    new Product('shark sleeping bag', 'images/shark.jpg'),
    new Product('baby broom', 'images/sweep.jpg'),
    new Product('unicorn spam', 'images/unicorn.jpg'),
    new Product('usb alien', 'images/usb.jpg'),
    new Product('repouring can', 'images/water_can.jpg'),
    new Product('undrinkable wine glass', 'images/wine_glass.jpg')
);

// window.addEventListener('load', randomProductDisplay());

randomProductDisplay();

    
