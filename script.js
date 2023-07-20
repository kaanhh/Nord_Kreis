const bigCircles = document.querySelectorAll('.big-circle'); // Ändern Sie 'querySelector' zu 'querySelectorAll', um alle '.big-circle' Elemente auszuwählen.

bigCircles.forEach(bigCircle => {
  let smallCircles = bigCircle.querySelectorAll('.kleiner-kreis, .kleiner-kreis2');
  let smallCircleTexts = bigCircle.querySelectorAll('.kleiner-kreis-text');

  bigCircle.addEventListener('click', () => {
    smallCircles.forEach(circle => circle.style.animationPlayState = 'running');
    bigCircle.classList.add('clicked'); // Hinzufügen der 'clicked'-Klasse
  });

  smallCircles.forEach((circle, index) => {
    circle.addEventListener('animationend', () => {
      smallCircleTexts[index].style.opacity = '1';
    });
  });
});
