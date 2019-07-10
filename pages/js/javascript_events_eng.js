$(document).ready(function(){
  open_home_delay ();
  menu_down ();
  parallax_effect ();
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

    $(".body_moving").css("transform",'translate(0,-'+scrollval/30+'%)');
    $(".title_events").css("transform",'translate(0,calc(-50% - '+scrollval+'%))');
    $(".overview_img, .loggia_durini_img, .terrazza_a_lago_img, .loggia_segrè_img, .terrazza_canfora_img").css("transform",'translate(0,calc(-50% - '+scrollval/10+'%))');
  });
}
