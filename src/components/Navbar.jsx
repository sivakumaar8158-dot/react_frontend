import Itcompanies from "./Itcompanies";

const Navbar = () =>{

    return (
        <>
            <header>
                
            <nav style={
                    {backgroundColor:"black",color:"white",justifyContent:"space-between",alignItems:"center",padding:"3px"}
                }>
               <Itcompanies/>
            </nav>
        </header>
        
        </>
    )

}

export default Navbar;