import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Icon } from "@iconify/react";

interface IPreviewImageProps {
  imageUrl: string;
}

const PreviewImage: React.FunctionComponent<IPreviewImageProps> = ({
  imageUrl,
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center w-full bg-greybg">
      <div className="max-w-[25.2rem] flex flex-col items-center justify-center gap-8 w-full h-[29.32rem] bg-white shadow-small px-8 rounded-xl">
        <div className="flex flex-col items-center gap-3 font-medium">
          <Icon
            icon="bi:check-circle-fill"
            className="text-4xl text-[#219653]"
          />
          <h1 className="text-lg text-heading text-center">
            Uploaded Successfully!
          </h1>
        </div>
        <div className="h-[13.625rem] bg-contain bg-center bg-no-repeat relative w-full rounded-xl overflow-hidden">
          <img src={imageUrl} alt="image" className="w-full h-full" />
        </div>
        <div className="w-full px-[0.1rem] h-[2.125rem] rounded-lg border border-[#E0E0E0] items-center flex gap-4">
          <p className="text-[0.5rem] ml-2 overflow-hidden whitespace-nowrap text-ellipsis">
            {imageUrl}
          </p>

          <CopyToClipboard text={imageUrl} onCopy={() => setCopied(true)}>
            <button className="h-[1.875rem] text-white basis-[4.375rem] shrink-0 grow-0 w-[4.375rem] text-[0.5rem] rounded-lg bg-primary-blue cursor-pointer">
              {copied ? "Copied" : "Copy Link"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </section>
  );
};

export default PreviewImage;
