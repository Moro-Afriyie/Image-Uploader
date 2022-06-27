import * as React from "react";
import image from "../assets/image.png";

interface IIMageUploadProps {}

const IMageUpload: React.FunctionComponent<IIMageUploadProps> = (props) => {
  return (
    <section className="min-h-screen flex items-center justify-center w-full bg-greybg">
      <div className="max-w-[25.2rem] flex flex-col items-center justify-center gap-5 w-full h-[29.32rem] bg-white shadow-small px-8 rounded-xl">
        <div className="flex flex-col mb-3 gap-3 font-medium">
          <h1 className="text-lg text-heading text-center">
            Upload your image
          </h1>
          <p className="text-[0.625rem] text-center text-[#828282]">
            File should be Jpeg, Png,...
          </p>
        </div>
        <div className="h-[13.625rem] relative w-full bg-dark-grey box rounded-xl">
          <div className="flex flex-col gap-4 justify-center items-center w-ful h-full">
            <img src={image} alt="image icon" className="w-[7.125rem]" />
            <p className="text-center text-xs text-light-grey">
              Drag & Drop your image here
            </p>
            <input
              className="absolute opacity-0 top-0 left-0 bottom-0 right-0 border border-red-900"
              type="file"
              name="image"
              id="image"
            />
          </div>
        </div>
        <p className="text-sm  font-medium text-light-grey">Or</p>
        <label
          htmlFor="image"
          className="w-[6.313rem] flex items-center justify-center h-8 rounded-lg bg-primary-blue text-white text-xs"
        >
          Choose a file
        </label>
      </div>
    </section>
  );
};

export default IMageUpload;
