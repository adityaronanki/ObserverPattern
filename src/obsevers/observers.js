import { useContext } from "react"

class CustomObservers {
    constructor(){
        this.subscribed = []
        this.customdispatch = null
    }
    subscribe(fn){
        this.subscribed.push(fn)
    }
    setdispatch(dispatch){
        this.customdispatch = dispatch
    }
    desubscribe(fn){
        this.subscribed = this.subscribed.filter((fnl) => fnl != fn)
    }
    notify(message){
        this.customdispatch(message)
        this.subscribed.forEach((each) => each(message))
    }

}

const observe = new CustomObservers();
export default observe;
