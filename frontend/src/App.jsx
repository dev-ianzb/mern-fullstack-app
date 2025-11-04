import { Button, useColorMode, Box } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={8}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  );
}

export default App;
