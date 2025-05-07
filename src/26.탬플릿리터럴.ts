/**
 * 템플릿리터럴 타입
 */
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chichen";
type ColoredAnimal = `${Color} - ${Animal}`;
const coloredAnimal: ColoredAnimal = "black - cat";
