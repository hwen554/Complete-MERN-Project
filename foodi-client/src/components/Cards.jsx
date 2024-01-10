import React,{useState} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({item}) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);
    };
    
    return (

        <div className="card shadow-xl relative mr-5 md:my-5">
            <div
                className={`rating gap-1 absolute right-2 top-2 p-4  bg-green ${isHeartFilled ? "text-rose-500" : "text-white"
                    }`}
                onClick={handleHeartClick}
            >
                <FaHeart className="w-4 h-4 cursor-pointer" />
            </div>
            <Link to={`/menu/${item._id}`}>
                <figure>
                    <img src={item.image} alt="" className='hover:scale-105 transition-all duration-300 md:h-72' />
                </figure>
            </Link>

            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>Description of the item</p>
                <div className="card-actions justify-end">
                    <h5 className="font-semibold">
                        <span className="text-sm text-red">$ </span> {item.price}
                    </h5>
                    <button className="btn bg-green text-white">Add to Cart</button>
                </div>
            </div>
        </div>

    )
}

export default Cards