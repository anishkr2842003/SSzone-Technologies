//sticky navigation bar start

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

//sticky navigation bar end

// toggle navigation bar start

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};
// toggle navigation bar end

//mouse follower start
function mousefollow() {
  if (window.innerWidth > 700) {
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.5,
    });
  } else {
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.5,
      display: none,
    });
  }
}
mousefollow();
//mouse follower end

// mouse with magnet effect start
Shery.makeMagnet(
  ".logo, .navlist li, #my_name, .social a, .h-btn, .btn, .m-text, .send-btn, .scroll-top, .whatsapp_float" /* Element to target.*/,
  {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  }
);
// mouse with magnet effect end

// typing text effect start
var typing = new Typed("#typing-text", {
  strings: [
    "App Developer",
    "Web Developer",
    "Frontend Developer",
    "Freelancer",
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});
// typing text effect end

