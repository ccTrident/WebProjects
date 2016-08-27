var exports = module.exports = {};
var events = require("events");
var trace = require("./Utils/Trace");

trace.traceJsFileStart();

const connectionEventName = "EVENT_connectionStarted";
const dataReceivedEventName = "EVENT_dataReceived";


exports.initEventLoop = function (){
    this.restartEventEmitter();
    this.establishEventHandlers();
};

exports.restartEventEmitter = function()
{
    this.eventEmitter = null;
    this.eventEmitter = new events.EventEmitter();
};

exports.addEventHandler = function(eventName, eventHandler)
{
    trace.traceMessage("Adding event handler: " + eventName + ".");

    //Bind an event and en event emitter.
    this.eventEmitter.on(eventName, eventHandler.bind(this));
};

exports.establishEventHandlers = function(){

    var connectHandler = function connected(){
        trace.traceFunction('EVENT triggered - Connected successfully.');

        //Fire an event!
        this.eventEmitter.emit(dataReceivedEventName, 'Connection established.');
    };

    var receiveDataHandler = function receiveData(data){
        trace.traceFunction('EVENT triggered - Received data - ' + data);
    };

    this.addEventHandler(connectionEventName, connectHandler);
    this.addEventHandler(dataReceivedEventName, receiveDataHandler);

};

exports.doConnect = function() {
    this.eventEmitter.emit(connectionEventName)
};


exports.sendData = function(data) {
    this.eventEmitter.emit(dataReceivedEventName,data)
};

trace.traceJsFileEnd();