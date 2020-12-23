class slingshot{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.05,
    length:35
}
this.pointB=pointB
this.sling=Constraint.create(options)
World.add(world,this.sling)

    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
    if(this.sling.bodyA){

    
    var posB =this.pointB
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,posB.x,posB.y)

    }
}
}















































