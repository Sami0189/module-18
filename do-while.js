// let i =0;
// while(i<5){
//     console.log(i);
//     i++
// }

// let n =10;
// do{
//     console.log(n);
//     n++;
// }
// while(n<5)

// let a = 5;
// let b = 10;
// let result = a*b;
// console.log(result);

// for (let i = 1; i <= 5; i++) {
//     console.log(`5 x ${i}=${5*i}`);
// }

// for(let i = 0;i<5;i=i+3){
//     console.log(i);
// }

const array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 1; i < array.length; i = i + 1) {
  if (i == 5) {
    continue;
  }
  console.log(array[i]);
}
