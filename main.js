let randomRange = (min, max) => Math.random() * (max - min) + min;
let mapRange = (value, low1, high1, low2, high2) => low2 + (high2 - low2) * (value - low1) / (high1 - low1);
let string = ""
let step = 1;
for (let i = 0; i <= 100/step; i++) {
    string += `${(i/(100/step)) * 100}% {
    transform: rotate(${randomRange(-8, 8)}deg) translate(${randomRange(-.25, .25)}ch, ${randomRange(-.25, .25)}ch);
}
`
}
var style = document.createElement('style');
var keyFrames = `
@keyframes FUCK {
    ${string}
}`
style.innerHTML = keyFrames;
document.getElementsByTagName('head')[0].appendChild(style);

let audio = new Audio("spearofjustice.mp3");
audio.loop = true;

function fuckRobin() {
    let img = document.createElement('img');
    img.src = "https://cdn.discordapp.com/avatars/128423195366785024/a891ac404143456fa38624a70e82b492.webp";
    img.classList.add("fuckface")
    let angle = randomRange(0, 2 * Math.PI);
    let [x, y] = [Math.cos(angle), Math.sin(angle)];
    x = mapRange(x, -1, 1, -20, 120);
    y = mapRange(y, -1, 1, -20, 120);
    img.style.top  = `${y}%`;
    img.style.left = `${x}%`;
    document.body.appendChild(img);
    angle = randomRange(0, 2 * Math.PI);
    [x, y] = [Math.cos(angle), Math.sin(angle)];
    x = mapRange(x, -1, 1, -20, 120);
    y = mapRange(y, -1, 1, -20, 120);
    setTimeout(() => {
        img.style.top  = `${y}%`;
        img.style.left = `${x}%`;
    }, 10)
    setTimeout(() => {
        img.remove()
    }, 1500)
}

function fuckword() {
    let text = document.createElement('div');
    text.classList.add("fuckword")
    let words = ["FUCK", "ROBIN", ">:("]
    text.innerText = words[Math.floor(Math.random() * words.length)];
    let angle = randomRange(0, 2 * Math.PI);
    let [x, y] = [Math.cos(angle), Math.sin(angle)];
    x = mapRange(x, -1, 1, -20, 120);
    y = mapRange(y, -1, 1, -20, 120);
    text.style.top  = `${y}%`;
    text.style.left = `${x}%`;
    document.body.appendChild(text);
    angle = randomRange(0, 2 * Math.PI);
    [x, y] = [Math.cos(angle), Math.sin(angle)];
    x = mapRange(x, -1, 1, -20, 120);
    y = mapRange(y, -1, 1, -20, 120);
    setTimeout(() => {
        text.style.top  = `${y}%`;
        text.style.left = `${x}%`;
    }, 10)
    setTimeout(() => {
        text.remove()
    }, 2500)
}

active = false;
let start = () => {
    if (!active) {
        active = true;
        document.body.innerHTML = `<div id="fuckyou"><span id="fuck">FUCK </span><span id="robin">ROBIN</span></div>`
        setTimeout(() => {
            audio.play()
            setInterval(fuckRobin, 100)
            setInterval(fuckword, 100)
            document.body.classList.add("fuck")
        }, 3500);
    }
}
document.addEventListener("click", start)
document.addEventListener("touchstart", start)