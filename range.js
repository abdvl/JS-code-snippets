const log = console.log
/* a = {}
a.x = 1

a[Symbol()] = 1
a[Symbol()] = 2

for(x in a) {
  console.log(x)
}

console.log(a, JSON.stringify(a), Object.values(a), Object.keys(a),Object.getOwnPropertySymbols(a))

b = new Map()

b.set(x, 1)
b.set(Symbol(), 2)
b.set(Symbol(), 3)

b.forEach((val, key)=>{
  console.log(key,val)
})

console.log(b, JSON.stringify(b), b.keys(), b.values()) */

let range = {
    start: 1,
    end: 10
};

range = new Proxy(range, {
    ownKeys(target) { // 一旦被调用，就返回一个属性列表
        console.log(target)
        return
        return Object.keys(target).filter(key => !key.startsWith('_'));
    },
    getOwnPropertyDescriptor(target, prop) { // 被每个属性调用
        return {
            enumerable: true,
            configurable: true
        };
    }
  has(target, prop) {
        console.log(prop)
        return prop >= target.start && prop <= target.end
    }
});

//console.log(5 in range)

for (let x in range) {
    console.log(x)
}

