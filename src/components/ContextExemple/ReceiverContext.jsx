import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const ReceiverContext = () => {
  const value = useContext(UserContext);
  return <div>ReceiverContext {value.user}</div>;
};

export default ReceiverContext;
