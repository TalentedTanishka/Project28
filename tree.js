class Tree{
    constructor(x, y,)
    {
        var options = { 
            'isStatic' : true,
              
          }

          this.body = Bodies.rectangle(x,y,10,20,options);
          this.width = 10;
          this.height = 20;
          this.IMG = loadImage("Pluckingmangoes/tree.png")
          World.add(world, this.body);
    }

    display()
    {
        var pos =this.body.position
        push();
        fill("white")
        imageMode(CENTER);
        image(this.IMG,pos.x , pos.y , 500,600);
       // rect(pos.x,pos.y,this.width,this.height)
        pop();
    }

   
}