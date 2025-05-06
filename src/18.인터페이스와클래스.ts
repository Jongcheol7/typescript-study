/**
 * 인터페이스와 클래스
 */
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 인터페이스로 구현하는 필드는 무조건 public 이다 !!
class Character implements CharacterInterface {
  //   name: string;
  //   moveSpeed: number;
  constructor(public name: string, public moveSpeed: number) {
    // this.name = name;
    // this.moveSpeed = moveSpeed;
  }
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
