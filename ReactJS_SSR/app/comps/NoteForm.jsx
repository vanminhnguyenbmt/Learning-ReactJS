import React from "react";

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
    }

    add() {
        var v = this.refs.txt.value;
        this.refs.txt.value = '';
        this.props.addNote(v);
    }

    render() {
        return(
            <div>
                <input type="text" ref="txt" placeholder="Input here" />
                <br/><br/>
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}

export default NoteForm;