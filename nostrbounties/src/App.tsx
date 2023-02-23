import React from 'react';
import logo from './logo.svg';
import Header from './components/header/header';
import Footer from "./components/footer/footer";
import BountyFeed from "./components/bounty/bountyFeed/bountyFeed";




function App() {

  return (
    <div>
      <div>
      <Header />
      </div>
      <div class="w-full p-12 bg-white">
    <div class="flex items-end justify-between mb-12 header">
        <div class="title">
            <p class="mb-4 text-4xl font-bold text-gray-800">
                Lastest articles
            </p>
            <p class="text-2xl font-light text-gray-400">
                All article are verified by 2 experts and valdiate by the CTO
            </p>
        </div>
        <div class="text-end">
            <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div class=" relative ">
                    <input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title"/>
                    </div>
                    <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          <BountyFeed />
          <BountyFeed />
          <BountyFeed />
        </div>
    </div>
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
