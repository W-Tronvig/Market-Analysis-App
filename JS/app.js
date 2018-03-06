'use strict';

// Product Constructor
function addListeners () {
    document.getElementById("bigbag").addEventListener("click", productClicks)
}

var Product = function (name, url) {
    this.label = name;
    this.url = url;
    this.y = 0;

};

// Methods within the constructor

function randomProductUrl (){

    var random = Math.floor(Math.random() * productsArray.length);
    return productsArray[random].url;
}

var randomProductDisplay = function (){
    var urlArray = [];
    var productBag = document.getElementById('bigbag');
    productBag.innerHTML = "";
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


var counter = 0;
function productClicks(event) {
    if(event.target.tagName == "IMG") {
        var index = event.target.src.lastIndexOf("/");
        var clickUrl = event.target.src.substring(index + 1);
        console.log(clickUrl);
        for (let i = 0; i < productsArray.length; i++) {
            if (productsArray[i].url.indexOf(clickUrl) != -1) {
                productsArray[i].y += 1;
                console.log('match', productsArray[i]);
            }
        }
        randomProductDisplay();
        counter++
        if (counter % 15 == 0) {
           document.getElementById("show-chart-button").style.visibility = "visible";
           
        }
        else {
            document.getElementById("show-chart-button").style.visibility = "hidden";
            document.getElementById("chartContainer").style.visibility = "hidden";
        }
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

window.addEventListener('load', addListeners);
window.addEventListener('load', randomProductDisplay);
