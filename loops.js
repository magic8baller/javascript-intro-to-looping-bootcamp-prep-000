function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if (i === 1){
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array;
}


function whileLoop(num) {
  while(num > 0) {
    console.log(--num);
  }
  return 'done';
}


function doWhileLoop(array) {
  let i = 0;
   function incrementVariable() {
     i++;
   }
   do {
     return array;
     --i;
   } while (array.length && !incrementVariable());
}
