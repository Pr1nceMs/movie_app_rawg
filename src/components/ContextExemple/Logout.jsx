import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const handleSubmit = () => {
    setUser("Invited");
  };
  return (
    <div>
      <button onClick={handleSubmit}>Logout</button>
    </div>
  );
};

export default Logout;
