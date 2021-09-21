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
 * Define Global Variables
 * 
*/
 const sections =document.querySelectorAll('section');
 const navList = document.getElementById("navbar__list");

  // to make the number of sections'buttons at the navbar equal the number of sections
 let numOfListItems = sections.length; 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createListItem() {

  for (section of sections) {
    
    sectionName = section.getAttribute('data-nav');
    sectionLink = section.getAttribute('id');

    // create each item 
    listItem = document.createElement('li');

    listItem.innerHTML = `<li><a class="menu__link" href="#${sectionLink}">${sectionName}</a></li>`;
    
    //append all items into navbar
    navList.appendChild(listItem);  

  }
}

//Determines if section is viewport

function sectionInViewPort (elem){
    let sectionsPosition = elem.getBoundingClientRect();
    return (sectionsPosition.top >=0);
}

// Set sections as active

function toggleActiveClass(){
    for(section of sections){
       if (sectionInViewPort(section)){
         if (!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }else{
            section.classList.remove('your-active-class')
        }
    }
}
createListItem();        //to build the nav


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Add class 'active' to section when near top of viewport

// Scroll to section on link click

document.addEventListener('scroll', toggleActiveClass);



// Scroll to anchor ID using scrollTO event
 
var topBtn = document.getElementById('gototop');

window.onscroll = function(){
     
  if (window.pageYOffset >= 500){
    
    topBtn.style.display = 'block';

  }else {
    topBtn.style.display = 'none';
  }
};

 //the functionality of the button to move to the top

topBtn.onclick  = function (){

  window.scrollTo(0 , 0);

};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

