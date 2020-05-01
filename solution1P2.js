'use strict'
const minStep = (arr) => {
  let directionMap = new Map();
  let direction = ['N', 'E', 'S', 'W'];//face direction
  let coord = {X:0,Y:0};//coordinate
  let point = 0;
  let coordSet = new Set();//all the points on the path
  let res = null;
  arr.forEach((step) => {
    switch(step[0]){
      case 'R':
        point = point + 1;
        if(point === 4){
          point = 0;
        }
        break;
      case 'L':
        point = point - 1;
        if(point === -1){
          point = 3;
        } 
        break;
    }
    let num = Number(step.substring(1,step.length));
    switch(direction[point]){
      case 'N':
        for(let i = 1;i <= num;i++){
          coord.Y = coord.Y + 1;
          if(coordSet.has(JSON.stringify(coord)) && res === null){
            res = {...coord};
          }else{
            coordSet.add(JSON.stringify(coord));
          }
        }
        break;
      case 'S':
        for(let i = 1;i <= num;i++){
          coord.Y = coord.Y - 1;
          if(coordSet.has(JSON.stringify(coord)) && res === null){
            res = {...coord};
          }else{
            coordSet.add(JSON.stringify(coord));
          }
        }
        break;
      case 'W':
        for(let i = 1;i <= num;i++){
          coord.X = coord.X - 1;
          if(coordSet.has(JSON.stringify(coord)) && res === null){
            res = {...coord};
          }else{
            coordSet.add(JSON.stringify(coord));
          }
        }
        break;
      case 'E':
        for(let i = 1;i <= num;i++){
          coord.X = coord.X + 1;
          if(coordSet.has(JSON.stringify(coord)) && res === null){
            res = {...coord};
          }else{
            coordSet.add(JSON.stringify(coord));
          }
        }
        break;
    }
    
  });
  return res;
}
let str = "L2, L3, L3, L4, R1, R2, L3, R3, R3, L1, L3, R2, R3, L3, R4, R3, R3, L1, L4, R4, L2, R5, R1, L5, R1, R3, L5, R2, L2, R2, R1, L1, L3, L3, R4, R5, R4, L1, L189, L2, R2, L5, R5, R45, L3, R4, R77, L1, R1, R194, R2, L5, L3, L2, L1, R5, L3, L3, L5, L5, L5, R2, L1, L2, L3, R2, R5, R4, L2, R3, R5, L2, L2, R3, L3, L2, L1, L3, R5, R4, R3, R2, L1, R2, L5, R4, L5, L4, R4, L2, R5, L3, L2, R4, L1, L2, R2, R3, L2, L5, R1, R1, R3, R4, R1, R2, R4, R5, L3, L5, L3, L3, R5, R4, R1, L3, R1, L3, R3, R3, R3, L1, R3, R4, L5, L3, L1, L5, L4, R4, R1, L4, R3, R3, R5, R4, R3, R3, L1, L2, R1, L4, L4, L3, L4, L3, L5, R2, R4, L2";
let arr = str.split(', ');
console.log(minStep(arr));