import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "../contexts/user.context";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Signup from "./Signup";
 
function App() {
 return (
	<Home/>
  //  <BrowserRouter>
  //    <UserProvider>
  //      <Routes>
  //        <Route exact path="/login" element={<Login />} />
  //        <Route exact path="/signup" element={<Signup />} />
  //        <Route element={<PrivateRoute />}>
  //          <Route exact path="/" element={<Home />} />
  //        </Route>
  //      </Routes>
  //    </UserProvider>
  //  </BrowserRouter>
 );
}
 
export default App;