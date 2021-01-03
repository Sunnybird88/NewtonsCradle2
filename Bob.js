class Bob{

	constructor(x,y,radius,isStatic){

		var paperOpt = {isStatic:isStatic,restitution:1.2,friction:0,density:1}
		ellipseMode(RADIUS);
		this.body = Bodies.circle(x,y,radius,paperOpt);
		this.radius = radius;
		World.add(world,this.body);
		this.pos = this.body.position;
	}

	display(){
		var angle = this.body.angle;
		push();
		fill("pink");
		translate(this.pos.x,this.pos.y);
		rotate(angle);
		ellipse(0,0,this.radius,this.radius);
		pop();

	}
}
