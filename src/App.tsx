import * as React from 'react';
import {useState} from 'react';

import {render} from 'react-dom';
import {showBannerInConsole} from './utils/showBannerInConsole';
import {C1, C2, C3, C4, C5} from './components/ChildComponents';

showBannerInConsole();

const App = () => {

    const [isComponentVisible, setIsComponentVisible] = useState(true);
    setTimeout(() => {
        setIsComponentVisible(false);
    }, 10 * 1000);

    return (
        <>

            <C1/>
            <C2/>
            <C3/>

            {
                isComponentVisible
                    ?
                    <C4/>
                    :
                    <div className={'unmounted-message'}>No component</div>
            }

            <C5/>
        </>
    );
};

render(<App/>, document.getElementById('root'));