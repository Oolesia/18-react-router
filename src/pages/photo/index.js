import React from 'react';
import './style.css';
import nature1 from '../../assets/img/nature-1.jpg';
import nature2 from '../../assets/img/nature-2.jpg';
import nature3 from '../../assets/img/nature-3.jpg';
import nature4 from '../../assets/img/nature-4.jpg';
import nature5 from '../../assets/img/nature-5.jpg';
import nature6 from '../../assets/img/nature-6.jpg';

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