class Box{
  constructor(x, y, width, height) {
      var options = {
        restitution :0.3,
        friction :0.1,
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/pink.png");
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<5){
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        rect(0,0,this.width, this.height); 
        pop() 
      } else{
        World.remove(world, this.body)
        push()
        this.visibility = this.visibility-1
        tint(255, this.visibility)
        //rectMode(CENTER)
        //rect(this.body.position.x, this.body.position.y, this.width, this.height)
        pop()
      }
    }
      score(){
        if(this.visibility < 0 && this.visibility > -10){
          score = score+10;
      }
    }
    }


  