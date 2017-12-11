var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

// router.get('/test', function(req, res, next) {
//   res.render('1_2_1产品详情页_概述_pc', { title: 'Express' });
// });

// router.get('/1_2_2产品详情页_参数_pc', function(req, res, next) {
//   res.render('1_2_2产品详情页_参数_pc', { title: 'Express' });
// });

// router.get('/2果麦服务', function(req, res, next) {
//   res.render('2果麦服务', { title: 'Express' });
// });

// router.get('/3_1关于我们', function(req, res, next) {
//   res.render('3_1关于我们', { title: 'Express' });
// });

// router.get('/3_2创始人详情', function(req, res, next) {
//   res.render('3_2创始人详情', { title: 'Express' });
// });

// router.get('/4联系_加入我们', function(req, res, next) {
//   res.render('4联系_加入我们', { title: 'Express' });
// });
module.exports = router;