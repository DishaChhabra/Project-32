class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options)
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
    if(this.sling.bodyA){
        stroke("pink")
        strokeWeight(3)
        line(this.sling.bodyA.position.x+20, this.sling.bodyA.position.y+0, this.pointB.x, this.pointB.y)
    }
            
        }
    }
    