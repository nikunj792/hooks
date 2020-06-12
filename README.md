# Overview

This code basically basics of react useState, useEffect and other custom hooks concept. It is built using the create-react-app , so simply using npm start it will run.

# useState

In this very simply we will use simple syntax written below 

let [name, setName] = useState(initialState)'

where name is the state and setName to set that name and initialState is the initial value for the name state.

Note : We can define the object in the initial state and set accordingly.

# useEffect

useEffect is basically the replacement for the componentDidMount, componentDidUpdate and componentUnMount, in this we can useState along with this to initialize and set the state and useEffect will take an callback function.

# useCustom Hooks

you cannot return a Promise from useEffect
useEffect should exclusively return another function, which is used for cleaning up the effect.

# useReducer Hooks

useState, useReducer is another hook, convenient for managing complex state changes.

Getting some issue in this hook.
