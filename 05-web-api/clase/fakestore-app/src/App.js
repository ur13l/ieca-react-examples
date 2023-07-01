import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen flex flex-col">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/carrito" exact element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
