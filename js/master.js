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
    console.log(backLocalItem)
    
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
// loop on all list items of
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
        // add active class on self
        e.target.classList.add("active")
        
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
            },500 )
    }
}

randomImg()