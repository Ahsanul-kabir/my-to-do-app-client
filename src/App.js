import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import ToDo from "./Components/Pages/ToDo/ToDo";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todoapp" element={
          <RequireAuth>
            <ToDo />
          </RequireAuth>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
