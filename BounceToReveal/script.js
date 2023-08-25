document.addEventListener("DOMContentLoaded", () => {
  const ball = document.querySelector(".ball");
  const logo = document.querySelector(".logo");
  
  let bounceCount = 0;

  ball.addEventListener("animationiteration", () => {
    bounceCount++;
    if (bounceCount === 3) {
      ball.style.animation = 'none';
      ball.style.animation = 'break 0.5s forwards';

      setTimeout(() => {
        logo.style.opacity = '1';
      }, 500);
    }
  });
});
