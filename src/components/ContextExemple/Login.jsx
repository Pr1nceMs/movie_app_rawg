import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [value, setValue] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Login;
