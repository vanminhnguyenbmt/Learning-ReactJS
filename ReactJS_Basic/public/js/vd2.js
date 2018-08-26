class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hinh: 1
        }
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next() {
        this.setState({hinh: this.state.hinh == 5 ? 5 : this.state.hinh + 1});
    }

    prev() {
        this.setState({hinh: this.state.hinh == 1 ? 1 : this.state.hinh - 1})
    }

    render() {
        return(
            <div className="div-album">
                <img src={"images/" + this.state.hinh +".png"} style={{width: 150, height: 150}} />
                <hr />
                <button onClick={this.next}>Tiếp theo</button>
                <button onClick={this.prev}>Quay lại</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Album />
    ,document.getElementById('root')
);