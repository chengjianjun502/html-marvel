window.onload = function(){
	  var mySwiper = new Swiper ('.swiper-container', {
    //direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
	autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
	  clickable:true,
    },  
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })        
	//鼠标移入,停止自动播放;移出,恢复自动播放
	$('.swiper-wrapper').mouseover(function(){
		mySwiper.autoplay.stop();
	})
	$('.swiper-wrapper').mouseout(function(){
		mySwiper.autoplay.start();
	})	
	
}