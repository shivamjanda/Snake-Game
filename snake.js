class Snake{
    constructor(x,y, width, height, speed)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;

    }




    move()
    {
        this.changeDirectionIfPossible();
        this.moveFowards();
        if(this.checkCollision())
        {
            this.moveBackwards();
        }
    }

    eatApple(){

    }

    moveFowards()
    {
        switch(this.direction)
        {
            case DIRECTION_RIGHT:
                this.x += this.speed;
                break;
            case DIRECTION_UP:
                this.y -= this.speed;
                break;
            case DIRECTION_LEFT:
                this.x -= this.speed;
                break;
            case DIRECTION_BOTTOM:
                this.y+= this.speed;
                break;
            

        }
    }

    moveBackwards()
    {
        switch(this.direction)
        {
            case DIRECTION_RIGHT:
                this.x -= this.speed;
                break;
            case DIRECTION_UP:
                this.y += this.speed;
                break;
            case DIRECTION_LEFT:
                this.x += this.speed;
                break;
            case DIRECTION_BOTTOM:
                this.y-= this.speed;
                break;
            

        }
    }

    checkCollision()
    {
        let isCollided = false;
        if (
            map[this.getMapY()][this.getMapX()] == 1 ||
            map[this.getMapYRight()][this.getMapX()] == 1 ||
            map[this.getMapY()][this.getMapXRight()] == 1 ||
            map[this.getMapYRight()] [this.getMapXRight()] == 1
            
            )

        {
            return true;
        }

        return false;
    }

    getMapX()
    {
        return parseInt(this.x / blockSize);
    }
    getMapY()
    {
        return parseInt(this.y / blockSize);
    }

    getMapXRight()
    {
        return parseInt(this.x + 0.9999 * blockSize / blockSize);
    }

    getMapYRight()
    {
        return parseInt(this.y + 0.9999 * blockSize / blockSize);
    }
}
