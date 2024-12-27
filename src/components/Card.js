import { useState } from 'react';
import './Card.css';

function Card({ id, name, info, image, price, removeTour }) {


    const [readmore, setReadmore] = useState(false);
    const desc = readmore ? info : info.slice(0, 200) + '...';
    function readMoreHandler() {
        setReadmore(!readmore);

    }

    return (
        <div className='flex flex-col items-center w-[300px] h-auto rounded-md p-2 shadow-xl '>
            <img className='w-[100%] h-[300px] object-cover ' src={image} alt='PlaceImage' ></img>
            <div className='Card-details my-6'>

                <div className='tour-details'>
                    <p className='text-green-600 text-lg'>₹ {price}</p>
                    <h2 className='text-xl'>{name}</h2>
                </div>
                <div className='tour-desc'>
                    <span>{desc}</span>
                    <span className='text-blue-600 cursor-pointer' onClick={readMoreHandler}>{readmore ? 'Show less' : 'Read more'}</span>
                </div>
            </div>
            <button className='w-[70%] my-3 border-[1px] border-red-900 bg-red-300 font-bold rounded-md hover:bg-red-900 hover:text-white' onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    );
}
export default Card;