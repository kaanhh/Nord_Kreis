    const bigCircle = document.querySelector('.big-circle');
    const smallCircles = document.querySelectorAll('.kleiner-kreis, .kleiner-kreis2');

    bigCircle.addEventListener('click', () => {
      smallCircles.forEach(circle => circle.style.animationPlayState = 'running');
    });

    const smallCircleTexts = document.querySelectorAll('.kleiner-kreis-text');

    smallCircles.forEach((circle, index) => {
    circle.addEventListener('animationend', () => {
    smallCircleTexts[index].style.opacity = '1';
      });
    });

    bigCircle.addEventListener('click', () => {
    smallCircles.forEach(circle => circle.style.animationPlayState = 'running');
    bigCircle.classList.add('clicked'); // Hinzufügen der 'clicked'-Klasse
    });
