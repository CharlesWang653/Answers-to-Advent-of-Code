'use strict'
let checkWord = "northpole object storage";
var fs=require('fs');
fs.readFile('question4Data.txt','utf-8',function(err,data){
	if(err){
		console.error(err);
	}
	else{
    let dataArr = data.split('\n');
    let sum = 0;
    let res = dataArr.forEach((str) => {
      let shift = mostCommon(str);
      if(shift !== 0){
        shift = shift % 26;
        let word = convertStr(str, shift);
        if(word == checkWord){
          console.log(str);
        }
      }
    });
  }
})
const convertStr = (str, shift) => {
  let arr = str.split("-");
  let res = "";
  for(let i = 0;i < arr.length - 1;i++){
    let word = ""
    for(let j = 0;j < arr[i].length;j++){
      if(arr[i][j].charCodeAt(0) + shift > 'z'.charCodeAt(0)){
        let charCode = arr[i][j].charCodeAt(0) + shift - 'z'.charCodeAt(0) + 'a'.charCodeAt(0) - 1;
        word = word + String.fromCharCode(charCode);
      }else{
        let charCode = arr[i][j].charCodeAt(0) + shift;
        word = word + String.fromCharCode(charCode);
      }
    }
    res = res + word + " ";
  }
  return res.substring(0, res.length - 1);
}
const mostCommon = (str) => {
  let arr = str.split("-");
  let myMap = {};
  for(let i = 0;i < arr.length - 1;i++){
    for(let j = 0;j < arr[i].length;j++){
      if(myMap[arr[i][j]]){
        myMap[arr[i][j]] = myMap[arr[i][j]] + 1;
      }else{
        myMap[arr[i][j]] = 1;
      }
    }
  }
  let Sorted = Object.keys(myMap).sort(
    function(a,b){
      if(myMap[b]-myMap[a] > 0){
        return 1;
      }else if(myMap[b]-myMap[a] < 0){
        return -1;
      }else{
        return a.charCodeAt(0) - b.charCodeAt(0);
      }
    })
  let check = Sorted.join("").substr(0, 5);
  let checkInStr = arr[arr.length - 1].substr(-6, 5);
  if(checkInStr === check){
    return Number(arr[arr.length - 1].substr(0, arr[arr.length - 1].indexOf("[")));
  }else{
    return 0;
  }
  
}