import observe from "../obsevers/observers";


function something(){
    setTimeout(() => {
        observe.notify({type:'update','payLoad':{'prescriptionId':1,'status' :'decoded'}})
    }, 3000);
}

something()
