import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import JobListing from "./pages/JobListing";

function Layout() {
  const location = useLocation();

  const hideHeaderRoutes = ["/login", "/signup"];
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<JobListing />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App h-screen bg-gradient-to-t from-[#1c014a] to-[#5c3c93] p-8">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
