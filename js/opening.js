const scene_opening = document.getElementById("scene_opening");
const opening_hint = document.getElementById("opening_hint");
const opening_hint_text = document.getElementById("opening_hint_text")
const opening_start = document.getElementById("opening_start");
const opening_start_video = document.getElementById("opening_start_video");

window.onload = () => {
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

  // call this to Disable
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);

  // call this to Enable
  scene_opening.addEventListener('click', function () {
    gsap.fromTo(opening_hint, {opacity: 1},{opacity: 0, duration: 2});
    setTimeout(function(){
      opening_hint.style.display="none";
      opening_start.style.display="flex";
      gsap.fromTo(opening_start_video, {opacity: 0},{opacity: 1, duration: 2});
      opening_start_video.play();
    },2000);
  }, true);

  opening_hint_text.onclick = (e) => {
    e.preventdefault();
  }

  opening_end = () => {
    scene_opening.style.display="none";
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }
}
