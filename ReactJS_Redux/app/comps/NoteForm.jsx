import React from 'react';
import { connect } from 'react-redux';
import { toggle, addItem } from 'action';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isAdding: false
        // }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.handleAdd(this.refs.txt.value);
        // this.refs.txt.value = '';
        // this.toggle();
        var { dispatch } = this.props;
        // dispatch({ type: 'ADD_ITEM', item: this.refs.txt.value });
        // dispatch({ type: 'TOGGLE_IS_ADDING' });
        dispatch(addItem(this.refs.txt.value));
        dispatch(toggle());
    }

    toggle() {
        // this.state.isAdding = !this.state.isAdding;
        // this.setState(this.state);
        var { dispatch } = this.props;
        // dispatch({ type: 'TOGGLE_IS_ADDING' });
        dispatch(toggle());
    }

    render() {
        if (this.props.isAdding) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Input here" ref="txt" />
                    <br /><br />
                    <button>Add</button>
                </form>
            );
        }

        return (
            <button onClick={this.toggle.bind(this)}>+</button>
        );
    }
}

export default connect(function (state) {
    return { isAdding: state.isAdding }
})(NoteForm);