

import Header from "../components/header/header";
import Footer from "../components/footer/footer";


function CreateBounty() {
    return ( <div>
        <div>
            <Header />
        </div>
        <div>
          <h1>Create bounty page</h1>
        <form action="">
            <input type="text" name="title" placeholder="bounty title" id="" />
            <input type="text" name="description" placeholder="describe your bounty" id="" />
            <input type="number" name="satsreward" placeholder="your reward in sats" id="" />
        </form>  
        </div>

        <div>
            <Footer />
        </div>
        
    </div> );
}

export default CreateBounty;