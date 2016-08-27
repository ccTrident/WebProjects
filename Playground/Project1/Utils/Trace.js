var path = require("path");
var callerId = require("caller-id");

module.exports = {


    log: function(message){
      console.log(message);
    },
    error: function(message){
    console.log(message);
    },
    tracingId : 0,
    traceLocation: function(){
        var c = callerId.getData();
        var fileName = path.basename(c.filePath);
        console.log("["+this.tracingId++ + "] At function: "+c.functionName+". "+fileName+", Line: " +c.lineNumber +".");
    },

    fileStartMarkerLegacy: function(fileName){
        fileName = path.basename(fileName);
        console.log("====== Start of "+fileName+" ======");
    },

    fileEndMarkerLegacy: function(fileName){
        fileName = path.basename(fileName);
        console.log("====== End of "+fileName+" ======");
    },
    functionStartMarkerLegacy: function(funcName){
        var previousCaller = arguments.callee.caller.name;
        if (previousCaller == ""){
            previousCaller = "Unknown";
        }
        console.log("[+] Entering function "+previousCaller);
        this.getStack();
    },
    functionEndMarkerLegacy: function(funcName){
        var previousCaller = arguments.callee.caller.name;
        if (previousCaller == ""){
            previousCaller = "Unknown";
        }
        console.log("[+] Quiting function "+previousCaller);
    }
};