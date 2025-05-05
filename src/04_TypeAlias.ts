// 타입 별칭
type User = {
  id: number;
  name: string;
};

let user: User = {
  id: 1,
  name: "이종철",
};

// 인덱스 시그니처
type CountryCode = {
  [key: string]: string;
};
let countryCode: CountryCode = {
  Korea: "ko",
  Japan: "jp",
};
