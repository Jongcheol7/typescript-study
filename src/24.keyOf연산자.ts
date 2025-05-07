/**
 * keyOf 연산자
 * 무조건 타입에만 사용가능하다
 */
interface Person {
  name: string;
  age: number;
}
function getPropertykey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "이종철",
  age: 30,
};
getPropertykey(person, "name");
