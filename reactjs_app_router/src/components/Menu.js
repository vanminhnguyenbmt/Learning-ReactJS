import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Giới thiệu',
        to: '/about',
        exact: false
    },
    {
        name: 'Liên hệ',
        to: '/contact',
        exact: false
    },
    {
        name: 'Sản phẩm',
        to: '/products',
        exact: false
    },
    {
        name: 'Đăng nhập',
        to: '/login',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active abc' : '';
            return (
                <li className={`my-li ${active}`}>
                    <Link to={to} className="my-link">{label}</Link>
                </li>
            )
        }} />
    )
}


class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {/* <li> */}
                    {/* <Link exact to="/" className="my-link">Trang chủ</Link> */}
                    {/* <NavLink exact to="/" className="my-link" activeClassName="active">Trang chủ</NavLink> */}
                    {/* <MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true} /> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/* <Link to="/about" className="my-link">Giới thiệu</Link> */}
                    {/* <NavLink to="/about" className="my-link" activeClassName="active">Giới thiệu</NavLink> */}
                    {/* <MenuLink label="Giới thiệu" to="/about" activeOnlyWhenExact={false} /> */}
                    {/* </li> */}
                    {/* <li> */}
                    {/* <Link to="/contact" className="my-link">Liên hệ</Link> */}
                    {/* <NavLink to="/contact" className="my-link" activeClassName="active">Liên hệ</NavLink> */}
                    {/* <MenuLink label="Liên hệ" to="/contact" activeOnlyWhenExact={false} /> */}
                    {/* </li> */}
                    { this.showMenus(menus) }
                </ul>
            </nav>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
}

export default Menu;
