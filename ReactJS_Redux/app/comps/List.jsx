import React from 'react';
import Note from 'Note';
import NoteForm from 'NoteForm';
import {connect} from 'react-redux';

class List extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     mang: ['Android', 'IOS', 'NodeJS']
        // }
        // this.remove = this.remove.bind(this);
        // this.addNote = this.addNote.bind(this);
    }

    // remove(index) {
    //     this.state.mang.splice(index, 1);
    //     this.setState(this.state);
    // }

    // addNote(note) {
    //     this.state.mang.push(note);
    //     this.setState(this.state);
    // }

    render() {
        return (
            <div>
                <NoteForm />
                {this.props.mang.map((e, i) => <Note index={i} key={i}>{e}</Note>)}
            </div>
        );
    }
}

export default connect(function (state) {
    return {mang: state.mang}
})(List);