// select landing page element
let landingPage = document.querySelector('.landing-page')
console.log(landingPage)
// get array of imgs 
let imgArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]

setInterval(()=>{
// get random number

    let randomNumber = Math.floor(Math.random() * imgArray.length)
    // change bg imgs url
landingPage.style.backgroundImage = `url('imgs/${imgArray[randomNumber]}')`;
},6000 )
