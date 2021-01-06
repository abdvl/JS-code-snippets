const Obserable = {
  of: (target) => {
    const observerKey = Symbol();
    target[observerKey] = [];
    target.observe = (handler) => target[observerKey].push(handler);

    return new Proxy(target, {
      set(target, key, value) {
        const success = Reflect.set(...arguments);
        if (success) {
          target[observerKey].forEach((handler) =>
            handler.call(target, value, key)
          );
        }
      },
    });
  },
};

let obj = {
  x: 1,
  y: 2,
  z: 3,
};

const obj$ = Obserable.of(obj);
obj$.observe((value, key) => {
  console.log(value, key);
});

obj$["x"] = 3;
