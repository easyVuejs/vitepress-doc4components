<br>

## 介绍

<br>

建立[geely-business-components](https://do.geely.com/codingRoot/FrontEnd/geely-business-components/)的目的，是为了维护一套业务组件库供多个项目使用。

<br>

### 什么是业务组件

<br>

UI 组件为前端同学提升了开发效率，现在常用的 UI 组件库如蚂蚁的 AntDesign、饿了么的 Element-UI 等。UI 组件库我们又把它称为基础组件库，因为它是前端组件的最小颗粒度，不受业务逻辑影响，一个个基础组件拼装起来加上业务逻辑就成了一个业务组件。

纯 Model 算不算业务组件？

当然。同一套业务逻辑，但是 UI 可复用程度低，因此可以把业务逻辑进行抽象与 View 层解耦同样也算业务组件。

整个页面可不可以做成业务组件？

可以。A、B、C 三个页面布局和功能完全相同，同样可以把页面封装成业务组件。

<br>

### 合格业务组件特性

<br>

- 可扩展，支持高度自定义
- 详细使用文档
- 即插即用，耦合低

<br>

### 如何贡献

<br>

如果你希望参与贡献，欢迎 [Pull Request](https://do.geely.com/codingRoot/FrontEnd/geely-business-components/)。

<br>

::: warning
geely-business-components 基于[ant-design-vue](https://www.antdv.com/docs/vue/getting-started-cn)3.2.10 版本开发，低于或高于此版本可能会有不兼容导致的 bug，目前暂定对此类兼容性 bug 的处理方式为 3.2.10 以下不做处理，高于 3.2.10 向上兼容。如遇此类 bug 请移步 [issues](https://do.geely.com/codingRoot/FrontEnd/geely-business-components/issues/)反馈。
:::
