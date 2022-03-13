import React, {useState, Component} from "react"
import Addition from "../components/operations/addition"
import Multiplication from "../components/operations/multiplication"


class ShowCalculation extends Component{

    constructor(props){
        super(props); 
    }

    render() {

    const {valueOne, valueTwo } = this.props;

    function showCalculation(){
    const [operation, setOperation] = useState("addition");
    const handleClick = (operation) => {
        setOperation(operation)}
    

    return(
        

        <div className="Calculation">
        
        {(() => {
                
                switch (operation) {
                    
                    case "addition":
                        return <Addition valueOne={valueOne} valueTwo={valueTwo} handleClick={handleClick} />
                    case "multiplication":
                        return <Multiplication handleClick={handleClick} />
                    default:
                        return null
                }
            })()}
        </div>
    )
    }
}
}

export default ShowCalculation