function ToArch1(element){


  // 要素内のテキストを抜き出して配列にする
  var text = element.textContent;

  var before = $('.text1');
  var text = before.text();

  text = text.split('');

  // 要素内のテキストを１文字ずつかこみ、それらに角度と高さを設定
  element.innerHTML = '';
  for(var int = 0; int < text.length; int++){

    var divnode = null;

    // 要素の角度
    var divrotate = (360 / text.length) * int;

    divnode = document.createElement('span');
    divnode.innerHTML = text[int];
    divnode.style.position = 'absolute';
    divnode.style.height = '50%';
    divnode.style.color = 'unset';
    divnode.style.transformOrigin = 'bottom center';
    divnode.style.top = '0';
    divnode.style.bottom = '0';
    divnode.style.left = '49.5%';
    divnode.style.transform = 'rotate(' + divrotate + 'deg)';
    element.appendChild(divnode);
  }
  return element;
}

var archtarget1 = document.getElementById('text1');
ToArch1(archtarget1);

function ToArch2(element){


  // 要素内のテキストを抜き出して配列にする
  var text = element.textContent;

  var before = $('.text2');
  var text = before.text();

  text = text.split('');

  // 要素内のテキストを１文字ずつかこみ、それらに角度と高さを設定
  element.innerHTML = '';
  for(var int = 0; int < text.length; int++){

    var divnode = null;

    // 要素の角度
    var divrotate = (360 / text.length) * int;

    divnode = document.createElement('span');
    divnode.innerHTML = text[int];
    divnode.style.position = 'absolute';
    divnode.style.height = '50%';
    divnode.style.color = 'unset';
    divnode.style.transformOrigin = 'bottom center';
    divnode.style.top = '0';
    divnode.style.bottom = '0';
    divnode.style.left = '49.5%';
    divnode.style.transform = 'rotate(' + divrotate + 'deg)';
    element.appendChild(divnode);
  }
  return element;
}

var archtarget2 = document.getElementById('text2');
ToArch2(archtarget2);

function ToArch3(element){


  // 要素内のテキストを抜き出して配列にする
  var text = element.textContent;

  var before = $('.text3');
  var text = before.text();

  text = text.split('');

  // 要素内のテキストを１文字ずつかこみ、それらに角度と高さを設定
  element.innerHTML = '';
  for(var int = 0; int < text.length; int++){

    var divnode = null;

    // 要素の角度
    var divrotate = (360 / text.length) * int;

    divnode = document.createElement('span');
    divnode.innerHTML = text[int];
    divnode.style.position = 'absolute';
    divnode.style.height = '50%';
    divnode.style.color = 'unset';
    divnode.style.transformOrigin = 'bottom center';
    divnode.style.top = '0';
    divnode.style.bottom = '0';
    divnode.style.left = '49.5%';
    divnode.style.transform = 'rotate(' + divrotate + 'deg)';
    element.appendChild(divnode);
  }
  return element;
}

var archtarget3 = document.getElementById('text3');
ToArch3(archtarget3);


$(".hamburger").click(function () {
  $(this).toggleClass('active');
  $(this).toggleClass('hum-hover');
  $('.menu-off').toggleClass('active');
  $('.header-buttom').toggleClass('active');
});


$(function(){
	$(window).scroll(function (){

		$('.js-fade').each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

			if (scroll > pos - windowHeight + 100){
				$(this).addClass('scroll');
			}
		});

    var delayTime = 0;

    $('.fadein').each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      
			if (scroll > pos - windowHeight + 100){
        $(this).delay(delayTime).queue(function(){
            $(this).addClass('active');
        })
        delayTime = delayTime + 100;
      }
    })
	});
});

const mySwiper1 = new Swiper('#swiper1', {
  // 通常のオプション設定
  loop: true,
});

// Swiperの初期化
const mySwiper2 = new Swiper('#swiper2', {
  // 通常のオプション設定
  loop: true,
  
  slidesPerView: 1, // 1スライドに設定してスライダーを無効にする
  allowTouchMove: false, // タッチ操作を無効にする
  // ブレークポイントごとの設定
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 'auto', // 常にスライドが見えるようにする
      allowTouchMove: true, // タッチ操作を有効にする
    },
  },
});
