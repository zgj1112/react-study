// app.js

// 引入express框架
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
const app = express();
const port = 3000;
app.use(cors()); // 允许所有来源的跨域请求
// 设置路由，这里只是一个简单的示例
app.get('/', (req, res) => {
  res.send('欢迎访问微后台！');
});

// app.get('/createDatabase', (req, res) => {
//   // 创建连接
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456'
//   });
//   // 创建数据库
//   connection.query('CREATE DATABASE IF NOT EXISTS my_database', (err, results) => {
//     if (err) {
//       // console.log('创建失败 ', err);
//       res.send('创建失败');
//       return;
//     }
//     res.send('创建成功');
//   });

//   // 连接到新创建的数据库
//   connection.changeUser({ database: 'my_database' }, (err) => {
//     if (err) {
//       res.send('连接失败');
//       return;
//     }
//     res.send('连接成功');
//   });
//   res.send('111');
// });

// 启动服务器
app.listen(port, () => {
  console.log(`微后台应用运行在 http://localhost:${port}`);
});
