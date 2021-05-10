class Band
{    
    constructor(bodyA , pointB)
    {
        var options = 
        {
            bodyA : bodyA ,
            pointB : pointB , 
            stiffness : 0.8,
            length : 1
            
        }
     this .pointB = pointB;
      this.body = Constraint.create(options);
      World.add(world , this.body)
      
    }

    fly()
    {
        this.body.bodyA = null;

    }
    attach(body)
    {

        this.body.bodyA = body;
    }

    display()
    {
    
       if(this.body.bodyA)
       {
           push();
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
         line(pointA.x , pointB.x , pointA.y , pointB.y );
        pop();
       }
       
    }
}