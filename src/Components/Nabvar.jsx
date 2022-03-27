import React from "react";
import { Link } from "react-router-dom";
const Nabvar = () => {
  return (
    <>
      <Link to='/'>
        <div>Home</div>
      </Link>
      <Link to='/about'>
        <div>About</div>
      </Link>
      <Link to='/profile'>
        <div>profile</div>
      </Link>
    </>
  );
};

export default Nabvar;
