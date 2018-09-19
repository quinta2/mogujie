//express 整合服务器
let express = require('express');
let path = require('path');
let cookieSession = require('cookie-session');
let bodyParser = require('body-parser');
let multer = require('multer');
let consolidate = require('consolidate')
let mysql = require('mysql')
let app = express();
app.listen(3000)

// app.set('view.engine','html');
// app.set('views',path.join(__dirname,'/views'));
// app.engine('html',consolidate.ejs);
app.set('view.engine','html')
app.set('views',__dirname + '/views');
app.engine('html',consolidate.ejs)

//静态页面托管
// app.use(express.static('./public'));
// app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.resolve('public')));

let arr=[];
for(var i=0;i<10000;i++){
  arr[i]='asdfsdf'+ Math.random()*10000
}
//给cookieSession里面的keys加密
app.use(cookieSession({
  name:'sess_id',
  keys:arr,
  maxAge:1000*10
}));

app.use(bodyParser.urlencoded({extended:false}));
//文件上传 
let multerObj = multer({dest:path.resolve('upload')});
app.use(multerObj.any());

let db = mysql.createPool({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'root',
  database : 'shops'
});

app.use('/',require('./routes/home')(db))
app.use('/car',require('./routes/car')(db))
app.use('/detailPage',require('./routes/detailPage')(db))
app.use('/listPage',require('./routes/listPage')(db))
app.use('/loginPage',require('./routes/loginPage')(db))
app.use('/info',require('./routes/info')(db))
app.use('/regPage',require('./routes/regPage')(db))
  