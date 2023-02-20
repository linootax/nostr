import BountyCard from "../bountyCardShortInfo/bountyCardShortInfo";
import {useState, useEffect} from "react"
import { getEventData } from "../../../utils";

function bountyFeed() {

let contentData: string[] =[];
let [content, setContent] = useState([])
    
useEffect(()=>{
  

       getEventData("content").then((content)=>{
        contentData.push(content);
        console.log(content);
        setContent([contentData][0][0])
    })

         
//setTimeout(()=>console.log(events), 5000)
},[])


return(
    <div>
        <BountyCard content={content}/>
    </div>
)
}

export default bountyFeed