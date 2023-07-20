
$(function(){

  var swiper = new Swiper(".top-slide", {
      spaceBetween: 30,
      effect: "fade",

      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
    });


    // 스크롤이 됐을때!

    $(window).scroll(function(){
      curr = $(this).scrollTop();
      if(curr > 0){
        $('.header-fixed').addClass('on');
      }else{
        $('.header-fixed').removeClass('on');
      }
    })
    // 강제 이벤트실행 한번해줘야함
    $(window).trigger('scroll');
    // 윈도우한테 스크롤이벤트 강제로 한번 실행시킴


    $('.gnb .group-menu .btn-more').click(function(e){
      e.preventDefault();
      $('.gnb .group-menu').toggleClass('on');
      $('.gnb .group-all').slideToggle()

    })

    // $('.gnb .group-menu .btn-more').trigger('click')

    // 열기
    $('.header .btn-nav.menu').click(function(){
      $('body').addClass('hidden')
      $('.header .side-nav, .header .bg').addClass('on')
    })


    // 닫기
    $('.header .bg, .login-area .close').click(function(){
      $('.header .side-nav, .header .bg').removeClass('on')
      $('body').removeClass('hidden')
    })


    // 메뉴 펼치기
 

    $('header .side-item a').click(function(e){
      e.preventDefault();
      /* tab=$(this).attr('href');

      $(tab).slideToggle().toggleClass('on') */

      $(this).toggleClass('on').siblings('.sub-list').slideToggle()

    
    
      //  X 눌러서 사이드 메뉴 닫기
    })

    $('header .login-area .close').click(function(){
      $('.side-nav').close()
    })



    // 베스트 아이템 탭 여닫기

    $('.sc-best .tab-item').click(function(e){
      e.preventDefault();
      tab=$(this).data('tab');

      $(this).addClass('active').siblings().removeClass('active')
      $(tab).addClass('active').siblings().removeClass('active')


 
  /*     if ($(this).hasClass('active')) {
        $(this).removeClass('active').siblings()
        $(tab).removeClass('active').siblings()
        
      } else {
        $(this).addClass('active').siblings().removeClass('active')
        $(tab).addClass('active').siblings().removeClass('active')
      } */
    
    })




  
  var swiper = new Swiper(".main-swiper", {
    effect: "fade",
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination:{
        el:'.pagination'
      }
  });





  var swiper = new Swiper(".relative-swiper", {
    slidesPerView: 2.2,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  $('best-item').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  })


})



  