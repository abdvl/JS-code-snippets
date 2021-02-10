function X (name){
  this.name = name;
  console.log(this)
}

X.prototype.say = function (){
  console.log(this.name)
}

function Y(name, age) {
  X.call(this, name)
  this.name = name;
  this.age = age;
}

Y.prototype = Object.create(X.prototype)
// Y.prototype.constructor = Y
Y.prototype.sayAge = function(){
  console.log(this.name, this.age)
}



const y = new Y("abu2",35)
y.sayAge()
y.say()

console.log(Y.prototype.constructor,y.__proto__ == Y.prototype)

function Foo(){

}
console.log(Foo.prototype.constructor == Foo)

const myExtends = (SuperType, SubType) => {
  function ExtendedType(...args){
    SuperType.apply(this, args);
    SubType.apply(this, args);

    // instance __proto__
    this.__proto__ = SubType.prototype;
    //ES5: Object.setPrototypeOf(this, SubType.prototype)
  }

  // constructor __proto__
  SubType.prototype.__proto__ = SuperType.prototype;
  //ES5: Object.setPrototypeOf(SubType.prototype, SuperType.prototype);

  ExtendedType.prototype.__proto__= SubType.prototype
  //ES5: Object.setPrototypeOf(ExtendedType.prototype, SubType.prototype);

  // static methods;
  ExtendedType.__proto__ = SuperType;
  //ES5: Object.setPrototypeOf(ExtendedType, SuperType);
  return ExtendedType;
}
