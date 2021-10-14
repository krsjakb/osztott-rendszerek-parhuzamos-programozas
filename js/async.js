// firstCase();
secondCase();
var running = true;

function firstCase() {
  threadTest("RealTime");

  callTimeoutThreadTest("Timeout");

  console.log("Hello World!");
}

function secondCase() {
  let num1 = 0;
  let num2 = 0;
  sleepTest("RealTime", num1);

  callTimeoutSleepTest("Timeout", num2);

  // while (!running) {
  //   console.log("Hello World!");
  // }
  console.log("Hello!");
}

function callTimeoutThreadTest(text) {
  setTimeout(function () {
    threadTest(text);
  }, 5000);
}

function threadTest(text) {
  let num = 0;
  // 100 mill
  while (num < 100000000) {
    num++;
    // 10 ezer
    if (num % 10000 === 0) {
      console.log(text + " -> " + num);
    }
  }
}

function callTimeoutSleepTest(text, num) {
  setTimeout(function () {
    sleepTest(text, num);
  }, 5000);
}

function sleepTest(text, num) {
  if (num < 10) {
    setTimeout(function () {
      num++;
      console.log(text + " -> " + num);
      sleepTest(text, num);
    }, 1000);
  } else if (text === "Timeout") {
    running = false;
  }
}
