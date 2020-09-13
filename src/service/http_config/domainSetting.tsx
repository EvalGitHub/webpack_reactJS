// development ，Staging，Test，Production
import axios from 'axios';

const DomainConfig = {
  development: {
    env: 'development',
    port: 0,
    // fontWebSiteHost: 'http://192.168.0.6:9004/',
  },
  test: {
    env: 'test',
    port: 0,
  },
  production: {
    env: 'production',
    port: 0,
  },
  staging: {
    env: 'staging',
    port: 0,
  }
};

type envType = 'development' | 'test' | 'production' | 'staging'
interface HostConfig {
  env?: string,
  host?: string,
  openService?: string,
  port?: number | string ,
  fontWebSiteHost?: string
};
let config: HostConfig = DomainConfig.development;
export const init_config = (cb?: () => void) => {
  return axios.get('/config').then((res:any) => {
    if (res.status === 200) {
      let env:envType = res.data;
      config = DomainConfig[env];
      cb && cb();
      return config;
    }
  }).catch((err:any) => {
    config = DomainConfig.development;
    cb && cb();
    return config;
  })
}

export const get_config = () => {
  if (!config) {
    return;
  }
  return config;
};




