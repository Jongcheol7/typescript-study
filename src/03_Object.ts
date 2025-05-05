/*
let user = {
  id: 1,
  name: "이종철",
};
*/

let user: {
  id?: number;
  readonly name: string;
} = {
  id: 1,
  name: "이종철",
};

console.log(user.id);
console.log(user.name);

// id가 없으면 오류 발생. 객체는 기본적으로 모든 프로퍼티가 있어야한다.
// 굳이 id 프로퍼티를 받지 않아야 한다면 객체타입주석에 해당 프로퍼티 앞에 ? 붙여주면된다..
user = {
  //id: 2,
  name: "홍길동",
};

// 아래처럼 값을 바꿀수 있지만 못바꾸게 하려면 프로퍼티 앞에 readonly 붙이면 된다.
//user.name = "반가워";
