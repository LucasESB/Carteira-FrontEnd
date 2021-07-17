import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Aside, IconMenu } from './style';
import Nav from '../../nav/index';
import NavItem from '../../navItem/index';
import { navItemData } from './navItemData';

import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

export class Sidebar extends Component {
    state = {
        sidebar: false
    }

    showSidebar = () => this.setState({ sidebar: !this.state.sidebar });

    render() {
        const { sidebar } = this.state;

        return (
            <>
                <IconMenu>
                    <Link to="#" onClick={this.showSidebar}>
                        {sidebar ? <AiOutlineCloseCircle /> : <HiMenu />}
                    </Link>
                </IconMenu>

                <Aside sidebar={sidebar}>
                    <div>
                        <div></div>
                        <strong>Lucas Eduardo</strong>
                    </div>

                    <Nav show={sidebar}>
                        {
                            navItemData.map((item, index) =>
                                <React.Fragment key={index}>
                                    <NavItem id={index} to={item.url} icon={item.icon}>
                                        {item.titulo}
                                    </NavItem>
                                </React.Fragment>
                            )
                        }
                    </Nav>
                </Aside>
            </>
        )
    }
}
