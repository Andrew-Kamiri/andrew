import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Toggle from "./pages/toggle/Toggle";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toggle" element={<Toggle />} />
      </Routes>
    </div>
  );
}

export default App;
