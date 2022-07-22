import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Saying from './Saying';


function Sayings() {
    const [sayings, setsayings] = useState([]);

    useEffect(() => {

        axios.request("https://animechan.vercel.app/api/quotes").then(function(result){
            console.log(result.data)
            setsayings(result.data)
        }).catch(function(error){
            console.log(error)
        })
      
    }, []);
  return (
    <div>
      <h1>React API</h1>
      <div>
        {
            sayings.map(say => 
                <Saying key={say.id} says={say} />
                )
        }
        </div>
    </div>
  );
}

export default Sayings;
