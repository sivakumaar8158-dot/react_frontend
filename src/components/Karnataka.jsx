import Cinema from "./Cinema";
import Traditions from "./Traditions";
import karnataka1 from '../assets/karnataka 1.png'

export const Karnataka =() =>{
    return (
        <>
    
            <div style={{backgroundColor:"orange",color:"white",justifyContent:"space-between",alignItems:"center",padding:"3px", marginTop:"5px"}}>
                <img src={karnataka1} alt="" style={{width: "1500px", height:"600px", marginTop:"3px",marginBottom:"3px"}} />
            <h2><center>Karnataka Cinema & Traditions</center></h2>
        </div>
        <div>
            <Cinema/>
        </div>
        
        <div>
            <Traditions/>
        </div>


        </>
    )


}


export default Karnataka;