import * as React from 'react';

import {render} from 'react-dom';
import {showBannerInConsole} from './utils/showBannerInConsole';
import {C1, C2, C3, C4, C5} from './components/ChildComponents';

showBannerInConsole();

const App = () => {

    return (
        <>
            <C1/>
            <C2/>
            <C3/>
            <C4/>
            <C5/>
        </>

    );
};

render(<App/>, document.getElementById('root'));