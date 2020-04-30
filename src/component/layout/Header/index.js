import React, {Component} from 'react';
import { Link  } from "react-router-dom";
import './style.css'


export default class Header extends Component{
    render(){
        return(
        <header>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/18-react-router">Home</Link>
            </li>
            <li>
              <Link to="/18-react-router/posts">Posts</Link>
            </li>
            <li>
              <Link to="/18-react-router/photo">Photo</Link>
            </li>
            <li>
              <Link to="/18-react-router/contacts-book">Contacts book</Link>
            </li>
          </ul>
        </nav>
      </div>
     </header>
        )
    }
}

