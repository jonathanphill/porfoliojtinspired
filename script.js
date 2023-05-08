console.log('it works!');
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
        console.log(href);
        sections.forEach((section) => {
        if('#'+section.id === href){
            const featureAnchorChild = featureAnchor.firstElementChild;
            featureAnchorChild.classList.toggle("redbottomStroke");
            section.classList.remove('hidden');
        }else{
    
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
