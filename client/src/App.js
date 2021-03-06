import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import Addnotes from './pages/Dashboard/Addnotes/Addnotes';
import Allnotes from "./pages/Dashboard/Allnotes/Allnotes";
import Subscription from "./pages/Home/Subscription/Subscription";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/addnote" element={<PrivateRoute><Addnotes></Addnotes></PrivateRoute>}></Route>
          <Route path="/allnotes" element={<PrivateRoute><Allnotes></Allnotes></PrivateRoute>}></Route>
          <Route path="/mysubscription" element={<PrivateRoute><Subscription></Subscription></PrivateRoute>}></Route>
          <Route path="/home" element={<PrivateRoute><Home></Home></PrivateRoute>}></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
