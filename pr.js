
$(document).ready(function(){
    $("#myinput").on("keyup",function(){
        var value=$(this).val().toLowerCase();

        $(".container div").filter(function (){
            $(this).toggle($(this).text().toLowerCase() .indexof(value)>-1);
        })
    });
});