'use strict'

var fs=require('fs');
var myMap = {};
fs.readFile('question10Data.txt','utf-8',function(err,data){
	if(err){
		console.error(err);
	}
	else{
    let instructionsArr = data.split('\n');
    buildMap(instructionsArr);//build the structure of all the bots.
    console.log(findTheBot(instructionsArr, 61, 17));//go through the structure. 
    console.log(res0*res1*res2);
  }
});
var res0 = 1;
var res1 = 1;
var res2 = 1;
const buildMap = (instructionsArr) => {//create the structure;
  instructionsArr.forEach((instruction) => {
    if(instruction.startsWith("bot")){
      let matches = instruction.match(/bot \d+/g); 
      let outPutMatch = instruction.match(/output \d+/g);
      if(matches.length === 3){
        myMap[matches[0]] = {...myMap[matches[0]],low : matches[1], high: matches[2]};
      }else if(outPutMatch.length === 1){
        if(instruction.indexOf("output") > instruction.indexOf("bot", 4)){
          myMap[matches[0]] = {...myMap[matches[0]],low : matches[1], high: outPutMatch[0]};
        }else{
          myMap[matches[0]] = {...myMap[matches[0]],low : outPutMatch[0], high: matches[1]};
        }
      }else {
        myMap[matches[0]] = {...myMap[matches[0]],low : outPutMatch[0], high: outPutMatch[1]};
      }
    }
  });
}
const findTheBot = (instructionsArr, num1, num2) => {
  let queue = [];
  instructionsArr.forEach((instruction) => {
    if(instruction.startsWith("value")){
      let matches = instruction.match(/bot \d+/g); 
      let valuematch = instruction.match(/value \d+/g); 
      let value = Number(valuematch[0].substring(6,valuematch[0].length));
      if(!myMap[matches[0]].val){
        myMap[matches[0]] = {...myMap[matches[0]], val : [value]};
      }else if(myMap[matches[0]].val.length === 1){
        myMap[matches[0]].val.push(value);

        queue.push(matches[0]);
        let cur = matches[0];
        while(queue.length > 0){//BFS
          cur = queue.shift();
          if(myMap[cur].val[0] > myMap[cur].val[1]){//get the smaller one to the low
            if(!myMap[cur].low.startsWith("output")){//if the next go to output, disregard this.
              if(!myMap[myMap[cur].low].val){//if there's no val attr, in this.low, create val.
                  myMap[myMap[cur].low] = {...myMap[myMap[cur].low], val : [myMap[cur].val[1]]};
                }else{
                  queue.push(myMap[cur].low);
                  myMap[myMap[cur].low].val.push(myMap[cur].val[1]);
                }
              }
              else{
                switch(myMap[cur].low){
                  case "output 0":
                    if(res0 === 1){
                      res0 *= myMap[cur].val[1];
                    }
                    break;
                  case "output 1":
                    if(res1 === 1){
                      res1 *= myMap[cur].val[1];
                    }
                    break;
                  case "output 2":
                    if(res2 === 1){
                      res2 *= myMap[cur].val[1];
                    }
                    break;
                }
              }
              if(!myMap[cur].high.startsWith("output")){
                if(!myMap[myMap[cur].high].val){
                  myMap[myMap[cur].high] = {...myMap[myMap[cur].high], val : [myMap[cur].val[0]]};
                }else{
                  queue.push(myMap[cur].high);
                  myMap[myMap[cur].high].val.push(myMap[cur].val[0]);
                }
              }
              else{
                switch(myMap[cur].high){
                  case "output 0":
                    if(res0 === 1){
                      res0 *= myMap[cur].val[0];
                    }
                    break;
                  case "output 1":
                    if(res1 === 1){
                      res1 *= myMap[cur].val[0];
                    }
                    break;
                  case "output 2":
                    if(res2 === 1){
                      res2 *= myMap[cur].val[0];
                    }
                    break;
                }
              }
            }else{
              if(!myMap[cur].low.startsWith("output")){
                if(!myMap[myMap[cur].low].val){
                  myMap[myMap[cur].low] = {...myMap[myMap[cur].low], val : [myMap[cur].val[0]]};
                }else{
                  queue.push(myMap[cur].low);
                  myMap[myMap[cur].low].val.push(myMap[cur].val[0]);
                }
              }else{
                switch(myMap[cur].low){
                  case "output 0":
                    if(res0 === 1){
                      res0 *= myMap[cur].val[0];
                    }
                    break;
                  case "output 1":
                    if(res1 === 1){
                      res1 *= myMap[cur].val[0];
                    }
                    break;
                  case "output 2":
                    if(res2 === 1){
                      res2 *= myMap[cur].val[0];
                    }
                    break;
                }
              }
              
              if(!myMap[cur].high.startsWith("output")){
                if(!myMap[myMap[cur].high].val){
                  myMap[myMap[cur].high] = {...myMap[myMap[cur].high], val : [myMap[cur].val[1]]};
                }else{
                  queue.push(myMap[cur].high);
                  myMap[myMap[cur].high].val.push(myMap[cur].val[1]);
                }
              }else{
                switch(myMap[cur].high){
                  case "output 0":
                    if(res0 === 1){
                      res0 *= myMap[cur].val[1];
                    }
                    break;
                  case "output 1":
                    if(res1 === 1){
                      res1 *= myMap[cur].val[1];
                    }
                    break;
                  case "output 2":
                    if(res2 === 1){
                      res2 *= myMap[cur].val[1];
                    }
                    break;
                }
              }
            }
            myMap[cur].val.length = 0;
        }
      }
    }
  });
}