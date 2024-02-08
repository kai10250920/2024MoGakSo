
const mysql      = require('mysql');
const dbconfig   = require('./db.js');
const connection = mysql.createConnection(dbconfig)
console.log("connect db")
const express = require('express')
// express라는 npm 모듈 요청
const app = express()
//express 함수를 app이라고 함
const port = 3000
// 포트 3000번 설정
var bodyParser= require(`body-parser`)
app.set(`view engine`,`ejs`)
app.set(`views`,`./views`)
//화면상보여지는것
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index') //./views/index.ejs 출력
})
app.get('/profile', (req, res) => {
  res.render('profile')
})
app.get('/map', (req, res) => {
  res.render(`map`)
})
app.get('/contact', (req, res) => {
  res.render(`contact`)
})

app.post('/contactProc', (req, res) => {
  const name=req.body.name;
  const phone=req.body.phone;
  const email=req.body.email;
  const memo= req.body.memo;

  var sql= `insert into contact(name,phonenum,email,memo,regdate)
  values('${name}','${phone}','${email}','${memo}',now() )`
  connection.query(sql,function(err,result){
    if (err) throw err;
    console.log(`삽입성공`)
    res.send(" <script> alert('문의등록'); location.href=`/`</script>")
  })
  // var a= `안녕하세요 ${name} ${phone} ${email} ${memo}`
  // res.send(a);
})
app.get('/test', (req, res) => {
    res.send('<h1>test<h1>!')
  })
//라우터 개념 /사용자에게 response로 응답 전달 `Hello World` 전송

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//먼저 console에 출력



