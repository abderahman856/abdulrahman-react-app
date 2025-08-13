import "./App.css";
import Greeting from "./components/Greeting"; // ✅ import Greeting
import Header from "./components/Header";

function App() {
  return (
    <>
      <Greeting name="abdulrahman" surname="mohammed" />
      <Header />
    </>
  );
}

export default App;
