import React from "react";
import PreviewImage from "./components/PreviewImage";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <main className="min-h-screen h-full bg-primary font-poppins">
      {/* <IMageUpload /> */}
      <PreviewImage imageUrl="https://images.unsplash.com/photo-1648737966174-c5ef7b893fcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" />
    </main>
  );
}

export default App;
