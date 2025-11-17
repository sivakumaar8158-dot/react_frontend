import Festivals from "./Festivals";
import Tourism from "./Tourism";
import kerala_festival from '../assets/kerala_festivals.png'

export const Kerala = ()=>{

    return (
        <>
        <div style={{backgroundColor:"blue",color:"black",justifyContent:"space-between",alignItems:"center",padding:"3px",marginTop:"5px"}}>
            <img src={kerala_festival} alt="" style={{width: "1500px", height:"600px", marginTop:"3px",marginBottom:"3px"}} />
            <h2><center>Kerala Festivals</center></h2>
        </div>
        <Festivals/>
        <div>
            <Tourism/>
        </div>
        </>
    )

}

export default Kerala;