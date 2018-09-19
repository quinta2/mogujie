let express = require('express')

module.exports = (db) => {
  let router = express.Router();

  //渲染静态页面
  router.get('/', (req, res) => {

    //兜库
    db.query(
      `SELECT * FROM goods`,
      (err, data) => {
        if (err) res.send('database error index');
        else {
          res.render('listPage.ejs',{goods:data})
        }
      }
    )

  });

  return router;
}