import Cinema from "./Cinema";
import Traditions from "./Traditions";

export const Karnataka =() =>{
    return (
        <>
    
            <div style={{backgroundColor:"orange",color:"white",justifyContent:"space-between",alignItems:"center",padding:"3px"}}>
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