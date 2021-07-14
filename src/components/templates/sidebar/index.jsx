import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Aside, IconMenu } from './style';
import { IconContext } from "react-icons";
import { HiMenu } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
                    </div>

                    <nav>
                        <ul>
                            <li>Home</li>
                        </ul>
                    </nav>
                </Aside>
            </>
        )
    }
}
