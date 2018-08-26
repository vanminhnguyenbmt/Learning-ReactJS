import React from "react";
import Note from "./Note.jsx";
import NoteForm from "./NoteForm.jsx";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: ["Android", "IOS", "NodeJS"]
        }
        this.del = this.del.bind(this);
        this.add = this.add.bind(this);
    }

    del(index) {
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }

    add(text) {
        this.state.mang.push(text);
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <NoteForm addNote={this.add} />
                {
                    this.state.mang.map((e, i) => {
                        return <Note key={i} remove={this.del} index={i}>{e}</Note>
                    })
                }
            </div>
        );
    }
}

export default List;