- [TypeScript Github](https://github.com/Microsoft/TypeScript)
- [TypeScript 官网](https://www.typescriptlang.org/)
- [TypeScript 中文网](https://www.tslang.cn/)

## TypeScript 介绍

### 课程介绍

### 你能学到什么

### 前置知识

- EcmaScript 5
- EcmaScript 6
- TypeScript 概念及关系
- 具有一定的 JavaScript 开发经验

### What

- 一种类似于 JavaScript 的语言，增强了 JavaScript
- 遵循 EcmaScript 6 标准规范
- 由微软开发
- Angular 2 框架采用 TypeScript 编写
- 背后有微软和谷歌两大公司的支持
- TypeScript 可以编译成 JavaScript 从而在支持 JavaScript 的环境中运行
- 开源免费
- 作者是 C# 之父

### Why TypeScript

- 遵循 EcmaScript 6
- 强大的 IDE 支持
  - 类型检查
  - 语法提示
- Angular 开发语言
  - 从 Angular 2 之后
  - 学习 TypeScript 有助于我们学习使用 Angular

### How

### 与其他框架/库配合

- https://www.typescriptlang.org/samples/index.html

### 一些资源

## 起步

### 搭建 TypeScript 开发环境

- 什么是 compiler？
- less 编译器：`less`
- EcmaScript 6 编译器：`babel`
- TypeScript 编译器：`typescript`
- 一句话：把 TypeScript 转换为 JavaScript ，浏览器就具有运行了
- 在线测试编译环境 compiler
  - https://www.typescriptlang.org/play/index.html
- 本地开发编译环境

```shell
npm i -g typescript

# 查看版本号
tsc --version

# 查看使用帮助
tsc --help
```

### 编辑器的选择

- Visual Studio Code
- Sublime
- Webstorm
- ...

### Hello World




新建 `greeter.ts` 并写入以下内容：

```typescript
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```

安装编译器：

```shell
npm i -g typescript
```

编译：

```shell
tsc greeter.ts
```

修改 `greeter.ts` 文件中的代码，为 greeter 函数的参数 person 加上类型声明 `:string`：

```typescript
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```

重新编译执行。

让我们继续修改：

```typescript
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);
```

重新编译，你将看到如下错误：

```
error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

### 接口（Interface）

```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
```

### 类（Class）

```typescript
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```

## 变量声明

### `var`

### `let`

- 块级作用域
- 在同一个块中不能重复声明

### `const`

- 声明同时必须赋值
- 一定声明不可改变
  - 对象可以修改
- 块级作用域

### `let` vs `const`

使用[最小特权原则](https://en.wikipedia.org/wiki/Principle_of_least_privilege)，所有变量除了你计划去修改的都应该使用`const`。 基本原则就是如果一个变量不需要对它写入，那么其它使用这些代码的人也不能够写入它们，并且要思考为什么会需要对这些变量重新赋值。 使用 `const`也可以让我们更容易的推测数据的流动。

## 基本数据类型

### 布尔值

```typescript
let isDone: boolean = false;
```

### 数字

```typescript
let amount: number = 6;
```

### 字符串

- 类型
- 模板字符串
  - 支持换行
  - 支持内嵌表达式
- 和 JavaScript 一样，可以使用双引号，也可以使用单引号，推荐单引号

```typescript
let nickname: string = '张三';
```

还可以使用模板字符串（换行 + 嵌入表达式）：

```typescript
let nickname: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my nickname is ${ nickname }.

I'll be ${ age + 1 } years old next month.`;
```

### 数组

TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上`[]`，表示由此类型元素组成的一个数组：

```typescript
let list: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型，`Array<元素类型>`：

```typescript
let list: Array<number> = [1, 2, 3];
```

### 元组

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为`string`和`number`类型的元组。

```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

### Object

- 允许赋任意值
- 但是不能调用任意方法，即便它真的有

```typescript
let foo: Object = {
  name: 'Jack',
  age: 18
}
```

> 知道即可，用的很少，没有类型校验和语法提示

### Any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 `any`类型来标记这些变量：

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

### Void

`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`：

```typescript
function warnUser(): void {
  alert("This is my warning message");
}
```

声明一个`void`类型的变量没有什么大用，因为你只能为它赋予`undefined`和`null`：

```typescript
let unusable: void = undefined;
```

### Null 和 Undefined

和 `void`相似，它们的本身的类型用处不是很大：

```typescript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

默认情况下`null`和`undefined`是所有类型的子类型。 就是说你可以把 `null`和`undefined`赋值给`number`类型的变量。

然而，当你指定了`--strictNullChecks` 标记，`null` 和 `undefined` 只能赋值给 `void` 和它们各自。 这能避免 *很多*常见的问题。许在某处你想传入一个 `string`或`null`或`undefined`，你可以使用联合类型`string | null | undefined`。

> 注意：我们推荐尽可能地使用`--strictNullChecks` ，因为它使你的代码更严谨，可以极大的减少出错的几率。

### 类型推断

有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过*类型断言*这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是“尖括号”语法：

```typescript
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

另一个为`as`语法：

```typescript
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 `as`语法断言是被允许的。

## 接口

TypeScript的核心原则之一是对值所具有的*结构*进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

### 基本示例

```typescript
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

类型检查器会查看`printLabel`的调用。 `printLabel`有一个参数，并要求这个对象参数有一个名为`label`类型为`string`的属性。 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。 然而，有些时候TypeScript却并不会这么宽松，我们下面会稍做讲解。

下面我们重写上面的例子，这次使用接口来描述：必须包含一个`label`属性且类型为`string`：

```typescript
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

### 可选属性

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。

```typescript
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});
```

### 只读属性

一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 `readonly`来指定只读属性:

```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}
```

你可以通过赋值一个对象字面量来构造一个`Point`。 赋值后， `x`和`y`再也不能被改变了。

```typescript
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```



## 解构赋值

### 数组解构

```typescript
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2
```

上面的写法等价于：

```typescript
first = input[0];
second = input[1];
```

利用解构赋值交换变量：

```typescript
[first, second] = [second, first];
```

函数参数解构：

```typescript
function f ([first, second]: [number, number]) [
  console.log(first)
  console.log(second)
]

f(1, 2)
```

解构剩余参数：

```typescript
let [first, ...rest] = [1, 2, 3, 4]
console.log(first) // 1
console.log(rest) // [2, 3, 4]
```

也可以忽略其它参数：

```typescript
let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1
```

或者跳过解构：

```typescript
let [, second, , fourth] = [1, 2, 3, 4]
```

### 对象解构

示例一：

```typescript
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
```

就像数组解构，你可以用没有声明的赋值：

```typescript
let a: number,
  b: number;

({a, b} = {a: 123, b: 456})

console.log(a, b) // 123 456
```

你可以在对象里使用 `...` 语法创建剩余变量：

```typescript
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
```

#### 属性解构重命名

你也可以给属性以不同的名字：

```typescript
let { a: newName1, b: newName2 } = o;
```

注意，这里的冒号*不是*指示类型的。 如果你想指定它的类型， 仍然需要在其后写上完整的模式。

```typescript
let {a, b}: {a: string, b: number} = o;
```



#### 默认值

```typescript
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}
```

### 展开操作符

- 展开数组
- 展开对象
  - 不会展开方法

### 解构赋值用于函数声明

```typescript
type C = {a: string, b?: number}

function f ({a, b}: C): void {
  // ...
}
```

### 解构赋值用于加载指定模块成员



## 类

### 基本示例

### 构造函数

### 示例成员

### 静态方法

### 静态属性和实例属性

### 继承

## 函数

- 参数和返回值
  - 类型
  - 可选参数
  - 默认参数
  - 剩余参数
- ​

## for-of 循环

- for 循环
- forEach
  - 不支持 break
- for in
  - 会把数组当作对象来遍历
- for of
  - 支持 break

## 类型推断（Type Inference）

## 类型兼容性

## 面向对象特性

- 类
- 访问控制符
  - public 默认
  - private 私有的
  - protected 受保护的
    - 可以在类内部及子类中被访问
- 类的构造函数
  - 实例化时调用，而且只调用一次
- 类的继承
  - extends
  - super，可以访问父类的成员

## 模块

### 概念

### 模块通信：导出

### 模块通信：导入

## 装饰器

## 类型定义文件（*.d.ts）

如何在 TypeScript 中使用到类似于 jQuery 之类的第三方框架。

类型定义用来帮助开发者在 TypeScript 中使用已有的 JavaScript 的工具包，如 jQuery。

- https://github.com/DefinitelyTyped/DefinitelyTyped
- http://definitelytyped.org/

## 课程总结
