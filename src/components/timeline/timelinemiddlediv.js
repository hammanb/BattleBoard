import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class TimelineMiddleDiv extends Component {

    constructor (props) {
        super(props);
        this.handleFocusToggle = this.handleFocusToggle.bind(this);
        this.handleFocusToggleBlur = this.handleFocusToggleBlur.bind(this);
        this.handlePlaceholderStyle = this.handlePlaceholderStyle.bind(this);
    }

    handleFocusToggle (e) {
        let name = ReactDOM.findDOMNode(e.target).innerHTML;
        if (name === 'Enter Name') {
            const doc = document.getElementById('input-card-name-' + this.props.stateObj.id);
            doc.innerHTML = '';
            doc.style.color = '#000';
        }
    }
    handleFocusToggleBlur (e) {
        let name = ReactDOM.findDOMNode(e.target).innerHTML;
        if (name === '') {
            const doc = document.getElementById('input-card-name-' + this.props.stateObj.id);
            doc.innerHTML = 'Enter Name';
            doc.style.color = '#888';
        } else {
            this.props.onChangeUpdate(e);
        }
    }
    handlePlaceholderStyle () {
        const name = this.props.stateObj.name;
        if (name === 'Enter Name') {
            return '#888';
        } else {
            return '#000';
        }
    }


    render () {
        let colorStyle = this.handlePlaceholderStyle();
        let i = this.props.stateObj.id;
        return (
            <div className={'MiddleDiv row d-flex flex-column'}>
                <div className={'Name'}>
                    <div 
                    style={{color: colorStyle}}
                    id={'input-card-name-' + i} 
                    suppressContentEditableWarning
                    contentEditable={'true'}
                    onFocus={this.handleFocusToggle}
                    onBlur={this.handleFocusToggleBlur}>
                        {this.props.stateObj.name}
                    </div>
                </div>
                    <div className={'Select'}>
                        <select 
                            id={'select-card-type-' + i} 
                            name={i}
                            className={'form-control'}
                            onChange={this.props.onChangeUpdate} 
                            defaultValue={this.props.stateObj.type}>
                                <option value='none'>Type</option>
                                <option value='Player'>Player</option>
                                <option value='Friend'>Friend</option>
                                <option value='Enemy'>Enemy</option>
                                <option value='Other'>Other</option>
                        </select>
                    </div>
            </div> 
        );
    }
}