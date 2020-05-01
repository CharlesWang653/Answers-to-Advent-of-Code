const AoCd1p2 = (directions) => {
    
  const nav = { 
      n: { L: 'w', R: 'e', plane: 'y', offset: 1 }, 
      e: { L: 'n', R: 's', plane: 'x', offset: 1 }, 
      s: { L: 'e', R: 'w', plane: 'y', offset: -1 }, 
      w: { L: 's', R: 'n', plane: 'x', offset: -1 }
  }, mem = { x0y0: true }

  let key

  return Object.values(
      directions.reduce((state, dir) => {
          
          if (state.found) return state

          state.dir = nav[state.dir[dir[0]]]

          for (let i = 0, j = +dir.slice(1); i < j && !state.found; i++) {
              state.pos[state.dir.plane] += state.dir.offset
              key = `x${state.pos.x}y${state.pos.y}`

              if (mem[key]) state.found = true
              else mem[key] = true
          }

          return state
      }, { dir: nav.n, pos: { x: 0, y: 0 }, found: false }).pos
  ).reduce((sum, val) => sum + Math.abs(val), 0)
}
let str = "L2, L3, L3, L4, R1, R2, L3, R3, R3, L1, L3, R2, R3, L3, R4, R3, R3, L1, L4, R4, L2, R5, R1, L5, R1, R3, L5, R2, L2, R2, R1, L1, L3, L3, R4, R5, R4, L1, L189, L2, R2, L5, R5, R45, L3, R4, R77, L1, R1, R194, R2, L5, L3, L2, L1, R5, L3, L3, L5, L5, L5, R2, L1, L2, L3, R2, R5, R4, L2, R3, R5, L2, L2, R3, L3, L2, L1, L3, R5, R4, R3, R2, L1, R2, L5, R4, L5, L4, R4, L2, R5, L3, L2, R4, L1, L2, R2, R3, L2, L5, R1, R1, R3, R4, R1, R2, R4, R5, L3, L5, L3, L3, R5, R4, R1, L3, R1, L3, R3, R3, R3, L1, R3, R4, L5, L3, L1, L5, L4, R4, R1, L4, R3, R3, R5, R4, R3, R3, L1, L2, R1, L4, L4, L3, L4, L3, L5, R2, R4, L2";
let arr = str.split(', ');
console.log(AoCd1p2(arr));