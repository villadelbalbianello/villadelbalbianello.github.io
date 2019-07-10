$(document).ready(function(){
  open_home_delay ();
  menu_down ();
  parallax_effect ();
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

function parallax_effect() {
  $(window).scroll(function(){
    var scrollval = $(this).scrollTop();

    $(".body_moving").css("transform",'translate(0,-'+scrollval/20+'%)');
    $(".title_overview").css("transform",'translate(0,calc(-50% - '+scrollval+'%))');
    $(".overview_img, .cardinale_angelo_maria_durini_img02, .primi_lavori_img, .loggia_img, .luigi_porro_lambertenghi_img, .ritorno_in_auge_img, .guido_monzino_img02, .giardino_img, .interni_img02, .biblioteca_img02, .cimeli_delle_spedizioni_img, .donazione_fai_img01, .donazione_fai_img02, .curiosità_img02").css("transform",'translate(-50%,calc(-50% - '+scrollval/15+'%))');
    $(".cardinale_angelo_maria_durini_img01, .guido_monzino_img01, .interni_img01, .biblioteca_img01, .curiosità_img01").css("transform",'translate(-50%,calc(-50% - '+scrollval/30+'%))');
  });
}
