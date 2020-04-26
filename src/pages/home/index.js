import React from 'react';
import photo from './hydrangea.jpg';
import './style.css';

export default () => {
    return(
        <div className='home-container'>
            <h4>"Почніть робити те, що потрібно. Потім робіть те, що можливо. І ви раптом виявите, що робите неможливе"</h4>
            <img src={photo}></img>
        </div>
    )

}