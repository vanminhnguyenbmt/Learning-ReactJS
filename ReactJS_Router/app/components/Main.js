import React, { Component } from 'react';
import Nav from 'Nav';
import HomePage from './HomePage';
import axios from 'axios';
import { connect } from 'react-redux';

class Main extends Component {
    render() {
        return (
            /* <h1>This is Main</h1> */
            <Nav />
            /* <HomePage /> */ 
        );
    }

    componentDidMount() {
        var { dispatch } = this.props;
        axios.get('/getInfo')
            .then(res => {
                if (res.data != 'CHUA_DANG_NHAP') {
                    dispatch({ type: 'LOG_IN', username: res.data });
                }
            })
            .catch(err => console.log('LOI'))
    }
}

export default connect()(Main);