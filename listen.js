var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

module.exports = function(http){
    http.listen(3005,()=>{
      var d = new Date();
      var n = d.getHours();
      var m = d.getMinutes();
      console.log('Server has been started at : ' + n + ':' +m);
    });
    }


    function normalizePort(val) {
        var port = parseInt(val, 10);
      
        if (isNaN(port)) {
          // named pipe
          return val;
        }
      
        if (port >= 0) {
          // port number
          return port;
        }
      
        return false;
      }
      