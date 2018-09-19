let express = require('express')

module.exports = (db)=>{
    let router = express.Router()
    router.get('/',(req,res)=>{//若是get方式，就直接跳转到login页面
        res.render('loginPage.ejs',{})
    })
    //处理登陆
    router.post('/submit',(req,res)=>{//如果是sumit方式
        //兜库-> 拿着前端的数据进行对比 -> 中cookie
        let username = req.body.username;
        let password = req.body.password;       
        db.query(            
            `SELECT * FROM user WHERE username="${username}" AND password="${password}"`,
            (err,result)=>{
                if(err) res.send('login error database')
                else{
                    if(result.length>0){
                        //种
                        console.log('登录成功')
                        req.session['username']=req.body.username;
                        // console.log(req.body.username)
                        res.redirect('/info');
                    }else{
                        res.send({error:1,des:'用户名或者密码有误'})
                    }
                }
            }
        )
    }) 
    return router;
}
