function printNumber(from, to){
    for(let i=from; i<=to; i++){
        console.log(i);
    }
}

setTimeout(printNumber,1000,1,30);
console.log('end');