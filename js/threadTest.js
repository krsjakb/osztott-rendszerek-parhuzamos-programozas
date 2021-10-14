this.addEventListener("message",
  function (e) {
  threadTest("asyncThreadTest");
});

function threadTest(text) {
  let num = 0;
  // 8 0
  while (num < 100000000) {
    num++;
    //6 0
    if (num % 1000000 === 0) {
      console.log(text + " -> " + num);
    }
  }
}
