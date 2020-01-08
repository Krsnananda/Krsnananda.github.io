import React from 'react';
import Menu from '../components/menu/Menu';
import './Skills.scss';
import {FaBootstrap, FaReact, FaCss3, FaHtml5, FaSass, FaPhp, FaDatabase, FaNpm, FaGit, FaTerminal, FaJs, FaStar} from 'react-icons/fa';
import { IconContext } from "react-icons";
export default class Skills extends React.Component {
    render(){
        return(
            <div>
                <Menu />
                <IconContext.Provider value={{ className:"skills-icon", size:"4.8em", style:{margin:"1.8em"} }}>
                
                <div class="flex-center-label">
                    <label className="react">React</label>
                    <label className="js">Javascript</label>
                    <label className="bts">Bootstrap</label>
                    <label className="css">CSS3</label>
                    <label className="html5">Html5</label>
                    <label className="sass">Sass</label>
                    <label className="php">PHP</label>
                    <label className="sql">mySQL</label>
                    <label className="npm">Npm</label>
                    <label className="git">Git</label>
                    <label className="terminal">Terminal</label>
                </div>
                <div class="flex-center">
                    <FaReact />
                    <FaJs />
                    <FaBootstrap />
                    <FaCss3 />
                    <FaHtml5 />
                    <FaSass />
                    <FaPhp />
                    <FaDatabase />
                    <FaNpm />
                    <FaGit />
                    <FaTerminal />
                </div>
                </IconContext.Provider>
            </div>
        )
    }
}