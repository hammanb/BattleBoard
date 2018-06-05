import React, { Component } from 'react';
import styled from 'styled-components';

const CustomDropdownButton = styled.button`
    -webkit-box-shadow: ${ props => props.toggled ? 'inset 0px 0px 10px #777 !important' : 'none'};
    box-shadow: ${ props => props.toggled ? 'inset 0px 0px 10px #777 !important' : 'none'};
`;
const CustomDropdownList = styled.div`
    display: ${ props => props.toggled ? 'block' : 'none' };
`;

export class Toolbar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            toggled: false
        };

        this.onClickToggle = this.onClickToggle.bind(this);
    }

    onClickToggle () {
        if (!this.state.toggled) {
            console.log();
            this.setState({toggled: true});
        } else {
            this.setState({toggled: false});
        }
    }

    render () {
        return ( 
                <div id={'custom-dropdown-toolbar'}>
                    <CustomDropdownButton toggled={this.state.toggled} className={'btn btn-primary'} onClick={this.onClickToggle}>Toolbar <i className={'fa fa-caret-down'}></i></CustomDropdownButton>
                    <CustomDropdownList toggled={this.state.toggled} className={'custom-dropdown-list'}>
                        <div><p className={''}>New Prop</p></div>
                        <div><p className={''}>New Prop</p></div>
                        <div><p className={''}>Background: Dropdown</p></div>
                        <div><p className={''}>Size: Sm/Lg Toggle</p></div>
                        <div><p className={''}>Names: On/Off Toggle</p></div>
                        <div><p className={''}>Grid: slider</p></div>
                    </CustomDropdownList>
                </div>
        );
    }
}