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

// function straights(hand, groupSize) {
//   if(hand.length % groupSize != 0) return false;

//   let sortedHand = hand.sort();
//   let handSize = hand.length / groupSize;
//   let newSet = new Set([]);
//   let index = 0;
//   let setStart;

//   while (sortedHand.length > 0 && newSet.size < handSize){ 
//     const card = sortedHand[index];
//     if(!newSet.has(card)) { 
//       if(newSet.size === 0) setStart = card;
//       newSet.add(card);
//       sortedHand.splice(index, 1);
//       index = 0;
//     } else {
//         index++
//     }
//     if(newSet.size === handSize) {
//       for(let i = 1; i < handSize; i++) {
//         if(!newSet.has(setStart + i)) return false
//       }
//     }
//   }
//   return true
// }


//  * REVISION *  
//  count frequencies of each card
//  sort unique cards
//  form groups, starting at the lowest unique card
//  update frequency of each card used in group if successful

function allStraights(hand, groupSize) {
  console.log(hand)
  if(hand.length % groupSize !== 0) return false;

  const cardCount = {};
  for(let card of hand) {
    cardCount[card] = (cardCount[card] || 0) + 1;
    console.log(cardCount);
  }
  const uniqueCards = Object.keys(cardCount).map(Number).sort((a, b) => a - b);
  console.log(uniqueCards)
  
  for(let card of uniqueCards) {
    const count = cardCount[card];
    if(count > 0) { //need to form count groups starting with 'card'
      for(let j = 0; j < groupSize; j++) {
        const nextCard = card + j;
        if((cardCount[nextCard] || 0 ) < count) return false;
        cardCount[nextCard] -= count;
      }
    }
  }
  return true;
}

const hand1 = [1,2,3,6,2,3,4,7,8], groupSize1 = 3;
const hand2 = [1,2,3,4,5], groupSize2 = 4;
// console.log(straights(hand1, groupSize1));
// console.log(straights(hand2, groupSize2));
console.log(allStraights(hand1, groupSize1));
console.log(allStraights(hand2, groupSize2));