import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import './App.css'
import Faculty from "./components/FacultyPage/Faculty";
// import TestGame from "./components/TestGame/TestGame";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Faculty />
      {/* <TestGame /> */}
    </div>
  );
}

export default App;
