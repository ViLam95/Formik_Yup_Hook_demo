import axios from "axios";
import {useEffect, useState} from "react";

const Candy = () => {
    const [candies, setCandies] = useState([]);

    useEffect(() =>{

        axios.get('http://localhost:8080/api/candies')
            .then(res => {
                console.log(res.data);
                setCandies(res.data.content);
            });
    },[])



    return(
        <div>
            {candies.map(candy =>
                <h1>{candy.name} {candy.price}</h1>,
            )}
        </div>
    )
}
export default Candy;