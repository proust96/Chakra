$( document ).ready(function() {
    $(".hexagon").click(function(){
        $(this).toggleClass("selected");
    });

    $( ".hexagon_container" ).draggable({ revert: "invalid",stop: function() {
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