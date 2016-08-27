var exports = module.exports = {};
var fs = require("fs");
var trace = require("./Utils/Trace");

trace.traceJsFileStart();

exports.doSyncAsyncRead = function()
{
    trace.traceLocation();
    var data = fs.readFileSync('input.txt');
    trace.log(data.toString());

    fs.readFile('input.txt', function (err, data) {
        if (err) return trace.error(err);
        trace.log(data.toString());
    });

    trace.traceLocation();
};

exports.doAsyncRead = function(fileName, cb)
{
    // If no callback given - provide one to the user.
    if (cb === undefined){
        cb = function(err, data) {
            if (err) return trace.error(err);
            trace.traceMessage("READ " + fileName+  " COMPLETED. Data: " + data);
        }
    }
    fs.readFile('input.txt',cb);
    trace.traceFunction("Launched a-sync read for file: " + fileName);
};

trace.traceJsFileEnd();
