import Action_stories from "./Action_stories";
import Love_stories from "./Love_stories";
import Must_watched from "./Must_watched";

export const Cinema = () => {
    return (
        <>
            <div style={{backgroundColor: "white", padding: "7px", color: "black"}}>
                <h2><center>Karnataka cinema</center></h2>
                <p>Karnataka cinema, popularly known as Sandalwood, is one of the major film industries in India and is known for its strong storytelling, cultural depth, and rich artistic heritage. It produces movies mainly in the Kannada language and has grown significantly from its early days, marked by classics featuring legends like Dr. Rajkumar, Vishnuvardhan, and Shankar Nag. In recent years, the industry has gained national and international attention through high-budget and technically advanced films such as KGF, Kantara, and Charlie 777, which showcased powerful narratives and exceptional filmmaking. Karnataka cinema beautifully reflects the traditions, lifestyle, and values of the region while blending modern filmmaking techniques and innovative themes. With talented actors, directors, and musicians, Sandalwood continues to expand its influence and remains an important contributor to Indian cinema.</p>
            </div>
            <Action_stories/>
            <Love_stories/>
            <Must_watched/>
        </>
    )



}


export default Cinema;