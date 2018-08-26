class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hocVien: 10
        }
        this.themHocVien = this.themHocVien.bind(this);
    }

    themHocVien() {
        this.setState({ hocVien: this.state.hocVien + 1 })
    }
    render() {
        return (
            <div>
                <p>{this.props.txt}</p>
                <br />
                <p>So hoc vien: {this.state.hocVien}</p>
                <button onClick={this.themHocVien}>Them hoc vien</button>
            </div>
        );
    }
}

Note.defaultProps = {
    txt: 'ReactJS ES6'
}

ReactDOM.render(
    <div>
        <Note />
        <Note txt="NodeJS" />
    </div>
    , document.getElementById('root')
);
