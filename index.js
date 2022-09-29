const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d') // c = context

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './images/pokeStyleMap.png'

image.onload = () => {
    c.drawImage(image, -1455, -400)
}

const playerImage = new Image()
playerImage.src = './images/playerDown.png'

playerImage.onload = () => {
    c.drawImage(
        playerImage,
        0, 
        0,
        playerImage.width/4,
        playerImage.height, 
        canvas.width/2 - (playerImage.width/4/2), 
        canvas.height/2 - playerImage.height/2,
        playerImage.width/4,
        playerImage.height
    )
}

class Sprite {
    constructor({ position, velocity, image }) { 
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, -1455, -400)
    }
}

const background = new Sprite({
    position: {
    x: -1455,
    y: -400
    },
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    background.draw
    c.drawImage(
        playerImage,
        0, 
        0,
        playerImage.width/4,
        playerImage.height, 
        canvas.width/2 - (playerImage.width/4/2), 
        canvas.height/2 - playerImage.height/2,
        playerImage.width/4,
        playerImage.height
    )

    if ()
}

window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'w':
            break
        case 'a':
            break
        case 's':
            break
        case 'd':
            break
    }
})