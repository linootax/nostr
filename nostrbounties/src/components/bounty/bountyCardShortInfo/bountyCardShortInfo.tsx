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
            return(
            <div onClick={()=> navigate(`/b/${bountyIds[i]}`)} class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mt-5	">
            
                <div class="w-full p-4 bg-white">
                    <p class="font-medium text-indigo-500 text-md">
                        {metadatafinal.name}
                    </p>
                    <p class="mb-2 text-xl font-medium text-gray-800">
                        {finalData.title}
                    </p>
                    <p class="font-light text-gray-400 dark:text-gray-300 text-md">
                            {finalData.description}
                        </p>
                    <div class="flex flex-wrap items-center mt-4 justify-starts">
                        <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            {finalData.reward} sats
                        </div>
                        <div >
                        <button type="button" class="py-1.5 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Add to reward
                        </button>
                        </div>
                    </div>
                </div>
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