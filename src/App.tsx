import "./App.css";
import Container from "./components/atoms/container/container";
import Generator from "./components/organisms/generator";

function App() {
  return (
    <Container
      textAlign="center"
      backgroundColor="#282c34"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <Generator />
    </Container>
  );
}

export default App;
