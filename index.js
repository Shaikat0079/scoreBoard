let guestPoints = document.getElementById('guest-point');
let setGuestPoints = 0;

// console.log(document.getElementById('home-point').textContent)

const addPointOneGuest = ()=>{
    setGuestPoints+=1;
    guestPoints.textContent = setGuestPoints
    // console.log("hello!")
}
const addPointTwoGuest = ()=>{
    setGuestPoints+=2;
    guestPoints.textContent = setGuestPoints
    // console.log("hello!")
}
const addPointThreeGuest = ()=>{
    setGuestPoints+=3;
    guestPoints.textContent = setGuestPoints
    // console.log("hello!")
}
let homePoints = document.getElementById('home-point');
let setHomePoints = 0;

// console.log(document.getElementById('home-point').textContent)

const addPointOneHome = ()=>{
    setHomePoints+=1;
    homePoints.textContent = setHomePoints
    // console.log("hello!")
}
const addPointTwoHome = ()=>{
    setHomePoints+=2;
    homePoints.textContent = setHomePoints
    // console.log("hello!")
}
const addPointThreeHome = ()=>{
    setHomePoints+=3;
    homePoints.textContent = setHomePoints
    // console.log("hello!")
}

const setToZero=()=>{
    setHomePoints = 0;
    setGuestPoints = 0;
    guestPoints.textContent = setHomePoints;
    homePoints.textContent = setHomePoints;
}