import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AccountInfo extends Component {
    logOut(e) {
        e.preventDefault();
        var { dispatch } = this.props;   
        axios.get('/logout')
        .then(res => {
            console.log(res.data);
            dispatch({ type: 'LOG_OUT' });
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>This is Account</h1>
                <p>UserName: {this.props.username}</p>
                <a href="#" onClick={this.logOut.bind(this)}>Log out</a>
            </div>
        );
    }
}

export default connect(function (state) {
    return { username: state.username };
})(AccountInfo);