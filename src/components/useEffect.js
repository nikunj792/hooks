import React, { useState, useEffect } from 'react'

const UseEffect = ( ) => {
    const [ data, setResponseData ] = useState([])

    useEffect(()=>{
        fetch('https://hn.algolia.com/api/v1/search?page=1',{
            method: 'GET'
        }).then(response => response.json())
        .then(res=>{
            setResponseData(res.hits)}
        ).catch(err=>console.log('error is ', err))
    },[])
    
    return(<React.Fragment>
        <span>UseEffect Hook</span>
        <hr></hr>
        Data coming from api is {data && data[0] && data[0].title}
        <hr></hr>
    </React.Fragment>)
}

export default UseEffect;