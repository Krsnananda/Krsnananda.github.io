import React from 'react';
import './Menu.scss';

export default class Menu extends React.Component {

    render() {
        return (
            <nav>
                <ul class="menu">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">About me</a></li>
                    <li><a href="#!">Skills</a></li>
                    <li><a href="#!">Projects</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
            </nav>
        )
    }
}