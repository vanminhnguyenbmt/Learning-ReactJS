class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onEdit: false
        }

        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    delete() {
        $.post("/delete", { idXoa: this.props.id }, function (data) {
            list.setState({ mang: data });
        });
    }

    edit() {
        this.setState({ onEdit: true });
    }

    save() {
        var note = this;
        $.post('/update', { idSua: this.props.id, noiDung: this.refs.txt.value }, function (data) {
            list.setState({ mang: data });
            note.setState({ onEdit: false });
        });
    }

    cancel() {
        this.setState({ onEdit: false });
    }

    render() {
        if (this.state.onEdit) {
            return (
                <div className="div-note">
                    <input defaultValue={this.props.children} ref="txt" />
                    <button onClick={this.save}>Lưu</button>
                    <button onClick={this.cancel}>Huỷ</button>
                </div>
            );
        } else {
            return (
                <div className="div-note">
                    <p>{this.props.children}</p>
                    <button onClick={this.delete}>Xoá</button>
                    <button onClick={this.edit}>Sửa</button>
                </div>
            );
        }
    }
}

function addDiv() {
    ReactDOM.render(<InputDiv />, document.getElementById('div-add'));
}

var list;

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: []
        }
        list = this;
    }

    render() {
        return (
            <div className="div-list">
                <div id="div-add"></div>
                <button onClick={addDiv}>Thêm</button>
                {
                    this.state.mang.map((e, index) => (
                        <Note id={index}>{e}</Note>
                    ))
                }
            </div>
        );
    }

    componentDidMount() {
        var that = this;
        $.post("/getNotes", function (data) {
            that.setState({ mang: data })
        });
    }
}

class InputDiv extends React.Component {
    constructor(props) {
        super(props);
        this.send = this.send.bind(this);
    }

    send() {
        // list.setState({ mang: list.state.mang.concat(this.refs.txt.value) });
        $.post("/add", { note: this.refs.txt.value }, function (data) {
            list.setState({ mang: data })
        });
        ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));
    }

    render() {
        return (
            <div>
                <input type="text" ref="txt" placeholder="Enter your note!" />
                <button onClick={this.send}>Gửi</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <List />
    </div>
    , document.getElementById('root')
);