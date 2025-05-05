//let numArr = [1, 2, 3];
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["aa", "bb"];

//let multiArr = [1, "aa"];
// Union 으로 합집합 같은 의미
let multiArr: (number | string)[] = [1, "aa", 3];

// 다차원 배열
let doubleArr: number[][] = [
  [1, 2],
  [1, 2, 3],
];

// 튜플
// 길이와 타입이 고정된 배열을 의미
let tup1: [number, number] = [1, 2];
let tup2: [number, string, number] = [1, "aa", 3];
//결국 튜플은 컴파일하면 js의 배열이므로 추가하거나 삭제 가능
//따라서 각별히 유의해야한다.
//tup1.push(1);
