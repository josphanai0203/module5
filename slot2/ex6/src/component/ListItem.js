import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>
                {this.props.text}
                <button onClick={()=>this.props.handleDelete(this.props.index)}>X</button>
            </span>
        );
    }
}

export default ListItem;