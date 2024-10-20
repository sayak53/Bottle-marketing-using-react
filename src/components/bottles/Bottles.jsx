import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const[bottles,setBottles] = useState([])

    const[cart,setcart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    
    const handleAddtoCart = bottle => {
        const newCart = [...cart,bottle]
        setcart(newCart)
    }

    return (
        <div>
            <h2>Bottles Here:{bottles.length}</h2>
            <h3>Cart:{cart.length}</h3>
            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} handleAddtoCart={handleAddtoCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;