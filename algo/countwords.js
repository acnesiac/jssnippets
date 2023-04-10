let zeroes = '1000010000001';
let zeroeslist = zeroes.split('');
console.log(zeroeslist);
let counter  = 0;
let max = 0;
zeroeslist.forEach( (v,i) => {
    if(v === '0' ){
        counter ++;
        if (counter > max){
            max = counter;        
        } 
    }
    else{
        counter=0;
    }
   
});

console.log(max);