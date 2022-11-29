const scene_1_2 = document.getElementById("scene_1_2");
const scene_1_3 = document.getElementById("scene_1_3");
const img_1_2_2 = document.getElementById("img_1_2_2");
const img_1_2_3 = document.getElementById("img_1_2_3");
const img_1_3_2 = document.getElementById("img_1_3_2");

gsap.to(img_1_2_2 ,{
  scrollTrigger: {
    trigger: scene_1_2,
    start: "20% center",
    toggleActions: "play reverse none reverse",
  },
  opacity: 1,
  duration: 0.5
});
gsap.to(img_1_2_3 ,{
  scrollTrigger: {
    trigger: scene_1_2,
    start: "60% center",
    toggleActions: "play reverse none reverse",
  },
  opacity: 1,
  duration: 0.5
});

gsap.to(img_1_3_2 ,{
  scrollTrigger: {
    trigger: scene_1_3,
    start: "50% center",
    toggleActions: "play reverse none reverse",
  },
  opacity: 1,
  duration: 0.5
});