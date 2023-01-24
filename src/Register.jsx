import React from 'react';
import { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useEffect } from 'react';

export default function Register () {
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [APIdata,setAPIdata] = useState([]);

    const onSubmit = () => {
        axios.post('https://sheetdb.io/api/v1/hvgcoyr0bzwzf',{
            firstname,lastname,email
        })
      
    }

    useEffect(() =>{
        axios.get('https://sheetdb.io/api/v1/hvgcoyr0bzwzf')
        .then((incomingData) =>{
            setAPIdata(incomingData.data);
        })
    })
    return (
        <>
            <div id="bg">

                    <form class="form">
                        <input type="text" placeholder="First Name" class="textbox" onChange={(e) => setFirstname(e.target.value)} />
                        <input type="text" placeholder="Last Name" class="textbox" onChange={(e) => setLastname(e.target.value)} />
                        <input type="text" placeholder="Email Address" class="textbox" onChange={(e) => setEmail(e.target.value)} />
                        <button onClick={onSubmit}>submit</button>
                    </form>
            </div>

            {APIdata.map((data) =>{
                return(
                    <>
                        {/* {data.firstname} {data.lastname} 
                        {data.email} */}
                        <div>

                         <a href="/"> https://premsengar10.github.io/Daye/?utm_source=discord&utm_medium=cpc&utm_campaign={data.firstname}&utm_id=Trial&utm_term=intership&utm_content=page-3 </a> 
                       </div>
                      
                    </>
                )
            })}
        </>
    )
}

