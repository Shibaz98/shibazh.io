const open = document.getElementById("button1");
const close = document.querySelector(".close-button");
const modal1 = document.querySelector(".modal1");

const open2= document.getElementById("button2");
const modal2 = document.querySelector(".modal2");
const close2= document.querySelector(".close-button2");

const open3 = document.getElementById("button3");
const modal3  = document.querySelector(".modal3");
const close3 = document.querySelector(".close-button3")

/* Modal 1*/ 
open.addEventListener('click', () => {
    modal1.showModal(); 
})

close.addEventListener('click', () =>{
    modal1.close();
})


/*Modal 2*/ 

open2.addEventListener('click', () => {
    modal2.showModal(); 
})

close2.addEventListener('click', () =>{
    modal2.close();
})


/* Modal 3*/

open3.addEventListener('click', () =>{
    modal3.showModal();
})

close3.addEventListener('click', () =>{
    modal3.close(); 
})


/* drop down menu */ 

const primaryNav = document.querySelector('.nav_bar');
const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelectorAll('.navlink');



navToggle.addEventListener('click',() =>{
    const visibility = primaryNav.getAttribute('data-visible')
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded',true);
    } else if (visibility === 'true'){
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded',false)
    }

    
})

navLinks.forEach(function(link) {
    link.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');

        if (visibility === "false") {
            primaryNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
        } else if (visibility === 'true') {
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }
    });
});


