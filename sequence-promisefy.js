
/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
  return async (callback, data) => {
    try{
      const result = await funcs.reduce(async (res, fn) => {
        const _res = await res;
        return await promisefy(fn, _res);
      }, data);
      callback(undefined, result);
    }catch(e){
      callback(e)
    }
  };
}

function promisefy(fn, arg) {
  return new Promise((resolve, reject) => {
    fn((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    }, arg);
  });
}
