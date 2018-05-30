import React, { Component } from 'react';
import { CanvasCharacterCard } from './canvascharactercard.js';
import { Toolbar } from './toolbar.js';

export class Canvas extends Component {
    constructor (props) {
        super(props);
        this.state = {
            characters: props.characters,
            setPieces: props.setPieces,
            background: props.background,
            grid: props.grid,
            namesToggle: props.namesToggle
        }               
    }
    render () {
        return (
            <div className={'col canvas-div'}>
                
                {this.state.characters.map((char, i) =>
                        <CanvasCharacterCard  
                            name={char.name}
                            id={'ccc-' + char.id}
                            type={char.type}
                            selected={char.selected}
                            key={'ccc-' + char.id}/>
                )}
            </div>
        );
    }
}