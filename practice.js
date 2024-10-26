// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log( sum);
// const fruits = ["Apple", "Banana", "Cherry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }




// const numbers = [3,5,7,2,8];
// let max = numbers[0];
// for(let i = 0; i<numbers.length;i++){
//     if(numbers[i]>max){
//         max = numbers[i];
//     }
// }
// console.log('max');

const numbers = [3, 5, 7, 2, 8];
let max = 0;
for (let i = 1; i < numbers.length; i++) {
    if(i>max){
        max =numbers[i];
   
    }    
}
console.log(max);
