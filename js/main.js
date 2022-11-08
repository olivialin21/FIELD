window.onload = () => {
  AOS.init();

  gsap.registerPlugin(ScrollTrigger);

  const logo = document.getElementById("logo");

  gsap.fromTo(logo, {opacity: 0}, {opacity: 1, duration: 3,delay: 1});

  animateOnScroll = (canvasID, videoInfo) => {
    const canvas = document.getElementById(canvasID);
    const canvasContext = canvas.getContext("2d");
  
    canvas.height = screen.height;
    canvas.width = screen.width;
  
    for (let i = 1; i <= videoInfo.totalFrames; i++) {
      const img = new Image();
      img.src = videoInfo.currentImage(i);
      videoInfo.images.push(img);
    }
  
    gsap.to(videoInfo, {
      currentFrame: videoInfo.totalFrames,
      snap: "currentFrame",
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top",
        end: `bottom+=${videoInfo.totalFrames * videoInfo.totalTime}`,
        scrub: 2,
        pin: true,
        // markers: true,
      },
      onUpdate: render,
    });
  
    videoInfo.images[0].onload = () => {
      canvasContext.drawImage(videoInfo.images[0], 0, 0, screen.width, screen.height);
    };
  
    function render() {
      canvasContext.drawImage(videoInfo.images[videoInfo.currentFrame], 0, 0, screen.width, screen.height);
    }
  }
  
  const demoVideo1Info = {
    totalFrames: 130,
    totalTime: 7,
    images: [],
    currentFrame: 1,
    currentImage: (index) =>
      `./img/scene-1-${index}.jpeg`,
  };

  const demoVideo2Info = {
    totalFrames: 215,
    totalTime: 7,
    images: [],
    currentFrame: 1,
    currentImage: (index) =>
      `./img/scene-2-${index}.jpg`,
  };
  
  animateOnScroll("video-1", demoVideo1Info);
  animateOnScroll("video-2", demoVideo2Info);

  const img_2_1 = document.querySelector(".img-2-1")
  function imgSwitch() {
    const moveToNextAt = (img_2_1.offsetTop * 2 / 3) ;
    if (window.scrollY > moveToNextAt) {
      img_2_1.classList.add('switch');
    } else {
      img_2_1.classList.remove('switch');
    }
  }
  window.addEventListener('scroll', imgSwitch);

  const story_2 = document.querySelector(".story-2")
  const img_2_4_1 = document.querySelector(".img-2-4-1")
  function imgShow() {
    const moveToNextAt = story_2.offsetTop;
    if (window.scrollY > moveToNextAt && window.scrollY < 3300) {
      img_2_4_1.classList.add('show');
    } else {
      img_2_4_1.classList.remove('show');
    }
    // console.log(window.scrollY);
  }
  window.addEventListener('scroll', imgShow);

}