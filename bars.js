class Bar{
   
    constructor(x,y,width,height) {
        var options = {isStatic : true}

        this.body = Bodies.rectangle(x,y,width,height,options);
        //this.body=shapeColor="red"
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }

    display() {
     var pos = this.body.position
     //console.log("x -",pos.x,",","y -", pos.y)
        rect(pos.x, pos.y, this.width, this.height)
    }






}