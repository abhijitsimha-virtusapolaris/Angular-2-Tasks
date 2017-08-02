/* Given an array print all the numbers that are repeating in it.
Input: [1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1]
Output:
"1"
"2"
"5"
"8"
"4" */

function repeatedNUM(arr){
var len = arr.length;
var i,j,k;
 var c= 0;
  var add=0;
  var flag =false; 
  console.log(len);
  var resultArr =[];
  for(i = 0;i< len ;i++){
    c=0;
  	for(j=0;j<len;j++){
 		
      if(arr[i]===arr[j]){
      	c++;
      }
      
    }
    if(c>=2){
      console.log("resarr "+arr[i], c, resultArr);
      if(resultArr.length==0){
     resultArr.push(arr[i]);
      }
      for(k=0;k<resultArr.length;k++){
        flag= false;
      	if(resultArr[k]!=arr[i]){
            flag=true;
           }
      }
      if(flag){
      resultArr.push(arr[i]);
      }
      
     
  }
  
  
  
  
}
  return resultArr;
}

var a =[1,1,2,2,3,5,5,6,6,8];
console.log(repeatedNUM(a));