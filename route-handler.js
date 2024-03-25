const fs = require('fs')

module.exports = function routeHandler(req, res) {
  if (req.method === 'GET') {
    if (req.url === '/') {
      const homePage = fs.readFileSync('./index.html')
      res.statusCode = 302;
      res.setHeader('Content-Type', 'text/html');
      res.setHeader("Location", "/script");
      return res.end(homePage);
    }
    if (req.url === "/script") {
      const script = fs.readFileSync('./script.js')
      res.statusCode = 302;
      res.setHeader('Content-Type', 'text/javascript');
      res.setHeader("Location", "/styles");
      return res.end(script);
    }
    if (req.url === "/styles") {
      const script = fs.readFileSync('./styles.css')
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/css');
      return res.end(script);
    }

  }
  
  // Return a 404 response when there is no matching route handler
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  return res.end('No matching route handler found for this endpoint');

}
