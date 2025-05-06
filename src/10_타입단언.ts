/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

// 아래처럼 나중에 값을 할당하고 싶은경우가 있지만 오류가 발생한다.
//let person: Person = {};
//person.name = "이종철";
//person.age = 30;

let person = {} as Person;
person.name = "이종철";
person.age = 30;

type Dog = {
  name: string;
  color: string;
};
let dog: Dog = {
  name: "돌돌이",
  color: "brwon",
  age: 3, //초과프로퍼티 발생 따라서 타입단언 해줘야 가능
} as Dog;

/**
 * 타입 단언 규칙
 * 값 as 단언
 * A as B
 * A가 B의 슈퍼타입 혹은 서브타입이여야 함
 */
let num1 = 10 as never; //number는 never의 슈퍼타입
let num2 = 10 as unknown; //number는 unknown의 서브타입
//let num3 = 10 as string; //number와 string은 서로 부모자식관계가 아님

/**
 * const 단언
 * 리터럴로 변한다.
 */
let num3 = 10 as const;
let cat = {
  name: "야옹이",
  age: 3,
} as const;

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};
let post: Post = {
  title: "게시글1",
  author: "이종철",
};
//const len: number = post.author?.length;
const len: number = post.author!.length;
