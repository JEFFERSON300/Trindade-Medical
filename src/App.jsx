import { HomePage } from "./pages/Home/Home.page";
import { LoginPage } from "./pages/Login/Login.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterPatientPage } from "./pages/RegisterPatient/RegisterPatient.page";
import { RegisterOfConsultPage } from "./pages/RegisterOfConsult/RegisterOfConsult.page";
import { RegisterOfExamPage } from "./pages/RegisterOfExam/RegisterOfExam.page";
// import { LocalStorageService } from "./services/User/LocalStorage.service";

// if (!LocalStorageService.get('users')) {
//   LocalStorageService.set('users', [
//     {
//       "id": 1,
//       "email": "jeffersonpedro300@gmail.com",
//       "password": "casa2014"
//     },
//   ] )
// }

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/exams" element={<RegisterOfExamPage />} />
          <Route path="/patients" element={<RegisterPatientPage />} />
          <Route path="/patients/:id" element={<RegisterPatientPage />} />
          <Route path="/consults" element={<RegisterOfConsultPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="*"
            element={
              <>
                <p>Página não existe</p>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
