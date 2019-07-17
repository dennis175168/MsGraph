const express = require('express');
const router = express.Router();
const mainCtrl = require('./controller');

var app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
});

// app.get('/api/', mainCtrl.a);
app.get('/authcode', mainCtrl.GetBearToken);
// app.get('/authcode', function(req,res){
//     var code = req.query.code;
//     mainCtrl.auth2(req,res,code)
// });




app.listen(3000, () => console.log('App listening on port 3000!'));

module.exports = router;