const featureItems = document.querySelectorAll(".featureItem");
const sections = document.querySelectorAll("section");
const spans = document.querySelectorAll(".featureAnchor span");
const inspireS = document.querySelectorAll(".inspire");
const skillsSection = document.querySelector("#skillSection");

featureItems.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const featureAnchor = event.currentTarget.firstElementChild;
    for (let span in spans) {
      spans[span].className = "";
    }
    const href = featureAnchor.hash;
    sections.forEach((section) => {
      if ("#" + section.id === href) {
        const featureAnchorChild = featureAnchor.firstElementChild;
        featureAnchorChild.classList.toggle("redbottomStroke");
        if (section.id !== "aboutMe") {
          skillsSection.classList.add("hidden");
          skillsSection.style.display = "none";
          section.classList.remove("hidden");
        } else {
          skillsSection.classList.remove("hidden");
          skillsSection.style.display = "flex";
          aboutMe.classList.remove("hidden");
        }
      } else {
        section.classList.add("hidden");
      }
    });
  });
});
const encEmail = "am9uYXRoYW5waGlsbEBnbWFpbC5jb20=";
const contact = document.getElementById("contact");
contact.setAttribute("href", "mailto:".concat(atob(encEmail)));

inspireS.forEach((anchor) => {
  let text = anchor.firstChild.textContent;
  anchor.addEventListener("mouseover", (event) => {
    const text = event.currentTarget.firstElementChild.innerText;
    event.currentTarget.firstElementChild.innerText =
      "checkout their awesome work";
  });
  anchor.addEventListener("mouseleave", (event) => {
    event.currentTarget.firstElementChild.innerText = text;
  });
});

// **********************************************************//
const aboutMeDiv = document.querySelector(".aboutMeDiv");
const aboutMe = document.getElementById("aboutMe");
let timerId = undefined;

function createBlinkDiv() {
  let top = Math.random() * 300;
  let left = Math.random() * 600;
  const blink = document.createElement("div");
  blink.id = "blink";
  blink.style.top = top + "px";
  blink.style.left = left + "px";
  aboutMeDiv.appendChild(blink);
}

function deleteBlink(name) {
  clearInterval(timerId);
  aboutMeDiv.innerHTML = "";
  aboutMeDiv.innerHTML = `
     <p>Hi I am Jonathan, I am a Web Developer creating websites pixel by pixel, box by box</p>
    `;
}

aboutMe.addEventListener("mouseenter", () => {
  timerId = setInterval(createBlinkDiv, 200);
  setTimeout(() => {
    clearInterval(timerId);
  }, 30000);
});
aboutMe.addEventListener("mouseleave", deleteBlink);

// **********************************************************//

const injectCursorPosition = ({ x, y }) => {
  document.documentElement.style.setProperty("--x", Math.round(x));
  document.documentElement.style.setProperty("--y", Math.round(y));
};

document.body.addEventListener("pointermove", injectCursorPosition);

// ***************************************************************
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = 459;

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};
// when I click left move slides to the left
prevButton.addEventListener("click", () => {
   const currentSlide = track.querySelector(".current-slide");
   const prevSlide = currentSlide.previousElementSibling;
   const currentDot = dotsNav.querySelector(".current-slide");
   const prevDot = currentDot.previousElementSibling;
   const prevIndex = slides.findIndex((slide) => slide === prevSlide);
   moveToSlide(track, currentSlide, prevSlide);
   updateDots(currentDot, prevDot);
   hideShowArrows(slides, prevButton, nextButton, prevIndex);
});
// when I click right move slides to the right
nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});
// when I click the nav indicators, move to that slide
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

// **********************************************************************