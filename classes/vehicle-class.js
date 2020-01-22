'use strict';

class Vehicle {
    constructor(name ,wheels){
        this.name;
        this.wheels=wheels
    }
   drive(){
       return 'Moving Forward'
   }
   stop(){
       return 'Stopping'
   }
}
class Car extends Vehicle{
    constructor(name,wheels){

        super(name,4)
    }

    run(){
        super.drive()
    }
    run(){
        super.stop()
    }
}
class Motorcycle extends Vehicle{
  constructor(name,wheels){
      super(name,2)
  }
    
  run(){
    super.drive()
}
run(){
    super.stop()
}
wheeelie(){
    return 'wheee!'
}
}

module.exports = {Car,Motorcycle};