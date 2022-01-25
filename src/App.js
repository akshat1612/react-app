import "./App.css";
import DataBase from "./components/database/DataBase";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <DataBase />
      </div>
    </>
  );
}

export default App;
