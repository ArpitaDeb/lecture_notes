// // 1.
// const num = 7;
// setTimeout(() => console.log('num :', num), 0) // 1
// console.log('num After :', num); // 2

// console.log('All done') // 3


// 2.
// num = 7
for(const num of [4, 7]) {
  setTimeout(() => console.log('num :', num), 0)// num : 4
  console.log('num After :', num); // num After : 4
}

console.log('All done')
