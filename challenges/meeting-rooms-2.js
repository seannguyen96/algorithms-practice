Given an array of meeting time intervals consisting of 
start and end times[[s1,e1],[s2,e2],...](si< ei), 
find the minimum number of conference rooms required.

Example 1:
Input: [[0, 30],[5, 10],[15, 20]]
Output: 2

Example 2:
Input: [[7,10],[2,4]]
Output: 1

input: array of arrays
output: integer representing num of rooms

//sort the array of arrays by starting times
//compare end time of current room and start time of next room

const roomCount = (arr) => {
  // console.log(arr);
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let counter = 0;
  let start;
  let end;
  for(let i = 0; i < arr.length; i++) {
    end = arr[i][1];
    for(let j = i + 1; j < arr.length; j++){
      start = arr[j][0];
      if(start < end) counter++;
    }
  }
  return counter;
}

const arr1 = [[0, 30],[5, 10],[15, 20]];
console.log(roomCount(arr1));
const arr2 = [[7,10],[2,4]];
console.log(roomCount(arr2));