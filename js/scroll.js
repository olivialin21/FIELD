const auto_scroll = document.getElementById("auto_scroll");

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};
function preventDefault(e) {
  e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// 滑鼠禁止滾動
scrollDisable = () => {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);  
}
// 滑鼠可以滾動
scrollEnable = () => {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
// 頁面自動滾動
pageScrollAuto = () => {
  window.scrollBy(0,1);
  scrolldelay = setTimeout(pageScroll,10);
}
pageScrollDefault = () => {
  window.scrollBy(0,0);
}

auto_scroll.addEventListener('change', (e) => {
  if (e.target.checked) {
    pageScrollAuto();
  } else {
    pageScrollDefault();
  }
});

// /*手動觸發*/
// checkbox.dispatchEvent(new Event('change'));