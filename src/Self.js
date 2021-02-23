// import React from 'react';
import React, { useState } from 'react'
import './self.css';
import Logo from './icons/iconfinder_ic_keyboard_arrow_down_48px_352466.png';

// class Toggle extends React.Component {
//     state = {
//       show: true,
//     }
  
//       toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  
//     render() {
//       return (
//         <div>
//                 <button onClick={this.toggle}>toggle: {this.state.show ? 'show' : 'hide'}</button>    
//           {this.state.show && <div>Hi there</div>}
//             </div>
//        );
//     }
//   }




// const  = () => {
class Self extends React.Component {
        state = {
          show: false,
          www: false,
          qqq: false,
          aaa: false,
        }

      
          toggleWww = () => this.setState((currentState) => ({show: false, qqq:  false, aaa: false, www: !currentState.www}));
          toggle = () => this.setState((currentState) => ({ qqq:  false, aaa: false, www: false, show: !currentState.show}));
          toggleQqq = () => this.setState((currentState) => ({show: false, aaa: false, www: false, qqq: !currentState.qqq}));
          toggleAaa = () => this.setState((currentState) => ({show: false, qqq:  false,  www: false, aaa: !currentState.aaa}));
          render() {    
    return (
<div>
        <div className="font__with">
          <div className="post">
               
          </div>
          <div className="post__text">
              <h1>Как стать техником?</h1>
              <div className="one__text">
                  <div className="crug">
                  <p>1</p>
                  </div>
                  <p>Оставить заявку</p>
                
              </div>
              <div className="two__text">
              <div className="crug">
                  <p>2</p>
                  </div>
                  <p>Мы позвоним Вам, для уточнение деталей</p>
              </div>
              <div className="button__color1 header__lisss">
              <a href="#" className="buttom-r">Получить консультацию</a>
              </div>
          </div>
          
        </div>
        <div className="tract">
            <div className="qqq">
                    <div className="ost__h1">
                        <h1>Ответы на вопросы</h1>
                    </div>
                    <div className="mn__a__rrr">
                            <ul>
                                <div >
                                    <div className="li__arrye">
                                        <li>Каким может быть  доход техника?</li> 
                                        <img className="logo__img" src={Logo} onClick={this.toggle}></img>
                                    </div>
                                        <div>
          {this.state.show && 
          <div className="text__wfff">
                                        Финальный заработок техника зависит от региона и от графика работы. 
                                        С приложением Твой-Техник можно как подрабатывать всего несколько часов в неделю, так и выполнять заказы каждый день. 
                                        
          </div>
          }
                                        </div>


                                </div>
                                        <div className="hr__width"></div>
                                <div >
                                    <div className="li__arrye">
                                        <li>Условия работы?</li>
                                        <img className="logo__img" src={Logo} onClick={this.toggleWww}></img>
                                    </div>

                                    <div>
          {this.state.www && 
          <div className="text__wfff">
                                        Можно подрабатывать или провести целый рабочий день — решать вам.
          </div>
          }
                                        </div>
                                </div>
                                <div className="hr__width"></div>
                                <div >
                                    <div className="li__arrye">
                                        <li>Как я буду получать заказы?</li>
                                        <img className="logo__img" src={Logo} onClick={this.toggleQqq}></img>
                                    </div>

                                    <div>
          {this.state.qqq && 
          <div className="text__wfff">
                                       Начать работу техником с приложением Твой-Техник очень просто. 
                                       Зайдите в брайзуер на телефоне и зайдите на сайт Твой-Техник. 
                                       Оно будет предлагать вам заказы и держать в курсе всех новостей сервиса. 
                                       Вам не придётся искать себе клиентов — можно сосредоточиться на заказах.
          </div>
          }
                                        </div>

                                </div>
                                <div className="hr__width"></div>
                                <div >
                                    <div className="li__arrye">
                                        <li>Если нет опыта, можно у Вас работать?</li>
                                        <img className="logo__img" src={Logo} onClick={this.toggleAaa}></img>
                                    </div>

                                    <div>
          {this.state.aaa && 
          <div className="text__wfff">
                                        Выполнять заказы Твой-Техник могут техники старше 21 года, 
                                        со стажем от трёх лет.
                                        Новичкам мы расскажем обо всех особенностях и стандартах качества нашего сервиса. 
                                        Во всём остальном поможет приложение Твой-Техник: найдёт заказ по вашим критериям.
          </div>
          }
                                        </div>

                                </div>
                                <div className="hr__width"></div>
                            </ul>
                    
                    </div>
              </div>
        </div>
        <div className="teee">
                        <div className="ost__h1"><h1>Оставить заявку</h1></div>
                        <div className="form__oup">
                            <div className="fml"><label className="">Ф.И.О</label></div>
                            <input className="input__fm" placeholder=" "></input>
                        </div>
                        <div className="form__oup">
                            <div className="fml"><label className="">Номер телефона</label></div>
                            <input className="input__fm" placeholder=" "></input>
                            <button className="button__col header__liddd">Отправить</button>
                        </div>
                        
        </div>
        
</div>
        
    )
}
}
export default Self;