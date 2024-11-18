//$('tooltip').html('<p>An aardvark</p>');
//$('#tooltip').fadeIn(250);
//$(#tooltip').animate({left : 100px},250);


$(document).ready(function(){
    let cartItemCount= 0;
    $(".add").click(function(){
        cartItemCount++;

    let itemName = $(this).attr("name");
    let itemID = $(this).attr("id");
    let cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " <span class='del'>Remove</span></li>";
    
    if (cartItemCount === 0){
        $("#empty").hide();
    }
 cartItemCount++;
        $("#cart").append(cartLink);
        $("#cart-count").text(cartItemCount);
        $(this).hide();
    });

 $("#cart").on("click", ".del",function(){
    $(this).parent().remove();
    cartItemCount--;
    $("#cart-count").text(cartItemCount);
    if (cartItemCount === 0){
        $("#empty").show();
    }
    let itemID = $(this).parent().attr("name");
    $("#" + itemID).show();
 });
   
        $(".rating img").click(function(){
            $(this).siblings("img").attr("src","staroff.gif");
            $(this).attr("src", "staron.gif");
            $(this).prevAll("img").attr("src", "staron.gif");

        });
    });