var evilBallControlller = new function(){
  var update = function(){

  }

  var changeDirection = function(){
    var xVelocity = Math.random()*300;
    if(xVelocity > 350){
      xVelocity -= 151;
    }

    var yVelocity = Math.random()*300;
    if(yVelocity > 150){
      yVelocity -=151;
    }
  }

  return{
    update: update,
    changeDirection: changeDirection
  }
}
