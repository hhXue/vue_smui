var express = require('express');
var router = express.Router();
//var base = require('../config');
//var baseUrl = base.mode ? base.dev : base.product;
var co = require('co');
var request = require('request');
var thunkify = require('thunkify');
var post = thunkify(request.post);
var get = thunkify(request.get);
var base    = require('../server_config');
var baseUrl = base.mode ? base.dev : base.product;

//获取直播详情
router.get('/live_detail',function(req,res,next){
  //res.json({name:'xue',pwd:'2222'})
  co(function* (){
    var url = 'http://123.57.166.102:5000/bcs/user/info?id=10851';
    var result = yield get(url,{headers:{'User-Agent':'joygo'}});
    result = JSON.parse(result[1]);
    res.send(result);

  })

})
module.exports = router;
