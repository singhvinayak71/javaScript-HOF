
function minMax(arr) {

  const max = [...arr].reduce((a, b) => Math.max(a, b));
  const min = [...arr].reduce((a, b) => Math.min(a, b))
  console.log(min)
  console.log(max)
  console.log(`{ max: ${max} , min: ${min} }`) 

}
// minMax(1, 2, 9, 3, 4, 5)
minMax([1, 2, 9, 3, 4, 5])