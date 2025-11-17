import Navbar from "./navbar"
import chennai_img from '../assets/chennai-it-companies.png'


export const Chennai = () => {
    return (
        <>
        <div style={ 
            {backgroundColor: "black", padding: "7px", color: "white" } }>
            <h1><center>Chennai It-companies & Robotics</center></h1>
        </div>
        
        <div >
            <center><img src={chennai_img} alt="" style={{width: "1500px", height:"600px", marginTop:"3px",marginBottom:"3px"}}/></center>
        </div>
        
        
        <Navbar/>
        </>
    )
}
export default Chennai;