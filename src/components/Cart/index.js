import React from "react";
import { useContext } from "react";
import { MyConnections } from "../../reducers";
const Cart = () =>{

    const {state,dispatch} = useContext(MyConnections)
    console.log(state)

    return (
        <React.Fragment>
            <p>Cart Component</p>
        </React.Fragment>
    )
}

export default Cart