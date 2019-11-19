### 项目启动

##### 1）cnpm install
```
安装所有第三方包
```
##### 2）npm run development
```
本地启动项目
```

### 其他
```
项目环境使用docker作为虚拟部署环境，理论上不需线下人为打包，但是为了核查问题，可以执行 npm run build:production ,对应打包之后的文件。
```

### 使用nodeJS启动静态资源服务
```
bin/server.js
```

### 路由分割
> @loadable/component的使用

值得注意的是路由相关的配置文件需要写成 **.js**结尾，否则不生效（这个问题待解决）。
