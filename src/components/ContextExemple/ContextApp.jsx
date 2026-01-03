import React from "react";
import ReceiverContext from "./ReceiverContext";
import Login from "./Login";
import { UserProvider } from "../../context/UserContext";
import Logout from "./Logout";
// export const UserContext = createContext();
const ContextApp = () => {
  return (
    <div>
      <UserProvider>
        <Login />
        <Logout />
        <ReceiverContext />
      </UserProvider>
    </div>
  );
};

export default ContextApp;
