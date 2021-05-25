import { infoArray as data } from '@mock/email';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const netlify = (config: AxiosRequestConfig): Promise<AxiosResponse> => {
    if (config.url === '/emails') {
        return { data } as any;
    }

    return Promise.reject();
}
