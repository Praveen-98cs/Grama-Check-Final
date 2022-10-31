import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { AuthProvider } from "@asgardeo/auth-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
const Index = () => (
  <AuthProvider
      config={ {
          signInRedirectURL: "http://localhost:3000",
          signOutRedirectURL: "http://localhost:3000",
          clientID: "Pcwt8fDyLvxgUrmIaPg3Wv6JKBEa",
          baseUrl: "https://api.asgardeo.io/t/rdxorg",
          scope: [ "openid","profile" ]
      } }
  >
 <App />
  </AuthProvider>
);

root.render(
  <React.StrictMode>
    <Index/>
   
  </React.StrictMode>
);