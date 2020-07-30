class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/paper.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }

  check(){

    if(this.body.x>425 && this.body.x<1275){

      text("YOU WON", 200,200);
    }
  }
}
