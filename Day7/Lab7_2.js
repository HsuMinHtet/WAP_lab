let i = 0;
setTimeout(() => console.log("from setTimeout",i), 100); // ?
// assume that the time to execute this function is >100ms
console.log(i);
for(let j = 0; j < 100000000; j++) {
  i++;
} 
console.log(i);
/* 
out put will be the following
0
100000000
from setTimeout 100000000
 */