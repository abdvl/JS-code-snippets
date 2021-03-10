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