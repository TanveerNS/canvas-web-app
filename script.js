window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ParticleArray = [];

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight
    })

    const mouse = {
        x: null,
        y: null,
    }

    canvas.addEventListener('click', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    })

    canvas.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    })

    class Particle {
        constructor() {
            // this.x = mouse.x;
            // this.y = mouse.y;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY
        }
        draw() {
            ctx.fillStyle = 'blue';
            ctx.beginPath()
            ctx.arc(this.x, this.y, 50, 0, Math.PI * 2)
            ctx.fill()
        }
    }

    function init(){
        for(let i=0; i<100; i++){
            ParticleArray.push(new Particle())
        }
    }

    init()

    function handleParticles(){
        for(let i=0; i < ParticleArray.length; i++){
            ParticleArray[i].update()
            ParticleArray[i].draw()
        }
    }

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        handleParticles()
        requestAnimationFrame(animate)
    }

    animate()

});