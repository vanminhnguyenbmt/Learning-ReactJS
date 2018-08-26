class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hinh: 1
        }
        this.changeImage = this.changeImage.bind(this);
    }

    changeImage() {
        this.setState({hinh: (this.state.hinh % 5) + 1})
    }

    render() {
        return(
            <img src={"images/" + this.state.hinh +".png"} />
        );
    }

    componentDidMount() {
        setInterval(this.changeImage, 1000);
    }
}

ReactDOM.render(
    <Image />
    ,document.getElementById('root')
);