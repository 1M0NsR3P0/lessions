
let randomNumber = (Math.floor(Math.random() * 50) * 3) + 150 + "px";
let randomNumberH = (Math.floor(Math.random() * 25) * 5) + 50 + "px";
// console.log(randomNumber, randomNumberH);


const jsConfetti = new JSConfetti()

document.querySelector(".proposal").style.display = "none";
document.getElementById("popUp1").style.display = "none";

document.getElementById("clickMeBtn").addEventListener("click", () => {
    jsConfetti.addConfetti({
        emojis: ['😍', '🥰', '😘', '🥳', '😜', '🥳', '🌹', '🫀', '🌹', '🎈', '🥳', '🎈', '😍', '💝', '🎈', '❤️', '😍', '😍', '🥳', '🌹', '❤️', '💝', '🌹', '🥳', '🎈', '🫀', '🥳', '🥳', '🌹', '🥳', '❤️', '🎈', '🥳'],
        confettiColors: [
            '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
        confettiRadius: 2,
        confettiNumber: 500,
        emojiSize: 30,
    })
    
    document.querySelector(".proposal").style.display = "block";
    document.querySelector(".containers").style.display = "none"
})


//   jsConfetti.clearCanvas()

let text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam cumque molestiae voluptatum molestias eaque id ducimus optio, saepe sequi culpa, consequatur tempore quasirepellendusneque at recusandae incidunt magni maiores.`
const torches = document.querySelectorAll(".torch");
const containers = document.querySelectorAll(".container");
const details = document.querySelectorAll('.details');
details.forEach((detail) => {
    detail.textContent = "Description:   " + text.slice(0, 50) + "..." || null;
})

// the 
containers.forEach((container, index) => {
    const torch = torches[index];
    container.addEventListener('mouseenter', () => {
        torch.style.display = "block";
        container.addEventListener('mousedown', () => {
            document.body.style.cursor = "none";
        });
    });
    container.addEventListener('mousemove', (e) => {
        const x = e.clientX - container.getBoundingClientRect().left;
        const y = e.clientY - container.getBoundingClientRect().top;
        torch.style.left = x + "px";
        torch.style.top = y + "px";
    });
    container.addEventListener('mouseleave', () => {
        torch.style.display = "none";
        container.addEventListener('mouseup', () => {
            document.body.style.cursor = "auto";
            container.removeEventListener('mousemove', null);
            container.removeEventListener('mouseup', null);
        });
    });
});
// card button toggling code...

const buttonToggle = document.querySelectorAll(".btn[cardButton]");
buttonToggle.forEach((button, i) => {
    const src = document.querySelectorAll(".btn[cardButton] img");
    let toggle = true
    button.addEventListener('click', () => {
        console.log(toggle)
        toggle = !toggle;
        if (toggle) {
            src[i].setAttribute('src', "./add-to-cart-icon.svg")
        } else {
            src[i].setAttribute('src', "./shopping-bag-checkmark-icon.svg")
        }
    })
})



const noBtn = document.querySelector("#noBTN")
const yesBtn = document.querySelector("#yes")
yesBtn.addEventListener("click",()=>{
    jsConfetti.addConfetti({
        emojis: ['😍', '🥰', '😘', '🥳', '😜', '🥳', '🌹', '🫀', '🌹', '🎈', '🥳', '🎈', '😍', '💝', '🎈', '❤️', '😍', '😍', '🥳', '🌹', '❤️', '💝', '🌹', '🥳', '🎈', '🫀', '🥳', '🥳', '🌹', '🥳', '❤️', '🎈', '🥳'],
        confettiColors: [
            '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
        confettiRadius: 2,
        confettiNumber: 500,
        emojiSize: 30,
    })
})
noBtn.addEventListener("mouseenter",()=>{
    changer()
})
noBtn.addEventListener("click",()=>{
    document.getElementById("proposal").style.display = "none";
    document.getElementById("popUp1").style.display = "block";
})
function changer(){
    
let randomNumber = (Math.floor(Math.random() * 50) * 3) + 10 + "px";
let randomNumberH = (Math.floor(Math.random() * 25) * 5) + 5 + "px";
let pls = Math.floor(Math.random()*5);
const plsArray = ["PLEASE","DON'T SAY NO!","PLease NO!", "PLease Don't Click","i Am Crying"]
// console.log(randomNumber, randomNumberH);
    const noBTN = document.querySelector("#noBTN");
    noBTN.style.left = randomNumber
    noBTN.style.top = randomNumberH
    noBTN.style.zIndex = "1000"
    noBTN.textContent = plsArray[pls]
}