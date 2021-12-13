$(document).ready(function(){
    
//start niceScrolling trigger
    $("body").niceScroll({
        
        cursorcolor: "var(--main-color)",
        
        cursorborder: "1px solid var(--main-color)",
        
        "z-index":"100",
        
        horizrailenabled: false,
                
                });
//end niceScrolling trigger     


/*start activate the side bar*/
$(".navbar-form .form-group .fa-bars").click(function(){
    
    $("nav").toggleClass("animate");
    
    $(".side-bar").toggleClass("animate");
    
    $(".main-content").toggleClass("animate");
        
    });
/*end activate the side bar*/


//start dark mood
$(".dark-mood .fa-cloud-moon").click(function(){
 
 $(this).css("z-index","200");
 
 $(this).next(".fa-sun").css("z-index","400");
 
 });
 
 
$(".dark-mood .fa-sun").click(function(){
 
 $(this).css("z-index","200");
 
 $(this).prev(".fa-cloud-moon").css("z-index","400");
 
 });

 
 $(".dark-mood i").click(function(){
  
  $("body,nav,.main-content,.container,.card,.recent-project-section,.new-customer-section,.side-bar,.sidebar li").toggleClass("dark");
  
  });
//end dark mood


//start wow
wow = new WOW({
 boxClass:     'wow',      // default
 animateClass: 'animated', // default
 offset:       0,          // default
 mobile:       true,       // default
 live:         true        // default
 });
wow.init();
//end wow


//start loader
$(window).on("load",function(){
 
 $(".lds-facebook").fadeOut(5000);
 
 });
//end loader
 
 
 
 
 
 
 
 
 
 
 });//document ready


