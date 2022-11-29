const scene_opening = document.getElementById("scene_opening");
const opening_hint = document.getElementById("opening_hint");
const opening_hint_text = document.getElementById("opening_hint_text")
const opening_start = document.getElementById("opening_start");
const opening_start_video = document.getElementById("opening_start_video");
const scene_1_1_text = document.getElementById("scene_1_1_text");

// window.onload = () => {
  scrollDisable();

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

  function playTypeAudio() {
    const audio = document.createElement("audio");
    audio.src = "../music/type.mp3";
    audio.play();
    setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 5000);
  }

  opening_end = () => {
    playTypeAudio()
    scene_opening.style.display="none";
    scene_1_1_text.classList.add("action");
    AOS.refresh();
    setTimeout(() => { scrollEnable(); }, 7000);
  }

  scene_opening.addEventListener('mousemove', (ev) => {
    scene_opening.style.setProperty('--x', ev.offsetX / ev.target.offsetWidth); 
    scene_opening.style.setProperty('--y', ev.offsetY / ev.target.offsetHeight);
  })
// }
