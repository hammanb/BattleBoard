        
import React, { Component } from 'react';

import { Canvas } from './canvas/canvas.js';
import { Footer } from './footer.js';
import { TimelineCharacterCard } from './timeline/timelinecharactercard.js';
import { InitiativeButton } from './timeline/timelineinitiativebutton.js';

export class BodyWrapper extends Component {
    constructor (props) {
        super(props);
        //state holds the characters and set pieces, and their locations.
        this.state = {
            //selected is the index of 'characters', starting at 0
            selected: -1,
            characters: [
                /* Test Objects 
                
                { name: 'Jimbo', type: 'Friend', id: 1, index: 0, selected: false},
                { name: 'Clarence William Jefferson', type: 'Enemy', id: 2, index: 1, selected: true},
                { name: 'HotBoi', type: 'Other', id: 3, index: 2, selected: false},
                { name: 'Jusslippin', type: 'Player', id: 4, index: 3, selected: false} */
            ],
            setPieces: [],
            background: 'something - url probably',
            grid: [1, 1],
            namesToggle: true
        };

        this.newCharacterList = this.newCharacterList.bind(this);
        this.updateCharacter = this.updateCharacter.bind(this);
        this.advanceSelected = this.advanceSelected.bind(this);
    }

    advanceSelected () {
        //each click advance the initiative. 
        if (this.state.characters.length === 0) { return; }
        let sel = this.state.selected;
        sel = sel === this.state.characters.length - 1 ? sel = 0 : ++sel;
        this.setState({selected: sel});
        //set all to false
        this.setState((prevState) => {return prevState.characters.forEach((e) => {e.selected = false;});});
        //set the correct one to selected
        this.setState((prevState) => {return prevState.characters[sel].selected = true;});
    }

    newCharacterList () {
        //when a new character is created in the timeline.
        const arr = this.state.characters;
        this.setState((prevState, props) => {
            let key = Date.now() + Math.random();
            let i = this.state.characters.length;
            let newCharacter = { name: 'Enter Name', type: 'none', id: key, index: i, selected: false};
            return arr.push(newCharacter);
        });
    }

    updateCharacter (update, type) {
        if (type === 'edit') { 
            //this replaces the same item in the array with the new data
            let element = this.state.characters[update.index];
            element.name = update.name;
            element.type = update.type;
            this.setState((prevState, props) => {
                //this removes item, and updates with the above
                return this.state.characters.splice(update.index, 1, element);
            });
            return;
        }
        else if (type === 'left' || type === 'right') { 
            //this moves the item left in the array
            let oldIndex = update.index;
            let newIndex = update.index;
            if (type === 'left') {
                //preps the index's to switch left
                newIndex--;
                //control for going too far
                if (newIndex < 0) {newIndex = 0;} 
            } else if (type === 'right') {
                //preps the index's to switch right
                newIndex++;
                //control for going too far
                if (newIndex > this.state.characters.length) {newIndex = this.state.characters.length - 1}
            } else {
                alert('something broke.');
            }
            //queue the state updates, as it messes up doing them in a single update.
            this.setState(() => {
                //this setstate is to switch the items within the array
                let arr = this.state.characters.splice(newIndex, 0, this.state.characters.splice(oldIndex, 1)[0])
                return arr;
            }); 
        } 
        else if (type === 'remove') {
            //this removes an item from the array
            //queue the state updates, as it messes up doing them in a single update.
            
            this.setState(() => {
                //this setstate is to remove the item
                let arr = this.state.characters.splice(update.index, 1);
                return arr;
                }); 
            this.setState((prevState) => {
                //this deals with the currently selected item change when the index changes.
                let i = update.index;
                if (this.state.selected === i && i > 0) {
                    return {selected: --i};
                } else if (i < this.state.selected) {
                    let sel = prevState.selected;
                    return {selected: --sel};
                }
                });
        }
        else {
            return;
        }
        this.setState((prevState) => {
            //updates the "index" prop sent to each component. apparently it needs to run off a prop set by state instead of just the index of the item. 
            let arr = prevState.characters.forEach((e, i) => {
                e.index = i;
            });
            return arr;
        });
    }
    render () {
        console.log('Rendering new state:');
        console.log(this.state);
        return (
            <div id='body-div' className={'container-fluid'}>
                <div className={'TimelineWrapper row'}>
                    <div className={'col d-flex align-items-center InitiativeDiv'}>
                        <InitiativeButton onClick={this.advanceSelected} />
                    </div>
                    <div className={'col container'}>
                        <div className={'d-flex flex-row align-items-start flex-wrap'}>
                            {this.state.characters.map((char, i) =>
                                <TimelineCharacterCard  
                                char={char} 
                                index={i}
                                charID={char.id} 
                                updateCharacter={this.updateCharacter}
                                key={'tcc-' + char.id}/>
                            )}
                            <div onClick={this.newCharacterList} className={'NewCharacter col-1'}>New Character</div>
                        </div>
                    </div>
                </div>
                <div id='canvas-wrapper' className={'row'}>
                    <Canvas 
                        characters={this.state.characters} 
                        setPieces={this.state.setPieces}
                        background={this.state.background}
                        grid={this.state.grid}
                        namesToggle={this.state.namesToggle} />
                </div>
                <Footer />
            </div>     
        );
    }
}

   