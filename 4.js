/* 4) Given a number, find the closest power of 2 which is less than or equal to the number. If the number is 36, your answer should be 5 as 32 (2^5) is the closest power less than 36.
Input: 36
Output: 5 */


function pow2(no){
var i,p;
  for(i=1;i<=no;i++){
  	if(Math.pow(2, i)<=no){
    	p=i;
    }
  
  }
  return p;
}

var a =9;
console.log(pow2(a));
