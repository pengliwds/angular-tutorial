// 布尔值
// let isOk: boolean = true
// 数字
// let age: number = 18
// 字符串
// let name: string = 'Jack'
// 模板字符串
// let greeting: string = `大家好，我叫${name}，
// 我今年 ${age} 岁了`
// 数组（方式一）
// let list: number[] = [1, 2, 3]
// 数组（方式二）
// let list: Array<number> = [1, 2, 3]
// 元祖
var x = ['hello', 10];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
// 可以由枚举的值得到它的名字
// let colorName: string = Color[2]
// console.log(colorName)
// Any
// let anyVar: any
// anyVar = 1
// anyVar = 'hello'
// anyVar = true
// anyVar = [1, 2, 3]
// 类型推断
var someValue = 'this is a string';
// 尖括号语法
// let strLength: number = (<string>someValue).length
// as 语法
var strLength = someValue.length;
console.log(strLength);
