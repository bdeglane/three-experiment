import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';

import Background from '../../three/Background';

export default class Start extends React.Component {
    constructor() {
        super();
        this.uid = this.uuid();
        this.scene = new Background();
    }

    /**
     * Generate a random unique string
     * @returns {string}
     */
    uuid() {
        return 'a' + 'xxxxxxxxxyxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    }

    componentDidMount() {
        this.scene.setDomElement(findDOMNode(this));
        this.scene.launch();
        this.scene.render();
    }

    /**
     * @return {XML}
     */
    render() {
        return (
            <div id={this.uid}></div>
        );
    }
}

// Start.propsTypes = {};