import { useState } from "react";
import "./Estrellas.css"

export function StarRating({rating, setRating}) {
    const [hover, setHover] = useState(0)
    const stars = [1,2,3,4,5]

    return (
        <div className="star-rating">
            {stars.map((star, index) => {
                index += 1;
                return (
                    
                    <button 
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={()=> {rating === index ? setRating(0): setRating(index)}}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star"> &#9733;</span>
                    </button>
                );
            })}
        </div>
    );
}
