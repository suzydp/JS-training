/**
 *  TweenMax.to (element, duration as seconds, {
 *      -Tweenmax properties https://greensock.com/docs/v2/TweenMax -
        delay: 1.6,
        y: "100%",
        ease: Expo.easeInOut - https://greensock.com/docs/v2/Easing/Expo
    });
 */

// background delay
TweenMax.to (".bg", 2, {
    width: "100%",
    ease: Expo.easeInOut
});

/**
 *  TweenMax.from (element, duration as seconds, {
 *      -Tweenmax properties https://greensock.com/docs/v2/TweenMax -
        delay: 1.6,
        y: "100%",
        ease: Expo.easeInOut - https://greensock.com/docs/v2/Easing/Expo
    });
 */

// navbar
TweenMax.from (".navbar", 1.5, {
    delay: 2.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

/**
 *  TweenMax.staggerFrom (element, duration as seconds, {
 *      - https://greensock.com/docs/v2/TimelineMax/staggerFrom() -
        delay: 2.8,
        y: "100%",
        ease: Expo.easeInOut - https://greensock.com/docs/v2/Easing/Expo
    }, 0.08); - animation appear each
 */

// social media
TweenMax.staggerFrom (".media ul li", 1.5, {
    delay: 2.8,
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut
}, 0.08);

// text delay
TweenMax.from (".text h1 .hide", 1.5, {
    delay: 1.6,
    y: "100%",
    ease: Expo.easeInOut
});

TweenMax.from (".text p .hide", 1.5, {
    delay: 2,
    y: "100%",
    ease: Expo.easeInOut
});

// desc delay
TweenMax.staggerFrom (".desc ul li", 1.5, {
    delay: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.1)

TweenMax.from (".desc p", 1.5, {
    delay: 2.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from (".scrolldown", 1.5, {
    delay: 2.7,
    opacity: 0,
    y: 200,
    ease: Expo.easeInOut
})

TweenMax.from (".bottomnav", 1.5, {
    delay: 3.2,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
})

TweenMax.from (".bottomnav .next", 1.5, {
    delay: 3.5,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})