import React, {createContext} from 'react'
export const MyConnections = createContext()

export const localData = [
    {'prescription':1, 'status':'sync'},
    {'prescription':2, 'status':'unsync'},
    {'prescription':3, 'status':'decoded'},
    {'prescription':4, 'status':'sync'},
]

const updateData = (currentState,prescriptionDetails) =>{
    console.log(prescriptionDetails)
    let prescriptionId = prescriptionDetails.prescriptionId;
    let prescriptionStatus = prescriptionDetails.status
    for(let elem of currentState) {
        if(elem.prescription == prescriptionId){
            elem.status = prescriptionStatus
        }
    } 
    return currentState
}

const deleteData = (currentState, prescriptionDetails) => {
    let prescriptionId = prescriptionDetails.prescriptionId
    for(let elem of currentState) {
        if(elem.prescription == prescriptionId){
            currentState.splice(elem,1)
        }
    } 
    return currentState
}

export const reducer = (currentState,action) => {
    if(action.type == 'update'){
        return updateData(currentState, action.payLoad)
    }else if(action.type == 'delete') {
        return deleteData(currentState,action.payLoad)
    }
}