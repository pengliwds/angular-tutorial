## 组件类

## 插值

### 文本绑定

```html
<p>Message: {{ msg }}</p>

<p [innerHTML]="msg"></p>
```

### 属性绑定

```html
<!-- 写法一 -->
<img src="{{ heroImageUrl }}">

<!-- 写法二 -->
<img bind-src="heroImageUrl">

<!-- 写法三 -->
<img [src]="heroImageUrl">
```

在布尔特性的情况下，它们的存在即暗示为 `true`，属性绑定工作起来略有不同，在这个例子中：

```html
<button [disabled]="isButtonDisabled">Button</button>
```

如果 `isButtonDisabled` 的值是 `null`、`undefined` 或 `false`，则 `disabled` 特性甚至不会被包含在渲染出来的 `<button>` 元素中。

### 使用 JavaScript 表达式

```html
<p>{{ 1 + 1 }}</p>
<p>{{ num + 1 }}</p>
<p>{{ isDone ? '完了' : '没完' }}</p>
<p>{{ title.split('').reverse().join('') }}</p>

<p [title]="title.split('').reverse().join('')">{{ title }}</p>

<ul>
  <li [id]="'list-' + t.id" *ngFor="let t of todos">
    {{ t.title }}
  </li>
</ul>
```



## 列表渲染

## 条件渲染

## 事件处理

```html
<button (click)="onSave()">Save</button>

<!-- 也可以这样 -->
<button on-click="onSave()">On Save</button>

<!-- 
  绑定传参
  $event 是事件源对象
-->
<button on-click="onSave($event)">On Save</button>

<!-- 当事件处理语句比较简单的时候，我们可以内联事件处理语句 -->
<button (click)="title = '哈哈哈'">内联事件处理</button>

<!-- 双向数据绑定 -->
<input [value]="currentHero.name"
       (input)="currentHero.name=$event.target.value" >
```

> 注意：事件绑定处理函数必须调用，否则无效。

## 表单输入绑定

## Class 与 Style 绑定

### Class

- https://angular.io/guide/template-syntax#ngClass

```html
<!-- standard class attribute setting  -->
<div class="bad curly special">Bad curly special</div>

<!-- reset/override all class names with a binding  -->
<div class="bad curly special"
     [class]="badCurly">Bad curly</div>

<!-- toggle the "special" class on/off with a property -->
<div [class.special]="isSpecial">The class binding is special</div>

<!-- binding to `class.special` trumps the class attribute -->
<div class="special"
     [class.special]="!isSpecial">This one is not so special</div>
```

### NgClass 指令

`NgClass` 指令接收一个对象，对象的 `key` 指定 css 类名，value 给定一个布尔值，当布尔值为真则作用该类名，当布尔值为假则移除给类名。

```html
<div [ngClass]="{
  css类名: 布尔值,
  css类名: 布尔值
}">测试文本</div>
```



### Style

通过**样式绑定**，可以设置内联样式。

样式绑定的语法与属性绑定类似。 但方括号中的部分不是元素的属性名，而由**style**前缀，一个点 (`.`)和 CSS 样式的属性名组成。 形如：`[style.style-property]`。

```html
<button [style.color]="isSpecial ? 'red': 'green'">Red</button>
<!-- 也可以 backgroundColor -->
<button [style.background-color]="canSave ? 'cyan': 'grey'" >Save</button>
```

有些样式绑定中的样式带有单位。在这里，以根据条件用 “em” 和 “%” 来设置字体大小的单位。

```html
<button [style.font-size.em]="isSpecial ? 3 : 1" >Big</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>
```

> 提示：*样式属性*命名方法可以用[中线命名法](https://angular.cn/guide/glossary#dash-case)，像上面的一样 也可以用[驼峰式命名法](https://angular.cn/guide/glossary#camelcase)，如`fontSize`。

### NgStyle 指令

虽然这是设置单一样式的好办法，但我们通常更喜欢使用 [NgStyle指令](https://angular.cn/guide/template-syntax#ngStyle) 来同时设置多个内联样式。

```typescript
currentStyles: {};
setCurrentStyles() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };
}
```

```html
<div [ngStyle]="currentStyles">
  This div is initially italic, normal weight, and extra large (24px).
</div>
```



## 小结

