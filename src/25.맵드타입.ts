/**
 * 맵드 타입
 * 인터페이스에서는 못만든다.
 */
interface User {
  id: number;
  name: string;
  age: number;
}
// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "이종철",
    age: 30,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // ...수정하는 기능
}
updateUser({
  id: 1,
  name: "이종철",
  age: 25,
});

// 맵드 사용
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type Booleanuser = {
  [key in keyof User]: boolean;
};
