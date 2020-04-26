import React from 'react';
import './style.css';
import nature1 from './nature-1.jpg';
import nature2 from './nature-2.jpg';
import nature3 from './nature-3.jpg';
import nature4 from './nature-4.jpg';
import nature5 from './nature-5.jpg';
import nature6 from './nature-6.jpg';

export default () => {
    return(
        <div className='photo-page'>
        <h4>"Будь собою, інші ролі зайняті"</h4>
        <div className='photo-container'>
            <img src={nature1}></img>
            <img src={nature2}></img>
            <img src={nature3}></img>
            <img src={nature4}></img>
            <img src={nature5}></img>
            <img src={nature6}></img>
        </div>
        </div>

    )

}