import React from 'react'
import CustomHooks from './useFetch';
import CustomHooksAnotherVersion from './useAsynAwait';

const Custom = () =>{
   let data  =  CustomHooks('https://hn.algolia.com/api/v1/search?page=1');
   let apiValue = CustomHooksAnotherVersion('https://hn.algolia.com/api/v1/search?page=1');
  
   return <div>
   <ul>
     {data && data.hits && data.hits.map(el => (
       <li key={el.id}>{el.title}</li>
     ))}
   </ul>
   <hr></hr>
   <div>USing Async and Await in hooks</div>
   <ul>
     {apiValue && apiValue.hits && apiValue.hits.map(el => (
       <li key={el.id}>{el.title}</li>
     ))}
   </ul>
 </div>
}
export default Custom;