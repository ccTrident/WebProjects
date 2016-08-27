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
    traceLocation: function(optMsg){
        var c = callerId.getData();
        var fileName = path.basename(c.filePath);
        this.log("["+this.tracingId++ + "] At function: "+c.functionName+". "+fileName+", Line: " +c.lineNumber +".");
        if (optMsg !== undefined) {
            this.log("\tMessage: " + optMsg)
        }
    },
    traceMessage: function(msg){
        this.log("["+this.tracingId++ + "] Message: " + msg);
    },

    traceFunction: function(msg){
        var c = callerId.getData();
        if (msg === undefined){ msg=""}
        this.log("["+this.tracingId++ + "] "+ c.functionName+"(): "+msg+".");
    },

    traceJsFileStart: function(){
        var c = callerId.getData();
        var fileName = path.basename(c.filePath);
        this.log("["+this.tracingId++ + "] JS START: "+fileName.substr(0, fileName.length -3));
    },

    traceJsFileEnd: function(){
        var c = callerId.getData();
        var fileName = path.basename(c.filePath);
        this.log("["+this.tracingId++ + "] JS END: "+fileName.substr(0, fileName.length -3));
    },
    /***
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
     **/
};