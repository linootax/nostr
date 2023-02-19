import { useState } from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";



function CreateBounty() {

    let [title, setTitle] = useState(null);
    let [description, setDescription] = useState(null);
    let [reward, setReward] = useState(null);
    let [discord, setDiscord] = useState(null);
    let [telegram, setTelegram] = useState(null);
    let [email, setEmail] = useState(null);
    let [whatsapp, setWhatsapp] = useState(null);
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

          let finalEventMessage = await window.nostr.signEvent(eventMessage);
          console.log(finalEventMessage)
          
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
        

        </div>

        <div>
            <Footer />
        </div>
        
    </div> );
}

export default CreateBounty;