![ng-component](http://images.gitbook.cn/08a931a0-ae67-11e7-8003-dd1d9d56caa7)

几乎所有前端框架都在玩“组件化”，而且最近都不约而同地选择了“标签化”这种思路，Angular 也不例外。

对新版本的 Angular 来说，一切都是围绕着“组件化”展开的，组件是 Angular 的核心概念模型。

## 组件的定义

以下是一个最简单的 Angular 组件定义：

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itcast';
}

```

- `@Component`：这是一个 Decorator（装饰器），其作用类似于 Java 里面的注解。Decorator 这个语言特性目前（2017-10）处于 Stage 2（草稿）状态，还不是 ECMA 的正式规范。
- `selector`：组件的标签名，外部使用者可以这样来使用这个组件：<app-root>。默认情况下，ng 命令生成出来的组件都会带上一个 app 前缀，如果你不喜欢，可以在 angular-cli.json 里面修改 prefix 配置项，设置为空字符串将会不带任何前缀。
- `templateUrl`：引用外部的 HTML 模板。如果你想直接编写内联模板，可以使用 template，支持 ES6 引入的[“模板字符串”写法](http://es6.ruanyifeng.com/#docs/string)。
- `styleUrls`：引用外部 CSS 样式文件，这是一个数组，也就意味着可以引用多份 CSS 文件。
- `export class AppComponent`：这是 ES6 里面引入的模块和 class 定义方式。

## 使用 SASS 预处理器

SASS 是一款非常好用的 CSS 预编译器，Bootstrap 官方从4.0开始已经切换到了 SASS。

目前（2017-10），@angular/cli 创建项目的时候没有自动使用 SASS 作为预编译器，我们需要自己手动修改一些配置文件，请按照以下步骤依次修改：

angular-cli.json 里面的 styles.css 后缀改成 .scss

![dsa](http://images.gitbook.cn/d6b70580-ae68-11e7-8998-dde22b48a6a0)

当你后面再使用 `ng g c ***` 自动创建组件的时候，默认就会生成 .scss 后缀的样式文件了。



angular-cli.json 里面的 styleExt 改成 .scss

![dsad](http://images.gitbook.cn/e8bfb880-ae68-11e7-9563-cf17984c2497)

src 下面 style.css 改成 style.scss

![dsa](http://images.gitbook.cn/ee3211a0-ae68-11e7-8998-dde22b48a6a0)

app.component.scss

![dsa](http://images.gitbook.cn/028db550-ae69-11e7-8003-dd1d9d56caa7)

app.component.ts 里面对应修改

![dsad](http://images.gitbook.cn/08488920-ae69-11e7-8e1f-796004dde17a)

改完之后，重新 `ng serve`，打开浏览器查看效果。

SASS 的 API 请参考[官方网站](http://sass-lang.com/)

**SASS 只是一个预编译器，它支持所有 CSS 原生语法。利用 SASS 可以提升你的 CSS 编码效率，增强 CSS 代码的可维护性，但是千万不要幻想从此就可以不用学习 CSS 基础知识了。**



## 组件的模板

![dkjsabd](http://images.gitbook.cn/2f0f3730-ae81-11e7-9563-cf17984c2497)

