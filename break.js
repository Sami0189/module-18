//continue -->skip rest of th code for this iteration
//break-->i am done with this loop. loop end.



// for(let i = 0; i<15;i++){
//     console.log(i);
//     if(i>=5){
//         break;
//     }
// }


//  let n = 54;
//  while(n>20){
//     if(n<45){
//         break;
//     }
//     console.log(n);
    
//     n--;
//  }


for(let i =1; i<10;i++){
    if(i%2===1){
        continue;
    }
    console.log(i);
}


let n = 0;
while(n<15){
    n++;
    if(n%5!==0){
        continue;
    }
    console.log(n);
    
}