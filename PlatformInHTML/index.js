const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player
{
    constructor()
    {
        this.position={x:100,y:100}
        this.width = 30
        this.height= 30
        this.velocidy={x:0,y:1}
    }
    draw(){
        c.fillStyle='red'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update()
    {
        this.draw()
        this.position.y=+ this.position.y
    }
}

const player = new Player()
player.draw()