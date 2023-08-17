const bigCircles = document.querySelectorAll('.big-circle, .big-circle2');
let activeCircle = null;

bigCircles.forEach(bigCircle => {
    let smallCircles = bigCircle.querySelectorAll('.kleiner-kreis, .kleiner-kreis2,.kleiner-kreis_SIEBEN , .kleiner-kreis0_SIEBEN, .kleiner-kreis1_SIEBEN, .kleiner-kreis2_SIEBEN, .kleiner-kreis3_SIEBEN, .kleiner-kreis4_SIEBEN');
    let smallCircleTexts = bigCircle.querySelectorAll('.kleiner-kreis-text, .kleiner-kreis-text2, .kleiner-kreis-text0, .kleiner-kreis-text1, .kleiner-kreis-text3, .kleiner-kreis-text4, .kleiner-kreis-text5, .kleiner-kreis-text6, .kleiner-kreis-text7, .kleiner-kreis-text8');

    if (window.innerWidth < 800) {
        smallCircleTexts.forEach(text => {
            text.querySelector('a').style.pointerEvents = 'none';
        });
    }

    let isFirstClick = true;

    smallCircles.forEach(circle => {
        circle.addEventListener('animationend', () => {
            smallCircleTexts.forEach(text => {
                text.querySelector('a').style.pointerEvents = 'auto';
            });
        });
    });

    bigCircle.addEventListener('click', () => {
        if (window.innerWidth < 800) return;

        if (activeCircle === bigCircle) {
            smallCircleTexts.forEach(text => {
                let newOpacity = text.style.opacity === '0' ? '1' : '0';
                text.style.opacity = newOpacity;
                text.querySelector('a').style.pointerEvents = newOpacity === '0' ? 'none' : 'auto';
            });


            
            return;
        }

        if (activeCircle) {
            let prevSmallCircles = activeCircle.querySelectorAll('.kleiner-kreis, .kleiner-kreis2, .kleiner-kreis_SIEBEN , .kleiner-kreis0_SIEBEN, .kleiner-kreis1_SIEBEN, .kleiner-kreis2_SIEBEN, .kleiner-kreis3_SIEBEN, .kleiner-kreis4_SIEBEN');
            let prevSmallCircleTexts = activeCircle.querySelectorAll('.kleiner-kreis-text, .kleiner-kreis-text2, .kleiner-kreis-text0, .kleiner-kreis-text1, .kleiner-kreis-text3, .kleiner-kreis-text4, .kleiner-kreis-text5, .kleiner-kreis-text6, .kleiner-kreis-text7, .kleiner-kreis-text8');

            prevSmallCircles.forEach(circle => {
                circle.style.animationPlayState = 'paused';
                circle.style.opacity = '0';
            });

            prevSmallCircleTexts.forEach(text => {
                text.style.opacity = '0';
                text.querySelector('a').style.pointerEvents = 'none';
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
