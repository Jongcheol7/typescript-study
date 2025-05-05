// any 는 치트키라 모든 타입 할당 가능하다.
// 최대한 사용 자제하자.
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;

// 가능은 하나 문제되는 요소..
let str: string = "테스트";
str = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = 10;
unknownVar = "hello";
//any와 다르게 다른 타입에 할당 불가. 조금 안전한 수준?
//str = unknownVar;
