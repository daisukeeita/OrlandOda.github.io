// Bakcground Design

const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

function Particles(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}

Particles.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
}

Particles.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;

    this.draw();
}

function init() {
    particleArray = [];
    for (let i = 0; i < 150; i++) {
        let size = Math.random() * 20;
        let x = Math.random() * (innerWidth - size * 3);
        let y = Math.random() * (innerHeight - size * 4);
        let directionX = (Math.random() * 0.5) - 0.2;
        let directionY = (Math.random() * 0.5) - 0.2;
        let color = 'rgba(218, 75, 75, 0.788)';

        particleArray.push(new Particles(x, y, directionX, directionY, size, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
}

window.addEventListener('resize',
    function () {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    }
)

init();
animate();


// Changing the name on hover

let display = document.getElementsByClassName('bio-name');

for (let i = 0; i < display.length; i++) {
    display[i].addEventListener('mouseover', changeDisplay);
    display[i].addEventListener('mouseout', defaultDisplay);

    function changeDisplay() {
        display[i].textContent = `Hey! My name is Orland Oda and I am from the Philippines! I love programming, as well as games, learning new things, and being adventurous! Take a look at my projects or my past work below and feel free to get in touch.`;
        display[i].style.textAlign = 'center';
    }

    function defaultDisplay() {
        display[i].textContent = 'Orland Oda';
    }

}


