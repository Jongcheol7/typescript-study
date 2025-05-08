/**
 * 조건부 타입
 */
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};
type objB = {
  a: number;
  b: number;
};
type B = objB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number> = "aa";
let varB: StringNumberSwitch<string> = 3;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}
let result = removeSpaces("a b  c");
console.log(result);
result.toUpperCase();
let result2 = removeSpaces(undefined);

/**
 * 분산적인 조건부 타입
 */
type StringNumberSwitch2<T> = T extends number ? string : number;
let c: StringNumberSwitch2<number | string>;
let d: StringNumberSwitch2<boolean | number | string>;

/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;
type A1 = Exclude<number | string | boolean, string>;
