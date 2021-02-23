import React, {useState} from 'react';
import './brob.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Me from './Me';
import Largus from '../Page/lg.png'



const Brob = () => {
// const [current, setCurrent] = useState()



    return ( 
       
        <BrowserRouter>
        <div className="blog__content">
               
               <div className="text__block-blog">
        
                       <h1>РЕМОНТ</h1><h1>БЫТОВОЙ</h1> <h1>ТЕХНИКИ</h1>
                         <p className="text__ctn">
                                   Вам нужна помощь в
                                   ремонте бытовой техники?
                                   Великолепно! Вы нашли нужное место, оставайтесь с
                                   нами, и мы обещаем, что не пожалеете!
                         </p>
                   
               </div> 
               <div className="bl__largus-cnopcka">
                   <img src={Largus} width="320px"></img> 
                   <li>
                      <a href="/meeee" className="header__link size1 posit__ost-zia">Оставить заявку</a>
                   </li>
               </div>
        </div>
     
</BrowserRouter>

    ) 
}


export default Brob;