node.js + express 框架 搭建微型服务器

## 1. npm init 

## 2. npm i express

## 3. 新建服务器文件 server.js\

    const express = require('express')

    // 创建服务对象
    const app = express()

    // 指定静态资源目录
    app.use(express.static(__dirname + '/static'))

    app.get('/person', (request, response) => {
        response.send({
            name: 'sz',
            age: 20
        })
    })

    app.listen(8989, (err) => {
        if (!err) console.log("服务器启动成功！");
    })

## 4. 启动服务器
    node server

## 5. 浏览器地址访问
    http://localhost:8989/person  

## 6.访问静态资源
    新建staic文件夹，创建index.html文件。
    使用中间件来指定静态资源，让服务器识别
    app.use(express.static(__dirname + '/static'))
    

## 在node中解决history模式404问题
    npm i connect-history-api-fallback

    引入 
    const history = require('connect-history-api-fallback')+

    使用中间件，在引入静态资源之前引入

    app.use(history())