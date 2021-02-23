import React from 'react';
import './me.css';



const Me = () => {
    return (
       
        <div className="">
             
          {/* <div className="post"> */}
          <div className="bd">
              
                <div className="bg__ts1">
                     {/* =======================  */}
                     <div className="info__red">
                            <p className="info__text"> Составте заявку и мы перезвоним в течение <font color="red">5 минут</font>
                            </p>
                        </div>
                     <div className="buttom__title1">
      
                       
        <div className="block-1__item">
                        <div className="form__group">
                            <input className="form__input" placeholder=" "></input>
                            <label className="form__label">Имя</label>
                        </div>
                        {/* <div className="form__group">
                            <input className="form__input" placeholder=" "></input>
                            <label className="form__label">Фамилия</label>
                        </div> */}
                        <div className="form__group">
                            <input className="form__input" placeholder=" "></input>
                            <label className="form__label">+7(___)___-__-__</label>
                        </div>
                        <div className="form__group">
                                        <div className="body">
                                                                    <div className="tooltip tooltip__right">
                                                                    <div className="tooltip__element">?</div>
                                                                    <div className="tooltip__info">
                                                                    <h2></h2>
                                                                
                                                                    <p>выбирите технику из списка</p>
                                                                    </div>
                                                                    </div>
                                        </div>
                            <input className="form__input" placeholder=" "></input>
                            
                            <select name="" required
                            className="menu__id1">
                                <option value="">Выбрать технику</option>
                                <option value="">холодильник</option>
                                <option value="">стиральная машинка</option>
                                <option value="">плит система</option>
                                <option value="">духовой шкаф</option>
                                <option value="">микровалновая печь</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <input className="form__input" placeholder=" "></input>
                            <label className="form__label">Адрес</label>
                        </div>
        </div>
    <div className="block-2__item">
                        




                        <div>
{/*---------------------------------------------------------------------------------------------------------*/}

                                <form method="get">
                                <fieldset> 
                                    {/* <legend>Введите ваше любимое время рабочего дня</legend> */}
                                            <p>
                                                <input type="time" name="selected_time" list="time-list" />
                                                <input type="date"/>
                                            </p>
                                        <datalist id="time-list">
                                                <option value="08:00" label="до 10:00" />
                                                <option value="10:00" label="до 12:00" />
                                                <option value="12:00" label="до 14:00" />
                                                <option value="14:00" label="до 16:00" />
                                                <option value="16:00" label="до 18:00" />
                                                {/* <option value="16:00" label="другое время" /> */}
                                        </datalist>
                                </fieldset>
                                </form>

{/*---------------------------------------------------------------------------------------------------------*/}
                             

                        </div>

                                <div>
                                <textarea name="comment" placeholder="Коментарий" className="text__arrey" ></textarea>
                                {/* cols="40" rows="3"  */}
                                </div>

                        {/* <div className="form__group">
                            <input typeName="date" id="myDate" class="style__date" required></input>
                            <input typeName="time" id="myTime" class="style__time" value="08:00:00"></input>
                            <label className="form__label"></label>
                        
                        </div> */}
                        {/* <button className="form__buttom" onclick="myFunction()">Отправить заявку</button> */}
    </div>
                    </div>
                    {/* =======================  */}<button className="form__buttom1" onclick="myFunction()">Отправить заявку</button>
                </div>
                </div>
          {/* </div> */}
          <div className="post__text">
              
          </div>
          
        </div>
    
    )
}

export default Me;