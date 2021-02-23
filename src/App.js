import './fco.css';
import React, { useState } from 'react'
import Menu from './tt/Menu';
import Brob from './tt/Brob';
import MMmenu from './tt/MMmenu';
// import Mous from './tt/Mous';
import Self from './Self';
import Me from './tt/Me';
import Logos from './icons/logosss.png';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import SSSlider from './components/SSSlider';



 

 
const App = (props) => {
  // const [isHovering, setIsHovering] = useState(false)
  const [mmmenuActive, setMmmenuActive] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  const items = [{value: 'Пользователя', href: './users', icon: "keyboard_arrow_down"}, {value: 'Парнерам', href: './partners', }, {value: 'О нас', href: './main', }, ]
  
// function handleMouseEnter(){
//     setIsHovering(true);
//  }
//  function handleMouseLeave() {
//    setIsHovering(false);
//  }



  return (     
    <BrowserRouter>
        <div className="R">
                <div className="wrapper">
                    <header className="header">
                        <div className="container_box">
                              <div className="header__body">
                                    {/* <div className="logo__text"> */}
                                    <div className="logo__page">
                                      {/* <p>Ремонт.ru</p> */}
                                      <img src={Logos}></img>
                                      </div>
                                        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                                            <span />
                                        </div>
{/* <div className="header__burger"><span className=""></span></div> */}
                                            <nav className="header__menu">
                                              <ul className="header__list">
                                             
                                                  {/* <li  onClick={() => setMmmenuActive(!mmmenuActive)}>
                                                  <a className="header__link size1 menu__link">еля</a>
                                                  </li> */}
                                                  
                                                  <li>
                                                    <NavLink to="/" className="header__link size1 menu__link">Пользователя</NavLink>
                                                          <ul className="sub-menu__list">
                                                            <div className="bg_with">
                                                            <li><a className="sub-menu__link" href="#">Новости</a></li>
                                                            
                                                            </div>
			                                                    </ul>
                                                  </li>
                                                  {/* </li> */}
                                         
                                                  <ul className="menu__mouse">
                                                     <NavLink to="/partners" className="header__link size1">Партнёрам</NavLink>
                                                  </ul>
                                                  <li>
                                                    <NavLink to="/slaybar" className="header__link size1">О нас</NavLink>
                                                  </li>
                                                
                                                  <li>
                                                    {/* <NavLink to="/"  className="header__link size1">Войти</NavLink> */}
                                                    {/* <Mous /> */}
                                                  </li>
                                              </ul>
                                            </nav>
     <MMmenu active={mmmenuActive} setActive={setMmmenuActive} />
     <Menu active={menuActive} setActive={setMenuActive} items={items} />{/* header={"Бургер меню"} */}
                              </div>
                          </div> 
                          
                    </header>
          {/*------------------------контент часть---------------------------*/}
                
                    <div className="content">
                        <div className="container">
                        <div className="content__text">

                  
                  
                           <Route exact path="/" component={Brob}/>
                           <Route exact path="/partners" component={Self}/>
                           <Route exact path="/slaybar" component={SSSlider}/>
                           <Route exact path="/meeee" component={Me}/>
                           {/* <Route exact path="/me" component={ImageSlider (slider={SliderData})}/> */}
                            {/* <Brob /> */}
                            {/* <Self /> */}
                           
                        </div>
                        </div>  
                    </div>
                 
          {/*------------------------контент часть---------------------------*/}
            <div className="footer__item">
                <div className="footer__block">
                  <div className="footer__item-block">
                      <div className="pd__left">
                                <p>Обратная связь</p>
                                <div className="footer__img mn__margin">
                                    <img className="img__bg" src=""></img>
                                    <p>777ort@gmail.com</p>
                                </div>
                                <div className="footer__img mn__margin">
                                    <img className="img__bg" src=""></img>
                                    <p>vk.ort-mir</p>
                                </div>
                                <div className="footer__img mn__margin">
                                    <img className="img__bg" src=""></img>
                                    <p>+7 903 333 55 45</p>
                                </div>
                      </div>
                    <div className="pd__rigth">
                        <div className="footer__img">
                              <ul className="footer__ul">
                                  <li className="mn__margin">
                                    <a href="#" className="footer__menu-text">Парнерам</a>
                                  </li>
                                  <li className="mn__margin">
                                    <a href="#" className="footer__menu-text">О нас</a>
                                  </li>
                              </ul>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
      </div>
   </div>
  </BrowserRouter>
    );
}

export default App;

