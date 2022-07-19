$(document).ready(function(){

    $("#hey").click(function(){
        $("#primary").prepend("<li>Yes Dear!</li>");
        $("#secondary").append("<li>Come in</li>");
        $("#success").prepend("<li>Hiyya !</li>");
        $("#danger").append("<li>Come on !!</li>");
        $("#warning").prepend("<li>Thank you !</li>");

    });

});