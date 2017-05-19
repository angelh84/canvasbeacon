// Art Display Module
var artModule = (function(){
  // s = settingsInput
  var s;

  var assign = function(key, value, dataObjectLength){
    var i = 0;
    var template = $( s.containerSelector ).find( s.templateSelector ).last();

    // column classes added depending on art orientation
    if ( value.orientation === "landscape" ) {
      template.find( s.columnSelector ).addClass( s.landscapeColumnSelectors );
    } else {
      template.find( s.columnSelector ).addClass( s.portraitColumnSelectors );
    }
    template.find( s.orientationSelector ).addClass( value.orientation );
    template.find( s.positionSelector ).html( key + 1 );
    template.find( s.titleSelector ).html( value.title );
    template.find( s.authorSelector ).html( 'by ' + value.author.name ).attr( 'href', value.author.URL );
    template.find( s.imageSelector ).attr({ 'src': value.imgURL, 'alt' : value.title });
    template.find( s.targetURLSelector ).attr( 'href', value.targetURL );
    template.find( s.priceSelector ).append( value.price );
    template.find( s.likesSelector ).html( value.likes );

    // categories loop
    $.each(value.categories, function(k, v) {
      var categoryElm = template.find( s.categorySelector ).last();
      categoryElm.html( value.categories[k] );
      if ( k + 1 < value.categories.length ) {
        categoryElm.clone().insertAfter( categoryElm );
      }
    });
    
    // if statement to prevent cloaning of unecessary template at end of loop
    if ( key + 1 < dataObjectLength ) {
      template.clone().insertAfter( template );
    }
  };

  var dataLoop = function(dataInput) {
    $.each(dataInput, function(key, value) {
      assign(key, value, dataInput.length);
    });
  };

  var initialize = function(dataInput, settingsInput) {
    // variable 's' is globalized
    s = settingsInput;
    dataLoop(dataInput);
  };

  return  {
    init : initialize
  };
})();

// Art Data
var artData = [{
  "title" : "Zebra",
  "targetURL" : "https://society6.com/product/zebra-tvf_stretched-canvas",
  "imgURL" : "img/zebra.jpg",
  "author" :  {
    "name" : "Jassberry Blue", 
    "URL" : "https://society6.com/jazzberryblue"
  },
  "price" : 89,
  "promoPrice" : "",
  "likes" : 1045,
  "categories" : ["graphic-design", "pop-art", "zebra"],
  "orientation" : "landscape"
},
{
  "title" : "The Parking Ticket",
  "targetURL" : "https://society6.com/product/the-parking-ticket_stretched-canvas",
  "imgURL" : 'img/the-parking-ticket.jpg',
  "author" :  {
    "name" : "Scott Listfield", 
    "URL" : "https://society6.com/scottlistfield"
  },
  "price" : 85,
  "promoPrice" : "",
  "likes" : 330,
  "categories" : ["movies-tv", "sci-fi", "humor", "pop-surrealism"],
  "orientation" : "landscape"
},
{
  "title" : "Grand Avenue",
  "targetURL" : "https://society6.com/product/a-grand-avenue_stretched-canvas",
  "imgURL" : 'img/grand-avenue.jpg',
  "author" : {
    "name" : "Tim Jarosz", 
    "URL" : "https://society6.com/timjarosz?curator=angelh84"
  },
  "price" : 85,
  "promoPrice" : "",
  "likes" : 2262,
  "categories" : ["illustration", "graphic-design", "collage"],
  "orientation" : "landscape"
}];