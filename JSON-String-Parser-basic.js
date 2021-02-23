const t = "{a:1},{b:2},{c:3}";

function parser(t) {
  const obj = {};
  let currentKey = "";
  let currentValue = "";
  let currentAction = null; // null, store ky, store value

  for (let c of t) {
    console.log(currentKey, currentValue, c, currentAction);

    if (c == "{") {
      if(currentAction == "storeValue"){
        
      }else{
        currentAction = "storeKey";
        continue;
      }
      
    }

    if (c == ":") {
      currentAction = "storeValue";
      continue;
    }
    if (c == "}") {
      obj[currentKey] = currentValue;
      currentValue = "";
      currentKey = "";
      currentAction = null;
      continue;
    }

    if (currentAction == "storeKey") {
      currentKey += c;
    }

    if (currentAction == "storeValue") {
      currentValue += c;
    }
  }

  return obj;
}

console.log(parser(t));
