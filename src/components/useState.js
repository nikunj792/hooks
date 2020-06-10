import React , { useState} from 'react';

const UseState = (props) =>{
    //Simple State Value.
let [name, setName] = useState("Ravi");
//Object defining in the initial state.
let [address, setAddress] = useState({door: '109', building: 'Kirtinagar'});
return <React.Fragment><span>UseState Hook</span>
    <hr></hr>
    Name is : {name}<br/>
    <button onClick={()=>setName('Nikunj')}>Press For Changing the name.</button><br/>
    Door is : {address.door}<br/>
    Building is : {address.building}<br/>
    <button onClick={()=>setAddress({door: '1111', building: 'Osmstays'})}>Press Here for changing building and door.</button><br/>
    <hr></hr>
    
</React.Fragment>
}

export default UseState;