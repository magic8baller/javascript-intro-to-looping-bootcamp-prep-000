function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.');
    } else {
      array.push('I am ${i} strange loops');
    }
  }
return array;
}

<<<<<<< HEAD
=======

>>>>>>> 1f1a4bb972c66b699fc4e625d3fbdf86d702b299
function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
return 'done';
}

<<<<<<< HEAD
function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do {
    array.length--;
  } while (array.length = 0 && maybeTrue());
    return array;
}
=======
const newArray = doWhileLoop(array);
const l = array.length;
function doWhileLoop(array) {
  return Math.random() >= 0.5;
}
do {
  l--;
  l <= 1;
} while ((array.length > 0 && maybeTrue()) || maybeTrue() !== true);
console.log(newArray);
>>>>>>> 1f1a4bb972c66b699fc4e625d3fbdf86d702b299
