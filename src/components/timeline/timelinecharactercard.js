import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineMiddleDiv } from './timelinemiddlediv.js';
import { TimelineButton } from './timelinebuttons.js';
import ReactDOM from 'react-dom';

const CharacterDiv = styled.div`
    background-color: ${ props => props.selected ? '#f0f7e0' : '#fff' };
`;
export class TimelineCharacterCard extends Component {

    constructor (props) {
        super();
        this.state = {
            index: props.index,
            name: props.char.name,
            type: props.char.type,
            selected: props.char.selected,
            id: props.charID
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        //these are the only updated props to come from the parent.
        this.setState({
            index: nextProps.index,
            selected: nextProps.char.selected
        });  
      }

    handleRemove() {
        //removes a card from the track
        this.props.updateCharacter(this.state, 'remove');
    }
    handleMove (e) {
        //move the cards left and right - calls updateCharacter from parent
        const id = e.target.id;
        if (id.includes('left')) {
            this.props.updateCharacter(this.state, 'left');
        } else if (id.includes('right')) {
            this.props.updateCharacter(this.state, 'right');
        } else {
            console.log('not passing anything');
        }
    }
    handleChange (e) {
        //when changing the value of the form inputs, capture that in state
        const html = ReactDOM.findDOMNode(e.target).innerHTML;
        const val = e.target.value;
        const id = e.target.id;
        this.setState((prevState) => {
            if (id.includes('name')) {return {name: html};}
            else if (id.includes('type')) {return {type: val};}
        }, () => this.props.updateCharacter(this.state, 'edit'));
    }
    handleHiddenToggle () {
        //switch from the titles to the form fields whenever this is called within this scope
        let div = '#char-card-div-' + this.state.id;
        const hidden = document.querySelectorAll(div + ' .hidden-toggle-hidden');
        const visible = document.querySelectorAll(div + ' .hidden-toggle:not(.hidden-toggle-hidden)');

        hidden.forEach((e) => {
            e.classList.remove('hidden-toggle-hidden');
        });
        visible.forEach((e) => {
            e.classList.add('hidden-toggle-hidden');
        });
    }
    render () {
        let i = this.state.id;
        return (
            <CharacterDiv className={'CharacterDiv'} selected={this.state.selected} id={'char-card-div-' + i}>
                <TimelineMiddleDiv 
                    stateObj={this.state} 
                    onChangeUpdate={this.handleChange} 
                    onClickToggle={this.handleHiddenToggle} 
                    onClickRemove={this.handleRemove} />
                <div className={'row bottom-character-row'}>
                    <TimelineButton className={'col'} direction={'left'} charID={i} onClick={this.handleMove} />
                        <div className={'remove col d-flex justify-content-center'}><h5 onClick={this.handleRemove}>remove</h5></div> 
                    <TimelineButton className={'col'} direction={'right'} charID={i} onClick={this.handleMove} />   
                </div>
            </CharacterDiv> 
            //<i className={"fa fa-times"}></i>
        );
    }
}




