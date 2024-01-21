import { Box } from "@mui/material";

import InputItemComponents from "./components/InputItemComponents";
import BestRerollChampions from "./components/BestRerollChampions";

function App() {
  return (
    <Box sx={{ width: "360px", margin: "0 auto" }}>
      <InputItemComponents />
      <BestRerollChampions />
    </Box>
  );
}

export default App;
