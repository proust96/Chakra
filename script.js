$( document ).ready(function() {
    $(".hexagon").click(function(){
        if ($(this).hasClass("selected")){
            $(this).children('.svg_icon').children("img").attr("src",$(this).children('.svg_icon').children("img").attr("src").replace("blanc.png", "bleu.png"));
        }
        else{
            $(this).children('.svg_icon').children("img").attr("src",$(this).children('.svg_icon').children("img").attr("src").replace("bleu.png", "blanc.png"));
        }
        $(this).toggleClass("selected");
    });

    $(".hexagon").hover(function(){
        $(this).children('.svg_icon').children("img").attr("src",$(this).children('.svg_icon').children("img").attr("src").replace("bleu.png", "blanc.png"));
    }, function(){
        if (!$(this).hasClass("selected")){
        $(this).children('.svg_icon').children("img").attr("src",$(this).children('.svg_icon').children("img").attr("src").replace("blanc.png", "bleu.png"));
        }
    });
});