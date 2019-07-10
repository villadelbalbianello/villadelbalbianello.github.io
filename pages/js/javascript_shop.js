$(document).ready(function(){
  open_home_delay ();
  menu_down ();
  over_pen ();
  over_agenda ();
  over_tshirt ();
  over_pencil ();
  pencil_description ();
  agenda_description ();
  tshirt_description ();
  pen_description ();
  exit_description ();
  change_perspective ();
  select_orange_agenda ();
  select_darkgreen_agenda ();
  select_green_agenda ();
  select_blue_agenda ();
  select_lightviolet_agenda ();
  select_pink_agenda ();
  select_orange_tshirt ();
  select_darkgreen_tshirt ();
  select_green_tshirt ();
  select_blue_tshirt ();
  select_lightviolet_tshirt ();
  select_pink_tshirt ();
  select_orange_pen ();
  select_darkgreen_pen ();
  select_green_pen ();
  select_blue_pen ();
  select_lightviolet_pen ();
  select_pink_pen ();
  select_sizeS ();
  select_sizeM ();
  select_sizeL ();
  add_to_cart ();
  shopping_cart_empty ();
});

function open_home_delay() {
  $("#link_logo").click(function(){
    setTimeout(function(){
      window.document.location='../index.html';
    },200);
  });
}

function menu_down() {
  $("#link_logo").click(function(){
    $(".menu").removeClass("high");
    $(".menu").addClass("down");
    $("#logotipo").removeClass("logotipo2");
    $("#logotipo").addClass("logotipo1");
    $("#logo").removeClass("logo2");
    $("#logo").addClass("logo1");
  });
}

function over_pencil() {
  $(".pencil_list").mouseover(function(){
    $(".pencil_img").removeClass("hidden");
    $(".pencil_list").addClass("over");
  });
  $(".pencil_list").mouseout(function(){
    $(".pencil_img").addClass("hidden");
    $(".pencil_list").removeClass("over");
  });
}

function over_agenda() {
  $(".agenda_list").mouseover(function(){
    $(".agenda_img").removeClass("hidden");
    $(".agenda_list").addClass("over");
  });
  $(".agenda_list").mouseout(function(){
    $(".agenda_img").addClass("hidden");
    $(".agenda_list").removeClass("over");
  });
}

function over_tshirt() {
  $(".tshirt_list").mouseover(function(){
    $(".tshirt_img").removeClass("hidden");
    $(".tshirt_list").addClass("over");
  });
  $(".tshirt_list").mouseout(function(){
    $(".tshirt_img").addClass("hidden");
    $(".tshirt_list").removeClass("over");
  });
}

function over_pen() {
  $(".pen_list").mouseover(function(){
    $(".pen_img").removeClass("hidden");
    $(".pen_list").addClass("over");
  });
  $(".pen_list").mouseout(function(){
    $(".pen_img").addClass("hidden");
    $(".pen_list").removeClass("over");
  });
}

function pencil_description() {
  $(".pencil_list").click(function(){
    $(".pencil_description").removeClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").addClass("blurred");
    $(".pencil_img, .agenda_img, .tshirt_img, .pen_img, .shopper_img").addClass("hidden");
    $(".pencil_list, .agenda_list, .tshirt_list, .pen_list, .shopper_list").removeClass("over");
  })
}

function agenda_description() {
  $(".agenda_list").click(function(){
    $(".agenda_description").removeClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").addClass("blurred");
    $(".pencil_img, .agenda_img, .tshirt_img, .pen_img, .shopper_img").addClass("hidden");
    $(".pencil_list, .agenda_list, .tshirt_list, .pen_list, .shopper_list").removeClass("over");
  })
}

function tshirt_description() {
  $(".tshirt_list").click(function(){
    $(".tshirt_description").removeClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").addClass("blurred");
    $(".pencil_img, .agenda_img, .tshirt_img, .pen_img, .shopper_img").addClass("hidden");
    $(".pencil_list, .agenda_list, .tshirt_list, .pen_list, .shopper_list").removeClass("over");
  })
}

function pen_description() {
  $(".pen_list").click(function(){
    $(".pen_description").removeClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").addClass("blurred");
    $(".pencil_img, .agenda_img, .tshirt_img, .pen_img, .shopper_img").addClass("hidden");
    $(".pencil_list, .agenda_list, .tshirt_list, .pen_list, .shopper_list").removeClass("over");
  })
}

function exit_description() {
  $(".exit_link").click(function(){
    $(".pencil_description, .agenda_description, .tshirt_description, .pen_description, .shopper_description").addClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").removeClass("blurred");
    $('.add_to_cart a').text('Aggiungi al carrello');
    $('.add_to_cart').css("background-color","#000000");
    $('.add_to_cart').css("border","0px");
    $('.add_to_cart a').css("color","#ffffff");
  })
}

