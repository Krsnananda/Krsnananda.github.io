import React, {Component} from 'react';
import './App.scss';
import Popup from './Popup';

export default class App extends Component {
  constructor(props){  
    super(props);  
    this.state = { showPopup: false };  
    }  
    
      togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  
    });  
     }  
    
render() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <ul class="menu">
          <li><a href="#!">About me</a></li>
          <li><a href="#!">Skills</a></li>
          <li><a href="#!">Experience</a></li>
          <li><a href="#!">Contact</a></li>
        </ul>
      </nav>
      </header>
      <div>  
        <h1> Simple Popup Example In React Application </h1>  
        <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>  
        <Popup  
          text='Click "Close Button" to hide popup'  
          closePopup={this.togglePopup.bind(this)}  
          />  
      </div>
    </div>
  );
}
}

