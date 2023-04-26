const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors()) //보안 문제 없이 모든 요청에 대해서 받아주겠다 라는 것임

app.get('/', (req, res) => { // req: request, res: respond
    res.send('Hello World!') //응답에 hello world!를 보내겠다.
})

app.get('/dog', (req, res) => {
    res.send({ 'sound': '멍멍' })
})

app.get('/cat', (req, res) => {
    res.json({ 'sound': '야옹' })
})

app.get('/user/:id', (req, res) => {  //id라는 parameter를 입력 받음
    // const q = req.params // 요청에 id가 들어오면, q에 입력
    // console.log(q)
    // res.json({'userID': q.id}) //응답에 q.id를 보내겠다.

    const q = req.query
    console.log(q)
    res.json({ 'userID': q.name })
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)

    if (name == 'dog') {
        res.json({ 'sound': '멍멍' })
    }
    else if (name == 'cat') {
        res.json({ 'sound': '야옹' })
    }
    else {
        res.json({ 'sound': '알수없음' })
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})