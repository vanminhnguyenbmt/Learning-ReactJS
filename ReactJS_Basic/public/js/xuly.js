function getName(name) {
    alert(name);
}

class MinhNguyen extends React.Component{
    constructor(props){
        super(props);    
        this.state = {
            tongHocVien: this.props.tongHocVien
        }    
        this.addStudent = this.addStudent.bind(this);
    }

    //dùng arrow function thay vì phải this.getByName().bind(this)
    getByName(){
        getName(this.props.sanglap);
    }

    LayThongTin(){
        alert(this.props.children);
    }

    // getInitialState() {
    //     return { tongHocVien: 10};
    // }
    addStudent() {
        this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
        this.setState(this.state); 
    }

    render(){
        return(
            <div>
                <h1 className="mauvang"> {this.props.ten} - {this.props.sanglap} </h1>
                <div>Số học viên: {this.state.tongHocVien}</div>
                <p>{this.props.children}</p>
                <button onClick={() => {var str = this.props.ten + ' ' +this.props.sanglap; getName(str)}}>Thông tin</button>
                <button onClick={this.addStudent}>Thông tin</button>
                <KhoaHoc />
            </div>
        );
    }
}

class KhoaHoc extends React.Component{
    render(){
        return(
            <h3>Lập trình ReactJS</h3>
        );
    }
}

class InputTag extends React.Component{
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
    }

    show() {
        var text = this.refs.sl.value;
        alert(text);
    }

    render(){
        return(
            <div>
                <select ref="sl">
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>
                    <option value="c">CCC</option>
                </select>
                <input type="text" ref="txt" />
                <button onClick={this.show}>Hiển thị</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <InputTag />
        <MinhNguyen ten="ReactJS" sanglap="Facebook" tongHocVien="10">Khoá học ReactJS</MinhNguyen>
        <MinhNguyen ten="AngularJS" sanglap="Google" tongHocVien="20">Khoá học AngularJS</MinhNguyen>
    </div>
    , document.getElementById("root"));

// ReactDOM.render(
//     <div>
//         <h1 className="mauvang"> React Native </h1>
//         <h1 className="mauvang"> React JS </h1>
//     </div>
//     , document.getElementById("root2"));