// check if local storage color is empty
// localStorage.removeItem("color_option")
let mainColors = localStorage.getItem("color_option")  

if(mainColors!==null){
    // console.log("local storage is not empty can you set it on root item")
    document.documentElement.style.setProperty('--main-color', mainColors)
    
    document.querySelectorAll(".colors-list li").forEach(element=>{
        element.classList.remove("active")
        if(element.dataset.color === mainColors){
            element.classList.add("active")
        }
    })
}

// Random bg option
let backOption = true;
// controle the intervale
let backInterval;
// check if there's local storage random background item
let backLocalItem = localStorage.getItem("background_option")

// ********************
if(backLocalItem !==null ){
    // console.log("local storage is not empty can you set it on root item")
    if(backLocalItem === 'true'){
        backOption = true;
    }else{
        backOption = false;
    }
    document.querySelectorAll(".random-backgrounds span").forEach(e =>{
        e.classList.remove("active")
       
    });

    if(backLocalItem === 'true'){
        document.querySelector(".random-backgrounds .yes").classList.add("active")
    }else{
        document.querySelector(".random-backgrounds .no").classList.add("active")

    }
    
}
// select setting
let settingBox = document.querySelector('.setting-box')
let faGear = document.querySelector('.setting-toglle .fa-gear')
faGear.onclick = ()=>{
    // toggle class open
    settingBox.classList.toggle('open')
    // spin on for rotaion 
    faGear.classList.toggle('fa-spin')   
    
}
// ******************
// switch colors
let img_bg = document.querySelector('.img-bg')
img_bg.src = '../imgs/blue.jpg';
const colorLi = document.querySelectorAll('.colors-list li')
// loop on all list items of
colorLi.forEach(li =>{
    // click on every list items
    li.addEventListener("click", (e) => {
        // the color of click
        let colorClicked = e.target.dataset.color

        // set color on root
        document.documentElement.style.setProperty('--main-color', colorClicked)
        // get img bg
        let img_bg = document.querySelector('.img-bg')
        img_bg.src = '../imgs/blue.jpg';
        switch(colorClicked){
            // orange
            case '#ff5e09':
            img_bg.src = '../imgs/orange.png';
            break;
            // violet
            case '#E91E63':
            img_bg.src = '../imgs/violet.png';
            break;
            // green f
            case '#009688':
            img_bg.src = '../imgs/green_f.png';
            break;
            // blue
            case '#ff5e09':
            img_bg.src = '../imgs/blue.jpg';
            break;
            case '#4caf50':
            img_bg.src = '../imgs/green.png';
            break;
            default:
                img_bg.src = '../imgs/blue.jpg';

        }
        
        
        

        // set color on local storage
        localStorage.setItem("color_option",colorClicked)

       handlActive(e)
    })
})
// ***************
// switch Random background 
const RandomBackEl = document.querySelectorAll('.random-backgrounds span')
// loop on all span
RandomBackEl.forEach(span =>{
    // click on every span
    span.addEventListener("click", (e) => {

        let backClicked = e.target.dataset.value;
        
        // remove active class for all children
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active")
            // add active class on self
            e.target.classList.add("active")
            // if value of random bg
            if(e.target.dataset.background === 'yes'){
                // console.log('yes');
                backOption = true;
                randomImg();
                localStorage.setItem("background_option", true)
            }else{
                // console.log('no')
                backOption = false;
                clearInterval(backInterval);
                localStorage.setItem("background_option", false)


            }
        })
       
        
    })
})

// select landing page element
let landingPage = document.querySelector('.landing-page')
// get array of imgs 
let imgArray = ["b1.jpg","b2.jpg","b3.jpg","b4.jpg","01.jpg"]


// fct to randomize imgs

let randomImg = ()=>{
    if(backOption){
        backInterval = setInterval(()=>{
            // get random number
            
                let randomNumber = Math.floor(Math.random() * imgArray.length)
                // change bg imgs url
                landingPage.style.backgroundImage = `url('imgs/${imgArray[randomNumber]}')`;
                
            },6000 )
    }
}

randomImg()


/* select skill  */

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }

};


// create popup with the image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener("click", (e)=>{
        // create overly element
        let overlay = document.createElement('div');
        // add class to overlay
        overlay.className = 'popup-overlay';
        // append to body
        document.body.appendChild(overlay)
        // create the popup box
        let popupBox = document.createElement("div");
        // add class of the popup-Box
        popupBox.className = "popup-Box";

        // alt of image
        alt = img.alt 
        if(alt !== null){
            // crate heading
            let imgHeading = document.createElement('h3')
            // Create text for heading
            let imgText = document.createTextNode(alt)
            // append the text to heading
            imgHeading.appendChild(imgText)
            // appen the heading to popup-box
            popupBox.appendChild(imgHeading)
             
        }

        // create the Imagas
        let imageBox = document.createElement("img");
       // set image source
        imageBox.src = img.src
        // append image in popup
        popupBox.appendChild(imageBox)
        // append popup in body
        document.body.appendChild(popupBox)

        // creat the close span
        let closeButton = document.createElement('span')
        // creat the close button text
        let closeButtonText = document.createTextNode('X')
        // append the text to close button
        closeButton.appendChild(closeButtonText)
        // add class to close btn
        closeButton.className = 'close-button'
        // append the close button to popub
        popupBox.appendChild(closeButton)
        // close
        // closeButton.onclose()
    })
});

// close the popup
document.addEventListener('click', e=>{
    if(e.target.className == 'close-button'){
        
        e.target.parentNode.remove();
        document.querySelector('.popup-overlay').remove()

    }

})


// select all Bullets
const allBullets = document.querySelectorAll('.nav-bullets .bullet');
const allLinks = document.querySelectorAll('.header-area a');
console.log(allLinks);

// allBullets.forEach(bullet =>{
//     bullet.addEventListener("click",(e)=>{
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior:'smooth'
//         });

//     });
// });

const scrollTo = (element)=>{
    element.forEach(ele =>{
        ele.addEventListener("click",(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            });
    
        });
    });
}
scrollTo(allBullets)
scrollTo(allLinks)


let handlActive = (ev) => {
    // remove active class for all children
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active")
    })
    // add active class on self
    ev.target.classList.add("active")
}