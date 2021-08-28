import React from 'react';
import Blouses3 from './Blouses3';
import './Blouses3.css';


// const items = [

//     {
//         "title": "aaaaaa",
//         "price": 12312,
//         "imageUrl": "./img/women/blouses/2.jpg"
//     },
//     {
//         "title": "bbbbb",
//         "price": 12312,
//         "imageUrl": "./img/women/blouses/2.jpg"
//     },
//     {
//         "title": "ccccc",
//         "price": 12312,
//         "imageUrl": "./img/women/blouses/2.jpg"
//     },
//     {
//         "title": "dddddd",
//         "price": 12312,
//         "imageUrl": "./img/women/blouses/2.jpg"
//     },
//     {
//         "title": "eeeeee",
//         "price": 12312,
//         "imageUrl": "./img/women/blouses/2.jpg"
//     },
//     {
//         "title": "fffffff",
//         "price": 12312,
//         "imageUrl": "./img/women/blouses/2.jpg"
//     },
//     {
//         "title": "gggggg",
//         "price": 12312,
//         "imageUrl": "./img/women/blouses/2.jpg"
//     },

// ];


function Blouses() {

    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);

    React.useEffect(() => {
        fetch('https://61253db83c91fb0017e72a04.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);


    const onAddToCart = (obj) => {
        setCartItems([...cartItems, obj]);
    };

    console.log(cartItems);


    return (
        <>

            <div className="container">
                <div className="cards">
                    {items.map((item) => (
                        <Blouses3
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}


export default Blouses;
