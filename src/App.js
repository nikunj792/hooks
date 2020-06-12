import React from 'react';
import UseState from './components/useState'
import UseEffect from './components/useEffect'
import Custom from './components/custom/useCustom'
import UseReducer from './components/reducerHooks/useReducer'

import './App.css';

function App() {
  return (
    <div className="App">
     <UseState />
     <UseEffect />
     <Custom />
     {/* <UseReducer /> */}
    </div>
  );
}

export default App;
