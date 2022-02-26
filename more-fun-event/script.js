$("#but1").click(() => 
    console.log ("Yeah, you clicked me")
)

$("#but2").click(() => 
    $("#but1").text(":O")
)

$("#but3").click(function() { 
    let value = $("#input").val();
    $("button").css("background", value);
    $(this).off("click");
});

