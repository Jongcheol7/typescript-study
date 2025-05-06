/**
 * 인터페이스
 */
interface Person {
  readonly name: string;
  age?: number;
  //sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "이종철",
  //age: 30,
  sayHi: function () {
    console.log("hi");
  },
};

//person.name = "홍길동";
person.sayHi();
person.sayHi(1, 2);

/**
 * 인터페이스의 확장
 */
interface Animal {
  name: string;
  age: number;
}
interface Dog extends Animal {
  //   name: string;
  //   age: number;
  isBark: boolean;
}
interface Cat extends Animal {
  //   name: string;
  //   age: number;
  isScratch: boolean;
}
interface Chicken extends Animal {
  //   name: string;
  //   age: number;
  name: "hello";
  isFly: boolean;
}
const chicken: Chicken = {
  name: "hello",
  age: 2,
  isFly: true,
};

// 인터페이스는 다중 확장 가능
interface DogCat extends Dog, Cat {}
const dogCat: DogCat = {
  name: "",
  age: 0,
  isBark: true,
  isScratch: true,
};

/**
 * 인터페이스의 선언 합침
 */
/* 타입은 아래와 같이 동일한 이름으로 선언시 에러
type Person1 = {
  name: string;
};
type Person1 = {
  age: number;
};
*/
interface Person1 {
  name: string;
}
interface Person1 {
  age: number;
}
const person1: Person1 = {
  name: "",
  age: 1,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
