import React, { Component } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import ReactResizeDetector from 'react-resize-detector';

const Icon = styled.div`
    border: ${props => props.shadow ? '3px solid cyan' : '3px solid #000'};
    width:50px;
    height:50px;
    background-color:${props => props.color};
`;
const CharacterDiv = styled.div`

`;


export class CanvasCharacterCard extends Component {

    constructor(props) {
        super(props);
        this.onResize = this.onResize.bind(this);
    }

    getBackgroundColor (props) {
        const types = {
            Friend: '#8e8eff',
            Enemy: 'red',
            Other: '#fff',
            Player: 'blue',
            default: '#c5c5c5'}
        return types[this.props.type] || types['default'];
    }

    onResize () {
        var element = document.querySelector('#cd-' + this.props.id + ' ' + '.resizable');
        element.style.height = element.style.width;
    }

    didComponentMount () {
        console.log('Mounting' + this.props.id);
    }

    render () {
        let posx = this.props.index * 60;
        console.log(posx);
        return (
            <Draggable
                bounds='parent'
                grid={this.props.grid}
                defaultPosition={{x: posx, y: 0}}
                handle='.icon'>
                <div className={'character-div'} id={'cd-' + this.props.id}>
                        <h5>{this.props.name}</h5>
                        <div className={'resizable'}>
                            <Icon className={'icon'} shadow={this.props.selected} color={this.getBackgroundColor()}></Icon>
                            <ReactResizeDetector 
                                handleWidth={true} 
                                onResize={this.onResize}
                                refreshMode={'throttle'}
                                refreshRate={10} />
                        </div>
                </div>
            </Draggable>
        );
    }
}