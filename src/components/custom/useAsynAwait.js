import { useState, useEffect } from 'react';

 
const UseFetch = (url) =>{
    const [apiData, setAPIData ] = useState([]);

    async function getAPIData(url) {
        const data = await fetch(url,{
           method : 'GET'
       });
       const finalResponse = await data.json();
       setAPIData(finalResponse)
       }
    useEffect(()=>getAPIData(url),[])

    return apiData
}

export default UseFetch;