import React, {useEffect, useState} from "react";
import { Toast,ToastHeader,ToastBody } from "reactstrap";
import observe from "../../obsevers/observers";

const Notification =(props) =>{

    const [showNotification,setShowNotification] = useState(false)
    
    function handleNotification(message){
        setShowNotification(!showNotification)
    }

    useEffect(()=>{
        observe.subscribe(handleNotification)
    },[])

    return (

    <div className="p-3 bg-success my-2 rounded">
       {showNotification &&  <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a success background — check it out!
          </ToastBody>
        </Toast>}

      </div>
    )
}

export default Notification