console.log('it works!');
const featureItems = document.querySelectorAll('.featureItem');
const sections = document.querySelectorAll('section');
const spans = document.getElementsByTagName('span');
console.log(spans);

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
            // console.log('false: '+ href);
            section.classList.add('hidden');
        }
      });


    })
})

// adding classes to section to restrict content as the widow size is incresed or decreased
// window.addEventListener('resize', (event)=>{
//     if(window.innerWidth >= 600){
//         sections.forEach((section) => {
//             section.classList.remove('wrapper');
//             section.classList.add('wrapper1');
          
//         });
        
//     }
//     else{
//         sections.forEach((section) => {
//           section.classList.add("wrapper");
//            section.classList.remove("wrapper1");
//         });
        
//     }
// })
