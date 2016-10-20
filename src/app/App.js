import React from 'react';
import ReactDom from 'react-dom';

import Start from './components/Start/Start.jsx';

export default class App {
    /**
     * To Infinity and Beyond
     */
    start() {
        ReactDom.render(
            <div>
                <Start/>
            </div>,
            document.getElementById('app')
        );
    }
}

