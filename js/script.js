/*
Dropdown Menu
*/
function showDropdown(){
    var c = document.getElementById("menu").children;
    var w = window.innerWidth;

    if(c[0].style.display == "none"){
        for(var i = 0; i < 4; i++){
            c[i].style.display = "block";
        }
    }else{
        for(var i = 0; i < 4; i++){
            c[i].style.display = "none";
        }
    }
}

/*
Smooth scrolling
*/
$(document).ready(function() {
    var headerHeight = $('#navigationbar').outerHeight();

    $('.scrolldown').click(function(e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight + 1
        }, 800);

        e.preventDefault();
    });
});

/*
On load -> Scroll Top
*/
$(document).ready(function scrollToTop() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);

        e.preventDefault();
});

/*
Parallax Effect
*/

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.logoParallax').css({
        'transform' : 'translate(0px, ' + wScroll * 0.2 + '%)'
    });
});

/*
invisible Navigation-Bar
*/

/*
$(document).ready(function(){

    $(window).scroll(function(){

    if($(window).scrollTop()>1)
    $("#navigationbar").css({"background-color" : "rgba(32, 32, 32, 0.95)"});

    else
    $("#navigationbar").css({"background-color" : "rgba(32, 32, 32, 0.5)"});
    });

});
*/

/*
Show Scroll-Top mouse
*/

$(document).ready(function(){
    var windowHeight = $(window).outerHeight();

    $(window).scroll(function(){

    if($(window).scrollTop()>windowHeight/2){
        $(".mouseTop").css({"opacity" : "1"});
        $(".wheelTop").css({"opacity" : "1"});
        $(".mouseTop").css({"cursor" : "pointer"});
        $(".wheelTop").css({"cursor" : "pointer"});
    }

    else{
        $(".mouseTop").css({"opacity" : "0"});
        $(".wheelTop").css({"opacity" : "0"});
        $(".mouseTop").css({"cursor" : "default"});
        $(".wheelTop").css({"cursor" : "default"});
    }
    });

});

/*
Show Pagelinks
*/

$( window ).resize(function() {
    if($( window ).width() >= 768){
        $( "#menu" ).children().css( "display", "inline-block" );
    }
});
