/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCnt: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCnt: number;
};
type User = Admin | Member | Guest;

// Admin ->{name}님 현재까지 {kickCnt}명 강퇴하였습니다.
// Member->{name}님 현재까지 {point}모았습니다.
// Guest ->{name}님 현재까지 {visitCnt}번 오셨습니다.
// 태그가 없었다면 아래처럼 다른 객체에 없는걸 찾아서 타입가드에 넣어야했다.
/*
function login(user: User) {
  if ("kickCnt" in user) {
    console.log(`${user.name}님 현재까지 ${user.kickCnt}명 강퇴하였습니다.`);
  } else if ("point" in user) {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCnt}번 오셨습니다.`);
  }
}
*/

function login(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCnt}명 강퇴하였습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCnt}번 오셨습니다.`);
  }
}

function login2(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCnt}명 강퇴하였습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visitCnt}번 오셨습니다.`);
      break;
  }
}

/**
 * 복습겸 한가지 더 사례
 * 비동기 작업의 결과를 처리하는 객체
 */
type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};
// 아래처럼 하면 좀 그렇다..
// 그래서 서로소 유니온으로 각각의 타입으로 나눈후 합친다.
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩중");
      break;
    case "FAILED":
      console.log(`에러발생 : ${task.error && task.error!.message}`);
      break;
    case "SUCCESS":
      console.log("성공");
      break;
  }
}
const loading: AsyncTask = {
  state: "LOADING",
};
const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은~~",
  },
};
const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~~",
  },
};
