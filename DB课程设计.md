# DB课程设计

## 常用信息

###### dev安装依赖

```shell
npm i --save-dev
```

###### 数据库账户

```
user:backend
passwd:123456
localhost:3306
```

###### 部署服务器上的数据库账户

```
user:root
passwd:as251421
```

6.本地初始化仓库,进入代码目录

###### changing

```
material-ui/core
material-ui/icons
```

以后可以放到后台运行：

```
nohup ./main &
```

然后不管是否是当前终端，都可以如下方式查看：

```
ps -aux|grep main
```

如果要杀掉进程，可以kill -9：

```
kill -9  进程号
```

1、显示数据库列表。

```
show databases;
```

2、显示库中的数据表：

```
use mysql;
show tables;
```

3、显示数据表的结构：

```
describe 表名;
```

4、建库：

```
create database 库名;
```

5、建表：

```
use 库名;
create table 表名 (字段设定列表);
```

6、删库和删表:

```
drop database 库名;
drop table 表名; 
```

###### git：初始化仓库

echo "# java_code" >> README.md//添加一个README.md 
git init //将本目录创建为git可以管理的仓库
git add README.md //添加到本地仓库
git commit -m "first commit" ////把文件提交到仓库 
git remote add origin https://github.com/****/java_code.git //关联远程仓库 
git push -u origin master //第一次需要-u 后来不需要 ,

###### git：更新代码

第一步：查看当前的git仓库状态，可以使用git status
git status
第二步：更新全部
git add *
第三步：接着输入git commit -m "更新说明
git  commit  - m   "更新说明"
第四步：先git pull,拉取当前分支最新代码
git pull
第五步：push到远程master分支上
git push origin master

###### .gitignore的使用

```
# 此为注释 – 将被 Git 忽略
2  
3 *.a       # 忽略所有 .a 结尾的文件
4 !lib.a    # 但 lib.a 除外
5 /TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
6 build/    # 忽略 build/ 目录下的所有文件
7 doc/*.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
```



## 入门配置

#### 如何建一个数据库

```mysql
sudo mysql -uroot -p //以Linux root权限、root用户名使用密码登陆数据库。

create user 'linton'@'localhost' IDENTIFIED BY "123456";   //创建localhost上的linton用户（注意，mysql的用户是“用户名”+“其地址”。）

CREATE DATABASE myTest;   //创建数据库myTest

GRANT ALL PRIVILEGES ON myTest.* TO linton@"localhost";    //授予权限（其后面不应该加identified by，因为新版本的mysql中禁止使用grant来创建新用户。只能是先执行create user，再为其授予权限，一步一步来。）（一定要这么授权，否则自己都没法访问自己机器上的数据库。）（当鉴权时，如果你的linux用户名是linton，那么你的数据库的“@”前的用户名也是linton。即它们是联动的。）
```



#### 配置react环境

1.安装node+npm

2.安装VS Code

3.选择工作区文件夹——右键点击在终端中打开

4.按照Using React in Visual Studio Code的文档进行操作

```
npm install -g create-react-app
create-react-app my-app
```


运行create-react-app my-app命令时如果速度很慢或者卡住不动可采用变更资源来源的方式解决

将来源换成淘宝源 npm config set registry https://registry.npm.taobao.org



#### 配置go环境

```
sudo apt-get install golang

sudo gedit /etc/profile
或~/.bashrc
```

然后添加如下三行到文件末尾：

```
export GOPATH=/home/GO_PATH   //用于go的工作目录
export GOROOT=/usr/lib/go-1.13  //安装目录
PATH=$GOROOT/bin:$PATH
```

然后检查是否成功，查看go的相关环境信息如下：

