function forLoop(array) {
  for(let i = 0; i < 25; i++){
    if (i == 1) {
      return 'I am 1 strange loop.'
    } else {
      return `I am ${i} strange loops.`
  }
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num)
    return 'done'
  }
}
