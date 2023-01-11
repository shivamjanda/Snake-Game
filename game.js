const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

class snakeAdd{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}
let createRect = (x,y,width,height,color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x,y,width,height);
}

let intialCount =20; // divides screen into 20 small squares
let intialSize=canvas.clientWidth/intialCount-2; //. intial size of the snake
let headX=10;
let headY=10;

let speed =7;
let blockSize = 20;

let xSpeed = 0;
let ySpeed = 0;

const snakeAdds=[];
let lengthOfTail = 2;


// create map of snake boundary 

// wall = 1
let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];



function drawGame(){

    changeSnakeLocation();

    createRect(0,0,canvas.clientWidth, canvas.clientHeight, "black");
    drawWalls();
    drawSnake();
    setTimeout(drawGame, 1000/speed);
    
}


function drawSnake()
{
    canvasContext.fillStyle="green";

    for(let i=0; i<snakeAdds.length;i++)
    {
        // draw the snake parts
        let part = snakeAdds[i]
        canvasContext.fillRect(part.x * intialCount,part.y * intialCount, intialSize,intialSize)
    }

     // add the parts by adding it to he head of current snake
    snakeAdds.push(new snakeAdd(headX, headY));

    // remove the snake part if we have more than our tail size 
    if (snakeAdds.length > lengthOfTail){
        snakeAdds.shift();
    }

    canvasContext.fillStyle="orange";
    canvasContext.fillRect(headX* intialCount,headY* intialCount, intialSize,intialSize)
   
}


let drawWalls = () => {
    for (let i = 0; i < map.length; i++)
    {
        for (let j = 0; j < map[0].length; j++)
        {
            if (map[i][j] == 1) // if it is a wall
            {

                createRect(j * blockSize, i * blockSize, blockSize, blockSize, "#342DCA");
            }
        }
    }
}

document.body.addEventListener('keydown', keyDown);

function keyDown()
{
    if(event.keyCode == 38)
    {
        if(ySpeed == 1) // snake cannot move to the opposite direction
        {
            return;
        }
        ySpeed =-1;
        xSpeed =0;
    }

    if(event.keyCode == 40)
    {
        if(ySpeed == -1)
        {
            return;
        }
        ySpeed =1;
        xSpeed =0;
    }

    if(event.keyCode == 37)
    {
        if(xSpeed == 1)
        {
            return;
        }
        ySpeed =0;
        xSpeed =-1;
    }

    if(event.keyCode == 39)
    {
        if(xSpeed == -1)
        {
            return;
        }
        ySpeed =0;
        xSpeed =1;
    }
}


function changeSnakeLocation()
{
    // changing the x value of the snake 
    headX = headX + xSpeed;

      // changing the y value of the snake 
    headY = headY + ySpeed;
}

function collision()
{
    if()
}


drawGame();
