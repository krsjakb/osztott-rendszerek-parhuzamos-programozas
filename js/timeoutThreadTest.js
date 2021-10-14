this.addEventListener("message",
  function (e) {
  callTimeoutThreadTest("asyncTimeoutThreadTest");
});

function callTimeoutThreadTest(text) {
  setTimeout(function () {
    threadTest(text);
  }, 50);
}

function threadTest(text) {
  let num = 0;
  while (num < 100000000) {
    num++;
    if (num % 1000000 === 0) {
      console.log(text + " -> " + num);
    }
  }
}
