var workerThreadTest = new Worker("threadTest.js");
var workerTimeoutThreadTest = new Worker("timeoutThreadTest.js");

workerThreadTest.postMessage("async");
workerTimeoutThreadTest.postMessage("test");
