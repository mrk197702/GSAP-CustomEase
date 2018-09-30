var tl = new TimelineLite();
var tl2 = new TimelineLite();
var bg = $('#bg');
var img = $('#img');
tl.add(TweenMax.to(bg,1.3,{width:'100%', ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.103,0.877 0.41,0.928 0.654,0.968 0.818,0.968 1,0.968")}));
tl.add(TweenMax.to(bg,1.3,{left:'100%', ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.103,0.877 0.41,0.928 0.654,0.968 0.818,0.968 1,0.968")}));
tl2.add(TweenMax.to(img,1.3,{opacity:1, ease:Power4.easeInOut, delay:1.3}));
