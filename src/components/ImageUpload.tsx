import * as React from "react";

interface IIMageUploadProps {}

const IMageUpload: React.FunctionComponent<IIMageUploadProps> = (props) => {
  return (
    <section className="min-h-screen flex items-center justify-center w-full bg-greybg">
      <div className="max-w-[25.2rem] w-full h-[29.32rem] bg-white shadow-small px-8 rounded-xl">
        <div className="h-[13.625rem] w-full bg-dark-grey box rounded-xl"></div>
      </div>
    </section>
  );
};

export default IMageUpload;
