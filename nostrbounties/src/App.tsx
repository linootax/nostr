import React from 'react';
import logo from './logo.svg';
import Header from './components/header/header';
import Footer from "./components/footer/footer";
import BountyFeed from "./components/bounty/bountyFeed/bountyFeed";




function App() {

let value = localStorage.getItem("pubkey")

  return (
    <div>
      <div>
      <Header />
      </div>
      <div>
       <BountyFeed />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
