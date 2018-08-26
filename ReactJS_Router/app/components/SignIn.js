import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Notification from 'Notification';

class SignIn extends Component {
    handleSubmit(e) {
        e.preventDefault();
        var { dispatch } = this.props;
        var { username, password } = this.refs;
        // if (username.value === 'admin' && password.value === 'admin') {
        //     dispatch({ type: 'LOG_IN', username: username.value })
        // }
        // console.log('Submit');

        axios.post('/signIn', { username: username.value, password: password.value })
            .then(res => {
                if (res.data === 'DANG_NHAP_THANH_CONG') {
                    console.log(res.data);
                    dispatch({ type: 'LOG_IN', username: username.value })
                } else {
                    console.log(res.data);
                    dispatch({ type: 'SHOW_NOTIFICATION', txt: 'Kiem tra lai username va password' });
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        var { notification } = this.props;
        var xhtml = notification != null ? <Notification txt={notification} /> : null;
        return (
            <div>
                <h1 className="text-center page-title">Sign In</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {xhtml}
                    <input type="text" placeholder="Username" ref="username" />
                    <input type="text" placeholder="Password" ref="password" />
                    <button type="submit" className="button expanded">Sign In</button>
                </form>
            </div>
        );
    }
}

export default connect(function (state) {
    return { notification: state.notification }
})(SignIn);