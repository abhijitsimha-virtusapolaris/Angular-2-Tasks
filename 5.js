/* 5) Write a program that prints the numbers from 1 to N. But,  for multiples of three,  print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
Input: N = 17
Output:
1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17 */

function show(no){

var x;
var arr = [];

for (var x = 1; x <= no; x++)
{
  if((x % 3 === 0)&&(x % 5 === 0)){
    	arr.push('FizzBuzz');
    
     }
     else if (x % 3 === 0 )
    {
       arr.push('Fizz');
    }
  else if(x % 5 === 0 ){
          arr.push('Buzz');
          }
  else{
  	arr.push(x);
  }
}
return arr;
}
var a= 17;
console.log(show(a));