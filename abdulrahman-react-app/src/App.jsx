import "./App.css";
import Clicker from "./components/Clicker";
import Greeting from "./components/Greeting"; // ✅ import Greeting
import Header from "./components/Header";
import ShowHide from "./components/Hide_Show";
import { Tiriye } from "./components/counter";
import  Inputter  from "./components/Inputter";
import WelcomeMessage from "./components/WelcomeMessage";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";


function App() {
  return (
    <>
      <ShowHide />
      <Header />
      <Inputter />
      <Dashboard isLoggedIn={false} />
      <Notification isLoggedIn={false} />
      <WelcomeMessage isLoggedIn={true} />
      <Greeting name="abdulrahman" surname="mohammed" />
      <Clicker />
      <Greeting name="abdulrahman" surname="mohammed" />
      <Tiriye />
    </>
  );
}

export default App;
