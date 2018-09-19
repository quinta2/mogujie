let express = require('express')

module.exports = (db)=>{
    let router = express.Router()
    router.get('/',(req,res)=>{
        //读session
        if(!req.session['user_id']){
           res.redirect('/loginPage')//js之间的跳转
        }else{
            db.query(
                `SELECT * FROM user WHERE ID= "${req.session['user_id']}"`,
                (err,result)=>{
                    res.render('/index',{user:result[0]})//js->ejs之间的跳转
                }
            )
        }
    })   
    return router;
}
