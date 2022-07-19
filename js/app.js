$(document).ready(function(){

    $("#hey").click(function(){
        $("#primary").prepend("<li>Yes Dear!</li>");
        $("#secondary").prepend("<li>Come in</li>");
        $("#success").prepend("<li>Hiyya !</li>");
        $("#danger").prepend("<li>Come on !!</li>");
        $("#warning").prepend("<li>Thank you !</li>");
        $('li').css('background-color', 'blue');
        // $("li").children("li").first().click(function(){
        //     alert("hi");
        // });
    });

    $("#hello").click(function(){
        $("#primary").append("<li>Hello Welcome</li>");
        $("#secondary").append("<li>Hello Come in</li>");
        $("#success").append("<li>Hello Honey !</li>");
        $("#danger").append("<li>Hello Come on !!</li>");
        $("#warning").append("<li>Hello Take care !</li>");
        $("li").css("background-color", "grey");
    });

    $("#yes").click(function(){
        $("#primary").prepend("<li>Yes Welcome</li>");
        $("#secondary").prepend("<li>Hello Yeah</li>");
        $("#success").prepend("<li>Yes Honey !</li>");
        $("#danger").prepend("<li>Yes Come on !!</li>");
        $("#warning").prepend("<li>Yes Take care !</li>");
        $("li").css("background-color", "green");
        // // Try to work on this 
        // $('#primary').click(function() {
        //     alert('hi');
        //   });
        // $("#primary").children("li").first().click(function() {
        //     $(this).remove();

        // });
    });

    $("#how").click(function(){
        $("#primary").append("<li>Welcome how?</li>");
        $("#secondary").append("<li>How in</li>");
        $("#success").append("<li>How Honey ?</li>");
        $("#danger").append("<li>How Come on ?</li>");
        $("#warning").append("<li> Take care How ?</li>");
        $("li").css("background-color", "red");

    });

    $("#dear").click(function(){
        $("#primary").prepend("<li>Welcome dear</li>");
        $("#secondary").prepend("<li>How dear</li>");
        $("#success").prepend("<li>daer friend </li>");
        $("#danger").prepend("<li>Dear Come on </li>");
        $("#warning").prepend("<li> Take care Dear </li>");
        $("li").css("background-color", "yellow");

    });

    $("#cat").click(function(){
        $("#meow").before("<li>Meow Meow</li>");
        $("#bark").after("<li>Bark Bark</li>");
        $("li").css("color", "green");

    });

    $("#dog").click(function(){
        $("#meow").before("<li>Meow Again !</li>");
        $("#bark").after("<li>Bark Again !</li>");
        $("li").css("color", "red");

    });

});