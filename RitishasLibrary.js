function istouching(object1, object2){  //parameters = placeholders

    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        
        return true;
    }
    else {
      
        return false;
    }
  
  }
  
  function bounceOff(objectA, objectB){
  
    if(objectA.x - objectB.x < objectB.width/2 + objectA.width/2
      && objectB.x - objectA.x < objectB.width/2 + objectA.width/2){
  
        objectA.velocityX = objectA.velocityX * (-1);
        objectB.velocityX = objectB.velocityX * (-1);
    }
  
    if( objectA.y - objectB.y < objectB.height/2 + objectA.height/2
      && objectB.y - objectA.y < objectB.height/2 + objectA.height/2){
  
        objectA.velocityY = objectA.velocityY * (-1);
        objectB.velocityY = objectB.velocityY * (-1);
    }
  }