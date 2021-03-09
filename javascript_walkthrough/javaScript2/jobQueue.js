// ES8 uses jobQueues for promises
// for more detail, please goto
//https://hashnode.com/post/task-queue-and-job-queue-deep-dive-into-javascript-event-loop-model-cjui19qqa005wdgs1742fa4wz

/************************************************************************ */
function foo() {
  console.log("foo"); //executed in call stack

  new Promise(function (resolve, reject) {
    console.log("called first");
    setTimeout(function () {
      resolve("RESOLVING");
    }, 5000);
  }).then(
    function (value) {
      console.log(value);
    }
  );

  new Promise((resolve, reject) => {
    console.log("called second");
    resolve("without setTimeout");
  }).then((val) => console.log(val));
}

foo();
