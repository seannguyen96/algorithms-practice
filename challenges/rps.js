/*

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters 'r', 'p', and 's'.

For example:

rps(0) -> ['']
rps(1) -> ['r', 'p', 's']
rps(2) -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
rps(3) -> [
  'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
  'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
  'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
]

The strings must be returned in the order suggested above.

*/

const rps = n => {
  let result = [];
  if(n === 0) result = [''];

  const rps = ['r', 'p', 's'];
  if(n===1) return rps;

  //iterate through each index of rps and append it to each index of result
  while(n>1) {
    // rps[0] + rps[0] = rr
    // rps[0] + rps[1] = rp
    // rps[0] + rps[2] = rs
    // rps[1] + rps[0] = pr
    // rps[1] + rps[1] = pp
    // rps[1] + rps[2] = ps
    for(let i = 0; i < rps.length; i++) {
      for(let j = 0; j< rps.length; j++) {
        console.log(rps[i] + rps[j])
        result.push(rps[i] + rps[j])
      }
    }
    n--;
  }

  return result;
};

console.log(rps(0));
console.log(rps(1));
console.log(rps(2));
console.log(rps(3));
/*

Extension:

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters in 'chars'. Assume that there will be
no duplicates in 'chars'.

This is equivalent to returning all possible passwords of length n given a
character set 'chars'.

For example:

passwords('ab', 1) -> ['a', 'b']
passwords('abxy', 2) -> [
  'aa', 'ab', 'ax', 'ay',
  'ba', 'bb', 'bx', 'by',
  'xa', 'xb', 'xx', 'xy',
  'ya', 'yb', 'yx', 'yy'
]

The strings must be returned in order reflecting the order of letters in 'chars'

*/

const passwords = (chars, n) => {
  
};

module.exports = {rps, passwords};
