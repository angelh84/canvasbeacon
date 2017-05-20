/**
 * art display module
 */
var artModule = (function(){
  // s = settingsInput
  var s;



/**
 * GENERATE CATEGORIES
 * @param {*} template 
 * @param {*} categoriesArr 
 */
  var assignCategories =  function(template, categoriesArr) {
    // categories loop
    $.each(categoriesArr, function(k, v) {
      var categoryElm = template.find( s.categorySelector ).last();
      categoryElm.html( categoriesArr[k] );
      if ( k + 1 < categoriesArr.length ) {
        categoryElm.clone().insertAfter( categoryElm );
      }
    });
  };



/**
 * ASSIGN COLUMN CLASSES
 * @param {*} template 
 * @param {*} orientation 
 */
  var assignColumnClasses = function(template, orientation) {
    var $col = template.find( s.columnSelector );
    if ( orientation === "landscape" ) {
      $col.addClass( s.landscapeColumnSelectors );
    } else {
      $col.addClass( s.portraitColumnSelectors );
    }
  };



/**
 * ASSIGN MAIN CONTENT
 * @param {*} key 
 * @param {*} value 
 * @param {*} template 
 */
  var assignMainContent = function(key, value, template ) {
    template // position
      .find( s.positionSelector )
      .html( key + 1 );
    template // orientation
      .find( s.orientationSelector )
      .addClass( value.orientation );
    template // art title
      .find( s.titleSelector )
      .html( value.title );
    template // author
      .find( s.authorSelector )
      .html( 'by ' + value.author.name )
      .attr( 'href', value.author.URL );
    template // image src
      .find( s.imageSelector )
      .attr({ 'src': value.imgURL, 'alt' : value.title });
    template // exteranl url assign
      .find( s.targetURLSelector )
      .attr( 'href', value.targetURL );
    template // price
      .find( s.priceSelector )
      .append( value.price );
    template // likes
      .find( s.likesSelector )
      .html( value.likes );
  };



/**
 * CLONE TEMPLATE
 * @param {*} template 
 * @param {*} key 
 * @param {*} dataObjLength 
 */
  var clone = function(template, key, dataObjLength) {
    // if statement to prevent cloaning of unecessary template at end of loop
    if ( key + 1 < dataObjLength ) {
      template.clone().insertAfter( template );
    }
  };



/**
 * OVERSEEING THE ASSIGNING OF DATA TO HTML TEMPLATE
 * @param {*} key 
 * @param {*} value 
 * @param {*} dataObjectLength 
 */
  var assign = function(key, value, dataObjectLength){
    var template = $( s.containerSelector ).find( s.templateSelector ).last();
    assignColumnClasses(template, value.orientation);
    assignMainContent(key, value, template);
    assignCategories(template, value.categories);
    clone(template, key, dataObjectLength);
  };



/**
 * GRAB JSON DATA AND EXECUTE ASSIGN()
 * @param {*} dataInput 
 */
  var dataLoop = function(dataInput) {
    $.each(dataInput, function(key, value) {
      assign(key, value, dataInput.length);
    });
  };



/**
 * INIT() - BEGIN THE DOMINO EFFECT
 * @param {*} dataInput 
 * @param {*} settingsInput 
 */
  var initialize = function(dataInput, settingsInput) {
    // variable 's' is globalized
    s = settingsInput;
    dataLoop(dataInput);
  };





/**
 * ALL BEGINS HERE
 */
  return  {
    init : initialize
  };
})();



/* ============================================================== */




/**
 * DATA
 */
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