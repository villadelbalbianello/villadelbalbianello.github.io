$(document).ready(function(){
  open_home_delay ();
  menu_down ();
  over_news_button ();
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

function over_news_button() {
  $(".news_button").mouseover(function(){
    $(".news_button").addClass("background_blue");
    $(".news_button_text").removeClass("blue");
    $(".news_button_text").addClass("white");
  });
  $(".news_button").mouseout(function(){
    $(".news_button").removeClass("background_blue");
    $(".news_button_text").addClass("blue");
    $(".news_button_text").removeClass("white");
  });
}
