class Snow{
 constructor(x,y,r) {
  var s1 = {
   friction:0.1,
   density:0.8,
   restitution:0.12   
  }
  this.r=r
  this.body=Bodies.circle(x,y,r,s1)
  this.Snow=loadImage("snow4.webp")
  World.add(world,this.body)
 }  
 display(){
imageMode (CENTER)  
image (this.Snow,this.body.position.x,this.body.position.y,this.r,this.r)
 }
}