```
go env

弹出：
GO111MODULE=""
GOARCH="amd64"
GOBIN=""
GOCACHE="/home/linton/.cache/go-build"
GOENV="/home/linton/.config/go/env"
GOEXE=""
GOFLAGS=""
GOHOSTARCH="amd64"
GOHOSTOS="linux"
GONOPROXY=""
GONOSUMDB=""
GOOS="linux"
GOPATH="/home/linton/go"
GOPRIVATE=""
GOPROXY="https://proxy.golang.org,direct"
GOROOT="/usr/lib/go-1.13"
GOSUMDB="sum.golang.org"
GOTMPDIR=""
GOTOOLDIR="/usr/lib/go-1.13/pkg/tool/linux_amd64"
GCCGO="gccgo"
AR="ar"
CC="gcc"
CXX="g++"
CGO_ENABLED="1"
GOMOD=""
CGO_CFLAGS="-g -O2"
CGO_CPPFLAGS=""
CGO_CXXFLAGS="-g -O2"
CGO_FFLAGS="-g -O2"
CGO_LDFLAGS="-g -O2"
PKG_CONFIG="pkg-config"
GOGCCFLAGS="-fPIC -m64 -pthread -fmessage-length=0 -fdebug-prefix-map=/tmp/go-build458845879=/tmp/go-build -gno-record-gcc-switches"

```

通过打印 Go 版本号，验证安装过程。

```text
go version
```

输出应该像下面这样：

```text
go version go1.14.2 linux/amd64
```

想要测试 Go 安装过程，我们将会创建一个工作区，并且构建一个简单的程序，用来打印经典的"Hello World"信息。

01.默认情况下，`GOPATH`变量，指定为工作区的位置，设置为`$HOME/go`。想要创建工作区目录，输入：

```text
mkdir ~/go
```

02.在工作区内，创建一个新的目录`src/hello`：

```text
mkdir -p ~/go/src/hello
```

在那个目录下，创建一个新文件，名称为`hello.go`:

```text
package main

import "fmt"

func main() {
    fmt.Printf("Hello, World\n")
}
```

