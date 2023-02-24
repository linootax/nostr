import React from 'react';
import logo from './logo.svg';
import Header from './components/header/header';
import Footer from "./components/footer/footer";
import BountyFeed from "./components/bounty/bountyFeed/bountyFeed";




function App() {

  return (
    <div class="max-w-7xl lg:px-40 sm:px-10">
      <div>
      <Header />
      </div>
      <div>
      <BountyFeed />
      </div>
    </div>
  );
}

export default App;
