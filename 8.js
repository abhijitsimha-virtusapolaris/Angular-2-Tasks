/*  Given an object, containing names as keys and amount_paid by each of them as
values, write a function that takes such an object as input and calculates the total sum paid by them together.
Input: {"Rick": 85, "Amit": 42, "George": 53, "Tanya": 60, "Linda": 35}
Output: 275 */

function totalAMT(o){
var arr = [];
var i;  
var sum=0;  
arr =  Object.values(o);
 
  for(i=0;i<arr.length;i++){
  	sum = sum + arr[i];
  
  }
  return sum;
  }
  
  



var obj = {"Rick": 10,"Amit": 20,"George": 30,"Tanya": 40,"Linda": 50};
console.log(totalAMT(obj));