import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import MangeTask from "./Components/Pages/MangeTask/MangeTask";
import ToDo from "./Components/Pages/ToDo/ToDo";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todoapp" element={
          <RequireAuth>
            <ToDo />
          </RequireAuth>
        }
        />
        <Route path="/managetask" element={
          <RequireAuth>
            <MangeTask />
          </RequireAuth>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
