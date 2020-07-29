const ctx: Worker = self as any;

ctx.addEventListener('message', function (e) {
  console.log('ee', e);
  ctx.postMessage('You said: ' + e.data);
  // self.close();
}, false);


ctx.postMessage('Inside worker.js: uInt8Array.toString() = ');
