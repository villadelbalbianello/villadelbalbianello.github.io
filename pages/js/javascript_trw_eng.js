$(document).ready(function(){
  open_home_delay ();
  menu_down ();
  parallax_effect ();
  num1_description ();
  num2_description ();
  num3_description ();
  exit_description();
});

function open_home_delay() {
  $("#link_logo").click(function(){
    setTimeout(function(){
      window.document.location='../index_eng.html';
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

function parallax_effect() {
  $(window).scroll(function(){
    var scrollval = $(this).scrollTop();

    $(".title_trw").css("transform",'translate(0,calc(-50% - '+scrollval/2+'%))');
    $(".body_moving").css("transform",'translate(0,-'+scrollval/30+'%)');
  });
}

function num1_description() {
  $(".num1").click(function(){
    $(".num1_description").removeClass("hidden");
    $("#logo, .menu, .lingua, .background_container, .title_trw, .container1, .container2, .num1, .num2, .num3, #instagram, #facebook, #support").addClass("blurred");
  })
}

function num2_description() {
  $(".num2").click(function(){
    $(".num2_description").removeClass("hidden");
    $("#logo, .menu, .lingua, .background_container, .title_trw, .container1, .container2, .num1, .num2, .num3, #instagram, #facebook, #support").addClass("blurred");
  })
}

function num3_description() {
  $(".num3").click(function(){
    $(".num3_description").removeClass("hidden");
    $("#logo, .menu, .lingua, .background_container, .title_trw, .container1, .container2, .num1, .num2, .num3, #instagram, #facebook, #support").addClass("blurred");
  })
}

function exit_description() {
  $(".exit_link").click(function(){
    $(".num1_description, .num2_description, .num3_description").addClass("hidden");
    $("#logo, .menu, .lingua, .background_container, .title_trw, .container1, .container2, .num1, .num2, .num3, #instagram, #facebook, #support").removeClass("blurred");
  })
}