function change_perspective() {
  $(".tshirt_arrow_link").click(function(){
    if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_orange.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_orange01.jpg');
      $(".tshirt_arrow").addClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_orange01.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_orange.jpg');
      $(".tshirt_arrow").removeClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_darkgreen.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_darkgreen01.jpg');
      $(".tshirt_arrow").addClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_darkgreen01.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_darkgreen.jpg');
      $(".tshirt_arrow").removeClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_green.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_green01.jpg');
      $(".tshirt_arrow").addClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_green01.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_green.jpg');
      $(".tshirt_arrow").removeClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_blue.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_blue01.jpg');
      $(".tshirt_arrow").addClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_blue01.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_blue.jpg');
      $(".tshirt_arrow").removeClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_lightviolet.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_lightviolet01.jpg');
      $(".tshirt_arrow").addClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_lightviolet01.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_lightviolet.jpg');
      $(".tshirt_arrow").removeClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_pink.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_pink01.jpg');
      $(".tshirt_arrow").addClass("flipped");
    }
    else if ($(".dress_img03").attr('src') == 'img/shop/tshirt_description_pink01.jpg') {
      $(".dress_img03").attr('src','img/shop/tshirt_description_pink.jpg');
      $(".tshirt_arrow").removeClass("flipped");
    }
  })
}

function select_orange_agenda() {
  $(".orange_agenda").click(function(){
    $("#orange_agenda").attr('src','img/shop/color/orange_selected.png');
    $("#darkgreen_agenda").attr('src','img/shop/color/darkgreen.png');
    $("#green_agenda").attr('src','img/shop/color/green.png');
    $("#blue_agenda").attr('src','img/shop/color/blue.png');
    $("#lightviolet_agenda").attr('src','img/shop/color/lightviolet.png');
    $("#pink_agenda").attr('src','img/shop/color/pink.png');
    $(".dress_img02").attr('src','img/shop/agenda_description_orange.jpg');
  })
}

function select_darkgreen_agenda() {
  $(".darkgreen_agenda").click(function(){
    $("#orange_agenda").attr('src','img/shop/color/orange.png');
    $("#darkgreen_agenda").attr('src','img/shop/color/darkgreen_selected.png');
    $("#green_agenda").attr('src','img/shop/color/green.png');
    $("#blue_agenda").attr('src','img/shop/color/blue.png');
    $("#lightviolet_agenda").attr('src','img/shop/color/lightviolet.png');
    $("#pink_agenda").attr('src','img/shop/color/pink.png');
    $(".dress_img02").attr('src','img/shop/agenda_description_darkgreen.jpg');
  })
}

function select_green_agenda() {
  $(".green_agenda").click(function(){
    $("#orange_agenda").attr('src','img/shop/color/orange.png');
    $("#darkgreen_agenda").attr('src','img/shop/color/darkgreen.png');
    $("#green_agenda").attr('src','img/shop/color/green_selected.png');
    $("#blue_agenda").attr('src','img/shop/color/blue.png');
    $("#lightviolet_agenda").attr('src','img/shop/color/lightviolet.png');
    $("#pink_agenda").attr('src','img/shop/color/pink.png');
    $(".dress_img02").attr('src','img/shop/agenda_description_green.jpg');
  })
}

function select_blue_agenda() {
  $(".blue_agenda").click(function(){
    $("#orange_agenda").attr('src','img/shop/color/orange.png');
    $("#darkgreen_agenda").attr('src','img/shop/color/darkgreen.png');
    $("#green_agenda").attr('src','img/shop/color/green.png');
    $("#blue_agenda").attr('src','img/shop/color/blue_selected.png');
    $("#lightviolet_agenda").attr('src','img/shop/color/lightviolet.png');
    $("#pink_agenda").attr('src','img/shop/color/pink.png');
    $(".dress_img02").attr('src','img/shop/agenda_description_blue.jpg');
  })
}

function select_lightviolet_agenda() {
  $(".lightviolet_agenda").click(function(){
    $("#orange_agenda").attr('src','img/shop/color/orange.png');
    $("#darkgreen_agenda").attr('src','img/shop/color/darkgreen.png');
    $("#green_agenda").attr('src','img/shop/color/green.png');
    $("#blue_agenda").attr('src','img/shop/color/blue.png');
    $("#lightviolet_agenda").attr('src','img/shop/color/lightviolet_selected.png');
    $("#pink_agenda").attr('src','img/shop/color/pink.png');
    $(".dress_img02").attr('src','img/shop/agenda_description_lightviolet.jpg');
  })
}

