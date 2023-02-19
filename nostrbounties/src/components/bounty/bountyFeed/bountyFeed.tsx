import BountyCard from "../bountyCardShortInfo/bountyCardShortInfo";
import {useState, useEffect} from "react"
import { arrayBuffer } from "stream/consumers";

function bountyFeed() {

var values: any =[];
let [events, setEvents] = useState([])
    
useEffect(()=>{
    let arr: any =[];
    var ws = new WebSocket("wss://nostr-pub.wellorder.net");
    
    ws.addEventListener('open', function (event) {
        ws.send('["REQ", "my-sub", {"kinds":[1], "authors":["35d26e4690cbe1"], "limit":10}]');
    });

    const getEventData = ()=>{
        return new Promise((resolve, reject)=>{
            ws.addEventListener("message", (event)=>{
                //let eventKey = key;
                let data=JSON.parse(event.data)[2].content;
                arr.push(data);
            });

                setTimeout(()=>{
                    resolve(arr)
                 }, 3000)
        })
    }

    getEventData().then((data)=>{
        values.push(data);
        console.log(values[0][0]);
        setEvents([values][0][0])
        
        
    });

//setTimeout(()=>console.log(events), 5000)
    
},[])


return(
    <div>
        {events.map((item)=>{
            return(<div>
               <p>{item}</p><br></br>
            </div>)
        })}
    </div>
)
}

export default bountyFeed