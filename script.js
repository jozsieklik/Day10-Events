$("#but1").click(() => 
    console.log ("Yeah, you clicked me")
)

$("#but2").click(() => 
    $("#but1").text(":O")
)


$("#but3").click(() => 
    $("button").css("background", "cyan")
)