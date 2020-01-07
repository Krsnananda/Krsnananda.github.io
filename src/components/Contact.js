import React from 'react';
import Menu from '../components/menu/Menu';
import './Contact.scss';


export default class Contact extends React.Component {
    render(){
        return(
        <div>   
            <Menu />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="flex-center">
                <a href="https://github.com/Krsnananda" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-github fa-4x icon-3d"></i>
                </a>
                <a href="https://www.linkedin.com/in/krsnananda-nunes/" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-linkedin fa-4x icon-3d"></i>
                </a>
                <a href="https://stackoverflow.com/users/11869599/krsnananda-nunes" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-stack-overflow fa-4x icon-3d"></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5551989162438&text=Ol%C3%A1%2C%20este%20%C3%A9%20o%20meu%20n%C3%BAmero%20ent%C3%A3o%20fique%20a%20vontade%20para%20entrar%20em%20contato%20comigo%20%3A)" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-whatsapp fa-4x icon-3d"></i>
                </a>
                <a href="https://twitter.com/Krsnananda1" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-twitter fa-4x icon-3d"></i>
                </a>
                <a href="mailto:krsnananda@outlook.com" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-envelope fa-4x icon-3d"></i>
                </a>
            </div>
        </div>
        )
    }
}

