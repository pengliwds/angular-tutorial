- [TypeScript Github](https://github.com/Microsoft/TypeScript)
- [TypeScript 官网](https://www.typescriptlang.org/)
- [TypeScript 中文网](https://www.tslang.cn/)

## 介绍

### 课程介绍

- 学习 TypeScript 的好处
- 安装 TypeScript 开发环境
- TypeScript 概念、语法和特性介绍

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
  - 在转换的过程中可以帮我们检测出代码中的很多低级错误
- 在线测试编译环境 compiler
  - https://www.typescriptlang.org/play/index.html
- 本地测试编译环境

```shell
npm i -g typescript

# 查看版本号
tsc --version

# 查看使用帮助
tsc --help
```

### 不同的开发环境

- Webstorm
- Visual Studio Code
- Sublime







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



## 基本类型

TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。

- boolean
- number
- string
- 展开操作符
  - 展开数组
  - 展开对象

### 布尔值

```typescript
let isDone: boolean = false;
```

### 数字

```typescript
let decLiteral: number = 6;
```

### 字符串

- 类型
- 模板字符串
  - 支持换行
  - 支持内嵌表达式
- ​

`string`表示文本数据类型。 和JavaScript一样，可以使用双引号（ `"`）或单引号（`'`）表示字符串。

```typescript
let name: string = "bob";
name = "smith";
```

你还可以使用*模版字符串*，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围，并且以`${ expr }`这种形式嵌入表达式

```typescript
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;
```

这与下面定义`sentence`的方式效果相同：

```typescript
let sentence: string = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
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

### 函数声明

解构赋值也可以用于函数声明：

```typescript
type C = {a: string, b?: number}

function f ({a, b}: C): void {
  // ...
}
```



### 扩展运算符



## 接口（Interface）

用来建立某种代码约定，使得其它开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码规范。

- 定义接口
- 方法参数类型声明



```typescript
interface Animal {
    eat()
}

class Sheep implements Animal {
    eat() {
        console.log('我吃草')
    }
}

class Tiger implements Animal {
    eat() {
        console.log('我吃肉肉')
    }
}

```



## 类

## 数组

- 展开操作符
  - 展开数组
  - 展开对象

## 函数

- 函数参数解构赋值

- 函数的可选参数
- 函数的默认参数
- 函数的 REST 参数
- 生成器函数
- 箭头表达式

## for-of 循环

- for 循环
- forEach
  - 不支持 break
- for in
  - 会把数组当作对象来遍历
- for of
  - 支持 break

## 泛型（generic）

参数化的类型，一般用来限制集合的类型。

## 枚举

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

模块可以帮助开发者将代码分割为可重用的单元。

开发者可以自己决定将模块中的哪些资源（类、方法、变量）暴露出去供外部使用，哪些资源只在模块内使用。



## 注解（装饰器）

注解为程序的元素（类、方法、变量）加上更直观更明了的说明，这些说明信息与程序的业务逻辑无关，而是供指定的工具或框架使用的。

## 类型定义文件（*.d.ts）

如何在 TypeScript 中使用到类似于 jQuery 之类的第三方框架。

类型定义用来帮助开发者在 TypeScript 中使用已有的 JavaScript 的工具包，如 jQuery。

- https://github.com/DefinitelyTyped/DefinitelyTyped
- http://definitelytyped.org/

## 课程总结

- 介绍了 TypeScript 的概念及优势
- 如何搭建开发 TypeScript 开发环境
- TypeScript 新语法及特性