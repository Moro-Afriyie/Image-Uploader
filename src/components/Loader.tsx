import * as React from "react";

const Loader: React.FunctionComponent = (props) => {
  return (
    <div className="w-full min-h-screen h-full flex items-center justify-center bg-primary">
      <div className="max-w-[25rem] w-full h-36 rounded-xl bg-white shadow-small"></div>
    </div>
  );
};

export default Loader;
