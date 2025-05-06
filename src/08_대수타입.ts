/*
    대수타입
    여러개의 타입을 합성해 새롭게 만들어낸 타입
    -> 합집합 타입 , 교집합 타입
*/

// 1. 합집합 - Union
let a: string | number;
a = 1;
a = "aa";

let arr: (number | boolean | string)[] = [1, "aa", true];

type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  lang: string;
};
type Union1 = Dog | Person;
let union2: Union1 = {
  name: "이종철",
  color: "노랑",
};
let union3: Union1 = {
  name: "이종철",
  lang: "한국어",
};
let union4: Union1 = {
  name: "이종철",
  color: "노랑",
  lang: "한국어",
};
// 아래는 에러!
// let union5: Union1 = {
//   color: "노랑",
//   lang: "한국어",
// };

// 2. 교집합 - Intersection
//let var:number&string; 두 원시타입은 교집합이 없음..
type Dog2 = {
  name: string;
  color: string;
};
type Person2 = {
  name: string;
  lang: string;
};
type Intersection = Dog2 & Person2;
// 무조건 두개 각각의 프로퍼티가 모두 있어야한다.
let inter1: Intersection = {
  name: "이종철",
  color: "노랑",
  lang: "한국어",
};
