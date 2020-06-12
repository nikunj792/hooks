import { useState, useEffect } from 'react';

const UseFetch = (url) =>{
    const [apiData, setAPIData ] = useState([]);

    useEffect(()=>{
        fetch(url,{
            method : 'GET'
        })
        .then(response=>response.json())
        .then(res=> setAPIData(res))
    },[])

    return apiData
}

export default UseFetch;