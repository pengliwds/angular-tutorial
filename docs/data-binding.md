## 显示数据

### 文本插值

```typescript
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}
```

Angular 自动从组件中提取 `title` 和 `myHero` 属性的值，并且把这些值绑定到模板中。当这些属性发生变化时，Angular 就会自动刷新页面显示。

### 属性绑定

```html
<p title="{{ title }}">{{ title }}</p>

<!-- 简写方式 -->
<p [title]="title">{{ title }}</p>
```

### 使用 JavaScript 表达式



### 内联模板还是模板文件

### 使用构造函数还是变量初始化？

### 使用 `*ngFor` 渲染数组

```typescript
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}
```

```html
<h1>{{title}}</h1>
<h2>My favorite hero is: {{myHero}}</h2>
<p>Heroes:</p>
<ul>
  <li *ngFor="let hero of heroes">
    {{ hero }}
  </li>
</ul>
```

> 不要忘记`*ngFor`中的前导星号 (*)。它是语法中不可或缺的一部分。 更多信息，见[模板语法](https://angular.cn/guide/template-syntax#ngFor)。

### 创建数据类

### 使用 `ngIf` 条件渲染

```html
<p *ngIf="heroes.length > 3">There are many heroes!</p>
```

## 事件绑定



## 小结

- 带有双花括号的**插值表达式 (interpolation) **来显示一个组件属性。
- 用 **ngFor** 显示数组
- 用一个 TypeScript 类来为我们的组件描述**模型数据**并显示模型的属性
- 用 **ngIf** 根据一个布尔表达式有条件地显示一段 HTML

下面是最终的代码：

```typescript
import { Component } from '@angular/core';
 
import { Hero } from './hero';
 
@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>
`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
}
```

