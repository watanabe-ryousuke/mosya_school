// const before = $('.text');
// const text = before.text();
// const textArray = text.split('');

// let after = '';
// $.each(textArray,function(index,val){
//   after += "<span>" + val + "</span>";
// });  

// before.html(after);

// const textcnt = textArray.length;
// const circleR = ($('.circle').height()) / 2;
// const fontH = ($('.inner').height());
// const dist = circleR - fontH;

// $('span').each(function(index) {
//   const num = index + 1;
//   const radX = Math.sin(360 / textcnt * num * (Math.PI / 180));
//   const radY = Math.sin((90 - (360 / textcnt * num)) * (Math.PI / 180));
//   $(this).css('transform', 'translate(' + dist * radX + 'px, ' + -(dist * radY) + 'px) rotate(' + 360 / textcnt * num + 'deg)');
// });

// $(function () {
//   $('#text1').arctext();
//   $('#text2').arctext({radius: 100, dir: -1});
// });

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
    console.log(divnode);
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
    console.log(divnode);
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
    console.log(divnode);
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
