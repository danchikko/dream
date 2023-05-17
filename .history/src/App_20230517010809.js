import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import './App.css'
import Kafedra from "./components/FacultyPage/Kafedra";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Kafedra />
    </div>
  );
}

export default App;
