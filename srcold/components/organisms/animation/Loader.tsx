import React from "react";
import { Blocks, DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader_container">
        <Blocks
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
  />
    </div>
  );
};

export default Loader;
