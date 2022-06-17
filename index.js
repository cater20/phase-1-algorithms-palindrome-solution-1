function isPalindrome(word) {
  // Write your algorithm here
  //const word =word.toLowercase;
 // const length=word.length.toLowercase;
 // const reversedword=reversedString(word);
   const smallWord=word.toLowercase
   const reversedWord=smallWord.split('').reverse('').join('')
   //console.log(reversedWord,smallWord);
   if(word === reversedWord)
   {
   return true
  }else{
   return false;
 }
   }
  


/* 
  Add your pseudocode here
use  function pass argument string 
  reverse the input string
if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
