/**
 * 제네릭 인터페이스
 */
interface KeyPair<K, V> {
  key: K;
  value: V;
}
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 1,
};
let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처
 */
interface NumberMap {
  [key: string]: number;
}
let numberMap1: NumberMap = {
  key: 1,
  key2: 3,
};

interface Map<V> {
  [key: string]: V;
}
let stringMap: Map<string> = {
  key: "test",
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};
let stringMap2: Map2<string> = {
  key: "test2",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * 유저 관리 프로그램
 */
interface Student {
  type: "student";
  school: string;
}
interface Developer {
  type: "developer";
  skill: string;
}
interface User<T> {
  name: string;
  profile: T;
}
function goToSchool(user: User<Student>) {
  //if (user.profile.type === "student") {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
  //   } else {
  //     console.log("잘 못 오셨습니다.");
  //     return;
  //   }
}
const developerUser: User<Developer> = {
  name: "이종철",
  profile: {
    type: "developer",
    skill: "react",
  },
};
const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "서울대",
  },
};
