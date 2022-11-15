import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { AuthProvider } from "@asgardeo/auth-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
const Index = () => (
  <AuthProvider
      config={ {
          signInRedirectURL: "https://gramacheck-gr0uyg8a1-praveen-98cs.vercel.app/",
          signOutRedirectURL: "https://gramacheck-gr0uyg8a1-praveen-98cs.vercel.app/",
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
