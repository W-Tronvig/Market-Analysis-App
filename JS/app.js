"use strict";

//object literal 

const catalog = {
    products: [],
    display: function (){
        this.products.push(
            new product('r2d2 bag', 'IMG/bag.jpg'),
            new product('banana slicer', 'IMG/banana.jpg'),
            new product('toeless boots', 'IMG/boots.jpg'),
            new product('odd chair', 'IMG/chair.jpg'),
            new product('creature', 'IMG/cthulhu.jpg'),
            new product('dragon spam', 'IMG/dragon.jpg'),
            new product('pentencil', 'IMG/pen.jpg'),
            new product('pizza scissors', 'IMG/scissors.jpg'),
            new product('shark sleeping bag', 'IMG/shark.jpg'),
            new product('baby broom', 'IMG/sweep.jpg'),
            new product('unicorn spam', 'IMG/unicorn.jpg'),
            new product('usb alien', 'IMG/usb.jpg'),
            new product('repouring can', 'IMG/water_can.jpg'),
            new product('undrinkable wine glass', 'IMG/wine_glass.jpg')
        );
        this.displayProducts();
    },
    displayProducts: function(){
        var randomProduct = Math.random();
        // grab three images at random
        // display images side by side on page
        this.products[];
    }
};

//constructor function

var Catalog = function(productName, productMeta, productClicks, productRank){ //properties of catalog object
    this.productName = productName;
    this.productMeta = productMeta;
    this.productClicks = productClicks;
    this.productRank = productRank;
    // I think this will be where the main functionality of the page goes. Basically I would want the following to occur:
    // - Once image becomes clicked, then three new images appear. Page logs which image was clicked on. 
}

// catalog.display();