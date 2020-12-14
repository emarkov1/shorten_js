// let variable
// let variable2
// // if (variable) {
// //   variable2 = vairable;
// // } else {
// //   variable2 = 'some value';
// // }
// variable2 = variable || 'some value';

// ----------------

// let x
// let y
// let z = 42

// let x, y, z = 42

// ----------------
// const names = ['john', 'mimosa', 'lorena', 'nicole'];

// for (const name of names) {
//   console.log(name);
// }

// for (const index in names) {
//   console.log(index);
// }

//-----------------------
// short usage of a callback function

const names = ['john', 'mimosa', 'lorena', 'nicole'];
function logCallback(name, idx, arr) {
  console.log(`names[${idx}] : ${name}`);
}
names.forEach(logCallback);
