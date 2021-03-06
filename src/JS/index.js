const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter');
  $hoverables[i].addEventListener('mouseleave');
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
// function onMouseHover() {
//   TweenMax.to($bigBall, .3, {
//     scale: 4
//   })
// }
// function onMouseHoverOut() {
//   TweenMax.to($bigBall, .3, {
//     scale: 1
//   })
// }
var textWrapper = document.querySelector('.header-1');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


gsap.to(".header-1", {
  duration: 1,
  y: 0,
  opacity: 1,
  stagger: 0.2,
  // ease: "power2"
});
// anime.timeline()
// .add({
//     targets: '.header-1 .letter',
//     translateY: [200,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 2000,
//     delay: (el, i) => 4800 + 50 * i
// });

var textWrapper = document.querySelector('.header-2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline()
// .add({
//     targets: '.header-2 .letter',
//     translateY: [200,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 2000,
//     delay: (el, i) => 6000 + 50 * i
// });

TweenMax.to(".wrapper", 2, {
    top: "-100%",
    ease: Expo.easeInOut,
    delay: 3.6
});

var tl = new TimelineMax();

tl.from(".loader", 1.6, {
    scaleY: "0%",
    y: 80,
    ease: Expo.easeInOut,
    delay: 1,
    transformOrigin:"50% 100%"
});

tl.to(".loader", 1.6, {
    height: "20vh",
    scaleY: "0%",
    ease: Expo.easeInOut,
    transformOrigin:"0% -100%"
});

// TweenMax.to(".box", 2.4, {
// y: "-100%",
// ease: Expo.easeInOut,
// delay: 3.8,
// });

var tl = new TweenMax.staggerFrom(".menu > div", 2, {
    opacity: 0,     
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.2
}, 0.1);

var tl = new TweenMax.staggerFrom(".header", 2, {
    opacity: 0,     
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.2
}, 0.1);

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// create the smooth scroller FIRST!
const smoother = ScrollSmoother.create({
  content: "#content",
  smooth: 1,
  normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
  ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
  effects: true,
  preventDefault: true
 });
 
 gsap.set(".hero-description", {
  yPercent: -150,
  opacity: 1
 });
 
//  let timeline = gsap.timeline();
//  let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
//  let chars = mySplitText.chars;
 
//  chars.forEach((char, i) => {
//   smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
//  });
 
