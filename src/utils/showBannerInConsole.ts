import {Config} from '../Config';

export const showBannerInConsole = () => {
    const nodeEnv = process.env.NODE_ENV;
    const isProduction = nodeEnv === 'production';
    const url = `${isProduction ? Config.PROD_SVR : Config.DEV_SVR}${Config.METRIC_ENDPOINT}`;
    console.log('-----------------------------------------------------------');
    console.log(`Will use "${nodeEnv}" env.`);
    console.log(`API URL is ${url}`);
    console.log('-----------------------------------------------------------');
};
