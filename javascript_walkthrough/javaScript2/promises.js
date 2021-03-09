// how taskQueue and jobQueues works, for detail please read
// https://hashnode.com/post/task-queue-and-job-queue-deep-dive-into-javascript-event-loop-model-cjui19qqa005wdgs1742fa4wz

const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');
const doggy = () => console.log('Doggy');

const cartoon = () => {
  console.log('Cartoon');

  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  new Promise((resolve, reject) =>
    resolve('I am a Promise after Promise!')
  ).then(resolve => console.log(resolve));

  jerry();
//   new Promise((resolve, reject) =>
//     resolve('I am a Promise, right after tom and doggy! Really?')
//   ).then(resolve => console.log(resolve));
}

cartoon();
