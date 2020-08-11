import * as React from 'react';

import {BaseComponent} from './BaseComponent';

export const C1 = () =>
    <BaseComponent
        componentName={'c1'}
        refreshIntervalInSeconds={60}
        timeRange={'24h'}
    />;

export const C2 = () =>
    <BaseComponent
        componentName={'c2'}
        refreshIntervalInSeconds={10}
        timeRange={'12h'}
    />;

export const C3 = () =>
    <BaseComponent
        componentName={'c3'}
        refreshIntervalInSeconds={15}
        timeRange={'12h'}
    />;

export const C4 = () =>
    <BaseComponent
        componentName={'c4'}
        refreshIntervalInSeconds={42}
        timeRange={'10d'}
    />;

export const C5 = () =>
    <BaseComponent
        componentName={'c5'}
        refreshIntervalInSeconds={30}
        timeRange={'1y'}
    />;