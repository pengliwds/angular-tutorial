## 插值表达式

```html
<p>My current hero is {{currentHero.name}}</p>
```

插值表达式也可以用于属性绑定：

```html
<h3>
  {{title}}
  <img src="{{heroImageUrl}}" style="height:30px">
</h3>
```

求值运算：

```html
<!-- "The sum of 1 + 1 is 2" -->
<p>The sum of 1 + 1 is {{1 + 1}}</p>
```

还可以调用组件的方法：

```html
<!-- "The sum of 1 + 1 is not 4" -->
<p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}</p>
```

## 模板表达式

编写模板表达式所用的语言看起来很像 JavaScript。 很多 JavaScript 表达式也是合法的模板表达式，但不是全部。

JavaScript 中那些具有或可能引发副作用的表达式是被禁止的，包括：

- 赋值 (`=`, `+=`, `-=`, ...)
- `new`运算符
- 使用`;`或`,`的链式表达式
- 自增或自减操作符 (`++`和`--`)

和 JavaScript语 法的其它显著不同包括：

- 不支持位运算`|`和`&`
- 具有新的[模板表达式运算符](https://angular.cn/guide/template-syntax#expression-operators)，比如`|`、`?.`和`!`。



## 模板语句

和模板表达式一样，模板*语句*使用的语言也像 JavaScript。 模板语句解析器和模板表达式解析器有所不同，特别之处在于它支持基本赋值 (`=`) 和表达式链 (`;`和`,`)。

然而，某些 JavaScript 语法仍然是不允许的：

- `new`运算符
- 自增和自减运算符：`++`和`--`
- 操作并赋值，例如`+=`和`-=`
- 位操作符`|`和`&`
- [模板表达式运算符](https://angular.cn/guide/template-syntax#expression-operators)