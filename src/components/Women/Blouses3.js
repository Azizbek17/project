import React from 'react';
import './Blouses3.css';

function Blouses3({ title, imageUrl, price, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    };

    
    return (

        <div className="card">
            <img width={150} src={imageUrl}></img>
            <h5>{title}</h5>
            <div className="d-flex justify-beetwen">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <button className="button" onClick={onClickPlus}>
                    <img 
                    width={11} 
                    height={11} 
                    src={isAdded ? "./img/check-square-solid.svg" : "./img/plus.svg"}></img>
                </button>
            </div>
        </div>

    );
}

export default Blouses3;