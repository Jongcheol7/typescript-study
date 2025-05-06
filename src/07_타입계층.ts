// 타입도 계층이다.
// number(부모) - number literal(자식)
// 부모 = 자식 (ok)
// 자식 = 부모 (no)
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;
//num2 = num1;

// unknown 타입은 최상위 타입이므로 모든 자식타입을 할당할수 있다.
// 다시말하면 모든 타입은 unknown 타입으로 업캐스팅이 가능하다.
let a: unknown = 1; // number -> unknown
let b: unknown = []; // Array  -> unknown

// 공집합 never (모순순)
function errorFunc(): never {
  throw new Error();
}
// never 타입은 최하위 타입이므로 모든 타입으로 업캐스팅이 가능하다.

// void - 아무것도 반환하지 않는 함수
function noReturnFunc(): void {
  console.log("hi");
}

// any - 치트키 타입으로 계층도를 무시하고
// 모든 타입에 업캐스팅, 다운캐스팅 가능

// 객체 타입의 호환성
// 부모객체
type Animal = {
  name: string;
  color: string;
};
// 자식객체
type Dog = {
  name: string;
  color: string;
  age: number;
};
let animal: Animal = {
  name: "기린",
  color: "yellow",
};
let dog: Dog = {
  name: "강아지",
  color: "brown",
  age: 3,
};
animal = dog;
//dog = animal //불가

type Book = {
  name: string;
  price: number;
};
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};
let book: Book;
let programmingBook: ProgrammingBook = {
  name: "리엑트",
  price: 10000,
  skill: "react",
};
book = programmingBook;
//programmingBook = book;
// 초과 프로퍼티 검사
// 아래처럼 객체리터럴로 바로 넣을때는 초과프로퍼티가 발동해 되지 않는다.
// 따라서 위처럼 변수에 저장후 할당할때만 가능하다.
let book2: Book = {
  name: "리엑트",
  price: 10000,
  //skill: "react",
};
