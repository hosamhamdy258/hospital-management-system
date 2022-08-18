import "./App.css";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="container">
      <h1 className="text-center mx-4">Welcome ! :)</h1>
      <div className="text-danger"></div>
      <div className="w-50 mx-auto">
        <AddUser />
      </div>
    </div>
  );
}

export default App;
