/**
 * 클래스
 */
let studentA = {
  name: "이종철",
  grade: "A+",
  age: 30,
  study() {
    console.log("열심히 공부하자");
  },
  introduce() {
    console.log("안녕하세요");
  },
};
/*
let studentB = {
  name: "홍길동",
  grade: "B+",
  age: 30,
  study() {
    console.log("열심히 공부하자");
  },
  introduce() {
    console.log("안녕하세요");
  },
};
*/

class Student {
  //필드
  name;
  grade;
  age;
  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  //메서드
  study() {
    console.log("열심히 공부하자");
  }
  introduce() {
    console.log("안녕하세요");
  }
}

// 클래스를 이용해서 만든 객체 => 인스턴스
let studentB = new Student("이종철", "A+", 30);
console.log(studentB);
studentB.study();

class StudentDeveloper extends Student {
  //   name;
  //   grade;
  //   age;
  skill;
  constructor(name, grade, age, skill) {
    super(name, grade, age);
    this.skill = skill;
  }
  programming() {
    console.log(`${this.skill}로 프로그래밍 함`);
  }
}
const studentDeveloper = new StudentDeveloper("이종철", "A+", 30, "NextJs");
console.log(studentDeveloper);