function select_pink_agenda() {
  $(".pink_agenda").click(function(){
    $("#orange_agenda").attr('src','img/shop/color/orange.png');
    $("#darkgreen_agenda").attr('src','img/shop/color/darkgreen.png');
    $("#green_agenda").attr('src','img/shop/color/green.png');
    $("#blue_agenda").attr('src','img/shop/color/blue.png');
    $("#lightviolet_agenda").attr('src','img/shop/color/lightviolet.png');
    $("#pink_agenda").attr('src','img/shop/color/pink_selected.png');
    $(".dress_img02").attr('src','img/shop/agenda_description_pink.jpg');
  })
}

function select_orange_tshirt() {
  $(".orange_tshirt").click(function(){
    $("#orange_tshirt").attr('src','img/shop/color/orange_selected.png');
    $("#darkgreen_tshirt").attr('src','img/shop/color/darkgreen.png');
    $("#green_tshirt").attr('src','img/shop/color/green.png');
    $("#blue_tshirt").attr('src','img/shop/color/blue.png');
    $("#lightviolet_tshirt").attr('src','img/shop/color/lightviolet.png');
    $("#pink_tshirt").attr('src','img/shop/color/pink.png');
    $(".dress_img03").attr('src','img/shop/tshirt_description_orange.jpg');
  })
}

function select_darkgreen_tshirt() {
  $(".darkgreen_tshirt").click(function(){
    $("#orange_tshirt").attr('src','img/shop/color/orange.png');
    $("#darkgreen_tshirt").attr('src','img/shop/color/darkgreen_selected.png');
    $("#green_tshirt").attr('src','img/shop/color/green.png');
    $("#blue_tshirt").attr('src','img/shop/color/blue.png');
    $("#lightviolet_tshirt").attr('src','img/shop/color/lightviolet.png');
    $("#pink_tshirt").attr('src','img/shop/color/pink.png');
    $(".dress_img03").attr('src','img/shop/tshirt_description_darkgreen.jpg');
  })
}

function select_green_tshirt() {
  $(".green_tshirt").click(function(){
    $("#orange_tshirt").attr('src','img/shop/color/orange.png');
    $("#darkgreen_tshirt").attr('src','img/shop/color/darkgreen.png');
    $("#green_tshirt").attr('src','img/shop/color/green_selected.png');
    $("#blue_tshirt").attr('src','img/shop/color/blue.png');
    $("#lightviolet_tshirt").attr('src','img/shop/color/lightviolet.png');
    $("#pink_tshirt").attr('src','img/shop/color/pink.png');
    $(".dress_img03").attr('src','img/shop/tshirt_description_green.jpg');
  })
}

function select_blue_tshirt() {
  $(".blue_tshirt").click(function(){
    $("#orange_tshirt").attr('src','img/shop/color/orange.png');
    $("#darkgreen_tshirt").attr('src','img/shop/color/darkgreen.png');
    $("#green_tshirt").attr('src','img/shop/color/green.png');
    $("#blue_tshirt").attr('src','img/shop/color/blue_selected.png');
    $("#lightviolet_tshirt").attr('src','img/shop/color/lightviolet.png');
    $("#pink_tshirt").attr('src','img/shop/color/pink.png');
    $(".dress_img03").attr('src','img/shop/tshirt_description_blue.jpg');
  })
}

function select_lightviolet_tshirt() {
  $(".lightviolet_tshirt").click(function(){
    $("#orange_tshirt").attr('src','img/shop/color/orange.png');
    $("#darkgreen_tshirt").attr('src','img/shop/color/darkgreen.png');
    $("#green_tshirt").attr('src','img/shop/color/green.png');
    $("#blue_tshirt").attr('src','img/shop/color/blue.png');
    $("#lightviolet_tshirt").attr('src','img/shop/color/lightviolet_selected.png');
    $("#pink_tshirt").attr('src','img/shop/color/pink.png');
    $(".dress_img03").attr('src','img/shop/tshirt_description_lightviolet.jpg');
  })
}

function select_pink_tshirt() {
  $(".pink_tshirt").click(function(){
    $("#orange_tshirt").attr('src','img/shop/color/orange.png');
    $("#darkgreen_tshirt").attr('src','img/shop/color/darkgreen.png');
    $("#green_tshirt").attr('src','img/shop/color/green.png');
    $("#blue_tshirt").attr('src','img/shop/color/blue.png');
    $("#lightviolet_tshirt").attr('src','img/shop/color/lightviolet.png');
    $("#pink_tshirt").attr('src','img/shop/color/pink_selected.png');
    $(".dress_img03").attr('src','img/shop/tshirt_description_pink.jpg');
  })
}

