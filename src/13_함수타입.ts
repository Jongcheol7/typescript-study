/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 필수매개변수 앞에 선택적 매개변수가 오면 안된다.
 */
function introduce(name = "이종철", tall?: number) {
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
  // 아래 식은 선택적 매개변수로써 undefined가 될수도 있기 때문에
  // 타입가드로 확실히 number 라고 가정해줘야한다.
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}
introduce("이종철", 175);
introduce("이종철");

function getSum(...rest: number[]): number {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
getSum(1, 2, 3);

/**
 * 함수 타입 표현식
 */
type Opper = (a: number, b: number) => number;
const add2: Opper = (a, b) => a + b;
const sub: Opper = (a, b) => a - b;

/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?
 * 1. 반환값의 타입이 호환되는지?
 * 2. 매개변수의 타입이 호환되는지?
 */
// 기준1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10;
let a: A = () => 10;
let b: B = () => 10;
a = b;
//b = a;

// 기준2. 매개변수가 호환되는가?
// 2-1. 매개변수의 개수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {};
let d: D = (value) => {};
//c = d; //매개변수인 경우 업캐스팅은 안된다?
d = c;
// 2-2. 매개변수의 개수가 다를때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;
let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};
func1 = func2;
//func2 = func1;

/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 */
// 함수의 구현부 없이 선언식만 해놓은것 : 오버로드 시그니처
function funcA(a: number): void;
function funcA(a: number, b: number, c: number): void;
// 실제 구현부
function funcA(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

//funcA();
funcA(1);
funcA(1, 2, 3);

/**
 * 사용자 정의 타입가드
 */
type Dog = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};

// animal 이 true 를 리턴하면 Dog 타입이다.
function isDog(animal: Animal): animal is Dog {
  // if("isBark" in animal){
  //     return true;
  // }else{
  //     return false;
  // }
  return (animal as Dog).isBark !== undefined;
}
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}
type Animal = Dog | Cat;
function warning(animal: Animal) {
  if (isDog(animal)) {
    //강아지
    animal;
  } else if (isCat(animal)) {
    //고양이
    animal;
  }
}
