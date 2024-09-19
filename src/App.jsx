import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/not found/NotFound";
import Header from "./components/shared/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
