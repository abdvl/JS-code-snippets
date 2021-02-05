/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */


const padZeros = (str, n) => n - str.length > 0 ? "0".repeat(n - str.length) + str : str;
const IPStrToBinary = ip => ip.split(".").map(n => padZeros((n - 0).toString(2), 8)).join("")
const binaryToIPStr = bi => bi.match(/.{8}/g).map(n => parseInt(n, 2)).join(".")
const subtractIpCount = (bIpStr, count) => {
  let temp = parseInt(bIpStr,2) + count;
  temp = padZeros(temp.toString(2), 32)
  return binaryToIPStr(temp);
}

const ipToCIDR = (ip, n) => {
  if (n == 0) return [];
  if (n == 1) return [ip + "/32" + n];

  const res = [];
  const len = 32;
  let currentIpStr = ip;
  let count = 0;

  while (count < n) {
    let surfix = 0;
    let temp = IPStrToBinary(currentIpStr);
    while (count + Math.pow(2, surfix) <= n && temp[len - surfix +1] != "1") {surfix++;}
    if(surfix) surfix--;
    count += Math.pow(2, surfix);
    res.push(`${currentIpStr}/${len - surfix}`); 
    currentIpStr = subtractIpCount(temp, Math.pow(2, surfix))
  }
  return res;
}

// console.log(ipToCIDR("255.0.0.7", 10))
console.log(ipToCIDR("0.0.0.0", 2))