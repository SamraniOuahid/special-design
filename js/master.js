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
// select setting
let settingBox = document.querySelector('.setting-box')
let faGear = document.querySelector('.setting-toglle .fa-gear')
faGear.onclick = ()=>{
    // toggle class open
    settingBox.classList.toggle('open')
    // spin on for rotaion 
    faGear.classList.toggle('fa-spin')   
    
}

// switch colors
const colorLi = document.querySelectorAll('.colors-list li')
// loop on all list items
colorLi.forEach(li =>{
    // click on every list items
    li.addEventListener("click", (e) => {
        // the color of click
        let colorClicked = e.target.dataset.color

        // set color on root
        document.documentElement.style.setProperty('--main-color', colorClicked)

        // set color on local storage
        localStorage.setItem("color_option",colorClicked)

        // remove active class for all children
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active")
        })
        // add active class on self
        e.target.classList.add("active")
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

            // if value of random bg
            if(e.target.dataset.background === 'yes'){
                console.log('yes');
                backOption = true;
                setInterval(backInterval);
            }else{
                console.log('no')
                backOption = false;
                clearInterval(backInterval);

            }
        })
        // add active class on self
        e.target.classList.add("active")
        
    })
})

// select landing page element
let landingPage = document.querySelector('.landing-page')

// get array of imgs 
let imgArray = ["b1.jpg","b2.jpg","b3.jpg","b4.jpg","01.jpg"]

// Random bg option
let backOption = true;

// controle the intervale
let backInterval;

// fct to randomize imgs

let randomImg = ()=>{
    if(backOption){
        backInterval = setInterval(()=>{
            // get random number
            
                let randomNumber = Math.floor(Math.random() * imgArray.length)
                // change bg imgs url
                landingPage.style.backgroundImage = `url('imgs/${imgArray[randomNumber]}')`;
            },4000 )
    }
}

randomImg()