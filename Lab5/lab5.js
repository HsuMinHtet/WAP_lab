/* No 1 (sum over 20 value from array)*/
const arr = [34, 22, 1, 2, 13, 4, 23];
console.log(arr);
console.log(arr.length);
let result = function sum(arr) {
     let a=0;
     for(let i=0; i< arr.length; i++){
         if(arr[i]>20){
             a+=arr[i];
         }
     }
    return a;
};
console.log(result(arr));

/* No 2 create an array for the length of string which has over 5  */
const strArr=["Java", "Spring Boot", "Spring", "Reat","Java Script"];

let  resultArr= function getNewArray(arr){
    let j=0;
    let newArr=[];
    for(let i=0; i<arr.length; i++){        
        if(arr[i].length>=5){
            newArr[j]=arr[i];
            j++;
        }
    }
    return newArr;
};

console.log(resultArr(strArr));

/* No 3 */
const concat = (...args) => {
    const result3 = [];
    args.forEach(arg => {
      if (typeof arg === 'string') {
        result3.push(...arg);
      } else if (Array.isArray(arg)) {
        result3.push(...arg);
      }
    });
    return result3;
  };
  
  const resultTest = concat('hi', [1, 2, 3], ['Hello', 'world']);
  console.log(resultTest); // Output: ['h', 'i', 1, 2, 3, 'Hello', 'world']