var exports = module.exports = {};
var fs = require("fs");
var trace = require("./Utils/Trace");

trace.traceLocation();

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
trace.traceLocation();
