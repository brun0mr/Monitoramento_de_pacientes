import React, { useState, useEffect } from "react";
import { Button } from 'reactstrap';

export default function Teste_fetch(){
    const [daata, setData] = useState('');
    let print = '';

    const load_data = async() =>{
        const response = await fetch('http://127.0.0.1:8000/api/json_response/', {
            method: "POST",
            body: JSON.stringify({})
        });
        const data = await response.json();   
        setData(data);
        // console.log(data.json());
    }

    
    const update_content = () => {
        setInterval(()=>{
            load_data();
        }, 1000);
    }
    
    useEffect(() => {
        update_content();
    }, []);

    print = daata['foo'];

    return (
      <div>
        {print}
      </div>
      // <div>{data}</div>
      // <div>{response}</div>
    );
}