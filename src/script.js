console.log('it works!');
const featureAnchors = document.querySelectorAll('.featureAnchor');
const sections = document.querySelectorAll('section');
const spans = document.getElementsByTagName('span');
console.log(spans);

featureAnchors.forEach((anchor)=>{
    anchor.addEventListener('click', (event)=>{
        // console.log(event.currentTarget);
        for(let span in spans){
            spans[span].className="";
        }
        const href = event.currentTarget.hash;
        sections.forEach((section) => {
        if('#'+section.id === href){
            // console.log('true: ' + href);
            event.target.classList.toggle("redbottomStroke");
            section.classList.remove('hidden');
        }else{
            // console.log('false: '+ href);
            section.classList.add('hidden');
        }
      });


    })
})
