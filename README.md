# ts-vue-pro
typescript编写的基于vue的前端项目

### 命令

  - 启动（开发）

    npm run serve

  - 打包

    npm run build

  - lint校验

    npm run lint

### 功能 TODO

#### 1.header模块完善

  - ~~动态生成面包屑~~ (2018.11.01 16:00 finish)
  - 个人信息模块（login out等信息展示）

#### 2.实现图表组件

  - ~~echarts-vue的引入~~ (2018.11.14 finish)
  - AntV的引入
  - 实现图表-table组件 (2018.11.14 -- xxx)
    - ~~echarts-pie + element-table~~ (2018.11.14 finish)

#### 3.封装基于axios.js的http请求的公共工具

  - 动态header的配置
  - get、post、delete、put请求的拆分
  - 返回状态的统一提示
  - 接口请求对于登陆失效的自动跳转的处理

#### 4.对于TS类型声明demo的实现，规范代码

  - 以某一页面实现TS类型声明的demo作为代码示范

#### 5.引入loadsh.js库，测试常用loadsh.js工具示例

#### 6.利用promise实现dialog自动关闭

### 开发注意事项

#### router.js的命名规范

```javascript
// demo
{
  path: '/', // 路径 (required)
  name: 'Welcome', // name，唯一，必填，用于生成面包屑匹配 (required)
  component: Home, // 组件 (required)
  redirect: '/home', // 重定向 
  children: [] // 子路由 (required) 如果没有，则定义空数组
  meta: {
    // 额外参数 (required)
    desc: '首页', // 描述 (required) 用于submenu展示的文字
    authority: '', // 权限 (required) todo 数据格式及鉴权待完成
    icon: 'el-icon-inf' // 图标 基于element-ui的icon库
  }
}
```

#### 引入社区约定的ts校验规则(2018.11.14)

```shell
npm insgtall tslint-config-standard --save
```

tslint.json
```javascript
"extends": [
  "tslint-config-standard"
]
```