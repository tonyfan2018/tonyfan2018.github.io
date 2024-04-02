// page load animation

jQuery(window).on("load", function () {

      
    // Wrap every letter
    const textRevealElements = document.querySelectorAll(".reveal-text");
  
    textRevealElements.forEach((element) => {
      element.innerHTML = element.textContent.replace(
        /([-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]+)/g,
        '<div class="word">$1</div>'
      );
  
      let words = element.querySelectorAll(".word");
      words.forEach((word) => {
        word.innerHTML = word.textContent.replace(
          /[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g,
          "<div class='perspective'><div class='letter'><div>$&</div></div></div>"
        );
      });
  
      const letters = element.querySelectorAll(".letter");
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          toggleActions: "restart none none reset",
          paused: true,
          reversed: true 
        }
      });
      tl.set(element, { autoAlpha: 1 });
      

      tl.fromTo(
        letters,
        1.6,
        {
          transformOrigin: "center",
          rotationY: 90,
          x: 30
        },
        {
          rotationY: 0.1,
          x: 0,
          stagger: 0.025,
          ease: CustomEase.create("custom", "M0,0 C0.425,0.005 0,1 1,1 ")
        }
      );

      tl.to(".loader",.2,{
       
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        ease: "power2.out",
    });
      

    });

     // Wrap every letter
     

    setTimeout(function () {
       
     $(".loader").css({"visibility":"hidden"});
     $(".navbar").css({"top":"0px"});
     $("body").removeClass("bodyfixed"); 


// hero section animation

    gsap.from(".play-wrapper", .8, {
        x:100,
        opacity:0,
        ease: "power4 . inOut",
        stagger:0.3
    });


    gsap.from(".play-text .content",.4, {
        y:100,
        ease: "power4 . inOut",
        stagger: {
            amount: 0.3
          },
    });

    gsap.from(".row-wrapper > .h1 > div:first-child ", .8, {
        x: 320,
        opacity:0,
        ease: "power4 . inOut",
        delay:.2,
        stagger:{
            amout: 0.3,
        },
    });

    gsap.from(".row-wrapper > .h1 > span:last-child ", .8, {
        x: -320,
        opacity:0,
        ease: "power4 . inOut",
        delay:.4,

    });

    gsap.from(".h2 .content",.4, {
        y:100,
        rotation:32,
        ease: "power4 . inOut",
        delay:.6,
        stagger: {
            amount: 0.2
          },
    });

    gsap.from(".h2 div:last-child",.4, {
        x:100,
        opacity:0,
        ease: "power4 . inOut",
        delay:.8,
        stagger: {
            amount: 0.2
          },
    });

    
    gsap.from(".btns-row .btn", .4, {
        y: 60,
        ease: "power4 . inOut",
        delay:1.1,
    });

    gsap.from(".hr", .4, {
      width: "0",
      ease: "power4 . inOut",
      delay:1.2,
  });
    
    
    gsap.from(".social-icon .icons", .4, {
        y: 60,
        ease: "power4 . inOut",
        delay:1.3,

    });

    // gsap.to(".roll-text", .4, {
    //     y: "-=10rem",
        
       
    //     ease: "power4 . inOut",
    //     delay:2,
    //     repeat:-1,
       
    // });
    
    
    // gsap.to(".roll-text > span", {
    //     keyframes: {
    //      "0%":   { top: "0rem"},
    //      "25%":   { top: "-9rem"},
    //      "50%":   { top: "-18rem"},
    //      "75%":  { top: "-27rem"},
    //      "100%": { top: "-36rem" },
    //       easeEach: "power4 . inOut" // ease between keyframes
    //     },
    //     delay:2,
    //     duration:6,
    //     repeat:-1
    //     // ease: 'none' 
    //    })
       
    //    hero section animation

}, 2000);

  });

// page load animation



// navigation bar scroll animation

var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
   
        $('.navbar').css({"top":"-88px"});
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
    
      $('.navbar').css({"top":"0px"});
        up = !up;
    }
    mypos = newscroll;
});




// navigation bar scroll animation

