$( document ).ready(function() {
    $(".hexagon").click(function(){
        $(this).toggleClass("selected");
    });

    $( ".hexagon_container" ).draggable({ revert: "invalid" });
    $( ".droppable" ).droppable({
        classes: {
          "ui-droppable-active": "ui-state-active",
          "ui-droppable-hover": "ui-state-hover"
        }});
});