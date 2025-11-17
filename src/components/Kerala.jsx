import Festivals from "./Festivals";
import Tourism from "./Tourism";

export const Kerala = ()=>{

    return (
        <>
        <div style={{backgroundColor:"blue",color:"black",justifyContent:"space-between",alignItems:"center",padding:"3px"}}>
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