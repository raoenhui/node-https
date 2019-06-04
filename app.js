var https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
  key: fs.readFileSync(path.resolve(__dirname, './all.pem')),//密钥
  cert: fs.readFileSync(path.resolve(__dirname, './all.pem'))//证书
};
https.createServer(options, (request, response)=> {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(88);

// 终端打印如下信息
console.log('Server running at https://127.0.0.1:88/');