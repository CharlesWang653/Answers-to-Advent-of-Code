'use strict'
const minStep = (arr) => {
  let directionMap = new Map();
  let direction = ['N', 'E', 'S', 'W'];
  let point = 0;
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
    if(directionMap.get(direction[point])){
      directionMap.set(direction[point], directionMap.get(direction[point]) + Number(step[1]));
    }else{
      directionMap.set(direction[point], Number(step[1]));
    }
  });
  let N = directionMap.get('N') ? directionMap.get('N'):0;
  let S = directionMap.get('S') ? directionMap.get('S'):0;
  let E = directionMap.get('E') ? directionMap.get('E'):0;
  let W = directionMap.get('W') ? directionMap.get('W'):0;
  let vertical = Math.abs(N - S);
  let horizon = Math.abs(W - E);
  return vertical + horizon;
}
let str = "L2, L3, L3, L4, R1, R2, L3, R3, R3, L1, L3, R2, R3, L3, R4, R3, R3, L1, L4, R4, L2, R5, R1, L5, R1, R3, L5, R2, L2, R2, R1, L1, L3, L3, R4, R5, R4, L1, L189, L2, R2, L5, R5, R45, L3, R4, R77, L1, R1, R194, R2, L5, L3, L2, L1, R5, L3, L3, L5, L5, L5, R2, L1, L2, L3, R2, R5, R4, L2, R3, R5, L2, L2, R3, L3, L2, L1, L3, R5, R4, R3, R2, L1, R2, L5, R4, L5, L4, R4, L2, R5, L3, L2, R4, L1, L2, R2, R3, L2, L5, R1, R1, R3, R4, R1, R2, R4, R5, L3, L5, L3, L3, R5, R4, R1, L3, R1, L3, R3, R3, R3, L1, R3, R4, L5, L3, L1, L5, L4, R4, R1, L4, R3, R3, R5, R4, R3, R3, L1, L2, R1, L4, L4, L3, L4, L3, L5, R2, R4, L2";
let arr = str.split(', ');
console.log(minStep(arr));