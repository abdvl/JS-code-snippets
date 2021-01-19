// const num = 6;
// const skills = [12, 4, 6, 13, 5, 10];
// const minA = 3;
// const minL = 4;
// const maxL = 10;

// function findTeams(
//   num,
//   skills,
//   minA,
//   minL,
//   maxL,
//   current = [],
//   res = [],
//   depth = 0
// ) {
//   if (current.length >= minA) {
//     const key = current.slice().sort().join("");
//     if (!res.includes(key)) {
//       console.log("current.length == minA", current, key);
//       res.push(key);
//     }
//     //return res;
//   }

//   for (let skill of skills) {
//     if (current.includes(skill)) {
//       continue;
//     }
//     if (depth == 0) {
//       console.log(skill, current, depth);
//     }
//     if (skill >= minL && skill <= maxL) {
//       current.push(skill);
//       findTeams(num, skills, minA, minL, maxL, current, res, ++depth);
//       current.pop();
//     }
//   }

//   return res;
// }

// const combinationsA = function (elements, length) {
//   if (length <= 1) return elements;
//   return elements.reduce((acc, item, i)=>{
//     let remaining = combinationsA(elements.slice(i+1,), length -1);
//     for(let item of remaining) res.push(item)
//     return res
//   },[])
// };

// console.time("x");
// console.log(findTeams(num, skills, minA, minL, maxL));
// console.timeEnd("x");
// const perm = a => a.length ? a.reduce((r, v, i) =>
//  [ ...r, ...perm([ ...a.slice(0, i), ...a.slice(i + 1) ]).map(x => [ v, ...x ])], []) : [[]]

const combinations = function (elements, length) {
  if (length <= 1) return elements;
  return elements.reduce((acc, item, i) => {
    let remaining = combinations(elements.slice(i + 1), length - 1);
    for (let next of remaining) acc.push([item, ...next]);
    return acc;
  }, []);
};

const permutation = function (elements, length) {
  if (length <= 1) return elements;
  return elements.reduce((acc, item, i) => {
    let remaining = permutation(elements.slice(), length - 1);
    for (let next of remaining)
      !next.includes(item) && acc.push([item, ...next]);
    return acc;
  }, []);
};

console.log(JSON.stringify(combinations(["a", "b", "c", "d"], 3)));
console.log(JSON.stringify(permutation(["a", "b", "c"], 2)));
console.log(JSON.stringify(combinations(["a", "b", "c"], 2)));
