function solution(a, b) {
    let c = 0;
    let answer = 0;
    if(a > b){
        c = a;
        a = b;
        b = c;
    }
    
    for(let i = a; i<=b; i++){
        answer += i;
    }
    
    return answer;
}