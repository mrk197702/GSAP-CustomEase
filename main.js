var tl = new TimelineLite();
var tl2 = new TimelineLite();
var bg = $('#bg');
var img = $('#img');
//var easing = "M0,0 C0,0.27 0.128,0.774 0.536,0.922 0.713,0.986 0.708,0.98 1,1";
//var easing = "M0,0 C0.25,0.27 0,0.98 1,1";
var easing = "M0,0 C0,0.98 0.47,1 1,1";
tl.add(TweenMax.to(bg,1.3,{width:'100%', ease: CustomEase.create("custom", easing)}));
tl.add(TweenMax.to(bg,1.3,{left:'100%', ease: CustomEase.create("custom", easing)}));
tl2.add(TweenMax.to(img,1.3,{opacity:1, ease:Power4.easeInOut, delay:1.3}));
