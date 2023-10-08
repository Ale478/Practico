import { useState } from 'react'
import './Heart.css'
import { FaHeart  } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'

const Heart = () => {

  
    const [liked, setLiked] = useState(false)
    const handleClick = () => {
        liked == true ? setLiked(false) : setLiked(true);
    }

    return (
        <div onClick={handleClick}>
            {liked == true ? <FaHeart className='heart'/> : <FaRegHeart className='heart'/>}
            
        </div>
    )
}

export {Heart}