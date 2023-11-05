/* No 1 Function'sum'(sum over 20 value from array)*/
const arr = [34, 22, 1, 2, 13, 4, 23];
let result = function sum(arr) {
    let a= arr.filter((elem)=> elem>20).reduce((accu,elem)=>elem+accu,0);
    return a; 
};
console.log(result(arr));

/* No 2 Function 'getNewArray'to get an array for the length of string which has over 5  */
const strArr = ["Java", "Spring Boot", "Spring", "Reat", "Java Script"];
let resultArr = function getNewArray(strArr) {
    let newArr = strArr.filter((elem)=> elem.length>=5 && elem.includes('a'));
    return newArr;
};
console.log(resultArr(strArr));

/* No 3 Arrow Function to concat the elements of the array */
const concat = (arrowArr) => arrowArr.map(elem=>{
    if(typeof elem === 'string')
        return elem.split('');
    return elem;
}).flat();
console.log(concat(['hi', [1, 2, 3], ['Hello', 'world']]));  /* Output: ['h', 'i', 1, 2, 3, 'Hello', 'world'] */

/* const concat = (arrowArr) => arrowArr.flat().map(elem=>elem); */