import { useNavigate } from "react-router-dom";



interface bountyInfo{
    title: string,
    description: string,
    reward:number,
    author: string,
    createdAt: string
    id: string
}

function shortBountyInfo(data: bountyInfo) {

    const navigate = useNavigate()
    const bountyId = data.id;

    return ( <div onClick={()=> navigate(`/b/${bountyId}`)}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.author}</p>
        <p>{data.createdAt}</p>
        <p>{data.reward}</p>
    </div> );
}

export default shortBountyInfo;