// import React from 'react';
import './menu.css';
import MMmenu from './MMmenu';
import React, { useState } from 'react';

const MenuItem = ({stbetext, handler}) =>{
    return (<div>
        <li>
           {/* <input type="button" onClick={handler} value={stbetext} />  */}
        {/* <a href={items.href}>{items.value}</a> */}
        {/* <i class="material-icons">adb</i> */}
        {/* <img href={item.src}>{item.value}</img> */}
         {/*  <span class="material-icons material__color">{items.icon}</span> */}
    </li>    

        </div>);
}
const Menu = ({header, items, active, setActive}) => {
    const [mmmenuActive, setMmmenuActive] = useState(false)
    //    function hi() {
//        console.log('Salavat');
//    }
    return (
        // onClick={() => setActive(false)}
        <div className={active ? 'menu active' : 'menu'} >
            {/* <div className="blur" /> */}
            {/* <div className="menu__content">
                <div className="menu__header">{header}</div> */}
                <div>
                 <ul>
                   <li className="text__color-menu">
                       <p>АВТОРИЗОВАННЫЙ СЕРВИСНЫЙ ЦЕНТР</p>
                   </li>
               </ul>
               </div>  
                <ul className="menu__ul" >
                                                  <li  onClick={() => setMmmenuActive(!mmmenuActive)}>
                                                  <a className="header__link size1 menu__link">еля</a>
                                                  </li>
                    {items.map(items =>
                    
                      <li>
                        
                                                 
                          <a href={items.href}>{items.value}</a>
                          {/* <i class="material-icons">adb</i> */}
                          {/* <img href={item.src}>{item.value}</img> */}
                          <span class="material-icons material__color">{items.icon}</span>
                      </li>    
                      
                    )}
                {/* <MenuItem stbetext={'TEST TEXT'} handler={hi}></MenuItem> */}
                </ul>
                <MMmenu active={mmmenuActive} setActive={setMmmenuActive} />
            {/* </div> */}
           
        </div>
    )
}

export default Menu;