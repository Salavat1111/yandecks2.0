// import React from 'react';
import './mmmenu.css';
import React, { useState } from 'react';

// const MenuItem = ({stbetext, handler}) =>{

//     return (<div>
  

//         </div>);
// }
const MMmenu = ({active, setActive}) => {
    
    return (
        <div className={active ? 'mmmenu active' : 'mmmenu'} onClick={() => setActive(false)}>
              <ul className="menu__ul" id="text__hello">
                <li>
                          <a>Привет</a>
                      </li>    
                      <li>
                          <a>Привет</a>
                      </li>   
                      <li>
                          <a>Привет</a>
                      </li>   
                </ul>
        </div>
    )
}

export default MMmenu;