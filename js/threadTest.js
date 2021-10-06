this.addEventListener("message", function (e) {
  threadTest("asyncThreadTest");
});

function threadTest(text) {
  let num = 0;
  while (num < 100000000) {
    num++;
    if (num % 1000000 === 0) {
      console.log(text + " -> " + num);
    }
  }
}
