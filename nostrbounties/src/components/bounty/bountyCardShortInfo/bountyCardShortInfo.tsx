import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bountyInfo from "../../../pages/bountyFullInfo";
import { getEventData } from "../../../utils";


function shortBountyInfo({content, metaData, ids}) {

    const navigate = useNavigate()
    const bountyInfor = content;
    const bountyHunterMetaData = metaData;
    const bountyIds = ids;
    let i = -1;

    function createComponent(i) {
            console.log(bountyIds.length)
            let finalData = JSON.parse(bountyInfor[i]);
            let metadatafinal = JSON.parse(bountyHunterMetaData[i])
            return(<div onClick={()=> navigate(`/b/${bountyIds[i]}`)}>
                <h3>title: {finalData.title}</h3>
                <p>poster: {metadatafinal.name}</p>
                <p>reward: {finalData.reward} sats</p>
            </div>)
    }

console.log(bountyInfor, bountyHunterMetaData, bountyIds)
    return ( <div>
        {bountyIds.map(()=>{
            i++
            return(<div>
                {createComponent(i)}
            </div>)
        })}
    </div> );
}

export default shortBountyInfo;