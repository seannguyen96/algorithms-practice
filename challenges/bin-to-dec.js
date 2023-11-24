/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString){
    //multiply each binary digit by 2^it's position (binary is read from RIGHT TO LEFT)
        //add results together
    let result = 0
    let placeNumber = 0;
    for(let index = binString.length - 1; index >= 0; index--) {
        const digit = binString[index];
        result += (digit * (2 ** placeNumber))
        placeNumber++;
    }
    return result
}


module.exports = {binToDec};