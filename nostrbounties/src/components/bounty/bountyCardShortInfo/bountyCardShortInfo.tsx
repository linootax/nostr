import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEventData } from "../../../utils";



interface bountyInfo{
    title: string,
    description: string,
    reward:number,
    author: string,
    createdAt: string
    id: string
}

function shortBountyInfo(data: any) {

    const navigate = useNavigate()
    let contentData: string[] = [];
    let [ids, setIds] = useState([])
    const content = data.content;
    let i = -1;

    function createComponent(i) {
            console.log(ids.length)
            return(<div onClick={()=> navigate(`/b/${ids[i]}}`)}>
                <p>{ids[i]}</p>
                <p>{content[i]}</p>
            </div>)
    }

    useEffect(()=>{
        getEventData("id").then((id)=>{
            contentData.push(id);
            console.log(id);
            setIds([contentData][0][0])
        })

        console.log(ids.length)
    },[])

    return ( <div>
        {ids.map(()=>{
            i++
            return(<div>
                {createComponent(i)}
            </div>)
        })}
    </div> );
}

export default shortBountyInfo;