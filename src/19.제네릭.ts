function swap<T, U>(a: T, b: U) {
  return [a, b];
}
const [a, b] = swap("1", 2);
console.log(a, b);

function returnFirstVvalue<T>(data: T[]) {
  return data[0];
}
let num = returnFirstVvalue([9, 8, 7]);
let str = returnFirstVvalue([1, "hello", "name"]);
console.log(num, str);

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
let var1 = getLength([1, 2, 3]);
let var2 = getLength("123345");
let var3 = getLength({ length: 10 });
//let var4 = getLength(10);

/**
 * map 메서드
 */
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => it.toUpperCase());

/**
 * forEach 메서드
 */
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
forEach(arr2, (it) => {
  console.log(it.toFixed());
});