想要学习更多关于 Go 工作区的目录，浏览 [Go 文档页面](https://link.zhihu.com/?target=https%3A//golang.org/doc/code.html%23Workspaces)。

03.浏览到`~/go/src/hello`目录，并且运行`go build`构建程序：

```text
cd ~/go/src/hello
go build
```

上面的这个命令将会构建一个名为`hello`的可执行文件。

04.你可以通过简单执行下面的命令，运行这个可执行文件：

```text
./hello
```

输出应该像下面这样：

```text
Hello, World
```

#### 配置gin

先设置代理：

```
go env -w GOPROXY=https://goproxy.io,direct
```

#### 无法科学上网，如何配置Gin

那我们该如何解决问题呢？毕竟还要制造 bug 的嘛~

###### 手动下载

我们常见的 `golang.org/x/...` 包，一般在 GitHub 上都有官方的镜像仓库对应。比如 `golang.org/x/text` 对应 `github.com/golang/text`。所以，我们可以手动下载或 clone 对应的 GitHub 仓库到指定的目录下。

|      | `mkdir $GOPATH/src/golang.org/x cd $GOPATH/src/golang.org/x git clone git@github.com:golang/text.git rm -rf text/.git ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

当如果需要指定版本的时候，该方法就无解了，因为 GitHub 上的镜像仓库多数都没有 tag。并且，手动嘛，程序员怎么能干呢，尤其是依赖的依赖，太多了。

###### 设置代理

如果你**有代理**，那么可以设置对应的环境变量：

|      | `export http_proxy=http://proxyAddress:port export https_proxy=http://proxyAddress:port ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

或者，直接用 `all_proxy`：

|      | `export all_proxy=http://proxyAddress:port ` |
| ---- | -------------------------------------------- |
|      |                                              |

###### go mod replace

从 Go 1.11 版本开始，新增支持了 `go modules` 用于解决包依赖管理问题。该工具提供了 `replace`，就是为了解决包的别名问题，也能替我们解决 `golang.org/x` 无法下载的的问题。

`go module` 被集成到原生的 `go mod` 命令中，但是如果你的代码库在 `$GOPATH` 中，`module` 功能是默认不会开启的，想要开启也非常简单，通过一个环境变量即可开启 `export GO111MODULE=on`。

以下为参考示例：

|      | `module example.com/hello require (    golang.org/x/text v0.3.0 ) replace (    golang.org/x/text => github.com/golang/text v0.3.0 ) ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

类似的还有 [glide](https://github.com/Masterminds/glide)、[gopm](https://github.com/gpmgo/gopm) 等这类第三方包管理工具，都不同方式的解决方案提供给我们。

###### GOPROXY 环境变量

终于到了本文的终极大杀器 —— **GOPROXY**。

我们知道从 `Go 1.11` 版本开始，官方支持了 `go module` 包依赖管理工具。

其实还新增了 `GOPROXY` 环境变量。如果设置了该变量，下载源代码时将会通过这个环境变量设置的代理地址，而不再是以前的直接从代码库下载。这无疑对我等无法科学上网的开发良民来说是最大的福音。

更可喜的是，[goproxy.io](https://github.com/goproxyio/goproxy) 这个开源项目帮我们实现好了我们想要的。该项目允许开发者一键构建自己的 `GOPROXY` 代理服务。同时，也提供了公用的代理服务 `https://goproxy.io`，我们只需设置该环境变量即可正常下载被墙的源码包了：

| `1 ` | `export GOPROXY=https://goproxy.io ` |
| ---- | ------------------------------------ |
|      |                                      |

不过，**需要依赖于 `go module` 功能**。可通过 `export GO111MODULE=on` 开启 MODULE。

如果项目不在 `GOPATH` 中，则无法使用 `go get ...`，但可以使用 `go mod ...` 相关命令。

也可以通过置空这个环境变量来关闭，`export GOPROXY=`。

对于 Windows 用户，可以在 `PowerShell` 中设置：

| `1 ` | `$env:GOPROXY = "https://goproxy.io" ` |
| ---- | -------------------------------------- |
|      |                                        |

最后，我们当然推荐使用 `GOPROXY` 这个环境变量的解决方式，前提是 **Go version >= 1.11**。

最后的最后，七牛也出了个国内代理 [goproxy.cn](https://github.com/goproxy/goproxy.cn) 方便国内用户更快的访问不能访问的包，真是良心。

## 数据库设计

#### 关系设计

###### GroupPermission

是用于联系权限组PermGroup和权限Permssion的关系集合。

该关系模式没有主码，全靠PermGroup的外码依赖PGID和Permission的外码依赖PermID的组合来区分。

###### 权限

| ID   | 含义        |
| ---- | ----------- |
| 1xx  | dashboard.* |
| 2xx  | function.*  |



## 安全与风控

#### 接口设计

| 方法 | 接口        | 调用参数                              | 返回参数      |
| ---- | ----------- | ------------------------------------- | ------------- |
| POST | login       | 手机号、SHA256加密的密码              | ok或passwd    |
| POST | register    | 手机号、SHA256加密的密码、Email、昵称 | ok或phone     |
| GET  | logout      | 无                                    | ok或error     |
| GET  | checkLogged | 用户token(cookie中)                   | ok或notlogged |

### 登录

采用axios+formik+yup的前端库，完成对用户密码和安全问题的检测。

采用客户端+服务端SHA256双加密

数据输入合法性由客户端的formik+yup负责检查。同时，调用库进行SHA256加密。

后端负责比对数据库中的SHA256与本次登录传入的SHA256是否相等。

axios负责异步发送HTTP POST请求，并检查SPAM。

###### 遇到的问题

如果登录就立即跳转，则不要把http反馈写在set cookie前面。因为很可能还没有设置cookie就已经跳转了。

一般情况下，一定要保证把http反馈写在所在http请求应答函数的最后。

###### 基于cookie的token验证

```
context.SetCookie("user_cookie", string(u.Id), 1000, "/", "localhost", false, true)
```

这里来介绍一下这些参数，第一个参数为 cookie 名；第二个参数为 cookie 值；第三个参数为 cookie 有效时长，当 cookie 存在的时间超过设定时间时，cookie 就会失效，它就不再是我们有效的 cookie；第四个参数为 cookie 所在的目录；第五个为所在域，表示我们的 cookie 作用范围；第六个表示是否只能通过 https 访问；第七个表示 cookie 是否可以通过 js代码进行操作。

### 权限组

###### 权限组id

| 组         | id   |
| ---------- | ---- |
| 业主用户   | 0    |
| 超级管理员 | 1    |
| 水务员     | 2    |

## 前端开发

##### Material UI

######  menuitems

在 `menuitems`的对应选项卡组内增加项目即可。

###### views

其中包括了每页的单独渲染。即页面中除了左侧菜单栏外的渲染任务。

你可以在view中增加自己希望的功能。

###### routes

规定了各view应当以什么路径进行请求。

###### layout

规定了网页的主要框架的样式。

##### React 跨域、代理

###### react操作

安装http-proxy-middleware。

在src同级目录创建setupProxy.js如图所示

const { createProxyMiddleware } = require('http-proxy-middleware');  //注意写法，这是1.0以后的版本，最好按抄

module.exports = function (app) {
    app.use(createProxyMiddleware('/api',
        {
            target: 'http://ip:8000/',
            pathRewrite: {
                '^/api': '',
            },
            changeOrigin: true,
            secure: false, // 是否验证证书
            ws: true, // 启用websocket
        }
    ));
};
以上表达的意思是，把/api 代理到  http://ip:8000/ 到这个网址上，重写一定要，如果不写

pathRewrite: {
    '^/api': '',
},
5

###### nginx操作

可以如下方式操作：即把/api/再次进行反代。

```
server {
   server_name nesto.cupof.beer;
   root /home/lighthouse/nesto/build;
   index index.html index.htm;
   location / {
   try_files $uri /index.html =404;
   }
    location /api/ {
   proxy_pass http://127.0.0.1:8081/
   }
}
```



##### React DOM渲染

###### 封装

可以以const变量的方式呈现新的组件，也可以封装到函数中，也可以封装到ES6的类：React Component中。

在函数或类中，标签属性被转化为props对象（在类中是this.props）。它们可以像函数一样被传入。在访问时，使用props.xxx或this.props.xxx。

##### React JSX

###### JSX表达式

用花括号框起来。例如 `{1+1}`。

###### 注释

注释也需要写到花括号中。

###### 数组

可以把一个由HTML元素构成的数组，用花括号包起来，然后放到REACT DOM中渲染。

```jsx
var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```

##### React 组件

可利用函数定义组件，利用props传入参数。组件可以嵌套形成更大的组件。

```jsx
function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
    return (
    <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
    </div>
    );
}
 
ReactDOM.render(
     <App />,
    document.getElementById('example')
);
```



##### React State

###### 自顶向下数据流

```jsx
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Hello React!</title>
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
</head>
<body>

<div id="example"></div>
<script type="text/babel">
function FormattedDate(props) {
  return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('example')
);
</script>

</body>
</html>
```

- 这里使用ES6类来封装了一个组件。**该类由构造函数、渲染函数render、用户函数、以及React Hook函数**构成。其中，componentDidMount这个钩子是该元素被渲染到DOM中时（mount，被挂载），被调用；componentWillUnmount这个钩子是元素被停止渲染（unmont，停止挂载）时被调用。tick是浏览器函数，每过一秒被调用一次。
- 注意，构造函数中的this.state后面跟着一个map，其中规定了这个组件拥有哪些状态。在tick中，使用setstate，后面跟着一个map，表示更新状态。在`<FormattedDate date={this.state.date} />`中，使用了 `{this.state.date}`来访问这个状态的值。使用花括号是因为这是一个JSX表达式。

##### React Events

###### 阻止默认行为

```jsx
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('链接被点击');
  }
 
  return (
    <a href="#" onClick={handleClick}>
      点我
    </a>
  );
}
```



##### ES6 箭头函数

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);
 
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('example')
);
```

箭头函数起到了简化的效果，是一种匿名函数。例如上述listitems中，就在定义这个常变量时，表达了预处理为表项的语义。注意，如果箭头函数的函数体不需要换行，就不需要写花括号；如果只有一处return，就不需要写return。



##### React 组件生命周期

###### 通过实现组件接口来规定组件在各生命周期阶段的行为

- 组件类中，render方法是唯一必须给出实现的。



## 后端开发

#### 上手Go语言

###### Go语言 Export

如果要从一个包中调用另一个包的函数，则在确保go module开启的情况下，gomod存在的情况下，可以通过从被调用的包中export该函数解决。

如何export？即把函数名称的首字母改成大写即可。这样，在别的包中import其所在包，并直接利用“xxx.xxx”调用，就能使用了。

注意，只有跨包调用的时候才需要这么做。在同一个包里面，是可以随意互相调用的。且嵌套包的情况下，内包可以调外包的，外包不能直接调用里包的（需要上述export）。

###### Go语言的函数

函数可以返回tuple。如果需要返回tuple，那么函数类型需要用括号括起来，否则不需要写括号。

###### Go是强类型语言

Go只是省略了语法中的类型。实际上在goland中，你把鼠标移动上去，是能看出形如C一样的定义的。

###### Go里的赋值语句

一定要用“:=”。

###### Go的指针

和C一样，需要用星号来访问其中的数值。但是赋值数值给指针的时候不需要使用and来取地址，除非要弄二维数组。

###### Go的printf

基本用法和C一样。

#### 数据库操作

###### Go短连接MySQL

```
sql.Open("mysql", "user:password@tcp(127.0.0.1:3306)/dbname")
```

###### MySQL中的数据库

- 数据库就相当于一整个DBS。其中可以存放很多种关系模式。访问时，以"dbs名称.关系名"的格式使用。

#### gorm操作数据库

非常简便，甚至不用写SQL语句。

ORM库提供了对象到对象的操作。一个关系的全部属性实际上就是对应对象的全部属性。

```go
	// 自动迁移(automatically creates the table.)
	db.AutoMigrate(&UserInfo{})
	
	u1 := UserInfo{3, "枯藤", "男", "篮球"}
	u2 := UserInfo{2, "topgoer.com", "女", "足球"}
	// 创建记录
	db.Create(&u1)
	db.Create(&u2)
	// 查询
	var u = new(UserInfo)
	db.First(u)
	fmt.Printf("%#v\n", u)
	var uu UserInfo
	db.Find(&uu, "hobby=?", "足球")
	fmt.Printf("%#v\n", uu)
	// 更新
	db.Model(&uu).Update("hobby", "双色球")
	fmt.Printf("%#v\n", uu)
	// 删除
	db.Delete(&u)
