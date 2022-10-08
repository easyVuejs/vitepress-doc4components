<br>

## 快速上手

<br>

### 安装

```sh
npm install geely-business-components -D
```

::: warning

<br>
Node 请使用`v8.9`或以上版本

<br>
<br>
:::

<br>

### 注册

**全局完整注册**

```js

import { createApp } from 'vue';
import App from './App';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import GeelyBC from "geely-business-components";
import "geely-business-components/assets/style.css";
const app = createApp(App);

app.use(Antd).use(GeelyBC).mount('#app');

```

**局部注册组件**

```vue
<template>
  <geely-search />
</template>

<script>
import { GeelySearch } from "geely-business-components";
const GeelySearchGroup = GeelySearch.Group;
</script>
```
