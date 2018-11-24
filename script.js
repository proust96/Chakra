$( document ).ready(function() {
    let soldat=[1,2,3,4,5,7,9,12,13,14,15];
    let sniper=[0,2,3,6,7,8,9,13,14,15];

    if (getParameterByName("sniper")){
        for (let index = 0; index < sniper.length; index++) {
            $($('.hexagon')[sniper[index]]).addClass('selected');
            $($('.hexagon')[sniper[index]]).children('.svg_icon').children("img").attr("src", $($('.hexagon')[sniper[index]]).children('.svg_icon').children("img").attr("src").replace("bleu.png", "blanc.png"));
        }
        $($("li")[1]).addClass("sel");
    }else{
        for (let index = 0; index < soldat.length; index++) {
            $($('.hexagon')[soldat[index]]).addClass('selected');
            $($('.hexagon')[soldat[index]]).children('.svg_icon').children("img").attr("src", $($('.hexagon')[soldat[index]]).children('.svg_icon').children("img").attr("src").replace("bleu.png", "blanc.png"));
        }
        $($("li")[0]).addClass("sel");
    }

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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}