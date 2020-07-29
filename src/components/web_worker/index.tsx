import * as React from 'react';
import * as styles from './style.scss';

const WebWorker = () => {
  let worker:any = '';
  function createWorker() {
    worker = new Worker('http://localhost:9004/worker.js');
  }

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
    createWorker();
    watchMsgFromWorker();
    workerCreateErr();
    return () => {
      clearWorker();
    }
  }, []);

  return <div className={styles.container}>
    <p className={styles.text_des}>
      this is web worker pagefdsa
    </p>
    <button onClick={sendMsgToWorker}>激活worker</button>
  </div>;
}

export default WebWorker;