```



###### 1.1.1. 库安装

```
    go get -u github.com/jinzhu/gorm
```

###### 1.1.2. 数据库连接

```go
package main

import (
    "fmt"
    "github.com/jinzhu/gorm"
    _ "github.com/jinzhu/gorm/dialects/mysql"
)

// UserInfo 用户信息
type UserInfo struct {
    ID uint
    Name string
    Gender string
    Hobby string
}

func main() {
    db, err := gorm.Open("mysql", "root:root@(127.0.0.1:3306)/db1?charset=utf8mb4&parseTime=True&loc=Local")
    if err!= nil{
        panic(err)
    }
    defer db.Close()

    // 自动迁移
    db.AutoMigrate(&UserInfo{})

    u1 := UserInfo{1, "枯藤", "男", "篮球"}
    u2 := UserInfo{2, "topgoer.com", "女", "足球"}
    // 创建记录
    db.Create(&u1)
    db.Create(&u2)
    // 查询
    var u = new(UserInfo)
    db.First(u)
    fmt.Printf("%#v\n", u)
    var uu UserInfo
    db.Find(&uu, "hobby=?", "足球")
    fmt.Printf("%#v\n", uu)
    // 更新
    db.Model(&u).Update("hobby", "双色球")
    // 删除
    db.Delete(&u)
}
```

连接比较简单，直接调用 gorm.Open 传入数据库地址即可 github.com/jinzhu/gorm/dialects/mysql 是 golang 的 mysql 驱动，实际上就是 github.com/go-sql-driver/mysql 作者这里为了好记，重新弄了个名字 这里我用的 mysql，实际上支持基本上所有主流的关系数据库，连接方式上略有不同

```
    db.DB().SetMaxIdleConns(10)
    db.DB().SetMaxOpenConns(100)
