/**
 * 접근 제어자
 * public, private, protected
 */

class Employee {
  private name: string;
  age: number;
  protected position: string;
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  work() {
    console.log("일함");
  }
}
const employee = new Employee("이종철", 30, "developer");
// 아래처럼 자유롭게 인스턴스의 프로퍼티에 접근 가능
// 이유는 디폴트가 public 이기때문
employee.age = 20;
//employee.name = "홍길동" // X 클래스 외부에서는 접근 불가

class ExecutiveOfficer extends Employee {
  officeNumber: number;
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
  //메서드 추가
  func() {
    //this.name; private 이라 불가
    this.position; // 파생클래스에서만 가능하도록 protected 접근제어자로 세팅
  }
}

// 아래처럼 생성자에 접근제어자를 쓰면 필드 생략 가능
// 초기화도 안써도 된다.
class Employee2 {
  constructor(
    private name: string,
    public age: number,
    protected position: string
  ) {}
  work() {
    console.log("일함");
  }
}
const employee2 = new Employee2("이종철", 30, "developer");
console.log(employee2);
