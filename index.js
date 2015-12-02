module.exports = function (app, plugin_dir, debug) {
  var requireDirectory = require('require-directory');
  var lib = requireDirectory(module, plugin_dir);
  
  for(var k in lib){
    var v = lib[k];
    
    if (debug) {
      console.log('mount ' + k + ' plugin');
    }
  
    if(v){
      var middleware = v(app);
    
      if(middleware){
        app.use(middleware);
      }else{
        if (debug) {
          console.log('[DEBUG]: empty middleware');
        }
      }
    }
  }
}