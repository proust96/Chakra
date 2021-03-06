$( document ).ready(function() {
    $(".hexagon").click(function(){
        $(this).toggleClass("selected");
    });

    $(".hexagon").hover(function(){
        $(this).children('.svg_icon').children("img").attr("src",$(this).children('.svg_icon').children("img").attr("src").replace("bleu.png", "blanc.png"));
    }, function(){
        if (!$(this).hasClass("selected")){
        $(this).children('.svg_icon').children("img").attr("src",$(this).children('.svg_icon').children("img").attr("src").replace("blanc.png", "bleu.png"));
        }
    });

    $( ".hexagon_container" ).draggable({ revert: "invalid",stop: function() {
        $(this).children(".hexagon").children('.svg_icon').children("img").attr("src",$(this).children(".hexagon").children('.svg_icon').children("img").attr("src").replace("blanc.png", "bleu.png"));
        let icon = $(this).children(".hexagon").children(".svg_icon").removeClass("svg_icon").addClass("svg_iconAbso");
        let text = $(this).children(".hexagon").children(".text_icon").removeClass("text_icon").addClass("text_iconAbso");;
        icon.appendTo($(this));
        text.appendTo($(this));
        $(this).removeClass("hexagon_container").css("top","0").css("left", "0").children(".hexagon").replaceWith('<img class="imageAbso" src="img/hexa.png" />');
      } });
    $( ".droppable" ).droppable({
        classes: {
          "ui-droppable-active": "ui-state-active",
          "ui-droppable-hover": "ui-state-hover"
        },drop: function(e, ui){
            $(ui.draggable).appendTo($(this));
        }});
});