import React from 'react';
import Menu from '../components/menu/Menu';
import './Skills.scss';

export default class Skills extends React.Component {
    render(){
        return(
            <div>
                <Menu />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div class="flex-center">
                    <i class="fab fa-react fa-4x icon"></i>
                </div>
            </div>
        )
    }
}