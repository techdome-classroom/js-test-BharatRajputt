const getTotalIsles = function (grid) {

  if(!grid || grid.length == 0){
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length
  let isLandCount = 0;

  const dfs = (row,col)=>{
    if(row<0 ||col<0 || row>=rows || col >= cols)
  }
  
};

module.exports = getTotalIsles;