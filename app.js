const http = require('http');
const server = http.createServer((req, res) => {
  console.log('access');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
<<<<<<< HEAD
  res.end('Hello CTI!');
=======
  res.end('Hello CTI!-v3');
>>>>>>> 8289e2baba039707e0f26df48cfb69aced6786d7
});

server.listen(8081, () => {
  console.log('Server is running at http://localhost:8081');
});
