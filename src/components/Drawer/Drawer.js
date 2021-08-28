import React from 'react';
import './Drawer.css';




function Drawer({ onClose, items = [] }) {



    return (


        <div className="overlay">
            <div className="drawer">

                <div className="cart_remove">
                    <h3>Корзина</h3>
                    <img onClick={onClose} className="removeBtn" src="./img/close.svg" alt="Close" width="20" />
                </div>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem">
                            {/* <img style={{ backgroundImage: `url(${obj.imageUrl})` }} className="pic" src="./img/women/blouses/2.jpg" width="100"></img> */}
                            <div
                                style={{ backgroundImage: `url(${obj.ImageUrl})` }}
                                className="cartItemImg"></div>

                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}</b>
                            </div>
                            <img className="removeBtn" src="./img/close.svg" alt="Remove" width="20" />
                        </div>
                    ))}
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div className="dash_button"></div>
                            <b>21 000 сом</b>
                        </li>
                    </ul>
                    <button className="order_button">Оформить заказ<img className="arrowBtn" src="./img/arrow.svg" width="" /></button>
                </div>
            </div>
        </div>

    );
}

export default Drawer;