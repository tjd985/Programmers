function solution(n) {
  let cnt = 0;
  for(let i=0; i<=n; i++){
    if(n%i === 0 && i%2 === 1) cnt++;
  }
  return cnt;
}