// gsap.to(img_2_4_1, {
//   scrollTrigger: video_2,
//   x: 500 // 向右移動 500px
// });

const video_2_tl = gsap.timeline({
  // 建立時間軸
  scrollTrigger: {
    trigger: video_2,
    // 以當前選取的物件作為觸發基準
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "bottom",
    toggleActions: "restart none reverse none",
    // markers: true,
  }
});

// video_2_tl
// .fromTo(img_2_4_1, {
//   opacity: "0"
// },{
//   duration: 0.4,
//   display: "block",
//   opacity: "1"
// }).progress(0.2);
// .to(
// chars,
// {
//   duration: 0.5,
//   clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
// })
;