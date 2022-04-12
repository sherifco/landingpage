/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const ul =document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildTheNav(){

    //for loop to reach to sections attribute & 
    for(sec of sections){
        //build navigation (  getAttribute / createElement  / innerHTML / appendChild )
        let secName = sec.getAttribute('data-nav');
        let secLink= sec.getAttribute('id');
        let listItem = document.createElement('li');
        listItem.innerHTML=`<a class='menu__link' href='#${secLink}'>${secName}</a>`;
        ul.appendChild(listItem);
    }
}

// Add class 'active' to section when near top of viewport

// Detect the element location

function viewPort(item){
    let itemPos=item.getBoundingClientRect();
    return (itemPos.top>=0);
}

// Detect the active section to edit style

function setActive(){
    for (sec of sections){
        if (viewPort(sec)){
            if(!sec.classList.contains("your-active-class")){
                sec.classList.add("your-active-class");
            }
        }else{
            sec.classList.remove("your-active-class");
        }
    }
};


// Scroll to anchor ID using scrollTO event

// select all links with class(menu__link)  
//Use addEventListener / preventDefault /  scrollIntoView to make behavior( smooth)

const smoothScroll = () => {
    document.querySelectorAll(".menu__link").forEach((anc) => {
        anc.addEventListener("click", function (i) {
            i.preventDefault();
            document.querySelector(anc.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildTheNav();


// Scroll to section on link click

smoothScroll();

// Set sections as active

document.addEventListener('scroll',setActive);
