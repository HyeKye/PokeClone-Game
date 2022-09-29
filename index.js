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

