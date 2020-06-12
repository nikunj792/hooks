
import { useEffect, useReducer } from 'react'
import * as constant from '../utility/constants'

const initialState = {
    loading : "",
    error : "",
    data : []
}
function reducerFunction (state = initialState , action){
    switch(action.type){
        case constant.DATA_FETCH:
            break;
        case constant.FETCH_FAILURE:
            return state = {
                ...state,
                error: action.payload
            }
        case constant.FETCH_SUCCESS:
            return state = {
                ...state,
                data : action.payload
            }
        default:
            return state;
    }
    return state
}
const useReducerFn = (endPoint) =>{
    const [data, dispatch] = useReducer(reducerFunction , initialState );

    useEffect(()=>{
        dispatch({ type : constant.DATA_FETCH})
            fetch(endPoint, { method : 'GET'})
                .then((response)=>{
                        response.json()
                })
                .then((finalData)=>{
                    dispatch({ type : constant.FETCH_SUCCESS, payload : finalData})
                })
                .catch(err=>{
                    dispatch({ type : constant.FETCH_SUCCESS, payload : err})
                })
    }, [])
    return data.data
}

export default useReducerFn;


