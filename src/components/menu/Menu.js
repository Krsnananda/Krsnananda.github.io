import React from 'react';
import './Menu.scss';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {

    render() {
        return (
            <nav>
                <ul class="menu">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">About me</a></li>
                    <li><a href="#!">Skills</a></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}