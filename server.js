const express = require('express')
const history = require('connect-history-api-fallback')
// 创建服务对象
const app = express()

app.use(history())
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