let express = require('express')

module.exports = (db)=>{
    let router = express.Router()
    //渲染注册页面
    router.get('/',(req,res)=>{
        res.render('regPage.ejs',{})
    })
    //处理登陆
    router.post('/submit',(req,res)=>{//如果是sumit方式
        //兜库-> 拿着前端的数据进行对比 -> 中cookie
        let username = req.body.username;
        let password = req.body.password;
        console.log(username)
        db.query(            
            `SELECT * FROM user WHERE username = "${username}"`,
            (err,result)=>{
                if(err) res.send('regist error database')
                else{
                    if(result.length>0){
                        // res.send('登录成功')
                        res.send('用户名已存在')
                        
                    }else{
                        db.query(
                            `INSERT INTO user (ID,username,password) VALUES (0,"${username}","${password}")`,
                            (err,result)=>{
                                if(!err){
                                    res.send('注册成功!!!')
                                }
                            }
                        )
                    }
                }
            }
        )
    })
    return router;
}
