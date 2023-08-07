const bigCircles = document.querySelectorAll('.big-circle, .big-circle2');
let activeCircle = null;

bigCircles.forEach(bigCircle => {
  let smallCircles = bigCircle.querySelectorAll('.kleiner-kreis, .kleiner-kreis2,.kleiner-kreis_SIEBEN , .kleiner-kreis0_SIEBEN, .kleiner-kreis1_SIEBEN, .kleiner-kreis2_SIEBEN, .kleiner-kreis3_SIEBEN, .kleiner-kreis4_SIEBEN');
  let smallCircleTexts = bigCircle.querySelectorAll('.kleiner-kreis-text, .kleiner-kreis-text2');
  let isFirstClick = true; 

  bigCircle.addEventListener('click', () => {
    if (activeCircle === bigCircle) {
      smallCircleTexts.forEach(text => {
        text.style.opacity = text.style.opacity === '0' ? '1' : '0';
      });
      return; 
    }

    if (activeCircle) {
      let prevSmallCircles = activeCircle.querySelectorAll('.kleiner-kreis, .kleiner-kreis2, .kleiner-kreis_SIEBEN , .kleiner-kreis0_SIEBEN, .kleiner-kreis1_SIEBEN, .kleiner-kreis2_SIEBEN, .kleiner-kreis3_SIEBEN, .kleiner-kreis4_SIEBEN');
      let prevSmallCircleTexts = activeCircle.querySelectorAll('.kleiner-kreis-text, .kleiner-kreis-text2');

      prevSmallCircles.forEach(circle => {
        circle.style.animationPlayState = 'paused';
      });

      prevSmallCircleTexts.forEach(text => {
        text.style.opacity = '0';
      });

      activeCircle.classList.remove('clicked');
    }

    smallCircles.forEach(circle => {
      circle.style.animation = ''; 
      circle.style.animationPlayState = 'running';
    });

    smallCircleTexts.forEach(text => {
      if (!isFirstClick) {
        text.style.transitionDelay = '0s';
      }
      text.style.opacity = '1';
    });

    bigCircle.classList.add('clicked');
    activeCircle = bigCircle;
    isFirstClick = false; 
  });

  bigCircle.addEventListener('mouseover', () => {
    bigCircle.style.backgroundColor = '#8befd3';
    bigCircle.style.color = '#e95420'; 
    
  });

  bigCircle.addEventListener('mouseout', () => {
    bigCircle.style.backgroundColor = ''; 
  });
});
