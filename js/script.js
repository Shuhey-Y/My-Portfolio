$(".openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
  var responsiveImage = [
    { src: './img/header01.jpg' },
    { src: './img/header02.jpg' },
    { src: './img/header03.jpg' }
  ];
} else {
  var responsiveImage = [
    { src: './img/header01.jpg' },
    { src: './img/header02.jpg' },
    { src: './img/header03.jpg' }
  ];
}



$('#slider').vegas({
  overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.4/overlays/06.png',
  transition: 'blur',
  transitionDuration: 2000,
  delay: 10000,//
  animationDuration: 20000,
  animation: 'kenburns',
  slides: responsiveImage,
});

$('.slider').slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  slideToShow: 3,
  slideToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  centerMode: true,
  variableWidth: true,
  dots: true,
});
