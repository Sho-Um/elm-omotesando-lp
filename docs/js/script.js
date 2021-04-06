const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');
const list1 = document.querySelector('.list1');
const list2 = document.querySelector('.list2');
const list3 = document.querySelector('.list3');
const list4 = document.querySelector('.list4');
const logo = document.querySelector('.logo');


btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});

list1.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});

list2.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});

list3.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});

list4.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});

logo.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } 
});

AOS.init();


//logoの表示
$(window).on('load',function(){
	$("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
	$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});