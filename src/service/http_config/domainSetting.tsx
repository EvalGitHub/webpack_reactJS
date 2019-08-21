// development ，Staging，Test，Production
import axios from 'axios';

const DomainConfig = {
  development: {
    env: 'development',
    host: 'https://backend-dev.codemao.cn/',
    port: 0,
    // fontWebSiteHost: 'http://192.168.0.6:9004/',
  },
  test: {
    env: 'test',
    host: ' https://test-api.codemao.cn/',
    port: 0,
  },
  production: {
    env: 'production',
    host: 'https://api.codemao.cn/',
    port: 0,
  },
  staging: {
    env: 'staging',
    host: 'https://backend-test.codemao.cn/',
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
let config: HostConfig
export const init_config = (cb: () => void) => {
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
    console.error(`
            Tried to get config before it was loaded. This should never happen.
            Ensure your code is not run before the index.ts init function has been called.

            Be aware that the config is not accessible from within the WHITEPAW Runtime.
        `);
    return;
  }
  return config;
};



