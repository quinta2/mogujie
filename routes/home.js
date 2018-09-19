let express = require('express')

module.exports = (db) => {
  let router = express.Router();

  //渲染静态页面
  router.get('/', (req, res, next) => {

    //兜库
    db.query(
      'SELECT * FROM goods',
      (err, data) => {
        if (err) res.send('database error index');
        else {
          // console.log(data)
          res.render('index.ejs',{goods:data})
           
        }
      }
    )

  });

  return router;
}