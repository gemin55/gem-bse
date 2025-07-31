//$(document).ready(function(){

$(function(){

    $("#btn1").click(function(){
        $("#pet1").hide();
    }); 

    $("#btn2").click(function(){
        $("#pet1").show();
    }); 

    $("#btn3").click(function(){
        $("#pet1").toggle();
    }); 

    $("#btn4").click(function(){
        $('#pet4 img[src*="dog4"]').fadeOut(4000);
    }); 

    $("#btn5").click(function(){
        $('#pet4 img[src*="dog4"]').fadeIn(4000);
    }); 

    $("#photo-album img").mouseover(function(){

        $srcval = $(this).attr("src");
        $altval = $(this).attr("alt");
        $titleval = $(this).attr("title");

        $("#pet-img").attr("src", $srcval);
        $("#pet-info").html($altval);
        $("#pet-name").text($titleval);

    });

});


