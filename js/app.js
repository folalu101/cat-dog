$(document).ready(function(){

    $("#hey").click(function(){
        $("#primary").prepend("<li>Yes Dear!</li>");
        $("#secondary").append("<li>Come in</li>");
        $("#success").prepend("<li>Hiyya !</li>");
        $("#danger").append("<li>Come on !!</li>");
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
        

    });

});