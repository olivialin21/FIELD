const scene_1_2 = document.getElementById("scene_1_2");
const scene_1_3 = document.getElementById("scene_1_3");

gsap.to(scene_1_2 ,{
  scrollTrigger: {
    trigger: scene_1_2,
    start: "-10% center",
    toggleActions: "restart none reverse none",
  },
  backgroundImage: 'url("../img/img_1_2_1.jpg")',
  duration: 0
});
gsap.to(scene_1_2 ,{
  scrollTrigger: {
    trigger: scene_1_2,
    start: "30% center",
    toggleActions: "restart none reverse none",
  },
  backgroundImage: 'url("../img/img_1_2_2.jpg")',
  duration: 0
});
gsap.to(scene_1_2 ,{
  scrollTrigger: {
    trigger: scene_1_2,
    start: "60% center",
    toggleActions: "restart none reverse none",
  },
  backgroundImage: 'url("../img/img_1_2_3.jpg")',
  duration: 0
});

gsap.to(scene_1_3 ,{
  scrollTrigger: {
    trigger: scene_1_3,
    start: "50% center",
    // markers: true,
    toggleActions: "restart none reverse none",
  },
  backgroundImage: 'url("../img/img_1_3_2.jpg")',
  duration: 0
});