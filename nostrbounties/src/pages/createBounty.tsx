import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {RelayPool} from "nostr-relaypool";


import Header from "../components/header/header";
import Footer from "../components/footer/footer";




function CreateBounty() {

    let [title, setTitle] = useState(null);
    let [description, setDescription] = useState(null);
    let [reward, setReward] = useState(null);
    let [discord, setDiscord] = useState(null);
    let [telegram, setTelegram] = useState(null);
    let [email, setEmail] = useState(null);
    let [whatsapp, setWhatsapp] = useState(null);
    let [extensionError, setExtensionError] = useState(false)
    let navigate = useNavigate()
    
    let eventData ={
        title:title,
        description:description,
        reward: reward,
        discord: discord,
        telegram: telegram,
        email: email,
        whatsapp:whatsapp
    }

    const handleTitle = (event)=>{
      setTitle(event.target.value)
    }
    const handleDescription = (event)=>{
      setDescription(event.target.value)
    }
    const handleReward = (event)=>{
      setReward(event.target.value)
    }
    const handleDiscord = (event)=>{
      setDiscord(event.target.value)
    }
    const handleTelegram = (event)=>{
      setTelegram(event.target.value)
    }
    const handleEmail = (event)=>{
      setEmail(event.target.value)
    }
    const handleWhatsapp = (event)=>{
      setWhatsapp(event.target.value)
    }

    async function postEvent() {
        
        let contentDataStringify = JSON.stringify(eventData)
        let eventMessage = {
            "id":null,
            "pubkey":null,
            "created_at":Math.floor(Date.now() / 1000),
            "kind":789,
            "tags":[],
            "content": contentDataStringify,
            "sig":null
          };

          if(!window.nostr){
            console.log("you need to install an extension")
            setExtensionError(true)
          }

          let EventMessageSigned = await window.nostr.signEvent(eventMessage);

         let relays = ['wss://relay.damus.io', 'wss://nostr.bitcoiner.social'];

         let relayPool = new RelayPool(relays);

let unsub = relayPool.subscribe(
  [
    {
      authors: [
        "32e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245",
      ],
      kinds:[1],
      limit:10
    },
  ],
  relays,
  (event, isAfterEose, relayURL) => {
    console.log(event.kind, isAfterEose, relayURL);
  },
  undefined,
  (events, relayURL) => {
    console.log(events, relayURL);
  }
);

relayPool.onerror((err, relayUrl) => {
  console.log("RelayPool error", err, " from relay ", relayUrl);
});
relayPool.onnotice((relayUrl, notice) => {
  console.log("RelayPool notice", notice, " from relay ", relayUrl);
});



    }


    
    return ( <div>
        <div>
            <Header />
        </div>
        <div>
          <h1>Create bounty page</h1>
        
            <input type="text" name="title" onChange={handleTitle} placeholder="bounty title" id="" />
            <input type="text" name="description" onChange={handleDescription} placeholder="describe your bounty" id="" />
            <input type="number" name="satsreward" onChange={handleReward} placeholder="your reward in sats" id="" />
            <input type="text" name="discord" onChange={handleDiscord} placeholder="your discord user" id="" />
            <input type="text" name="telegram" onChange={handleTelegram} placeholder="your telegram user" id="" />
            <input type="text" name="email" onChange={handleEmail} placeholder="your email" id="" />
            <input type="text" name="whatsapp" onChange={handleWhatsapp} placeholder="your whatsapp" id="" />
            <button onClick={postEvent}>post bounty</button>
            {extensionError ? <p>You need an extension to post</p> : null}
        

        </div>

        <div>
            <Footer />
        </div>
        
    </div> );
}

export default CreateBounty;