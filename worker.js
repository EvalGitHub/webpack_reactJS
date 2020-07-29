self.addEventListener('message', function (e) {
  console.log('ee', e);
  self.postMessage('You said: ' + e.data);
  self.close();
}, false);