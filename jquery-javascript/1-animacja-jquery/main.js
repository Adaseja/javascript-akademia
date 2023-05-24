$("#animateButton").click(function () {
    $("#square").animate({
        width: "100px",
        height: "100px",
        marginLeft: "100px"
    }
        , 3000

    )
    $("#square").animate({
        backgroundColor: "blue",
    }
    , 5000, function() {
        $("#square").append("<h2>Animacja zakonczona</h2>").css({
            color: "white",
            fontSize: "0.8em"
        })
    }
    )

    console.log($("#square"))


});