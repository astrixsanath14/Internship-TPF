var http=require('http');
http.createServer(function(req,res){
  res.writeHead(404);
  res.end('Hello, World!');
}).listen(9001);
console.log('Server is running on port no. 9001 !!!!');