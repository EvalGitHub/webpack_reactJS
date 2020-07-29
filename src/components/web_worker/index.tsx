import * as React from 'react';
import * as styles from './style.scss';
import * as Worker from 'worker-loader!../../utils/test.worker';

const WebWorker = () => {
  const worker = new (Worker as any)();
/*   function createWorker() {
    console.log('worker' ,Worker);
    worker = new Worker();
  } */

  function sendMsgToWorker() {
    worker.postMessage('Hello World');
    worker.postMessage({method: 'echo', args: ['Work']});
  }

  function watchMsgFromWorker(event?:any) {
    worker.onmessage = function (event:any) {
      console.log('Received message ' + event.data);
    }
    clearWorker();
  }

  function clearWorker() {
    worker.terminate();
  }

  function workerCreateErr() {
    worker.addEventListener('error', function () {
      console.log('this is something error happened in the process of creataging worker');
      clearWorker();
    });
  }

  React.useEffect(() => {
    watchMsgFromWorker();
    // workerCreateErr();
   /*  return () => {
      clearWorker();
    } */
  }, []);

  return <div className={styles.container}>
    <p className={styles.text_des}>
      this is web worker pagefdsa
    </p>
    <button onClick={sendMsgToWorker}>激活worker</button>
  </div>;
}

export default WebWorker;