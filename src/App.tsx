import React, { useState } from "react";
import IMageUpload from "./components/ImageUpload";
import PreviewImage from "./components/PreviewImage";

// eslint-disable-next-line require-jsdoc
function App() {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <main className="min-h-screen h-full bg-primary font-poppins">
      {imageUrl === "" ? (
        <IMageUpload setImageURl={setImageUrl} />
      ) : (
        <PreviewImage imageUrl={imageUrl} />
      )}
    </main>
  );
}

export default App;
