
const featureItems = document.querySelectorAll('.featureItem');
const sections = document.querySelectorAll('section');
const spans = document.getElementsByTagName('span');
const inspireS = document.querySelectorAll(".inspire");




featureItems.forEach((link)=>{
    link.addEventListener('click', (event)=>{
        event.preventDefault();
        const featureAnchor = event.currentTarget.firstElementChild;
        for(let span in spans){
            spans[span].className="";
        }
        const href = featureAnchor.hash;
        sections.forEach((section) => {
        if('#'+section.id === href){
            const featureAnchorChild = featureAnchor.firstElementChild;
            featureAnchorChild.classList.toggle("redbottomStroke");
            if(section.id !=='aboutMe'){
                skillsSection.classList.add('hidden');
                skillsSection.style.display='none';
                section.classList.remove("hidden");
            }else{
                skillsSection.classList.remove("hidden");
                skillsSection.style.display = "flex";
                aboutMe.classList.remove("hidden");
            }
            
        }
        else{
            section.classList.add('hidden');
        }
      });


    })
})
const encEmail = "am9uYXRoYW5waGlsbEBnbWFpbC5jb20=";
const contact = document.getElementById("contact");
contact.setAttribute("href", "mailto:".concat(atob(encEmail)));


inspireS.forEach((anchor)=>{
    let text = anchor.firstChild.textContent;
    anchor.addEventListener('mouseover', (event)=>{
        const text = event.currentTarget.firstElementChild.innerText;
        event.currentTarget.firstElementChild.innerText= "checkout their awesome work";
        
        
    })
    anchor.addEventListener("mouseleave", (event) => {
      event.currentTarget.firstElementChild.innerText =text;
    });
    
})

// **********************************************************//
const aboutMeDiv = document.querySelector('.aboutMeDiv');
const aboutMe = document.getElementById('aboutMe');
let timerId= undefined;

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
    aboutMeDiv.innerHTML="";
    aboutMeDiv.innerHTML = 
    `
     <p>Hi I am Jonathan, learning Web, pixel by pixel and box by box</p>
    `;
}


aboutMe.addEventListener('mouseenter',()=>{
    timerId = setInterval(createBlinkDiv, 200);
    setTimeout(() => {
      clearInterval(timerId);
    }, 30000);
    
})
aboutMe.addEventListener("mouseleave", deleteBlink);


// **********************************************************//


const cube = document.querySelector(".cube");
const skillsSection = document.querySelector("#skillSection");
let mouseX = 0;
let mouseY = 0;
const rotationValue = 320;

const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  rotateX = -(mouseY / skillsSection.clientHeight - 0.4) * rotationValue;
  rotateY = (mouseX / skillsSection.clientWidth - 0.4) * rotationValue;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

skillsSection.addEventListener("mousemove", handleMouseMove);

// .cube{
//     position: relative;
//         transform-style: preserve-3d;
//         transform: rotateX(-10deg) rotateY(-45deg);
// }
skillsSection.addEventListener("mouseleave", ()=>{
    cube.style.position="realtive"
    cube.style.transformStyle = "preserve-3d"; 
    cube.style.transform = "rotateX(-10deg) rotateY(-45deg)"; 
});
