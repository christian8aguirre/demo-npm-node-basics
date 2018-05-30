const chalk = require('chalk')
const http = require('http')
const fs = require('fs')

const PORT = 3000

const handleRequest = function(req, res){
  var indexHtmlStr = fs.readFileSync(`${__dirname}/index.html`)
  res.write(indexHtmlStr)
  res.writeHead(200, {"Content-Type": "text/html"})
}

const APPSERVER = http.createServer(handleRequest)

APPSERVER.listen( PORT ,function(){
  const successMsg = chalk.green('LISTENING ON PORT : ' + PORT )

  console.log(successMsg)
})
