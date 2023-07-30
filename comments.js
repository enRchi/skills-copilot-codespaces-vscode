// create web Server
// 1. create http module
const http = require('http');
// 2. create web server
const server = http.createServer((req, res) => {
    // 3. send response
    res.write('Hello World');
    res.end();
});
// 4. listen on port 3000
server.listen(3000);
console.log('Listening on port 3000...');