let arr = [{ 'img': 'items/49723740928-1b358b8718-o.webp', 'h1': 'Earth to Space', 'p': "Since the first crew's arrival aboard more then twenty year ago, the international Space Station has evolved into a state-of-the-art scientific lab", 'b': 'Space Station Updates', 'footerH1': 'ACTIVE MISSION', 'footerH2': "Expedition 71", "footerh3": "COMMERCIAL CREW", "footerh4": "NASA's Boeing Crew Flight Test", "footerh5": "COMMERCIAL RESUPPLY", "footerH6": "Northrop Grumman CRS21" },
{ 'img': 'items/ksc-20200529-ph-kls03-0006orig-1.webp', 'h1': '	Happy Birthday, Meatball!', 'p': 'On July 15, 2024, NASA’s logo will turn 65. The iconic symbol, known affectionately as “the meatball,” was developed at Glenn Research Center. Employee James Modarelli, an artist and technical illustrator, was its chief designer.', 'b': 'NASA’s Iconic Logo Turns 65', 'footerH1': 'SINCE 1959', 'footerH2': "Designing the Meatball", "footerh3": "SYMBOLS OF NASA", "footerh4": "The Worm, The Seal,and More", "footerh5": "NASA HISTORY", "footerH6": "NASA and Art" },
{ 'img': 'items/directimaging-graphic-2c4496.gif', 'h1': 'One Giant Leap For Mankind	', 'p': 'On July 20, 1969, humans walked on another world for the first time in history, achieving the goal that President John F. Kennedy had set in 1961, before Americans had even orbited the Earth. ', 'b': 'Explore Apollo 11', 'footerH1': 'THE ASTRONAUTS ', 'footerH2': "Neil Armstrong", "footerh3": "THE ASTRONAUTS", "footerh4": "Buzz Aldrin", "footerh5": "THE ASTRONAUTS", "footerH6": "Michael Collins" }

]
var firstSection = document.querySelector(".first-section")


let currentIndex = 0;
const currentImg = document.querySelector("#img_container")
const tempHeading = document.querySelector("#temp-heading")
const tempPar = document.querySelector("#temp-btn")
const SpaceBtn = document.querySelector("#space-station")
const footerHeading1 = document.querySelector("#footerH1")
const footerHeading2 = document.querySelector("#footerH2")
const footerHeading3 = document.querySelector("#footerH3")
const footerHeading4 = document.querySelector("#footerH4")
const footerHeading5 = document.querySelector("#footerH5")
const footerHeading6 = document.querySelector("#footerH6")

let stopTime = document.querySelector("#fa-play")

function changeContainer() {
    currentIndex = (currentIndex + 1) % arr.length;
    currentImg.src = arr[currentIndex].img
    tempHeading.textContent = arr[currentIndex].h1
    tempPar.textContent = arr[currentIndex].p
    SpaceBtn.textContent = arr[currentIndex].b
    footerHeading1.textContent = arr[currentIndex].footerH1
    footerHeading2.textContent = arr[currentIndex].footerH2
    footerHeading3.textContent = arr[currentIndex].footerh3
    footerHeading4.textContent = arr[currentIndex].footerh4
    footerHeading5.textContent = arr[currentIndex].footerh5
    footerHeading6.textContent = arr[currentIndex].footerH6


}
const interval = setInterval(changeContainer, 3500)
stopTime.addEventListener('click', function () {
    if (stopTime.classList.contains("fa-play")) {
        clearInterval(interval)


        stopTime.classList.remove("fa-play");
        stopTime.classList.add("fa-pause");
    } else if (stopTime.classList.contains("fa-pause")) {
        stopTime.classList.remove("fa-pause");
        stopTime.classList.add("fa-play")
        setInterval(changeContainer, 3500)

    }
});


const explore = document.querySelector("#explore")

const exploreBtn = document.querySelector("#explore-up")

const newsBtn = document.querySelector("#newsbtn")
const news = document.querySelector("#news")
const droupDownBtn = document.querySelector(".drop-down")
const multiMediaBtn = document.querySelector("#multiBtn")
const multiMedia = document.querySelector("#multi")
const multiArrow = document.querySelector("#multi-btn")

exploreBtn.addEventListener("click", function () {
    if (exploreBtn.classList.contains("fa-angle-down")) {
        multiMedia.style.display = 'none'
        explore.style.display = 'flex'
        news.style.display = 'none'

        exploreBtn.classList.remove("fa-angle-down")
        exploreBtn.classList.add("fa-angle-up")
        droupDownBtn.classList.add("fa-angle-down")
        droupDownBtn.classList.remove("fa-angle-up")
        multiArrow.classList.add("fa-angle-down")
        multiArrow.classList.remove("fa-angle-up")

        // exploreBtn.style.border='2px solid blue'
    } else if(exploreBtn.classList.contains("fa-angle-up")){
   
        exploreBtn.classList.remove("fa-angle-up")
        exploreBtn.classList.add("fa-angle-down")
        explore.style.display = 'none'
    }
})








newsBtn.addEventListener("click", function () {

    if (droupDownBtn.classList.contains("fa-angle-down")) {
        news.style.display = 'block'
        multiMedia.style.display = 'none'
        // exploreHome.style.display = 'none'
        explore.style.display = 'none'
        multiArrow.classList.add("fa-angle-down")
        multiArrow.classList.remove("fa-angle-up")

        droupDownBtn.classList.remove("fa-angle-down")
        droupDownBtn.classList.add("fa-angle-up")
        exploreBtn.classList.remove("fa-angle-up")
        exploreBtn.classList.add("fa-angle-down")

        newsBtn.style.border = '6px solid blue'
        
    } else if(droupDownBtn.classList.contains("fa-angle-up")) {
        droupDownBtn.classList.add("fa-angle-down")
        droupDownBtn.classList.remove("fa-angle-up")
        news.style.display = 'none'
        newsBtn.style.border = '6px solid transparent'

        
    }
})

multiMediaBtn.addEventListener('click', function () {
    if (multiArrow.classList.contains("fa-angle-down")) {
        
        multiMedia.style.display = 'block'
        multiArrow.classList.remove("fa-angle-down")
        multiArrow.classList.add("fa-angle-up")
        explore.style.display = 'none'
        // exploreHome.style.display = 'none'
         news.style.display = 'none'
        multiMediaBtn.style.border = '6px solid blue'
        droupDownBtn.classList.add("fa-angle-down")
        droupDownBtn.classList.remove("fa-angle-up")
        exploreBtn.classList.remove("fa-angle-up")
        exploreBtn.classList.add("fa-angle-down")

        
    } else if(multiArrow.classList.contains("fa-angle-up")){
        multiArrow.classList.add("fa-angle-down")
        multiArrow.classList.remove("fa-angle-up")
        multiMedia.style.display = 'none'
        multiMediaBtn.style.border = '6px solid transparent'

       
        
    }
})
let exploreHome = document.querySelector("#explore-home")
let home = document.querySelector("#home")
let mission = document.querySelector("#mission")
let missioActive = document.querySelector("#mission-2")
home.addEventListener("click", function () {
    exploreHome.style.display = 'flex'
    missioActive.style.display = 'none'
})
mission.addEventListener("click", function () {

    missioActive.style.display = 'flex'
    exploreHome.style.display = 'none'


})