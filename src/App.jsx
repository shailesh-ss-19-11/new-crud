import { useState } from "react";
import User from "./user/User";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <div className="p-3 bg-secondary">
        <Heading heading={"Users"} />
      </div>
      <User />
    </>
  );
}

export default App;
