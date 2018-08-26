class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={this.props.src} />
                <p>Khoá học {this.props.children}</p>
            </div>
        );
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [
                {srcHinh: "images/3.png", noiDung: "Wasssuppp 3"},
                {srcHinh: "images/4.png", noiDung: "Wasssuppp 4"},
                {srcHinh: "images/5.png", noiDung: "Wasssuppp 5"}
            ]
        }
        this.add = this.add.bind(this);
    }

    add() {
        this.state.mang.unshift({srcHinh: "images/1.png", noiDung: "ReactJS"});
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <button onClick={this.add}>Thêm</button>
                {
                    this.state.mang.map(e =>
                        <Note src={e.srcHinh}>{e.noiDung}</Note>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <List />
    </div>
    , document.getElementById('root')
);