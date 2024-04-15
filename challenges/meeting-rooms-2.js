// Given an array of meeting time intervals consisting of 
// start and end times[[s1,e1],[s2,e2],...](si< ei), 
// find the minimum number of conference rooms required.

// Example 1:
// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2

// Example 2:
// Input: [[7,10],[2,4]]
// Output: 1

// input: array of arrays
// output: integer representing num of rooms

//  sort start and end times separately
//  iterate through sorted start times and check if >= earliest end time
  //  if yes, it means a room is free 
  //  otherwise will need an additional room

const roomCount = (arr) => {
  let startTimes = arr.map(a => a[0]).sort((a,b) => a - b);
  let endTimes = arr.map(a => a[1]).sort((a,b) => a - b);
  // console.log(startTimes)
  // console.log(endTimes)
  let rooms = 0;
  let endIndex = 0;

  for(let i = 0; i < arr.length; i++) {
    if(startTimes[i] >= endTimes[endIndex]) {
      endIndex++;
    } else {
      rooms++;
    }
  }
  return rooms;
}

const arr1 = [[0, 30],[5, 10],[15, 20]];
const arr2 = [[7,10],[2,4]];
const arr3 = [[5,15], [0, 20], [5,15] ,[10,25]];
console.log(roomCount(arr1)); //2
console.log(roomCount(arr2)); //1
console.log(roomCount(arr3)); //4