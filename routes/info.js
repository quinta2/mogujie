let express = require('express')

module.exports=function(db){
  let router=express.Router();

  router.get('/',(req,res,next)=>{
    if(req.session['username']){
      db.query(
        `SELECT * FROM user WHERE username="${req.session['username']}"`,
        (err,data)=>{
          if(err){
            console.log('database error user');
          }else{
            console.log(data)
            res.user=data[0];
            next()
          }
        }
      )
      
    }else{
      // console.log('...');
      // res.render('login.ejs',{});
      //请求接口  (路由跳转)
      res.redirect('/loginPage')
    }
  });

  router.get('/', (req, res, next) => {  
      console.log('dfjksal;')    
    //兜库
    db.query(
      'SELECT * FROM goods',
      (err, data) => {
        if (err) res.send('database error index');
        else {
          console.log(data)
          res.render('info.ejs',{
              user:res.user,
              goods:data
            })
           
        }
      }
    )
  });
  return router;
}