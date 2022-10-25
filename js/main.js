window.onload = () => {
  gsap.registerPlugin(ScrollTrigger);

  const logo = document.getElementById("logo");
  const video_1 = document.getElementById("video-1");
  const video_2 = document.getElementById("video-2");

  gsap.fromTo(logo, {opacity: 0}, {opacity: 1, duration: 3,delay: 1});

  animateOnScroll = (canvasID, videoInfo) => {
    const canvas = document.getElementById(canvasID);
    const canvasContext = canvas.getContext("2d");
  
    canvas.height = screen.height;
    canvas.width = screen.width;
  
    for (let i = 0; i <= videoInfo.totalFrames; i++) {
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
        //   markers: true,
      },
      onUpdate: render,
    });
  
    videoInfo.images[0].onload = () => {
      canvasContext.drawImage(videoInfo.images[0], 0, 0);
    };
  
    function render() {
      canvasContext.drawImage(videoInfo.images[videoInfo.currentFrame], 0, 0);
    }
  }
  
  const demoVideo1Info = {
    totalFrames: 440,
    totalTime: 7,
    images: [],
    currentFrame: 0,
    currentImage: (index) =>
      `./Dognut/Dognut${index.toString().padStart(3, "0")}.jpg`,
  };
  const demoVideo2Info = {
    totalFrames: 562,
    totalTime: 9,
    images: [],
    currentFrame: 0,
    currentImage: (index) =>
      `./TestVideoFrames/2022-06-12 22-39-07converted${index
        .toString()
        .padStart(3, "0")}.jpg`,
  };
  
  animateOnScroll("demo_video1", demoVideo1Info);
  animateOnScroll("demo_video2", demoVideo2Info);
}