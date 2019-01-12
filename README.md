[![Build Status](https://travis-ci.org/Jack-cool/automated_testing.svg?branch=master)](https://travis-ci.org/Jack-cool/automated_testing)
[![codecov](https://codecov.io/gh/Jack-cool/automated_testing/branch/master/graph/badge.svg)](https://codecov.io/gh/Jack-cool/automated_testing)

# automated_testing

## 前端自动化测试（单元测试 | UI测试）

## 命令介绍

## 项目依赖

### assert（断言）
assert 模块提供了断言测试的方法，用于测试不变式。

### chai
Chai是具有BDD/TDD(BDD:测试驱动开发/TDD:行为驱动开发)风格的验证库，可以运行在node和浏览器环境中，一般和各类JavaScript框架一起使用。
为什么说Chai同时具有BDD或者TDD风格呢？因为Chai提供了不同风格的接口:
* should和expect接口提供了BDD链式风格，是一种更加易读的风格
```
tea.should.have.property('flavors').with.lengthOf(3)
expect(tea).to.have.property('flavors').with.lengthOf(3)

```
* assert提供了更加经典的TDD验证风格
```
assert.lengthOf(tea.flavors, 3);

```
1.安装
`yarn add chai`
2.使用
chai的相关文档可以去`https://www.chaijs.com/`查看使用

### mocha
mocha是JavaScript的一种单元测试框架，既可以在浏览器环境下运行，也可以在Node.js环境下运行。

使用mocha，我们就只需要专注于编写单元测试本身，然后，让mocha去自动运行所有的测试，并给出测试结果。

mocha的特点主要有：

既可以测试简单的JavaScript函数，又可以测试异步代码，因为异步是JavaScript的特性之一；

可以自动运行所有测试，也可以只运行特定的测试；

可以支持before、after、beforeEach和afterEach来编写初始化代码。
1.安装
`yarn add mocha`
2.基本使用
```
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

```

### istanbul
istanbul是JavaScript程序的代码覆盖率工具。
1.安装
`yarn add istanbul`
2.命令行配置（有坑）
安装完成之后,在 package.json 文件的 scripts 下,添加执行测试覆盖率检查的命令
```
{
     "scripts": {
        "mocha": "mocha test/mocha.js",
        "cover": "istanbul cover D:/automated_testing/node_modules/mocha/bin/_mocha --reporter test/mocha.js",
    },
}

```
注意, window下必须要这样才可以执行 cover，直接使用_mocha不适用于Windows，请改用JS文件的完整路径。

### 持续集成
完成所有代码之后,我们可以将代码发布到 github ,然后使用持续集成工具 travis 检查代码,将生成的测试报告上传到 coverall 上,这样就可以在项目中显示项目状态和测试覆盖率的badges。

#### 持续集成的特点
1.频繁的将代码集成到主干
2.每次集成都通过自动化的构建来验证
3.尽早发现错误
4.防止分支大幅偏离主干

#### egg
egg 选择了 Koa 作为其基础框架，在它的模型基础上，进一步对它进行了一些增强。
`https://github.com/eggjs/egg`

#### travis-ci
`https://travis-ci.org/`
1.travis-ci介绍
编写代码只是软件开发的一小部分，更多的时间往往花在构建（build）和测试（test）。

为了提高软件开发的效率，构建和测试的自动化工具层出不穷。Travis CI就是这类工具之中，市场份额最大的一个。
Travis CI 提供的是持续集成服务（Continuous Integration，简称 CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器。

持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码"集成"到主干。

2.使用准备
Travis CI 只支持 Github，不支持其他代码托管服务。这意味着，你必须满足以下条件，才能使用 Travis CI。

* 拥有 GitHub 帐号
* 该帐号下面有一个项目
* 该项目里面有可运行的代码
* 该项目还包含构建或测试脚本

如果这些条件都没问题，就可以开始使用 Travis CI 了。

首先，访问官方网站travis-ci.org，点击右上角的个人头像，使用 Github 账户登入 Travis CI。

Travis 会列出 Github 上面你的所有仓库，以及你所属于的组织。此时，选择你需要 Travis 帮你构建的仓库，打开仓库旁边的开关。一旦激活了一个仓库，Travis 会监听这个仓库的所有变化。

3.travis.yml
Travis 要求项目的根目录下面，必须有一个.travis.yml文件。这是配置文件，指定了 Travis 的行为。该文件必须保存在 Github 仓库里面，一旦代码仓库有新的 Commit，Travis 就会去找这个文件，执行里面的命令。
`src/.travis.yml`
```
language: node_js
node_js:
  - "6"
  - "8"
brancher:
  only:
    - "dev"
    - "master"
install:
  - "npm install"
  - "npm install -g codecov"
script:
  - "yarn run cover"
  - "codecov"

```
#### repo-badges(图标库)
`https://github.com/dwyl/repo-badges`

#### codecov(生成持续集成测试报告)
将下面代码添加到之前的`.travis.yml`中
```
language:
  node_js
install:
  - npm install -g codecov
script:
  - codecov

```