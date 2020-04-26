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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/photo">Photo</Link>
            </li>
            <li>
              <Link to="/contacts-book">Contacts book</Link>
            </li>
          </ul>
        </nav>
      </div>
     </header>
        )
    }
}

