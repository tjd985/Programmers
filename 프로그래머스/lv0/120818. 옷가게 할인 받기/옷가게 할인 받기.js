function solution(price) {
    return Math.floor(price >= 500000? price-(price*0.2) : price >= 300000? price-(price*0.1) : price >= 100000? price-(price*0.05) : price);
}