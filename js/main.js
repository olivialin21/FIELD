window.onload = () => {
  AOS.init();
  parallaxInstance = new Parallax(document.getElementById("opening_hint"), { 
    // 參數設定[註1]
  });
  gsap.registerPlugin(ScrollTrigger);

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
      `./img/scene_1_${index}.jpeg`,
  };

  const demoVideo2Info = {
    totalFrames: 215,
    totalTime: 7,
    images: [],
    currentFrame: 1,
    currentImage: (index) =>
      `./img/scene_2_${index}.jpg`,
  };
  
  // animateOnScroll("video_1", demoVideo1Info);
  animateOnScroll("video_2", demoVideo2Info);

  const img_2_1 = document.querySelector(".img_2_1")
  function imgSwitch() {
    const switchPoint = (img_2_1.offsetTop - 200) ;
    if (window.pageYOffset > switchPoint) {
      img_2_1.classList.add('switch');
    } else {
      img_2_1.classList.remove('switch');
    }
  }
  window.addEventListener('scroll', imgSwitch);
}