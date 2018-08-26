class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Khoá học {this.props.children}</p>
        );
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: ["ReactJS", "AngularJS", "VueJS"]
        }
        this.add = this.add.bind(this);
    }

    add() {
        this.state.mang.push("NodeJS", "ReactJS");
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <button onClick={this.add}>Thêm</button>
                {
                    this.state.mang.map(e =>
                        <h1>{e}</h1>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(
    <List />
    , document.getElementById('root')
);