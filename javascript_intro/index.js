const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'))
const path = require('path');
const router = express.Router();

const public_root = __dirname +'/public'
// send Javascript static files
router.get('/index.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/vendor/index.js'));
});
router.get('/test102.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/vendor/test102.js'));
});
router.get('/insight.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/vendor/insight.js'));
});
// Send HTML Static files
router.get('/',function(req,res){
  res.sendFile(path.join(public_root+'/index.html'));
});

router.get('/test102',function(req,res){
  res.sendFile(path.join(public_root+'/test102.html'));
});

router.get('/insight',function(req,res){
  res.sendFile(path.join(public_root+'/insight.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');