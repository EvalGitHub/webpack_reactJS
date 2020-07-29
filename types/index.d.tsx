declare module 'is_js';
declare module 'jquery';
declare module 'lodash-es';
declare module 'weixin-js-sdk';
declare module '@mlz/perf-report';
declare module '*';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
interface Window {
  QC:any;
  jQuery:any;
}

declare module 'worker-loader!*' {
  class WebpackWorker extends Worker {
    constructor();
  }
  export default WebpackWorker;
}