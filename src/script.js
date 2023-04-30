console.log('it works!');
const featureItems = document.querySelectorAll('.featureItem');
const sections = document.querySelectorAll('section');
const spans = document.getElementsByTagName('span');
console.log(spans);

featureItems.forEach((link)=>{
    link.addEventListener('click', (event)=>{
        const featureAnchor = event.currentTarget.firstElementChild;
        for(let span in spans){
            spans[span].className="";
        }
        const href = featureAnchor.hash;
        sections.forEach((section) => {
        if('#'+section.id === href){
            const featureAnchorChild = featureAnchor.firstElementChild;
            featureAnchorChild.classList.toggle("redbottomStroke");
            section.classList.remove('hidden');
        }else{
            // console.log('false: '+ href);
            section.classList.add('hidden');
        }
      });


    })
})
