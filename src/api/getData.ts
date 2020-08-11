import {getRandomString} from '../utils/getRandomString';
import {Config} from '../Config';

export const getData = async (query: string): Promise<{ data: string }> => {
    const nodeEnv = process.env.NODE_ENV;
    const isProduction = nodeEnv === 'production';

    // url is not used here but is shown on the start in the app console.
    const url = `${isProduction ? Config.PROD_SVR : Config.DEV_SVR}${Config.METRIC_ENDPOINT}`;

    return await new Promise(resolve => setTimeout(() => {
        console.log(`Will return result for "${query}".`);
        return resolve({data: getRandomString(6)});
    }, 1000));
};