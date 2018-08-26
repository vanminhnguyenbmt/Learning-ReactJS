import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from 'SignIn';
import AccountInfo from 'AccountInfo';

class Account extends Component {
    render() {
        var { username } = this.props;
        var xhtml = username === null ? <SignIn /> : <AccountInfo />
        return (
            <div className="grid-x grid-margin-x">
                <div className="cell small-10 medium-6 large-4 small-centered">
                    {xhtml}
                </div>
            </div>
        );
    }
}

export default connect(function (state) {
    return { username: state.username };
})(Account);