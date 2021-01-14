class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.trajectory=[]
    this.image = loadImage("sprites/bird.png");
    this.smokeImage= loadImage("sprites/smoke.png")
  }

  display() {
    super.display();

    if(this.body.position.x > 250 && this.body.velocity.x > 20){
    var position=[this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
    }
    for(var j=0;j<this.trajectory.length;j++){
      image(this.smokeImage,this.trajectory[j][0],this.trajectory[j][1])
    }
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

  }
}