$("a").hover(function(){
    $(".cursor").addClass("cursor-hover");
    }, function(){
    $(".cursor").removeClass("cursor-hover");
  });


  $(".ux-row").hover(function(){

    $(".cursor").addClass("nav-hover");
    }, function(){
    $(".cursor").removeClass("nav-hover");
  });




// cursor hover animation
const link= document.querySelectorAll(".play-wrapper");
const cursor = document.querySelector(".cursor");
// const audio = document.querySelector("audio");

const animateit = function (e) {
  const span = this.querySelector("span");
  const { offsetX: x, offsetY: y } = e;
  const { offsetWidth: width, offsetHeight: height } = this;
  console.log({ x, y, width, height });
  console.log(link);
  const move = 30;
  const xMove = (x / width) * (move * 2) - move;
  const yMove = (y / height) * (move * 2) - move;

  span.style.transform = `translate3d(${xMove}px, ${yMove}px, 0px)`;

//   if (this.className.includes("last")) {
//     audio.play();
//     cursor.style.backgroundImage = `url('https://media4.giphy.com/media/lJNoBCvQYp7nq/giphy.gif?cid=ecf05e47u8n07s3khsvycn36s5r8d59l4y7wlc9m91oywxlv&rid=giphy.gif')`;
//   }

  if (e.type === "mouseleave") {
    span.style.transform = "";
    // cursor.style.backgroundImage = "none";
    // audio.pause();
  }
};

const editCursor = (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};



link.forEach((b) => b.addEventListener("mousemove", animateit));
link.forEach((b) => b.addEventListener("mouseleave", animateit));
window.addEventListener("mousemove", editCursor);

// cursor hover animation





// controlit.click(function () {
//     menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
//   });



const tl = gsap.timeline({paused:true});
const navBtn = document.getElementById("menu-item");
const navbar = $(".navbar");   

// const bar1 = $(".burger-lines span:nth-child(1)");
// const bar2 = $(".burger-lines span:nth-child(2)");
// const bar3 = $(".burger-lines span:nth-child(3)");

// menuToggle = gsap.timeline ({paused:true},{reversed:true});

// menuToggle
// .add("join")
// .to(bar1, 0.1, { y: 6, ease: Power2.easeIn }, "join")
// .to(bar3, 0.1, { y: -6, ease: Power2.easeIn }, "join")
// .to(bar2, 0.1, { opacity: 0 })
// .add("spin", "-=.2")
// .to(bar1, 0.3, { rotation: 135, ease: "power1.inOut"}, "spin", )
// .to(bar2, 0.3, { rotation: 135, ease:  "power1.inOut"}, "spin",)
// .to(bar3, 0.3, { rotation: 225, ease:  "power1.inOut"}, "spin",);


const animateOpenNav = ()=>{
   
    tl.to(
        ".navbar",
       
        {
            background: "transparent",
            ease: "none",
        },
      
    );

    tl.to("#nav-container",.2,{
    
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power2.out",
    });

    tl.to(
        "#menu-item .burger-lines span",
        0.2,
        {
            background: "#fff",
            ease: "power2. inOut",
        },
        "-=0.1"
    );

}

var isClicked = false;

const openNav = () => {

    animateOpenNav();

    navBtn.onclick = function (e){
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());

        if(isClicked==false){

            $("body").css({"overflow":"hidden"});

            isClicked = true;
        }else{
            $("body").css({"overflow":"scroll"});
    
            isClicked = false;
        }

        
    }
    // $(navBtn).on("click", function (){
    //     console.log("works");
    //     navBtn.classList.toggle("active");
    //     tl.reversed(!tl.reversed());
        
    // });
    
}

openNav();



tl.from(".nav-link > a",0.6,{

    top:90,
    ease: "power2. inOut",
    stagger: {
        amount: .3,
    },
},
"-=0.4"

);

tl.from(".footer-links .btn-outlined",0.6,{

    top:90,
    ease: "power2. inOut",
    stagger: {
        amount: .3,
    },
},
"-=0.5"

);

tl.to(".nav-footer .footer-links > a",0.3,{

    top:0,
    ease: "power2. inOut",
    stagger: {
        amount: .1,
    },
},
"-=0.6"



).reverse();
