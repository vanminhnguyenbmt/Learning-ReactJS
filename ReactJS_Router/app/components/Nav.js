import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">Site Title</li>
                        <li>
                            <a href="#">One</a>
                            <ul className="menu vertical">
                                <li><a href="#">One</a></li>
                                <li><a href="#">Two</a></li>
                                <li><a href="#">Three</a></li>
                            </ul>
                        </li>
                        <li><NavLink exact to="/" activeClassName="active">Homepage</NavLink></li>
                        <li><NavLink to="/account" activeClassName="active">Account</NavLink></li>
                        <li><NavLink to="/transaction" activeClassName="active">Transaction</NavLink></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><input type="search" placeholder="Search" />></li>
                        <li><button type="button" className="button">Search</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}