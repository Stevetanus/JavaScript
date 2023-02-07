// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// // header 從y: -100%開始，一秒間透過bounce的動畫效果回到原處
// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
// // delay 為延遲時間， stagger 為元素之間的延遲時間
// gsap.from(".right", { duration: 1, x: "-100vw", delay: 1, ease: "power2.in" });
// // power2.in 為內建的動畫速度，很有速度感
// gsap.from(".left", { duration: 1, delay: 1.5, x: "-100%" });
// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 2.5 });
// // 原位置在`transform: translateY(-100%)`，往上elastic出現
// gsap.fromTo(
//   ".button",
//   { opacity: 0, scale: 0, rotation: 720 },
//   { duration: 1, opacity: 1, scale: 1, rotation: 0, delay: 3.5 }
//   // fromTo 要設定起始與結束的狀態，這個按鈕會從無到有，旋轉720度出現
// );

const timeline = gsap.timeline({ defaults: { duration: 1 } }); // 設定default，全部timeline都適用
timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", { opacity: 0, stagger: 0.5 })
  .from(".right", { x: "-100vw", ease: "power2.in" })
  .from(".left", { x: "-100%" }, "<.5") // <.5 指定前一個動畫結束後過0.5秒執行
  .to(".footer", { y: 0, ease: "elastic" })
  .fromTo(
    ".button",
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 }
  );

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  timeline.timeScale(3);
  timeline.reverse();
});
