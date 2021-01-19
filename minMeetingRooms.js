function minMeetingRooms(intervals) {
  const starts = intervals
    .concat()  // make sure shallow copy, otherwise when sort 'ends', 'starts' will change too
    .map(a => a[0])
    .sort((a, b) => a - b);

  const ends = intervals
    .map(a => a[1])
    .sort((a, b) => a - b);

  let room = 0;
  let endIdx = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[endIdx]) {
      room++;
    } else {
      endIdx++;
    }
  }
  return room;
}
