/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/

const mergeRanges = intervals => {
    // console.log(intervals)
    newArr= [];
    intervals = intervals.sort(([a], [b]) => {
     return a - b //0, 1, 3, 4, 5, 8, 9, 10, 10, 12
  })
  let newStartTime;
  let newEndTime;
  let keepStartTime = false;
  console.log(intervals)
  for(let i = 0; i < intervals.length - 1; i++) {
    //keep track of start and end time
    const lastInterval = intervals[intervals.length-1];
    const currentInterval = intervals[i];
    const startTime = intervals[i][0];
    // const endTime = intervals[i][1];
    const nextIntervalStart = intervals[i+1][0];
    const nextIntervalEnd = intervals[i+1][1];
    if(i===0) newEndTime = intervals[i][1];
    if(newEndTime >= nextIntervalStart){ //if current interval's end time overlapses with next interval's start time..
        //update endtime to next interval endtime and push it
        if(!keepStartTime) {
            newStartTime = startTime;
            updateFlag = true;
        }
        newEndTime = nextIntervalStart;
    }else {
        newArr.push([newStartTime,newEndTime]);
        updateFlag = false;
        newArr.push([newStartTime,newEndTime]);
        if(i === intervals.length - 2) newArr.push(lastInterval);
    }
  }
  return newArr
};
// intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
// console.log(mergeRanges(intervals)); //[[0, 1], [3, 8], [9, 12]]

// intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
// console.log(mergeRanges(intervals)); //[[1, 6], [8, 10], [15, 18]]

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10], [4, 9]];
console.log(mergeRanges(intervals));

module.exports = {mergeRanges};
