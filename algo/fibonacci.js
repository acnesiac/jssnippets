const fibo= (a)=>{
   if (a < 2 ) return a;
    return fibo(a-1) + fibo( a-2);
};

console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));
console.log(fibo(8));
