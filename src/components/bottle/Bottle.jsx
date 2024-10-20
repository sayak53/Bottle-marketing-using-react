import './Bottle.css'
const Bottle = ({bottle}) => {
    const{name,price,img} = bottle
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h2>Bottle Name: {name}</h2>
            <h2>Price: {price} rs.</h2>
            <button>Add to Cart</button>
        </div>
    );
};

export default Bottle;