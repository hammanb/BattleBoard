import React, { Component } from 'react';
import styled from 'styled-components';

const ToolbarDiv = styled.div`
    float:left;
    background-color:#fff;
    width:150px;
    padding: 10px;
    margin-top: 20px;
    text-align:center;
`;

export class Toolbar extends Component {

    render () {
        return (
            <ToolbarDiv>
                <p className={'btn btn-primary'}>New Prop</p>
                <p className={'btn btn-primary'}>Background: Dropdown</p>
                <p className={'btn btn-primary'}>Size: Sm/Lg Toggle</p>
                <p className={'btn btn-primary'}>Names: On/Off Toggle</p>
                <p className={'btn btn-primary'}>Grid: slider</p>
            </ToolbarDiv>
        );
    }
}