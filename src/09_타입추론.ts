/**
 * 타입 추론
 */
// 초기값을 기준으로 타입을 자동으로 추론한다.
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이종철",
};
// 구조분해할당시에도 자동으로 추론해준다.
let { id, name } = c;
let [one, two] = [1, "aa"];
function func(message = "hello") {
  return "hello";
}

// 아래처럼 명시적으로 타입을 지정해주지 않으면
// 암묵적 any 타입으로 상황에 따라 타입이 변경된다.
let d; //암묵적 any타입
d = 10;
d.toFixed();
//d.toUpperCase();

d = "hello";
d.toUpperCase();
//d.toFixed();

// const 는 리터럴 타입이 된다. 아래는 number literal
const num = 10;
const str = "hello";
let arr = [1, "string"];
