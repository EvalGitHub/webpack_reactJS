import Toast from './global_toast.js';

let loadingInstance = 0;
let getLoadingInstance = (tip, infoType) => {
    loadingInstance = loadingInstance || Toast.newInstance({
        tip,
        infoType
    });
    return loadingInstance;
};
export default {
    open(obj) {
        let {tip, infoType, selfCloseConfig, callback} = obj;
        getLoadingInstance(tip, infoType);
        if (selfCloseConfig && selfCloseConfig.flag) {
            setTimeout(() => {
                this.close(); 
                if (callback) {
                    callback();
                };
            }, selfCloseConfig.timer);
        }
    },
    close() {
        if (loadingInstance) {
            loadingInstance.destroy();
            loadingInstance = null;
        }
    },
};