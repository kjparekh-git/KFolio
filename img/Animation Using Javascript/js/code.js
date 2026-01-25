// JavaScript Document

var repeatY = 8000;
    for (var i = 0; i < 3; i++) {
     var repeat = repeatY * i;

setTimeout (function(){$('.left-bg').addClass('left-bg-ad');},500 + repeat);
setTimeout (function(){$('.right-bg').addClass('right-bg-ad');},500 + repeat);
setTimeout (function(){$('.food-pkt').fadeIn(800);},1500 + repeat);
setTimeout (function(){$('.burger').show(800);},2000 + repeat);
setTimeout (function(){$('.star').fadeIn().addClass('star1');},1500 + repeat);
setTimeout (function(){$('.star-txt').fadeIn(1000);},3000 + repeat);
setTimeout (function(){$('.logo').addClass('logo1');},3500 + repeat);
setTimeout (function(){$('.txt').addClass('txt1');},3500 + repeat);

setTimeout (function(){$('.left-bg').removeClass('left-bg-ad');},7000 + repeat);
setTimeout (function(){$('.right-bg').removeClass('right-bg-ad');},7000 + repeat);
setTimeout (function(){$('.food-pkt').fadeOut();},7000 + repeat);
setTimeout (function(){$('.burger').hide();},7000 + repeat);
setTimeout (function(){$('.star').fadeOut().removeClass('star1');},7000 + repeat);
setTimeout (function(){$('.star-txt').fadeOut();},7000 + repeat);
setTimeout (function(){$('.logo').removeClass('logo1');},7000 + repeat);
setTimeout (function(){$('.txt').removeClass('txt1');},7000 + repeat);

	}