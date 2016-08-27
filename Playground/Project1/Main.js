
//var server = require("./Server/ServerMain");

var trace = require("./Utils/Trace");
var simpleFileIO = require("./SimpleFileIO");
var eventLoop = require("./EventLoop");

trace.traceJsFileStart();

/**
 * Sample of Sync and A-Sync file reader.
 */
//simpleFileIO.doSyncAsyncRead();

/**
 * Sample of event loop
 */
eventLoop.initEventLoop();
eventLoop.doConnect();
eventLoop.sendData("Weeeee");
eventLoop.sendData("AAA".repeat(2));
eventLoop.sendData("Waaaaa");
eventLoop.doConnect();

/**
 * Another async read with cb.
 */
simpleFileIO.doAsyncRead("input.txt");


trace.traceJsFileEnd();


