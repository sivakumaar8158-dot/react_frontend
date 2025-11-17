import Important_places from "./Important_places";
import kerala_tourism from "../assets/kerala_tourism.png"
export const Tourism =() =>{
    return(
        <>
        <div style={{ backgroundColor: "aqua", color: "red", padding: "2px", marginTop:"5px"}}>
            <img src={kerala_tourism} alt="" style={{width: "1500px", height:"600px", marginTop:"3px",marginBottom:"3px"}} />
        <h1><center>Welcome to Kerala Tourism</center></h1>
        </div>
        <Important_places/>
        </>
    )

}


export default Tourism;