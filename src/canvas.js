console.log("from Canvas");
const aboutMeSection = document.querySelector("#aboutMe");
console.log(aboutMeSection);
const canvasDiv = document.querySelector(".canvasDiv");
const canvas = document.getElementById("canvas1");
console.log(canvas);
const ctx = canvas.getContext("2d");
canvas.width = aboutMeSection.clientWidth;
canvas.height = aboutMeSection.clientHeight;
const particleArray = [];

window.addEventListener("resize", function () {
  canvas.width = aboutMeSection.clientWidth;
  canvas.height = aboutMeSection.clientHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", function (event) {
  console.log(event);
  mouse.x = event.layerX;
  mouse.y = event.layerY;
  init();
  setTimeout(()=>{
        animate,3000
    })
});

// ctx.fillStyle = 'white';
// ctx.fillRect(10,10,50, 150);
// console.log(ctx);
canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.layerX;
  mouse.y = event.layerY;
  //   drawCircle();
});

// ctx.clearRect(0, 0, canvas.width, canvas.height);

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * canvas.width;
    // this.y = Math.random() * canvas.height;
    this.size = Math.random() * 16 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    //   ctx.strokeStyle = "white";
    //   ctx.lineWidth = 1;
    // ctx.arc(300, 150, 5, 0, Math.PI * 2);
    //   ctx.stroke();
  }
}
function init() {
  for (let i = 0; i < 100; i++) {
    particleArray.push(new Particle());
  }
}
init();
function handleParticle() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
    if(particleArray[i].size<= 0.3){
        particleArray.splice(i,1);
        i--;
    }
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticle();
  console.log(particleArray.length);
  requestAnimationFrame(animate);
}
animate();
console.log(particleArray);
