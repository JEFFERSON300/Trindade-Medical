import { HomePage } from "./pages/Home/Home.page";
import { LoginPage } from "./pages/Login/Login.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
