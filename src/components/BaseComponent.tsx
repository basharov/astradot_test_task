import * as React from 'react';
import {useEffect, useState} from 'react';
import {genQuery} from '../utils/genQuery';
import {getData} from '../api/getData';
import {Loading} from './Loading';
import {IProps} from '../interfaces/IProps';

export const BaseComponent = (props: IProps) => {
    const {timeRange} = props;

    const [data, setData] = useState('N/A');
    const [isFirstStart, setFirstStart] = useState(true);
    let timeout: NodeJS.Timeout;

    const cleanupTimeout = () => {
        console.log('Will cleanup timeouts for the unmounted component');
        clearTimeout(timeout);
    };

    const loadData = async (): Promise<void> => {
        const query = genQuery(timeRange, props.componentName);
        const result: { data: string } = await getData(query);
        setData(result.data);
    };

    const startPollingData = async (): Promise<void> => {
        setFirstStart(false);
        timeout = setTimeout(async () => {
            await loadData();
            startPollingData();
        }, props.refreshIntervalInSeconds * 1000);
    };

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        startPollingData();
        return cleanupTimeout;
    }, []);

    return (
        <div className={'component-wrapper'}>
            {
                isFirstStart
                    ?
                    <Loading/>
                    :
                    <>
                        <h1>{props.componentName.toLocaleUpperCase()} {String(status)}</h1>
                        <p>{data}</p>
                    </>
            }
        </div>
    );
};
