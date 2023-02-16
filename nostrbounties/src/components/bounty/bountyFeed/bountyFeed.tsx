import BountyCard from "../bountyCardShortInfo/bountyCardShortInfo";
import { relayInit } from "nostr-tools";

function bountyFeed() {

    let wss_url = "ws://relay.damus.io";
    let relay = relayInit(wss_url);

    relay.on("connect", ()=>{
    console.log("connected to relay " + wss_url)
    })

    relay.on("error", ()=>{
        console.log("couldn't connect to relay " + wss_url)
    });

    return ( <div>
<p>soon</p>
    </div> );
}

export default bountyFeed;