```

还可以使用 db.DB() 对象设置连接池信息

###### 1.1.3. 表定义

先来定义一个点赞表，这里面一条记录表示某个用户在某个时刻对某篇文章点了一个赞，用 ip + ua 来标识用户，title 标识文章标题

```go
    type Like struct {
        ID        int    `gorm:"primary_key"`
        Ip        string `gorm:"type:varchar(20);not null;index:ip_idx"`
        Ua        string `gorm:"type:varchar(256);not null;"`
        Title     string `gorm:"type:varchar(128);not null;index:title_idx"`
        Hash      uint64 `gorm:"unique_index:hash_idx;"`
        CreatedAt time.Time
    }
```

gorm 用 tag 的方式来标识 mysql 里面的约束

创建索引只需要直接指定列即可，这里创建了两个索引，ip_idx 和 title_idx；如果需要多列组合索引，直接让索引的名字相同即可；如果需要创建唯一索引，指定为 unique_index 即可

支持时间类型，直接使用 time.Time 即可

###### 1.1.4. 创建表

```
    if !db.HasTable(&Like{}) {
        if err := db.Set("gorm:table_options", "ENGINE=InnoDB DEFAULT CHARSET=utf8").CreateTable(&Like{}).Error; err != nil {
            panic(err)
        }
    }
