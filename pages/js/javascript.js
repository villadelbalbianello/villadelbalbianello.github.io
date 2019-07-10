$(document).ready(function(){
  open_home_delay ();
  menu_down ();
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
