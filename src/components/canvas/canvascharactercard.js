import React, { Component } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const Icon = styled.div`
    border: ${props => props.shadow ? '3px solid cyan' : '3px solid #000'};
    width:50px;
    height:50px;
    background-color:${props => props.color};
`;
const CharacterDiv = styled.div`
    width:100px;
    height:100px;
    cursor:all-scroll;
    margin: 0px;
    float: none;
    position: absolute;
    top: 100px;
    left: 100px;
`;


export class CanvasCharacterCard extends Component {

    getBackgroundColor (props) {
        const types = {
            Friend: '#8e8eff',
            Enemy: 'red',
            Other: '#fff',
            Player: 'blue',
            default: '#c5c5c5'}
        return types[this.props.type] || types['default'];
    }

    didComponentMount () {
        console.log('Mounting' + this.props.id);
    }

    render () {
        return (
            <Draggable
                bounds='parent'
                grid={this.props.grid}
                defaultPosition={{x: 0, y: 0}}>
                <CharacterDiv>
                    <h5>{this.props.name}</h5>
                    <Icon shadow={this.props.selected} color={this.getBackgroundColor()}></Icon>
                </CharacterDiv>
            </Draggable>
        );
    }
}