```

直接通过 db.CreateTable 就可以创建表了，非常方便，还可以通过 db.Set 设置一些额外的表属性

###### 1.1.5. 插入

```
    like := &Like{
        Ip:        ip,
        Ua:        ua,
        Title:     title,
        Hash:      murmur3.Sum64([]byte(strings.Join([]string{ip, ua, title}, "-"))) >> 1,
        CreatedAt: time.Now(),
    }

    if err := db.Create(like).Error; err != nil {
        return err
    }
```

先构造已给对象，直接调用 db.Create() 就可以插入一条记录了

###### 1.1.6. 删除

```
    if err := db.Where(&Like{Hash: hash}).Delete(Like{}).Error; err != nil {
        return err
    }
```

先用 db.Where() 构造查询条件，再调用 db.Delete() 就可以删除

###### 1.1.7. 查询

```
    var count int
    err := db.Model(&Like{}).Where(&Like{Ip: ip, Ua: ua, Title: title}).Count(&count).Error
    if err != nil {
        return false, err
    }
```

先用 db.Model() 选择一个表，再用 db.Where() 构造查询条件，后面可以使用 db.Count() 计算数量，如果要获取对象，可以使用 db.Find(&Likes) 或者只需要查一条记录 db.First(&Like)



注意，如果未找到，那么对象的所有值都为空。（但是不会产生nullpointer异常，因为GoLang比较高级。）

###### 1.1.8. 修改

```
    db.Model(&user).Update("name", "hello")
    db.Model(&user).Updates(User{Name: "hello", Age: 18})
    db.Model(&user).Updates(User{Name: "", Age: 0, Actived: false}) // nothing update
