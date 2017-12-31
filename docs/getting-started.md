## 知识储备

- HTML
- CSS
- JavaScript
- Typescript

## Step1. 安装设置开发环境

```bash
npm install -g @angular/cli
```

## Setp 2. Create a new project

```shell
ng new my-app
```

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

