$(document).ready(function(){

    $("#hey").click(function(){
        $("#primary").prepend("<li>Yes Dear!</li>");
        $("#secondary").prepend("<li>Come in</li>");
        $("#success").prepend("<li>Hiyya !</li>");
        $("#danger").prepend("<li>Come on !!</li>");
        $("#warning").prepend("<li>Thank you !</li>");
    });

    $("#hello").click(function(){
        $("#primary").append("<li>Hello Welcome</li>");
        $("#secondary").append("<li>Hello Come in</li>");
        $("#success").append("<li>Hello Honey !</li>");
        $("#danger").append("<li>Hello Come on !!</li>");
        $("#warning").append("<li>Hello Take care !</li>");
    });

    $("#yes").click(function(){
        $("#primary").prepend("<li>Yes Welcome</li>");
        $("#secondary").prepend("<li>Hello Yeah</li>");
        $("#success").prepend("<li>Yes Honey !</li>");
        $("#danger").prepend("<li>Yes Come on !!</li>");
        $("#warning").prepend("<li>Yes Take care !</li>");
    });

    $("#how").click(function(){
        $("#primary").append("<li>Welcome how?</li>");
        $("#secondary").append("<li>How in</li>");
        $("#success").append("<li>How Honey ?</li>");
        $("#danger").append("<li>How Come on ?</li>");
        $("#warning").append("<li> Take care How ?</li>");

    });

});