// initalize dom classes and id
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll("nav a[href^='#']");
const menu = document.querySelectorAll(".navbar-menu")
const burger = document.querySelectorAll(".navbar-burger")
const close = document.querySelectorAll(".navbar-close")
const backdrop = document.querySelectorAll(".navbar-backdrop")
const mobileMenu = document.querySelectorAll("#mobile-menu a[href^='#']")




document.addEventListener('DOMContentLoaded', ()=>{
    handla()
    window.addEventListener('scroll', handla)

    if(burger.length && menu.length){
        handaleMobileToogle(burger, menu);
    }
    if(close.length && backdrop.length && menu.length){
        handelclose(close, menu, backdrop)
    }
    if(mobileMenu.length && navLinks.length && menu.length){
       handleMobileMenuLinkClicks(mobileMenu, navLinks, menu)
    }
});
function handaleMobileToogle(burger, menu){
    burger.forEach(b =>{
        b.addEventListener('click', ()=>{
            menu.forEach(m=> m.classList.toggle("hidden"));
        });
    });
}


function handelclose(close, menu, backdrop){
    close.forEach(c => {
        c.addEventListener('click', ()=>{
            menu.forEach(m => m.classList.add('hidden'));
        });
    });

    backdrop.forEach(b => {
        b.addEventListener('click', ()=>{
            menu.forEach(m => m.classList.add('hidden'));
        });
    });
}


function handleMobileMenuLinkClicks(mobileMenu, navLinks, menu){
    mobileMenu.forEach(anchor =>{
        anchor.addEventListener('click',()=>{
            navLinks.forEach((link) => link.classList.remove('active'));
            const targatelink = document.querySelector(`nav a[href="${this.getAttribute('href')}"]`)
            if(targatelink){
                targatelink.classList.add('active');
            }
            menu.forEach(m => m.classList.toggle('hidden'));
        });
    });
}








function handla(){
    const section = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll("nav a[href^='#']");
    secactivelink(section, navLinks);
}

function secactivelink(section, naveLink){
   let inde = section.length;
   while(--inde && window.scrollY + 400 < section[inde].offsetTop);{}
    naveLink.forEach((link) => link.classList.remove("active"))
    if(naveLink[inde]){
        naveLink[inde].classList.add("active")
    }
}