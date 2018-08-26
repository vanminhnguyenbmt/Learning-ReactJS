import React from "react";

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.del = this.del.bind(this);
    }

    del() {
        this.props.remove(this.props.index);
    }

    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <button onClick={this.del}>Delete</button>
            </div>
        );
    }
}

export default Note;
