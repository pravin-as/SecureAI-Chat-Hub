import { GoogleOAuthProvider } from "@react-oauth/google";

import React from "react";
import Messenger from "./components/Messenger";

import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "917799672281-t0cpop1sbf1ifoe5h0ktqfgf13ibftsi.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
