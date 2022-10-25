window.onload = () => {
  gsap.registerPlugin(ScrollTrigger);

  const logo = document.getElementById("logo");

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
        markers: true,
      },
      onUpdate: render,
    });
  
    videoInfo.images[0].onload = () => {
      canvasContext.drawImage(videoInfo.images[0], 0, 0);
    };
  
    render = () => {
      canvasContext.drawImage(videoInfo.images[videoInfo.currentFrame], 0, 0);
    }
  }
  
  const demoVideo1Info = {
    totalFrames: 197,
    totalTime: 7,
    images: [],
    currentFrame: 0,
    currentImage: (index) =>
      `../img/scene-1-${index}.jpg`,
  };
  
  animateOnScroll("video-1", demoVideo1Info);
}