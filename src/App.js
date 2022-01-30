import { Box } from "@mui/system";

import NavBar from "./components/NavBar";
import ImageFeed from "./components/ImageList";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box m={2}>
        <Typography variant="h3">Explore</Typography>
        <ImageFeed />
      </Box>
    </div>
  );
}

export default App;
