// Alice has some number of cards and she wants to 
// rearrange the cards into groups so that each group is 
// of size groupSize, and consists of groupSize consecutive cards.

// Given an integer array hand where hand[i] is the value 
// written on the ith card and an integer groupSize, return true 
// if she can rearrange the cards, or false otherwise.

// Example 1:
// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

// Example 2:
// Input: hand = [1,2,3,4,5], groupSize = 4
// Output: false
// Explanation: Alice's hand can not be rearranged into groups of 4.

// Constraints:
// 1 <= hand.length <= 10^4
// 0 <= hand[i] <= 10^9
// 1 <= groupSize <= hand.length

//  input: integer array of cards = card[i] 
//  output: boolean if cards can be rearranged into whole groups and are straights

// base case - check if hand length is divisible by groupsize. if not then return false
// otherwise - iteratively check for sets of cards, starting with lowest value, 
  //  sort our current hand, and check for a sets of cards {1, 2, 3} where v=1, v+1=2, v+2=3
  //  if set does not have card, we add it. then update sortedHand. 
    //  otherwise go on to next card in sortedHand (index++)
    //  return false early, otherwise return true

function straights(hand, groupSize) {
  let straight = false;
  if(hand.length % groupSize != 0) return straight;

  let sortedHand = hand.sort();
  let handSize = hand.length / groupSize;
  let newSet = new Set([]);
  let index = 0;
  let setStart;

  while (sortedHand.length > 0 && newSet.size < handSize){ 
    const card = sortedHand[index];
    if(!newSet.has(card)) { 
      if(newSet.size === 0) setStart = card;
      newSet.add(card);
      sortedHand.splice(index, 1);
      index = 0;
    } else {
        index++
    }
    if(newSet.size === handSize) {
      for(let i = 1; i < handSize; i++) {
        if(!newSet.has(setStart + i)) return false
      }
    }
  }
  return true
}

const hand1 = [1,2,3,6,2,3,4,7,8], groupSize1 = 3;
const hand2 = [1,2,3,4,5], groupSize2 = 4;
console.log(straights(hand1, groupSize1));
console.log(straights(hand2, groupSize2));