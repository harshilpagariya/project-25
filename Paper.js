class Paper{
    
	constructor(x,y){
	this.x=x;
    this.y=y;
	
    var options={
    isStatic:false,
    restitution:0.3,
    friction:0,
	density:1.2
	}

	this.image=loadImage("paper.png")

	}
}