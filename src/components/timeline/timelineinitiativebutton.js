import React, { Component } from 'react';

export class InitiativeButton extends Component {
    render () {
        return (
            <i onClick={this.props.onClick} className="fa fa-chevron-circle-right InitiativeButtonDiv"></i>
        );
    }
}