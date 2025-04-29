import React, { useEffect, useReducer } from "react";
import { reducer as ReducerFunction, localData,MyConnections } from "../reducers";
import observe from "../obsevers/observers";


const MyConnectionsProvider = ({children}) =>{
    const [state,dispatch] = useReducer(ReducerFunction,localData)
    useEffect(()=>{
        observe.setdispatch(dispatch)
    },[])
    return(
        <MyConnections.Provider value ={{state,dispatch}}>
            {children}

        </MyConnections.Provider>
    )

}
export default MyConnectionsProvider