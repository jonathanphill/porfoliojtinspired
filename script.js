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
