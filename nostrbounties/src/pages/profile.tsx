import React from 'react';
import { useParams } from 'react-router-dom';
import logo from './logo.svg';

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function Profile() {

  const params = useParams();

  return (
    <div>
      <div>
        <Header />
      </div>
      
      <div>
        <h1>Profile page</h1>
      <p>{params.id}</p>
      </div>

      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default Profile;
