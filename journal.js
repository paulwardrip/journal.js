var Journal = function (){
    var level = "warn";
    var logs = [];
    
    var c = {
        debug: console.info.bind(console);
        info: console.info.bind(console);
        warn: console.warn.bind(console);
        error: console.error.bind(console);
    }
    
    function isLevelActive(lv) {
        var l = {
            debug: false,
            info: false,
            warn: false,
            error: false
        }
        if (level === "debug") {
            l.error = l.warn = l.info = l.debug = true;
        }
        if (level === "info") {
            l.error = l.warn = l.info = true;
        }
        if (level === "warn") {
            l.error = l.warn = true;
        }
        if (level === "debug") {
            l.error = true;
        }
        return l[lv];
    }
    
    function getStackTrace() {
        var obj = {};
        Error.captureStackTrace(obj, getStackTrace);
        return obj.stack;p
    };
    
    function makelog(lv){
        return function(){
            logs.push({ level: lv, arguments: arguments });
        	if (isLevelActive(lv)){
            	c[lv].apply(console, arguments);
            }
        }
    }
    
    return {
        
        
    }
}();