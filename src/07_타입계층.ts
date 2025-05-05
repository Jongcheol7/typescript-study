// 타입도 계층이다.
// number(부모) - number literal(자식)
// 부모 = 자식 (ok)
// 자식 = 부모 (no)
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;
//num2 = num1;
