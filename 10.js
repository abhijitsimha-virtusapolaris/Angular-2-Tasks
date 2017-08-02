/* 10) Write a function that takes an array of words and returns an array containing
only of palindromes.
Note: Use the above function to check if a word is a palindrome.
Input: ["Malayalam", "tree", "boat", "civic", "melt", "level"]
Output: ["Malayalam", "civic", "level"] */


function palindrome(a) {
var len =a.length;
 var str;
  var c=0;
  var strLen;
  palinArray = [];
  for(k=0;k<len;k++){
    c=0;
    str =a[k];
    strLen = str.length;
    for ( var i = 0; i < Math.floor(strLen/2); i++ ) {
        if (str[i] !== str[strLen - 1 - i]) {
        	break;
        }
      else{
      c++;
      }
    }
    
  
    if(c==(Math.floor(strLen/2))){
       
    palinArray.push(str);
    }
    }
  return palinArray;



}

a =['afaf','hahahah','sssss','hih','malayalam'];
console.log(palindrome(a));