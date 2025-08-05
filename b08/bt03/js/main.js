const texts = [
  "Ăn quả nhớ kẻ trồng cây",
  "Cái nết đánh chết cái đẹp",
  "Cá lớn nuốt cá bé.",
  "Con hư tại mẹ, cháu hư tại bà.",
  "Mèo mù vớ cá rán"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % texts.length;
  document.getElementById("text").textContent = texts[index];
}, 5000);