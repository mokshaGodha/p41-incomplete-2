class Drop {
    constructor(x,y) {
      var options = {
          'friction':0.5,
          'restitution':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,10,options);
      this.width = 10;
      this.height = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, 10, 10);
    }
    update(){
        if(this.body.position.y >= 1000){
this.body.position.x = random(0,900);
this.body.position.y = random(0.900);
this.body.isStatic=false;

            
            
        }
    }
};
   
