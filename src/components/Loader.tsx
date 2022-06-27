import * as React from "react";

const Loader: React.FunctionComponent = (props) => {
  return (
    <div className="w-full min-h-screen h-full flex items-center justify-center bg-primary">
      <div className="max-w-[25rem] w-full h-36 rounded-xl bg-white shadow-small font-medium text-lg px-8 flex flex-col justify-center gap-4">
        <p>Uploading...</p>
        <div className="w-full h-1.5 bg-greybg rounded-md relative">
          <div className="h-full bg-primary-blue w-[6.31rem] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
