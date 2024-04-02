gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector("window");

/* SMOOTH SCROLL */

const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});


// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)

$(scroller).on("scroll", ScrollTrigger.update);



jQuery(window).on("load", function () {



  
      let tl = gsap.timeline({});

      tl.startTime(3);

      tl.from(".h3 .subtitle > *", 1.2,{
        y: 300,
        ease: "power2. inOut",
        stagger: {
            amount: .1,
        },
       
     },"-=0.4");


     tl.from(".h3 .title span span",1.2,{
        y: 300,
        ease:"power2. inOut",
        stagger: {
            amount: .1,
        },
        
     },"-=0.5");

     tl.from(".divider",.6,{
        width: "0%",
        ease:"power2. inOut",
        
     },"-=0.6");

     tl.from(".ux-row",.8,{
      
      y:80,
      opacity:"0",
      ease:"power2. inOut",
      
   },"-=0.7");



    });


    //graphic design animaton

    gsap.registerPlugin(ScrollTrigger);

    let gTl = gsap.timeline({

      scrollTrigger:{

        trigger:".h4",
        start:"top bottom",
        end:"bottom center",
        scrub:false,
        // markers:true
      }
    });


   gTl.from(".h4 .subtitle span span",1.6,{
      y: 300,
      ease: "power2. inOut",
      stagger: {
          amount: .3,
      },
     
   },"-=.8");


   gTl.from(".h4 .title span span", 1.6,{
    y: 300,
    ease: "power2. inOut",
    stagger: {
        amount: .3,
    },
   
 },"-=1");



 gTl.from(".gallery-wrap > *", 1.6,{
  y: 100,
  delay:.3,
  opacity:0,
  ease: "power2. inOut",
  stagger: {
      amount: 2,
  },
 
},"-=1.2");


   //  graphic scroll Animation








////////////////////////////////////
////////////////////////////////////

  let pinWrap = document.querySelector(".gallery-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".gallery-wrap", {
    scrollTrigger: {
      scrub: true,
      trigger: "#galleryPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      markers:false,
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  // progress bar

  gsap.registerPlugin(ScrollTrigger);
  gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: { scrub: 0.3 }
  });


  // Pinning and horizontal scrolling

  let bottomTl = gsap.timeline({

    scrollTrigger:{
  
      trigger:".bottom",
      start:"center bottom",
      end:"bottom center",
      scrub:false,
      markers:false,
    }
  });
  
  
  bottomTl.from(".h5 .bottom-wrapper span span", 1.6,{
    y: 300,
    ease: "power2. inOut",
    stagger: {
        amount: .3,
    },
   
  },"-=.8");
  
  bottomTl.from(".h5 .button-wrapper a", 1.6,{
    y: 300,
    ease: "power2. inOut",
   
  },"-=1");
  

  let footerTl = gsap.timeline({

    scrollTrigger:{
  
      trigger:"footer",
      start:"center bottom",
      end:"bottom center",
      scrub:false,
      markers:false,
    }
  });
  
  footerTl.from(".top-first > span", 1.6,{
    y: 300,
    ease: "power2. inOut",
    stagger: {
        amount: .3,
    },
   
  },"-=.8");
  
  footerTl.from(".top-second span", 1.6,{
    y: 300,
    ease: "power2. inOut",
    stagger: {
        amount: .3,
    },
   
  },"-=1");
  
  footerTl.from(".footer-bot span", 1.6,{
    y: 300,
    ease: "power2. inOut",
    stagger: {
        amount: .3,
    },
   
  },"-=1.2");




  

  $(".h5").hover(function(){


    $(".backimg").css({"opacity":"0.4","transform":"scale(1.1)"});
    }, function(){
      $(".backimg").css({"opacity":"0","transform":"scale(1.3)"});


  });




// -- Fancybox --

$(document).ready(function() {

  // add all to same gallery
  $(".gallery a").attr("data-fancybox","mygallery");
  // assign captions and title from alt-attributes of images:
  $(".gallery a").each(function(){
    $(this).attr("data-caption", $(this).find("img").attr("alt"));
    $(this).attr("title", $(this).find("img").attr("alt"));
  });
  // start fancybox:
	$(".gallery a").fancybox();
});
