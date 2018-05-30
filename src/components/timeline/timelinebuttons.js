import React, { Component } from 'react';
import styled from 'styled-components';


const Fa = styled.span`
    &:before {
        font-family: FontAwesome;
    };
`;
    const FaR = Fa.extend`
        &:before {
            content: '\f0da';
        }
    `;
    const FaL = Fa.extend`
        &:before {
            content: '\f0d9';
        }
    `;

export class TimelineButton extends Component {
    directionFunction () {
        let d = this.props.direction;
        let i = this.props.charID;
        let ret;
            if (d === 'right') { ret = <FaR id={'arrow-' + d + '-' + i}></FaR> ;}
            else if (d === 'left') {ret = <FaL id={'arrow-' + d+ '-' + i}></FaL> ;}
        return ret;
    }
    render () {
        let i = this.props.charID;
        return(
        <div className={'arrow'} id={'button-' + this.props.direction + '-' + i} onClick={this.props.onClick}>{this.directionFunction()}</div>
        );
    }    
}