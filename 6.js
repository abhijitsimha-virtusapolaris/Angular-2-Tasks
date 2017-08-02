/* 6) Find all pairs in array of integers whose sum is equal to given number.
Input: sum = 8
[1, 4, 3, 5, 4, 6, 7, 8, 3]
Output:
"1, 7"
"4, 4"
"3, 5"
"5, 3" */



function repeatedNUM(arr){
var len = arr.length;
var i,j,k;
 var c= 0;
  var add=0;
  var flag =false; 
  console.log(len);
  var resultArr =[];
  for(i = 0;i< len ;i++){
  	for(j=0;j<len;j++){
 		if(i==j){
        j++
        }
      if((arr[i]+arr[j])===8){
      	resultArr.push(arr[i],arr[j]);
       
      }
  
}
  }
  
 
  return resultArr;
}

var a =[1, 4, 3, 5, 4, 6, 7, 8, 3];
console.log(repeatedNUM(a));