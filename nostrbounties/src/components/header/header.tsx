import { useNavigate } from "react-router-dom";


function Header() {
    
    const navigate = useNavigate();
          

    return ( <div class="w-full p-12 bg-white">
    <div class="flex items-end justify-between mb-12 header">
        <div class="title">
            <p onClick={()=> navigate("/")} class="mb-4 text-4xl font-bold text-gray-800">
                Nostr Bounties
            </p>
        </div>
        <div class="text-end">
            <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                    <button onClick={()=> navigate("/create")} class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Create Bounty
                    </button>
                </form>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        </div>
    </div>
)}

export default Header;