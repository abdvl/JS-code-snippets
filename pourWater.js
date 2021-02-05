function pourWater(heights, volume, start) {
  const waterHeights = heights.map((h) => Array(h).fill("+"));
  const res = _pourWater(waterHeights, volume, start);
  
  // generate print digram
  const max_height = Math.max.apply(
    null,
    res.map((i) => i.length)
  );
  const result = [];
  for (let index = 0; index < max_height; index++) {
    result[index] = "";
    for (let j = 0; j < heights.length; j++) {
      result[index] += res[j][index] ? res[j][index] : " ";
    }
  }
  return result.reverse().join("\n");
}

function _pourWater(heights, volume, start) {
  if (!volume) {
    return heights;
  }

  let bottom = start;

  for (let i = bottom; i >= 0; i--) {
    if (heights[i].length > heights[bottom].length) {
      break;
    }

    if (heights[i].length < heights[bottom].length) {
      bottom = i;
    }
  }

  if (bottom !== start) {
    heights[bottom].push("w");
    return _pourWater(heights, volume - 1, start);
  }

  for (let j = bottom + 1; j < heights.length; j++) {
    if (heights[j].length > heights[bottom].length) {
      break;
    }
    if (heights[j].length < heights[bottom].length) {
      bottom = j;
    }
  }

  heights[bottom].push("w");
  return _pourWater(heights, volume - 1, start);
}

const example1 = [5, 4, 2, 1, 2, 3, 2, 1, 0, 1, 2, 4];
console.log(pourWater(example1, 8, 5));

const example2 = [1, 0, 1, 0, 0, 3, 0, 0];
console.log(pourWater(example2, 9, 1));
