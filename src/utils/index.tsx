export async function createElement () {
  const element = document.createElement('div');
  const  _  = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
};


// 按照顺序加载js
export function loadScript(url:string, callback:() => void) {
  var script:any = document.createElement("script");
  script.type = "text/javascript";
  script.defer='defer';
  script.src = url;
  document.body.appendChild(script);
  if (script.readyState) { // ie  
    /*
      “uninitialized” – 原始状态 
      “loading” – 下载数据中..
      “loaded” – 下载完成
      “interactive” – 还未执行完毕.
      “complete” – 脚本执行完毕.
    */
    return new Promise((resolve, reject) => {
      script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback && callback();
          resolve(0);
        }
      };
    });
  } else {
    return new Promise((resolve, reject) => {
      script.onload = function() { // ie并不支持 script.onload
        callback && callback();
        resolve(0);
      };
      script.onerror = function() {
        // callback();
        resolve(0);
      };
    })
  }
}