```

我这个系统里面没有更新需求，这几个例子来自于官网，第一个是更新单条记录；第二个是更新整条记录，注意只有非空字段才会更新；第三个例子是不会更新的，在系统设计的时候要尽量避免这些空值有特殊的含义，如果一定要更新，可以使用第一种方式，设置单个值

###### 1.1.9. 错误处理

其实你已经看到了，这里基本上所有的函数都是链式的，全部都返回 db 对象，任何时候调用 db.Error 就能获取到错误信息，非常方便

###### 1.1.10. 事务

```
    func CreateAnimals(db *gorm.DB) err {
        tx := db.Begin()
        if err := tx.Create(&Animal{Name: "Giraffe"}).Error; err != nil {
            tx.Rollback()
            return err
        }
        if err := tx.Create(&Animal{Name: "Lion"}).Error; err != nil {
            tx.Rollback()
            return err
        }
        tx.Commit()
        return nil
    }
```

事务的处理也很简单，用 db.Begin() 声明开启事务，结束的时候调用 tx.Commit()，异常的时候调用 tx.Rollback()

###### 1.1.11. 其他

还可以使用如下方式设置日志输出级别以及改变日志输出地方

```
    db.LogMode(true)
    db.SetLogger(gorm.Logger{revel.TRACE})
    db.SetLogger(log.New(os.Stdout, "\r\n", 0))
```

也支持普通的 sql，但是建议尽量不要使用



#### Gin框架与接口实现

###### router.run()

注意，调用run后，go程序会进入阻塞，等待访问请求。所以run一定要在完成了初始化后，最后才能调用。

###### 全局变量

Go中不存在全局变量的概念。main函数中的变量就可以认为是全局变量。其他函数如果要当成全局变量来对其进行修改或赋值，可以采用指针。



## 项目部署

#### nginx配置

###### 文件目录

nginx文件安装完成之后的文件位置：

- /usr/sbin/nginx：主程序
- /etc/nginx：存放配置文件
- /usr/share/nginx：存放静态文件
- /var/log/nginx：存放日志

###### nginx使用

```
systemctl start nginx.service  //开启
systemctl enable nginx.service  //开机自启动
nginx -t # 查看nginx状态
nginx -s reload # 重新载入配置文件
nginx -s reopen # 重启 Nginx
#上述可能在做了大的操作后不管用，可以使用
#service nginx restart
#进行系统级重启，如果还是不行就重启服务器。
nginx -s stop # 停止 Nginx
```

1.打开 /etc/nginx/conf.d/文件夹，创建配置文件xxx.conf，内容如下：

```
server {
   server_name nesto.cupof.beer;
   root /home/lighthouse/nesto/build;
   index index.html index.htm;
   location / {
   try_files $uri /index.html =404;
   }
}
```

3.配置完成后重新启动nginx

在本地npm build，在build文件夹内全选并打包tar.gz，使用sz上传到nginx中配置的项目目录下，原地解压即可。

#### Go项目部署

###### 如何部署

远程服务器先安装go环境。

把本地整个gopath内的所有文件（例如/home/linton/go下的）打包tar.gz，上传到服务器的gopath下，解压。之所以这么做，是为了方便依赖的配置。这样就把所有需要的依赖都打包好了。

注意还可以打开服务器上的gomodule和服务器上的gomodule代理：

```
go env -w GOPROXY=https://goproxy.io,direct
go env -w export GO111MODULE=on
```

然后，在项目目录的src下，编译：

```
go build main.go
```

运行一下测试看看好不好用：

```
./main
```

以后可以放到后台运行：

```
nohup ./main &
```

然后不管是否是当前终端，都可以如下方式查看：

```
ps -aux|grep main
```

如果要杀掉进程，可以kill -9：

```
kill -9  进程号
```

#### react部署

###### 创建生产环境打包

```
npm run build
```

把build中的东西整体打包.tar.gz，上传即可。