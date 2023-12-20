import React from 'react';
import { NavLink } from 'react-router-dom';
import {  FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({children}) => {

    const menuItem = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <FaTh />
        },
        {
            path: '/about',
            name: 'About',
            icon: <FaUserAlt />
        },
        {
            path: '/analytics',
            name: 'Analytics',
            icon: <FaRegChartBar />
        },
        {
            path: '/comment',
            name: 'Comment',
            icon: <FaCommentAlt />
        }
    ];

   

    return (
        <div className="container-fluid">
            <div className="row">
                <div className={`col-md-2 bg-dark `}>
                    <div className="top_section">
                        <h1 className="logo">Logo</h1>
                        
                    </div>
                    <div className="sidebar-content">
                        {menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                <div className="icon">{item.icon}</div>
                                <div className={`link_text `}>{item.name}</div>
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="col">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;