function select_orange_pen() {
  $(".orange_pen").click(function(){
    $("#orange_pen").attr('src','img/shop/color/orange_selected.png');
    $("#darkgreen_pen").attr('src','img/shop/color/darkgreen.png');
    $("#green_pen").attr('src','img/shop/color/green.png');
    $("#blue_pen").attr('src','img/shop/color/blue.png');
    $("#lightviolet_pen").attr('src','img/shop/color/lightviolet.png');
    $("#pink_pen").attr('src','img/shop/color/pink.png');
    $(".dress_img05").attr('src','img/shop/pen_description_orange.jpg');
  })
}

function select_darkgreen_pen() {
  $(".darkgreen_pen").click(function(){
    $("#orange_pen").attr('src','img/shop/color/orange.png');
    $("#darkgreen_pen").attr('src','img/shop/color/darkgreen_selected.png');
    $("#green_pen").attr('src','img/shop/color/green.png');
    $("#blue_pen").attr('src','img/shop/color/blue.png');
    $("#lightviolet_pen").attr('src','img/shop/color/lightviolet.png');
    $("#pink_pen").attr('src','img/shop/color/pink.png');
    $(".dress_img05").attr('src','img/shop/pen_description_darkgreen.jpg');
  })
}

function select_green_pen() {
  $(".green_pen").click(function(){
    $("#orange_pen").attr('src','img/shop/color/orange.png');
    $("#darkgreen_pen").attr('src','img/shop/color/darkgreen.png');
    $("#green_pen").attr('src','img/shop/color/green_selected.png');
    $("#blue_pen").attr('src','img/shop/color/blue.png');
    $("#lightviolet_pen").attr('src','img/shop/color/lightviolet.png');
    $("#pink_pen").attr('src','img/shop/color/pink.png');
    $(".dress_img05").attr('src','img/shop/pen_description_green.jpg');
  })
}

function select_blue_pen() {
  $(".blue_pen").click(function(){
    $("#orange_pen").attr('src','img/shop/color/orange.png');
    $("#darkgreen_pen").attr('src','img/shop/color/darkgreen.png');
    $("#green_pen").attr('src','img/shop/color/green.png');
    $("#blue_pen").attr('src','img/shop/color/blue_selected.png');
    $("#lightviolet_pen").attr('src','img/shop/color/lightviolet.png');
    $("#pink_pen").attr('src','img/shop/color/pink.png');
    $(".dress_img05").attr('src','img/shop/pen_description_blue.jpg');
  })
}

function select_lightviolet_pen() {
  $(".lightviolet_pen").click(function(){
    $("#orange_pen").attr('src','img/shop/color/orange.png');
    $("#darkgreen_pen").attr('src','img/shop/color/darkgreen.png');
    $("#green_pen").attr('src','img/shop/color/green.png');
    $("#blue_pen").attr('src','img/shop/color/blue.png');
    $("#lightviolet_pen").attr('src','img/shop/color/lightviolet_selected.png');
    $("#pink_pen").attr('src','img/shop/color/pink.png');
    $(".dress_img05").attr('src','img/shop/pen_description_lightviolet.jpg');
  })
}

function select_pink_pen() {
  $(".pink_pen").click(function(){
    $("#orange_pen").attr('src','img/shop/color/orange.png');
    $("#darkgreen_pen").attr('src','img/shop/color/darkgreen.png');
    $("#green_pen").attr('src','img/shop/color/green.png');
    $("#blue_pen").attr('src','img/shop/color/blue.png');
    $("#lightviolet_pen").attr('src','img/shop/color/lightviolet.png');
    $("#pink_pen").attr('src','img/shop/color/pink_selected.png');
    $(".dress_img05").attr('src','img/shop/pen_description_pink.jpg');
  })
}

function select_sizeS() {
  $(".sizeS").click(function(){
    $(".sizeS").addClass("selected_size");
    $(".sizeM").removeClass("selected_size");
    $(".sizeL").removeClass("selected_size");
  })
}

function select_sizeM() {
  $(".sizeM").click(function(){
    $(".sizeS").removeClass("selected_size");
    $(".sizeM").addClass("selected_size");
    $(".sizeL").removeClass("selected_size");
  })
}

function select_sizeL() {
  $(".sizeL").click(function(){
    $(".sizeS").removeClass("selected_size");
    $(".sizeM").removeClass("selected_size");
    $(".sizeL").addClass("selected_size");
  })
}

function add_to_cart() {
  $(".add_to_cart").click(function(){
    $('.add_to_cart a').text('Esaurito!');
    $('.add_to_cart').css("background-color","#f1f1f1");
    $('.add_to_cart').css("border","1px solid #000000");
    $('.add_to_cart a').css("color","#000000");
  })
}

function shopping_cart_empty() {
  $(".shopping_cart_border").click(function(){
    $(".shop_list").addClass("hidden");
    $(".shopping_cart_empty").removeClass("hidden");
  })
}
