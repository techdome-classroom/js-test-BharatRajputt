const decodeTheRing = function (s, p) {
 const m = s.length;
 const n = p.length;


 const dp = Array.from({length:m+1},()=>Array(n+1).fill(false));
 dp[0][0] = true;

 for(let j = 1; j<=n;j++){
  if(p[j-1]==='*'){
    dp[0][j] = dp[0][j-1];
  }
 }
 for(let i=1;i<=m;i++){
  for(let j=1;j<=n;j++){
    if(p[j-1]==)
  }
 }

  };
  
  module.exports = decodeTheRing;