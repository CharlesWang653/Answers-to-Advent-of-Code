'use strict'

var fs=require('fs');
fs.readFile('question4Data.txt','utf-8',function(err,data){
	if(err){
		console.error(err);
	}
	else{
    let dataArr = data.split('\n');
    let res = dataArr.reduce((sum, str) => {//reduce all the ID to the Sum
      return sum + mostCommon(str);
    }, 0);
    console.log(res);
  }
})
const mostCommon = (str) => {
  let arr = str.split("-");
  let myMap = {};//the object store the letters
  for(let i = 0;i < arr.length - 1;i++){
    for(let j = 0;j < arr[i].length;j++){
      if(myMap[arr[i][j]]){
        myMap[arr[i][j]] = myMap[arr[i][j]] + 1;
      }else{
        myMap[arr[i][j]] = 1;
      }
    }
  }
  let Sorted = Object.keys(myMap).sort(//sort the object by times.
    function(a,b){
      if(myMap[b]-myMap[a] > 0){
        return 1;
      }else if(myMap[b]-myMap[a] < 0){
        return -1;
      }else{
        return a.charCodeAt(0) - b.charCodeAt(0);
      }
    })
  let check = Sorted.join("").substr(0, 5);//the checksum calculated.
  let checkInStr = arr[arr.length - 1].substr(-6, 5);//the word in the string
  if(checkInStr === check){
    return Number(arr[arr.length - 1].substr(0, arr[arr.length - 1].indexOf("[")));
  }else{
    return 0;
  }
  
}