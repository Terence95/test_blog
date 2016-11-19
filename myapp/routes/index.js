var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */
// 路由控制器，如果用户访问 ‘/’ 主页则由路由 router.index来处理
router.get('/', function(req, res, next) {
    // 访问主页时，调用ejs模板引擎，渲染index.ejs模板文件
    res.render('index', {
        title: '主页'
    });
});

router.get('/reg', function(req, res, next) {
    // 访问主页时，调用ejs模板引擎，渲染index.ejs模板文件
    res.render('reg', {
        title: '注册'
    });
});

router.post('/reg', function(req, res, next) {

});

router.get('/login', function(req, res, next) {
    res.render('login', {
        title: '登录'
    });
});

router.post('/login', function (req, res, next) {

});

router.get('/post', function (req, res) {
    res.render('post', {title:'发表'});
});

app.post('/post', function (req, res) {

});

app.get('/logout', function (req, res) {

});

// 如何针对已登录和未登录的用户显示不同的内容呢，或者如何判断用户是否已经登录呢，
// 通过引入会话机制，来记录用户登录状态，还需要访问数据库来保存和读取用户信息

//
//
// // 准备把实现路由功能的代码都放在 routes/index.js里
// // 官方给出的写法是在 app.js中实现简单的路由分配，然后去index.js找
// // 对应的路由函数，最终实现路由功能，我们不妨把路由控制和实现路由功能的
// // 函数都放到index.js里，app.js 中只有一个总的路由接口
// // module.exports = function(app){
// //     app.get('/', function (req, res) {
// //         res.render('index', {title: 'Express'});
// //     });
// // };
//
// module.exports = router;
// module.exports = function (app) {
//     app.get('/', function (req, res) {
//         res.render('index', {title: 'Express'});
//     });
// };
module.exports = router;
