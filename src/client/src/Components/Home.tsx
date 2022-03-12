import React from "react";
import Box from "@material-ui/core/Box";
import Slideshow from "../HomePage/Slideshow";

function Home() {
  return (
    <div className="Home">
      <Box title="Gallery">
        <Slideshow />
      </Box>
    </div>
  );
}

export default Home;
