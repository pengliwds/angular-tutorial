## 知识储备

- HTML
- CSS
- JavaScript
- Typescript

## Step 0. 环境依赖

- Node

## Step1. 安装设置开发环境

```bash
npm install -g @angular/cli
```

### 安装失败解决方案

- 在 Windows 平台上安装 @angular/cli 会报很多 error，那是因为 @angular/cli 在 Windows 平台上面依赖 Python 和 Visual Studio 环境，而很多开发者的机器上并没有安装这些东西
- node-sass 模块被墙的问题，强烈推荐使用 cnpm 进行安装，可以非常有效地避免撞墙

```shell
npm i -g cnpm --registry=https://registry.npm.taobao.org

cnpm i -g @angular/cli
```

- 如果安装失败，请手动把 node_modules 目录删掉重试一遍，全局的 @angular/cli 也需要删掉重装，cnpm uninstall -g @angular/cli
- 如果 node_modules 删不掉，爆出路径过长之类的错误，请尝试用一些文件粉碎机之类的工具强行删除。
- 无论你用什么开发环境，安装的过程中请仔细看 log。很多朋友没有看 log 的习惯，报错的时候直接懵掉，根本不知道发生了什么。

## Setp 2. Create a new project

```shell
ng new my-app
```

@angular/cli 将会自动帮你把目录结构创建好，并且会自动生成一些模板化的文件，就像这样：

![dsa](http://images.gitbook.cn/5c3509d0-ae61-11e7-8998-dde22b48a6a0)

**请特别注意：**@angular/cli 在自动生成好项目骨架之后，会立即自动使用 npm 来安装所依赖的 Node 模块，所以这里我们要 Ctrl+C 终止掉，然后自己进入项目的根目录，使用 cnpm 来进行安装。

![dsa](http://images.gitbook.cn/6f0c0950-ae61-11e7-8003-dd1d9d56caa7)

安装完成之后，使用 ng serve 命令启动项目：

![dsadas](http://images.gitbook.cn/816eea40-ae61-11e7-8998-dde22b48a6a0)

打开你的浏览器，访问默认的4200端口，看到以下界面说明环境 OK 了：

![dsa](http://images.gitbook.cn/a6480d10-ae61-11e7-8e1f-796004dde17a)

**请注意：**

- 这里是 `serve`，不是 server，我看到一些初学者经常坑在这个地方。
- 如果你需要修改端口号，可以用 ng serve --port ****来进行指定。

## Step 3. Serve the application

```shell
cd my-app
ng serve --open
```

成功即可在浏览器中看到如下页面：

![starter](https://angular.io/generated/images/guide/cli-quickstart/app-works.png)

## Step 4. Edit your first Angular component

The CLI created the first Angular component for you. This is the *root component* and it is named `app-root`. You can find it in `./src/app/app.component.ts`.

Open the component file and change the `title` property from *Welcome to app!!* to *Welcome to My First Angular App!!*:

```javascript
export class AppComponent {
  title = 'My First Angular App';
}
```

The browser reloads automatically with the revised title. That's nice, but it could look better.

Open `src/app/app.component.css` and give the component some style.

```css
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
```

## 一些常见的坑

@angular/cli 这种“全家桶”式的设计带来了很大的方便，同时也有一些人不太喜欢，因为很多底层的东西被屏蔽掉了，开发者不能天马行空地自由发挥。比如：@angular/cli 把底层 webpack 的配置文件屏蔽掉了，很多喜欢自己手动配 webpack 的开发者就感到很不爽。

对于国内的开发者来说，上面这些其实不是最重要的，国内开发者碰到的坑主要是由两点引起的：

1. 第一点是网络问题：比如 node-sass 这个模块你很有可能就装不上，原因你懂的。
2. 第二点是开发环境导致的问题：国内使用 Windows 平台的开发者比例依然巨大，而 @angular/cli 在 Windows 平台上有一些非常恶心的依赖，比如它需要依赖 python 环境、Visual Studio 环境。

所以，如果你的开发平台是 Windows，请特别注意：

1. 如果你知道如何给 npm 配置代理，也知道如何翻墙，请首选 npm 来安装 @angular/cli。
2. 否则，请使用 cnpm 来安装 @angular/cli，原因有三：1、cnpm 的缓存服务器在国内，你装东西的速度会快很多；2、用 cnpm 可以帮你避开某些模块装不上的问题，因为它在服务器上面做了缓存；3、cnpm 还把一些包都预编译好了缓存在服务端，不需要把源码下载到你本地去编译，所以你的机器上可以没有那一大堆麻烦的环境。
3. 如果安装失败，请手动把 node_modules 目录删掉重试一遍，全局的 @angular/cli 也需要删掉重装，cnpm uninstall -g @angular/cli。
4. 如果 node_modules 删不掉，爆出路径过长之类的错误，请尝试用一些文件粉碎机之类的工具强行删除。
5. 无论你用什么开发环境，安装的过程中请仔细看 log。很多朋友没有看 log 的习惯，报错的时候直接懵掉，根本不知道发生了什么。



## Visual Studio Code

如你所知，一直以来，前端开发领域并没有一款特别好用的开发和调试工具。

- WebStorm 很强大，但是吃资源很严重。
- Sublime Text 插件很多，可惜要收费，而国内的企业还没有养成花钱购买开发工具的习惯。
- Chrome 的开发者工具很好用，但是要直接调试 TypeScript 很麻烦。

所以，Visual Studio Code（简称 VS Code）才会呈现出爆炸性增长的趋势。它是微软开发的一款前端编辑器，完全[开源免费](https://github.com/Microsoft/vscode)。VS Code 底层是 Electron，界面本身是用 TypeScript 开发的。对于 Angular 开发者来说，当然要强烈推荐 VS Code。最值得一提的是，从1.14开始，可以直接在 VS Code 里面调试 TypeScript 代码。

## 小结

目前，无论你使用什么前端框架，都必然要使用到各种 NodeJS 工具，Angular 也不例外。与其它框架不同，Angular 从一开始就走的“全家桶”式的设计思路，因此 @angular/cli 这款工具里面集成了日常开发需要使用的所有 Node 模块，使用 @angular/cli 可以大幅度降低搭建开发环境的难度。