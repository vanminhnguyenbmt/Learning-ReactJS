import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from 'action';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.removeNote = this.removeNote.bind(this);
    }

    removeNote() {
        // var { index, handleRemove } = this.props;
        // handleRemove(index);
        var { index, dispatch } = this.props;
        // dispatch({ type: 'REMOVE_ITEM', index });
        dispatch(removeItem(index));
    }

    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.removeNote}>Delete</button>
            </div>
        );
    }
}

export default connect()(Note);