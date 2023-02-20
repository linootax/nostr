import { useNavigate } from "react-router-dom";


function Header() {
    
    const navigate = useNavigate();
          

    return ( <div>
        <div>
            <h1 onClick={()=> navigate("/")}>Logo</h1>
        </div>
        <div>
            <button onClick={()=> navigate("/create")}>Create bounty</button>
        </div>
    </div> );
}

export default Header;