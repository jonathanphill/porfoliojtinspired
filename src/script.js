console.log('it works!');
const featureAnchors = document.querySelectorAll('.featureAnchor');
const sections = document.querySelectorAll('section');

featureAnchors.forEach((anchor)=>{
    anchor.addEventListener('click', (event)=>{
      const href = event.target.hash;
      sections.forEach((section) => {
        if('#'+section.id === href){
            section.classList.remove('hidden');
        }else{
            section.classList.add('hidden');
        }
      });

    })
})
