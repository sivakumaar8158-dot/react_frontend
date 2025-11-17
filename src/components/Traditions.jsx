import Traditions_of_karnataka from "./Traditions_of_karnataka";
import karnataka3 from '../assets/karnataka3.png'

export const Traditions =()=>{

    return(
        <>
         <div style={{ backgroundColor: "lime", color: "black", padding: "2px",marginTop:"5px"}}>
            <img src={karnataka3} alt="" style={{width: "1500px", height:"600px", marginTop:"3px",marginBottom:"3px"}}/>
        <h1><center>Karnataka Traditions</center></h1>
        </div>
        <div>
            <Traditions_of_karnataka/>
        </div>
        
        </>
    )

}


export default Traditions;